"use strict";(self.webpackChunkllm_engineering_magic=self.webpackChunkllm_engineering_magic||[]).push([[691,164],{7377:function(e,t,o){o.r(t),o.d(t,{default:function(){return r}});var l=o(7294);const a={container:{maxWidth:"100%",margin:"0 auto",padding:"20px",backgroundColor:"#f3e9e1",borderRadius:"8px",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",display:"flex",flexDirection:"row",alignItems:"center"},label:{display:"block",marginBottom:"8px",fontWeight:"bold",color:"#8c7a6d"},input:{width:"100%",padding:"8px 12px",marginBottom:"16px",border:"1px solid #d9c9b8",borderRadius:"4px",backgroundColor:"#fff",color:"#4d4d4d"},output:{marginTop:"24px",padding:"16px",backgroundColor:"#f7f1eb",border:"1px solid #e7d9ca",borderRadius:"4px",color:"#6d5d52"},button:{display:"block",marginTop:"16px",padding:"8px 16px",backgroundColor:"#e5d2c3",color:"#6d5d52",border:"none",borderRadius:"4px",cursor:"pointer",transition:"backgroundColor 0.3s ease"},buttonHover:{backgroundColor:"#d9c9b8"}};var n=e=>{let{label:t,id:o,value:n,onChange:r}=e;return l.createElement("div",null,l.createElement("label",{htmlFor:o,style:a.label},t,":"),l.createElement("input",{style:a.input,type:"text",id:o,value:n,onChange:r}))};var r=()=>{const{0:e,1:t}=(0,l.useState)({role:"",instruction:"",detail:"",outputFormat:""}),o="Role: "+e.role+"\nInstruction: "+e.instruction+"\nDetail: "+e.detail+"\nOutput Format: "+e.outputFormat,r="<Role>"+e.role+"</Role>\n<Instruction>"+e.instruction+"</Instruction>\n<Detail>"+e.detail+"</Detail>\n<OutputFormat>"+e.outputFormat+"</OutputFormat>",i=e=>{const{id:o,value:l}=e.target;t((e=>({...e,[o]:l})))};return l.createElement(l.Fragment,null,l.createElement("div",{className:"overflow-auto w-full flex flex-col justify-between p-5 bg-orange-100 rounded-lg shadow-md items-start md:flex-row"},l.createElement("div",{className:"w-full mb-5 md:w-1/2 md:m-5"},l.createElement(n,{label:"Role",id:"role",value:e.role,onChange:i}),l.createElement(n,{label:"Instruction",id:"instruction",value:e.instruction,onChange:i}),l.createElement(n,{label:"Detail",id:"detail",value:e.detail,onChange:i}),l.createElement(n,{label:"Output Format",id:"outputFormat",value:e.outputFormat,onChange:i})),l.createElement("div",{className:"w-full md:w-1/2 text-wrap"},l.createElement("h3",{className:"w-full",style:a.label},"Concatenated Text:"),l.createElement("pre",{className:"w-full text-wrap",style:a.output},o),l.createElement("button",{style:a.button,onClick:()=>{navigator.clipboard.writeText(o).then((()=>{alert("Text copied to clipboard!")})).catch((e=>{console.error("Failed to copy text: ",e)}))}},"Copy to Clipboard"),l.createElement("h3",{style:a.label},"Concatenated Text (XML):"),l.createElement("pre",{className:"w-full text-wrap",style:a.output},r),l.createElement("button",{style:a.button,onClick:()=>{navigator.clipboard.writeText(r).then((()=>{alert("XML Text copied to clipboard!")})).catch((e=>{console.error("Failed to copy XML text: ",e)}))}},"Copy XML to Clipboard"))))}},7200:function(e,t,o){o.r(t),o.d(t,{Head:function(){return r}});var l=o(7294),a=o(7377);const n={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"};t.default=()=>l.createElement("main",{style:n},l.createElement(a.default,null));const r=()=>l.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e3a76b2e5b0168829a4a.js.map