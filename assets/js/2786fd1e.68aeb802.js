"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11435],{83473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={id:"cli-set",title:"Set",pagination_label:"CLI-Set",sidebar_label:"Set",sidebar_position:4,sidebar_class_name:"cli",keywords:["cli","set"],description:"Learn how to configure your CLI settings in this guide.",slug:"/tools/cli/set",tags:["CLI"]},s=void 0,o={unversionedId:"tools/cli/cli-set",id:"tools/cli/cli-set",title:"Set",description:"Learn how to configure your CLI settings in this guide.",source:"@site/docs/tools/cli/set.md",sourceDirName:"tools/cli",slug:"/tools/cli/set",permalink:"/docs/tools/cli/set",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/cli/set.md",tags:[{label:"CLI",permalink:"/docs/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:4,frontMatter:{id:"cli-set",title:"Set",pagination_label:"CLI-Set",sidebar_label:"Set",sidebar_position:4,sidebar_class_name:"cli",keywords:["cli","set"],description:"Learn how to configure your CLI settings in this guide.",slug:"/tools/cli/set",tags:["CLI"]},sidebar:"openApiSidebar",previous:{title:"CLI-Search",permalink:"/docs/tools/cli/search"},next:{title:"CLI-SPConfig",permalink:"/docs/tools/cli/spconfig"}},r={},p=[{value:"Set",id:"set",level:2},{value:"Auth",id:"auth",level:3},{value:"Debug",id:"debug",level:3},{value:"PAT",id:"pat",level:3},{value:"Search templates",id:"search-templates",level:3},{value:"File format",id:"file-format",level:4},{value:"Export templates",id:"export-templates",level:3},{value:"File format",id:"file-format-1",level:4}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"set"},"Set"),(0,l.kt)("p",null,"Learn how to configure your CLI settings in this guide. "),(0,l.kt)("p",null,"This includes setting your authentication mode, your debug mode, and the filepaths for the templates your CLI uses to make your search and export processes easier.  "),(0,l.kt)("p",null,"You can use these ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," commands to configure your CLI settings: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#set"},"Set"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#auth"},"Auth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#debug"},"Debug")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pat"},"PAT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#search-templates"},"Search templates"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file-format"},"File format")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#export-templates"},"Export templates"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file-format-1"},"File format"))))))),(0,l.kt)("h3",{id:"auth"},"Auth"),(0,l.kt)("p",null,"To set the current authentication method for the CLI, run this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail set auth {authentication type}\n")),(0,l.kt)("p",null,"You can currently set authentication to either ",(0,l.kt)("inlineCode",{parentName:"p"},"pat")," to use a personal access token (PAT), or ",(0,l.kt)("inlineCode",{parentName:"p"},"oauth")," to use OAuth2 authentication via browser authentication. "),(0,l.kt)("h3",{id:"debug"},"Debug"),(0,l.kt)("p",null,"To enable debug mode, run this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail set debug enable\n")),(0,l.kt)("p",null,"To disable debug mode, run the same command with ",(0,l.kt)("inlineCode",{parentName:"p"},"disable")," instead. "),(0,l.kt)("h3",{id:"pat"},"PAT"),(0,l.kt)("p",null,"To configure PAT authentication for a given environment, run this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sail set pat\n")),(0,l.kt)("p",null,"Then follow the prompts to provide your PAT client ID and client secret."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/configure/configure-pat.gif?raw=true",alt:"Configure PAT"})),(0,l.kt)("h3",{id:"search-templates"},"Search templates"),(0,l.kt)("p",null,"To set the filepath for the search templates your CLI uses, run this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sail set searchTemplates "path/to/search/template/file"\n\nor\n\nsail set search "path/to/search/template/file"\n')),(0,l.kt)("h4",{id:"file-format"},"File format"),(0,l.kt)("p",null,"Here are a couple examples of the file format a search template uses: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "all-provisioning-events",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [{ "name": "days", "prompt": "Days before today" }],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events-90-days",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-90d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  }\n]\n')),(0,l.kt)("p",null,"In the first example, the template uses variables in its query. The second example is a fully predefined template without variables. "),(0,l.kt)("h3",{id:"export-templates"},"Export templates"),(0,l.kt)("p",null,"To set the filepath for the export templates your CLI uses, run this command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sail set exportTemplates "path/to/export/template/file"\n\nor\n\nsail set export "path/to/export/template/file"\n')),(0,l.kt)("h4",{id:"file-format-1"},"File format"),(0,l.kt)("p",null,"Here is an example of the file format an export template uses: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "all-objects",\n    "description": "Export all available objects",\n    "variables": [],\n    "exportBody": {\n      "description": "Export all available objects",\n      "excludeTypes": [],\n      "includeTypes": [\n        "SOURCE",\n        "RULE",\n        "TRIGGER_SUBSCRIPTION",\n        "TRANSFORM",\n        "IDENTITY_PROFILE"\n      ],\n      "objectOptions": {}\n    }\n  }\n]\n')))}c.isMDXComponent=!0}}]);