(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/logo-sec.8be94c12.png"},117:function(e,t,a){e.exports=a.p+"static/media/goofy.599f38ab.svg"},118:function(e,t,a){e.exports=a.p+"static/media/boo.0b13e3dc.svg"},119:function(e,t,a){e.exports=a.p+"static/media/cool.c1619cce.svg"},120:function(e,t,a){e.exports=a.p+"static/media/bgmusic.9cee89c2.mp3"},121:function(e,t,a){e.exports=a.p+"static/media/bg-new.d6d84b19.png"},122:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},149:function(e,t,a){e.exports=a(223)},154:function(e,t,a){},155:function(e,t,a){},165:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=(a(154),a(19)),l=a(8),s=(a(155),a(307)),u=a(224),m=a(301),d=a(81),p=a.n(d),g=a(294),f=a(43),h=a(285),b=a(286),y=a(65),E=a(287),v=a(72),j=a.n(v),O=a(83),S=a(95),x=a.n(S),k=a(110),w=a.n(k),z=(a(165),Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#efefef"),Object(f.a)(t,"transition","display 0.5s ease-in-out"),t)}})),C=function(e){var t=e.timezone,a=e.startup,n=e.place,o=e.pdate,c=z(),i=r.a.useState({checkedA:!0}),s=Object(l.a)(i,2),u=(s[0],s[1]);return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(h.a,{position:"fixed",color:"primary"},r.a.createElement(b.a,{style:{minHeight:"45px"}},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:w.a,width:"150",height:"30",alt:"logo",className:"App-logo"})),r.a.createElement("div",{className:c.grow}),r.a.createElement(x.a,{fontSize:"default",className:"settings",onClick:function(){u(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),a({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})},style:{color:"#fff"}})),r.a.createElement(O.a,{className:c.root},r.a.createElement(E.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between",color:"#555555"}},r.a.createElement("span",null,t),r.a.createElement("span",{style:{fontWeight:"normal"}},o))),r.a.createElement(E.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal",color:"#555555",fontSize:"1rem"}},r.a.createElement("span",null,n?"".concat(n):""),r.a.createElement("span",{style:{padding:"0 0 0 3px",fontWeight:"normal"}},r.a.createElement(j.a,{format:"HH:mm:ss",ticking:!0,timezone:t})))))))},N=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#efefef",transition:"display 0.5s ease-in-out"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),I=function(e){e.startup;var t=N();return r.a.createElement(h.a,{position:"fixed",color:"primary",className:"".concat(t.appBar," padachone-ftr")},r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontSize:"10px",color:"#555555"},align:"center"},"Copyright \xa9 2019 WISMIM."))},M=a(71),A=a.n(M),B=a(226),F=a(296),D=a(297),P=(a(172),a(112)),T=a(61),W=a.n(T),L=a(295),Y=a(314),R=a(96),q=a.n(R),G=a(97),H=a.n(G),J=a(113),K=a.n(J),U=a(114),_=a(46),V=a.n(_),X=a(62),Z=function(e){var t=new Date,a=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"mdy"===e?"".concat(n,"/").concat(a,"/").concat(o):"iso"===e?t.toISOString():"".concat(a," ").concat(r," ").concat(o)};var $=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,i=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8&school=0"),u=Object(n.useState)({}),m=Object(l.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(X.a)(V.a.mark(function e(){var t,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),r&&localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(i),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(i))?p(JSON.parse(localStorage.getItem("padachone:".concat(i)))):function(){g.apply(this,arguments)}()},[]),[d,p]},Q=function(e){var t=e.lat,a=e.lon,r=Z(),o=new Date,c=o.getMonth()+1,i=o.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=8&month=").concat(c,"&year=").concat(i,"&school=0"),u=Object(n.useState)({}),m=Object(l.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(X.a)(V.a.mark(function e(){var t,a,n;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===r}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]};a(310),a(288),a(293),a(289),a(291),a(292),a(63),a(64),Object(u.a)({list:{width:250},fullList:{width:"auto"}});var ee=Object(U.autoPlay)(K.a),te=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],ae=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),ne=function(e){var t=e.lat,a=e.lon,n=Q({lat:t,lon:a}),o=Object(l.a)(n,2),c=o[0],i=(o[1],ae()),s=Object(L.a)(),u=r.a.useState(0),m=Object(l.a)(u,2),d=m[0],p=m[1],f=te.length;return c.length&&c[0].timings?r.a.createElement("div",{className:i.root},r.a.createElement(ee,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},te.map(function(e,t){return r.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){var a=c[0].timings[e].split(" "),n=a[0],o=a[1];return r.a.createElement(F.a,{className:i.card,key:t},r.a.createElement(D.a,null,r.a.createElement(y.a,{className:i.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},n)),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o,r.a.createElement("br",null),c[0].date.hijri.month.ar)))}):null)})),r.a.createElement(Y.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?r.a.createElement(q.a,null):r.a.createElement(H.a,null)),backButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?r.a.createElement(H.a,null):r.a.createElement(q.a,null),"Back")})):r.a.createElement("h5",null,"Loading...")},re=a(115),oe=function(e){var t=e.lat,a=e.lon,o=function(){},c=Object(n.useState)([{location:[t,a],option:{color:"blue"},addHandler:{type:"click",callback:o}}]),i=Object(l.a)(c,2),s=i[0],u=(i[1],Object(n.useState)({search:"Ijburg",polygonStyle:{fillColor:"rgba(161,224,255,0.4)",strokeColor:"#a495b2",strokeThickness:2},option:{entityType:"PopulatedPlace"}})),m=Object(l.a)(u,2);m[0],m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.ReactBingmaps,{bingmapKey:"ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP",center:[t,a],zoom:10,pushPins:s}))},ce=function(e){var t=function(e,t){var a=Object(n.useState)([]),r=Object(l.a)(a,2),o=r[0],c=r[1],i=function(){var a=Object(X.a)(V.a.mark(function a(){var n,r,o,i,l;return V.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://dev.virtualearth.net/REST/v1/Locations/".concat(e,",").concat(t,"?o=json&key=ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP"),{headers:{Accept:"application/json"}});case 2:return n=a.sent,a.next=5,n.json();case 5:return r=a.sent,o=r.resourceSets[0].resources[0].address.addressLine+", "+r.resourceSets[0].resources[0].address.adminDistrict+", "+r.resourceSets[0].resources[0].address.countryRegion,a.next=9,fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=Muslim mosques near ".concat(o),{headers:{Accept:"application/json"}});case 9:return i=a.sent,a.next=12,i.json();case 12:(l=a.sent).items&&c(l.items);case 14:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)(function(){i()},[]),[o,c]}(e.lat,e.lon),a=Object(l.a)(t,2),o=a[0];a[1];return o.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:e.link},e.title))}))):r.a.createElement("h4",null,"Loading...")},ie=a(116),le=a.n(ie),se=a(300),ue=a(299),me=(a(217),a(80)),de=a.n(me),pe=function(e){var t=e.dt,a=e.timezone;return r.a.createElement(j.a,{date:t,timezone:a,format:"MM/D/YYYY HH:mm",style:{display:"none"},ticking:!0,interval:1e3})},ge=a(298),fe=a(117),he=a.n(fe),be=a(118),ye=a.n(be),Ee=a(119),ve=a.n(Ee),je=Object(u.a)(function(e){return{typography:{padding:e.spacing(2)}}}),Oe=function(e){var t=e.dismissMsg,a=e.setdismissMsg,n=e.anchorEl,o=e.setAnchorEl,c=(e.timerdisplay,e.setTimerdisplay),i=je();var l=Boolean(n),s=l?"simple-popover":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(e){o(e.currentTarget);var t=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)").innerText.split(" "),n=t[1],r=parseInt(t[0]);"minutes"===n||"minute"===n||"seconds"===n||"second"===n?("minutes"===n||"minute"===n)&&r<=5?a(["Not Allowed !",he.a]):("seconds"===n||"second"===n)&&r<=30?a(["Line up and be ready !",ve.a]):("seconds"===n||"second"===n)&&r<=60?a(["Forbidden !",ye.a]):c(!1):c(!1)}},"Dismiss"===t[0]?t[0]:null,"Dismiss"!==t[0]&&r.a.createElement("img",{src:t[1],width:"60",height:"60"})),r.a.createElement(ge.a,{id:s,open:l,anchorEl:n,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(y.a,{className:i.typography},t[0])))},Se={backgroundImage:"url(".concat(de.a,")"),height:"250px",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat",width:"100%",backgroundPosition:"center",padding:"50% 0",fontSize:"2rem",fontWeight:"bold",color:"rgb(3, 155, 229)",backgroundColor:"#fff"},xe=function(e){var t=e.anim;e.setAnim;return r.a.createElement("div",null,t[0]&&r.a.createElement("div",{className:"Prayer-time",style:Se},t[1]," Time"))},ke=Object(u.a)(function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)},typography:{padding:e.spacing(2)}}}),we=function(e){var t=Object(n.useState)(Z("iso")),a=Object(l.a)(t,2),o=a[0],c=a[1],i=W.a.tz.guess(),s=Object(n.useState)({}),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)([null]),g=Object(l.a)(p,2),f=g[0],h=g[1],b=function(){m.prefix&&m.prefix.replace("Left","Time"),M(!1),setTimeout(w,3e4)},y=Object(n.useState)(["Dismiss"]),E=Object(l.a)(y,2),v=E[0],j=E[1],O=r.a.useState(null),S=Object(l.a)(O,2),x=S[0],k=S[1],w=function(t){h([null,f[1]]),d({}),c(Z("iso"));var a=document.querySelector(".timerComp time").innerHTML,n=a.split(" ")[1],r=Object.entries(e.prayers).reduce(function(e,a){var r=parseInt(a[1].split(":")[0]),o=parseInt(n.split(":")[0]);return parseInt(a[1].split(":")[1]),parseInt(n.split(":")[1]),r>=o?e.push(a):o-r<=1&&"init"===t&&e.push(a),e},[]);console.table("now",r),r.length&&(j(["Dismiss"]),M(!0),a=a.replace(n,r[0][1]),d({endDate:a,prefix:"Left for "+r[0][0],cb:b}),h([null,r[0][0]]))};Object(n.useEffect)(function(){w("init")},[]);var z=ke(),C=Object(n.useState)(!0),N=Object(l.a)(C,2),I=N[0],M=N[1];return Object(n.useEffect)(function(){var e=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)");I||(k(null),e&&" time expired"===e.innerText&&h(function(){return[de.a,f[1]]}),setTimeout(function(){M(!0)},6e4))},[I]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{in:I},r.a.createElement("div",{className:"timerComp",style:{margin:"0 10px",position:"static",top:"95px",zIndex:"1"}},i===e.timezone&&r.a.createElement(se.a,{align:"left",className:z.snackbar,message:m.hasOwnProperty("endDate")&&r.a.createElement(le.a,{options:m}),action:r.a.createElement(Oe,{dismissMsg:v,setdismissMsg:j,anchorEl:x,setAnchorEl:k,timerdisplay:I,setTimerdisplay:M}),style:{backgroundColor:"#1976d2",display:I?"flex":"none"}}),r.a.createElement(pe,{dt:o,timezone:e.timezone}))),r.a.createElement(ue.a,{in:!I},r.a.createElement(xe,{anim:f,setAnim:h})))},ze=a(98),Ce=a.n(ze),Ne=a(120),Ie=a.n(Ne),Me=r.a.memo(function(e){return r.a.createElement(Ce.a,{autoLoad:!0,loop:!0,url:Ie.a,playStatus:Ce.a.status.PLAYING,playFromPosition:0,volume:2})}),Ae=Object(P.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=e.timings,a=Object(n.useState)({}),o=Object(l.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)(function(){if(t.hasOwnProperty("Fajr")){var e=Object.keys(t).reduce(function(e,a){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(a)&&(e[a]=t[a]),e},{});i(e)}},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null),r.a.createElement("h4",{style:{marginTop:"40px"}},"Lab (Alpha Releases)"),r.a.createElement("h5",null,"Your TZ : ",W.a.tz.guess()),c.hasOwnProperty("Fajr")&&r.a.createElement(we,{timezone:e.timezone,prayers:c}),e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("h5",null,"Travel Times"),r.a.createElement(ne,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Custom Search"),r.a.createElement(ce,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Mosque Map"),r.a.createElement("div",{style:{width:"100%",height:"90vh"}},r.a.createElement(oe,{lat:e.coords.latitude,lon:e.coords.longitude}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),Be=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),Fe=function(e){var t=e.pdata,a=t.timings,n=t.date;t.meta;console.table(Object.entries(a));var o=Be(),c=r.a.useState(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],m=function(){u(!0)};return a?s?r.a.createElement(Ae,{timings:a,timezone:e.timezone}):r.a.createElement(r.a.Fragment,null,Object.keys(a).map(function(e,t){return r.a.createElement(F.a,{className:o.card,key:t},r.a.createElement(D.a,null,r.a.createElement(y.a,{className:o.title,color:"textSecondary",gutterBottom:!0,style:{fontSize:"17px"}},e,r.a.createElement("span",{onClick:m,className:"arab-month",style:{color:"#fff"}},".")),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},a[e])),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},n.hijri.month.ar)))})):null},De=(a(219),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:A.a[500]},secondary:{color:"#4caf50"}}})),Pe=function(e){var t=e.prdata,a=t.data.timings,o=Object(n.useState)({}),c=Object(l.a)(o,2),i=c[0],s=c[1];Object(n.useEffect)(function(){if(a.hasOwnProperty("Fajr")){var e=Object.keys(a).reduce(function(e,t){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(t)&&(e[t]=a[t]),e},{});s(e)}},[a]);var u=t.data,d=t.code,p=(t.status,De()),g=new Date;("0"+g.getDate()).slice(-2),g.getMonth(),g.getFullYear();return Object(n.useEffect)(function(){u&&Object.keys(u).length}),r.a.createElement("div",{className:"pdnContainer"},i.hasOwnProperty("Fajr")&&r.a.createElement(we,{timezone:e.timezone,prayers:i}),"object"===typeof t&&200===d&&Object.keys(u).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{in:!0},r.a.createElement("div",null,r.a.createElement(Fe,{pdata:u,timezone:e.timezone})))):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},Te=Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}}),We=function(e){var t=e.country,a=e.region,n=e.place,o=e.pdate,c=e.startup,i=$({region:a,country:t,place:n,date:o}),s=Object(l.a)(i,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=Te();return u&&u.data&&u.data.meta&&200===u.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{timezone:d,startup:c,place:localStorage.getItem("padachone:place"),pdate:u.data.date.readable}),r.a.createElement(Pe,{prdata:u,timezone:d}),r.a.createElement(I,{startup:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,u.data||u.error),u.data||u.error?r.a.createElement("p",null,"Please ",r.a.createElement(g.a,{color:"primary",onClick:function(){return c({finished:!1})}},"refresh")," to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},Le=a(133),Ye=a(306),Re=a(59),qe=a(312),Ge=a(302),He=a(311),Je=a(315),Ke=a(309),Ue=a(121),_e=a.n(Ue),Ve=(a(220),Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"},vertical:{color:"#fff"},iconContainer:{fontStyle:"italic"}}}));var Xe=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=Ve(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(l.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,h=m.region,b=(m.seccountry,m.secregion,m.place),E=r.a.useState("rgba(0, 0, 0, 0.54)"),v=Object(l.a)(E,2),j=v[0],S=v[1],x=["Where on earth are you?","Almost there!","Need More Accuracy?"];function k(){0===m.activeStep&&!f||1===m.activeStep&&!h?S("red"):(S("rgba(0, 0, 0, 0.54)"),d(Object(i.a)({},m,{activeStep:m.activeStep+1})))}function w(){S("rgba(0, 0, 0, 0.54)"),d(Object(i.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){f&&d(Object(i.a)({},m,{region:"",place:""}))},[f]),Object(n.useEffect)(function(){d(Object(i.a)({},m,{country:t,region:a}))},[]),Object(n.useEffect)(function(){var t;p===x.length&&(t=Object(i.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?r.a.createElement(Ae,null):r.a.createElement("div",{className:c.root},r.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{backgroundImage:"url(".concat(_e.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right top",backgroundSize:"auto 100%",backgroundColor:"#0c39e3",fontWeight:"bold",fontSize:"4rem",padding:"24px",color:"rgba(255, 255, 255, 0.7)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times ",r.a.createElement("br",null)),r.a.createElement(y.a,{color:"textSecondary",align:"left",variant:"body2",component:"p",style:{padding:"0 24px",fontStyle:"italic",fontSize:"0.9rem",marginTop:"10px"},gutterBottom:!0},"An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day.",r.a.createElement("br",null),' "Worries end when Salah begins"'),r.a.createElement(qe.a,{activeStep:p,orientation:"vertical"},x.map(function(e,t){return r.a.createElement(Ge.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},r.a.createElement(He.a,{align:"left"},r.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),r.a.createElement(Je.a,{align:"left",style:{border:"none"}},0===p&&r.a.createElement(Re.a,{value:f,onChange:function(e){return t=e,void d(Object(i.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",marginBottom:"10px",minHeight:"40px"}}),1===p&&r.a.createElement(Re.b,{country:f,value:h,onChange:function(e){return t=e,void d(Object(i.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",minHeight:"30px",marginBottom:"10px"}}),2===p&&r.a.createElement(Ke.a,{id:"place-name",label:"Place",className:c.textField,value:b,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(i.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem",color:j},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(g.a,{disabled:0===p,onClick:w,className:c.button},"Back"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:k,className:c.button,style:{color:"white"}},p===x.length-1?"Finish":2!==p||b?"Next":"Skip")))))})),p===x.length&&r.a.createElement(O.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(g.a,{onClick:function(){d(Object(i.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},Ze=a(122),$e=a(123),Qe=a(58),et=a(134),tt=a(124),at=a(135),nt=a(47),rt=a(308),ot=function(e){function t(e){var a;return Object($e.a)(this,t),(a=Object(et.a)(this,Object(tt.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(at.a)(t,e),Object(Qe.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),nt.b(function(n){n.setExtras(t);var r=nt.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return rt.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.")):this.props.children}}]),t}(n.Component),ct=a(126),it=a.n(ct),lt=a(127),st=a(4),ut=a(128),mt=a.n(ut),dt=a(130),pt=a.n(dt),gt=a(131),ft=a.n(gt),ht=a(132),bt=a.n(ht),yt=a(305),Et=a(313),vt=a(129),jt=a.n(vt),Ot={success:mt.a,warning:jt.a,error:pt.a,info:ft.a},St=Object(u.a)(function(e){return{info:{},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function xt(e){var t=St(),a=e.className,n=e.message,o=e.onClose,c=e.variant,i=Object(lt.a)(e,["className","message","onClose","variant"]),l=Ot[c];return r.a.createElement(se.a,Object.assign({className:Object(st.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(l,{className:Object(st.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(yt.a,{key:"close","aria-label":"Close",color:"inherit",onClick:o},r.a.createElement(bt.a,{className:t.icon}))]},i))}var kt=Object(u.a)(function(e){return{margin:{margin:e.spacing(1)}}});var wt=function(e){var t=e.msg,a=(kt(),r.a.useState(!0)),n=Object(l.a)(a,2),o=n[0],c=n[1];function i(e,t){"clickaway"!==t&&c(!1)}return r.a.createElement("div",null,r.a.createElement(Et.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:1e4,onClose:i},r.a.createElement(xt,{onClose:i,variant:"info",message:t})))},zt=Object(Le.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var Ct=function(){var e=Object(n.useState)(window.pageYOffset),t=Object(l.a)(e,2),a=t[0],o=t[1],c=function(){var e=window.pageYOffset;a>=e?null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="visible"):null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="hidden"),o(e)};Object(n.useEffect)(function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}},[]);var u=Object(n.useState)({finished:!1,pdtodaysDate:Z().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),m=Object(l.a)(u,2),d=m[0],p=m[1],g=d.finished,f=d.country,h=d.region,b=d.pdtodaysDate,y=(d.prayerdata,d.place),E=function(e){var t=e.country,a=e.region,n=e.finished,r=e.place;p(Object(i.a)({},d,{finished:n,country:t,region:a,place:r}))},v=Object(n.useState)([!1,""]),j=Object(l.a)(v,2),O=j[0],S=j[1];return Object(n.useEffect)(function(){localStorage.removeItem("padachone_msg"),localStorage.getItem("padachone_msg1")||S(function(){return localStorage.setItem("padachone_msg1","admirer@padachone.com"),[!0,"admirer@padachone.com"]}),Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&p(Object(i.a)({},d,{finished:!0}))},[]),r.a.createElement(Ye.a,{theme:zt},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(ot,null,r.a.createElement(it.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),O[0]&&r.a.createElement(wt,{msg:O[1]}),!g&&r.a.createElement(Xe,{setupdata:Ze,finished:function(e){return E(e)},country:f,region:h,place:y}),g&&r.a.createElement(We,{country:f,region:h,pdate:b,place:y,startup:function(e){return E(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));rt.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(Ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a.p+"static/media/Prayer-time.dd3c6541.jpg"}},[[149,1,2]]]);
//# sourceMappingURL=main.1e9f27ae.chunk.js.map