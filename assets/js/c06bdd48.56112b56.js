"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32028],{2221:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));const o={id:"entitlement-list",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","entitlement list"],description:"Gather a list of all entitlements available on the source.",slug:"/connectivity/saas-connectivity/commands/entitlement-list",tags:["Connectivity","Connector Command"]},s=void 0,l={unversionedId:"connectivity/saas-connectivity/connector-commands/entitlement-list",id:"connectivity/saas-connectivity/connector-commands/entitlement-list",title:"Entitlement List",description:"Gather a list of all entitlements available on the source.",source:"@site/docs/connectivity/saas-connectivity/connector-commands/entitlement-list.md",sourceDirName:"connectivity/saas-connectivity/connector-commands",slug:"/connectivity/saas-connectivity/commands/entitlement-list",permalink:"/docs/connectivity/saas-connectivity/commands/entitlement-list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-commands/entitlement-list.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"},{label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"entitlement-list",title:"Entitlement List",pagination_label:"Entitlement List",sidebar_label:"Entitlement List",keywords:["connectivity","connectors","entitlement list"],description:"Gather a list of all entitlements available on the source.",slug:"/connectivity/saas-connectivity/commands/entitlement-list",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Change Password",permalink:"/docs/connectivity/saas-connectivity/commands/change-password"},next:{title:"Entitlement Read",permalink:"/docs/connectivity/saas-connectivity/commands/entitlement-read"}},r={},m=[{value:"Example StdEntitlementListInput",id:"example-stdentitlementlistinput",level:3},{value:"Example StdEntitlementListOutput",id:"example-stdentitlementlistoutput",level:3},{value:"Description",id:"description",level:2},{value:"Defining the Schema",id:"defining-the-schema",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Delta Aggregation (State)",id:"delta-aggregation-state",level:2}],c={toc:m},d="wrapper";function p(t){let{components:e,...o}=t;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementListInput")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StdEntitlementListOutput")))),(0,i.kt)("h3",{id:"example-stdentitlementlistinput"},"Example StdEntitlementListInput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "type": "group"\n}\n')),(0,i.kt)("h3",{id:"example-stdentitlementlistoutput"},"Example StdEntitlementListOutput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n')),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The entitlement list command triggers during a manual or scheduled entitlement aggregation operation within ISC. This operation gathers a list of all entitlements available on the target source, usually multi-valued entitlements like groups or roles. This operation provides ISC administrators with a list of entitlements available on the source so they can create access profiles and roles accordingly, and it provides ISC with more details about the entitlements. The entitlement schema\u2019s minimum requirements are name and ID, but you can add other values, such as created date, updated date, status, etc."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discover Schema 4",src:n(6168).Z,width:"2628",height:"1228"})),(0,i.kt)("h2",{id:"defining-the-schema"},"Defining the Schema"),(0,i.kt)("p",null,"The entitlement schema is defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json"},"connector-spec.json")," file. Currently, only the multi-valued \u201cgroup\u201d type is supported. The following values are the minimum requirements, but you can add more attributes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'...\n"entitlementSchemas": [\n {\n  "type": "group",\n  "displayAttribute": "name",\n  "identityAttribute": "id",\n  "attributes": [\n   {\n    "name": "id",\n    "type": "string",\n    "description": "Unique ID of the group (ex. admin)"\n   },\n   {\n    "name": "name",\n    "type": "string",\n    "description": "The display name of the group (ex. Admin)"\n   }\n  ]\n }\n],\n...\n')),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"This can be implemented in the main connector file, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"...\n.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {\n    const groups = await airtable.getAllEntitlements()\n\n    for (const group of groups) {\n        res.send(group.toStdEntitlementListOutput())\n    }\n})\n...\n...\n...\npublic toStdEntitlementListOutput(): StdEntitlementListOutput {\n    return this.buildStandardObject();\n}\nprivate buildStandardObject(): StdEntitlementReadOutput | StdEntitlementListOutput {\n    return {\n        key: SimpleKey(this.id),\n        type: 'group',\n        attributes: {\n            id: this.id,\n            name: this.name\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"ISC will throw a connection timeout error if your connector doesn't respond within 3 minutes, and there are memory limitations involved with aggregating data. To prevent large memory utilization or timeout errors, you should set up your connectors to send data to ISC as it's retrieved from your source system. For more details and an example, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/connectivity/saas-connectivity/in-depth/connector-timeouts"},"Connector Timeouts"),".")),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"ISC supports ",(0,i.kt)("a",{parentName:"p",href:"#delta-aggregation-state"},"delta aggregation"),". If your source has a large number of entitlements that will be syncronized with ISC, then it is highly recommended to utilize ",(0,i.kt)("a",{parentName:"p",href:"#delta-aggregation-state"},"delta aggregation")," for the source. ")),(0,i.kt)("h2",{id:"delta-aggregation-state"},"Delta Aggregation (State)"),(0,i.kt)("p",null,"If your source can keep track of changes to the data in some way, then delta aggregation can be performed on a source. In order to implement, there are a few things that need to be configured"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In your connector-spec.json file, the feature needs to be enabled by adding the following key: ",(0,i.kt)("inlineCode",{parentName:"li"},'"supportsStatefulCommands": true,')," and in the sourceConfig section, a checkbox needs to be added to enable state with the key ",(0,i.kt)("inlineCode",{parentName:"li"},"spConnEnableStatefulCommands"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'"supportsStatefulCommands": true,\n...\n{\n    "key": "spConnEnableStatefulCommands",\n    "label": "Stateful",\n    "required": true,\n    "type": "checkbox"\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"stdEntitlementList")," command, when you are done sending entitlments, you need to also send the state to ISC so it knows where to start the next time it sends a list request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const state = {"data": Date.now().toString()}\n...\nres.saveState(state)\n')),(0,i.kt)("p",null,"In the above example, I am capturing the date, but you can use any value you want to store the state"),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The state that you send using the ",(0,i.kt)("inlineCode",{parentName:"p"},"saveState")," command MUST be a json object, and it is recommend to only save strings to ensure proper serialization/deserialization of the data. You cannot send a simple string or number or it will not properly save the state.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"stdEntitlementList")," command, you need to properly handle the state object. Something like below checks the stateful boolean as well as the state object and fetches accounts accordingly:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'.stdEntitlementList(async (context: Context, input: StdEntitlementListInput, res: Response<StdEntitlementListOutput>) => {\n    let groups = []\n    const state = {"data": Date.now().toString()}\n    if (!input.state && input.stateful) {\n        logger.info(input, "No state provided, fetching all entitlements")\n        const groups = await airtable.getAllEntitlements()\n    } else if (input.state && input.stateful) {\n        logger.info(input ,"Current state provided, only fetching entitlements after that state")\n        const groups = await airtable.getAllStatefulEntitlements(new Date(Number(input.state?.data)))\n    } else {\n        logger.info(input.state ,"Source is not stateful, getting all entitlements")\n        const groups = await airtable.getAllEntitlements()\n    }\n    logger.info(groups, "fetched the following entitlements in Airtable")\n    for (const group of groups) {\n        res.send(group.toStdEntitlementListOutput())\n    }\n    res.saveState(state)\n})\n')))}p.isMDXComponent=!0},6168:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/entitlement_list_idn-746c496b20dbf4823d27a3b9f63af578.png"}}]);