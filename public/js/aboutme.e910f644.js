(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aboutme"],{"132d":function(t,e,i){"use strict";i("7db0"),i("caad"),i("c975"),i("fb6a"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("c96a");var n,s=i("5530"),a=(i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),l=i("7560"),c=i("80d2"),d=i("2b0e"),h=i("58df");function u(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var p=Object(h["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["v"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(c["e"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(s["a"])(Object(s["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(s=t.slice(0,a),u(s)&&(s="")),n.class[s]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i=this.getSize(),n=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:i?{fontSize:i,height:i,width:i}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(s,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(p,i,s?[s]:n)}})},2342:function(t,e,i){"use strict";var n=i("a19c"),s=i.n(n);s.a},"26aa":function(t,e,i){"use strict";var n=i("fa0c"),s=i.n(n);s.a},4804:function(t,e,i){},"59e7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("BaseCard",[i("AboutMeContent")],1)},s=[],a=i("ff7d"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.complete?i("v-layout",{attrs:{column:""}},[i("h1",{staticClass:"text-center"},[t._v("A little about me")]),i("p",[t._v(" My name is Greg Field, I am a Software Developer working at AuraQ in Malvern, UK. "),i("br"),t._v("I have completed a BSc.in Audio & Music Technology at the University of the West of England in Bristol. "),i("br"),t._v("I have also completed a MSc. in Computer Sceience at the University of Birmingham. "),i("br")]),i("h2",{staticClass:"text-center"},[t._v("Techical Skills")]),i("v-layout",{attrs:{"justify-center":""}},[i("v-list",{staticClass:"text-center",staticStyle:{background:"none"},attrs:{dense:""}},t._l(t.skills,(function(e){return i("v-list-item",{key:e.title},[i("v-list-item-title",{staticClass:"primary--text"},[i("b",[t._v(t._s(e.title)+":")]),t._v(" "+t._s(e.skill)+" ")])],1)})),1)],1),i("h2",{staticClass:"text-center"},[t._v("Hobbies & Interests")]),i("p",[t._v(" I enjoy tech and music. I am currently tinkering around with a Raspberry Pi and automating some of my devices using the Home Assistant OS. ")])],1):i("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[i("h1",[t._v("In Progress")])])},o=[],l={name:"AboutMeContent",data:function(){return{complete:!1,skills:[{title:"Languages",skill:"Java, Javascript, Python"},{title:"Database",skill:"Postgres, MongoDB"},{title:"Front-end",skill:"Vue Js,HTML,CSS,SCSS"},{title:"Project Mangemnt",skill:"GIT, Trello"}]}}},c=l,d=(i("2342"),i("2877")),h=i("6544"),u=i.n(h),f=i("a722"),p=i("8860"),v=i("da13"),m=i("5d23"),g=Object(d["a"])(c,r,o,!1,null,null,null),b=g.exports;u()(g,{VLayout:f["a"],VList:p["a"],VListItem:v["a"],VListItemTitle:m["b"]});var x={name:"AboutMeView",components:{BaseCard:a["a"],AboutMeContent:b},data:function(){return{content:b}}},y=x,C=Object(d["a"])(y,n,s,!1,null,null,null);e["default"]=C.exports},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return l}));var n=i("b0af"),s=i("80d2"),a=Object(s["f"])("v-card__actions"),r=Object(s["f"])("v-card__subtitle"),o=Object(s["f"])("v-card__text"),l=Object(s["f"])("v-card__title");n["a"]},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},a19c:function(t,e,i){},fa0c:function(t,e,i){},ff7d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"primary lighten-2 rounded-xl",style:{width:t.cardWidth,height:t.cardHeight,padding:t.padding},attrs:{to:t.to}},[t.collapsible?i("v-icon",{class:[t.hide?"showBtn":"hideBtn",t.iconRight?"right":"left"],on:{click:function(e){return t.hideShow()}}},[t._v(t._s(t.plusMinusIcon))]):t._e(),i("v-layout",{attrs:{"justify-center":""}},[!t.hide||t.keepTitle?i("v-card-title",{staticClass:"secondary--text font-weight-bold pa-0",attrs:{id:"cardTitle"}},[t._v(t._s(t.title))]):t._e()],1),t.hide?t._e():i("v-layout",{attrs:{"justify-center":"","align-center":""}},[t._t("default")],2)],1)},s=[],a={name:"BaseCard",props:["title","collapsible","keepTitle","iconRight","to"],methods:{hideShow:function(){this.$emit("hideShow",this.hide),this.hide?(this.plusMinusIcon="mdi-minus-box-outline",this.cardWidth="100%",this.cardHeight="100%",this.hideShowClass="hideBtn",this.padding="16px"):(this.plusMinusIcon="mdi-plus-box-outline",this.padding="0px",this.keepTitle?this.cardWidth=parseInt(getComputedStyle(document.getElementById("cardTitle")).width)+24+7+70+"px":this.cardWidth="40px",this.cardHeight="40px",this.hideShowClass="showBtn"),this.hide=!this.hide}},data:function(){return{plusMinusIcon:"mdi-minus-box-outline",cardWidth:"100%",cardHeight:"100%",padding:"16px",hide:!1,cardTitle:this.title?this.title:""}}},r=a,o=(i("26aa"),i("2877")),l=i("6544"),c=i.n(l),d=i("b0af"),h=i("99d9"),u=i("132d"),f=i("a722"),p=Object(o["a"])(r,n,s,!1,null,"986fcdee",null);e["a"]=p.exports;c()(p,{VCard:d["a"],VCardTitle:h["b"],VIcon:u["a"],VLayout:f["a"]})}}]);
//# sourceMappingURL=aboutme.e910f644.js.map