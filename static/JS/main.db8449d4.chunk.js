(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/logo-sec.8be94c12.png"},120:function(e,t,a){e.exports=a.p+"static/media/goofy.599f38ab.svg"},121:function(e,t,a){e.exports=a.p+"static/media/boo.0b13e3dc.svg"},122:function(e,t,a){e.exports=a.p+"static/media/cool.c1619cce.svg"},123:function(e,t,a){e.exports=a.p+"static/media/bgmusic.9cee89c2.mp3"},124:function(e,t,a){e.exports=a.p+"static/media/bg-new.d6d84b19.png"},125:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},136:function(e,t,a){e.exports=a.p+"static/media/eid.9f6c86dd.gif"},159:function(e,t,a){e.exports=a(235)},164:function(e,t,a){},165:function(e,t,a){},175:function(e,t,a){},229:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=(a(164),a(14)),l=a(8),s=(a(165),a(328)),u=a(236),m=a(322),d=a(82),p=a.n(d),g=a(309),f=a(44),b=a(299),h=a(300),y=a(52),E=a(301),v=a(73),j=a.n(v),O=a(62),S=a(112),x=a.n(S),k=a(110),w=a.n(k),C=(a(175),Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#efefef"),Object(f.a)(t,"transition","display 0.5s ease-in-out"),t)}})),z=function(e){var t=e.timezone,a=e.startup,n=e.place,o=e.pdate,c=C(),i=r.a.useState({checkedA:!0}),s=Object(l.a)(i,2),u=(s[0],s[1]);return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(b.a,{position:"fixed",color:"primary"},r.a.createElement(h.a,{style:{minHeight:"45px"}},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:w.a,width:"150",height:"30",alt:"logo",className:"App-logo"})),r.a.createElement("div",{className:c.grow}),r.a.createElement(x.a,{fontSize:"default",className:"settings",onClick:function(){u(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),a({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})},style:{color:"#fff"}})),r.a.createElement(O.a,{className:c.root},r.a.createElement(E.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between",color:"#555555"}},r.a.createElement("span",null,t),r.a.createElement("span",{style:{fontWeight:"normal"}},o))),r.a.createElement(E.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal",color:"#555555",fontSize:"1rem"}},r.a.createElement("span",null,n?"".concat(n):""),r.a.createElement("span",{style:{padding:"0 0 0 3px",fontWeight:"normal"}},r.a.createElement(j.a,{format:"HH:mm:ss",ticking:!0,timezone:t})))))))},I=a(311),N=a(114),A=a.n(N),F=a(305),B=a(308),M=a(307),P=a(240),T=a(306),D=a(302),J=a(330),L=function(e){var t=e.label,a=void 0===t?"Email Address":t,n=e.email,o=e.handleEmail,c=e.sent,i=(e.loading,e.subscribed),l=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,i?"You are already subscribed !":c?"Successfully Subscribed ! Please check your email.":"To subscribe to this website, please enter your email address here. We will send updates\n                                occasionally."),!c&&!i&&r.a.createElement(J.a,{error:l,autoFocus:!0,margin:"dense",id:"name",label:a,type:"email",fullWidth:!0,value:n,onChange:o,autoComplete:"Off"}))},W=a(113),R=function(e){var t=new Date,a=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"mdy"===e?"".concat(n,"/").concat(a,"/").concat(o):"iso"===e?t.toISOString():"".concat(a," ").concat(r," ").concat(o)};function Y(e){var t=e.name,a=e.value,n=void 0===a?"":a;if(!n)return localStorage.getItem(t);localStorage.setItem(t,n)}var _="padachone_email";var q=function(e){var t=e.modal,a=e.setModal,o=r.a.useState(!1),c=Object(l.a)(o,2),s=c[0],u=c[1],m=r.a.useState({value:"",sent:!1,button:"Cancel",loading:!1,subscribed:!1,error:!1,errorlabel:"Email Address"}),d=Object(l.a)(m,2),p=d[0],f=d[1];function b(){u(!1),a(!1)}return Object(n.useEffect)(function(){u(t)},[t]),r.a.createElement("div",null,r.a.createElement(F.a,{open:s,onClose:b,"aria-labelledby":"form-dialog-title"},p.loading&&r.a.createElement(P.a,null),r.a.createElement(T.a,{id:"form-dialog-title"},p.sent||p.subscribed?"":"Subscribe"),r.a.createElement(M.a,null,r.a.createElement(L,{label:p.errorlabel,email:p.value,handleEmail:function(e){f(Object(i.a)({},p,{value:e.target.value,sent:!1,error:!1,errorlabel:"Email Address"}))},sent:p.sent,loading:p.loading,subscribed:p.subscribed,error:p.error})),r.a.createElement(B.a,null,!p.loading&&r.a.createElement(g.a,{onClick:b,color:"primary"},p.button),!p.sent&&!p.loading&&!p.subscribed&&r.a.createElement(g.a,{onClick:function(){if(!p.value||!function(e){return/\S+@\S+\.\S+/.test(e)}(p.value))return f(Object(i.a)({},p,{value:"",error:!0}));f(Object(i.a)({},p,{loading:!0})),Y({name:_})?f(Object(i.a)({},p,{value:"",button:"OK",subscribed:!0,loading:!1})):function(e){var t={reply_to:"admirer@padachone.com",from_name:"Admirer",to_name:e,message_html:"Thank you for Subscribing to Padachone.com. You are Awesome!"};return W.send("default_service","template_Li3TxnLs",t,"user_L109OnczphkyI5bvHhcSe")}(p.value).then(function(e){console.log(e),f(Object(i.a)({},p,{value:"",sent:!0,button:"OK",loading:!1})),Y({name:_,value:p.value})}).catch(function(e){f(Object(i.a)({},p,{value:"",error:!0,errorlabel:"Please try later"}))})},color:"primary"},"Subscribe"))))},H=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#efefef",transition:"display 0.5s ease-in-out"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),K=function(e){e.startup;var t=H(),a=Object(n.useState)(!1),o=Object(l.a)(a,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{modal:c,setModal:i}),r.a.createElement(b.a,{position:"fixed",color:"primary",className:"".concat(t.appBar," padachone-ftr")},r.a.createElement(I.a,{color:"secondary","aria-label":"Add",className:t.fabButton,title:"Subscribe"},r.a.createElement(A.a,{fontSize:"large",onClick:function(){i(!0)}})),r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontSize:"10px",color:"#555555"},align:"center"},".")))},G=a(72),U=a.n(G),V=a(238),X=a(317),Z=a(318),$=(a(191),a(115)),Q=a(49),ee=a.n(Q),te=a(316),ae=a(319),ne=a(98),re=a.n(ne),oe=a(99),ce=a.n(oe),ie=a(116),le=a.n(ie),se=a(117),ue=a(47),me=a.n(ue),de=a(64),pe=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,i=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8&school=0"),u=Object(n.useState)({}),m=Object(l.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(de.a)(me.a.mark(function e(){var t,n;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),r&&localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(i),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(i))?p(JSON.parse(localStorage.getItem("padachone:".concat(i)))):function(){g.apply(this,arguments)}()},[]),[d,p]},ge=function(e){var t=e.lat,a=e.lon,r=R(),o=new Date,c=o.getMonth()+1,i=o.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=8&month=").concat(c,"&year=").concat(i,"&school=0"),u=Object(n.useState)({}),m=Object(l.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(de.a)(me.a.mark(function e(){var t,a,n;return me.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===r}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]};a(332),a(304),a(315),a(312),a(313),a(314),a(65),a(66),Object(u.a)({list:{width:250},fullList:{width:"auto"}});var fe=Object(se.autoPlay)(le.a),be=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],he=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),ye=function(e){var t=e.lat,a=e.lon,n=ge({lat:t,lon:a}),o=Object(l.a)(n,2),c=o[0],i=(o[1],he()),s=Object(te.a)(),u=r.a.useState(0),m=Object(l.a)(u,2),d=m[0],p=m[1],f=be.length;return c.length&&c[0].timings?r.a.createElement("div",{className:i.root},r.a.createElement(fe,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},be.map(function(e,t){return r.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){var a=c[0].timings[e].split(" "),n=a[0],o=a[1];return r.a.createElement(X.a,{className:i.card,key:t},r.a.createElement(Z.a,null,r.a.createElement(y.a,{className:i.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},n)),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o,r.a.createElement("br",null),c[0].date.hijri.month.ar)))}):null)})),r.a.createElement(ae.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?r.a.createElement(re.a,null):r.a.createElement(ce.a,null)),backButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?r.a.createElement(ce.a,null):r.a.createElement(re.a,null),"Back")})):r.a.createElement("h5",null,"Loading...")},Ee=a(118),ve=function(e){var t=e.lat,a=e.lon,o=function(){},c=Object(n.useState)([{location:[t,a],option:{color:"blue"},addHandler:{type:"click",callback:o}}]),i=Object(l.a)(c,2),s=i[0],u=(i[1],Object(n.useState)({search:"Ijburg",polygonStyle:{fillColor:"rgba(161,224,255,0.4)",strokeColor:"#a495b2",strokeThickness:2},option:{entityType:"PopulatedPlace"}})),m=Object(l.a)(u,2);m[0],m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.ReactBingmaps,{bingmapKey:"ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP",center:[t,a],zoom:10,pushPins:s}))},je=function(e){var t=function(e,t){var a=Object(n.useState)([]),r=Object(l.a)(a,2),o=r[0],c=r[1],i=function(){var a=Object(de.a)(me.a.mark(function a(){var n,r,o,i,l;return me.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://dev.virtualearth.net/REST/v1/Locations/".concat(e,",").concat(t,"?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP"),{headers:{Accept:"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:return r=a.sent,o=r.resourceSets[0].resources[0].address.addressLine+", "+r.resourceSets[0].resources[0].address.adminDistrict+", "+r.resourceSets[0].resources[0].address.countryRegion,a.next=9,fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=Muslim mosques near ".concat(o),{headers:{Accept:"application/json"}});case 9:return i=a.sent,a.next=12,i.json();case 12:(l=a.sent).items&&c(l.items);case 14:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){i()},[]),[o,c]}(e.lat,e.lon),a=Object(l.a)(t,2),o=a[0];a[1];return o.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:e.link},e.title))}))):r.a.createElement("h4",null,"Loading...")},Oe=a(119),Se=a.n(Oe),xe=a(321),ke=a(320),we=(a(229),a(81)),Ce=a.n(we),ze=function(e){var t=e.dt,a=e.timezone;return r.a.createElement(j.a,{date:t,timezone:a,format:"MM/D/YYYY HH:mm",style:{display:"none"},ticking:!0,interval:1e3})},Ie=a(303),Ne=a(120),Ae=a.n(Ne),Fe=a(121),Be=a.n(Fe),Me=a(122),Pe=a.n(Me),Te=Object(u.a)(function(e){return{typography:{padding:e.spacing(2)}}}),De=function(e){var t=e.dismissMsg,a=e.setdismissMsg,n=e.anchorEl,o=e.setAnchorEl,c=(e.timerdisplay,e.setTimerdisplay),i=Te();var l=Boolean(n),s=l?"simple-popover":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(e){o(e.currentTarget);var t=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)").innerText.split(" "),n=t[1],r=parseInt(t[0]);"minutes"===n||"minute"===n||"seconds"===n||"second"===n?("minutes"===n||"minute"===n)&&r<=5?a(["Not Allowed !",Ae.a]):("seconds"===n||"second"===n)&&r<=30?a(["Line up and be ready !",Pe.a]):("seconds"===n||"second"===n)&&r<=60?a(["Forbidden !",Be.a]):c(!1):c(!1)}},"Dismiss"===t[0]?t[0]:null,"Dismiss"!==t[0]&&r.a.createElement("img",{src:t[1],width:"60",height:"60"})),r.a.createElement(Ie.a,{id:s,open:l,anchorEl:n,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(y.a,{className:i.typography},t[0])))},Je={backgroundImage:"url(".concat(Ce.a,")"),height:"250px",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat",width:"100%",backgroundPosition:"center",padding:"50% 0",fontSize:"2rem",fontWeight:"bold",color:"rgb(3, 155, 229)",backgroundColor:"#fff"},Le=function(e){var t=e.anim;e.setAnim;return r.a.createElement("div",null,t[0]&&r.a.createElement("div",{className:"Prayer-time",style:Je},t[1]," Time"))},We=Object(u.a)(function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)},typography:{padding:e.spacing(2)}}}),Re=function(e){var t=Object(n.useState)(R("iso")),a=Object(l.a)(t,2),o=a[0],c=a[1],i=ee.a.tz.guess(),s=Object(n.useState)({}),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)([null]),g=Object(l.a)(p,2),f=g[0],b=g[1],h=function(){m.prefix&&m.prefix.replace("Left","Time"),A(!1),setTimeout(w,3e4)},y=Object(n.useState)(["Dismiss"]),E=Object(l.a)(y,2),v=E[0],j=E[1],O=r.a.useState(null),S=Object(l.a)(O,2),x=S[0],k=S[1],w=function(t){b([null,f[1]]),d({}),c(R("iso"));var a=document.querySelector(".timerComp time");if(a){var n=a.innerHTML,r=n.split(" ")[1],o=Object.entries(e.prayers).reduce(function(e,a){var n=parseInt(a[1].split(":")[0]),o=parseInt(r.split(":")[0]);return parseInt(a[1].split(":")[1]),parseInt(r.split(":")[1]),n>=o?e.push(a):o-n<=1&&"init"===t&&e.push(a),e},[]);console.table("now",o),o.length&&(j(["Dismiss"]),A(!0),n=n.replace(r,o[0][1]),d({endDate:n,prefix:"Left for "+o[0][0],cb:h}),b([null,o[0][0]]))}};Object(n.useEffect)(function(){w("init")},[]);var C=We(),z=Object(n.useState)(!0),I=Object(l.a)(z,2),N=I[0],A=I[1];return Object(n.useEffect)(function(){var e=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)");N||(k(null),e&&" time expired"===e.innerText&&b(function(){return[Ce.a,f[1]]}),setTimeout(function(){A(!0)},6e4))},[N]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{in:N},r.a.createElement("div",{className:"timerComp",style:{margin:"0 10px",position:"static",top:"95px",zIndex:"1"}},i===e.timezone&&r.a.createElement(xe.a,{align:"left",className:C.snackbar,message:m.hasOwnProperty("endDate")&&r.a.createElement(Se.a,{options:m}),action:r.a.createElement(De,{dismissMsg:v,setdismissMsg:j,anchorEl:x,setAnchorEl:k,timerdisplay:N,setTimerdisplay:A}),style:{backgroundColor:"#1976d2",display:N?"flex":"none"}}),r.a.createElement(ze,{dt:o,timezone:e.timezone}))),r.a.createElement(ke.a,{in:!N},r.a.createElement(Le,{anim:f,setAnim:b})))},Ye=a(100),_e=a.n(Ye),qe=r.a.memo(function(e){var t=e.bgm;return r.a.createElement(_e.a,{autoLoad:!0,loop:!0,url:t,playStatus:_e.a.status.PLAYING,playFromPosition:100,volume:10})}),He=a(123),Ke=a.n(He),Ge=Object($.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=e.timings,a=Object(n.useState)({}),o=Object(l.a)(a,2),c=(o[0],o[1]);return Object(n.useEffect)(function(){if(t.hasOwnProperty("Fajr")){var e=Object.keys(t).reduce(function(e,a){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(a)&&(e[a]=t[a]),e},{});c(e)}},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,{bgm:Ke.a}),r.a.createElement("h4",{style:{marginTop:"40px"}},"Lab (Alpha Releases)"),r.a.createElement("h5",null,"Subscribe"),r.a.createElement(q,null),r.a.createElement("h5",null,"Your TZ : ",ee.a.tz.guess()),e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("h5",null,"Travel Times"),r.a.createElement(ye,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Custom Search"),r.a.createElement(je,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Mosque Map"),r.a.createElement("div",{style:{width:"100%",height:"90vh"}},r.a.createElement(ve,{lat:e.coords.latitude,lon:e.coords.longitude}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),Ue=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),Ve=r.a.memo(function(e){var t=e.pdata,a=t.timings,n=t.date;t.meta;console.table(Object.entries(a));var o=Ue(),c=r.a.useState(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],m=function(){u(!0)};return a?s?r.a.createElement(Ge,{timings:a,timezone:e.timezone}):r.a.createElement(r.a.Fragment,null,Object.keys(a).map(function(e,t){return r.a.createElement(X.a,{className:o.card,key:t},r.a.createElement(Z.a,null,r.a.createElement(y.a,{className:o.title,color:"textSecondary",gutterBottom:!0,style:{fontSize:"17px"}},e,r.a.createElement("span",{onClick:m,className:"arab-month",style:{color:"#fff"}},".")),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},a[e])),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},n.hijri.month.ar)))})):null}),Xe=(a(231),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:U.a[500]},secondary:{color:"#4caf50"}}})),Ze=function(e){var t=e.prdata,a=t.data.timings,o=Object(n.useState)({}),c=Object(l.a)(o,2),i=c[0],s=c[1];Object(n.useEffect)(function(){if(a.hasOwnProperty("Fajr")){var e=Object.keys(a).reduce(function(e,t){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(t)&&(e[t]=a[t]),e},{});s(e)}},[a]);var u=t.data,d=t.code,p=(t.status,Xe());return Object(n.useEffect)(function(){u&&Object.keys(u).length}),r.a.createElement("div",{className:"pdnContainer"},i.hasOwnProperty("Fajr")&&r.a.createElement(Re,{timezone:e.timezone,prayers:i}),"object"===typeof t&&200===d&&Object.keys(u).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{in:!0},r.a.createElement("div",null,r.a.createElement(Ve,{pdata:u,timezone:e.timezone})))):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},$e=Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}}),Qe=function(e){var t=e.country,a=e.region,n=e.place,o=e.pdate,c=e.startup,i=pe({region:a,country:t,place:n,date:o}),s=Object(l.a)(i,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=$e();return u&&u.data&&u.data.meta&&200===u.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{timezone:d,startup:c,place:localStorage.getItem("padachone:place"),pdate:u.data.date.readable}),r.a.createElement(Ze,{prdata:u,timezone:d}),r.a.createElement(K,{startup:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,u.data||"Failed to fetch"===u.error?"Site is down for maintenance! Please try after sometime.":u.error),u.data||u.error?r.a.createElement("p",null,"Please ",r.a.createElement(g.a,{color:"primary",onClick:function(){return c({finished:!1})}},"refresh")," to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},et=a(137),tt=a(327),at=a(61),nt=a(334),rt=a(323),ot=a(331),ct=a(335),it=a(124),lt=a.n(it),st=(a(232),Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"},vertical:{color:"#fff"},iconContainer:{fontStyle:"italic"}}}));var ut=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=st(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(l.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,b=m.region,h=(m.seccountry,m.secregion,m.place),E=r.a.useState("rgba(0, 0, 0, 0.54)"),v=Object(l.a)(E,2),j=v[0],S=v[1],x=["Where on earth are you?","Almost there!","Need More Accuracy?"];function k(){0===m.activeStep&&!f||1===m.activeStep&&!b?S("red"):(S("rgba(0, 0, 0, 0.54)"),d(Object(i.a)({},m,{activeStep:m.activeStep+1})))}function w(){S("rgba(0, 0, 0, 0.54)"),d(Object(i.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){f&&d(Object(i.a)({},m,{region:"",place:""}))},[f]),Object(n.useEffect)(function(){d(Object(i.a)({},m,{country:t,region:a}))},[]),Object(n.useEffect)(function(){var t;p===x.length&&(t=Object(i.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?r.a.createElement(Ge,null):r.a.createElement("div",{className:c.root},r.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{backgroundImage:"url(".concat(lt.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right top",backgroundSize:"auto 100%",backgroundColor:"#0c39e3",fontWeight:"bold",fontSize:"4rem",padding:"24px",color:"rgba(255, 255, 255, 0.7)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times ",r.a.createElement("br",null)),r.a.createElement(y.a,{color:"textSecondary",align:"left",variant:"body2",component:"p",style:{padding:"0 24px",fontStyle:"italic",fontSize:"0.9rem",marginTop:"10px"},gutterBottom:!0},"An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day.",r.a.createElement("br",null),' "Worries end when Salah begins"'),r.a.createElement(nt.a,{activeStep:p,orientation:"vertical"},x.map(function(e,t){return r.a.createElement(rt.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},r.a.createElement(ot.a,{align:"left"},r.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),r.a.createElement(ct.a,{align:"left",style:{border:"none"}},0===p&&r.a.createElement(at.a,{value:f,onChange:function(e){return t=e,void d(Object(i.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",marginBottom:"10px",minHeight:"40px"}}),1===p&&r.a.createElement(at.b,{country:f,value:b,onChange:function(e){return t=e,void d(Object(i.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",minHeight:"30px",marginBottom:"10px"}}),2===p&&r.a.createElement(J.a,{id:"place-name",label:"Place",className:c.textField,value:h,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(i.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem",color:j},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(g.a,{disabled:0===p,onClick:w,className:c.button},"Back"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:k,className:c.button,style:{color:"white"}},p===x.length-1?"Finish":2!==p||h?"Next":"Skip")))))})),p===x.length&&r.a.createElement(O.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(g.a,{onClick:function(){d(Object(i.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},mt=a(125),dt=a(126),pt=a(60),gt=a(139),ft=a(127),bt=a(138),ht=a(48),yt=a(329),Et=function(e){function t(e){var a;return Object(dt.a)(this,t),(a=Object(gt.a)(this,Object(ft.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(bt.a)(t,e),Object(pt.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),ht.b(function(n){n.setExtras(t);var r=ht.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return yt.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.")):this.props.children}}]),t}(n.Component),vt=a(129),jt=a.n(vt),Ot=a(130),St=a(4),xt=a(131),kt=a.n(xt),wt=a(133),Ct=a.n(wt),zt=a(134),It=a.n(zt),Nt=a(135),At=a.n(Nt),Ft=a(326),Bt=a(333),Mt=a(132),Pt=a.n(Mt),Tt={success:kt.a,warning:Pt.a,error:Ct.a,info:It.a},Dt=Object(u.a)(function(e){return{info:{},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function Jt(e){var t=Dt(),a=e.className,n=e.message,o=e.onClose,c=e.variant,i=Object(Ot.a)(e,["className","message","onClose","variant"]),l=Tt[c];return r.a.createElement(xe.a,Object.assign({className:Object(St.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(St.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(Ft.a,{key:"close","aria-label":"Close",color:"inherit",onClick:o},r.a.createElement(At.a,{className:t.icon}))]},i))}var Lt=Object(u.a)(function(e){return{margin:{margin:e.spacing(1)}}});var Wt=function(e){var t=e.msg,a=(Lt(),r.a.useState(!0)),n=Object(l.a)(a,2),o=n[0],c=n[1];function i(e,t){"clickaway"!==t&&c(!1)}return r.a.createElement("div",{className:"admirer-msg"},r.a.createElement(Bt.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:1e4,onClose:i},r.a.createElement(Jt,{onClose:i,variant:"info",message:t})))},Rt=a(136),Yt={backgroundImage:"url(".concat(a.n(Rt).a,")"),height:"250px",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat",width:"100%",backgroundPosition:"center",padding:"50% 0",fontSize:"2rem",fontWeight:"bold",color:"transparent"},_t=function(e){var t=e.display,a=e.setdisplay;return Object(n.useEffect)(function(){var e=ee.a.tz.guess();"03 Jun 2019"===R()&&"Europe/Amsterdam"===e||"04 Jun 2019"===R()&&"Europe/Amsterdam"===e||"04 Jun 2019"===R()&&"Europe/London"===e||"03 Jun 2019"===R()&&"Europe/London"===e||"04 Jun 2019"===R()&&"Asia/Dubai"===e||"03 Jun 2019"===R()&&"Asia/Dubai"===e||"04 Jun 2019"===R()&&"Asia/Riyadh"===e||"03 Jun 2019"===R()&&"Asia/Riyadh"===e||"03 Jun 2019"===R()&&"Asia/Jerusalem"===e||"04 Jun 2019"===R()&&"Asia/Jerusalem"===e||"05 Jun 2019"===R()?(console.log("Amsterdam & Indian fellow bros"),setTimeout(function(){a(!1)},5e3)):a(!1)},[]),r.a.createElement("div",null,t&&r.a.createElement("div",{className:"Prayer-time",style:Yt},"."))},qt=Object(et.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var Ht=function(){var e=Object(n.useState)(window.pageYOffset),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),u=Object(l.a)(c,2),m=u[0],d=u[1],p=function(){var e=window.pageYOffset;a>=e?null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="visible"):null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="hidden"),o(e)};Object(n.useEffect)(function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}},[]);var g=Object(n.useState)({finished:!1,pdtodaysDate:R().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),f=Object(l.a)(g,2),b=f[0],h=f[1],y=b.finished,E=b.country,v=b.region,j=b.pdtodaysDate,O=(b.prayerdata,b.place),S=function(e){var t=e.country,a=e.region,n=e.finished,r=e.place;h(Object(i.a)({},b,{finished:n,country:t,region:a,place:r}))},x=Object(n.useState)([!1,""]),k=Object(l.a)(x,2),w=k[0],C=k[1];return Object(n.useEffect)(function(){if(localStorage.removeItem("padachone_msg"),localStorage.removeItem("padachone_msg1"),localStorage.removeItem("padachone_msg2"),localStorage.removeItem("padachone_msg3"),!localStorage.getItem("padachone_msg4")){var e="Email Subscription option is available now! Check homepage footer.";C(function(){return localStorage.setItem("padachone_msg4",e),[!0,e]})}Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&h(Object(i.a)({},b,{finished:!0}))},[]),r.a.createElement(tt.a,{theme:qt},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(Et,null,r.a.createElement(jt.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),r.a.createElement(ke.a,{in:!0},r.a.createElement(_t,{display:m,setdisplay:d})),w[0]&&r.a.createElement(Wt,{msg:w[1]}),!y&&r.a.createElement(ut,{setupdata:mt,finished:function(e){return S(e)},country:E,region:v,place:O}),y&&r.a.createElement(Qe,{country:E,region:v,pdate:j,place:O,startup:function(e){return S(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));yt.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(Ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a.p+"static/media/Prayer-time.dd3c6541.jpg"}},[[159,1,2]]]);
//# sourceMappingURL=main.db8449d4.chunk.js.map