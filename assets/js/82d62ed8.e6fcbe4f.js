"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20982],{43703:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>n,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const l={id:"disable-access-profile-requests",title:"Disable Access Profile Requests",pagination_label:"Disable Access Profile Requests",sidebar_label:"Disable Access Profile Requests",sidebar_position:1,sidebar_class_name:"disableAccessProfileRequests",keywords:["access","request","access profile","request center","disable"],description:"Bulk disable access profile requests.",slug:"/guides/disable-access-profile-requests",tags:["AccessProfileRequestManagement"]},o=void 0,r={unversionedId:"guides/disable-access-profile-requests",id:"guides/disable-access-profile-requests",title:"Disable Access Profile Requests",description:"Bulk disable access profile requests.",source:"@site/docs/guides/disable-access-profile-requests.md",sourceDirName:"guides",slug:"/guides/disable-access-profile-requests",permalink:"/docs/guides/disable-access-profile-requests",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/guides/disable-access-profile-requests.md",tags:[{label:"AccessProfileRequestManagement",permalink:"/docs/tags/access-profile-request-management"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"disable-access-profile-requests",title:"Disable Access Profile Requests",pagination_label:"Disable Access Profile Requests",sidebar_label:"Disable Access Profile Requests",sidebar_position:1,sidebar_class_name:"disableAccessProfileRequests",keywords:["access","request","access profile","request center","disable"],description:"Bulk disable access profile requests.",slug:"/guides/disable-access-profile-requests",tags:["AccessProfileRequestManagement"]},sidebar:"openApiSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"IP Address Allow List",permalink:"/docs/guides/ip-address-allow-list"}},n={},c=[{value:"Overview",id:"overview",level:2},{value:"Disable requests for individual access profiles with the UI",id:"disable-requests-for-individual-access-profiles-with-the-ui",level:2},{value:"Disable requests for individual access profiles with the API",id:"disable-requests-for-individual-access-profiles-with-the-api",level:2},{value:"Bulk disable requests for access profiles with the API",id:"bulk-disable-requests-for-access-profiles-with-the-api",level:2}],p={toc:c},u="wrapper";function d(e){let{components:s,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In Identity Security Cloud, ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/access-profiles.html"},"access profiles")," are groups of ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/access/entitlements.html"},"entitlements"),", which represent access rights on ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/sources/index.html"},"sources"),". By default, all access profiles are marked as requestable. This means that an organization's users can submit ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/requests/index.html"},"access requests")," for the access profiles in the Identity Security Cloud ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/user-help/requests/request_center.html"},"Request Center"),", where all access profiles are listed. "),(0,i.kt)("p",null,"You can disable requests for access profiles to prevent users from gaining inappropriate or undesired access. In the UI, you can edit the ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html#configuring-access-profiles-for-requests"},"individual access profile")," to disable requests for the access profile. You can also use the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/docs/api/v3/patch-access-profile"},"PATCH Access Profile endpoint")," to mark the individual access profile as non-requestable. "),(0,i.kt)("p",null,"You may have many access profiles that you want to disable requests for, and you don't want one to get overlooked and then inappropriately accessed. There are three different processes you can use to ensure that you have disabled requests for all access profiles that aren't currently associated with ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/common/app-config.html"},"applications")," configured for access requests. Read this guide to learn how to perform these processes. "),(0,i.kt)("h2",{id:"disable-requests-for-individual-access-profiles-with-the-ui"},"Disable requests for individual access profiles with the UI"),(0,i.kt)("p",null,"Follow these steps to use the Identity Security Cloud UI to individually disable requests for all access profiles that aren't currently associated with applications:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Identify the access profiles that are associated with applications configured for access requests. Create a list of these associated access profiles. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Admin > Applications")," and open each application you use for access requests. These applications have both 'Visible in the Request Center' and 'Allow Access Requests' marked on the 'Configuration' tab.  "),(0,i.kt)("li",{parentName:"ul"},"Go to the application's 'Access' tab and capture the names of each application's associated access profiles, recording them in your list of access profiles.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Edit each access profile that is ",(0,i.kt)("strong",{parentName:"li"},"not")," in your list to disable access requests. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Admin > Access > Access Profiles")," to view a list of all access profiles. "),(0,i.kt)("li",{parentName:"ul"},"For each access profile that isn't in your list of those associated with applications configured for access requests, select 'Edit', go to the 'Access Requests' tab, and disable 'Allow Access Requests'. Then save your changes. ")),(0,i.kt)("p",null,"Once you have performed this process, all the access profiles that aren't currently associated with applications will no longer be requestable. "),(0,i.kt)("h2",{id:"disable-requests-for-individual-access-profiles-with-the-api"},"Disable requests for individual access profiles with the API"),(0,i.kt)("p",null,"Follow these steps to use two API endpoints to individually disable access requests for all access profiles that aren't currently associated with applications: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/docs/api/v3/search-post"},"Search endpoint")," to identify the access profiles that are ",(0,i.kt)("strong",{parentName:"li"},"not")," associated with applications configured for access requests. Sending the following query will return a list of these unassociated access profiles. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide this request body. It will return all access profiles that have a null or empty ",(0,i.kt)("inlineCode",{parentName:"li"},"apps")," list. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "queryDsl": {\n        "bool": {\n            "must_not": [\n                {\n                    "nested": {\n                        "path": "apps",\n                            "query": {\n                            "exists": {\n                                "field": "apps"\n                            }\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    "queryType": "DSL",\n    "indices": [\n            "accessprofiles"\n        ],\n    "sort": [\n        "name"\n    ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The response body will include all the details of each unassociated access profile. Extract the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," for each access profile returned. ")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/docs/api/v3/patch-access-profile"},"PATCH Access Profile endpoint")," and provide the unassociated access profile's ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," to update the specified access profile's ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," field. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide this request body. It will use the ",(0,i.kt)("inlineCode",{parentName:"li"},"replace")," operation to update the value in the specified access profile's ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," path to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  {\n    "op": "replace",\n    "path": "/requestable",\n    "value": "false"\n  }\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After a successful PATCH update, the response body will include all the specified access profile's details, including the updated ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," value in the ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," path. ")),(0,i.kt)("p",null,"Once you have performed this process for each of the unassociated access profiles returned in your search, all the access profiles that aren't associated with applications will no longer be requestable. "),(0,i.kt)("h2",{id:"bulk-disable-requests-for-access-profiles-with-the-api"},"Bulk disable requests for access profiles with the API"),(0,i.kt)("p",null,"Follow these steps to use two API endpoints to bulk disable access requests for all access profiles that aren't currently associated with applications: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/docs/api/v3/search-post"},"Search endpoint")," to identify the access profiles that are ",(0,i.kt)("strong",{parentName:"li"},"not")," associated with applications configured for access requests. Sending the following query will return a list of these unassociated access profiles. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide this request body. It will return all access profiles that have a null or empty ",(0,i.kt)("inlineCode",{parentName:"li"},"apps")," list. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "queryDsl": {\n        "bool": {\n            "must_not": [\n                {\n                    "nested": {\n                        "path": "apps",\n                            "query": {\n                            "exists": {\n                                "field": "apps"\n                            }\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    "queryType": "DSL",\n    "indices": [\n            "accessprofiles"\n        ],\n    "sort": [\n        "name"\n    ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The response body will include all the details of each unassociated access profile. Extract the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," for each access profile returned.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/docs/api/beta/update-access-profiles-in-bulk"},"Update Requestability for Access Profiles endpoint")," and provide every unassociated access profile's ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", along with the updated values for their ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," fields. ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide this request body. It can bulk update all the access profiles you specify - you just need to specify each access profile's ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," value you want for the access profile. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    {\n        "id": "813b1e19281645278f9c9f665ea911c9",\n        "requestable": "false"\n    },\n    {\n        "id": "c80bd9a30d42468f9a3646f39cdd7c74",\n        "requestable": "false"\n    }\n ]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After a successful update, the response body will include the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and new ",(0,i.kt)("inlineCode",{parentName:"li"},"requestable")," values for all the updated access profiles, along with confirmations that they were successfully updated. ")),(0,i.kt)("p",null,"Once you have performed this process for all the unassociated access profiles returned in your search, all the access profiles that aren't associated with applications will no longer be requestable."))}d.isMDXComponent=!0}}]);