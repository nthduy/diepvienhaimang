(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],p=0,_=[];p<o.length;p++)s=o[p],i[s]&&_.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(_.length)_.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"302e":function(e,t,n){"use strict";var a=n("b3ae"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("c880"),n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e._m(0),n("div",{staticClass:"app__content"},[1===e.step?n("Homepage",{on:{startGame:e.startGame}}):e._e(),2===e.step?n("RevealPlayer",{attrs:{"secret-agent":e.secretAgent,"player-count":e.playerCount,destination:e.destination},on:{finish:e.finishReveal}}):e._e(),3===e.step?n("div",{staticClass:"countdown"},[n("countdown",{ref:"countdown",attrs:{time:e.playTime,transform:e.transform},on:{end:e.notFound},scopedSlots:e._u([{key:"default",fn:function(t){return[n("h4",[e._v("Thời gian còn lại")]),n("p",{staticClass:"countdown__time"},[e._v(e._s(t.minutes)+" : "+e._s(t.seconds))])]}}],null,!1,112940264)}),n("VueButton",{staticClass:"countdown__abort",attrs:{type:"button"},on:{click:e.found}},[e._v("Đã tìm ra 🔪")])],1):e._e(),4===e.step?n("div",{staticClass:"endgame"},[e.isLost?n("div",{staticClass:"endgame__lost"},[n("p",{staticClass:"endgame__lost__icon"},[e._v("😭")]),n("p",{staticClass:"endgame__lost__text"},[e._v("Điệp viên hai mang là nguời chơi thứ "+e._s(e.secretAgent+1))])]):e._e(),e.isLost?e._e():n("div",{staticClass:"endgame__win"},[n("p",{staticClass:"endgame__win__icon"},[e._v("😇")]),n("p",{staticClass:"endgame__win__text"},[e._v("Điệp viên hai mang đã bị chặn đứng, hắn là nguời chơi thứ "+e._s(e.secretAgent+1))])]),n("VueButton",{staticClass:"endgame__button",on:{click:e.restart}},[e._v("Chơi lại")])],1):e._e()],1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app__title"},[n("h1",{staticClass:"app__title__text"},[e._v("Điệp Viên Hai Mang")]),n("span",{staticClass:"app__title__icon"},[e._v("👓")])])}],s=n("768b"),o=(n("0e20"),n("2e73"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"homepage"},[n("form",{staticClass:"homepage__form",on:{submit:e.onSubmit}},[n("div",{staticClass:"homepage__form__field"},[n("VueFormField",{attrs:{type:"number",min:"3",id:"playerCount",title:"Số luợng nguời chơi"},model:{value:e.playerCount,callback:function(t){e.playerCount=e._n(t)},expression:"playerCount"}},[n("VueInput",{staticClass:"flat homepage__form__field__input",attrs:{type:"number",min:"3",id:"playerCount"},model:{value:e.playerCount,callback:function(t){e.playerCount=e._n(t)},expression:"playerCount"}})],1),n("VueFormField",{attrs:{type:"number",min:"3",id:"playTime",title:"Thời gian chơi (giây)"},model:{value:e.playTime,callback:function(t){e.playTime=e._n(t)},expression:"playTime"}},[n("VueInput",{staticClass:"flat homepage__form__field__input",attrs:{type:"number",min:60*e.playerCount,id:"playTime"},model:{value:e.playTime,callback:function(t){e.playTime=e._n(t)},expression:"playTime"}})],1)],1),n("VueButton",{staticClass:"homepage__form__submit",attrs:{type:"submit"}},[e._v("Bắt đầu !")])],1)])}),l=[],u={name:"Homepage",data:function(){return{error:!1,playerCount:3,playTime:180}},methods:{onSubmit:function(){this.playerCount<3?this.error=!0:(this.error=!1,this.$emit("startGame",{playerCount:this.playerCount,playTime:1e3*this.playTime}))}}},c=u,p=(n("aa87"),n("2877")),_=Object(p["a"])(c,o,l,!1,null,null,null),d=_.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"reveal-player"},[n("p",{staticClass:"reveal-player__tips"},[e._v("Hãy nhớ kĩ danh tính của bạn và đừng để nguời khác biết nhé")]),e.ready?n("div",{staticClass:"reveal-player__readied"},[e.isSecretAgent?e._e():n("div",{staticClass:"reveal-player__readied__destination"},[n("h4",{staticClass:"reveal-player__readied__destination__label"},[e._v("Nguời chơi thứ "+e._s(e.currentPlayer+1)+", địa điểm bí mật là:")]),n("h2",{staticClass:"reveal-player__readied__destination__name"},[e._v("🗺 "+e._s(e.destination))])]),e.isSecretAgent?n("div",{staticClass:"reveal-player__readied__secret-agent"},[n("h2",[e._v("Nguời chơi thứ "+e._s(e.currentPlayer+1)+", bạn là điệp viên 2 mang 😈")])]):e._e(),n("VueButton",{staticClass:"reveal-player__readied__next",on:{click:e.next}},[e._v("OK, xong 👌")])],1):e._e(),e.ready?e._e():n("div",{staticClass:"reveal-player__not-readied"},[n("p",{staticClass:"reveal-player__not-readied__text"},[e._v("Sẵn sàng ?")]),n("VueButton",{staticClass:"reveal-player__not-readied__ready",on:{click:e.readied}},[e._v("GO 🔥")])],1)])},m=[],f=(n("ce9c"),{name:"RevalPlayer",props:{secretAgent:{type:Number,required:!0},destination:{type:String,required:!0},playerCount:{type:Number,required:!0}},data:function(){return{currentPlayer:0,ready:!1}},computed:{isSecretAgent:function(){return this.currentPlayer===this.secretAgent}},methods:{next:function(){this.ready=!1,this.currentPlayer++,this.currentPlayer===this.playerCount&&this.$emit("finish",!0)},readied:function(){this.ready=!0}}}),y=f,v=(n("302e"),Object(p["a"])(y,h,m,!1,null,"42da0f14",null)),g=v.exports,C=n("20e5"),b=["Nghĩa trang","Bệnh viện","Doanh trại quân đội","Ngã tư bảy hiền","Nhà thờ","Chùa","Chợ","Địa đạo","kênh nhiêu lộc","Gare Lyon Perrache","Lisbon","Paris","Lyon","Gare Lyon Part Dieu","Marseille","Cầu chữ Y","Đồi thông hai mộ","Notre dame de Paris","Pantheon","Berlin","Tokyo","Hồ bơ","Rừng ngập mặn","Sa mạc Sahara","Đảo Phú Quốc","Big Ben Tower","La tour Eiffel"],P={name:"app",components:{Homepage:d,RevealPlayer:g},data:function(){return{step:1,playerCount:3,error:!1,errorMessage:"",currentPlayer:0,secretAgent:-1,destination:"",end:!1,isLost:!1,playTime:0}},methods:{restart:function(){this.step=1,this.playerCount=3,this.error=!1,this.errorMessage="",this.currentPlayer=0,this.secretAgent=-1,this.destination="",this.end=!1,this.isLost=!1,this.playTime=0},startGame:function(e){var t=e.playerCount,n=e.playTime;this.playerCount=t;var a=new C["a"];this.secretAgent=a.integer(0,t-1),this.destination=a.shuffle(b)[0],this.playTime=n,this.end=!1,this.step++},finishReveal:function(){this.step++},transform:function(e){return Object.entries(e).forEach(function(t){var n=Object(s["a"])(t,2),a=n[0],i=n[1],r=i<10?"0".concat(i):i;e[a]=r}),e},found:function(){this.step++,this.isLost=!1,this.end=!0},notFound:function(){this.step++,this.isLost=!0,this.end=!0}}},T=P,x=(n("5c0b"),Object(p["a"])(T,i,r,!1,null,null,null)),w=x.exports,k=n("407d"),O=n.n(k),S=n("39f8");a["a"].use(S["a"]),a["a"].component(O.a.name,O.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},aa87:function(e,t,n){"use strict";var a=n("d45c"),i=n.n(a);i.a},b3ae:function(e,t,n){},d45c:function(e,t,n){}});
//# sourceMappingURL=app.14fa73e2.js.map