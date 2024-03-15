"use strict";(self.webpackChunkllm_engineering_magic=self.webpackChunkllm_engineering_magic||[]).push([[691,164],{6943:function(e,t,l){l.r(t),l.d(t,{default:function(){return n}});var a=l(7294);var r=e=>{let{label:t,id:l,value:r,onChange:n}=e;return a.createElement("div",null,a.createElement("label",{htmlFor:l,className:"block mb-2 font-bold text-yellow-700"},t,":"),a.createElement("input",{className:"w-full px-3 py-2 mb-4 border border-red-50 rounded bg-white text-gray-700",type:"text",id:l,value:r,onChange:n}))};var n=()=>{const{0:e,1:t}=(0,a.useState)({role:"",instruction:"",detail:"",outputFormat:""}),{0:l,1:n}=(0,a.useState)(!1),{0:o,1:c}=(0,a.useState)(!1),m="Role: "+e.role+"\nInstruction: "+e.instruction+"\nDetail: "+e.detail+"\nOutput Format: "+e.outputFormat,u="<Role>"+e.role+"</Role>\n<Instruction>"+e.instruction+"</Instruction>\n<Detail>"+e.detail+"</Detail>\n<OutputFormat>"+e.outputFormat+"</OutputFormat>",i=e=>{const{id:l,value:a}=e.target;t((e=>({...e,[l]:a}))),n(!1),c(!1)};return a.createElement(a.Fragment,null,a.createElement("div",{className:"overflow-auto w-full h-screen flex flex-col justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start md:flex-row"},a.createElement("div",{className:"w-full mb-5 md:w-1/2 md:m-5"},a.createElement(r,{label:"Role",id:"role",value:e.role,onChange:i}),a.createElement(r,{label:"Instruction",id:"instruction",value:e.instruction,onChange:i}),a.createElement(r,{label:"Detail",id:"detail",value:e.detail,onChange:i}),a.createElement(r,{label:"Output Format",id:"outputFormat",value:e.outputFormat,onChange:i})),a.createElement("div",{className:"w-full h-full md:w-1/2 text-wrap"},a.createElement("h3",{className:"w-full block font-bold text-yellow-700"},"Concatenated Text:"),a.createElement("pre",{className:"mt-1 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700 text-wrap"},m),a.createElement("div",{className:"flex flex-row"},a.createElement("button",{className:"block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300",onClick:()=>{try{navigator.clipboard.writeText(m),n(!0)}catch(e){console.log(e)}}},"Copy to Clipboard"),l?a.createElement("label",{className:"block ml-4 mt-4 p-2 px-4 text-yellow-700"},"Copied to Clipboard"):a.createElement(a.Fragment,null)),a.createElement("h3",{className:"w-full block mt-10 font-bold text-yellow-700"},"Concatenated Text (XML):"),a.createElement("pre",{className:"mt-1 p-4 bg-gray-200 border border-gray-300 rounded text-brown-700 text-wrap"},u),a.createElement("div",{className:"flex flex-row mb-8"},a.createElement("button",{className:"block mt-4 p-2 px-4 bg-[#e5d2c3] text-[#6d5d52] rounded-md cursor-pointer transition-colors duration-300",onClick:()=>{try{navigator.clipboard.writeText(u),c(!0)}catch(e){console.log(e)}}},"Copy XML to Clipboard"),o?a.createElement("label",{className:"block ml-4 mt-4 p-2 px-4 text-yellow-700"},"Copied XML to Clipboard"):a.createElement(a.Fragment,null)))))}},7200:function(e,t,l){l.r(t),l.d(t,{Head:function(){return n}});var a=l(7294),r=l(6943);t.default=()=>a.createElement("main",{className:"h-screen h-text-gray-900 font-sans"},a.createElement(r.default,null));const n=()=>a.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8ab08a2941cc10df58ce.js.map