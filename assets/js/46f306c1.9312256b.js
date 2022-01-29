"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[285],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49576:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Wechaty Breaking Changes",sidebar_label:"Breaking Changes"},l=void 0,s={unversionedId:"references/breaking-changes",id:"references/breaking-changes",isDocsHomePage:!1,title:"Wechaty Breaking Changes",description:"This document outlines when various pieces of Wechaty will be removed or altered",source:"@site/docs/references/breaking-changes.mdx",sourceDirName:"references",slug:"/references/breaking-changes",permalink:"/docs/references/breaking-changes",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/references/breaking-changes.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1636369301,formattedLastUpdatedAt:"11/8/2021",frontMatter:{title:"Wechaty Breaking Changes",sidebar_label:"Breaking Changes"},sidebar:"docs",previous:{title:"Gateway",permalink:"/docs/specs/"},next:{title:"Overview",permalink:"/docs/explanations/"}},p=[{value:"Deprecation Timeline",id:"deprecation-timeline",children:[]},{value:"2022",id:"2022",children:[{value:"Dec 31, 2022",id:"dec-31-2022",children:[]}]},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"2021",id:"2021",children:[]},{value:"2020",id:"2020",children:[]}]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document outlines when various pieces of Wechaty will be removed or altered\nin a backward incompatible way, following their deprecation.\nMore details about each item can often be found in the release notes of two versions prior."),(0,i.kt)("h2",{id:"deprecation-timeline"},"Deprecation Timeline"),(0,i.kt)("p",null,"We clean the code after the end of the year, so it is not possible to see the exact date of deprecation."),(0,i.kt)("h2",{id:"2022"},"2022"),(0,i.kt)("h3",{id:"dec-31-2022"},"Dec 31, 2022"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"wechaty/puppet-service#160")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/154"},"wechaty/puppet-service#154"))),(0,i.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,i.kt)("h3",{id:"2021"},"2021"),(0,i.kt)("p",null,"Wechaty v1.x is not compatible with Wechaty v0.x modules. (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/2294#issuecomment-962776327"},"how to match versions"),")"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"v1.x: ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty@1.x")," needs ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty-*@1.x")),(0,i.kt)("li",{parentName:"ol"},"v0.x: ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty@0.x")," needs ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty-*@0.x"))),(0,i.kt)("h4",{id:"octorber-2021"},"Octorber, 2021"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet/issues/164"},"wechaty/puppet#164 Wechaty Puppet API v1.0 Adaptions")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/160"},"wechaty/puppet-service#160 Enable TLS for all Puppet Service Clients of Wechaty Ecosystem"))),(0,i.kt)("h4",{id:"september-2021"},"September, 2021"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-service/issues/154"},"wechaty/puppet-service#154 Puppet Service Discovery Schema: ip -> host"))),(0,i.kt)("h3",{id:"2020"},"2020"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"to be collected...")))}h.isMDXComponent=!0}}]);