webpackJsonp([42],{"2x5t":function(e,n,t){"use strict";function s(e){t("he+e")}Object.defineProperty(n,"__esModule",{value:!0});var i=t("Dd8w"),a=t.n(i),o=t("ABCa"),A=t("NYxO"),r=(o.a,a()({},Object(A.b)(["homeDetail"])),{components:{XHeader:o.a},computed:a()({},Object(A.b)(["homeDetail"])),created:function(){},activated:function(){this.$store.dispatch("getHomeDetail",{id:this.$route.params.newsid})},deactivated:function(){},watch:{homeDetail:function(e){this.infos=e},infos:function(e){var n=this.$options.filters.htmlUtil;this.realHtml=n(e.thumb_content)}},data:function(){return{infos:{},realHtml:""}},filters:{htmlUtil:function(e){var n="";return 0==e.length?"":(n=e.replace(/&amp;/g,"&"),n=n.replace(/&lt;/g,"<"),n=n.replace(/&gt;/g,">"),n=n.replace(/&nbsp;/g," "),n=n.replace(/&#39;/g,"'"),n=n.replace(/&quot;/g,'"'))}}}),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"detail"},[t("x-header",{attrs:{"left-options":{backText:""}}},[e._v("详情")]),e._v(" "),t("div",{staticClass:"newsMessage"},[t("div",{staticClass:"newsTitle"},[e._v(e._s(e.infos.title))]),e._v(" "),t("div",{staticClass:"newsTime"},[t("span",{staticClass:"time"},[e._v(e._s(e._f("formatDate")(e.infos.create_time)))]),t("span",{staticClass:"poster"},[e._v(e._s(e.infos.user_login))]),t("span",{staticClass:"party"},[e._v(e._s(e.infos.department))])]),e._v(" "),t("div",{staticClass:"newsContent",domProps:{innerHTML:e._s(e.realHtml)}})])],1)},d=[],m={render:l,staticRenderFns:d},C=m,g=t("VU/8"),w=s,c=g(r,C,!1,w,null,null);n.default=c.exports},SLg5:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.detail {\n  width: 100%;\n  font-size: 0;\n}\n.detail .newsMessage {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 2.875rem 0.625rem 0;\n}\n.detail .newsMessage .newsTitle {\n  padding: 1rem 0 0;\n  font-size: 1.1875rem;\n  color: #000000;\n  font-weight: bold;\n}\n.detail .newsMessage .newsTime {\n  padding: 1.125rem 0 1.375rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.detail .newsMessage .newsTime .time {\n  font-size: 0.875rem;\n  color: #999999;\n  margin-right: 2.125rem;\n}\n.detail .newsMessage .newsTime .poster {\n  font-size: 0.875rem;\n  color: #999999;\n  margin-right: 1.5rem;\n}\n.detail .newsMessage .newsTime .party {\n  font-size: 0.875rem;\n  color: #999999;\n}\n.detail .newsMessage .newsImg {\n  width: 100%;\n  height: 11.1875rem;\n  margin-bottom: 0.5rem;\n}\n.detail .newsMessage .newsImg img {\n  width: 100%;\n  height: 100%;\n}\n.detail .newsMessage .newsContent {\n  font-size: 1rem!important;\n  color: #333333;\n  overflow: hidden;\n}\n.detail .newsMessage .newsContent img {\n  max-width: 100%!important;\n}\n","",{version:3,sources:["D:/Code/cordova/cordova8hot-refined/rugao_dangjian/src/components/home/newsDetail.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,uBAAuB;EACvB,YAAY;EACZ,6BAA6B;CAC9B;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,6BAA6B;EAC7B,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;CACtB;AACD;EACE,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B",file:"newsDetail.vue",sourcesContent:["\n.detail {\n  width: 100%;\n  font-size: 0;\n}\n.detail .newsMessage {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 2.875rem 0.625rem 0;\n}\n.detail .newsMessage .newsTitle {\n  padding: 1rem 0 0;\n  font-size: 1.1875rem;\n  color: #000000;\n  font-weight: bold;\n}\n.detail .newsMessage .newsTime {\n  padding: 1.125rem 0 1.375rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n.detail .newsMessage .newsTime .time {\n  font-size: 0.875rem;\n  color: #999999;\n  margin-right: 2.125rem;\n}\n.detail .newsMessage .newsTime .poster {\n  font-size: 0.875rem;\n  color: #999999;\n  margin-right: 1.5rem;\n}\n.detail .newsMessage .newsTime .party {\n  font-size: 0.875rem;\n  color: #999999;\n}\n.detail .newsMessage .newsImg {\n  width: 100%;\n  height: 11.1875rem;\n  margin-bottom: 0.5rem;\n}\n.detail .newsMessage .newsImg img {\n  width: 100%;\n  height: 100%;\n}\n.detail .newsMessage .newsContent {\n  font-size: 1rem!important;\n  color: #333333;\n  overflow: hidden;\n}\n.detail .newsMessage .newsContent img {\n  max-width: 100%!important;\n}\n"],sourceRoot:""}])},"he+e":function(e,n,t){var s=t("SLg5");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("rjj0")("598d9718",s,!0,{})}});
//# sourceMappingURL=42.8a11f9983aa56cac972d.js.map