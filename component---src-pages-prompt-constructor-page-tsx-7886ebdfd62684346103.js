"use strict";(self.webpackChunkllm_engineering_magic=self.webpackChunkllm_engineering_magic||[]).push([[164],{7377:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var l=a(7294);const o={container:{maxWidth:"100%",margin:"0 auto",padding:"20px",backgroundColor:"#f3e9e1",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"row",alignItems:"center"},label:{display:"block",marginBottom:"8px",fontWeight:"bold",color:"#8c7a6d"},input:{width:"100%",padding:"8px 12px",marginBottom:"16px",border:"1px solid #d9c9b8",borderRadius:"4px",backgroundColor:"#fff",color:"#4d4d4d"},output:{marginTop:"24px",padding:"16px",backgroundColor:"#f7f1eb",border:"1px solid #e7d9ca",borderRadius:"4px",color:"#6d5d52"},button:{display:"block",marginTop:"16px",padding:"8px 16px",backgroundColor:"#e5d2c3",color:"#6d5d52",border:"none",borderRadius:"4px",cursor:"pointer",transition:"backgroundColor 0.3s ease"},buttonHover:{backgroundColor:"#d9c9b8"}};var r=e=>{let{label:t,id:a,value:r,onChange:n}=e;return l.createElement("div",null,l.createElement("label",{htmlFor:a,style:o.label},t,":"),l.createElement("input",{style:o.input,type:"text",id:a,value:r,onChange:n}))};var n=()=>{const{0:e,1:t}=(0,l.useState)(""),{0:a,1:n}=(0,l.useState)(""),{0:d,1:i}=(0,l.useState)(""),{0:u,1:c}=(0,l.useState)(""),p="Role: "+e+"\nInstruction: "+a+"\nDetail: "+d+"\nOutput Format: "+u;return l.createElement(l.Fragment,null,l.createElement("div",{className:"w-full flex flex-row justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start"},l.createElement("div",{className:"w-full m-5"},l.createElement(r,{label:"Role",id:"role",value:e,onChange:e=>{t(e.target.value)}}),l.createElement(r,{label:"Instruction",id:"instruction",value:a,onChange:e=>{n(e.target.value)}}),l.createElement(r,{label:"Detail",id:"detail",value:d,onChange:e=>{i(e.target.value)}}),l.createElement(r,{label:"Output Format",id:"outputFormat",value:u,onChange:e=>{c(e.target.value)}})),l.createElement("div",{className:"w-full"},l.createElement("h3",{style:o.label},"Concatenated Text:"),l.createElement("pre",{style:o.output},p),l.createElement("button",{style:o.button,onClick:()=>{navigator.clipboard.writeText(p).then((()=>{alert("Text copied to clipboard!")})).catch((e=>{console.error("Failed to copy text: ",e)}))}},"Copy to Clipboard"))))}}}]);
//# sourceMappingURL=component---src-pages-prompt-constructor-page-tsx-7886ebdfd62684346103.js.map