webpackJsonp([22],{1019:function(t,e,n){n(979);var r=n(2)(n(906),n(1054),null,null);t.exports=r.exports},1054:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mn-counter"},[n("button",{staticClass:"mn-counter-btn",class:{"is-disabled":!t.enabledReduce},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.reduceCount(e)}}},[n("mn-icon",{attrs:{name:t.iosMinusEmpty}})],1),t._v(" "),n("div",{staticClass:"mn-counter-box"},[n("input",{staticClass:"mn-counter-control",attrs:{type:"number"},domProps:{value:t.value},on:{input:t.input}})]),t._v(" "),n("button",{staticClass:"mn-counter-btn",class:{"is-disabled":!t.enabledIncrease},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.increaseCount(e)}}},[n("mn-icon",{attrs:{name:t.iosPlusEmpty}})],1)])},staticRenderFns:[]}},1101:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("mn-section",[n("mn-letter",[n("mn-letter-body",[n("h1",[t._v("Counter "),n("small",[t._v("计数器")])])])],1)],1),t._v(" "),n("mn-section",[n("mn-card",[n("mn-card-item",[n("h5",[t._v("基本用法")])]),t._v(" "),n("mn-card-item",[n("mn-card-body",[n("mn-counter",{attrs:{min:5},model:{value:t.models.counter,callback:function(e){t.models.counter=e},expression:"models.counter"}})],1)],1)],1)],1)],1)},staticRenderFns:[]}},694:function(t,e,n){var r=n(2)(n(873),n(1101),null,null);t.exports=r.exports},717:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(97),o=n.n(r),a=n(223);e.default={components:o()({},a.a.map())}},718:function(t,e,n){var r=n(2)(n(717),n(719),null,null);t.exports=r.exports},719:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mn-page",[n("mn-scroller",[n("mn-container",{attrs:{fluid:""}},[t._t("default")],2)],1)],1)},staticRenderFns:[]}},825:function(t,e,n){"use strict";var r=n(12),o=n(1019),a=n.n(o);e.a=new r.a([a.a])},852:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path d="M16 7l-10 8v13h7v-8h6v8h7v-13l-10-8z">\n  </path>\n  <path d="M16 4l-6 4.8v-2.8h-4v6l-2 1.594 0.719 0.711 11.281-9.024 11.281 9.025 0.719-0.712-12-9.594z">\n  </path>\n</svg>'},853:function(t,e,n){"use strict";e.a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path d="M24 16.563h-16v-1.063h16v1.063z">\n  </path>\n</svg>'},856:function(t,e,n){"use strict";e.a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path d="M24 16.563h-7.5v7.438h-1.063v-7.438h-7.438v-1.063h7.438v-7.5h1.063v7.5h7.5v1.063z">\n  </path>\n</svg>'},873:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(97),o=n.n(r),a=n(223),i=n(825),s=n(718),u=n.n(s);e.default={components:o()({},a.a.map(),i.a.map(),{page:u.a}),data:function(){return{icons:{home:n(852)},models:{counter:2}}}}},906:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(97),o=n.n(r),a=n(4),i=n(100),s=n.n(i),u=n(853),c=n(856);e.default=new a.a({components:o()({},s.a.inject()),name:"mn-counter",props:{value:{type:Number,default:0},step:{type:Number,default:1},min:{type:Number,default:0},max:{type:Number,default:999999}},data:function(){return{iosMinusEmpty:u.a,iosPlusEmpty:c.a}},computed:{enabledReduce:function(){return this.value>this.min},enabledIncrease:function(){return this.value<this.max}},methods:{reduceCount:function(){var t=this.value-this.step;t>=this.min&&this.$emit("input",t)},increaseCount:function(){var t=this.value+this.step;t<=this.max&&this.$emit("input",t)},input:function(t){var e=parseInt(t.target.value);isNaN(e)||(e<this.min&&(e=this.min,t.target.value=e),e>this.max&&(e=this.max,t.target.value=e),this.$emit("input",e))}}})},946:function(t,e,n){e=t.exports=n(680)(!1),e.push([t.i,".mn-counter{display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:8rem}.mn-counter-box{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;border-top:1px solid #ddd;border-bottom:1px solid #ddd}.mn-counter-control{width:100%;display:block;padding:.25rem .5rem;text-align:center;outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;border:none;background:transparent}.mn-counter-control::-webkit-inner-spin-button,.mn-counter-control::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0}.mn-counter-control[type=number]{-moz-appearance:textfield}.mn-counter-btn{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:1px solid #ddd;background:transparent;width:2.375rem;text-align:center;cursor:pointer;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent}.mn-counter-btn.is-disabled{background:#eee;outline:none}.mn-counter-btn:first-child{border-top-left-radius:.75rem;border-bottom-left-radius:.75rem}.mn-counter-btn:last-child{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}",""])},979:function(t,e,n){var r=n(946);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(681)("4d946654",r,!0)}});