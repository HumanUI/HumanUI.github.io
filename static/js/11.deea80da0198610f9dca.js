webpackJsonp([11],{1026:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("mn-section",[n("mn-letter",[n("mn-letter-body",[n("h1",[t._v("Scroller "),n("small",[t._v("滚动条")])])])],1)],1),t._v(" "),n("mn-section",[n("mn-card",[n("mn-card-item",[n("mn-card-body",[t._v("\n          建议在手机版测试一下，在 mn-scroller 底下时启动 popup mask，\n          然后判断 touch 模式下，滚动条是否滚动。\n        ")])],1),t._v(" "),n("mn-card-item",{attrs:{type:"link"},on:{click:t.onOpenConfirm}},[n("mn-card-body",[t._v("\n          点击打开 popup 以测试\n        ")])],1)],1)],1),t._v(" "),n("mn-section",[n("mn-card",t._l(20,function(e,r){return n("mn-card-item",{key:r,attrs:{type:"arrow"}},[n("mn-card-body",[t._v("Row "+t._s(e))])],1)}))],1)],1)},staticRenderFns:[]}},591:function(t,e,n){var r=n(1)(n(803),n(1026),null,null,null);t.exports=r.exports},599:function(t,e,n){"use strict";e.a={props:{visible:Boolean,transition:String,zIndex:{type:Number,default:2e3}},methods:{show:function(){this.$emit("update:visible",!0)},hide:function(){this.$emit("update:visible",!1)}}}},600:function(t,e,n){"use strict";var r=n(88),i=n.n(r),o=n(284),a=n.n(o),s=n(283),c=n.n(s),u=n(66),l=n.n(u),f=n(86),p=n.n(f),d=n(90),h=n.n(d),m=n(36),v=n(133),_=n.n(v),y=8e3,b=function(){function t(){p()(this,t)}return h()(t,[{key:"createComponent",value:function(t){if(_()(this.element))throw new Error("没有配置 element");var e=m.a.extend(this.element),n=new e({propsData:this.mergePropsData(t)}).$mount();return this.listen(n),this.append(n),this.vm=n,this}},{key:"mergePropsData",value:function(t){return l()({zIndex:this.generateZindex()},t)}},{key:"generateZindex",value:function(){return y+=10}},{key:"listen",value:function(t){var e=this;return t.$on("update:visible",function(t){t?e.open():e.destroy()}),this}},{key:"append",value:function(t){return this.wrapper=document.createElement("div"),this.wrapper.id="mn-popup-#"+t._uid,document.body.appendChild(this.wrapper),this.wrapper.appendChild(t.$el),this}},{key:"remove",value:function(){return _()(this.vm)||(this.vm.$destroy(),this.removeWrapper()),this.vm=void 0,this.wrapper=void 0,this}},{key:"removeWrapper",value:function(){return this.wrapper&&document.body.removeChild(this.wrapper),this}},{key:"show",value:function(){if(!this.vm)throw new Error("vueComponent 已经被销毁。");return this.vm.$props.visible=!0,this}},{key:"destroy",value:function(){function t(){return e.apply(this,arguments)}var e=c()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.vm){t.next=5;break}return this.vm.$props.visible=!1,t.next=4,this.timeout();case 4:return t.abrupt("return",this.remove());case 5:return t.abrupt("return",this);case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"timeout",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;return new i.a(function(e){return setTimeout(e,t)})}},{key:"on",value:function(t,e){return this.vm.$on(t,e),this}}],[{key:"create",value:function(t){return(new this).createComponent(t)}}]),t}();e.a=b},601:function(t,e,n){t.exports={default:n(608),__esModule:!0}},602:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var i=n(606),o=r(i),a=n(605),s=r(a),c=n(282),u=r(c);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,u.default)(e)));t.prototype=(0,s.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},603:function(t,e,n){"use strict";e.__esModule=!0;var r=n(282),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},604:function(t,e,n){var r=n(35),i=n(13),o=n(53);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},605:function(t,e,n){t.exports={default:n(607),__esModule:!0}},606:function(t,e,n){t.exports={default:n(609),__esModule:!0}},607:function(t,e,n){n(611);var r=n(13).Object;t.exports=function(t,e){return r.create(t,e)}},608:function(t,e,n){n(612),t.exports=n(13).Object.getPrototypeOf},609:function(t,e,n){n(613),t.exports=n(13).Object.setPrototypeOf},610:function(t,e,n){var r=n(51),i=n(22),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(52)(Function.call,n(285).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},611:function(t,e,n){var r=n(35);r(r.S,"Object",{create:n(134)})},612:function(t,e,n){var r=n(89),i=n(286);n(604)("getPrototypeOf",function(){return function(t){return i(r(t))}})},613:function(t,e,n){var r=n(35);r(r.S,"Object",{setPrototypeOf:n(610).set})},614:function(t,e,n){"use strict";var r=n(601),i=n.n(r),o=n(86),a=n.n(o),s=n(603),c=n.n(s),u=n(602),l=n.n(u),f=n(600),p=n(618),d=n.n(p),h=function(t){function e(){var t,n,r,o;a()(this,e);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=r=c()(this,(t=e.__proto__||i()(e)).call.apply(t,[this].concat(u))),r.element=d.a,o=n,c()(r,o)}return l()(e,t),e}(f.a);e.a=h},615:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(599);e.default=new r.a({name:"mn-shade",mixins:[i.a],props:{theme:String,disableClosing:Boolean},methods:{onHide:function(){this.disableClosing||this.hide()}}})},616:function(t,e,n){e=t.exports=n(561)(!1),e.push([t.i,".mn-shade{position:fixed;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.4;z-index:1000}.mn-shade-fade-enter-active,.mn-shade-fade-leave-active{-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.mn-shade-fade-enter,.mn-shade-fade-leave-active{opacity:0}",""])},617:function(t,e,n){var r=n(616);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(562)("e28f5374",r,!0)},618:function(t,e,n){function r(t){n(617)}var i=n(1)(n(615),n(619),r,null,null);t.exports=i.exports},619:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[t.visible?n("div",{staticClass:"mn-shade",style:{"z-index":t.zIndex},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.onHide(e)}}}):t._e()])},staticRenderFns:[]}},620:function(t,e,n){"use strict";var r=n(66),i=n.n(r),o=n(614);e.a={props:{visible:Boolean,shadePropsData:Object,zIndex:{type:Number,default:2e3}},data:function(){return{shade:void 0}},watch:{visible:function(t){t?this.shade=this.createShadeLayer().show():this.shade.destroy()}},methods:{createShadeLayer:function(){var t=this,e=this.zIndex-1,n=o.a.create(i()({zIndex:e},this.shadePropsData));return n.vm.$on("update:visible",function(e){e||t.whenShadeCallHiding(n)}),n},whenShadeCallHiding:function(t){}}}},655:function(t,e,n){"use strict";var r=n(601),i=n.n(r),o=n(86),a=n.n(o),s=n(603),c=n.n(s),u=n(602),l=n.n(u),f=n(600),p=n(683),d=n.n(p),h=function(t){function e(){var t,n,r,o;a()(this,e);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=r=c()(this,(t=e.__proto__||i()(e)).call.apply(t,[this].concat(u))),r.element=d.a,o=n,c()(r,o)}return l()(e,t),e}(f.a);e.a=h},661:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(66),i=n.n(r),o=n(2),a=n(288),s=n.n(a),c=n(287),u=n.n(c),l=n(91),f=n.n(l),p=n(293),d=n.n(p),h=n(599),m=n(620);e.default=new o.a({name:"mn-confirm",mixins:[h.a,m.a],components:i()({},s.a.inject(),u.a.inject(),f.a.inject(),d.a.inject()),props:{title:{type:String,default:function(){return this.$t("mn.popup.confirmTitle")}},description:String,cancelText:{type:String,default:function(){return this.$t("mn.popup.cancelText")}},confirmText:{type:String,default:function(){return this.$t("mn.popup.confirmText")}}},methods:{cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")},whenShadeCallHiding:function(){this.cancel()}}})},675:function(t,e,n){e=t.exports=n(561)(!1),e.push([t.i,".mn-confirm{position:fixed;width:280px;top:45%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}",""])},680:function(t,e,n){var r=n(675);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(562)("21654e92",r,!0)},683:function(t,e,n){function r(t){n(680)}var i=n(1)(n(661),n(694),r,null,null);t.exports=i.exports},694:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition||"has-fade-in"}},[t.visible?n("div",{staticClass:"mn-confirm",style:{zIndex:t.zIndex}},[n("mn-card",{staticClass:"has-none-margin-bottom",attrs:{rounded:""}},[n("mn-card-item",[n("mn-card-body",{staticClass:"has-center-text"},[n("h4",[t._v(t._s(t.title))]),t._v(" "),t.description?n("small",[t._v(t._s(t.description))]):t._e()])],1),t._v(" "),n("mn-card-btns",{attrs:{type:"column"}},[n("button",{staticClass:"has-blue-text",on:{click:t.cancel}},[t._v(t._s(t.cancelText))]),t._v(" "),n("button",{staticClass:"has-blue-text",on:{click:t.confirm}},[t._v(t._s(t.confirmText))])])],1)],1):t._e()])},staticRenderFns:[]}},803:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(655);e.default={methods:{onOpenConfirm:function(){r.a.create({description:"观察你的滚动条"}).show()}}}}});