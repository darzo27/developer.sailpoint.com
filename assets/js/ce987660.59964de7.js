"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[16878],{84151:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(67294),o=i(86010),a=i(39960),c=i(53438),r=i(13919),s=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),p=i(21702);function m(e){let{href:t,children:i}=e;return n.createElement(a.default,{href:t,className:(0,o.default)("card padding--lg",l.cardContainer)},i)}function u(e){let{href:t,icon:i,title:a,description:c}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,o.default)("text--truncate",l.cardTitle),title:a},i,a),c&&n.createElement("p",{className:l.cardDescription,title:c},c))}function f(e){let{item:t}=e;const i=(0,c.Wl)(t);return i?n.createElement(u,{href:i,icon:n.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,r.Z)(t.href)?n.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):n.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),o=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:i,title:t.label,description:t.description??o?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},90359:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905)),a=i(8065),c=i(53438);const r={id:"notifications",title:"Notifications",description:"Notifications",custom_edit_url:null},s=void 0,l={unversionedId:"api/beta/notifications",id:"api/beta/notifications",title:"Notifications",description:"Notifications",source:"@site/docs/api/beta/notifications.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/notifications",permalink:"/docs/api/beta/notifications",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"notifications",title:"Notifications",description:"Notifications",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Non-Employee Source's Schema Attribute",permalink:"/docs/api/beta/delete-non-employee-schema-attribute"},next:{title:"Change MAIL FROM domain",permalink:"/docs/api/beta/put-mail-from-attributes"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);