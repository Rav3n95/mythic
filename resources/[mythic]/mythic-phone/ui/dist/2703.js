"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[2703,595],{70595:(t,e,n)=>{n.r(e),n.d(e,{TestSound:()=>a,UpdateSetting:()=>o});var r=n(21447),o=function(t,e){return function(n){r.Z.send("UpdateSetting",{type:t,val:e}).then((function(r){n({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:t,data:e}})})).catch((function(t){console.log(t)}))}},a=function(t,e){return function(n){r.Z.send("TestSound",{type:t,val:e})}}},92703:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var r=n(89526),o=n(92070),a=n(72757),i=n(14710),c=n(32165),l=n(41951),p=n(71529),u=n(57170),s=n(70595);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=(0,p.Z)((function(t){return{rowWrapper:{background:t.palette.secondary.main,padding:12,marginBottom:5,width:"100%",height:"fit-content",userSelect:"none","-webkit-user-select":"none","&:hover":{background:t.palette.secondary.light,transition:"background ease-in 0.15s",cursor:"pointer"}},appIcon:{fontSize:25,width:50,height:50,margin:"auto",color:"#fff"},appLabel:{display:"block",fontSize:20,fontWeight:"bold",lineHeight:"50px",textAlign:"left"},arrow:{fontSize:35,position:"absolute",top:0,bottom:0,right:0,margin:"auto"}}}));const h=(0,o.$j)(null,{UpdateSetting:s.UpdateSetting})((function(t){var e=g(),n=(0,o.v9)((function(t){return t.data.data.player.PhoneSettings})),p=m((0,r.useState)(null==n.appNotifications[t.app.name]),2),s=p[0],f=p[1];return r.createElement(a.Z,{className:e.rowWrapper,onClick:function(){n.notifications&&(t.UpdateSetting("appNotifications",s?d(d({},n.appNotifications),{},y({},t.app.name,!0)):Object.keys(n.appNotifications).reduce((function(e,r){return r!==t.app.name&&(e[r]=n.appNotifications[r]),e}),{})),f(!s))}},r.createElement(i.ZP,{item:!0,xs:12},r.createElement(i.ZP,{container:!0},r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement(c.Z,{variant:"rounded",className:e.appIcon,style:{background:"".concat(t.app.color)}},r.createElement(u.G,{icon:t.app.icon}))),r.createElement(i.ZP,{item:!0,xs:8,style:{paddingLeft:5,position:"relative"}},r.createElement("span",{className:e.appLabel},t.app.label)),r.createElement(i.ZP,{item:!0,xs:2,style:{position:"relative"}},r.createElement(l.Z,{className:e.arrow,checked:s&&n.notifications,disabled:!n.notifications,color:"primary"})))))}))}}]);