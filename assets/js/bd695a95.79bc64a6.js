"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[15160],{84151:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(67294),a=i(86010),r=i(39960),o=i(53438),c=i(13919),s=i(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=i(99603),p=i(21702);function u(e){let{href:t,children:i}=e;return n.createElement(r.default,{href:t,className:(0,a.default)("card padding--lg",l.cardContainer)},i)}function m(e){let{href:t,icon:i,title:r,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.default)("text--truncate",l.cardTitle),title:r},i,r),o&&n.createElement("p",{className:l.cardDescription,title:o},o))}function f(e){let{item:t}=e;const i=(0,o.Wl)(t);return i?n.createElement(m,{href:i,icon:n.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const i=(0,c.Z)(t.href)?n.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):n.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),a=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:i,title:t.label,description:t.description??a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},84482:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905)),r=i(8065),o=i(53438);const c={id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},s=void 0,l={unversionedId:"api/beta/public-identities-config",id:"api/beta/public-identities-config",title:"Public Identities Config",description:"Public Identities Config",source:"@site/docs/api/beta/public-identities-config.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/public-identities-config",permalink:"/docs/api/beta/public-identities-config",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"public-identities-config",title:"Public Identities Config",description:"Public Identities Config",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete Personal Access Token",permalink:"/docs/api/beta/delete-personal-access-token"},next:{title:"Get Public Identity Config",permalink:"/docs/api/beta/get-public-identity-config"}},d={},p=[],u={toc:p},m="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement public identity configuration functionality.\nWith this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions.\nThis can be helpful for access approvers, certification reviewers, managers viewing their direct reports' access, and source owners viewing their tasks."),(0,a.kt)("p",null,"By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager.\nHowever, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.\nAdministrators can use this API to make those necessary identity attributes public to non-administrators."),(0,a.kt)("p",null,"For example, a non-administrator deciding whether to approve another identity's request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department.\nIf an administrator has used ",(0,a.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/beta/update-public-identity-config"},"Update Public Identity Config"),' to make the "department" attribute public, the approver can see the department and make a decision without requesting any more information.'),(0,a.kt)(r.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);