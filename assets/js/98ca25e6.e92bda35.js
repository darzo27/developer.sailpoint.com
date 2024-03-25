"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50428],{65342:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>h,default:()=>T,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),l=t(58219),m=(t(62316),t(51039)),r=t.n(m),p=(t(82723),t(9487)),o=(t(41429),t(5397)),n=t(4667),d=t(9472),c=t(42425);const u={id:"patch-user-profiles",sidebar_label:"Update multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivEfZbjNC/uJmAf0iLDUqBdkDj7khrBmTpZbCVSPZJJDEP/vTjSSZw6y9xt/mDLvOfe7x5xBa4nxmCcPaughB6Dbq488Tm72rTkoYCKvGbTCwZKuOorDKS62AbTt6SiJx71Ga20s4HNPAbHiqlNdn1jejETcOGhvAZRUP2D+VkBTN8i+fDOVUsoV+mvYaqgDBypALFJNogI+741Olkdf/ESzgq8bqhDeQrLnqAEN/9COkABPUtuwZAXqbi9eXT7BEdmXEIBJlDn/9mMqTYwPrCxCyigdtxhgBJiNBUMRfa2I3Yd1K5wSzcYcpV31tnsxU1Gb2uRjZ00yN1ZYsiFXzcTZsNQQDChFY3N+RgdwJA/4sX3zvpcqIP9ffl5Pjyn9z3pQJV6gKrgFKpbbI2cpTmAn2i5s/RnDeX1dtdeihWG4u+BH9wchllO5Oil2N9hpS5yiGqkosV5m8LXrutbCrT3/wZ+ZlNVPojqa3H/Jajk5pTZsX9M4vilJM5sILbYqkviW2KVdNRIMYXIlirlrIq2QVu1VCm615Q0/U8l9/oGkbjcjuxEdeQ9Lkjl87mxCxUaUhlfAN2jFBpKuHTMS+VdR6ER1B3ZoO7Y2cXTLIrMPTKaBIGhgRLGz3mgAJ8K4VMvIrdQQhNC78vxeBXIog2fsKNhzzpLXd+6JdGedt0YewMF3CIbmYNMHI/wnF2NsZUlRN2RdltEOk1wZbEjhd6bhZRf5in64DpiyWUm8enIJixTgHNCJj6Jksr1bFN8KdXPcWyCHpshSUm2CQblGgTF+uH3B8aYuq9kVZDv35Yucn4EKak0+uKJq08f+rHFrdeZJuGwxl+O68nR6Pjtm7ejo+PJwWh+WOvRgf51clhPJljjBDa4cleFTcLcVWeLNXdVfIE61ww5zIYCjK2dlEBmKPf1zd7+3v7Ggn46vfioTs7PtgegIfUgVBqtmqe3aRoC1Jq8V2gr1bnK1Eslo+aiF+Z0kTV5ZaxKHSJ7a9jZjmyQNW2NJutTX2yaRfh4Nk0N7J0PHdoNyb9+mT/LZPVEDf/hepBLG+g+jPsWjU2vUVnI1Xp3r3+Ys1kBjfNBBKvVHD1dcTsMcvwtEsvCzJ42NO1LAQ1hRZxG9CstoYT3OfLRVNwLvI3pVvAjwQkFZ40TLaT4Kna2wT/nJ9P3f8iera83natEifFOhgvvoITP8BmgAJepNt2B5HwFLdpFxIXgs2H5fAcgGFka",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)"},h=void 0,f={unversionedId:"api/nerm/v1/patch-user-profiles",id:"api/nerm/v1/patch-user-profiles",title:"patch-user-profiles",description:"Update multiple user-profile contributor relationships",source:"@site/docs/api/nerm/v1/patch-user-profiles.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-user-profiles",permalink:"/docs/api/nerm/v1/patch-user-profiles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)",tags:[],version:"current",frontMatter:{id:"patch-user-profiles",sidebar_label:"Update multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivEfZbjNC/uJmAf0iLDUqBdkDj7khrBmTpZbCVSPZJJDEP/vTjSSZw6y9xt/mDLvOfe7x5xBa4nxmCcPaughB6Dbq488Tm72rTkoYCKvGbTCwZKuOorDKS62AbTt6SiJx71Ga20s4HNPAbHiqlNdn1jejETcOGhvAZRUP2D+VkBTN8i+fDOVUsoV+mvYaqgDBypALFJNogI+741Olkdf/ESzgq8bqhDeQrLnqAEN/9COkABPUtuwZAXqbi9eXT7BEdmXEIBJlDn/9mMqTYwPrCxCyigdtxhgBJiNBUMRfa2I3Yd1K5wSzcYcpV31tnsxU1Gb2uRjZ00yN1ZYsiFXzcTZsNQQDChFY3N+RgdwJA/4sX3zvpcqIP9ffl5Pjyn9z3pQJV6gKrgFKpbbI2cpTmAn2i5s/RnDeX1dtdeihWG4u+BH9wchllO5Oil2N9hpS5yiGqkosV5m8LXrutbCrT3/wZ+ZlNVPojqa3H/Jajk5pTZsX9M4vilJM5sILbYqkviW2KVdNRIMYXIlirlrIq2QVu1VCm615Q0/U8l9/oGkbjcjuxEdeQ9Lkjl87mxCxUaUhlfAN2jFBpKuHTMS+VdR6ER1B3ZoO7Y2cXTLIrMPTKaBIGhgRLGz3mgAJ8K4VMvIrdQQhNC78vxeBXIog2fsKNhzzpLXd+6JdGedt0YewMF3CIbmYNMHI/wnF2NsZUlRN2RdltEOk1wZbEjhd6bhZRf5in64DpiyWUm8enIJixTgHNCJj6Jksr1bFN8KdXPcWyCHpshSUm2CQblGgTF+uH3B8aYuq9kVZDv35Yucn4EKak0+uKJq08f+rHFrdeZJuGwxl+O68nR6Pjtm7ejo+PJwWh+WOvRgf51clhPJljjBDa4cleFTcLcVWeLNXdVfIE61ww5zIYCjK2dlEBmKPf1zd7+3v7Ggn46vfioTs7PtgegIfUgVBqtmqe3aRoC1Jq8V2gr1bnK1Eslo+aiF+Z0kTV5ZaxKHSJ7a9jZjmyQNW2NJutTX2yaRfh4Nk0N7J0PHdoNyb9+mT/LZPVEDf/hepBLG+g+jPsWjU2vUVnI1Xp3r3+Ys1kBjfNBBKvVHD1dcTsMcvwtEsvCzJ42NO1LAQ1hRZxG9CstoYT3OfLRVNwLvI3pVvAjwQkFZ40TLaT4Kna2wT/nJ9P3f8iera83natEifFOhgvvoITP8BmgAJepNt2B5HwFLdpFxIXgs2H5fAcgGFka",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)"},sidebar:"openApiSidebar",previous:{title:"Create multiple user-profile contributor relationships",permalink:"/docs/api/nerm/v1/create-user-profiles"},next:{title:"Delete multiple user-profile contributor relationships",permalink:"/docs/api/nerm/v1/delete-user-profiles"}},k={},b=[{value:"Request",id:"request",level:2}],g={toc:b},y="wrapper";function T(e){let{components:a,...t}=e;return(0,i.kt)(y,(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Update multiple user-profile contributor relationships"),(0,i.kt)(r(),{method:"patch",path:"/user_profiles",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"Update multiple user-profile contributor relationships"),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)(p.Z,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("strong",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"user_profiles"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"relationship_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",schema:{type:"string",enum:["owner","contributor"]},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(d.default,{mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"UserProfiles",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"user_profiles"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(n.Z,{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"user_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"relationship_type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",schema:{type:"string",enum:["owner","contributor"]},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,i.kt)(c.default,{label:"Job",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(n.Z,{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"job_status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"},mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200},mdxType:"SchemaItem"}))))))),(0,i.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request - unable to complete.")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(d.default,{mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,i.kt)(c.default,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,i.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.default,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(c.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,i.kt)(c.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}T.isMDXComponent=!0}}]);