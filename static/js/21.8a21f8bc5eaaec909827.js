webpackJsonp([21],{1023:function(e,t,n){n(991);var i=n(2)(n(912),n(1074),null,null);e.exports=i.exports},1057:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page",[n("mn-section",[n("mn-columns",[n("mn-column",{attrs:{tablet:"10, 1",desktop:"8, 2"}},[n("mn-letter",[n("mn-letter-body",[n("h1",[e._v("Hi")]),e._v(" "),n("small",[e._v("I am Vue Human!")])])],1),e._v(" "),n("mn-card",[n("mn-card-media",[n("mn-image",{attrs:{srcset:e.imageSets}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},1074:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mn-image",style:{height:e.height}},[n("img",{ref:"image",staticClass:"mn-image-source",class:(i={"is-hide":e.loading&&e.loadingMask&&e.hideImageWhenLoading},i["is-"+e.type]=!!e.type,i),attrs:{src:e.source.src,title:e.title,alt:e.alt}})]);var i},staticRenderFns:[]}},704:function(e,t,n){var i=n(2)(n(878),n(1057),null,null);e.exports=i.exports},722:function(e,t,n){var i=n(54),s=n(20),r=n(66);e.exports=function(e,t){var n=(s.Object||{})[e]||Object[e],o={};o[e]=t(n),i(i.S+i.F*r(function(){n(1)}),"Object",o)}},732:function(e,t,n){e.exports={default:n(736),__esModule:!0}},736:function(e,t,n){n(741),e.exports=n(20).Object.keys},741:function(e,t,n){var i=n(99),s=n(67);n(722)("keys",function(){return function(e){return s(i(e))}})},831:function(e,t,n){"use strict";var i=n(12),s=n(1023),r=n.n(s);t.a=new i.a([r.a])},878:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(76),s=n.n(i),r=n(831);t.default={components:s()({},r.a.map()),data:function(){return{imageSets:[{max:768,src:"https://ois1yok9v.qnssl.com/test-mobile.jpg",scale:400/600},{min:768,src:"https://ois1yok9v.qnssl.com/test-desktop.jpg",scale:2}]}}}},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(732),s=n.n(i),r=n(4),o=n(159),a={};o.a.$screens.forEach(function(e,t){var n=e.min,i=t+1<o.a.$screens.length?o.a.$screens[t+1].min-1:9999;a[e.name]=[n,i]}),t.default=new r.a({name:"mn-image",props:{srcset:{type:[Array,Object]},alt:String,title:String,type:{type:String,validator:function(e){return["rounded","circle"].includes(e)}},maskBg:{type:String,default:"rgba(0, 0, 0, 0.8)"},loadingMask:{type:Boolean,default:!0},hideImageWhenLoading:{type:Boolean,default:!1}},data:function(){return{offsetWidth:0,loading:!1}},computed:{sources:function(){var e=this.srcset;return Array.isArray(e)||(e=[e]),e.forEach(function(e){e.query&&s()(a).includes(e.query)&&(e.min=a[e.query][0],e.max=a[e.query][1]),e.min=e.min||0,e.max=e.max||9999}),e},source:function(){var e=this,t=this.sources.filter(function(t){return e.offsetWidth>=t.min&&e.offsetWidth<t.max});return t.length>0?t[0]:(console&&console.warn("未找到匹配的 source。offsetWidth 为 "+this.offsetWidth),this.sources[0])},height:function(){if(void 0!==this.source.scale&&this.offsetWidth&&this.$el)return this.$el.offsetWidth/this.source.scale+"px"}},watch:{offsetWidth:function(){this.loading=!0},loading:function(e){var t=this;!0===e&&(this.$refs.image.complete?this.loading=!1:(this.$refs.image.addEventListener("load",function(){t.loading=!1}),this.$refs.image.addEventListener("error",function(){console&&console.warn("图片加载失败。")})))}},methods:{setOffsetWidth:function(){this.offsetWidth=document.body.offsetWidth}},mounted:function(){var e=this;this.$nextTick(function(){e.setOffsetWidth(),window.addEventListener("resize",e.setOffsetWidth)})},beforeDestroy:function(){window.removeEventListener("resize",this.setOffsetWidth)}})},959:function(e,t,n){t=e.exports=n(685)(!1),t.push([e.i,".mn-image{width:100%}.mn-image-source{display:block;width:100%}.mn-image-source.is-rounded{border-radius:.75rem}@media screen and (min-width:992px){.mn-image-source.is-rounded{border-radius:.25rem}}.mn-image-source.is-circle{border-radius:50% 50%}.mn-image-source.is-hide{display:none}.mn-image-mask{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#fff}",""])},991:function(e,t,n){var i=n(959);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(686)("46d2f77e",i,!0)}});