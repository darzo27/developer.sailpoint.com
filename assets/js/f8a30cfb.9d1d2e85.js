"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58663],{37735:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={id:"go-sdk-getting-started",title:"Getting started with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","start"],description:"Learn how to use the Golang SDK in this guide.",slug:"/tools/sdk/go/getting-started",tags:["SDK","Software Development Kit"]},s=void 0,r={unversionedId:"tools/sdk/go/go-sdk-getting-started",id:"tools/sdk/go/go-sdk-getting-started",title:"Getting started with the Go SDK",description:"Learn how to use the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/getting-started.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/getting-started",permalink:"/docs/tools/sdk/go/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/getting-started.md",tags:[{label:"SDK",permalink:"/docs/tags/sdk"},{label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:1,frontMatter:{id:"go-sdk-getting-started",title:"Getting started with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","start"],description:"Learn how to use the Golang SDK in this guide.",slug:"/tools/sdk/go/getting-started",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/create"}},l={},d=[{value:"List Transforms",id:"list-transforms",level:3}],g={toc:d},p="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. This guide will walk through some examples of this functionality. To learn how to install and configure the Golang SDK, refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/tools/sdk/go"},"Installation and Configuration"),"."),(0,a.kt)("h3",{id:"list-transforms"},"List Transforms"),(0,a.kt)("p",null,"Create a file in your project called ",(0,a.kt)("inlineCode",{parentName:"p"},"sdk.go")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "context"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Execute()\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `TransformsApi.ListTransforms``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n fmt.Fprintf(os.Stdout, "All Transforms from `TransformsApi.ListTransforms`: %v\\n", resp)\n\n}\n')),(0,a.kt)("p",null,"To run the code, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"go run sdk.go\n")),(0,a.kt)("p",null,"You can make changes to the API you are calling by changing this line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"resp, r, err := apiClient.V3.TransformsApi.ListTransforms(ctx).Execute()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To call a different version of the APIs, change ",(0,a.kt)("inlineCode",{parentName:"li"},"V3")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Beta"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"V2"),", or ",(0,a.kt)("inlineCode",{parentName:"li"},"CC"),"."),(0,a.kt)("li",{parentName:"ul"},"To call a different API collection, change ",(0,a.kt)("inlineCode",{parentName:"li"},"TransformsApi")," to another collection, like ",(0,a.kt)("inlineCode",{parentName:"li"},"SourcesApi"),", for example."),(0,a.kt)("li",{parentName:"ul"},"To call a different endpoint, change ",(0,a.kt)("inlineCode",{parentName:"li"},"ListTransforms")," to another endpoint, like ",(0,a.kt)("inlineCode",{parentName:"li"},"GetTransform"),", for example.")))}c.isMDXComponent=!0}}]);