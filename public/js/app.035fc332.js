(function(t){function e(e){for(var a,r,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({aboutme:"aboutme","contact~snake":"contact~snake",contact:"contact",snake:"snake",synth:"synth"}[t]||t)+"."+{aboutme:"ec558173","contact~snake":"62753477",contact:"39849612",snake:"870b6357",synth:"a05ffd94"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={aboutme:1,"contact~snake":1,contact:1,snake:1,synth:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({aboutme:"aboutme","contact~snake":"contact~snake",contact:"contact",snake:"snake",synth:"synth"}[t]||t)+"."+{aboutme:"8cfa9b48","contact~snake":"a5f04f35",contact:"961faaad",snake:"53da4ad5",synth:"ba430a16"}[t]+".css",o=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ba9":function(t,e,n){"use strict";var a=n("3f5c"),r=n.n(a);r.a},"1ee9":function(t,e,n){},"3f5c":function(t,e,n){},"553e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"primary",attrs:{id:"app"},on:{preventScroll:function(e){return t.preventScroll()}}},[n("TheHeader",{attrs:{title:"Prog:greg"}}),n("v-main",{staticClass:"background"},[n("div",{attrs:{id:"model"}},[n("v-container",{staticClass:"pa-0 v-textarea--auto-grow fill-height",attrs:{fluid:""}},[n("v-layout",{staticClass:"pa-2",attrs:{"justify-center":"","align-center":""}},[n("router-view")],1)],1)],1)])],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"topbar primary--text",attrs:{id:"header"}},[n("v-layout",{staticStyle:{"justify-content":"flex-end"}},[n("ThemeButtons")],1),n("v-row",{staticClass:"mb-4",attrs:{align:"center",justify:"center"}},[n("h1",[t._v(t._s(t.title))])]),n("Tabs")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticStyle:{display:"flex"}},t._l(t.tabs,(function(e){return n("v-tabs",{key:e.title,attrs:{"background-color":"topbar","icons-and-text":"",grow:""}},[n("v-tab",{staticClass:"topbar primary--text",attrs:{to:e.component}},[t._v(" "+t._s(e.title)+" "),n("v-icon",{staticClass:"primary--text"},[t._v(t._s(e.icon))])],1)],1)})),1)},u=[],l={name:"Tabs",data:function(){return{tabs:[{title:"Projects",icon:"mdi-code-braces",component:"/"},{title:"About Me",icon:"mdi-account-circle",component:"/AboutMe"},{title:"Contact",icon:"mdi-at",component:"/Contact"}]}}},d=l,p=(n("711a"),n("2877")),f=n("6544"),m=n.n(f),h=n("b0af"),g=n("132d"),b=n("71a3"),y=n("fe57"),v=Object(p["a"])(d,s,u,!1,null,"211b43de",null),k=v.exports;m()(v,{VCard:h["a"],VIcon:g["a"],VTab:b["a"],VTabs:y["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"20px 20px 0 0",display:"flex"}},[n("h3",{staticStyle:{"margin-right":"5px"}},[t._v("Pick a theme")]),t._l(t.themes,(function(e){return n("BaseButton",{key:e.name,staticStyle:{margin:"0 10px 0 0"},attrs:{width:"1",color:e.name},on:{click:function(n){return t.changeTheme(e.color)}}})}))],2)},S=[],x=n("82ea"),C=n("fcf4"),_={primary:C["a"].shades.black,secondary:"#FFF",button:"#000",topbar:"#DDD",background:"#FFF"},j={primary:C["a"].shades.white,secondary:"#191919",topbar:"#3F3F3F",background:"#191919"},T={primary:C["a"].blue.darken4,secondary:C["a"].blue.lighten4,topbar:C["a"].blue.lighten3,background:C["a"].blue.darken4},V={primary:C["a"].red.darken4,secondary:C["a"].red.lighten4,topbar:C["a"].red.lighten3,background:C["a"].red.darken4},O={primary:C["a"].orange.darken4,secondary:C["a"].orange.lighten4,topbar:C["a"].orange.lighten3,background:C["a"].orange.darken4},P={primary:C["a"].yellow.darken4,secondary:C["a"].yellow.lighten4,topbar:C["a"].yellow.lighten3,background:C["a"].yellow.darken4},E={primary:C["a"].green.darken4,secondary:C["a"].green.lighten4,topbar:C["a"].green.lighten3,background:C["a"].green.darken4},I={name:"ThemeButtons",components:{BaseButton:x["a"]},data:function(){return{themes:[{color:_,name:"white"},{color:j,name:"black"},{color:V,name:"red"},{color:T,name:"blue"},{color:O,name:"orange"},{color:P,name:"yellow"},{color:E,name:"green"}]}},created:function(){var t=JSON.parse(localStorage.getItem("CurrentTheme"));this.$vuetify.theme.themes.light=t||_},methods:{changeTheme:function(t){this.$vuetify.theme.themes.light=t,localStorage.setItem("CurrentTheme",JSON.stringify(t))}}},B=I,M=Object(p["a"])(B,w,S,!1,null,"31f0721c",null),N=M.exports,R={name:"Header",components:{Tabs:k,ThemeButtons:N},props:{title:{type:String,required:!0}}},A=R,$=(n("0ba9"),n("a722")),F=n("0fd9"),H=Object(p["a"])(A,c,i,!1,null,"cb125c0a",null),L=H.exports;m()(H,{VCard:h["a"],VLayout:$["a"],VRow:F["a"]});var G={components:{TheHeader:L}},D=G,W=(n("5c0b"),n("7496")),J=n("a523"),q=n("f6c4"),z=Object(p["a"])(D,r,o,!1,null,null,null),K=z.exports;m()(z,{VApp:W["a"],VContainer:J["a"],VLayout:$["a"],VMain:q["a"]});n("d3b7");var U=n("8c4f"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"projectsGrid"},[n("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},t._l(t.projects,(function(e){return n("v-col",{key:e.title,attrs:{cols:"auto","align-self":"center"}},[n("v-hover",[n("BaseCard",{staticClass:"primary",attrs:{hover:"",outlined:"",ripple:"",to:e.href}},[n("v-card-title",{staticClass:"primary--text",domProps:{textContent:t._s(e.title)}}),n("v-row",[n("v-img",{staticClass:"align-center justify-center",attrs:{contain:"",width:"200",height:"200",src:e.img}})],1)],1)],1)],1)})),1)],1)},X=[],Y=n("ff7d"),Z={name:"ProjectsGrid",components:{BaseCard:Y["a"]},data:function(){return{projects:[{title:"Snake",href:"/Snake",img:"snake_thumb.png"}]}},methods:{}},tt=Z,et=(n("79be"),n("99d9")),nt=n("62ad"),at=n("ce87"),rt=n("adda"),ot=Object(p["a"])(tt,Q,X,!1,null,"d514e06e",null),ct=ot.exports;m()(ot,{VCardTitle:et["b"],VCol:nt["a"],VContainer:J["a"],VHover:at["a"],VImg:rt["a"],VLayout:$["a"],VRow:F["a"]}),a["a"].use(U["a"]);var it=[{path:"/",name:"Home",component:ct},{path:"/AboutMe",name:"AboutMe",component:function(){return n.e("aboutme").then(n.bind(null,"59e7"))}},{path:"/Contact",name:"Contact",component:function(){return Promise.all([n.e("contact~snake"),n.e("contact")]).then(n.bind(null,"b8fa"))}},{path:"/Snake",name:"Snake",component:function(){return Promise.all([n.e("contact~snake"),n.e("snake")]).then(n.bind(null,"714a"))}},{path:"/Synth",name:"Synth",component:function(){return n.e("synth").then(n.bind(null,"3e17"))}}],st=new U["a"]({mode:"history",routes:it}),ut=st,lt=n("2f62"),dt=(n("96cf"),n("1da1")),pt=n("bc3a"),ft=n.n(pt),mt={gameState:"setup",playerName:"",currentScore:0,scores:{headers:[{align:"start",text:"Rank",value:"index"},{text:"Name",value:"username",align:"center"},{text:"Score",value:"score",align:"end"}],scores:[]}},ht={getScores:function(t){return t.scores},getPlayerName:function(t){return t.playerName}},gt={getSnakeScores:function(t){return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,ft.a.get("/api/users");case 3:for(a=e.sent,r=a.data,o=1,r[0].index=1,c=1;c<r.length;c++)r[c-1].score===r[c].score?r[c].index=r[c-1].index:(r[c].index=o+1,o++);n("setScores",r);case 9:case"end":return e.stop()}}),e)})))()},endGame:function(t,e){return Object(dt["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.commit,a("updateScore",e),a("updateGameState","end");case 3:case"end":return n.stop()}}),n)})))()}},bt={updateGameState:function(t,e){return t.gameState=e},setScores:function(t,e){return t.scores.scores=e},updatePlayerName:function(t,e){return t.playerName=e},updateScore:function(t,e){return t.currentScore=e}},yt={state:mt,getters:ht,actions:gt,mutations:bt},vt=(n("b0c0"),n("bc3a")),kt="/email/send",wt={contactInfo:{name:"",email:"",subject:"",message:""},sent:!1},St={getName:function(t){return t.contactInfo.name},getEmail:function(t){return t.contactInfo.email},getSubject:function(t){return t.contactInfo.subject},getMessage:function(t){return t.contactInfo.message}},xt={sendEmail:function(t){return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=t.state,vt.post(kt,a.contactInfo).then(function(){var t=Object(dt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 200===e.status&&n("updateSent",!0),t.abrupt("return",new Promise((function(t){setTimeout((function(){t()}),5e3)})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then((function(){return n("updateSent",!1)})).catch((function(t){t.response,404===t.response.status&&console.log(t.response.data.error)}));case 2:case"end":return e.stop()}}),e)})))()}},Ct={updateName:function(t,e){t.contactInfo.name=e},updateEmail:function(t,e){t.contactInfo.email=e},updateSubject:function(t,e){t.contactInfo.subject=e},updateMessage:function(t,e){t.contactInfo.message=e},updateSent:function(t,e){return t.sent=e,new Promise((function(t){setTimeout((function(){t()}),1e4)}))}},_t={state:wt,getters:St,actions:xt,mutations:Ct},jt=n("bc3a"),Tt={sent:!1},Vt={getCV:function(){var t=this;return Object(dt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Get CV"),e.next=3,jt.get("/get-file/CV").then((function(t){return console.log(t),n=document.createElement("a"),n.download="GregFieldCV.pdf",n.href="data:application/octet-stream;base64,"+t.data,n})).catch((function(e){console.log(e),t.errorMessage="Sorry the file couldn't be found."}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()}},Ot={state:Tt,actions:Vt};a["a"].use(lt["a"]);var Pt=new lt["a"].Store({strict:!1,modules:{SnakeGame:yt,Contact:_t,AboutMe:Ot}}),Et=(n("5363"),n("f309")),It=n("bfd9");a["a"].use(Et["a"]);var Bt=new Et["a"]({preset:It["preset"],icons:{iconfont:"mdi"},theme:{dark:!1,themes:{light:_},options:{customProperties:!0}}}),Mt=n("0086"),Nt=n.n(Mt);a["a"].config.productionTip=!1,a["a"].use(Nt.a),new a["a"]({router:ut,store:Pt,vuetify:Bt,render:function(t){return t(K)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"711a":function(t,e,n){"use strict";var a=n("a93a"),r=n.n(a);r.a},"79be":function(t,e,n){"use strict";var a=n("1ee9"),r=n.n(a);r.a},"82ea":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"rounded-pill primary--text",attrs:{color:t.color,"min-width":t.width,to:t.to},on:{click:t.click}},[n("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),t._t("default"),void 0!==t.icon?n("v-icon",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.icon))]):t._e()],2)},r=[],o=(n("a9e3"),{name:"BaseButton",props:{width:{type:String},title:{type:[String,Number]},icon:{type:String},color:{type:String,default:"secondary"},to:{type:String}},methods:{click:function(t){this.$emit("click",t)}}}),c=o,i=(n("e3d0"),n("2877")),s=n("6544"),u=n.n(s),l=n("8336"),d=n("132d"),p=Object(i["a"])(c,a,r,!1,null,"649d3865",null);e["a"]=p.exports;u()(p,{VBtn:l["a"],VIcon:d["a"]})},"9c0c":function(t,e,n){},a16d:function(t,e,n){"use strict";var a=n("553e"),r=n.n(a);r.a},a93a:function(t,e,n){},e3d0:function(t,e,n){"use strict";var a=n("e5a6"),r=n.n(a);r.a},e5a6:function(t,e,n){},ff7d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"rounded-xl topbar",style:{width:t.cardWidth,height:t.cardHeight,padding:t.padding},attrs:{to:t.to}},[n("v-layout",{staticClass:"pa-0 ma-0 fill-height",attrs:{column:"","justify-center":"","align-center":""}},[!t.hide||t.keepTitle?n("v-card-title",{staticClass:"primary--text text-center font-weight-bold pa-0",staticStyle:{"font-size":"2em","user-select":"none"},attrs:{id:"cardTitle"}},[t._v(t._s(t.title))]):t._e(),t.hide?t._e():n("v-layout",{staticClass:"fill-height",staticStyle:{"min-width":"100%"},attrs:{"justify-center":"","align-center":""}},[t._t("default")],2)],1)],1)},r=[],o={name:"BaseCard",props:{title:{type:String},to:{type:String}},methods:{hideShow:function(){this.$emit("hideShow",this.hide),this.hide?(this.plusMinusIcon="mdi-minus-box-outline",this.cardWidth="100%",this.cardHeight="100%",this.hideShowClass="hideBtn",this.padding="16px"):(this.plusMinusIcon="mdi-plus-box-outline",this.padding="0px",this.keepTitle?this.cardWidth=parseInt(getComputedStyle(document.getElementById("cardTitle")).width)+24+7+70+"px":this.cardWidth="40px",this.cardHeight="40px",this.hideShowClass="showBtn"),this.hide=!this.hide}},data:function(){return{plusMinusIcon:"mdi-minus-box-outline",cardWidth:"100%",cardHeight:"100%",padding:"16px",hide:!1,cardTitle:this.title?this.title:""}}},c=o,i=(n("a16d"),n("2877")),s=n("6544"),u=n.n(s),l=n("b0af"),d=n("99d9"),p=n("a722"),f=Object(i["a"])(c,a,r,!1,null,"f4eae9f6",null);e["a"]=f.exports;u()(f,{VCard:l["a"],VCardTitle:d["b"],VLayout:p["a"]})}});
//# sourceMappingURL=app.035fc332.js.map