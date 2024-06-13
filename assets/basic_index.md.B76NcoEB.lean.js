import{d as h,o as n,c as s,j as e,h as l,_ as p,I as d,a,a2 as _}from"./chunks/framework.DjBSxm0c.js";const u=h({__name:"Voice",setup(r){function t(){new Audio("/assets/kotori.mp3").play()}return(o,i)=>(n(),s("span",null,[e("input",{type:"image",src:"https://cn.vitejs.dev/voice.svg#voice",onClick:i[0]||(i[0]=c=>t()),class:"voice",style:{"background-color":"rgb(243, 244, 245)",border:"none",padding:"3px","border-radius":"4px","vertical-align":"bottom",height:"1.5em",width:"1.5em"}})]))}}),g=["href","title"],b=["src","alt"],m=h({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"latest"}},setup(r){const t=r,o=l(()=>`https://www.npmjs.com/package/${t.package}`),i=l(()=>t.distTag?`${t.package}@${t.distTag}`:t.package),c=l(()=>`https://badgen.net/npm/v/${t.package}/${t.distTag}?label=${encodeURIComponent(i.value)}`);return(K,y)=>(n(),s("a",{class:"npm-badge",href:o.value,title:r.package,target:"_blank",rel:"noopener noreferrer"},[e("img",{src:c.value,alt:r.package},null,8,b)],8,g))}}),f=p(m,[["__scopeId","data-v-8bf061d3"]]),k=e("h1",{id:"简介",tabindex:"-1"},[a("简介 "),e("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),v=e("hr",null,null,-1),x=e("p",null,[a("kotori 是一个"),e("strong",null,"跨平台、解耦合、现代化"),a("于一体的聊天机器人框架，运行于 Node.js 环境，使用 TypeScript 语言开发。")],-1),q=e("h2",{id:"概述",tabindex:"-1"},[a("概述 "),e("a",{class:"header-anchor",href:"#概述","aria-label":'Permalink to "概述"'},"​")],-1),T=e("code",null,"/kotolɪ/",-1),N=e("a",{href:"http://key.visualarts.gr.jp/",target:"_blank",rel:"noreferrer"},"Key 公式",-1),P=e("a",{href:"https://bgm.tv/subject/4022",target:"_blank",rel:"noreferrer"},"《Rewrite》",-1),C=e("a",{href:"https://bgm.tv/character/12063",target:"_blank",rel:"noreferrer"},"神户小鸟",-1),S=_("",11),I=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"basic/index.md","filePath":"basic/index.md","lastUpdated":1715495752000}'),$={name:"basic/index.md"},A=Object.assign($,{setup(r){return(t,o)=>(n(),s("div",null,[k,d(f,{package:"kotori-bot"}),v,x,q,e("p",null,[a("「Kotori」是一个罗马字，在日语中是「ことり」（小鳥）的意思，发音为 "),T,a(),d(u),a("，该名字取自于 "),N,a(" 的游戏 "),P,a(" 中主要女性角色之一："),C,a(" (神戸（かんべ） 小鳥（ことり）)。 借助 Kotori，可快速搭建一个多平台、功能强大的聊天机器人应用，通过安装不同模块为 Kotori 扩展功能、玩法和个性化配置等。同时，Kotori 为开发者提供了现成的 Cli 用于模块开发与 Kotori 二次开发。")]),S]))}});export{I as __pageData,A as default};
