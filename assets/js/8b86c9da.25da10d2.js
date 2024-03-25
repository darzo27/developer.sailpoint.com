"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30446],{86011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"extensibility/transforms/operations/name-normalizer",id:"extensibility/transforms/operations/name-normalizer",title:"Name Normalizer",description:"Clean or standardize the spelling of strings coming in from source systems.",source:"@site/docs/extensibility/transforms/operations/name-normalizer.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/name-normalizer",permalink:"/docs/extensibility/transforms/operations/name-normalizer",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/name-normalizer.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"name-normalizer",title:"Name Normalizer",pagination_label:"Name Normalizer",sidebar_label:"Name Normalizer",sidebar_class_name:"nameNormalizer",keywords:["transforms","operations","name normalizer"],description:"Clean or standardize the spelling of strings coming in from source systems.",slug:"/extensibility/transforms/operations/name-normalizer",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Lower",permalink:"/docs/extensibility/transforms/operations/lower"},next:{title:"Random Alphanumeric",permalink:"/docs/extensibility/transforms/operations/random-alphanumeric"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Use the name normalizer transform to clean or standardize the spelling of strings coming in from source systems. The most common use for this transform is for names and other proper nouns, but the transform is not necessarily limited to those data elements."),(0,n.kt)("p",null,"The normalization logic within the transform handles a wide range of use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Proper casing/capitalization of names",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Any string containing either a space, a hyphen or an apostrophe - the transform splits these by that character and capitalizes the first character of each resulting substring."))),(0,n.kt)("li",{parentName:"ul"},'Special replacements of patterns that include "MC" and "MAC" (or case-based variations of those two strings)',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'The transform automatically converts "MC" to "Mc" and "MAC" to "Mac" when they are part of a patronymic last name.'))),(0,n.kt)("li",{parentName:"ul"},"Consistent capitalization of strings that are part of a toponymic surname or a generational suffix:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Convert "VON" to "von"'),(0,n.kt)("li",{parentName:"ul"},'Convert "DEL" to "del"'),(0,n.kt)("li",{parentName:"ul"},'Convert "OF" to "of"'),(0,n.kt)("li",{parentName:"ul"},'Convert "DE" to "de"'),(0,n.kt)("li",{parentName:"ul"},'Convert "LA" to "la"'),(0,n.kt)("li",{parentName:"ul"},'Convert "Y" to "y"'),(0,n.kt)("li",{parentName:"ul"},'Convert Roman numeral suffixes to all capitalized letters (e.g., "iii" becomes "III")')))),(0,n.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,n.kt)("p",null,"The name normalizer transform only requires the transform's ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"normalizeNames"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"This transform takes a static value and normalizes it to a consistent format."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "jOHN VON SmITh"\nOutput: "John von Smith"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "jOHN VON SmITh"\n      },\n      "type": "static"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,'This transform takes the user\'s "LastName" attribute from the "HR Source" and normalizes the name to a consistent format.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Dr. JOHN D. O\'BRIEN"\nOutput: "Dr. John D. O\'Brien"\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "LastName"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "normalizeNames",\n  "name": "Name Normalizer Transform"\n}\n')))}d.isMDXComponent=!0}}]);