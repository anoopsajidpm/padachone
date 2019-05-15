(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo.a299d8fa.png"},106:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},129:function(e,t,a){e.exports=a(197)},134:function(e,t,a){},135:function(e,t,a){},146:function(e,t,a){},192:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),l=(a(134),a(18)),i=a(12),s=(a(135),a(276)),u=a(198),m=a(271),d=a(75),p=a.n(d),g=a(266),f=a(43),h=a(257),b=a(258),y=a(77),E=a(259),v=a(100),x=a.n(v),S=a(114),O=a(88),j=a.n(O),w=a(101),k=a.n(w),N=(a(146),Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#f5f5f5"),t)}})),C=function(e){var t=e.timezone,a=e.startup,n=e.place,r=e.pdate,c=N(),l=o.a.useState({checkedA:!0}),s=Object(i.a)(l,2),u=(s[0],s[1]);return o.a.createElement("div",{className:{flexGrow:1}},o.a.createElement(h.a,{position:"fixed",color:"primary"},o.a.createElement(b.a,{style:{minHeight:"45px"}},o.a.createElement("img",{src:k.a,width:"150",height:"30",alt:"logo",className:"App-logo",style:{marginLeft:"-48px"}}),o.a.createElement("div",{className:c.grow}),o.a.createElement(j.a,{fontSize:"large",className:"settings",onClick:function(){u(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),a({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})}})),o.a.createElement(S.a,{className:c.root},o.a.createElement(E.a,{direction:"up",in:"true",mountOnEnter:!0,unmountOnExit:!0},o.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between"}},o.a.createElement("span",null,t),o.a.createElement("span",{style:{fontWeight:"bold"}},r))),o.a.createElement(E.a,{direction:"down",in:"true",mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},o.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal"}},o.a.createElement("strong",null,n?"'".concat(n,"'"):""),o.a.createElement("span",{style:{padding:"0 0 0 3px"}},o.a.createElement(x.a,{format:"HH:mm:ss",ticking:!0,timezone:t})))))))},I=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#f5f5f5"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),B=function(e){e.startup;var t=I();return o.a.createElement(h.a,{position:"fixed",color:"primary",className:t.appBar},o.a.createElement("div",{className:t.grow}),o.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontWeight:"bold",color:"rgba(0, 0, 0, 0.54)"},align:"center"},"Copyright \xa9 2019 WISMIM."))},A=a(89),z=a.n(A),W=a(270),F=a(268),M=a(269),D=(a(153),a(103)),R=a(267),J=a(283),P=a(91),G=a.n(P),T=a(92),L=a.n(T),Y=a(104),H=a.n(Y),q=a(105),U=a(58),K=a.n(U),$=a(90),Z=function(){var e=new Date,t=("0"+e.getDate()).slice(-2),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n)},Q=function(e){var t=e.country,a=void 0===t?"Netherlands":t,o=e.place,r=e.region,c=void 0===r?"Noord-Holland":r,l=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(o||c,"&country=").concat(a,"&method=8"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object($.a)(K.a.mark(function e(){var t,n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),o&&localStorage.setItem("padachone:place",o),localStorage.setItem("padachone:".concat(l),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(l))?p(JSON.parse(localStorage.getItem("padachone:".concat(l)))):function(){g.apply(this,arguments)}()},[]),[d,p]},V=function(e){var t=e.lat,a=e.lon,o=Z(),r=new Date,c=r.getMonth()+1,l=r.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=2&month=").concat(c,"&year=").concat(l),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object($.a)(K.a.mark(function e(){var t,a,n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===o}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]};a(280),a(260),a(265),a(261),a(263),a(264),a(59),a(60),Object(u.a)({list:{width:250},fullList:{width:"auto"}});var X=Object(q.autoPlay)(H.a),_=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],ee=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),te=function(e){var t=e.lat,a=e.lon,n=V({lat:t,lon:a}),r=Object(i.a)(n,2),c=r[0];r[1];console.log("CURR",c);var l=ee(),s=Object(R.a)(),u=o.a.useState(0),m=Object(i.a)(u,2),d=m[0],p=m[1],f=_.length;return c.length&&c[0].timings?o.a.createElement("div",{className:l.root},o.a.createElement(S.a,{square:!0,elevation:0,className:l.header}),o.a.createElement(X,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},_.map(function(e,t){return o.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){return o.a.createElement(F.a,{className:l.card,key:t},o.a.createElement(M.a,null,o.a.createElement(y.a,{className:l.title,color:"textSecondary",gutterBottom:!0},e),o.a.createElement(y.a,{variant:"h3",component:"h2"},o.a.createElement("strong",{style:{color:"#039be5"}},c[0].timings[e])),o.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},"Ramdan")))}):null)})),o.a.createElement(J.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:o.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?o.a.createElement(G.a,null):o.a.createElement(L.a,null)),backButton:o.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?o.a.createElement(L.a,null):o.a.createElement(G.a,null),"Back")})):o.a.createElement("h5",null,"Loading...")},ae=Object(D.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),r=a[0];a[1],r.country,r.region;return o.a.createElement(o.a.Fragment,null,e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?o.a.createElement("div",null,o.a.createElement(te,{lat:e.coords.latitude,lon:e.coords.longitude})):o.a.createElement("div",null,"Getting the location data\u2026 "):o.a.createElement("div",{style:{marginTop:"150px"}},o.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):o.a.createElement("div",null,"Your browser does not support Geolocation"))}),ne=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),oe=function(e){var t=e.pdata,a=t.timings,n=t.date,r=(t.meta,ne()),c=o.a.useState(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){u(!0)};return a?s?o.a.createElement(ae,null):Object.keys(a).map(function(e,t){return o.a.createElement(F.a,{className:r.card,key:t},o.a.createElement(M.a,null,o.a.createElement(y.a,{className:r.title,color:"textSecondary",gutterBottom:!0},e),o.a.createElement(y.a,{variant:"h3",component:"h2"},o.a.createElement("strong",{style:{color:"#039be5"}},a[e])),o.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o.a.createElement("span",{onClick:m,className:"arab-month"},n.hijri.month.ar))))}):null},re=(a(192),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:z.a[500]},secondary:{color:"#4caf50"}}})),ce=function(e){var t=e.prdata,a=t.data,r=t.code;t.status;console.log(t);var c=re(),l=new Date,i=("0"+l.getDate()).slice(-2),s=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],u=l.getFullYear();return console.log("".concat(i," ").concat(s," ").concat(u)),Object(n.useEffect)(function(){a&&Object.keys(a).length}),o.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===r&&Object.keys(a).length?o.a.createElement(o.a.Fragment,null,o.a.createElement(W.a,{in:"true"},o.a.createElement("div",null,o.a.createElement(oe,{pdata:a})))):o.a.createElement(m.a,{className:c.progress,color:"secondary"}))},le=(a(193),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),ie=function(e){var t=e.country,a=e.region,n=e.place,r=e.pdate,c=e.startup,l=Q({region:a,country:t,place:n,date:r}),s=Object(i.a)(l,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=le();return u&&u.data&&u.data.meta&&200===u.code?o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{timezone:d,startup:c,place:localStorage.getItem("padachone:place"),pdate:u.data.date.readable}),o.a.createElement(ce,{prdata:u}),o.a.createElement(B,{startup:c})):o.a.createElement(o.a.Fragment,null,o.a.createElement("h5",null,u.data||u.error),u.data||u.error?o.a.createElement("p",null,"Please ",o.a.createElement(g.a,{color:"primary",onClick:function(){return c({finished:!1})}},"refresh")," to start over!"):o.a.createElement(m.a,{className:p.progress,color:"secondary"}))},se=a(111),ue=a(275),me=a(53),de=a(282),pe=a(272),ge=a(281),fe=a(284),he=a(278),be=Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"}}});var ye=function(e){e.setupdata;var t=e.country,a=e.region,r=e.place,c=be(),s=o.a.useState({activeStep:0,place:r,country:t,region:a}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,h=m.region,b=(m.seccountry,m.secregion,m.place),E=["Where on earth are you ?","Almost there!","Need More Accuracy?","Are you a traveller? (Coming Soon!)"];function v(){d(Object(l.a)({},m,{activeStep:m.activeStep+1}))}function x(){d(Object(l.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){var t;p===E.length&&(t=Object(l.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?o.a.createElement(ae,null):o.a.createElement("div",{className:c.root},o.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{fontWeight:"bold",fontSize:"5rem",padding:"24px",background:"#fff",color:"rgb(3, 155, 229)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times"),o.a.createElement(de.a,{activeStep:p,orientation:"vertical"},E.map(function(e,t){return o.a.createElement(pe.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},o.a.createElement(ge.a,{classes:c.label,align:"left"},o.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),o.a.createElement(fe.a,{align:"left",style:{}},0===p&&o.a.createElement(me.a,{value:f,onChange:function(e){return t=e,void d(Object(l.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",borderRadius:"5px",marginBottom:"10px"}}),1===p&&o.a.createElement(me.b,{country:f,value:h,onChange:function(e){return t=e,void d(Object(l.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",borderRadius:"5px",marginBottom:"10px"}}),2===p&&o.a.createElement(he.a,{id:"place-name",label:"Place",className:c.textField,value:b,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(l.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),o.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem"},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance to appear on top of the screen";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";case 3:return"Wanna know your Ifthar/Prayer time while moving ? Coming Soon!";default:return"Unknown step"}}(t)),o.a.createElement("div",{className:c.actionsContainer},o.a.createElement("div",null,o.a.createElement(g.a,{disabled:0===p,onClick:x,className:c.button},"Back"),o.a.createElement(g.a,{variant:"contained",color:"primary",onClick:v,className:c.button,style:{color:"white"}},p===E.length-1?"Finish":2!==p||b?"Next":"Skip")))))})),p===E.length&&o.a.createElement(S.a,{square:!0,elevation:0,className:c.resetContainer},o.a.createElement(y.a,null,"All steps completed - you're finished"),o.a.createElement(g.a,{onClick:function(){d(Object(l.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},Ee=a(106),ve=a(107),xe=a(52),Se=a(113),Oe=a(108),je=a(112),we=a(42),ke=a(277),Ne=function(e){function t(e){var a;return Object(ve.a)(this,t),(a=Object(Se.a)(this,Object(Oe.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(je.a)(t,e),Object(xe.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),we.b(function(n){n.setExtras(t);var o=we.a(e);a.setState({eventId:o})})}},{key:"render",value:function(){var e=this;return this.state.error?o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{onClick:function(){return ke.b({eventId:e.state.eventId})}},"Report feedback"),o.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),o.a.createElement("p",null,"Our team has been notified, but click here fill out a report.")):this.props.children}}]),t}(n.Component),Ce=a(110),Ie=a.n(Ce),Be=Object(se.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var Ae=function(){var e=Object(n.useState)({finished:!1,pdtodaysDate:Z().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=a.finished,u=a.country,m=a.region,d=a.pdtodaysDate,p=(a.prayerdata,a.place),g=function(e){var t=e.country,n=e.region,o=e.finished,c=e.place;r(Object(l.a)({},a,{finished:o,country:t,region:n,place:c}))};return Object(n.useEffect)(function(){Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&r(Object(l.a)({},a,{finished:!0}))},[]),o.a.createElement(ue.a,{theme:Be},o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null),o.a.createElement(Ne,null,o.a.createElement(Ie.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),!c&&o.a.createElement(ye,{setupdata:Ee,finished:function(e){return g(e)},country:u,region:m,place:p}),c&&o.a.createElement(ie,{country:u,region:m,pdate:d,place:p,startup:function(e){return g(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));ke.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(o.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,1,2]]]);
//# sourceMappingURL=main.9ceb311a.chunk.js.map