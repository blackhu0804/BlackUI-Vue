(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{188:function(t,e,n){},189:function(t,e,n){},190:function(t,e,n){},191:function(t,e,n){},192:function(t,e,n){},204:function(t,e,n){"use strict";var i=n(188);n.n(i).a},205:function(t,e,n){"use strict";var i=n(189);n.n(i).a},206:function(t,e,n){"use strict";var i=n(190);n.n(i).a},207:function(t,e,n){"use strict";var i=n(191);n.n(i).a},208:function(t,e,n){"use strict";var i=n(192);n.n(i).a},209:function(t,e,n){"use strict";n(53),n(14),n(23);var i={name:"blackLayout",data:function(){return{layoutClass:{hasAside:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"blackAside"===e.$options.name&&(t.layoutClass.hasAside=!0)})}},s=(n(204),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"2df69fbe",null);a.options.__file="layout.vue";e.a=a.exports},210:function(t,e,n){"use strict";var i={},s=(n(205),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"43778c29",null);a.options.__file="header.vue";e.a=a.exports},213:function(t,e,n){"use strict";var i={},s=(n(207),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"context"},[this._t("default")],2)},[],!1,null,"58682982",null);a.options.__file="content.vue";e.a=a.exports},215:function(t,e,n){"use strict";var i={name:"blackAside",data:function(){return{visible:!0}}},s=(n(208),n(1)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"aside"},[t._t("default"),t._v(" "),n("a",{on:{click:function(e){t.visible=!1}}},[t._v("隐藏")])],2):t._e()])},[],!1,null,"c41ec058",null);a.options.__file="aside.vue";e.a=a.exports},216:function(t,e,n){"use strict";var i={},s=(n(206),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"foot"},[this._t("default")],2)},[],!1,null,"30efee0a",null);a.options.__file="footer.vue";e.a=a.exports},230:function(t,e,n){},246:function(t,e,n){"use strict";var i=n(230);n.n(i).a},257:function(t,e,n){"use strict";n.r(e);var i=n(209),s=n(210),a=n(216),c=n(213),o=n(215),u={components:{GLayout:i.a,GHeader:s.a,GFooter:a.a,GContent:c.a,GAside:o.a}},l=(n(246),n(1)),r=Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),n("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[n("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n            header\n        ")]),t._v(" "),n("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n            content\n        ")]),t._v(" "),n("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n            footer\n        ")])],1),t._v(" "),t._m(1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"473f5ac3",null);r.options.__file="layout-demos.vue";e.default=r.exports}}]);