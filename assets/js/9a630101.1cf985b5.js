"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[25366],{84151:(t,e,n)=>{n.d(e,{Z:()=>h});var i=n(67294),a=n(86010),r=n(39960),c=n(53438),o=n(13919),s=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=n(99603),u=n(21702);function p(t){let{href:e,children:n}=t;return i.createElement(r.default,{href:e,className:(0,a.default)("card padding--lg",l.cardContainer)},n)}function m(t){let{href:e,icon:n,title:r,description:c}=t;return i.createElement(p,{href:e},i.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},n,r),c&&i.createElement("p",{className:l.cardDescription,title:c},c))}function g(t){let{item:e}=t;const n=(0,c.Wl)(e);return n?i.createElement(m,{href:n,icon:i.createElement(d.G,{icon:u.cC_,className:l.docCardIcon}),title:e.label,description:e.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,o.Z)(e.href)?i.createElement(d.G,{icon:u.FL8,className:l.docCardIcon}):i.createElement(d.G,{icon:u.wlW,className:l.docCardIcon}),a=(0,c.xz)(e.docId??void 0);return i.createElement(m,{href:e.href,icon:n,title:e.label,description:e.description??a?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return i.createElement(f,{item:e});case"category":return i.createElement(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}},56750:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905)),r=n(8065),c=n(53438);const o={id:"global-tenant-security-settings",title:"Global Tenant Security Settings",description:"Global Tenant Security Settings",custom_edit_url:null},s=void 0,l={unversionedId:"api/v3/global-tenant-security-settings",id:"api/v3/global-tenant-security-settings",title:"Global Tenant Security Settings",description:"Global Tenant Security Settings",source:"@site/docs/api/v3/global-tenant-security-settings.tag.mdx",sourceDirName:"api/v3",slug:"/api/v3/global-tenant-security-settings",permalink:"/docs/api/v3/global-tenant-security-settings",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"global-tenant-security-settings",title:"Global Tenant Security Settings",description:"Global Tenant Security Settings",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create custom connector",permalink:"/docs/api/v3/create-custom-connector"},next:{title:"Get security network configuration.",permalink:"/docs/api/v3/get-auth-org-network-config"}},d={},u=[],p={toc:u},m="wrapper";function g(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement and customize global tenant security settings.\nWith this functionality in place, administrators can manage the global security settings that a tenant/org has.\nThis API can be used to configure the networks and Geographies allowed to access IdentityNow URLs."),(0,a.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);