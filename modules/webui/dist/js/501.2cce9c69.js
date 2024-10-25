"use strict";(self["webpackChunkkams"]=self["webpackChunkkams"]||[]).push([[501],{5501:function(t,s,o){o.r(s),o.d(s,{default:function(){return v}});var i=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bg",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(256, 256, 256, 0.8)"}},[s("div",{staticClass:"login-container"},[t._m(0),s("div",{staticClass:"tab"},[s("div",{staticClass:"btn tab-login",class:{current:t.whichTab},on:{click:function(s){return t.changeTab("login")}}},[t._v(" 登录 ")]),s("div",{staticClass:"btn tab-register",class:{current:!t.whichTab},on:{click:function(s){return t.changeTab("register")}}},[t._v(" 配置 ")]),s("div",{staticClass:"bottom-line",class:{"line-right":!t.whichTab}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.whichTab,expression:"whichTab"}],staticClass:"border"},[s("pps-form",{on:{submit:function(s){return t.loginFn()}}},[s("pps-input",{attrs:{clearable:"",content:t.loginForm.username,icon:"pps-icon-admin",placeholder:"用户名"},on:{"update:content":function(s){return t.$set(t.loginForm,"username",s)}}}),s("pps-input",{attrs:{clearable:"",content:t.loginForm.password,icon:"pps-icon-lock",type:"password",placeholder:"密码"},on:{"update:content":function(s){return t.$set(t.loginForm,"password",s)}}}),s("div",[s("a",{staticClass:"forget",on:{click:function(s){return t.showDialog("forget")}}},[t._v("忘记密码？")])]),s("pps-button",{staticClass:"login",attrs:{theme:"confirm"}},[t._v("登录")])],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.whichTab,expression:"!whichTab"}],staticClass:"border config"},[s("pps-form",{on:{submit:function(s){return t.submitConfigFn()},reset:function(s){return t.resetConfigFn()}}},[s("pps-input",{staticStyle:{position:"relative"},attrs:{clearable:"",content:t.configForm.host,icon:"pps-icon-host",placeholder:"无前缀后端IP地址"},on:{"update:content":function(s){return t.$set(t.configForm,"host",s)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("div",{staticClass:"cmd-search-select",on:{click:function(s){t.isShowSelect=!t.isShowSelect}}},[s("input",{staticClass:"select-label",attrs:{type:"text",readonly:""},domProps:{value:`${t.ssl}//`}}),s("div",{staticClass:"icon"},[s("i",{staticClass:"el-icon-arrow-down"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSelect,expression:"isShowSelect"}],staticClass:"select-dropdown"},t._l(["https:","http:"],(function(o,i){return s("div",{key:i,staticClass:"select-item",on:{click:function(s){return t.selectSslFn(o)}}},[t._v(" "+t._s(`${o}//`)+" ")])})),0)]},proxy:!0}])}),s("pps-input",{attrs:{clearable:"",content:t.configForm.port,icon:"pps-icon-port",placeholder:"后端端口号"},on:{"update:content":function(s){return t.$set(t.configForm,"port",s)}}}),s("div",[s("p",[t._v("警告！若无需分离前后端请谨慎修改！")])]),s("div",{staticClass:"submit"},[s("pps-button",{attrs:{theme:"confirm"}},[t._v("提交")]),s("pps-button",{attrs:{theme:"",type:"reset"}},[t._v("重置")])],1)],1)],1)]),s("div",{staticClass:"foot"},[s("div",{staticClass:"list"}),s("div",{staticClass:"copylist"},[s("copy-icon"),t._v(" Powered by kotori ")],1)]),s("pps-dialog",{attrs:{content:t.dialogData.message,title:t.dialogData.title,show:t.isShowDialog},on:{"update:show":function(s){t.isShowDialog=s},confirmed:function(s){t.loading=!1},canceled:function(s){t.loading=!1}}})],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"logo"},[s("div",{staticClass:"login-header"},[s("img",{attrs:{src:o(3086),alt:""}}),s("div",[t._v("Kotori")])]),s("div",{staticClass:"login-desc"},[t._v("kams 是一个专为Kotori打造的后台管理界面")])])}],n=(o(381),function(){var t=this,s=t._self._c;return s("svg",{attrs:{viewBox:"64 64 896 896",focusable:"false","data-icon":"copyright",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}})])}),a=[],r={name:"copyIcon"},c=r,l=o(8529),h=(0,l.A)(c,n,a,!1,null,null,null),p=h.exports,u=o(2197),d=o(9335),g=o(837),m={name:"myLogin",components:{copyIcon:p},data(){return{tabsFlag:"login",isShowDialog:!1,loading:!1,isShowSelect:!1,ssl:"https:",dialogData:{},loginForm:{username:"",password:""},configForm:{host:"",port:"",wsHost:""}}},methods:{...(0,d.mapMutations)("layoutOption",["updateToken","updateHost","updatePort","updateWsHost","updateUsername","updatePassword"]),changeTab(t){this.tabsFlag=t},selectSslFn(t){this.isShowSelect=!1,this.ssl=t},updataBackendConfigFn(){const t="https:"===this.ssl,s=this.configForm.port||t?443:80,o=(t?"wss://":"ws://")+this.configForm.host,i=this.ssl+"//"+this.configForm.host;this.updateHost(i),this.updatePort(s),this.updateWsHost(o),(0,g.c)(this.$store),this.mountBackendConfigFn(),this.$message.success("修改成功！")},submitConfigFn(){const t=window.location.protocol,s="https:"===t&&t!==this.ssl;if(s)return this.$confirm("配置与当前页面协议不一致, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.updataBackendConfigFn()})).catch((()=>{this.$message({type:"info",message:"已取消修改"})}));this.updataBackendConfigFn()},resetConfigFn(){this.configForm={host:this.host,port:this.port,wsHost:this.wsHost},this.$message.info("已重置！")},async loginFn(){this.loading=!0;try{const{data:t}=await(0,u.MI)(this.loginForm);t.token&&(this.updateToken(t.token),this.updateUsername(this.loginForm.username),this.updatePassword(this.loginForm.password),this.loading=!1,this.$router.push("/"))}catch(t){if(this.loading=!1,404===t.response.status)return this.showDialog("404");if(401===t.response.status)return this.showDialog("401");this.showDialog("",t.message)}},showDialog(t,s){this.dialogData=t&&"forget"===t?{title:"提示",message:"暂未开放！"}:t&&"401"===t?{title:"警告",message:"账号或密码不正确！"}:t&&"404"===t?{title:"警告",message:"请求资源不存在！检查后端服务是否正常！"}:{title:"警告",message:s},this.isShowDialog=!0},mountBackendConfigFn(){this.configForm.host=this.host.replace(/^(https?:\/\/)/,""),this.configForm.port=this.port}},computed:{...(0,d.mapState)("layoutOption",["host","port","wsHost","username","password"]),whichTab(){return"login"===this.tabsFlag}},mounted(){this.mountBackendConfigFn(),this.loginForm={username:this.username,password:this.password}}},f=m,w=(0,l.A)(f,i,e,!1,null,"2081d610",null),v=w.exports},3086:function(t,s,o){t.exports=o.p+"img/favicon.b107f5c1.svg"}}]);
//# sourceMappingURL=501.2cce9c69.js.map