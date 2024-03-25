"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[94628],{84151:(e,t,i)=>{i.d(t,{Z:()=>w});var r=i(67294),o=i(86010),n=i(39960),s=i(53438),a=i(13919),c=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),m=i(21702);function p(e){let{href:t,children:i}=e;return r.createElement(n.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},i)}function u(e){let{href:t,icon:i,title:n,description:s}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:n},i,n),s&&r.createElement("p",{className:l.cardDescription,title:s},s))}function h(e){let{item:t}=e;const i=(0,s.Wl)(t);return i?r.createElement(u,{href:i,icon:r.createElement(d.G,{icon:m.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const i=(0,a.Z)(t.href)?r.createElement(d.G,{icon:m.FL8,className:l.docCardIcon}):r.createElement(d.G,{icon:m.wlW,className:l.docCardIcon}),o=(0,s.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:i,title:t.label,description:t.description??o?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(k,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},54415:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=i(87462),o=(i(67294),i(3905)),n=i(8065),s=i(53438);const a={id:"work-items",title:"Work Items",description:"Work Items",custom_edit_url:null},c=void 0,l={unversionedId:"api/v3/work-items",id:"api/v3/work-items",title:"Work Items",description:"Work Items",source:"@site/docs/api/v3/work-items.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/work-items",permalink:"/docs/api/v3/work-items",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"work-items",title:"Work Items",description:"Work Items",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a transform",permalink:"/docs/api/v3/delete-transform"},next:{title:"List Work Items",permalink:"/docs/api/v3/list-work-items"}},d={},m=[],p={toc:m},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use this API to implement work item functionality.\nWith this functionality in place, users can manage their work items (tasks). "),(0,o.kt)("p",null,"Work items refer to the tasks users see in IdentityNow's Task Manager.\nThey can see the pending work items they need to complete, as well as the work items they have already completed.\nTask Manager lists the work items along with the involved sources, identities, accounts, and the timestamp when the work item was created.\nFor example, a user may see a pending 'Create an Account' work item for the identity Fred.Astaire in GitHub for Fred's GitHub account, fred-astaire-sp.\nOnce the user completes the work item, the work item will be listed with his or her other completed work items. "),(0,o.kt)("p",null,"To complete work items, users can use their dashboards and select the 'My Tasks' widget.\nThe widget will list any work items they need to complete, and they can select the work item from the list to review its details.\nWhen they complete the work item, they can select 'Mark Complete' to add it to their list of completed work items. "),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/user-help/task_manager.html"},"Task Manager")," for more information about work items, including the different types of work items users may need to complete."),(0,o.kt)(n.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);