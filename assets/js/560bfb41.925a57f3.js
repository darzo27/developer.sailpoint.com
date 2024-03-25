"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20587],{84151:(e,i,t)=>{t.d(i,{Z:()=>I});var a=t(67294),s=t(86010),o=t(39960),n=t(53438),c=t(13919),r=t(95999);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var d=t(99603),p=t(21702);function u(e){let{href:i,children:t}=e;return a.createElement(o.default,{href:i,className:(0,s.default)("card padding--lg",l.cardContainer)},t)}function m(e){let{href:i,icon:t,title:o,description:n}=e;return a.createElement(u,{href:i},a.createElement("h2",{className:(0,s.default)("text--truncate",l.cardTitle),title:o},t,o),n&&a.createElement("p",{className:l.cardDescription,title:n},n))}function f(e){let{item:i}=e;const t=(0,n.Wl)(i);return t?a.createElement(m,{href:t,icon:a.createElement(d.G,{icon:p.cC_,className:l.docCardIcon}),title:i.label,description:i.customProps?.description??(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})}):null}function h(e){let{item:i}=e;const t=(0,c.Z)(i.href)?a.createElement(d.G,{icon:p.FL8,className:l.docCardIcon}):a.createElement(d.G,{icon:p.wlW,className:l.docCardIcon}),s=(0,n.xz)(i.docId??void 0);return a.createElement(m,{href:i.href,icon:t,title:i.label,description:i.description??s?.description})}function I(e){let{item:i}=e;switch(i.type){case"link":return a.createElement(h,{item:i});case"category":return a.createElement(f,{item:i});default:throw new Error(`unknown item type ${JSON.stringify(i)}`)}}},34465:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=t(87462),s=(t(67294),t(3905)),o=t(8065),n=t(53438);const c={id:"api-specifications",title:"API Specifications",pagination_label:"API Specifications",sidebar_label:"API Specifications",sidebar_position:1,sidebar_class_name:"apiSpecifications",keywords:["api","specifications"],description:"Identity Security Cloud API specifications.",slug:"/api/api-specifications",tags:["API Specifications"]},r=void 0,l={unversionedId:"api/api-specifications",id:"api/api-specifications",title:"API Specifications",description:"Identity Security Cloud API specifications.",source:"@site/docs/api/api-specifications.md",sourceDirName:"api",slug:"/api/api-specifications",permalink:"/docs/api/api-specifications",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/api-specifications.md",tags:[{label:"API Specifications",permalink:"/docs/tags/api-specifications"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"api-specifications",title:"API Specifications",pagination_label:"API Specifications",sidebar_label:"API Specifications",sidebar_position:1,sidebar_class_name:"apiSpecifications",keywords:["api","specifications"],description:"Identity Security Cloud API specifications.",slug:"/api/api-specifications",tags:["API Specifications"]},sidebar:"openApiSidebar",previous:{title:"Docs",permalink:"/docs/"},next:{title:"Identity Security Cloud API Specifications",permalink:"/docs/api"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Discuss",id:"discuss",level:2}],u={toc:p},m="wrapper";function f(e){let{components:i,...t}=e;return(0,s.kt)(m,(0,a.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"The Identity Security Cloud (ISC) APIs provide developers with a way to interact with the ISC platform and extend it. Developers can leverage these APIs to customize their platform experiences and build new solutions and integrations that meet their needs. "),(0,s.kt)("p",null,"The API specifications contain detailed information of how to send requests to each API endpoint, as well as example requests and responses. They also include essential information about how to use the APIs and guides you can follow to get started.  "),(0,s.kt)(o.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}),(0,s.kt)("h2",{id:"discuss"},"Discuss"),(0,s.kt)("p",null,"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. "),(0,s.kt)("p",null,"To learn more about the ISC APIs and discuss them with SailPoint Developer Community members, go to the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/tags/c/isc/6/apis"},"SailPoint Developer Community Forum"),"."))}f.isMDXComponent=!0}}]);