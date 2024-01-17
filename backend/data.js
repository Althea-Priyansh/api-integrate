export const patientData = {
    "resourceType": "Bundle",
    "id": "d7023d38-13df-11ee-8f92-02a798f50c34",
    "type": "searchset",
    "timestamp": "2023-06-26T05:09:07Z",
    "total": 81,
    "link": [
        {
            "relation": "self",
            "url": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Patient/50732/$everything"
        }
    ],
    "entry": [
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Patient/50732",
            "resource": {
                "resourceType": "Patient",
                "name": [
                    {
                        "use": "official",
                        "family": "Davis",
                        "given": [
                            "Mike"
                        ],
                        "text": "Mike Davis"
                    }
                ],
                "gender": "male",
                "birthDate": "1972-12-13",
                "identifier": [
                    {
                        "system": "https://clinfhir.com/fhir/NamingSystem/identifier",
                        "value": "michael.davis@cchmc.org"
                    }
                ],
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Mike Davis</div>"
                },
                "id": "50732",
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "match"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50736",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Asthma</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "mild to moderate"
                        }
                    ],
                    "text": "mild to moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "195917001",
                            "system": "https://snomed.info/sct",
                            "display": "asthma"
                        }
                    ],
                    "text": "asthma"
                },
                "onsetAge": {
                    "value": 14,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50736",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50737",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Diabetes</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "73211009",
                            "system": "https://snomed.info/sct",
                            "display": "diabetes"
                        }
                    ],
                    "text": "diabetes"
                },
                "onsetAge": {
                    "value": 60,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50737",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50738",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Hypertension</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "255604002",
                            "system": "https://snomed.info/sct",
                            "display": "mild"
                        }
                    ],
                    "text": "Mild"
                },
                "code": {
                    "coding": [
                        {
                            "code": "38341003",
                            "system": "https://snomed.info/sct",
                            "display": "hypertension"
                        }
                    ],
                    "text": "hypertension"
                },
                "onsetAge": {
                    "value": 68,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50738",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50739",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Depression</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "Moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "35489007",
                            "system": "https://snomed.info/sct",
                            "display": "depression"
                        }
                    ],
                    "text": "depression"
                },
                "onsetAge": {
                    "value": 74,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50739",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50740",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Neuropathic pain</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "247389009",
                            "system": "https://snomed.info/sct",
                            "display": "neuropathic pain"
                        }
                    ],
                    "text": "neuropathic pain"
                },
                "onsetAge": {
                    "value": 75,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50740",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50741",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Rheumatoid Arthritis</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "Moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "69896004",
                            "system": "https://snomed.info/sct",
                            "display": "rheumatoid arthritis"
                        }
                    ],
                    "text": "rheumatoid arthritis - both hands"
                },
                "bodySite": [
                    {
                        "coding": [
                            {
                                "code": "12861001",
                                "system": "https://snomed.info/sct",
                                "display": "both hands"
                            }
                        ],
                        "text": "both hands"
                    }
                ],
                "evidence": [
                    {
                        "code": [
                            {
                                "coding": [
                                    {
                                        "code": "57676002",
                                        "system": "https://snomed.info/sct",
                                        "display": "Painful Joint"
                                    }
                                ],
                                "text": "Painful joint"
                            }
                        ]
                    }
                ],
                "onsetAge": {
                    "value": 72,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50741",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50742",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Rheumatoid arthritis - left elbow</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "mild to moderate"
                        }
                    ],
                    "text": "Diagnosis"
                },
                "code": {
                    "coding": [
                        {
                            "code": "69896004",
                            "system": "https://snomed.info/sct",
                            "display": "rheumatoid arthritis"
                        }
                    ],
                    "text": "rheumatoid arthritis - left elbow"
                },
                "bodySite": [
                    {
                        "coding": [
                            {
                                "code": "1927002",
                                "system": "https://snomed.info/sct",
                                "display": "left elbow"
                            }
                        ],
                        "text": "left elbow"
                    }
                ],
                "evidence": [
                    {
                        "code": [
                            {
                                "coding": [
                                    {
                                        "code": "57676002",
                                        "system": "https://snomed.info/sct",
                                        "display": "Painful Joint"
                                    }
                                ],
                                "text": "Painful joint"
                            }
                        ]
                    }
                ],
                "onsetAge": {
                    "value": 74,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50742",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50743",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>GERD</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "Moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "235595009",
                            "system": "https://snomed.info/sct",
                            "display": "GERD"
                        }
                    ],
                    "text": "GERD"
                },
                "onsetAge": {
                    "value": 66,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50743",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50744",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Hypercholesterolaemia</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "Moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "13644009",
                            "system": "https://snomed.info/sct",
                            "display": "high cholesterol"
                        }
                    ],
                    "text": "high cholesterol"
                },
                "onsetAge": {
                    "value": 68,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50744",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50745",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Onychomycosis</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "24484000",
                            "system": "https://snomed.info/sct",
                            "display": "severe"
                        }
                    ],
                    "text": "severe"
                },
                "code": {
                    "coding": [
                        {
                            "code": "414941998",
                            "system": "https://snomed.info/sct",
                            "display": "onychomycosis"
                        }
                    ],
                    "text": "onychomycosis"
                },
                "onsetAge": {
                    "value": 77,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "id": "50745",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Condition/50746",
            "resource": {
                "resourceType": "Condition",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Angina</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "category": [
                    {
                        "coding": [
                            {
                                "code": "14657009",
                                "system": "https://snomed.info/sct",
                                "display": "Diagnosis"
                            }
                        ],
                        "text": "Diagnosis"
                    }
                ],
                "severity": {
                    "coding": [
                        {
                            "code": "6736007",
                            "system": "https://snomed.info/sct",
                            "display": "moderate"
                        }
                    ],
                    "text": "Moderate"
                },
                "code": {
                    "coding": [
                        {
                            "code": "194818000",
                            "system": "https://snomed.info/sct",
                            "display": "angina"
                        }
                    ],
                    "text": "angina"
                },
                "onsetAge": {
                    "value": 76,
                    "code": "a",
                    "system": "https://unitsofmeasure.org"
                },
                "evidence": [
                    {
                        "code": [
                            {
                                "coding": [
                                    {
                                        "code": "29857009",
                                        "system": "https://snomed.info/sct",
                                        "display": "Chest Pain"
                                    }
                                ],
                                "text": "Chest Pain"
                            }
                        ]
                    }
                ],
                "id": "50746",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/AllergyIntolerance/50747",
            "resource": {
                "resourceType": "AllergyIntolerance",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2022-11-07T18:04:15Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"https://www.w3.org/1999/xhtml\">Ibuprofen causes urticaria</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "type": "allergy",
                "code": {
                    "coding": [
                        {
                            "system": "https://snomed.info/sct",
                            "code": "387207008",
                            "display": "Ibuprofen"
                        }
                    ]
                },
                "patient": {
                    "reference": "Patient/50732"
                },
                "recordedDate": "2016-03-07",
                "recorder": {
                    "reference": "Practitioner/50735"
                },
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "https://snomed.info/sct",
                                        "code": "126485001",
                                        "display": "Urticaria"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "id": "50747"
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/AllergyIntolerance/50748",
            "resource": {
                "resourceType": "AllergyIntolerance",
                "meta": {
                    "versionId": "1",
                    "lastUpdated": "2022-11-07T18:04:15Z"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"https://www.w3.org/1999/xhtml\">eggs causes hives</div>"
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-clinical",
                            "code": "active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "https://terminology.hl7.org/CodeSystem/condition-ver-status",
                            "code": "confirmed"
                        }
                    ]
                },
                "type": "allergy",
                "category": [
                    "food"
                ],
                "code": {
                    "coding": [
                        {
                            "system": "https://snomed.info/sct",
                            "code": "91930004",
                            "display": "Allergy to eggs"
                        }
                    ]
                },
                "patient": {
                    "reference": "Patient/50732"
                },
                "onsetAge": {
                    "value": 4,
                    "unit": "year",
                    "system": "https://unitsofmeasure.org",
                    "code": "a"
                },
                "recordedDate": "2018-03-07",
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "https://snomed.info/sct",
                                        "code": "247472004",
                                        "display": "Hives"
                                    }
                                ]
                            },
                            {
                                "coding": [
                                    {
                                        "system": "https://snomed.info/sct",
                                        "code": "422587007",
                                        "display": "Nausea"
                                    }
                                ]
                            },
                            {
                                "coding": [
                                    {
                                        "system": "https://snomed.info/sct",
                                        "code": "422400008",
                                        "display": "Vomiting"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "id": "50748",
                "recorder": {
                    "reference": "Practitioner/50734"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50749",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>salbutamol inhaler 2 puffs every 4 hours as required</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "320176004",
                            "system": "https://snomed.info/sct",
                            "display": " salbutamol 100micrograms/inhaler "
                        }
                    ],
                    "text": "salbutamol 100micrograms/inhaler"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "195967001",
                                "system": "https://snomed.info/sct",
                                "display": "asthma (disorder)"
                            }
                        ],
                        "text": "asthma"
                    }
                ],
                "dosage": [
                    {
                        "text": "2 puffs every 4 hours as needed",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 4,
                                "periodUnit": "h"
                            }
                        },
                        "asNeededBoolean": true,
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 2,
                                    "system": "https://snomed.info/sct",
                                    "unit": "puffs",
                                    "code": "415215001"
                                }
                            }
                        ]
                    }
                ],
                "id": "50749",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50750",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>aspirin 81mg once daily</div>"
                },
                "contained": [
                    {
                        "resourceType": "Medication",
                        "id": "med1",
                        "code": {
                            "coding": [
                                {
                                    "code": "370167008",
                                    "system": "https://snomed.info/sct",
                                    "display": "aspirin 81mg e/c tablet "
                                }
                            ],
                            "text": "aspirin 81mg e/c tablet"
                        }
                    }
                ],
                "medicationReference": {
                    "reference": "#med1",
                    "display": "aspirin 81mg e/c tablet"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "49436004",
                                "system": "https://snomed.info/sct",
                                "display": "atrial fibrillation (disorder)"
                            }
                        ],
                        "text": "atrial fibrillation"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 2,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50750",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50751",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>beclomethasone 2 puffs twice daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "376733004",
                            "system": "https://snomed.info/sct",
                            "display": "beclomethasone dipropionate 40mcg aerosol"
                        }
                    ],
                    "text": "beclomethasone dipropionate 40mcg aerosol"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "195967001",
                                "system": "https://snomed.info/sct",
                                "display": "asthma (disorder)"
                            }
                        ],
                        "text": "asthma"
                    }
                ],
                "dosage": [
                    {
                        "text": "2 puffs twice daily",
                        "timing": {
                            "repeat": {
                                "frequency": 2,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "asNeededBoolean": false,
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 2,
                                    "system": "https://snomed.info/sct",
                                    "unit": "puffs",
                                    "code": "415215001"
                                }
                            }
                        ]
                    }
                ],
                "id": "50751",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50752",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>carvedilol 25 mg twice daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "318632005",
                            "system": "https://snomed.info/sct",
                            "display": "carvedilol 25 mg"
                        }
                    ],
                    "text": "carvedilol 25 mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "38341003",
                                "system": "https://snomed.info/sct",
                                "display": "hypertension (disorder)"
                            }
                        ],
                        "text": "hypertension"
                    }
                ],
                "dosage": [
                    {
                        "text": "twice daily",
                        "timing": {
                            "repeat": {
                                "frequency": 2,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50752",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50753",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>chlortalidone 15 mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "376321007",
                            "system": "https://snomed.info/sct",
                            "display": "chlortalidone 15 mg"
                        }
                    ],
                    "text": "chlortalidone 15 mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "38341003",
                                "system": "https://snomed.info/sct",
                                "display": "hypertension (disorder)"
                            }
                        ],
                        "text": "hypertension"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50753",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50754",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>citalopram 20 mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "321987003",
                            "system": "https://snomed.info/sct",
                            "display": "citalopram 20 mg"
                        }
                    ],
                    "text": "citalopram 20 mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "35489007",
                                "system": "https://snomed.info/sct",
                                "display": "depression (disorder)"
                            }
                        ],
                        "text": "depression"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50754",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50755",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>gabapentin 600mg twice daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "323021008",
                            "system": "https://snomed.info/sct",
                            "display": "gabapentin 600mg"
                        }
                    ],
                    "text": "gabapentin 600mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "247398009",
                                "system": "https://snomed.info/sct",
                                "display": "neuropathic pain (disorder)"
                            }
                        ],
                        "text": "neuropathic pain"
                    }
                ],
                "dosage": [
                    {
                        "text": "twice daily",
                        "timing": {
                            "repeat": {
                                "frequency": 2,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50755",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50756",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>insulin glargine 100units/mL 28 units nocte</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "400847007",
                            "system": "https://snomed.info/sct",
                            "display": "insulin glargine 100units/mL injection"
                        }
                    ],
                    "text": "insulin glargine 100units/mL injection"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "73211009",
                                "system": "https://snomed.info/sct",
                                "display": "diabetes (disorder)"
                            }
                        ],
                        "text": "diabetes"
                    }
                ],
                "dosage": [
                    {
                        "text": "28 units before bed",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 28,
                                    "system": "https://snomed.info/sct",
                                    "unit": "unit dose",
                                    "code": "408102007"
                                }
                            }
                        ]
                    }
                ],
                "id": "50756",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50757",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>losartan 100mg + hydrochlorothiazide 12.5mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "444639002",
                            "system": "https://snomed.info/sct",
                            "display": "losartan 100mg + hydrochlorothiazide 12.5mg"
                        }
                    ],
                    "text": "losartan 100mg + hydrochlorothiazide 12.5mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "38341003",
                                "system": "https://snomed.info/sct",
                                "display": "hypertension (disorder)"
                            }
                        ],
                        "text": "hypertension"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50757",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50758",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>metformin 1000mg twice daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "411533003",
                            "system": "https://snomed.info/sct",
                            "display": "metformin 1000mg"
                        }
                    ],
                    "text": "metformin 1000mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "73211009",
                                "system": "https://snomed.info/sct",
                                "display": "diabetes (disorder)"
                            }
                        ],
                        "text": "diabetes"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab twice daily",
                        "timing": {
                            "repeat": {
                                "frequency": 2,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50758",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50759",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>naproxen 500mg twice daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "329839005",
                            "system": "https://snomed.info/sct",
                            "display": "naproxen 500mg e/c tablet"
                        }
                    ],
                    "text": "naproxen 500mg e/c tablet"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "69896004",
                                "system": "https://snomed.info/sct",
                                "display": "rheumatoid arthritis (disorder)"
                            }
                        ],
                        "text": "rheumatoid arthritis"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab twice daily",
                        "timing": {
                            "repeat": {
                                "frequency": 2,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50759",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50760",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>omeprazole 40mg daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "407848004",
                            "system": "https://snomed.info/sct",
                            "display": "omeprazole 40mg e/c tablet"
                        }
                    ],
                    "text": "omeprazole 40mg e/c tablet "
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "235595009",
                                "system": "https://snomed.info/sct",
                                "display": "GERD (disorder)"
                            }
                        ],
                        "text": "Gastro Oesophageal reflux"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50760",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50761",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>prednisone 20mg 2 tabs/day</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "325456002",
                            "system": "https://snomed.info/sct",
                            "display": "prednisone 20mg"
                        }
                    ],
                    "text": "prednisone 20mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "195967001",
                                "system": "https://snomed.info/sct",
                                "display": "asthma (disorder)"
                            }
                        ],
                        "text": "asthma"
                    }
                ],
                "dosage": [
                    {
                        "text": "2 tabs once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "asNeededBoolean": true,
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 2,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50761",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50762",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>simvastatin 40mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "429374003",
                            "system": "https://snomed.info/sct",
                            "display": "simvastatin 40mg"
                        }
                    ],
                    "text": "simvastatin 40mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "13644009",
                                "system": "https://snomed.info/sct",
                                "display": "high cholesterol"
                            }
                        ],
                        "text": "high cholesterol"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "asNeededBoolean": true,
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50762",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50763",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>terbinafine 250mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "324718007",
                            "system": "https://snomed.info/sct",
                            "display": "terbinafine 250mg"
                        }
                    ],
                    "text": "terbinafine 250mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "414941008",
                                "system": "https://snomed.info/sct",
                                "display": "onychomycosis"
                            }
                        ],
                        "text": "onychomycosis"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "asNeededBoolean": true,
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50763",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50764",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>zolpidem 5mg sublingual tablet, 1 nocte</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "442160008",
                            "system": "https://snomed.info/sct",
                            "display": "zolpidem 5mg sublingual tablet"
                        }
                    ],
                    "text": "zolpidem 5mg sublingual tablet"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "193462001",
                                "system": "https://snomed.info/sct",
                                "display": "insomnia"
                            }
                        ],
                        "text": "insomnia"
                    }
                ],
                "dosage": [
                    {
                        "text": "1 tab before bed",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 28,
                                    "system": "https://snomed.info/sct",
                                    "unit": "unit dose",
                                    "code": "408102007"
                                }
                            }
                        ]
                    }
                ],
                "id": "50764",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50765",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>lisinopril 20mg mane</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "318860005",
                            "system": "https://snomed.info/sct",
                            "display": "lisinopril 20mg"
                        }
                    ],
                    "text": "lisinopril 20mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "38341003",
                                "system": "https://snomed.info/sct",
                                "display": "hypertension (disorder)"
                            }
                        ],
                        "text": "hypertension"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50765",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50766",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>isosorbide mononitrate 20mg once daily</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "319134001",
                            "system": "https://snomed.info/sct",
                            "display": "isosorbide mononitrate 20mg"
                        }
                    ],
                    "text": "isosorbide mononitrate 20mg"
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "194828000",
                                "system": "https://snomed.info/sct",
                                "display": "angina"
                            }
                        ],
                        "text": "hypertension"
                    }
                ],
                "dosage": [
                    {
                        "text": "once daily at bedtime",
                        "timing": {
                            "repeat": {
                                "frequency": 1,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50766",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/MedicationStatement/50767",
            "resource": {
                "resourceType": "MedicationStatement",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>buspirone 5mg TDS</div>"
                },
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "code": "321323009",
                            "system": "https://snomed.info/sct",
                            "display": "buspirone 5mg"
                        }
                    ]
                },
                "status": "active",
                "reasonCode": [
                    {
                        "coding": [
                            {
                                "code": "19748006",
                                "system": "https://snomed.info/sct",
                                "display": "anxiety disorder"
                            }
                        ],
                        "text": "anxiety disorder"
                    }
                ],
                "dosage": [
                    {
                        "text": "3 times daily",
                        "timing": {
                            "repeat": {
                                "frequency": 3,
                                "period": 1,
                                "periodUnit": "d"
                            }
                        },
                        "doseAndRate": [
                            {
                                "doseQuantity": {
                                    "value": 1,
                                    "system": "https://snomed.info/sct",
                                    "unit": "tablet",
                                    "code": "428673006"
                                }
                            }
                        ]
                    }
                ],
                "id": "50767",
                "subject": {
                    "reference": "Patient/50732"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/List/50768",
            "resource": {
                "resourceType": "List",
                "id": "50768",
                "mode": "snapshot",
                "status": "current",
                "entry": [
                    {
                        "item": {
                            "reference": "Condition/50736"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50737"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50738"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50739"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50740"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50741"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50742"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50743"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50744"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50745"
                        }
                    },
                    {
                        "item": {
                            "reference": "Condition/50746"
                        }
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "code": "problems",
                            "system": "https://hl7.org/fhir/list-example-use-codes"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Problem list</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/List/50769",
            "resource": {
                "resourceType": "List",
                "id": "50769",
                "mode": "snapshot",
                "status": "current",
                "entry": [
                    {
                        "item": {
                            "reference": "AllergyIntolerance/50747"
                        }
                    },
                    {
                        "item": {
                            "reference": "AllergyIntolerance/50748"
                        }
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "code": "allergies",
                            "system": "https://hl7.org/fhir/list-example-use-codes"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Allergies list</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/List/50770",
            "resource": {
                "resourceType": "List",
                "id": "50770",
                "mode": "snapshot",
                "status": "current",
                "entry": [
                    {
                        "item": {
                            "reference": "MedicationStatement/50749"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50750"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50751"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50752"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50753"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50754"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50755"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50756"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50757"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50758"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50759"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50760"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50761"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50762"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50763"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50764"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50765"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50766"
                        }
                    },
                    {
                        "item": {
                            "reference": "MedicationStatement/50767"
                        }
                    }
                ],
                "code": {
                    "coding": [
                        {
                            "code": "medications",
                            "system": "https://hl7.org/fhir/list-example-use-codes"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Medications list</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50771",
            "resource": {
                "resourceType": "Encounter",
                "id": "50771",
                "status": "finished",
                "diagnosis": [],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>undefined</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-09-17T17:04:14.142Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50734",
                            "display": "Joseph Jones"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50772",
            "resource": {
                "resourceType": "Encounter",
                "id": "50772",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50746"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50745"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50744"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50739"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Sep 17th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-09-25T17:04:14.143Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50734",
                            "display": "Joseph Jones"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50773",
            "resource": {
                "resourceType": "Encounter",
                "id": "50773",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50737"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50746"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Sep 25th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-06T17:04:14.144Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50733",
                            "display": "Mary Smith"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50774",
            "resource": {
                "resourceType": "Encounter",
                "id": "50774",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50742"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 6th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-12T17:04:14.144Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50734",
                            "display": "Joseph Jones"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50775",
            "resource": {
                "resourceType": "Encounter",
                "id": "50775",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50737"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 12th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-28T17:04:14.145Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50733",
                            "display": "Mary Smith"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50776",
            "resource": {
                "resourceType": "Encounter",
                "id": "50776",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50746"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50737"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50740"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 28th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-06T17:04:14.146Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50733",
                            "display": "Mary Smith"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50777",
            "resource": {
                "resourceType": "Encounter",
                "id": "50777",
                "status": "finished",
                "diagnosis": [
                    {
                        "condition": {
                            "reference": "Condition/50742"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50744"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50740"
                        }
                    },
                    {
                        "condition": {
                            "reference": "Condition/50739"
                        }
                    }
                ],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 6th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-20T17:04:14.146Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50733",
                            "display": "Mary Smith"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50778",
            "resource": {
                "resourceType": "Encounter",
                "id": "50778",
                "status": "finished",
                "diagnosis": [],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 20th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-24T17:04:14.146Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50735",
                            "display": "Karen Kobold"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50779",
            "resource": {
                "resourceType": "Encounter",
                "id": "50779",
                "status": "finished",
                "diagnosis": [],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 24th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-28T17:04:14.146Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50733",
                            "display": "Mary Smith"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Encounter/50780",
            "resource": {
                "resourceType": "Encounter",
                "id": "50780",
                "status": "finished",
                "diagnosis": [],
                "subject": {
                    "reference": "Patient/50732"
                },
                "class": {
                    "system": "https://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB"
                },
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'>Oct 28th 2022 for Sore throat</div>"
                },
                "reasonCode": [
                    {
                        "text": "Sore throat"
                    }
                ],
                "type": [
                    {
                        "text": "Primary care visit"
                    }
                ],
                "period": {
                    "start": "2022-10-10T17:04:14.147Z"
                },
                "participant": [
                    {
                        "individual": {
                            "reference": "Practitioner/50735",
                            "display": "Karen Kobold"
                        }
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50781",
            "resource": {
                "resourceType": "Observation",
                "id": "50781",
                "status": "final",
                "valueQuantity": {
                    "value": 37,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-11-07T13:04:14-05:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50777"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 37 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50782",
            "resource": {
                "resourceType": "Observation",
                "id": "50782",
                "status": "final",
                "valueQuantity": {
                    "value": 87,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-11-07T13:04:14-05:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50774"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 87 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50783",
            "resource": {
                "resourceType": "Observation",
                "id": "50783",
                "status": "final",
                "valueQuantity": {
                    "value": 30,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-11-07T13:04:14-05:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50777"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 30 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50784",
            "resource": {
                "resourceType": "Observation",
                "id": "50784",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-11-07T13:04:14-05:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50774"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50785",
            "resource": {
                "resourceType": "Observation",
                "id": "50785",
                "status": "final",
                "valueQuantity": {
                    "value": 75.7,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-11-07T13:04:14-05:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50776"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 75.7 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50786",
            "resource": {
                "resourceType": "Observation",
                "id": "50786",
                "status": "final",
                "valueQuantity": {
                    "value": 36.7,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-10-31T13:04:14-04:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50778"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 36.7 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50787",
            "resource": {
                "resourceType": "Observation",
                "id": "50787",
                "status": "final",
                "valueQuantity": {
                    "value": 86,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-10-31T13:04:14-04:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50775"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 86 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50788",
            "resource": {
                "resourceType": "Observation",
                "id": "50788",
                "status": "final",
                "valueQuantity": {
                    "value": 31,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-10-31T13:04:14-04:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50777"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 31 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50789",
            "resource": {
                "resourceType": "Observation",
                "id": "50789",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-10-31T13:04:14-04:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50778"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50790",
            "resource": {
                "resourceType": "Observation",
                "id": "50790",
                "status": "final",
                "valueQuantity": {
                    "value": 73.2,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-10-31T13:04:14-04:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50771"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 73.2 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50791",
            "resource": {
                "resourceType": "Observation",
                "id": "50791",
                "status": "final",
                "valueQuantity": {
                    "value": 36.6,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-10-24T13:04:14-04:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50775"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 36.6 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50792",
            "resource": {
                "resourceType": "Observation",
                "id": "50792",
                "status": "final",
                "valueQuantity": {
                    "value": 84,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-10-24T13:04:14-04:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50773"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 84 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50793",
            "resource": {
                "resourceType": "Observation",
                "id": "50793",
                "status": "final",
                "valueQuantity": {
                    "value": 28,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-10-24T13:04:14-04:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50775"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 28 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50794",
            "resource": {
                "resourceType": "Observation",
                "id": "50794",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-10-24T13:04:14-04:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50772"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50795",
            "resource": {
                "resourceType": "Observation",
                "id": "50795",
                "status": "final",
                "valueQuantity": {
                    "value": 77.4,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-10-24T13:04:14-04:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50773"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 77.4 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50796",
            "resource": {
                "resourceType": "Observation",
                "id": "50796",
                "status": "final",
                "valueQuantity": {
                    "value": 36.9,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-10-17T13:04:14-04:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50776"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 36.9 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50797",
            "resource": {
                "resourceType": "Observation",
                "id": "50797",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-10-17T13:04:14-04:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50771"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 90 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50798",
            "resource": {
                "resourceType": "Observation",
                "id": "50798",
                "status": "final",
                "valueQuantity": {
                    "value": 28,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-10-17T13:04:14-04:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50772"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 28 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50799",
            "resource": {
                "resourceType": "Observation",
                "id": "50799",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-10-17T13:04:14-04:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50778"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50800",
            "resource": {
                "resourceType": "Observation",
                "id": "50800",
                "status": "final",
                "valueQuantity": {
                    "value": 71.5,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-10-17T13:04:14-04:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50776"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 71.5 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50801",
            "resource": {
                "resourceType": "Observation",
                "id": "50801",
                "status": "final",
                "valueQuantity": {
                    "value": 36.7,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-10-10T13:04:14-04:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50780"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 36.7 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50802",
            "resource": {
                "resourceType": "Observation",
                "id": "50802",
                "status": "final",
                "valueQuantity": {
                    "value": 86,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-10-10T13:04:14-04:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50773"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 86 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50803",
            "resource": {
                "resourceType": "Observation",
                "id": "50803",
                "status": "final",
                "valueQuantity": {
                    "value": 31,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-10-10T13:04:14-04:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50779"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 31 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50804",
            "resource": {
                "resourceType": "Observation",
                "id": "50804",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-10-10T13:04:14-04:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50772"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50805",
            "resource": {
                "resourceType": "Observation",
                "id": "50805",
                "status": "final",
                "valueQuantity": {
                    "value": 72.2,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-10-10T13:04:14-04:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50775"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 72.2 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50806",
            "resource": {
                "resourceType": "Observation",
                "id": "50806",
                "status": "final",
                "valueQuantity": {
                    "value": 36.6,
                    "unit": "C"
                },
                "effectiveDateTime": "2022-10-03T13:04:14-04:00",
                "code": {
                    "text": "Body Temperature",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8310-5"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50733"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50778"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Body Temperature, 36.6 C</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50807",
            "resource": {
                "resourceType": "Observation",
                "id": "50807",
                "status": "final",
                "valueQuantity": {
                    "value": 80,
                    "unit": "bpm"
                },
                "effectiveDateTime": "2022-10-03T13:04:14-04:00",
                "code": {
                    "text": "Heart Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8867-4"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50771"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Heart Rate, 80 bpm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50808",
            "resource": {
                "resourceType": "Observation",
                "id": "50808",
                "status": "final",
                "valueQuantity": {
                    "value": 30,
                    "unit": "resp/min"
                },
                "effectiveDateTime": "2022-10-03T13:04:14-04:00",
                "code": {
                    "text": "Respiratory Rate",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "9279-1"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50780"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Respiratory Rate, 30 resp/min</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50809",
            "resource": {
                "resourceType": "Observation",
                "id": "50809",
                "status": "final",
                "valueQuantity": {
                    "value": 90,
                    "unit": "cm"
                },
                "effectiveDateTime": "2022-10-03T13:04:14-04:00",
                "code": {
                    "text": "Height",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "8302-2"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50734"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50780"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Height, 90 cm</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Observation/50810",
            "resource": {
                "resourceType": "Observation",
                "id": "50810",
                "status": "final",
                "valueQuantity": {
                    "value": 80,
                    "unit": "Kg"
                },
                "effectiveDateTime": "2022-10-03T13:04:14-04:00",
                "code": {
                    "text": "Weight",
                    "coding": [
                        {
                            "system": "https://loinc.org",
                            "code": "3141-9"
                        }
                    ]
                },
                "subject": {
                    "reference": "Patient/50732"
                },
                "performer": [
                    {
                        "reference": "Practitioner/50735"
                    }
                ],
                "encounter": {
                    "reference": "Encounter/50778"
                },
                "text": {
                    "status": "generated",
                    "div": "<div  xmlns='https://www.w3.org/1999/xhtml'>Weight, 80 Kg</div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Appointment/50811",
            "resource": {
                "resourceType": "Appointment",
                "id": "50811",
                "status": "pending",
                "description": "Investigate Angina",
                "start": "2022-11-11T13:04:14-05:00",
                "end": "2022-11-11T13:19:14-05:00",
                "minutesDuration": 15,
                "participant": [
                    {
                        "actor": {
                            "reference": "Practitioner/50734"
                        },
                        "status": "accepted"
                    },
                    {
                        "actor": {
                            "reference": "Patient/50732"
                        },
                        "status": "accepted"
                    }
                ],
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'><div>Investigate Angina</div><div>Clarence cardiology clinic</div></div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Appointment/50812",
            "resource": {
                "resourceType": "Appointment",
                "id": "50812",
                "status": "pending",
                "description": "Routine checkup",
                "start": "2022-11-14T13:04:14-05:00",
                "end": "2022-11-14T13:19:14-05:00",
                "minutesDuration": 15,
                "participant": [
                    {
                        "actor": {
                            "reference": "Practitioner/50734"
                        },
                        "status": "accepted"
                    },
                    {
                        "actor": {
                            "reference": "Patient/50732"
                        },
                        "status": "accepted"
                    }
                ],
                "text": {
                    "status": "generated",
                    "div": "<div xmlns='https://www.w3.org/1999/xhtml'><div>Routine checkup</div><div>Dr Dave</div></div>"
                },
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Practitioner/50735",
            "resource": {
                "resourceType": "Practitioner",
                "id": "50735",
                "name": [
                    {
                        "text": "Karen Kobold"
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Practitioner/50734",
            "resource": {
                "resourceType": "Practitioner",
                "id": "50734",
                "name": [
                    {
                        "text": "Joseph Jones"
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        },
        {
            "fullUrl": "https://fhir.s37vcloskatg.static-test-account.isccloud.io/Practitioner/50733",
            "resource": {
                "resourceType": "Practitioner",
                "id": "50733",
                "name": [
                    {
                        "text": "Mary Smith"
                    }
                ],
                "meta": {
                    "lastUpdated": "2022-11-07T18:04:15Z",
                    "versionId": "1"
                }
            },
            "search": {
                "mode": "include"
            }
        }
    ]
}



export const getPatientResource = () => {
    const resourceData = patientData.entry;
    const reqData = resourceData.reduce((map, item) => {
      const resourceType = item.resource.resourceType;
      if (!map.has(resourceType)) {
        map.set(resourceType, []);
      }
      map.get(resourceType).push(item);
      return map;
    }, new Map());
  
    return reqData;
  };
  

  export const getObservationMappedData=(objects)=>{
    const requiredObservation = objects.reduce((map,item)=>{
        const observation = item.resource.code.text
        if (!map.has(observation)) {
            map.set(observation,[])
        }
        map.get(observation).push(item)
        return map;
    },new Map())
    return requiredObservation
  }


//   export const getConditionMap=(objects)=>{
//     const requiredCondition = objects.reduce((map,item)=>{
//         const condition = item.resource.code.text
        
//     })
//   }

// export const getEncounterDataById=(encounterObjects,conditionId)=>{
//     const encounterDataById = encounterObjects.filter((item)=>(
//         item?.diagnosis?.filter((i)=>(
//             i?.condition?.reference?.substring(i.condition?.reference?.lastIndexOf("/")+1)===conditionId.toString
//         ))
//     ))
//     return encounterDataById
// }


export const getEncounterDataById = (encounterObjects,conditionId) => {
    const filteredEncounterObjects = encounterObjects?.filter((encounter) =>
    encounter?.resource?.diagnosis?.some(
      (diagnosis) =>
        diagnosis?.condition?.reference?.substring(diagnosis?.condition?.reference?.lastIndexOf("/") + 1) === conditionId.toString()
    )
  );
  return filteredEncounterObjects
  };
  

    export const  getConditionEncounters=(conditions, encounters)=>{
    const conditionIds = conditions.map((condition) => condition?.objects[0]?.resource?.id);
    
    const conditionEncounters = [];
    
    encounters.forEach((encounter) => {
      encounter?.resource?.diagnosis?.forEach((diagnosis) => {
        const conditionId = diagnosis?.condition?.reference?.split('/')[1];
        
        if (conditionIds.includes(conditionId)) {
          const conditionObject = conditions.find((condition) => condition.objects[0].resource.id === conditionId);
          
          const conditionEncounter = {
            condition: conditionObject.objects[0].resource,
            encounter: encounter.resource
          };
          
          conditionEncounters.push(conditionEncounter);
        }
      });
    });
    
    return conditionEncounters;
  }
  
  export function createConditionEncounterMap(conditions, encounters) {
    const conditionMap = new Map();
    
    conditions.forEach((condition) => {
      const conditionName = condition.conditionType;
      const conditionId = condition.objects[0].resource.id;
      
      const relatedEncounters = [];
      
      encounters.forEach((encounter) => {
        encounter.resource.diagnosis.forEach((diagnosis) => {
          const conditionIdDiag = diagnosis.condition.reference.split('/')[1];
          
          if (conditionId === conditionIdDiag) {
            relatedEncounters.push(encounter.resource);
          }
        });
      });
      
      conditionMap.set(conditionName, relatedEncounters);
    });
    
    return conditionMap;
  }
  

  export function getEncountersWithDiagnosis(conditions, encounters) {
    const conditionMap = new Map();
  
    // Step 1: Build a map of condition IDs and encounters
    for (const condition of conditions) {
      const conditionId = condition.objects[0].resource.id;
      const conditionType = condition.conditionType;
      conditionMap.set(conditionId, { name: conditionType, encounters: [] });
    }
  
    // Step 2: Populate encounters for each condition
    for (const encounter of encounters) {
      const diagnosis = encounter.resource.diagnosis;
      for (const diagnosisItem of diagnosis) {
        const conditionId = diagnosisItem.condition.reference.split('/')[1];
        if (conditionMap.has(conditionId)) {
          conditionMap.get(conditionId).encounters.push(encounter.resource);
        }
      }
    }
  
    // Step 3: Sort encounters within each condition by start period
    for (const [conditionId, condition] of conditionMap) {
      condition.encounters.sort((a, b) => new Date(a.period.start) - new Date(b.period.start));
    }
  
    // Step 4: Flatten the condition map into an array with multiple objects for each encounter
    const result = [];
    for (const [conditionId, condition] of conditionMap) {
      const { name, encounters } = condition;
      for (const encounter of encounters) {
        result.push({ name, encounter });
      }
    }
  
    // Step 5: Return the resulting array
    return result;
  }

  
  