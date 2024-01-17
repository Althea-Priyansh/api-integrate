
// const querystring = require('querystring');
// const url = require('url');
import querystring from 'query-string';
import crypto from 'crypto-js'
import url from 'url'


function generateCanonicalRequest(method, path, query, headers) {
  const sortedHeaders = Object.keys(headers)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map(key => `${key.toLowerCase()}:${headers[key]}`)
    .join('\n');
  
  const canonicalRequest = [
    method.toUpperCase(),
    path,
    querystring.stringify(query),
    sortedHeaders,
    '',
    'host',
    crypto.createHash('sha256').digest('hex')
  ].join('\n');

  return canonicalRequest;
}

function generateStringToSign(timestamp, region, service, canonicalRequest) {
  const date = timestamp.slice(0, 8);
  const scope = `${date}/${region}/${service}/aws4_request`;
  
  const stringToSign = [
    'AWS4-HMAC-SHA256',
    timestamp,
    scope,
    crypto.createHash('sha256').update(canonicalRequest).digest('hex')
  ].join('\n');

  return stringToSign;
}

function calculateSignature(secretAccessKey, timestamp, region, service, stringToSign) {
  const kDate = crypto.createHmac('sha256', `AWS4${secretAccessKey}`).update(timestamp.slice(0, 8)).digest();
  const kRegion = crypto.createHmac('sha256', kDate).update(region).digest();
  const kService = crypto.createHmac('sha256', kRegion).update(service).digest();
  const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest();
  
  const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');
  
  return signature;
}

function generateAuthorizationHeader(accessKeyId, secretAccessKey, timestamp, region, service, signature) {
  const credential = `${accessKeyId}/${timestamp.slice(0, 8)}/${region}/${service}/aws4_request`;
  const authorizationHeader = `AWS4-HMAC-SHA256 Credential=${credential}, SignedHeaders=host, Signature=${signature}`;
  
  return authorizationHeader;
}

function generateAuthenticationHeader(accessKeyId, secretAccessKey, url) {
  const { protocol, host, pathname, query } = url;
  const method = 'GET';
  const timestamp = new Date().toISOString().replace(/[:\-]|\.\d{3}/g, '');
  const region = 'us-east-1';
  const service = 'healthlake';

  const headers = {
    host: host,
  };

  const canonicalRequest = generateCanonicalRequest(method, pathname, query, headers);
  const stringToSign = generateStringToSign(timestamp, region, service, canonicalRequest);
  const signature = calculateSignature(secretAccessKey, timestamp, region, service, stringToSign);
  const authorizationHeader = generateAuthorizationHeader(accessKeyId, secretAccessKey, timestamp, region, service, signature);

  return { Authorization: authorizationHeader };
}

// Example usage
const accessKeyId = 'AKIARKNYZVRLCYSY4O7J';
const secretAccessKey = 'nrTnm7gbAt5sbGDfcjKTmMkceCjjhVGkUNs4yXdH';
const urlStr = 'https://healthlake.us-east-1.amazonaws.com/datastore/e29e3e903fb0edcfeec69f86dff51caa/r4//Patient?name=bart';

const urlObj = url.parse(urlStr);
const authenticationHeader = generateAuthenticationHeader(accessKeyId, secretAccessKey, urlObj);

console.log(authenticationHeader);
