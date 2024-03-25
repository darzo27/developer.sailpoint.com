"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[57037],{30940:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=e(87462),i=(e(67294),e(3905));const s={id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},c="Testing and debugging",a={unversionedId:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-testing",id:"connectivity/saas-connectivity/connector-customizers/connectivity-customizers-testing",title:"Testing and Debugging",description:"Test and debug connectors with customizers.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/testing.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers",slug:"/connectivity/saas-connectivity/customizers/testing",permalink:"/docs/connectivity/saas-connectivity/customizers/testing",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/testing.md",tags:[{label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1711372304,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:6,frontMatter:{id:"connectivity-customizers-testing",title:"Testing and Debugging",pagination_label:"Testing and Debugging",sidebar_label:"Testing and Debugging",sidebar_position:6,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Test and debug connectors with customizers.",slug:"/connectivity/saas-connectivity/customizers/testing",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Linking to a Source",permalink:"/docs/connectivity/saas-connectivity/customizers/linking"},next:{title:"Customizer Commands",permalink:"/docs/connectivity/saas-connectivity/customizers/commands"}},r={},u=[{value:"Debug locally",id:"debug-locally",level:3},{value:"Test alongside a custom connector",id:"test-alongside-a-custom-connector",level:3}],d={toc:u},l="wrapper";function g(n){let{components:t,...e}=n;return(0,i.kt)(l,(0,o.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-and-debugging"},"Testing and debugging"),(0,i.kt)("h3",{id:"debug-locally"},"Debug locally"),(0,i.kt)("p",null,"Debugging your code locally follows the same process that debugging a ",(0,i.kt)("a",{parentName:"p",href:"../in-depth/debugging"},"connector locally")," does. The recommended approach is to start a ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging"},"Visual Studio Code debug window")," and run this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run debug\n")),(0,i.kt)("p",null,"You can then set breakpoints in your code step through processes in your IDE (integrated development environment)."),(0,i.kt)("h3",{id:"test-alongside-a-custom-connector"},"Test alongside a custom connector"),(0,i.kt)("p",null,"If you want to test alongside a SaaS custom connector, the easiest way to do so is to copy the customizer code into the connector code. "),(0,i.kt)("p",null,"For example, you want to test this connector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info("Running test connection")\n            res.send(await myClient.testConnection())\n        })\n}\n')),(0,i.kt)("p",null,"You can test a customizer by simply appending the customizer code to the end of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// existing custom connector code\nexport const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const myClient = new MyClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            logger.info(\"Running test connection\")\n            res.send(await myClient.testConnection())\n        })\n}\n\n// appended customizer code that will also get run\nexport const connectorCustomizer = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    return createConnectorCustomizer()\n        .afterStdTestConnection(async (context: Context, output: StdTestConnectionOutput) => {\n            logger.info('Running after test connection')\n            return output\n        })\n}\n\n")),(0,i.kt)("p",null,"Now, when you run the test-connection command, the customizer after the test-connection command will also run."))}g.isMDXComponent=!0}}]);