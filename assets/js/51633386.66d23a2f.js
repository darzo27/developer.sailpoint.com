"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[83928],{56405:(e,t,i)=>{i.d(t,{Z:()=>E});var a=i(67294),r=i(57273),n=i(44996);const T={zoomIn:"zoomIn_Zi5X",mermaidContainer:"mermaidContainer_KO9S"};function E(e){let{children:t,diagram:i}=e;r.Z.contentLoaded();const[E,c]=a.useState(0),[s,I]=a.useState({cursor:"grab",clickX:0,clickY:0,offsetX:0,offsetY:0}),[o,h]=a.useState({x:0,y:0}),[_,d]=a.useState(!1);function u(e){e.screenX?(I({cursor:"grabbing",clickX:e.screenX,clickY:e.screenY,offsetX:o.x,offsetY:o.y}),h({x:o.x,y:o.y})):(I({cursor:"grabbing",clickX:e.changedTouches[0].screenX,clickY:e.changedTouches[0].screenY,offsetX:o.x,offsetY:o.y}),h({x:o.x,y:o.y}))}function f(e){I({cursor:"grab",clickX:0,clickY:0})}function m(e){"grabbing"===s.cursor&&(e.screenX?h({x:s.clickX-e.screenX+s.offsetX,y:s.clickY-e.screenY+s.offsetY}):h({x:s.clickX-e.changedTouches[0].screenX+s.offsetX,y:s.clickY-e.changedTouches[0].screenY+s.offsetY}))}let l,D;return a.useEffect((()=>{let e=!1;return setTimeout((()=>{e||d(!0)}),100),()=>{e=!0}})),!0===_?(D=a.createElement("div",null),l=a.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{position:"relative",top:-o.y+"px",left:-o.x+"px",width:"calc(100% + "+E+"px)",maxHeight:"1000px"}},i)):(D=a.createElement("div",null,"Diagram Loading ..."),l=a.createElement("div",{id:"mermaid",draggable:"false",className:"mermaid",style:{visibility:"hidden",position:"relative",top:-o.y+"px",left:-o.x+"px",width:"calc(100% + "+E+"px)",maxHeight:"1000px"}},i)),a.createElement("div",null,a.createElement("img",{className:T.zoomIn,onClick:e=>{c(E+300)},src:(0,n.default)("/icons/magnifying-glass-plus-regular.svg")}),a.createElement("img",{className:T.zoomIn,onClick:e=>function(e){c(0),I({cursor:"grab",clickX:e.screenX,clickY:e.screenY,offsetX:0,offsetY:0}),h({x:0,y:0})}(e),src:(0,n.default)("/icons/house-regular.svg")}),a.createElement("img",{className:T.zoomIn,onClick:e=>{c(E-300)},src:(0,n.default)("/icons/magnifying-glass-minus-regular.svg")}),a.createElement("div",{style:{cursor:s.cursor},className:T.mermaidContainer,onMouseMove:e=>m(e),onTouchMove:e=>m(e),onMouseDown:e=>u(e),onTouchStart:e=>u(e),onMouseUp:e=>f(),onTouchEnd:e=>f(),onMouseLeave:e=>f()},D,l))}},33304:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>E,default:()=>_,frontMatter:()=>T,metadata:()=>c,toc:()=>I});var a=i(87462),r=(i(67294),i(3905)),n=i(56405);const T={id:"access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",pagination_label:"Access Intelligence Center ER Diagram",sidebar_label:"Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center ER Diagram",slug:"/reporting/aic-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},E="Access Intelligence Center ER Diagram",c={unversionedId:"reporting/access-intelligence-center/access-intelligence-center-er-diagram",id:"reporting/access-intelligence-center/access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",description:"Access Intelligence Center ER Diagram",source:"@site/docs/reporting/access-intelligence-center/identity-er-diagram.md",sourceDirName:"reporting/access-intelligence-center",slug:"/reporting/aic-er-diagram",permalink:"/docs/reporting/aic-er-diagram",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/reporting/access-intelligence-center/identity-er-diagram.md",tags:[{label:"AccessIntelligenceCenter",permalink:"/docs/tags/access-intelligence-center"},{label:"AIC",permalink:"/docs/tags/aic"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"access-intelligence-center-er-diagram",title:"Access Intelligence Center ER Diagram",pagination_label:"Access Intelligence Center ER Diagram",sidebar_label:"Entity Relationship Diagram",sidebar_position:1,sidebar_class_name:"AccessIntelligenceCenter",keywords:["data listing","data share","secure data sharing"],description:"Access Intelligence Center ER Diagram",slug:"/reporting/aic-er-diagram",tags:["AccessIntelligenceCenter","AIC"],hide_table_of_contents:!0},sidebar:"openApiSidebar",previous:{title:"Access Intelligence Center",permalink:"/docs/reporting/access-intelligence-center"},next:{title:"Access Intelligence Center Audit ER Diagram",permalink:"/docs/reporting/aic-audit-er-diagram"}},s={},I=[],o={toc:I},h="wrapper";function _(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-intelligence-center-er-diagram"},"Access Intelligence Center ER Diagram"),(0,r.kt)(n.Z,{diagram:'erDiagram IDENTITY_ATRIBUTE { varchar IDENTITY_ID "This contains the unique identifier for the identity" varchar City "Identity\u2019s City" varchar Cloud_Lifecycle_State "Identity\u2019s Cloud Lifecycle State" varchar Company "Identity Company" varchar CompanyName "Identity CompanyName" varchar Cost_Center "Identity Cost Center" varchar Country "Identity Country" varchar Department "Identity Department" varchar Job "Identity Job" varchar Location "Identity Location" varchar Postal_Code "Identity Postal Code" varchar Region "Identity Region" varchar State "Identity State" varchar Title "Identity Title" } IDENTITY_ROLES_FULL { varchar IDENTITY_ID "This contains the unique identifier for the identity" varchar ROLE_ID "This contains the unique identifier for the role" varchar ROLE_NAME "The name of the role" varchar ROLE_DISPLAY_NAME "The user friendly name for the role" } IDENTITY { varchar ID PK "The primary Key" varchar TENANT_ID "Unique ID of customer organization" varchar IDENTITY_ID "This contains the unique identifier for the identity" timestamp IDENTITY_CREATED "Identity created Date" timestamp IDENTITY_UPDATED "Identity modified Date" varchar NAME "The name of identity" varchar DISPLAY_NAME "This is the displayable name usually First Name Last Name" varchar MANAGERS_NAME "Managers name for the identity" varchar EMAIL "Identity email" varchar STATUS "Identity status" varchar JOB_TITLE "Identity job title" varchar LOCATION "Identity location" varchar LOCATION_CODE "Identity location code" varchar DEPARTMENT "Identity department" varchar IDENTITY_CREATED_MONTH_SORT "A field to sort charts based on the month an Identity was created" number IDENTITY_CREATED_WEEK_SORT "A field to sort charts based on the week an Identity was created" timestamp SYNC_DATE "The date the data was synced to the table" } ACCESS_PROFILES_FULL { varchar IDENTITY_ID\xa0"This contains the unique identifier for the identity" varchar ACCESS_PROFILE_ID "The unique identifier of access profile" varchar ACCESS_PROFILE_NAME "The access profile name" varchar ACCESS_PROFILE_DISPLAY_NAME "The user friendly name of access profile" varchar ACCESS_PROFILE_DESCRIPTION "The description of the access profile" } IDENTITY_ACCOUNTS_FULL { varchar IDENTITY_ID\xa0"This contains the unique identifier for the identity" varchar ACCOUNT_ID "The unique identifier of the account" varchar NATIVE_IDENTITY "The native name of the identity" varchar ACCOUNT_DISPLAY_NAME\xa0"The user friendly name of the account" varchar ACCOUNT_SOURCE_ID "The unique identifier of the account source" varchar ACCOUNT_SOURCE__DISPLAY_NAME "The user friendly name of the account source" varchar ACCOUNT_SOURCE_TYPE "The type of the account source" } IDENTITY_APPS_FULL { varchar IDENTITY_ID "This contains the unique identifier for the identity often an ID" varchar APP_ID\xa0"Unique identifier of the app" varchar APP_DISPLAY_NAME\xa0"The user friendly name of the app" } IDENTITY_ENTITLEMENTS_FULL { varchar IDENTITY_ID "This contains the unique identifier for the identity often an ID" varchar ENTITLEMENT_ID\xa0"The unique identifier associated to the entitlement" varchar ENTITLEMENT_DISPLAY_NAME\xa0"The entitlement display Name" timestamp ENTITLEMENT_CREATED_DATE\xa0"Identity created date" timestamp ENTITLEMENT_UPDATED_DATE "Identity modified date" varchar ENTITLEMENT_ATTRIBUTE\xa0"The attribute associated to entitlement" varchar ENTITLEMENT_VALUE\xa0"The value of the attribute" varchar ENTITLEMENT_SOURCE_DISPLAY_NAME\xa0"The source display name to which entitlement is associated" }    IDENTITY_REQUEST_WITH_DURATION { varchar ACCESS_REQUEST_ID "This contains the unique identifier for the access request" varchar DURATION_HOURS "The duration in hours from the create date of an access request to the end date of the access request" }  CERTIFICATION_STATS { varchar CERTIFICATION_ID "This contains the unique identifier for the certification" timestamp DUE_DATE "The date a certification is due" timestamp FINISHED_DATE "the date a certification was completed" number DAYS_LATE "The number of days after a certfications due date that a certification was finished" number HOURS_LATE "The number of hours after a certfications due date that a certification was finished" varchar CERTIFIER_DISPLAY_NAME "The display name of the Certifier" }    CERTIFICATION_ITEM { varchar CERTIFICATION_ID "This contains the unique identifier for the certification" varchar REVIEWER_ID "The identity id of the certifier" varchar IDENTITY_ID "This contains the unique identifier for the Identity" varchar ID "The unique identifier of the Certification Item" timestamp CREATED_DATE "The date a certification was created" timestamp UPDATED_DATE "The date a certification was last updated" timestamp DELETED_DATE "The date a certification was deleted" varchar APPLICATION_ID "the unique identifier of the application" varchar REVIEWED_ID "the unique identifier of the reviewed" varchar REVIEWED_TYPE "the unique typeentifier of the reviewed" varchar TYPE "the unique typeentifier of the type" varchar SUB_TYPE "the unique typeentifier of the sub" timestamp COMPLETED_DATE "the unique dateentifier of the completed" timestamp DECISION_DATE "the unique dateentifier of the decision" varchar APPROVED "the unique approvedentifier of the approved" varchar CERTIFICATION_ITEM_STATUS "the unique statusentifier of the status" varchar DECISION "the unique decisionentifier of the decision" varchar BULK "the unique bulkentifier of the bulk" varchar REMEDIATED "the unique remediatedentifier of the remediated" varchar PRIVILEGED "the unique privilegedentifier of the privileged" varchar REMEDIATION_ACTION "the unique actionentifier of the remediation" varchar MITIGATION_EXPIRATION "the unique expirationentifier of the mitigation" varchar INSTANCE "the unique instanceentifier of the instance" varchar ACCOUNT_ONLY "the unique onlyentifier of the account" varchar NEW_ACCESS "the unique accessentifier of the new" varchar POLICY_NAME "the unique nameentifier of the policy" varchar CONSTRAINT_NAME "the unique nameentifier of the constraint" timestamp SYNC_DATE "the unique dateentifier of the sync" }  CERTIFICATION_IDENTITY_FULL { varchar CERT_ID "The unique identifier of a certification" varchar NAME "The Name of a certification" varchar ORIGINAL_CERTIFICATION_ID "The original unique identifier of a certification" varchar CERTIFICATION_CAMPAIGN_ID "The unique identifier of a certification campaign" varchar CERTIFICATION_CAMPAIGN_STATUS "The status of a certification campaign" varchar CERTIFICATION_CAMPAIGN_DEADLINE "The deadline of a certification campaign" varchar CERTIFICATION_CAMPAIGN_TYPE "the type of a certification campaign" varchar SIGNER_ID "The unique identity id of the signer of a certification" varchar MANAGER_ID "The unique identity id of the signers manager of a certification" varchar CERTIFIER_ID "The unique identity id of the certifier of a certification" boolean REJECTED "boolean value of the rejection status of a certification" }  IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL { varchar IDENTITY_REQUEST_ITEM_APPROVER_ID "The unique identity id of the identity request approver" varchar IDENTITY_REQUEST_ITEM_REQUEST_ID "The unique identity item request id" varchar IDENTITY_REQUEST_ITEM_REQUESTER_ID "The unique identity id of the identity request requester" varchar IDENTITY_ID "This contains the unique identifier for the TARGET_ID" varchar IDENTITY_REQUEST_ITEM_ID "This contains the unique identifier for the identity request item" varchar IDENTITY_REQUEST_ITEM_INSTANCE "The instance name of the identity request item" varchar IDENTITY_REQUEST_ITEM_NATIVE_IDENTITY "The native identity name for the request item" varchar IDENTITY_REQUEST_ITEM_DISPLAY_NAME "The friendly name for the identity request item" varchar IDENTITY_REQUEST_ITEM_NAME "The name for the identity request item" varchar IDENTITY_REQUEST_ITEM_VALUE "The value of the identity request item" varchar IDENTITY_REQUEST_ITEM_ANNOTATION "The annotation of the identity request item" varchar IDENTITY_REQUEST_ITEM_OPERATION "The operation of the identity request item" timestamp IDENTITY_REQUEST_ITEM_START_DATE "The date of the identity request item start" timestamp IDENTITY_REQUEST_ITEM_END_DATE "The date of the identity request item end" varchar IDENTITY_REQUEST_ITEM_APPROVED "The approved of the identity request item" varchar IDENTITY_REQUEST_ITEM_REJECTED "The rejected of the identity request item" varchar IDENTITY_REQUEST_ITEM_PROVISIONING_STATE "The state of the identity request item provisioning" varchar IDENTITY_REQUEST_ITEM_COMPILATION_STATUS "The status of the identity request item compilation" varchar IDENTITY_REQUEST_ITEM_EXPANSION_CAUSE "The cause of the identity request item expansion" number IDENTITY_REQUEST_ITEM_RETRIES "The retries of the identity request item" varchar IDENTITY_REQUEST_ITEM_PROVISIONING_ENGINE "The engine of the identity request item provisioning" timestamp IDENTITY_REQUEST_ITEM_CREATED_DATE "The date of the identity request item created" varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_ID "The id of the identity request item access request" timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_CREATED_DATE "The date of the identity request item access request created" timestamp IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_END_DATE "The date of the identity request item access request end" varchar IDENTITY_REQUEST_ITEM_EXECUTION_STATUS "The status of the eidentity request item execution" varchar IDENTITY_REQUEST_ITEM_COMPLETION_STATUS "The status of the identity request item completion" varchar IDENTITY_REQUEST_ITEM_PRIORITY "The priority of the identity request item" varchar IDENTITY_REQUEST_ITEM_ACCESS_REQUEST_REQUESTER "The requester of the identity request item access request" varchar IDENTITY_REQUEST_ITEM_APP_ID "The id of the identity request item app" varchar IDENTITY_REQUEST_ITEM_APP_DISPLAY_NAME "The name of the identity request item app display" timestamp IDENTITY_REQUEST_ITEM_REQUESTER_CREATED_DATE "The date of the identity request item requester created" timestamp IDENTITY_REQUEST_ITEM_REQUESTER_UPDATE_DATE "The date of the identity request item requester update" varchar IDENTITY_REQUEST_ITEM_TARGET_DISPLAY_NAME "The name of the identity request item target display" timestamp IDENTITY_REQUEST_ITEM_TARGET_CREATED_DATE "The date of the identity request item target created" timestamp IDENTITY_REQUEST_ITEM_TARGET_UPDATE_DATE "The date of the identity request item target update" timestamp IDENTITY_REQUEST_ITEM_APPROVER_CREATED_DATE "The date of the identity request item approver created" timestamp IDENTITY_REQUEST_ITEM_APPROVER_UPDATED_DATE "The date of the identity request item approver updated" varchar IDENTITY_REQUEST_ITEM_APPROVER_DISPLAY_NAME "The name of the identity request item approver display" varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_ID "The id of the identity request item entitlement" varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_VALUE "The value of the identity request item entitlement" varchar IDENTITY_REQUEST_ITEM_ENTITLEMENT_DISPLAY_NAME "The name of the identity request item entitlement display" varchar IDENTITY_REQUEST_ITEM_ROLE_ID "The id of the identity request item role" varchar IDENTITY_REQUEST_ITEM_ROLE_NAME "The name of the identity request item role" varchar IDENTITY_REQUEST_ITEM_ROLE_DISPLAY_NAME "The name of the identity request item role display" }  IDENTITY ||--o{ IDENTITY_ATRIBUTE : "associated to and owns" IDENTITY ||--o{ IDENTITY_ROLES_FULL : "associated to and owns" IDENTITY ||--o{ ACCESS_PROFILES_FULL: "associated to and owns" IDENTITY ||--o{ IDENTITY_ACCOUNTS_FULL : "associated to and owns" IDENTITY ||--o{ IDENTITY_APPS_FULL : "associated to and owns" IDENTITY ||--o{ IDENTITY_ENTITLEMENTS_FULL : "associated to and owns" IDENTITY ||--o{ CERTIFICATION_ITEM : "associated to and owns" CERTIFICATION_ITEM ||--o{ CERTIFICATION_STATS : "associated to and owns" CERTIFICATION_ITEM ||--o{ CERTIFICATION_IDENTITY_FULL : "associated to and owns" IDENTITY ||--o{ IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL : "associated to and owns" IDENTITY_REQUEST_IDENTITY_REQUEST_ITEM_FULL ||--o{ IDENTITY_REQUEST_WITH_DURATION : "associated to and owns"',mdxType:"MermaidViewer"}))}_.isMDXComponent=!0}}]);