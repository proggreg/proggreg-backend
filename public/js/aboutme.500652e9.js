(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aboutme"],{"0d3b":function(e,t,n){var r=n("d039"),a=n("b622"),i=n("c430"),s=a("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),i&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},"132d":function(e,t,n){"use strict";n("7db0"),n("caad"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("2532"),n("498a"),n("c96a");var r,a=n("5530"),i=(n("4804"),n("7e2b")),s=n("a9ad"),o=n("af2b"),u=n("7560"),l=n("80d2"),c=n("2b0e"),h=n("58df");function f(e){return["fas","far","fal","fab","fad"].some((function(t){return e.includes(t)}))}function p(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(r||(r={}));var d=Object(h["a"])(i["a"],s["a"],o["a"],u["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(l["y"])(this,e)},getSize:function(){var e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(l["v"])(e).find((function(t){return e[t]}));return t&&r[t]||Object(l["e"])(this.size)},getDefaultData:function(){var e={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return e},applyColors:function(e){e.class=Object(a["a"])(Object(a["a"])({},e.class),this.themeClasses),this.setTextColor(this.color,e)},renderFontIcon:function(e,t){var n=[],r=this.getDefaultData(),a="material-icons",i=e.indexOf("-"),s=i<=-1;s?n.push(e):(a=e.slice(0,i),f(a)&&(a="")),r.class[a]=!0,r.class[e]=!s;var o=this.getSize();return o&&(r.style={fontSize:o}),this.applyColors(r),t(this.hasClickListener?"button":this.tag,r,n)},renderSvgIcon:function(e,t){var n=this.getSize(),r=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:n?{fontSize:n,height:n,width:n}:void 0});r.class["v-icon--svg"]=!0,this.applyColors(r);var i={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:n||"24",width:n||"24",role:"img","aria-hidden":!0}};return t(this.hasClickListener?"button":"span",r,[t("svg",i,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent:function(e,t){var n=this.getDefaultData();n.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(n.style={fontSize:r,height:r,width:r}),this.applyColors(n);var a=e.component;return n.props=e.props,n.nativeOn=n.on,t(a,n)}},render:function(e){var t=this.getIcon();return"string"===typeof t?p(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});t["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:d,functional:!0,render:function(e,t){var n=t.data,r=t.children,a="";return n.domProps&&(a=n.domProps.textContent||n.domProps.innerHTML||a,delete n.domProps.textContent,delete n.domProps.innerHTML),e(d,n,a?[a]:r)}})},2342:function(e,t,n){"use strict";var r=n("a19c"),a=n.n(r);a.a},"2b3d":function(e,t,n){"use strict";n("3ca3");var r,a=n("23e7"),i=n("83ab"),s=n("0d3b"),o=n("da84"),u=n("37e8"),l=n("6eeb"),c=n("19aa"),h=n("5135"),f=n("60da"),p=n("4df4"),d=n("6547").codeAt,g=n("5fb2"),v=n("d44e"),m=n("9861"),b=n("69f3"),w=o.URL,y=m.URLSearchParams,k=m.getState,L=b.set,S=b.getterFor("URL"),x=Math.floor,R=Math.pow,C="Invalid authority",U="Invalid scheme",B="Invalid host",A="Invalid port",j=/[A-Za-z]/,q=/[\d+-.A-Za-z]/,I=/\d/,O=/^(0x|0X)/,_=/^[0-7]+$/,P=/^\d+$/,E=/^[\dA-Fa-f]+$/,T=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,F=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,$=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,z=/[\u0009\u000A\u000D]/g,D=function(e,t){var n,r,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return B;if(n=V(t.slice(1,-1)),!n)return B;e.host=n}else if(Q(e)){if(t=g(t),T.test(t))return B;if(n=M(t),null===n)return B;e.host=n}else{if(F.test(t))return B;for(n="",r=p(t),a=0;a<r.length;a++)n+=X(r[a],J);e.host=n}},M=function(e){var t,n,r,a,i,s,o,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),t=u.length,t>4)return e;for(n=[],r=0;r<t;r++){if(a=u[r],""==a)return e;if(i=10,a.length>1&&"0"==a.charAt(0)&&(i=O.test(a)?16:8,a=a.slice(8==i?1:2)),""===a)s=0;else{if(!(10==i?P:8==i?_:E).test(a))return e;s=parseInt(a,i)}n.push(s)}for(r=0;r<t;r++)if(s=n[r],r==t-1){if(s>=R(256,5-t))return null}else if(s>255)return null;for(o=n.pop(),r=0;r<n.length;r++)o+=n[r]*R(256,3-r);return o},V=function(e){var t,n,r,a,i,s,o,u=[0,0,0,0,0,0,0,0],l=0,c=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,l++,c=l}while(f()){if(8==l)return;if(":"!=f()){t=n=0;while(n<4&&E.test(f()))t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,l>6)return;r=0;while(f()){if(a=null,r>0){if(!("."==f()&&r<4))return;h++}if(!I.test(f()))return;while(I.test(f())){if(i=parseInt(f(),10),null===a)a=i;else{if(0==a)return;a=10*a+i}if(a>255)return;h++}u[l]=256*u[l]+a,r++,2!=r&&4!=r||l++}if(4!=r)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;u[l++]=t}else{if(null!==c)return;h++,l++,c=l}}if(null!==c){s=l-c,l=7;while(0!=l&&s>0)o=u[l],u[l--]=u[c+s-1],u[c+--s]=o}else if(8!=l)return;return u},H=function(e){for(var t=null,n=1,r=null,a=0,i=0;i<8;i++)0!==e[i]?(a>n&&(t=r,n=a),r=null,a=0):(null===r&&(r=i),++a);return a>n&&(t=r,n=a),t},W=function(e){var t,n,r,a;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=x(e/256);return t.join(".")}if("object"==typeof e){for(t="",r=H(e),n=0;n<8;n++)a&&0===e[n]||(a&&(a=!1),r===n?(t+=n?":":"::",a=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},J={},N=f({},J,{" ":1,'"':1,"<":1,">":1,"`":1}),G=f({},N,{"#":1,"?":1,"{":1,"}":1}),Z=f({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),X=function(e,t){var n=d(e,0);return n>32&&n<127&&!h(t,e)?e:encodeURIComponent(e)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(e){return h(K,e.scheme)},Y=function(e){return""!=e.username||""!=e.password},ee=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},te=function(e,t){var n;return 2==e.length&&j.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},ne=function(e){var t;return e.length>1&&te(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},re=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&te(t[0],!0)||t.pop()},ae=function(e){return"."===e||"%2e"===e.toLowerCase()},ie=function(e){return e=e.toLowerCase(),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},se={},oe={},ue={},le={},ce={},he={},fe={},pe={},de={},ge={},ve={},me={},be={},we={},ye={},ke={},Le={},Se={},xe={},Re={},Ce={},Ue=function(e,t,n,a){var i,s,o,u,l=n||se,c=0,f="",d=!1,g=!1,v=!1;n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace($,"")),t=t.replace(z,""),i=p(t);while(c<=i.length){switch(s=i[c],l){case se:if(!s||!j.test(s)){if(n)return U;l=ue;continue}f+=s.toLowerCase(),l=oe;break;case oe:if(s&&(q.test(s)||"+"==s||"-"==s||"."==s))f+=s.toLowerCase();else{if(":"!=s){if(n)return U;f="",l=ue,c=0;continue}if(n&&(Q(e)!=h(K,f)||"file"==f&&(Y(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=f,n)return void(Q(e)&&K[e.scheme]==e.port&&(e.port=null));f="","file"==e.scheme?l=we:Q(e)&&a&&a.scheme==e.scheme?l=le:Q(e)?l=pe:"/"==i[c+1]?(l=ce,c++):(e.cannotBeABaseURL=!0,e.path.push(""),l=xe)}break;case ue:if(!a||a.cannotBeABaseURL&&"#"!=s)return U;if(a.cannotBeABaseURL&&"#"==s){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,l=Ce;break}l="file"==a.scheme?we:he;continue;case le:if("/"!=s||"/"!=i[c+1]){l=he;continue}l=de,c++;break;case ce:if("/"==s){l=ge;break}l=Se;continue;case he:if(e.scheme=a.scheme,s==r)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==s||"\\"==s&&Q(e))l=fe;else if("?"==s)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",l=Re;else{if("#"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),l=Se;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Ce}break;case fe:if(!Q(e)||"/"!=s&&"\\"!=s){if("/"!=s){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,l=Se;continue}l=ge}else l=de;break;case pe:if(l=de,"/"!=s||"/"!=f.charAt(c+1))continue;c++;break;case de:if("/"!=s&&"\\"!=s){l=ge;continue}break;case ge:if("@"==s){d&&(f="%40"+f),d=!0,o=p(f);for(var m=0;m<o.length;m++){var b=o[m];if(":"!=b||v){var w=X(b,Z);v?e.password+=w:e.username+=w}else v=!0}f=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(e)){if(d&&""==f)return C;c-=p(f).length+1,f="",l=ve}else f+=s;break;case ve:case me:if(n&&"file"==e.scheme){l=ke;continue}if(":"!=s||g){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(e)){if(Q(e)&&""==f)return B;if(n&&""==f&&(Y(e)||null!==e.port))return;if(u=D(e,f),u)return u;if(f="",l=Le,n)return;continue}"["==s?g=!0:"]"==s&&(g=!1),f+=s}else{if(""==f)return B;if(u=D(e,f),u)return u;if(f="",l=be,n==me)return}break;case be:if(!I.test(s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(e)||n){if(""!=f){var y=parseInt(f,10);if(y>65535)return A;e.port=Q(e)&&y===K[e.scheme]?null:y,f=""}if(n)return;l=Le;continue}return A}f+=s;break;case we:if(e.scheme="file","/"==s||"\\"==s)l=ye;else{if(!a||"file"!=a.scheme){l=Se;continue}if(s==r)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==s)e.host=a.host,e.path=a.path.slice(),e.query="",l=Re;else{if("#"!=s){ne(i.slice(c).join(""))||(e.host=a.host,e.path=a.path.slice(),re(e)),l=Se;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",l=Ce}}break;case ye:if("/"==s||"\\"==s){l=ke;break}a&&"file"==a.scheme&&!ne(i.slice(c).join(""))&&(te(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),l=Se;continue;case ke:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!n&&te(f))l=Se;else if(""==f){if(e.host="",n)return;l=Le}else{if(u=D(e,f),u)return u;if("localhost"==e.host&&(e.host=""),n)return;f="",l=Le}continue}f+=s;break;case Le:if(Q(e)){if(l=Se,"/"!=s&&"\\"!=s)continue}else if(n||"?"!=s)if(n||"#"!=s){if(s!=r&&(l=Se,"/"!=s))continue}else e.fragment="",l=Ce;else e.query="",l=Re;break;case Se:if(s==r||"/"==s||"\\"==s&&Q(e)||!n&&("?"==s||"#"==s)){if(ie(f)?(re(e),"/"==s||"\\"==s&&Q(e)||e.path.push("")):ae(f)?"/"==s||"\\"==s&&Q(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&te(f)&&(e.host&&(e.host=""),f=f.charAt(0)+":"),e.path.push(f)),f="","file"==e.scheme&&(s==r||"?"==s||"#"==s))while(e.path.length>1&&""===e.path[0])e.path.shift();"?"==s?(e.query="",l=Re):"#"==s&&(e.fragment="",l=Ce)}else f+=X(s,G);break;case xe:"?"==s?(e.query="",l=Re):"#"==s?(e.fragment="",l=Ce):s!=r&&(e.path[0]+=X(s,J));break;case Re:n||"#"!=s?s!=r&&("'"==s&&Q(e)?e.query+="%27":e.query+="#"==s?"%23":X(s,J)):(e.fragment="",l=Ce);break;case Ce:s!=r&&(e.fragment+=X(s,N));break}c++}},Be=function(e){var t,n,r=c(this,Be,"URL"),a=arguments.length>1?arguments[1]:void 0,s=String(e),o=L(r,{type:"URL"});if(void 0!==a)if(a instanceof Be)t=S(a);else if(n=Ue(t={},String(a)),n)throw TypeError(n);if(n=Ue(o,s,null,t),n)throw TypeError(n);var u=o.searchParams=new y,l=k(u);l.updateSearchParams(o.query),l.updateURL=function(){o.query=String(u)||null},i||(r.href=je.call(r),r.origin=qe.call(r),r.protocol=Ie.call(r),r.username=Oe.call(r),r.password=_e.call(r),r.host=Pe.call(r),r.hostname=Ee.call(r),r.port=Te.call(r),r.pathname=Fe.call(r),r.search=$e.call(r),r.searchParams=ze.call(r),r.hash=De.call(r))},Ae=Be.prototype,je=function(){var e=S(this),t=e.scheme,n=e.username,r=e.password,a=e.host,i=e.port,s=e.path,o=e.query,u=e.fragment,l=t+":";return null!==a?(l+="//",Y(e)&&(l+=n+(r?":"+r:"")+"@"),l+=W(a),null!==i&&(l+=":"+i)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?s[0]:s.length?"/"+s.join("/"):"",null!==o&&(l+="?"+o),null!==u&&(l+="#"+u),l},qe=function(){var e=S(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(r){return"null"}return"file"!=t&&Q(e)?t+"://"+W(e.host)+(null!==n?":"+n:""):"null"},Ie=function(){return S(this).scheme+":"},Oe=function(){return S(this).username},_e=function(){return S(this).password},Pe=function(){var e=S(this),t=e.host,n=e.port;return null===t?"":null===n?W(t):W(t)+":"+n},Ee=function(){var e=S(this).host;return null===e?"":W(e)},Te=function(){var e=S(this).port;return null===e?"":String(e)},Fe=function(){var e=S(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},$e=function(){var e=S(this).query;return e?"?"+e:""},ze=function(){return S(this).searchParams},De=function(){var e=S(this).fragment;return e?"#"+e:""},Me=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(i&&u(Ae,{href:Me(je,(function(e){var t=S(this),n=String(e),r=Ue(t,n);if(r)throw TypeError(r);k(t.searchParams).updateSearchParams(t.query)})),origin:Me(qe),protocol:Me(Ie,(function(e){var t=S(this);Ue(t,String(e)+":",se)})),username:Me(Oe,(function(e){var t=S(this),n=p(String(e));if(!ee(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=X(n[r],Z)}})),password:Me(_e,(function(e){var t=S(this),n=p(String(e));if(!ee(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=X(n[r],Z)}})),host:Me(Pe,(function(e){var t=S(this);t.cannotBeABaseURL||Ue(t,String(e),ve)})),hostname:Me(Ee,(function(e){var t=S(this);t.cannotBeABaseURL||Ue(t,String(e),me)})),port:Me(Te,(function(e){var t=S(this);ee(t)||(e=String(e),""==e?t.port=null:Ue(t,e,be))})),pathname:Me(Fe,(function(e){var t=S(this);t.cannotBeABaseURL||(t.path=[],Ue(t,e+"",Le))})),search:Me($e,(function(e){var t=S(this);e=String(e),""==e?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ue(t,e,Re)),k(t.searchParams).updateSearchParams(t.query)})),searchParams:Me(ze),hash:Me(De,(function(e){var t=S(this);e=String(e),""!=e?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ue(t,e,Ce)):t.fragment=null}))}),l(Ae,"toJSON",(function(){return je.call(this)}),{enumerable:!0}),l(Ae,"toString",(function(){return je.call(this)}),{enumerable:!0}),w){var Ve=w.createObjectURL,He=w.revokeObjectURL;Ve&&l(Be,"createObjectURL",(function(e){return Ve.apply(w,arguments)})),He&&l(Be,"revokeObjectURL",(function(e){return He.apply(w,arguments)}))}v(Be,"URL"),a({global:!0,forced:!s,sham:!i},{URL:Be})},4804:function(e,t,n){},"59e7":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("BaseCard",{staticStyle:{width:"fit-content",height:"90%"}},[n("AboutMeContent")],1)],1)},a=[],i=n("ff7d"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"primary--text",attrs:{column:""}},[n("h1",{staticClass:"text-center"},[e._v("A little about me")]),n("p",[e._v("Hi I'm Greg Field")]),n("v-layout",{attrs:{"justify-center":""}},[n("BaseButton",{on:{click:function(t){return e.download(t)}}},[e._v("Download CV")])],1)],1)},o=[],u=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("82ea")),l=n("bc3a"),c=n.n(l),h={name:"AboutMeContent",components:{BaseButton:u["a"]},methods:{download:function(e){e.preventDefault(),c.a.get("/get-file/CV").then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","GregFieldCV.pdf"),document.body.appendChild(n),n.click()})).catch((function(e){return console.log(e)}))}}},f=h,p=(n("2342"),n("2877")),d=n("6544"),g=n.n(d),v=n("a722"),m=Object(p["a"])(f,s,o,!1,null,null,null),b=m.exports;g()(m,{VLayout:v["a"]});var w={name:"AboutMeView",components:{BaseCard:i["a"],AboutMeContent:b},data:function(){return{content:b}}},y=w,k=Object(p["a"])(y,r,a,!1,null,null,null);t["default"]=k.exports;g()(k,{VLayout:v["a"]})},"5fb2":function(e,t,n){"use strict";var r=2147483647,a=36,i=1,s=26,o=38,u=700,l=72,c=128,h="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",g=a-i,v=Math.floor,m=String.fromCharCode,b=function(e){var t=[],n=0,r=e.length;while(n<r){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);56320==(64512&i)?t.push(((1023&a)<<10)+(1023&i)+65536):(t.push(a),n--)}else t.push(a)}return t},w=function(e){return e+22+75*(e<26)},y=function(e,t,n){var r=0;for(e=n?v(e/u):e>>1,e+=v(e/t);e>g*s>>1;r+=a)e=v(e/g);return v(r+(g+1)*e/(e+o))},k=function(e){var t=[];e=b(e);var n,o,u=e.length,f=c,p=0,g=l;for(n=0;n<e.length;n++)o=e[n],o<128&&t.push(m(o));var k=t.length,L=k;k&&t.push(h);while(L<u){var S=r;for(n=0;n<e.length;n++)o=e[n],o>=f&&o<S&&(S=o);var x=L+1;if(S-f>v((r-p)/x))throw RangeError(d);for(p+=(S-f)*x,f=S,n=0;n<e.length;n++){if(o=e[n],o<f&&++p>r)throw RangeError(d);if(o==f){for(var R=p,C=a;;C+=a){var U=C<=g?i:C>=g+s?s:C-g;if(R<U)break;var B=R-U,A=a-U;t.push(m(w(U+B%A))),R=v(B/A)}t.push(m(w(R))),g=y(p,x,L==k),p=0,++L}}++p,++f}return t.join("")};e.exports=function(e){var t,n,r=[],a=e.toLowerCase().replace(p,".").split(".");for(t=0;t<a.length;t++)n=a[t],r.push(f.test(n)?"xn--"+k(n):n);return r.join(".")}},9861:function(e,t,n){"use strict";n("e260");var r=n("23e7"),a=n("d066"),i=n("0d3b"),s=n("6eeb"),o=n("e2cc"),u=n("d44e"),l=n("9ed3"),c=n("69f3"),h=n("19aa"),f=n("5135"),p=n("0366"),d=n("f5df"),g=n("825a"),v=n("861d"),m=n("7c73"),b=n("5c6c"),w=n("9a1f"),y=n("35a1"),k=n("b622"),L=a("fetch"),S=a("Headers"),x=k("iterator"),R="URLSearchParams",C=R+"Iterator",U=c.set,B=c.getterFor(R),A=c.getterFor(C),j=/\+/g,q=Array(4),I=function(e){return q[e-1]||(q[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},O=function(e){try{return decodeURIComponent(e)}catch(t){return e}},_=function(e){var t=e.replace(j," "),n=4;try{return decodeURIComponent(t)}catch(r){while(n)t=t.replace(I(n--),O);return t}},P=/[!'()~]|%20/g,E={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},T=function(e){return E[e]},F=function(e){return encodeURIComponent(e).replace(P,T)},$=function(e,t){if(t){var n,r,a=t.split("&"),i=0;while(i<a.length)n=a[i++],n.length&&(r=n.split("="),e.push({key:_(r.shift()),value:_(r.join("="))}))}},z=function(e){this.entries.length=0,$(this.entries,e)},D=function(e,t){if(e<t)throw TypeError("Not enough arguments")},M=l((function(e,t){U(this,{type:C,iterator:w(B(e).entries),kind:t})}),"Iterator",(function(){var e=A(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),V=function(){h(this,V,R);var e,t,n,r,a,i,s,o,u,l=arguments.length>0?arguments[0]:void 0,c=this,p=[];if(U(c,{type:R,entries:p,updateURL:function(){},updateSearchParams:z}),void 0!==l)if(v(l))if(e=y(l),"function"===typeof e){t=e.call(l),n=t.next;while(!(r=n.call(t)).done){if(a=w(g(r.value)),i=a.next,(s=i.call(a)).done||(o=i.call(a)).done||!i.call(a).done)throw TypeError("Expected sequence with length 2");p.push({key:s.value+"",value:o.value+""})}}else for(u in l)f(l,u)&&p.push({key:u,value:l[u]+""});else $(p,"string"===typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},H=V.prototype;o(H,{append:function(e,t){D(arguments.length,2);var n=B(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){D(arguments.length,1);var t=B(this),n=t.entries,r=e+"",a=0;while(a<n.length)n[a].key===r?n.splice(a,1):a++;t.updateURL()},get:function(e){D(arguments.length,1);for(var t=B(this).entries,n=e+"",r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){D(arguments.length,1);for(var t=B(this).entries,n=e+"",r=[],a=0;a<t.length;a++)t[a].key===n&&r.push(t[a].value);return r},has:function(e){D(arguments.length,1);var t=B(this).entries,n=e+"",r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){D(arguments.length,1);for(var n,r=B(this),a=r.entries,i=!1,s=e+"",o=t+"",u=0;u<a.length;u++)n=a[u],n.key===s&&(i?a.splice(u--,1):(i=!0,n.value=o));i||a.push({key:s,value:o}),r.updateURL()},sort:function(){var e,t,n,r=B(this),a=r.entries,i=a.slice();for(a.length=0,n=0;n<i.length;n++){for(e=i[n],t=0;t<n;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===n&&a.push(e)}r.updateURL()},forEach:function(e){var t,n=B(this).entries,r=p(e,arguments.length>1?arguments[1]:void 0,3),a=0;while(a<n.length)t=n[a++],r(t.value,t.key,this)},keys:function(){return new M(this,"keys")},values:function(){return new M(this,"values")},entries:function(){return new M(this,"entries")}},{enumerable:!0}),s(H,x,H.entries),s(H,"toString",(function(){var e,t=B(this).entries,n=[],r=0;while(r<t.length)e=t[r++],n.push(F(e.key)+"="+F(e.value));return n.join("&")}),{enumerable:!0}),u(V,R),r({global:!0,forced:!i},{URLSearchParams:V}),i||"function"!=typeof L||"function"!=typeof S||r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,r,a=[e];return arguments.length>1&&(t=arguments[1],v(t)&&(n=t.body,d(n)===R&&(r=t.headers?new S(t.headers):new S,r.has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=m(t,{body:b(0,String(n)),headers:b(0,r)}))),a.push(t)),L.apply(this,a)}}),e.exports={URLSearchParams:V,getState:B}},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("b0af"),a=n("80d2"),i=Object(a["f"])("v-card__actions"),s=Object(a["f"])("v-card__subtitle"),o=Object(a["f"])("v-card__text"),u=Object(a["f"])("v-card__title");r["a"]},"9a1f":function(e,t,n){var r=n("825a"),a=n("35a1");e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},a19c:function(e,t,n){},e639:function(e,t,n){},f0e4:function(e,t,n){"use strict";var r=n("e639"),a=n.n(r);a.a},ff7d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"rounded-xl topbar",style:{width:e.cardWidth,height:e.cardHeight,padding:e.padding},attrs:{to:e.to}},[e.collapsible?n("v-icon",{class:[e.hide?"showBtn":"hideBtn",e.iconRight?"right":"left"],staticStyle:{background:"none"},on:{click:function(t){return e.hideShow()}}},[e._v(e._s(e.plusMinusIcon))]):e._e(),n("v-layout",{attrs:{"justify-center":""}},[!e.hide||e.keepTitle?n("v-card-title",{staticClass:"primary--text font-weight-bold pa-0",attrs:{id:"cardTitle"}},[e._v(e._s(e.title))]):e._e()],1),e.hide?e._e():n("v-layout",{attrs:{"justify-center":"","align-center":""}},[e._t("default")],2)],1)},a=[],i={name:"BaseCard",props:["title","collapsible","keepTitle","iconRight","to"],methods:{hideShow:function(){this.$emit("hideShow",this.hide),this.hide?(this.plusMinusIcon="mdi-minus-box-outline",this.cardWidth="100%",this.cardHeight="100%",this.hideShowClass="hideBtn",this.padding="16px"):(this.plusMinusIcon="mdi-plus-box-outline",this.padding="0px",this.keepTitle?this.cardWidth=parseInt(getComputedStyle(document.getElementById("cardTitle")).width)+24+7+70+"px":this.cardWidth="40px",this.cardHeight="40px",this.hideShowClass="showBtn"),this.hide=!this.hide}},data:function(){return{plusMinusIcon:"mdi-minus-box-outline",cardWidth:"100%",cardHeight:"100%",padding:"16px",hide:!1,cardTitle:this.title?this.title:""}}},s=i,o=(n("f0e4"),n("2877")),u=n("6544"),l=n.n(u),c=n("b0af"),h=n("99d9"),f=n("132d"),p=n("a722"),d=Object(o["a"])(s,r,a,!1,null,"1ebee791",null);t["a"]=d.exports;l()(d,{VCard:c["a"],VCardTitle:h["b"],VIcon:f["a"],VLayout:p["a"]})}}]);
//# sourceMappingURL=aboutme.500652e9.js.map