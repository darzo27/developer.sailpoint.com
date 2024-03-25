"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[37285],{84151:(e,t,o)=>{o.d(t,{Z:()=>h});var r=o(67294),i=o(86010),a=o(39960),n=o(53438),c=o(13919),s=o(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=o(99603),p=o(21702);function m(e){let{href:t,children:o}=e;return r.createElement(a.default,{href:t,className:(0,i.default)("card padding--lg",l.cardContainer)},o)}function u(e){let{href:t,icon:o,title:a,description:n}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.default)("text--truncate",l.cardTitle),title:a},o,a),n&&r.createElement("p",{className:l.cardDescription,title:n},n))}function f(e){let{item:t}=e;const o=(0,n.Wl)(t);return o?r.createElement(u,{href:o,icon:r.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const o=(0,c.Z)(t.href)?r.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):r.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),i=(0,n.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:o,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(w,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},92790:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=o(87462),i=(o(67294),o(3905)),a=o(8065),n=o(53438);const c={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},s=void 0,l={unversionedId:"api/beta/workflows",id:"api/beta/workflows",title:"Workflows",description:"Workflows",source:"@site/docs/api/beta/workflows.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/workflows",permalink:"/docs/api/beta/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Update Tenant-wide Reassignment Configuration settings",permalink:"/docs/api/beta/put-tenant-configuration"},next:{title:"Create Workflow",permalink:"/docs/api/beta/create-workflow"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows allow administrators to create custom automation scripts directly within IdentityNow.  These automation scripts respond to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/event-triggers#how-to-get-started-with-event-triggers"},"event triggers")," and perform a series of actions to perform tasks that are either too cumbersome or not available in the IdentityNow UI.  Workflows can be configured via a graphical user interface within IdentityNow, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."),(0,i.kt)(a.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);