webpackJsonp([10],{1034:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page",[n("mn-letter",[n("mn-letter-body",[n("h1",[e._v("Loading Mask")])])],1),e._v(" "),n("mn-section",[n("mn-card",[n("mn-card-item",[n("mn-card-body",[n("mn-btn",{attrs:{theme:"primary",block:""},on:{click:e.onOpenLoadingMask}},[e._v("Open loading mask")])],1)],1)],1),e._v(" "),n("mn-section-note",[e._v("\n      此 LoadingMask 打开后，会在 3s 后自动关闭。\n    ")])],1)],1)},staticRenderFns:[]}},1052:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition||"has-fade-in"}},[e.visible?n("div",{staticClass:"mn-loading-mask",style:{zIndex:e.zIndex}},[n("mn-loading-icon")],1):e._e()])},staticRenderFns:[]}},582:function(e,t,n){var i=n(1)(n(795),n(1034),null,null,null);e.exports=i.exports},599:function(e,t,n){"use strict";t.a={props:{visible:Boolean,transition:String,zIndex:{type:Number,default:2e3}},methods:{show:function(){this.$emit("update:visible",!0)},hide:function(){this.$emit("update:visible",!1)}}}},600:function(e,t,n){"use strict";var i=n(88),r=n.n(i),o=n(284),a=n.n(o),s=n(283),u=n.n(s),c=n(66),l=n.n(c),d=n(86),f=n.n(d),p=n(90),h=n.n(p),v=n(36),m=n(133),y=n.n(m),b=8e3,_=function(){function e(){f()(this,e)}return h()(e,[{key:"createComponent",value:function(e){if(y()(this.element))throw new Error("没有配置 element");var t=v.a.extend(this.element),n=new t({propsData:this.mergePropsData(e)}).$mount();return this.listen(n),this.append(n),this.vm=n,this}},{key:"mergePropsData",value:function(e){return l()({zIndex:this.generateZindex()},e)}},{key:"generateZindex",value:function(){return b+=10}},{key:"listen",value:function(e){var t=this;return e.$on("update:visible",function(e){e?t.open():t.destroy()}),this}},{key:"append",value:function(e){return this.wrapper=document.createElement("div"),this.wrapper.id="mn-popup-#"+e._uid,document.body.appendChild(this.wrapper),this.wrapper.appendChild(e.$el),this}},{key:"remove",value:function(){return y()(this.vm)||(this.vm.$destroy(),this.removeWrapper()),this.vm=void 0,this.wrapper=void 0,this}},{key:"removeWrapper",value:function(){return this.wrapper&&document.body.removeChild(this.wrapper),this}},{key:"show",value:function(){if(!this.vm)throw new Error("vueComponent 已经被销毁。");return this.vm.$props.visible=!0,this}},{key:"destroy",value:function(){function e(){return t.apply(this,arguments)}var t=u()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.vm){e.next=5;break}return this.vm.$props.visible=!1,e.next=4,this.timeout();case 4:return e.abrupt("return",this.remove());case 5:return e.abrupt("return",this);case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"timeout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new r.a(function(t){return setTimeout(t,e)})}},{key:"on",value:function(e,t){return this.vm.$on(e,t),this}}],[{key:"create",value:function(e){return(new this).createComponent(e)}}]),e}();t.a=_},601:function(e,t,n){e.exports={default:n(608),__esModule:!0}},602:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(606),o=i(r),a=n(605),s=i(a),u=n(282),c=i(u);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,c.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},603:function(e,t,n){"use strict";t.__esModule=!0;var i=n(282),r=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,r.default)(t))&&"function"!=typeof t?e:t}},604:function(e,t,n){var i=n(35),r=n(13),o=n(53);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],a={};a[e]=t(n),i(i.S+i.F*o(function(){n(1)}),"Object",a)}},605:function(e,t,n){e.exports={default:n(607),__esModule:!0}},606:function(e,t,n){e.exports={default:n(609),__esModule:!0}},607:function(e,t,n){n(611);var i=n(13).Object;e.exports=function(e,t){return i.create(e,t)}},608:function(e,t,n){n(612),e.exports=n(13).Object.getPrototypeOf},609:function(e,t,n){n(613),e.exports=n(13).Object.setPrototypeOf},610:function(e,t,n){var i=n(51),r=n(22),o=function(e,t){if(r(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n(52)(Function.call,n(285).f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:o}},611:function(e,t,n){var i=n(35);i(i.S,"Object",{create:n(134)})},612:function(e,t,n){var i=n(89),r=n(286);n(604)("getPrototypeOf",function(){return function(e){return r(i(e))}})},613:function(e,t,n){var i=n(35);i(i.S,"Object",{setPrototypeOf:n(610).set})},614:function(e,t,n){"use strict";var i=n(601),r=n.n(i),o=n(86),a=n.n(o),s=n(603),u=n.n(s),c=n(602),l=n.n(c),d=n(600),f=n(618),p=n.n(f),h=function(e){function t(){var e,n,i,o;a()(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=u()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(c))),i.element=p.a,o=n,u()(i,o)}return l()(t,e),t}(d.a);t.a=h},615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=n(599);t.default=new i.a({name:"mn-shade",mixins:[r.a],props:{theme:String,disableClosing:Boolean},methods:{onHide:function(){this.disableClosing||this.hide()}}})},616:function(e,t,n){t=e.exports=n(561)(!1),t.push([e.i,".mn-shade{position:fixed;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.4;z-index:1000}.mn-shade-fade-enter-active,.mn-shade-fade-leave-active{-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.mn-shade-fade-enter,.mn-shade-fade-leave-active{opacity:0}",""])},617:function(e,t,n){var i=n(616);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(562)("e28f5374",i,!0)},618:function(e,t,n){function i(e){n(617)}var r=n(1)(n(615),n(619),i,null,null);e.exports=r.exports},619:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[e.visible?n("div",{staticClass:"mn-shade",style:{"z-index":e.zIndex},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.onHide(t)}}}):e._e()])},staticRenderFns:[]}},620:function(e,t,n){"use strict";var i=n(66),r=n.n(i),o=n(614);t.a={props:{visible:Boolean,shadePropsData:Object,zIndex:{type:Number,default:2e3}},data:function(){return{shade:void 0}},watch:{visible:function(e){e?this.shade=this.createShadeLayer().show():this.shade.destroy()}},methods:{createShadeLayer:function(){var e=this,t=this.zIndex-1,n=o.a.create(r()({zIndex:t},this.shadePropsData));return n.vm.$on("update:visible",function(t){t||e.whenShadeCallHiding(n)}),n},whenShadeCallHiding:function(e){}}}},750:function(e,t,n){"use strict";var i=n(601),r=n.n(i),o=n(86),a=n.n(o),s=n(603),u=n.n(s),c=n(602),l=n.n(c),d=n(600),f=n(965),p=n.n(f),h=function(e){function t(){var e,n,i,o;a()(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=i=u()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(c))),i.element=p.a,o=n,u()(i,o)}return l()(t,e),t}(d.a);t.a=h},795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(750);t.default={methods:{onOpenLoadingMask:function(){var e=this;this.loadingMaskLayer=i.a.create().show(),setTimeout(function(){e.destroyLoadingMask()},3e3)},destroyLoadingMask:function(){this.loadingMaskLayer&&this.loadingMaskLayer.destroy()}},beforeDestroy:function(){this.destroyLoadingMask()}}},829:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(66),r=n.n(i),o=n(2),a=n(136),s=n.n(a),u=n(599),c=n(620);t.default=new o.a({name:"mn-loading-mask",components:r()({},s.a.inject()),mixins:[u.a,c.a],props:{shadePropsData:{type:Object,default:function(){return{disableClosing:!0}}}}})},899:function(e,t,n){t=e.exports=n(561)(!1),t.push([e.i,".mn-loading-mask{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:66px;height:66px;top:45%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;color:#333;border-radius:.75rem;box-shadow:0 0 100px rgba(0,0,0,.1)}",""])},938:function(e,t,n){var i=n(899);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(562)("bc36f5ec",i,!0)},965:function(e,t,n){function i(e){n(938)}var r=n(1)(n(829),n(1052),i,null,null);e.exports=r.exports}});