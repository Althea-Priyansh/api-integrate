

// // import { getPatientResource } from "./data.js";

import { createConditionEncounterMap, getConditionEncounters, getEncounterDataById, getEncountersWithDiagnosis, getObservationMappedData, getPatientResource } from "./data.js";

// import axios from 'axios';
// import { createHash, createHmac } from 'crypto';
// import moment from 'moment';

// const accessKeyId = 'AKIARKNYZVRLCYSY4O7J';
// const secretAccessKey = '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';

// // Generate the current date and time in the required format
// const amzDate = moment().utc().format('YYYYMMDDTHHmmss[Z]');

// // Generate the AWS signature for the request
// function generateSignature(requestMethod, canonicalUri, canonicalQueryParams, requestHeaders, requestBody) {
//   const algorithm = 'AWS4-HMAC-SHA256';
//   const service = 'healthlake';
//   const region = 'us-east-1';
//   const host = 'healthlake.us-east-1.amazonaws.com';

//   const credentialScope = `${amzDate.substring(0, 8)}/${region}/${service}/aws4_request`;

//   const signedHeaders = Object.keys(requestHeaders)
//     .map(key => key.toLowerCase())
//     .sort()
//     .join(';');

//   const canonicalHeaders = Object.entries(requestHeaders)
//     .map(([key, value]) => `${key.toLowerCase()}:${value.trim()}`)
//     .sort()
//     .join('\n');

//   const canonicalRequest = `${requestMethod}\n${canonicalUri}\n${canonicalQueryParams}\n${canonicalHeaders}\n\n${signedHeaders}\n${createHash('sha256').update(requestBody || '').digest('hex')}`;

//   const stringToSign = `${algorithm}\n${amzDate}\n${credentialScope}\n${createHash('sha256').update(canonicalRequest).digest('hex')}`;

//   const dateKey = createHmac('sha256', `AWS4${secretAccessKey}`).update(amzDate.substr(0, 8)).digest();
//   const dateRegionKey = createHmac('sha256', dateKey).update(region).digest();
//   const dateRegionServiceKey = createHmac('sha256', dateRegionKey).update(service).digest();
//   const signingKey = createHmac('sha256', dateRegionServiceKey).update('aws4_request').digest();

//   const signature = createHmac('sha256', signingKey).update(stringToSign).digest('hex');

//   return `${algorithm} Credential=${accessKeyId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
// }

// // Construct the request headers
// const headers = {
//   'X-Amz-Date': amzDate,
// };

// // Generate the AWS signature and append it to the Authorization header
// headers.Authorization = generateSignature('GET', '/datastore/e29e3e903fb0edcfeec69f86dff51caa/r4//Patient', 'name=bart', headers);

// // Construct the query parameters
// const params = {
//   name: 'bart',
// };

// // Set the request options
// const requestOptions = {
//   method: 'GET',
//   headers,
//   params,
//   url: 'https://healthlake.us-east-1.amazonaws.com/datastore/e29e3e903fb0edcfeec69f86dff51caa/r4//Patient',
// };

// // Send the request using Axios
// axios(requestOptions)
//   .then(response => console.log(response.data))
//   .catch(error => console.log('error', error));



const reqData = getPatientResource();
// console.log(reqData)
const mappedData = Array.from(reqData).map(([key, value]) => {
  return {
    resourceType: key,
    objects: value
  };
});
// console.log(mappedData)

// console.log(mappedData)
const {objects} = mappedData.find((item)=>item.resourceType==="Condition")
const {objects:encounterObjects} = mappedData.find((item)=>item.resourceType==="Encounter")
// console.log(encounterObjects)

// console.log(objects)

// const {objects} = mappedData.find((item)=>item.resourceType==="Observation")

  const reqCondition = getObservationMappedData(objects)
// console.log(reqCondition)

const mappedConditions = Array.from(reqCondition).map(([key, value]) => {
  return {
    conditionType: key,
    objects: value
  };
});

// console.log(mappedConditions)

const hashMappedConditionEncounters = createConditionEncounterMap(mappedConditions,encounterObjects)
const mappedConditionEncounters = Array.from(hashMappedConditionEncounters).map(([key, value]) => {
  return {
    conditionEncounterType:key ,
    objects: value
  };
});

// console.log(mappedConditionEncounters)
console.log(getEncountersWithDiagnosis(mappedConditions,encounterObjects))


// const diabetes = mappedConditions.find((i)=>i.conditionType==="angina")
// // console.log(diabetes.objects[0].resource.id)
// const id = diabetes.objects[0].resource.id
// console.log(getEncounterDataById(encounterObjects,id).length)
// const mappedObservations = Array.from(reqObservation).map(([key, value]) => {
//   return {
//     observationType: key,
//     objects: value
//   };
// });

// console.log(mappedObservations)
