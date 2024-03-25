"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27933],{78260:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>b,default:()=>f,frontMatter:()=>c,metadata:()=>k,toc:()=>h});var s=t(87462),i=(t(67294),t(3905)),m=t(58219),l=(t(62316),t(51039)),p=t.n(l),o=(t(82723),t(9487)),n=(t(41429),t(5397)),r=t(4667),d=t(9472),u=t(42425);const c={id:"post-attribute-options",sidebar_label:"Create multiple new option based attribute values",hide_title:!0,hide_table_of_contents:!0,api:"eJytVV1v2zoM/SsCn52kn9mdgfuQDb1ABmwd2uy+ZMHAyHSizZY8iWobBP7vA+V8rU0LdJgfbFmkpMND8mgNriGPbJwdF5BD4wKPmL2ZR6brRuYDZFBQ0N6kX8jhvSdkUnWs2DQVKUv3yiWjmmOgQuF2B3WHVSTZgXERIJ/C3uQ2u88y8PQzUuB3rlhBvk6/xlMBOftIGWhnmSyLCZumMjrhHXwPgmYNQS+pRhnxqiHIwc2/k2bIoPESHRsKYrX0bXf6t+3p+1XoPa4gA8NUh1fuZoqDBYG9sQvIoHS+RoYcYjQFtBm4DYOPXds2AzZcydQj9qHtHiEpNM6G7vSzkxP5/J6Xq4eGNFOhtq6KnULJgZG5xDG8gk5n6bqEfPqUimfABmiz550/uDm0sy6Yi2P432GhbjqYqqeixXmVQtCubipi6v9d8GObmPkgS1/C/b94pWOuvHc+7IK4PBbE2DJ5i5W6JX9HXqU1qqc8cfSWCuWsinaJtqioUPSgqaPuVcG9XJokRz5FNlI1hYALUt383NiF4iWpzj8DekAhGnK4dd6vVHA18VK87smyuvcu1eqmHsXmtpohGJCXkMPgaJtlEBIdIWUk+gpyWDI3IR8M1kwWLX/Cmtq+dZbqpnIror529QAbAxncoTdSDV1f7ty7GEuMlXQZ6pq0e6JWk+SuLNakMASzkCRIVcXAriYvEc0En47e8CoBnBN68qMoEU1nh+ZbyUGH49BplxIJSqJNbpBvnCDbDP7bSsLE/SCrWN7/rlz03TApgaT7Zq+IV9usPKdg0yNiBOcl/nNZDi96l29O3/QuLodnvfl5qXtn+u3wvBwOscQh7BVpp0SzNgNjSyfHSb4662n/pH9y0BKfrm4+qtHn8VOyl6S2RqXRqjmpGDrCUWsKQaEtVO0KU66UpNXFIHrlotcUlLEqsUH2znhna7IsjVEZTTZ0HKS8w8fxJJElxVejPbD8ye30WxDrfR/+2VXXVQLTAw+aCo2oS1fy602TTI9ncpbBUnopn8J6Ldt/8VXbyvTPSF4qc7ZvhVSYGSwJC/KpCH7QShB32HsTQSHuVUy322M9EcXrVoy0aNCLvrODdv98fTuRet5c1rUrZI3He8jSO4ev8BV2tZVaJc2voUK7iLgQ/25feX4Bk1P8jA==",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new option based attribute values' (post-attribute-options)"},b=void 0,k={unversionedId:"api/nerm/v1/post-attribute-options",id:"api/nerm/v1/post-attribute-options",title:"post-attribute-options",description:"Create multiple new option based attribute values",source:"@site/docs/api/nerm/v1/post-attribute-options.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/post-attribute-options",permalink:"/docs/api/nerm/v1/post-attribute-options",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new option based attribute values' (post-attribute-options)",tags:[],version:"current",frontMatter:{id:"post-attribute-options",sidebar_label:"Create multiple new option based attribute values",hide_title:!0,hide_table_of_contents:!0,api:"eJytVV1v2zoM/SsCn52kn9mdgfuQDb1ABmwd2uy+ZMHAyHSizZY8iWobBP7vA+V8rU0LdJgfbFmkpMND8mgNriGPbJwdF5BD4wKPmL2ZR6brRuYDZFBQ0N6kX8jhvSdkUnWs2DQVKUv3yiWjmmOgQuF2B3WHVSTZgXERIJ/C3uQ2u88y8PQzUuB3rlhBvk6/xlMBOftIGWhnmSyLCZumMjrhHXwPgmYNQS+pRhnxqiHIwc2/k2bIoPESHRsKYrX0bXf6t+3p+1XoPa4gA8NUh1fuZoqDBYG9sQvIoHS+RoYcYjQFtBm4DYOPXds2AzZcydQj9qHtHiEpNM6G7vSzkxP5/J6Xq4eGNFOhtq6KnULJgZG5xDG8gk5n6bqEfPqUimfABmiz550/uDm0sy6Yi2P432GhbjqYqqeixXmVQtCubipi6v9d8GObmPkgS1/C/b94pWOuvHc+7IK4PBbE2DJ5i5W6JX9HXqU1qqc8cfSWCuWsinaJtqioUPSgqaPuVcG9XJokRz5FNlI1hYALUt383NiF4iWpzj8DekAhGnK4dd6vVHA18VK87smyuvcu1eqmHsXmtpohGJCXkMPgaJtlEBIdIWUk+gpyWDI3IR8M1kwWLX/Cmtq+dZbqpnIror529QAbAxncoTdSDV1f7ty7GEuMlXQZ6pq0e6JWk+SuLNakMASzkCRIVcXAriYvEc0En47e8CoBnBN68qMoEU1nh+ZbyUGH49BplxIJSqJNbpBvnCDbDP7bSsLE/SCrWN7/rlz03TApgaT7Zq+IV9usPKdg0yNiBOcl/nNZDi96l29O3/QuLodnvfl5qXtn+u3wvBwOscQh7BVpp0SzNgNjSyfHSb4662n/pH9y0BKfrm4+qtHn8VOyl6S2RqXRqjmpGDrCUWsKQaEtVO0KU66UpNXFIHrlotcUlLEqsUH2znhna7IsjVEZTTZ0HKS8w8fxJJElxVejPbD8ye30WxDrfR/+2VXXVQLTAw+aCo2oS1fy602TTI9ncpbBUnopn8J6Ldt/8VXbyvTPSF4qc7ZvhVSYGSwJC/KpCH7QShB32HsTQSHuVUy322M9EcXrVoy0aNCLvrODdv98fTuRet5c1rUrZI3He8jSO4ev8BV2tZVaJc2voUK7iLgQ/25feX4Bk1P8jA==",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create multiple new option based attribute values' (post-attribute-options)"},sidebar:"openApiSidebar",previous:{title:"Get option based attribute values",permalink:"/docs/api/nerm/v1/get-attribute-options"},next:{title:"Update multiple option based attribute values",permalink:"/docs/api/nerm/v1/patch-attribute-options"}},y={},h=[{value:"Request",id:"request",level:2}],g={toc:h},v="wrapper";function f(e){let{components:a,...t}=e;return(0,i.kt)(v,(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Create multiple new option based attribute values"),(0,i.kt)(p(),{method:"post",path:"/ne_attribute_options",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"Create multiple new option based attribute values"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"ne_attribute_options"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"option",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(d.default,{mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"AttributeOptions",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"ne_attribute_options"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(r.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"option",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,i.kt)(u.default,{label:"Job",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(r.Z,{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"job_status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"},mdxType:"SchemaItem"})))),(0,i.kt)(r.Z,{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200},mdxType:"SchemaItem"}))))))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request - unable to complete.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(d.default,{mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(r.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,i.kt)(u.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(r.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(u.default,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,i.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}f.isMDXComponent=!0}}]);