"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8161],{98004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={id:"get-reference-identity-attribute",title:"Get Reference Identity Attribute",pagination_label:"Get Reference Identity Attribute",sidebar_label:"Get Reference Identity Attribute",sidebar_class_name:"getReferenceIdentityAttribute",keywords:["transforms","operations","get","reference","identity","attribute"],description:"Get another user's identity attribute.",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"extensibility/transforms/operations/get-reference-identity-attribute",id:"extensibility/transforms/operations/get-reference-identity-attribute",title:"Get Reference Identity Attribute",description:"Get another user's identity attribute.",source:"@site/docs/extensibility/transforms/operations/get-reference-identity-attribute.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",permalink:"/docs/extensibility/transforms/operations/get-reference-identity-attribute",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/get-reference-identity-attribute.md",tags:[{label:"Transforms",permalink:"/docs/tags/transforms"},{label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"get-reference-identity-attribute",title:"Get Reference Identity Attribute",pagination_label:"Get Reference Identity Attribute",sidebar_label:"Get Reference Identity Attribute",sidebar_class_name:"getReferenceIdentityAttribute",keywords:["transforms","operations","get","reference","identity","attribute"],description:"Get another user's identity attribute.",slug:"/extensibility/transforms/operations/get-reference-identity-attribute",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Get End of String",permalink:"/docs/extensibility/transforms/operations/get-end-of-string"},next:{title:"Identity Attribute",permalink:"/docs/extensibility/transforms/operations/identity-attribute"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Use the get reference identity attribute transform as an out-of-the-box rule provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the identity attribute of another user from within a given identity's calculation. For your convenience, the transform allows you to use \"manager\" as a referential lookup to the target identity."),(0,i.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,i.kt)("p",null,"The structure of a get reference identity transform requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the referenced rule to be the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cloud Services Deployment Utility")," rule built by SailPoint. Additionally, you must set the ",(0,i.kt)("inlineCode",{parentName:"p"},"operation")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"getReferenceIdentityAttribute")," and specify a ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," attribute that correlates to the identity whose attribute is desired. Last, you must include the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes required for all transforms:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "manager",\n    "attributeName": "email"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n')),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Required Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"rule"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attributes.name")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud Services Deployment Utility"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"operation")," - This must always be set to ",(0,i.kt)("inlineCode",{parentName:"li"},"getReferenceIdentityAttribute"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"uid")," - This is the SailPoint User Name (uid) value of the identity whose attribute is desired.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For your convenience, you can use the \"manager\" keyword to look up the user's manager and then get that manager's identity attribute."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"This transform gets the user's manager's email address."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "manager",\n    "attributeName": "email"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa0"),(0,i.kt)("p",null,'This transform gets the alternate phone number for the user identified as "corporate.admin".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "name": "Cloud Services Deployment Utility",\n    "operation": "getReferenceIdentityAttribute",\n    "uid": "corporate.admin",\n    "attributeName": "phone"\n  },\n  "type": "rule",\n  "name": "Get Reference Identity Attribute Transform"\n}\n')))}m.isMDXComponent=!0}}]);