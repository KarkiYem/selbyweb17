(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{466:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("f7e5036a",content,!0,{sourceMap:!1})},605:function(t,e,n){"use strict";n(466)},606:function(t,e,n){var r=n(17)((function(i){return i[1]}));r.push([t.i,"p[data-v-6932c9de]{opacity:.8}.fl[data-v-6932c9de]{margin:20px auto;width:90%}.flex[data-v-6932c9de]{align-items:center;display:flex;justify-content:space-between}.md[data-v-6932c9de]{opacity:.8}",""]),r.locals={},t.exports=r},794:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(43),n(44)),o={data:function(){return{category:"",filterdata:{name:"",subcat:[],position:"",brand:[]}}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(n=t).$route.params.id,e.next=4,c.a.collection("cat").getOne("".concat(r),{}).then((function(t){n.filterdata=t})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},goto:function(t){var e=this.$route.params.id;this.$router.push({name:"Details-id",params:{id:e}})}}},l=(n(605),n(12)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"fl"},t._l(t.filterdata.subcat,(function(i,n){return e("div",{key:n,staticClass:"flex"},[e("p",[t._v(t._s(i))]),t._v(" "),e("span",{on:{click:function(e){return t.goto(i)}}},[e("mdicon",{staticClass:"md",attrs:{name:"arrow-right-circle"}})],1)])})),0)])}),[],!1,null,"6932c9de",null);e.default=component.exports}}]);