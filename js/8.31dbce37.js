(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"7fb7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("q-input",{staticStyle:{background:"white"},attrs:{filled:"",type:"textarea"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),n("q-btn",{staticClass:"q-ma-sm",attrs:{color:"secondary",label:"Send notification",disable:""===t.msg.trim()},on:{click:t.sendNotification}})],1)},a=[],s=(n("e6cf"),n("c973")),o=n.n(s),c={data(){return{msg:""}},methods:{sendNotification(){var t=this;return o()((function*(){try{t.$q.loading.show();const e=yield fetch("http://nasamiyares.myqnapcloud.com:3000/api/push",{method:"POST",headers:{"Content-Type":" application/json"},body:JSON.stringify({msg:t.msg})});if(200===e.status)return t.$q.notify({type:"positive",message:"Notification sended successfully."}),t.msg="",void t.$q.loading.hide()}catch(e){}t.$q.loading.hide(),t.$q.notify({type:"negative",message:"Error sending notification."})}))()}}},r=c,l=n("2877"),d=n("9989"),p=n("27f9"),u=n("9c40"),f=n("eebe"),m=n.n(f),g=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=g.exports;m()(g,"components",{QPage:d["a"],QInput:p["a"],QBtn:u["a"]})}}]);