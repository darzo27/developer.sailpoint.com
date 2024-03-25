"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8948],{9841:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"concatenation",title:"Concatenation",pagination_label:"Concatenation",sidebar_label:"Concatenation",sidebar_class_name:"concatenation",keywords:["transforms","operations","concatenation"],description:"Join two or more string values into a combined output.",slug:"/extensibility/transforms/operations/concatenation",tags:["Transforms","Transform Operations"]},s=void 0,i={unversionedId:"extensibility/transforms/operations/concatenation",id:"extensibility/transforms/operations/concatenation",title:"Concatenation",description:"Join two or more string values into a combined output.",source:"@site/docs/extensibility/transforms/operations/concatenation.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/concatenation",permalink:"/docs/extensibility/transforms/operations/concatenation",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/concatenation.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"concatenation",title:"Concatenation",pagination_label:"Concatenation",sidebar_label:"Concatenation",sidebar_class_name:"concatenation",keywords:["transforms","operations","concatenation"],description:"Join two or more string values into a combined output.",slug:"/extensibility/transforms/operations/concatenation",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Base64 Encode",permalink:"/docs/extensibility/transforms/operations/base64-encode"},next:{title:"Conditional",permalink:"/docs/extensibility/transforms/operations/conditional"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},m="wrapper";function p(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use the concatenation transform to join two or more string values into a combined output. The concatenation transform often joins elements such as first and last name into a full display name, but it has many other uses."),(0,o.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,o.kt)("p",null,"The concatenation transform requires an array list of ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," that need to be joined. These values can be static strings or the return values of other nested transforms."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": ["John", " ", "Smith"]\n  },\n  "type": "concat",\n  "name": "Concatenation transform"\n}\n')),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Required Attributes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"concat"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"values")," - This is the array of items to join."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,'This transform joins the user\'s first name from the "HR Source" with his/her last name, adds a space between them, and then adds a parenthetical note that the user is a contractor at the end.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "FirstName"\n        },\n        "type": "accountAttribute"\n      },\n      " ",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "LastName"\n        },\n        "type": "accountAttribute"\n      },\n      " (Contractor)"\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"This transform joins the user's job title with his/her job code value and adds a hyphen between those two pieces of data."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobTitle"\n        },\n        "type": "accountAttribute"\n      },\n      "-",\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "JobCode"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "concat",\n  "name": "Test Concat Transform"\n}\n')))}p.isMDXComponent=!0}}]);