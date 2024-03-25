"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[85307],{84151:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(67294),r=n(86010),s=n(39960),a=n(53438),o=n(13919),c=n(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=n(99603),m=n(21702);function u(e){let{href:t,children:n}=e;return i.createElement(s.default,{href:t,className:(0,r.default)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:s,description:a}=e;return i.createElement(u,{href:t},i.createElement("h2",{className:(0,r.default)("text--truncate",l.cardTitle),title:s},n,s),a&&i.createElement("p",{className:l.cardDescription,title:a},a))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(p,{href:n,icon:i.createElement(d.G,{icon:m.cC_,className:l.docCardIcon}),title:t.label,description:t.customProps?.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const n=(0,o.Z)(t.href)?i.createElement(d.G,{icon:m.FL8,className:l.docCardIcon}):i.createElement(d.G,{icon:m.wlW,className:l.docCardIcon}),r=(0,a.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(g,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},14221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(87462),r=(n(67294),n(3905)),s=n(8065),a=n(53438);const o={id:"work-reassignment",title:"Work Reassignment",description:"Work Reassignment",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/work-reassignment",id:"api/beta/work-reassignment",title:"Work Reassignment",description:"Work Reassignment",source:"@site/docs/api/beta/work-reassignment.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/work-reassignment",permalink:"/docs/api/beta/work-reassignment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"work-reassignment",title:"Work Reassignment",description:"Work Reassignment",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Submit Account Selections",permalink:"/docs/api/beta/submit-account-selection"},next:{title:"List Reassignment Config Types",permalink:"/docs/api/beta/get-reassignment-config-types"}},d={},m=[],u={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use this API to implement work reassignment functionality."),(0,r.kt)("p",null,"Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporarily redirecting work for users who are out of office, such as on vacation or sick leave"),(0,r.kt)("li",{parentName:"ul"},"Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities")),(0,r.kt)("p",null,"Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user\u2019s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/users/work_reassignment.html"},"Work Reassignment")," for more information about this topic."),(0,r.kt)(s.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);