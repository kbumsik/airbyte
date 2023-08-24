"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[24398],{14239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},i="BigCommerce",o={unversionedId:"integrations/sources/bigcommerce",id:"integrations/sources/bigcommerce",title:"BigCommerce",description:"Sync overview",source:"@site/../docs/integrations/sources/bigcommerce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bigcommerce",permalink:"/integrations/sources/bigcommerce",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/bigcommerce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Bamboo HR",permalink:"/integrations/sources/bamboo-hr"},next:{title:"BigQuery",permalink:"/integrations/sources/bigquery"}},p={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:m},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigcommerce"},"BigCommerce"),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The BigCommerce source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"This source can sync data for the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/making-requests"},"BigCommerce API"),"."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersget"},"Customers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/orders/orders/getallorders"},"Orders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/docs/rest-management/transactions#get-transactions"},"Transactions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages"},"Pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts"},"Products")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/d2298071793d6-get-all-channels"},"Channels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/docs/rest-management/store-information#get-store-information"},"Store")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/3b4dfef625708-list-order-products"},"OrderProducts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/c2610608c20c8-get-all-brands"},"Brands")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.bigcommerce.com/api-reference/9cc3a53863922-get-all-categories"},"Categories"))),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"BigCommerce has some ",(0,n.kt)("a",{parentName:"p",href:"https://developer.bigcommerce.com/api-docs/getting-started/best-practices"},"rate limit restrictions"),"."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to your store\u2019s control panel ","(","Advanced Settings ",">"," API Accounts ",">"," Create API Account",")"),(0,n.kt)("li",{parentName:"ol"},"Create an API account."),(0,n.kt)("li",{parentName:"ol"},"Select the resources you want to allow access to. Airbyte only needs read-level access.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource."))),(0,n.kt)("li",{parentName:"ol"},"The generated ",(0,n.kt)("inlineCode",{parentName:"li"},"Access Token")," is what you'll use as the ",(0,n.kt)("inlineCode",{parentName:"li"},"access_token")," for the integration."),(0,n.kt)("li",{parentName:"ol"},"You're ready to set up BigCommerce in Airbyte!")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20518"},"20518")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add brands and categories streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20540"},"20540")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rebuild on CDK 0.15.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20090"},"20090")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add order_products stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16647"},"16647")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add channel and store stream goes beyond")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14940"},"14940")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix infinite loop when the page stream goes beyond one page")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9935"},"9935")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct date-time columns for ",(0,n.kt)("inlineCode",{parentName:"td"},"orders")," (v2 stream)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9516"},"9516")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Catalog Products Stream and fix date-time parsing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8416"},"8416")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct Incremental Function")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5521"},"5521")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release. Source BigCommerce")))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),g=n,k=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);