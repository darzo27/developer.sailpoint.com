"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[49771],{9558:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const l={id:"plugin-overview",title:"Overview",pagination_label:"Overview",sidebar_label:"Overview",sidebar_position:1,sidebar_class_name:"plugin_developer_guide_overview",keywords:["plugin"],description:"IdentityIQ Plugin Developer Guide Overview",slug:"/iiq/plugin-developer-guide/overview",tags:["plugin","guide","identityiq"]},r="Overview",s={unversionedId:"iiq/plugin-developer-guide/chapter-1/plugin-overview",id:"iiq/plugin-developer-guide/chapter-1/plugin-overview",title:"Overview",description:"IdentityIQ Plugin Developer Guide Overview",source:"@site/docs/iiq/plugin-developer-guide/chapter-1/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-1",slug:"/iiq/plugin-developer-guide/overview",permalink:"/docs/iiq/plugin-developer-guide/overview",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-1/index.md",tags:[{label:"plugin",permalink:"/docs/tags/plugin"},{label:"guide",permalink:"/docs/tags/guide"},{label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"plugin-overview",title:"Overview",pagination_label:"Overview",sidebar_label:"Overview",sidebar_position:1,sidebar_class_name:"plugin_developer_guide_overview",keywords:["plugin"],description:"IdentityIQ Plugin Developer Guide Overview",slug:"/iiq/plugin-developer-guide/overview",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"Plugin Developer Guide",permalink:"/docs/iiq/plugin-developer-guide"},next:{title:"Manifest",permalink:"/docs/iiq/plugin-developer-guide/manifest"}},o={},d=[{value:"Plugin Object Model",id:"plugin-object-model",level:2},{value:"Plugin Structure",id:"plugin-structure",level:2}],p={toc:d},u="wrapper";function g(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Introduced with IdentityIQ 7.1, the plugin framework provides the infrastructure and tools to enable developers to extend the Open Identity Platform to meet a variety of specialized use cases that one might encounter in a non-standard deployment. The plugin framework allows developers to create packaged functionality that integrates with IdentityIQ, in an upgrade safe and isolated manner. It gives implementers a safe option for creating UI (user interface) extensions, REST services, custom SailPoint configuration objects, and more. This guide will walk you through the basics of plugin development and installation."),(0,a.kt)("p",null,"The first iteration of the plugin framework was released as an add-on to IdentityIQ 7.0 - the development process for this legacy version is slightly different and is not the subject of this document. However, ",(0,a.kt)("a",{parentName:"p",href:"/docs/iiq/plugin-developer-guide/updates"},"Appendix B")," discusses the differences between versions, and the strategy for migrating a plugin developed for the 7.0 frameworks to the 7.1 framework."),(0,a.kt)("p",null,"Developing a plugin requires a fairly robust knowledge of IdentityIQ and its object model, Java, JavaScript, CSS, and SQL. This document is designed to provide development guidance at a high level - it goes over what the components of a plugin are, which components are required, and how those objects interact. Language specific tutorials are beyond its scope. Throughout this document, examples will be taken and discussed from the 'TodoPlugin'."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A quick note about plugin loading...")),(0,a.kt)("p",null,"Before getting into the structure of a plugin project and why it is important, it may be helpful to understand how a plugin is represented in IdentityIQ once installed. IdentityIQ stores the '.zip' archive file of the plugin in the IdentityIQ database in a data LONGBLOB in the 'spt_file_bucket' table. The data in the 'spt_file_bucket' table is referenced (by 'id') to an entry in the 'spt_persisted_file' table as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Persisted File",src:i(94577).Z,width:"1331",height:"142"})),(0,a.kt)("p",null,"Plugins load from this .zip file after installation or an application server restart. The .zip file is extracted, and all important (html, css, js, etc) files are cached for later use. The plugin framework in 7.1 has several accessor methods to reference the cached files, but they can basically be referenced by the url prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"<hostname>:8080/identityiq/plugin/{pluginName}")," followed by the path found in the build structure. Compiled java classes are loaded (and cached) from the .zip archive via the 'PluginClassLoader' class - more on this later."),(0,a.kt)("h2",{id:"plugin-object-model"},"Plugin Object Model"),(0,a.kt)("p",null,"A plugin is defined in IdentityIQ by the 'Plugin' XML object. This object defines the parameters of the plugin, such as REST resources, snippets, settings, etc. This 'Plugin' object is defined in the 'manifest.xml' file. The plugin object is an XML object that defines the features of the plugin. This object tells IdentityIQ which features will be in your plugin by defining them as attributes of a plugin object. In the plugin object, you'll define the name of your plugin, the rights required for using your plugin, version, snippets, REST resources, etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Plugin Model Attributes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Attribute Name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique Name of the Plugin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"installDate"),(0,a.kt)("td",{parentName:"tr",align:null},"Date when plugin was installed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayName"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin's display name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"certificationLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin's certification level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin's status")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rightRequired"),(0,a.kt)("td",{parentName:"tr",align:null},"SPRIGHT required for this plugin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},"TBD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"Plugin's version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"minSystemVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum IdentityIQ version the plugin will run on")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxSystemVersion"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum IdentityIQ version the plugin will run on")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"attributes"),(0,a.kt)("td",{parentName:"tr",align:null},"List of configurable attributes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"file"),(0,a.kt)("td",{parentName:"tr",align:null},"Reference to the persisted file in the database")))),(0,a.kt)("h2",{id:"plugin-structure"},"Plugin Structure"),(0,a.kt)("p",null,"A basic plugin will consist of a manifest file, database scripts, IdentityIQ objects, REST endpoints, UI elements (.css, xhtml, javascript, etc.) and compiled java classes. Not all these components are required for a simple plugin - the process can be as simple as creating the manifest and some javascript/xhtml pages. To understand how a plugin operates and how best to create one, it is important to understand what each of these components does, and how they interact."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File Structure",src:i(8091).Z,width:"352",height:"599"})),(0,a.kt)("p",null,"These are the main build components: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Manifest file"),(0,a.kt)("li",{parentName:"ol"},"Build file(s)"),(0,a.kt)("li",{parentName:"ol"},"Database Scripts"),(0,a.kt)("li",{parentName:"ol"},"UI Elements"),(0,a.kt)("li",{parentName:"ol"},"XML Artifacts"),(0,a.kt)("li",{parentName:"ol"},"Java Classes")),(0,a.kt)("p",null,"Each build component is described in more detail in each chapter of this guide."))}g.isMDXComponent=!0},94577:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/persisted_file-cfce35ec4d1d8af39441d85954825626.png"},8091:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/plugin_structure-c9b9fd6134606d5a37182a758acd0b79.png"}}]);