(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},133:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(103),a(16)),i=a(14),s=(a(104),a(208)),u=(a(105),a(139)),m=a(202),d=a(62),p=a.n(d),g=(a(53),a(194)),h=a(195),f=a(197),y=a(196),b=a(74),E=a.n(b),v=a(75),S=a.n(v),j=Object(u.a)({grow:{flexGrow:1}}),O=function(e){var t=e.timezone,a=(e.startup,e.place),n=j(),o=r.a.useState({checkedA:!0}),c=Object(i.a)(o,2);c[0],c[1];return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(g.a,{position:"fixed",color:"primary"},r.a.createElement(h.a,null,r.a.createElement("img",{src:S.a,width:"150",height:"30",alt:"logo",className:"App-logo",style:{marginLeft:"-38px"}}),r.a.createElement("div",{className:n.grow}),r.a.createElement("span",{style:{color:"#fff",padding:"0 0 0 3px"}},r.a.createElement(E.a,{format:"HH:mm:ss",ticking:!0,timezone:t}))),r.a.createElement(y.a,{direction:"up",in:"true",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(f.a,{variant:"caption",color:"textSecondary",style:{color:"white",fontStyle:"italic"}},r.a.createElement("strong",null,a)," ( ",t,"  )"))))},w=a(198),x=a(77),k=a.n(x),N=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),I=function(e){var t=e.startup,a=N();return r.a.createElement(g.a,{position:"fixed",color:"primary",className:a.appBar},r.a.createElement(w.a,{color:"secondary","aria-label":"Add",className:a.fabButton},r.a.createElement(k.a,{fontSize:"large",onClick:function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),t({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})}})),r.a.createElement("div",{className:a.grow}),r.a.createElement(f.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px"},align:"right"},"Copyright \xa9 2019 WISMIM."))},C=a(66),A=a.n(C),B=a(201),z=a(199),F=a(200),W=(a(130),a(78)),M=a(47),D=a.n(M),J=a(67),G=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,l=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(J.a)(D.a.mark(function e(){var t,n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(localStorage.setItem("padachone:region",c),localStorage.setItem("padachone:country",a),localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(l),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(l))?p(JSON.parse(localStorage.getItem("padachone:".concat(l)))):function(){g.apply(this,arguments)}()},[]),[d,p]},P=function(e){var t=e.lat,a=e.lon,r="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=2&month=5&year=2019"),o=Object(n.useState)({}),c=Object(i.a)(o,2),l=c[0],s=c[1];function u(){return(u=Object(J.a)(D.a.mark(function e(){var t,a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),s({error:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){u.apply(this,arguments)}()},[]),[l,s]},R=function(e){var t=e.lat,a=e.lon,n=P({lat:t,lon:a}),o=Object(i.a)(n,2),c=o[0];o[1];return c&&c.data?r.a.createElement("div",null,c.data[0].timings.Maghrib):r.a.createElement("h5",null,"Loading...")},T=Object(W.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0];a[1],o.country,o.region;return r.a.createElement(r.a.Fragment,null,e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"latitude"),r.a.createElement("td",null,e.coords.latitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"longitude"),r.a.createElement("td",null,e.coords.longitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"altitude"),r.a.createElement("td",null,e.coords.altitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"heading"),r.a.createElement("td",null,e.coords.heading)),r.a.createElement("tr",null,r.a.createElement("td",null,"speed"),r.a.createElement("td",null,e.coords.speed)))),r.a.createElement(R,{lat:e.coords.latitude,lon:e.coords.longitude})):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"150px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),Y=Object(u.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),H=function(e){var t=e.pdata,a=t.timings,n=t.date,o=(t.meta,Y()),c=r.a.useState(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){u(!0)};return a?s?r.a.createElement(T,null):Object.keys(a).map(function(e,t){return r.a.createElement(z.a,{className:o.card,key:t},r.a.createElement(F.a,null,r.a.createElement(f.a,{className:o.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(f.a,{variant:"h3",component:"h2"},a[e]),r.a.createElement(f.a,{className:o.pos,color:"textSecondary"},n.readable,r.a.createElement("span",{onClick:m},".")),r.a.createElement(f.a,{variant:"body2",component:"p"},n.hijri.month.ar,r.a.createElement("br",null),'"'.concat(n.hijri.weekday.en,'"'))))}):null},L=(a(133),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:A.a[500]},secondary:{color:"#4caf50"}}})),K=function(e){var t=e.prdata,a=t.data,o=t.code;t.status;console.log(t);var c=L(),l=new Date,i=("0"+l.getDate()).slice(-2),s=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],u=l.getFullYear();return console.log("".concat(i," ").concat(s," ").concat(u)),Object(n.useEffect)(function(){a&&Object.keys(a).length}),r.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===o&&Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{in:"true"},r.a.createElement("div",null,r.a.createElement(H,{pdata:a})))):r.a.createElement(m.a,{className:c.progress,color:"secondary"}))},$=(a(134),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),q=function(e){var t=e.country,a=e.region,n=e.place,o=e.pdate,c=e.startup,l=G({region:a,country:t,place:n,date:o}),s=Object(i.a)(l,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=$();return u&&u.data&&u.data.meta&&200===u.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{timezone:d,startup:c,place:localStorage.getItem("padachone:place")}),r.a.createElement(K,{prdata:u}),r.a.createElement(I,{startup:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,u.data||u.error),u.data||u.error?r.a.createElement("p",null,"Please refresh to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},U=a(85),Z=a(207),Q=a(44),V=a(213),X=a(203),_=a(211),ee=a(212),te=a(204),ae=a(89),ne=a(209),re=Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"}}});var oe=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=re(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=m.activeStep,g=m.country,h=m.region,y=(m.seccountry,m.secregion,m.place),b=["Where on earth are you ?","Almost there!","Need More Accuracy?","Are you a traveller? - Coming Soon!"];function E(){d(Object(l.a)({},m,{activeStep:m.activeStep+1}))}function v(){d(Object(l.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){var t;p===b.length&&(t=Object(l.a)({},m,{finished:!0}),d(function(){return e.finished(t),t}))}),r.a.createElement("div",{className:c.root},r.a.createElement(f.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{fontWeight:"bold",fontSize:"5rem",padding:"24px"},gutterBottom:!0},"Know Your Prayer times"),r.a.createElement(V.a,{activeStep:p,orientation:"vertical"},b.map(function(e,t){return r.a.createElement(X.a,{key:e,style:{color:"white"}},r.a.createElement(_.a,{classes:c.label,align:"left"},r.a.createElement("span",{style:{fontSize:"1.5rem"}},e)),r.a.createElement(ee.a,{align:"left"},0===p&&r.a.createElement(Q.a,{value:g,onChange:function(e){return t=e,void d(Object(l.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",borderRadius:"5px",marginBottom:"10px"}}),1===p&&r.a.createElement(Q.b,{country:g,value:h,onChange:function(e){return t=e,void d(Object(l.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",borderRadius:"5px",marginBottom:"10px"}}),2===p&&r.a.createElement(ne.a,{id:"place-name",label:"Place",className:c.textField,value:y,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(l.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(f.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem"},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance to appear on top of the screen";case 1:return"You can always re-configure these settings on click of a button appearing next to timezone display";case 2:return"Key in your Place name for more accurate results.";case 3:return"Wanna know your Ifthar/Prayer time while moving ? Coming Soon!";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(te.a,{disabled:0===p,onClick:v,className:c.button},"Back"),r.a.createElement(te.a,{variant:"contained",color:"primary",onClick:E,className:c.button,style:{color:"white"}},p===b.length-1?"Finish":2!==p||y?"Next":"Skip")))))})),p===b.length&&r.a.createElement(ae.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(f.a,null,"All steps completed - you're finished"),r.a.createElement(te.a,{onClick:function(){d(Object(l.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},ce=a(80),le=function(){var e=new Date,t=("0"+e.getDate()).slice(-2),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n)},ie=a(81),se=a(43),ue=a(86),me=a(82),de=a(87),pe=a(35),ge=a(210),he=function(e){function t(e){var a;return Object(ie.a)(this,t),(a=Object(ue.a)(this,Object(me.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(de.a)(t,e),Object(se.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),pe.b(function(n){n.setExtras(t);var r=pe.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return ge.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but click here fill out a report.")):this.props.children}}]),t}(n.Component),fe=a(84),ye=a.n(fe),be=Object(U.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var Ee=function(){var e=Object(n.useState)({finished:!1,pdtodaysDate:le().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),t=Object(i.a)(e,2),a=t[0],o=t[1],c=a.finished,u=a.country,m=a.region,d=a.pdtodaysDate,p=(a.prayerdata,a.place),g=function(e){var t=e.country,n=e.region,r=e.finished,c=e.place;o(Object(l.a)({},a,{finished:r,country:t,region:n,place:c}))};return Object(n.useEffect)(function(){Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&o(Object(l.a)({},a,{finished:!0}))},[]),r.a.createElement(Z.a,{theme:be},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(he,null,r.a.createElement(ye.a,{location:"bottom",style:{background:"#4caf50",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),!c&&r.a.createElement(oe,{setupdata:ce,finished:function(e){return g(e)},country:u,region:m,place:p}),c&&r.a.createElement(q,{country:u,region:m,pdate:d,place:p,startup:function(e){return g(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));ge.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a.p+"static/media/logo.a299d8fa.png"},80:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},98:function(e,t,a){e.exports=a(138)}},[[98,1,2]]]);
//# sourceMappingURL=main.b06a819a.chunk.js.map