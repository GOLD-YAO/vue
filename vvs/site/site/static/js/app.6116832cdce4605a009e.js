webpackJsonp([15],{143:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(13),o=e(55),i=(e.n(o),e(52)),u=(e.n(i),e(54)),c=(e.n(u),e(53)),a=(e.n(c),e(56)),f=e(27),s=e.n(f),d=e(57);r.default.use(s.a),r.default.config.productionTip=!1,new r.default({router:a.a,store:d.a}).$mount("#app")},144:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"initSwipe",function(){return c}),e.d(t,"initCategory",function(){return a}),e.d(t,"initCategoryList",function(){return f}),e.d(t,"loadMoreProduct",function(){return s}),e.d(t,"getContentDetail",function(){return d}),e.d(t,"login",function(){return p}),e.d(t,"logout",function(){return h}),e.d(t,"search",function(){return l}),e.d(t,"clearSearch",function(){return m}),e.d(t,"getOrderList",function(){return g}),e.d(t,"clearOrderList",function(){return v}),e.d(t,"orderDeposit",function(){return I}),e.d(t,"clearDeposit",function(){return y}),e.d(t,"orderTabChange",function(){return O});var r=e(142),o=e.n(r),i=e(4),u=e(60),c=function(n){var t=n.commit;return u.a.initSwipe().then(function(n){t(i.n,n.data)})},a=function(n){var t=n.commit;return u.a.getIndexCategory().then(function(n){t(i.o,n.data)})},f=function(n,t){var e=n.commit;return u.a.getCategoryList(t).then(function(n){var t=n.data;e(i.k,t.list),e(i.m,t.hasMore)})},s=function(n,t){var e=n.commit;return u.a.getCategoryList(t).then(function(n){var t=n.data;e(i.l,t.list),e(i.m,t.hasMore)})},d=function(n,t){var e=n.commit;return u.a.getContentDetail(t).then(function(n){e(i.j,n.data)})},p=function(n,t){var e=n.commit;return u.a.login(t).then(function(n){return n.data.success?(e(i.h,n.data.userinfo),{success:!0,redirectUrl:n.data.redirectUrl}):{success:!1,errorMsg:n.data.errorMsg}})},h=function(n){var t=n.commit;return new o.a(function(n){t(i.i),n()})},l=function(n,t){var e=n.commit;return u.a.search(t).then(function(n){e(i.c,n.data),e(i.d,t.keyword)})},m=function(n){var t=n.commit;return new o.a(function(n){t(i.c,[]),t(i.d,""),n()})},g=function(n,t){var e=n.commit;return u.a.getOrderList(t).then(function(n){e(i.e,n.data)})},v=function(n){var t=n.commit;return new o.a(function(n){t(i.f),n()})},I=function(n,t){var e=n.commit;return new o.a(function(n){e(i.a,t),n()})},y=function(n){var t=n.commit;return new o.a(function(n){t(i.b),n()})},O=function(n,t){var e=n.commit;return new o.a(function(n){e(i.g,t),n()})}},145:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"getSwipe",function(){return r}),e.d(t,"getCategory",function(){return o}),e.d(t,"getCategoryList",function(){return i}),e.d(t,"hasMoreList",function(){return u}),e.d(t,"contentDetail",function(){return c}),e.d(t,"userCenterInfo",function(){return a}),e.d(t,"getOrderList",function(){return f}),e.d(t,"getOrderType",function(){return s}),e.d(t,"keyword",function(){return d}),e.d(t,"searchResult",function(){return p}),e.d(t,"depositInfo",function(){return h});var r=function(n){return n.index.swipe},o=function(n){return n.index.category},i=function(n){return n.list.categoryList},u=function(n){return n.list.hasMore},c=function(n){return n.detail.info},a=function(n){return n.user.userinfo},f=function(n){return n.order.orderList},s=function(n){return n.order.orderType},d=function(n){return n.search.keyword},p=function(n){return n.search.searchResult},h=function(n){return n.deposit.info}},146:function(n,t,e){"use strict";var r,o=e(6),i=e.n(o),u=e(4),c={info:""},a=(r={},i()(r,u.a,function(n,t){n.info=t}),i()(r,u.b,function(n){n.info=""}),r);t.a={state:c,mutations:a}},147:function(n,t,e){"use strict";var r=e(6),o=e.n(r),i=e(4),u={info:{}},c=o()({},i.j,function(n,t){n.info=t});t.a={state:u,mutations:c}},148:function(n,t,e){"use strict";var r,o=e(6),i=e.n(o),u=e(4),c={swipe:[],category:[]},a=(r={},i()(r,u.n,function(n,t){t.hasSwipe&&(n.swipe=t.swipeData)}),i()(r,u.o,function(n,t){n.category=t}),r);t.a={state:c,mutations:a}},149:function(n,t,e){"use strict";var r,o=e(6),i=e.n(o),u=e(4),c={categoryList:[],hasMore:!1},a=(r={},i()(r,u.k,function(n,t){n.categoryList=t}),i()(r,u.l,function(n,t){t.forEach(function(t){n.categoryList.push(t)})}),i()(r,u.m,function(n,t){n.hasMore=t}),r);t.a={state:c,mutations:a}},150:function(n,t,e){"use strict";var r,o=e(6),i=e.n(o),u=e(4),c={orderList:[],orderType:""},a=(r={},i()(r,u.e,function(n,t){n.orderList=t}),i()(r,u.f,function(n){n.orderList=[]}),i()(r,u.g,function(n,t){n.orderType=t}),r);t.a={state:c,mutations:a}},151:function(n,t,e){"use strict";var r,o=e(6),i=e.n(o),u=e(4),c={keyword:"",searchResult:[]},a=(r={},i()(r,u.c,function(n,t){n.searchResult=t}),i()(r,u.d,function(n,t){n.keyword=t}),r);t.a={state:c,mutations:a}},152:function(n,t,e){"use strict";function r(){return!!a.a("skiId")&&"userinfo_"+a.b("skiId")}var o,i=e(6),u=e.n(i),c=e(4),a=e(32),f={userinfo:function(){var n=r();return!!n&&(!!a.a(n)&&a.b(n))}()||""},s=(o={},u()(o,c.h,function(n,t){a.c(r(),t,3600),n.userinfo=t}),u()(o,c.i,function(n){a.d(r()),n.userinfo=""}),o);t.a={state:f,mutations:s}},32:function(n,t,e){"use strict";function r(n,t,e){var r=new Date;r.setDate(r.getDate()+e),document.cookie=n+"="+escape(a()(t))+(null==e?"":";expires="+r.toGMTString())+";path=/"}function o(n){if(document.cookie.length>0){var t=document.cookie.indexOf(n+"=");if(-1!=t){t=t+n.length+1;var e=document.cookie.indexOf(";",t);return-1==e&&(e=document.cookie.length),JSON.parse(unescape(document.cookie.substring(t,e)))}}return""}function i(n){if(document.cookie.length>0){if(-1!=document.cookie.indexOf(n+"="))return!0}return!1}function u(n){var t=new Date;t.setTime(t.getTime()-1);var e=o(n);null!=e&&(document.cookie=n+"="+e+";expires="+t.toGMTString()+";path=/")}e.d(t,"c",function(){return r}),e.d(t,"b",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"d",function(){return u});var c=e(65),a=e.n(c)},4:function(n,t,e){"use strict";e.d(t,"n",function(){return r}),e.d(t,"o",function(){return o}),e.d(t,"k",function(){return i}),e.d(t,"l",function(){return u}),e.d(t,"m",function(){return c}),e.d(t,"j",function(){return a}),e.d(t,"h",function(){return f}),e.d(t,"i",function(){return s}),e.d(t,"e",function(){return d}),e.d(t,"g",function(){return p}),e.d(t,"f",function(){return h}),e.d(t,"c",function(){return l}),e.d(t,"d",function(){return m}),e.d(t,"a",function(){return g}),e.d(t,"b",function(){return v});var r="INIT_SWIPE",o="INIT_CATEGORY",i="INIT_CATEGORY_LIST",u="LOAD_MORE_LIST",c="HAS_MORE_LIST",a="INIT_CONTENT_INFO",f="INIT_LOGING_USER",s="USER_LOGOUT_ACTION",d="INIT_ORDER_LIST",p="SWITCH_ORDER_TYPE",h="CLEAR_ORDER_LIST",l="SWITCH_SEARCH_RESULT",m="SWITCH_SEARCH_KEYWORD",g="DEPOSIT_ORDER_INFO",v="CLEAR_DEPOSIT_INFO"},52:function(n,t){},53:function(n,t){},54:function(n,t){},55:function(n,t){},56:function(n,t,e){"use strict";var r=e(59),o=e.n(r),i=e(13),u=e(139),c=e(32);i.default.use(u.a);var a=function(n){e.e(2).then(function(){n(e(68))}.bind(null,e)).catch(e.oe)},f=function(n){e.e(13).then(function(){n(e(72))}.bind(null,e)).catch(e.oe)},s=function(n){e.e(1).then(function(){n(e(66))}.bind(null,e)).catch(e.oe)},d=function(n){e.e(12).then(function(){n(e(67))}.bind(null,e)).catch(e.oe)},p=function(n){e.e(5).then(function(){n(e(79))}.bind(null,e)).catch(e.oe)},h=function(n){e.e(7).then(function(){n(e(69))}.bind(null,e)).catch(e.oe)},l=function(n){e.e(4).then(function(){n(e(73))}.bind(null,e)).catch(e.oe)},m=function(n){e.e(3).then(function(){n(e(76))}.bind(null,e)).catch(e.oe)},g=function(n){e.e(10).then(function(){n(e(78))}.bind(null,e)).catch(e.oe)},v=function(n){e.e(8).then(function(){n(e(70))}.bind(null,e)).catch(e.oe)},I=function(n){e.e(9).then(function(){n(e(74))}.bind(null,e)).catch(e.oe)},y=function(n){e.e(0).then(function(){n(e(75))}.bind(null,e)).catch(e.oe)},O=function(n){e.e(11).then(function(){n(e(77))}.bind(null,e)).catch(e.oe)},_=function(n){e.e(6).then(function(){n(e(71))}.bind(null,e)).catch(e.oe)},b=new u.a({mode:"history",base:"/site/1-1-1/",routes:[{path:"/",component:a},{path:"/search",component:f},{path:"/category",component:s},{path:"/detail",component:d},{path:"/usercenter",component:p,meta:{requiresAuth:!0}},{path:"/login",component:h},{path:"/order",component:l,meta:{requiresAuth:!0}},{path:"/order_third",component:m,meta:{requiresAuth:!0}},{path:"/userinfo",component:g,meta:{requiresAuth:!0}},{path:"/pay",component:v,meta:{requiresAuth:!0}},{path:"/order_deposit",component:I,meta:{requiresAuth:!0}},{path:"/order_qrcode",component:y,meta:{requiresAuth:!0}},{path:"/qrcode_info",component:O,meta:{requiresAuth:!0}},{path:"/payDeposit",component:_,meta:{requiresAuth:!0}}]});b.beforeEach(function(n,t,e){return c.a("skiId")&&!n.query.skiId?void e({path:n.path,query:o()(n.query,{skiId:c.b("skiId")})}):c.a("jfyopenid")&&c.a("openid")&&c.a("skiId")?(c.a("newscenic")&&(c.d("newscenic"),c.d("userinfo")),c.a("scenicinfo")&&(document.title=c.b("scenicinfo")?c.b("scenicinfo"):"金色飞鹰"),void(n.matched.some(function(n){return n.meta.requiresAuth})?c.a("userinfo_"+c.b("skiId"))?e():e({path:"/login",query:{redirect:n.fullPath}}):e())):void(window.location.href="http://wei.softykt.com/?skiId="+n.query.skiId+"&cat=1")}),t.a=b},57:function(n,t,e){"use strict";var r=e(13),o=e(58),i=e(144),u=e(145),c=e(148),a=e(149),f=e(147),s=e(152),d=e(150),p=e(151),h=e(146);r.default.use(o.a);var l=new o.a.Store({actions:i,getters:u,modules:{index:c.a,list:a.a,detail:f.a,user:s.a,order:d.a,search:p.a,deposit:h.a}});t.a=l},60:function(n,t,e){"use strict";function r(n){var t={};return n&&(t.params=n),t}var o=e(87),i=e.n(o);t.a={initSwipe:function(){return i.a.get("/api/initSiteSwipe",r())},getCategoryList:function(n){return i.a.get("/api/getCategoryList",r(n))},getIndexCategory:function(){return i.a.get("/api/getSiteCategory",r())},getContentDetail:function(n){return i.a.get("/api/getContentDetail",r(n))},search:function(n){return i.a.get("/api/searchSite",r(n))},sendQrcode:function(n){return i.a.post("/api/sendQrcode",n,r())},login:function(n){return i.a.post("/api/login",n,r())},getOrderList:function(n){return i.a.get("/api/getOrderList",r(n))},getOrderDetail:function(n){return i.a.get("/api/getOrderDetail",r(n))},assocaiteOrder:function(n){return i.a.post("/api/assocaiteOrder",n,r())},payDeposit:function(n){return i.a.post("/api/payDeposit",n,r())},getQrcodeInfo:function(n){return i.a.get("/api/getQrcodeInfo",r(n))},getPayJsParameters:function(n){return i.a.post("/api/getPayJsParameters",n,r())},remark:function(n){return i.a.post("/api/remark",n,r())},deleteOrder:function(n){return i.a.post("/api/deleteOrder",n,r())},payBack:function(n){return i.a.post("/api/payBack",n,r())},unbindOrder:function(n){return i.a.post("/api/unbindOrder",n,r())},getUserField:function(n){return i.a.get("/api/getUserField",r(n))},saveUserInfo:function(n){return i.a.post("/api/saveUserInfo",n,r())},getQrcodeNeedInfo:function(n){return i.a.get("/api/getQrcodeNeedInfo",r())},saveQrocdeInfo:function(n){return i.a.post("/api/saveQrocdeInfo",n,r())}}}},[143]);
//# sourceMappingURL=app.6116832cdce4605a009e.js.map