webpackJsonp([12],{157:function(e,t){e.exports=function(e,t,n,i,o){var a,r=e=e||{},A=typeof e.default;"object"!==A&&"function"!==A||(a=e,r=e.default);var s="function"==typeof r?r.options:r;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),i&&(s._scopeId=i);var l;if(o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},s._ssrRegister=l):n&&(l=n),l){var c=s.functional,d=c?s.render:s.beforeCreate;c?s.render=function(e,t){return l.call(t),d(e,t)}:s.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:r,options:s}}},159:function(e,t,n){t=e.exports=n(155)(!0),t.push([e.i,".header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:fixed;top:0;left:0;right:0;z-index:999;height:49px;color:#333;background:#fff;border-bottom:1px solid #eee}.header .header-left{-ms-flex-preferred-size:40px;flex-basis:40px;text-align:center}.header .header-title{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center;font-size:16px;font-weight:500}.header .header-right{-ms-flex-preferred-size:40px;flex-basis:40px;text-align:center}","",{version:3,sources:["D:/www/vue-site/cmshop/src/components/header.vue"],names:[],mappings:"AACA,QACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,YAAa,AACb,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,4BAA8B,CAC/B,AACD,qBACE,6BAA8B,AAC1B,gBAAiB,AACrB,iBAAmB,CACpB,AACD,sBACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,kBAAmB,AACnB,eAAgB,AAChB,eAAiB,CAClB,AACD,sBACE,6BAA8B,AAC1B,gBAAiB,AACrB,iBAAmB,CACpB",file:"header.vue",sourcesContent:["\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  height: 49px;\n  color: #333;\n  background: #fff;\n  border-bottom: 1px solid #eee;\n}\n.header .header-left {\n  -ms-flex-preferred-size: 40px;\n      flex-basis: 40px;\n  text-align: center;\n}\n.header .header-title {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 500;\n}\n.header .header-right {\n  -ms-flex-preferred-size: 40px;\n      flex-basis: 40px;\n  text-align: center;\n}"],sourceRoot:""}])},160:function(e,t,n){function i(e){n(162)}var o=n(157)(n(163),n(161),i,null,null);e.exports=o.exports},161:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-left"},[e._t("left")],2),e._v(" "),n("div",{staticClass:"header-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"header-right"},[e._t("right")],2)])},staticRenderFns:[]}},162:function(e,t,n){var i=n(159);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(156)("3a84c541",i,!0)},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{required:!0,type:String}}}},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"input",function(){return i}),n.d(t,"textarea",function(){return o}),n.d(t,"date",function(){return a}),n.d(t,"time",function(){return r}),n.d(t,"checkbox",function(){return A}),n.d(t,"radio",function(){return s}),n.d(t,"select",function(){return l});var i=["email","url","number","tel","text","password","tel"],o=["textarea"],a=["date"],r=["time"],A=["checkbox"],s=["radio"],l=["select"]},230:function(e,t,n){t=e.exports=n(155)(!0),t.push([e.i,'label.checkbox-container{display:inline-block;height:20px;line-height:normal;font-size:12px}label.checkbox-container .checkbox-core{display:inline-block;background-color:#fff;border-radius:100%;border:1px solid #ccc;position:relative;width:18px;height:18px;vertical-align:middle}label.checkbox-container .checkbox-core:after{content:"";position:absolute;top:3px;left:6px;width:4px;height:8px;border:2px solid transparent;border-left:0;border-top:0;-webkit-transform:rotate(45deg) scale(0);transform:rotate(45deg) scale(0);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}label.checkbox-container .checkbox-input.selected+.checkbox-core{border-color:#11b111;background-color:#11b111}label.checkbox-container .checkbox-input.selected+.checkbox-core:after{border-color:#fff;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}label.checkbox-container .checkbox-input:checked+.checkbox-core{border-color:#11b111;background-color:#11b111}label.checkbox-container .checkbox-input:checked+.checkbox-core:after{border-color:#fff;-webkit-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}label.checkbox-container .checkbox-input,label.radio-container .radio-input{display:none}label.radio-container .radio-core{display:inline-block;position:relative;width:20px;height:20px;border-radius:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #ccc;vertical-align:middle}label.radio-container .radio-core:after{content:"";width:8px;height:8px;border-radius:100%;position:absolute;top:5px;left:5px;background:#fff;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;-webkit-transform:scale(0);transform:scale(0)}label.radio-container .radio-input:checked+.radio-core{background:#11b111;border-color:#11b111}label.radio-container .radio-input:checked+.radio-core:after{-webkit-transform:scale(1);transform:scale(1)}.user-detail-info-container{padding:50px 0 20px}.user-detail-info-container .detail-info-row{position:relative;padding-left:10px;font-size:16px;border-bottom:1px solid #eee}.user-detail-info-container .detail-info-row .detail-label{display:inline-block;width:100px}.user-detail-info-container .detail-info-row .detail-input-container{display:inline-block;vertical-align:middle}.user-detail-info-container .detail-info-row .detail-input-container .detail-input{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;width:calc(100vw - 130px);height:50px;line-height:50px;border:none;vertical-align:middle}.user-detail-info-container .detail-info-row .detail-input-container .detail-input.textarea{height:150px;line-height:noraml}.user-detail-info-container .detail-info-row .detail-input-container .detail-input.auto{height:auto;line-height:noraml}.user-detail-info-container .detail-info-row .detail-input-container .detail-input .check-list-item{margin-right:10px}.user-detail-info-container .detail-info-row .detail-input-container .detail-input .checkbox-container{vertical-align:2px}.user-detail-info-container .detail-info-row .validate-state{position:absolute;top:0;right:10px}.user-detail-info-container .detail-info-row .validate-state.success{color:#11b111}.user-detail-info-container .detail-info-row .validate-state.error{color:#fe2400}.user-detail-info-container .more-info-container{margin-top:20px;padding-right:10px;text-align:right}.user-detail-info-container .more-info-container .more-info-link{font-size:14px;color:#333;text-decoration:underline}.user-detail-info-container .save-userinfo-container{margin-top:30px}.user-detail-info-container .save-userinfo-container .save-userinfo-btn{display:block;width:96%;margin:0 auto;border-radius:4px;line-height:46px;text-align:center;color:#fff;font-size:18px;background:#11b111}',"",{version:3,sources:["D:/www/vue-site/cmshop/src/views/user/userinfo.vue"],names:[],mappings:"AACA,yBACE,qBAAsB,AACtB,YAAa,AACb,mBAAoB,AACpB,cAAgB,CACjB,AAWD,wCACE,qBAAsB,AACtB,sBAAuB,AACvB,mBAAoB,AACpB,sBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,qBAAuB,CACxB,AACD,8CACE,WAAY,AACZ,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,UAAW,AACX,WAAY,AACZ,6BAA8B,AAC9B,cAAe,AACf,aAAc,AACd,yCAA0C,AAC1C,iCAAkC,AAClC,yCAA2C,AAC3C,iCAAmC,AACnC,yBAA2B,AAC3B,8CAAmD,CACpD,AACD,iEACE,qBAAsB,AACtB,wBAA0B,CAC3B,AACD,uEACE,kBAAmB,AACnB,yCAA0C,AAC1C,gCAAkC,CACnC,AACD,gEACE,qBAAsB,AACtB,wBAA0B,CAC3B,AACD,sEACE,kBAAmB,AACnB,yCAA0C,AAC1C,gCAAkC,CACnC,AAID,4EACE,YAAc,CACf,AACD,kCACE,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,8BAA+B,AACvB,sBAAuB,AAC/B,sBAAuB,AACvB,qBAAuB,CACxB,AACD,wCACE,WAAY,AACZ,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,gBAAiB,AACjB,yCAA2C,AAC3C,iCAAmC,AACnC,yBAA2B,AAC3B,+CAAmD,AACnD,2BAA4B,AAC5B,kBAAoB,CACrB,AACD,uDACE,mBAAoB,AACpB,oBAAsB,CACvB,AACD,6DACE,2BAA4B,AAC5B,kBAAoB,CACrB,AACD,4BACE,mBAAqB,CACtB,AACD,6CACE,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,4BAA8B,CAC/B,AACD,2DACE,qBAAsB,AACtB,WAAa,CACd,AACD,qEACE,qBAAsB,AACtB,qBAAuB,CACxB,AACD,mFACE,8BAA+B,AACvB,sBAAuB,AAC/B,qBAAsB,AACtB,0BAA2B,AAC3B,YAAa,AACb,iBAAkB,AAClB,YAAa,AACb,qBAAuB,CACxB,AACD,4FACE,aAAc,AACd,kBAAoB,CACrB,AACD,wFACE,YAAa,AACb,kBAAoB,CACrB,AACD,oGACE,iBAAmB,CACpB,AACD,uGACE,kBAAoB,CACrB,AACD,6DACE,kBAAmB,AACnB,MAAO,AACP,UAAY,CACb,AACD,qEACE,aAAe,CAChB,AACD,mEACE,aAAe,CAChB,AACD,iDACE,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,iEACE,eAAgB,AAChB,WAAY,AACZ,yBAA2B,CAC5B,AACD,qDACE,eAAiB,CAClB,AACD,wEACE,cAAe,AACf,UAAW,AACX,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,kBAAoB,CACrB",file:"userinfo.vue",sourcesContent:['\nlabel.checkbox-container {\n  display: inline-block;\n  height: 20px;\n  line-height: normal;\n  font-size: 12px;\n}\nlabel.checkbox-container .checkbox-core {\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 100%;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\nlabel.checkbox-container .checkbox-core {\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 100%;\n  border: 1px solid #ccc;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n}\nlabel.checkbox-container .checkbox-core:after {\n  content: "";\n  position: absolute;\n  top: 3px;\n  left: 6px;\n  width: 4px;\n  height: 8px;\n  border: 2px solid transparent;\n  border-left: 0;\n  border-top: 0;\n  -webkit-transform: rotate(45deg) scale(0);\n  transform: rotate(45deg) scale(0);\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\nlabel.checkbox-container .checkbox-input.selected + .checkbox-core {\n  border-color: #11b111;\n  background-color: #11b111;\n}\nlabel.checkbox-container .checkbox-input.selected + .checkbox-core:after {\n  border-color: #fff;\n  -webkit-transform: rotate(45deg) scale(1);\n  transform: rotate(45deg) scale(1);\n}\nlabel.checkbox-container .checkbox-input:checked + .checkbox-core {\n  border-color: #11b111;\n  background-color: #11b111;\n}\nlabel.checkbox-container .checkbox-input:checked + .checkbox-core:after {\n  border-color: #fff;\n  -webkit-transform: rotate(45deg) scale(1);\n  transform: rotate(45deg) scale(1);\n}\nlabel.checkbox-container .checkbox-input {\n  display: none;\n}\nlabel.radio-container .radio-input {\n  display: none;\n}\nlabel.radio-container .radio-core {\n  display: inline-block;\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid #ccc;\n  vertical-align: middle;\n}\nlabel.radio-container .radio-core:after {\n  content: "";\n  width: 8px;\n  height: 8px;\n  border-radius: 100%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  background: #fff;\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\nlabel.radio-container .radio-input:checked + .radio-core {\n  background: #11b111;\n  border-color: #11b111;\n}\nlabel.radio-container .radio-input:checked + .radio-core:after {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n.user-detail-info-container {\n  padding: 50px 0 20px;\n}\n.user-detail-info-container .detail-info-row {\n  position: relative;\n  padding-left: 10px;\n  font-size: 16px;\n  border-bottom: 1px solid #eee;\n}\n.user-detail-info-container .detail-info-row .detail-label {\n  display: inline-block;\n  width: 100px;\n}\n.user-detail-info-container .detail-info-row .detail-input-container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.user-detail-info-container .detail-info-row .detail-input-container .detail-input {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  width: calc(100vw - 130px);\n  height: 50px;\n  line-height: 50px;\n  border: none;\n  vertical-align: middle;\n}\n.user-detail-info-container .detail-info-row .detail-input-container .detail-input.textarea {\n  height: 150px;\n  line-height: noraml;\n}\n.user-detail-info-container .detail-info-row .detail-input-container .detail-input.auto {\n  height: auto;\n  line-height: noraml;\n}\n.user-detail-info-container .detail-info-row .detail-input-container .detail-input .check-list-item {\n  margin-right: 10px;\n}\n.user-detail-info-container .detail-info-row .detail-input-container .detail-input .checkbox-container {\n  vertical-align: 2px;\n}\n.user-detail-info-container .detail-info-row .validate-state {\n  position: absolute;\n  top: 0;\n  right: 10px;\n}\n.user-detail-info-container .detail-info-row .validate-state.success {\n  color: #11b111;\n}\n.user-detail-info-container .detail-info-row .validate-state.error {\n  color: #fe2400;\n}\n.user-detail-info-container .more-info-container {\n  margin-top: 20px;\n  padding-right: 10px;\n  text-align: right;\n}\n.user-detail-info-container .more-info-container .more-info-link {\n  font-size: 14px;\n  color: #333;\n  text-decoration: underline;\n}\n.user-detail-info-container .save-userinfo-container {\n  margin-top: 30px;\n}\n.user-detail-info-container .save-userinfo-container .save-userinfo-btn {\n  display: block;\n  width: 96%;\n  margin: 0 auto;\n  border-radius: 4px;\n  line-height: 46px;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  background: #11b111;\n}'],sourceRoot:""}])},247:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-detail-info-container"},[n("shop-header",{attrs:{title:e.infoTitle}},[n("span",{attrs:{slot:"left"},on:{click:function(t){e.goBack()}},slot:"left"},[n("i",{staticClass:"fa fa-angle-left fa-2x"})])]),e._v(" "),e._l(e.info.fields,function(t){return n("div",{staticClass:"detail-info-row"},[n("label",{staticClass:"detail-label"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"detail-input-container"},[e.getType(t.type,"input")?n("input",{staticClass:"detail-input",attrs:{type:t.type,readonly:t.readonly,"data-key":t.name},domProps:{value:t.value}}):e.getType(t.type,"textarea")?n("textarea",{staticClass:"detail-input textarea",attrs:{resize:"none",readonly:t.readonly,"data-key":t.name}},[e._v(e._s(t.value))]):e.getType(t.type,"date")?n("div",{staticClass:"detail-input",attrs:{"data-key":t.name},on:{click:function(t){e.openDatePicker(t)}}},[e._v(e._s(t.value))]):e.getType(t.type,"time")?n("div",{staticClass:"detail-input",attrs:{"data-key":t.name},on:{click:function(t){e.openTimePicker(t)}}},[e._v(e._s(t.value))]):e.getType(t.type,"checkbox")?n("ul",{staticClass:"detail-input J-more-value auto clearfix",attrs:{"data-key":t.name}},e._l(t.valueArr,function(i,o){return n("li",{staticClass:"check-list-item fl"},[n("label",{staticClass:"checkbox-container",attrs:{for:t.name+o}},[n("input",{staticClass:"checkbox-input",attrs:{type:"checkbox",id:t.name+o},domProps:{value:o,checked:i.checked}}),e._v(" "),n("span",{staticClass:"checkbox-core"})]),e._v(" "),n("span",[e._v(e._s(i.title))])])})):e.getType(t.type,"radio")?n("ul",{staticClass:"detail-input J-more-value auto clearfix",attrs:{"data-key":t.name}},e._l(t.valueArr,function(i,o){return n("li",{staticClass:"check-list-item fl"},[n("label",{staticClass:"radio-container time-select",attrs:{for:t.name+o}},[n("input",{staticClass:"radio-input",attrs:{type:"radio",id:t.name+o,name:t.name},domProps:{value:o,checked:i.checked}}),e._v(" "),n("span",{staticClass:"radio-core"})]),e._v(" "),n("span",[e._v(e._s(i.title))])])})):e.getType(t.type,"select")?n("select",{staticClass:"detail-input",attrs:{"data-key":t.name}},e._l(t.valueArr,function(t,i){return n("option",{domProps:{value:i,selected:t.selected}},[e._v(e._s(t.title))])})):e._e()])])}),e._v(" "),e.detail?e._e():n("div",{staticClass:"more-info-container"},[e.info.moreInfoFromThird?n("span",[n("a",{staticClass:"more-info-link",attrs:{href:e.info.moreInfoFromThird}},[e._v("个人详细信息")])]):n("span",[n("router-link",{staticClass:"more-info-link",attrs:{to:{path:"/userinfo",query:{detail:1}}}},[e._v("个人详细信息")])],1)]),e._v(" "),n("div",{staticClass:"save-userinfo-container"},[n("span",{staticClass:"save-userinfo-btn",on:{click:function(t){e.saveInfo()}}},[e._v("保存")])]),e._v(" "),n("mt-datetime-picker",{ref:"datepicker",attrs:{startDate:new Date(1900,1,1),type:"date"},on:{confirm:e.dateSelected}}),e._v(" "),n("mt-datetime-picker",{ref:"timepicker",attrs:{startDate:new Date(1900,1,1),type:"time"},on:{confirm:e.timeSelected}})],2)},staticRenderFns:[]}},262:function(e,t,n){var i=n(230);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(156)("21382b3b",i,!0)},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(160),o=n.n(i),a=n(211),r=n(61),A=n(28);n.n(A);t.default={data:function(){return{detail:"",info:"",dateElement:"",timeElement:""}},computed:{infoTitle:function(){return this.detail?"个人详细详细":"个人基本信息"}},mounted:function(){this.initField()},methods:{initField:function(){var e=this;this.detail=this.$route.query.detail?1:0,r.a.getUserField({detail:this.detail}).then(function(t){e.info=t.data})},getType:function(e,t){return-1===a[t].indexOf(e)?0:1},serializa:function(){var e=[].slice.call(document.getElementsByClassName("detail-input")),t={};return e.forEach(function(e){var n,i=e.getAttribute("data-key");if(e.classList.contains("J-more-value")){n=[].slice.call(e.querySelectorAll("input:checked")).map(function(e){return e.value})}else n=e.value?e.value:e.innerHTML;t[i]=n}),t},saveInfo:function(){var e=this.serializa(),t={baseInfo:!this.detail,userInfo:e};console.log(t),r.a.saveUserInfo(t).then(function(e){e.data.success?n.i(A.Toast)({message:"保存成功",position:"middle",duration:1500}):n.i(A.Toast)({message:e.data.errorMsg,position:"middle",duration:1500})})},openDatePicker:function(e){this.dateElement=e.target,this.$refs.datepicker.open()},openTimePicker:function(e){this.timeElement=e.target,this.$refs.timepicker.open()},dateSelected:function(e){var t=new Date(e);this.dateElement.innerHTML=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},timeSelected:function(e){this.timeElement.innerHTML=e},goBack:function(){this.$router.go(-1)}},components:{shopHeader:o.a},watch:{$route:function(e){this.initField()}}}},87:function(e,t,n){function i(e){n(262)}var o=n(157)(n(276),n(247),i,null,null);e.exports=o.exports}});
//# sourceMappingURL=12.b6ca1e66b1410064aac4.js.map