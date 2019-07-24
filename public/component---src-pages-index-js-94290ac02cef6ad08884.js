(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(366),r=(a(59),a(293),a(7).default.enqueue,i.a.createContext({}));function l(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,r=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,r&&o(r),!r&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return i.a.createElement(r.Consumer,null,function(e){return i.a.createElement(l,{data:t,query:a,render:n||o,staticQueryData:e})})};var m=a(368),p=a.n(m),c=a(199),d=(a(374),a(375),c.a.div.withConfig({displayName:"layout__Content",componentId:"ksijt7-0"})(["display:grid;grid-template-columns:1fr;justify-content:center;"])),h=function(e){var t=e.children;return i.a.createElement(s,{query:"3470870683",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:"Nicky Evers Design",meta:[{name:"Nicky Evers Design",content:"Nicky Evers Design"},{name:"keywords",content:"Nicky Evers Design"},{name:"description",content:"Nicky Evers Design, professional DJ and musician."},{name:"og:url",content:"https://nickyevers.com/"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:"https://nickyevers.com/"},{name:"twitter:title",content:"Nicky Evers Design"},{name:"twitter:description",content:"Nicky Evers Design, Web Developer | Designer"}]}),i.a.createElement(d,null,t))},data:o})},g=a(383),u=a.n(g),f=a(243),x=a.n(f),y=a(392),w=a.n(y),v=c.a.div.withConfig({displayName:"Landingstyle__Wrapper",componentId:"sc-12dhyep-0"})(["color:white;"]),b=c.a.div.withConfig({displayName:"Landingstyle__Background",componentId:"sc-12dhyep-1"})(["background:linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,0) 60%,rgba(255,255,255,.5) 80%,rgba(255,255,255,1) 100%),url(",");background-size:cover;background-repeat:no-repeat;background-position:center center;"],"https://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,dpr_auto,f_auto,q_auto:eco,w_1412/v1519770562/Portfolio/aerial-forest-hero-img.jpg"),z=c.a.div.withConfig({displayName:"Landingstyle__Header",componentId:"sc-12dhyep-2"})(["height:87vh;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:'Raleway',sans-serif;text-shadow:3px 3px 14px black;font-size:6.5vw;"]),_=c.a.h1.withConfig({displayName:"Landingstyle__Title",componentId:"sc-12dhyep-3"})(["margin:30px;font-size:1.8em;font-weight:400;@media(min-width:768px){font-size:.7em;}"]),E=c.a.h2.withConfig({displayName:"Landingstyle__SubTitle",componentId:"sc-12dhyep-4"})(["font-size:.9em;font-weight:300;@media(min-width:768px){font-size:.38em;}"]),k=Object(c.b)(["0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-30px);}60%{transform:translateY(-15px);}"]),C=c.a.a.withConfig({displayName:"Landingstyle__ArrowWrapper",componentId:"sc-12dhyep-5"})(["display:flex;justify-content:center;align-items:center;max-height:100px;animation:"," 2s;animation-delay:400ms;animation-iteration-count:2;"],k);function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var I=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleWindowSizeChange=function(){a.setState({width:window.innerWidth}),a.state.width>=768&&a.setState({isMobile:!1})},a.state={color:"hsla(187, 55%, 50%, 1)",size:"100px",width:window.innerWidth,isMobile:!0},a.hoverToggle=a.hoverToggle.bind(H(a)),a.handleWindowSizeChange=a.handleWindowSizeChange.bind(H(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentWillMount=function(){this.state.width>=768&&this.setState({isMobile:!1})},o.componentDidMount=function(){window.addEventListener("resize",this.handleWindowSizeChange);var e=new f.Controller;new f.Scene({triggerElement:this.Wrapper,triggerHook:0}).setPin(this.Background,{pushFollowers:!1}).addTo(e)},o.hoverToggle=function(){"hsla(187, 55%, 50%, 1)"===this.state.color?this.setState({color:"hsla(187, 70%, 35%, 1)"}):this.setState({color:"hsla(187, 55%, 50%, 1)"}),"100px"===this.state.size?this.setState({size:"110px"}):this.setState({size:"100px"})},o.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowSizeChange)},o.render=function(){var e=this;return i.a.createElement(v,{ref:function(t){e.Wrapper=t}},i.a.createElement(u.a,{transitionName:"fadein",transitionAppear:!0,transitionAppearTimeout:1200,transitionEnter:!1,transitionLeave:!1},i.a.createElement(b,{className:"background",ref:function(t){e.Background=t},key:"background"},i.a.createElement(z,null,i.a.createElement(u.a,{transitionName:"fadedown-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnter:!1,transitionLeave:!1},i.a.createElement(E,{key:"subtitle"},"Web Developer | Designer")),i.a.createElement(u.a,{transitionName:"fadeup-in",transitionAppear:!0,transitionAppearTimeout:1500,transitionEnter:!1,transitionLeave:!1},i.a.createElement(_,{key:"title"},"Nicky Evers"))),i.a.createElement(C,{className:"about-arrow",href:"#about"},i.a.createElement(w.a,{onMouseEnter:this.hoverToggle,onMouseLeave:this.hoverToggle,style:{color:this.state.color,width:this.state.size,height:this.state.size}})))))},n}(n.Component),N=c.a.h2.withConfig({displayName:"Utilitiesstyle__H2",componentId:"nmrhtw-0"})(["font-size:1.3em;font-weight:700;color:hsla(187,5%,33%,1);@media(min-width:768px){font-size:1.15em;}"]),j=c.a.h3.withConfig({displayName:"Utilitiesstyle__H3",componentId:"nmrhtw-1"})(["font-size:1.2em;font-weight:300;color:hsla(187,5%,33%,1);@media(min-width:768px){font-size:1.05em;}"]),S=c.a.p.withConfig({displayName:"Utilitiesstyle__P",componentId:"nmrhtw-2"})(["font-size:1.1em;font-weight:400;color:hsla(187,5%,33%,1);@media(min-width:768px){font-size:.85em;}"]),M=c.a.div.withConfig({displayName:"Aboutstyle__Wrapper",componentId:"qbizik-0"})(["font-family:'Raleway',sans-serif;display:flex;flex-direction:column;justify-content:center;color:hsla(187,5%,33%,1);margin:8% 6%;@media(min-width:768px){min-height:650px;margin:10% 13%;}"]),L=c.a.div.withConfig({displayName:"Aboutstyle__HeaderWrapper",componentId:"qbizik-1"})(["margin-bottom:30px;@media(min-width:768px){margin-bottom:54px;}"]),P=Object(c.a)(N).withConfig({displayName:"Aboutstyle__Header",componentId:"qbizik-2"})(["text-align:center;margin-top:75px;@media(min-width:768px){margin-top:150px;}"]),V=Object(c.a)(j).withConfig({displayName:"Aboutstyle__SubHeader",componentId:"qbizik-3"})(["text-align:center;"]),T=c.a.div.withConfig({displayName:"Aboutstyle__Content",componentId:"qbizik-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;@media(min-width:768px){flex-direction:row;}"]),W=c.a.div.withConfig({displayName:"Aboutstyle__ImgWrapper",componentId:"qbizik-5"})(["max-width:350px;min-width:150px;@media(min-width:768px){max-width:550px;min-width:275px;}"]),q=c.a.div.withConfig({displayName:"Aboutstyle__CopyWrapper",componentId:"qbizik-6"})(["margin:0px 5px 50px 5px;@media(min-width:768px){margin:0px 20px;}"]),A=Object(c.a)(S).withConfig({displayName:"Aboutstyle__SubCopy",componentId:"qbizik-7"})(["margin:1em 0 1em 0;@media(min-width:768px){margin:0em 0 1em 0;}"]),D=c.a.div.withConfig({displayName:"Aboutstyle__Social",componentId:"qbizik-8"})(["display:flex;justify-content:center;@media(min-width:768px){justify-content:flex-start;}"]),R=c.a.a.withConfig({displayName:"Aboutstyle__SocialIcon",componentId:"qbizik-9"})(["display:flex;justify-content:center;align-items:center;min-width:50px;margin:2px;"]),J=a(242);function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={email:"hsla(0, 0%, 37%, 1)",emailSize:50,github:"hsla(0, 0%, 37%, 1)",githubSize:50,linkedIn:"hsla(0, 0%, 37%, 1)",linkedInSize:50},a.toggleEmailHover=a.toggleEmailHover.bind(O(a)),a.toggleGithubHover=a.toggleGithubHover.bind(O(a)),a.toggleLinkedInHover=a.toggleLinkedInHover.bind(O(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=new f.Controller;[this.Header,this.Content].forEach(function(t){new f.Scene({triggerElement:t,triggerHook:.9,reverse:!1}).setClassToggle(t,"fade-title-in").addTo(e)})},o.toggleEmailHover=function(){"hsla(0, 0%, 37%, 1)"===this.state.email?this.setState({email:"hsla(187, 55%, 50%, 1)"}):this.setState({email:"hsla(0, 0%, 37%, 1)"}),50===this.state.emailSize?this.setState({emailSize:45}):this.setState({emailSize:50})},o.toggleGithubHover=function(){"hsla(0, 0%, 37%, 1)"===this.state.github?this.setState({github:"hsla(187, 55%, 50%, 1)"}):this.setState({github:"hsla(0, 0%, 37%, 1)"}),50===this.state.githubSize?this.setState({githubSize:45}):this.setState({githubSize:50})},o.toggleLinkedInHover=function(){"hsla(0, 0%, 37%, 1)"===this.state.linkedIn?this.setState({linkedIn:"hsla(187, 55%, 50%, 1)"}):this.setState({linkedIn:"hsla(0, 0%, 37%, 1)"}),50===this.state.linkedInSize?this.setState({linkedInSize:45}):this.setState({linkedInSize:50})},o.render=function(){var e=this;return i.a.createElement(M,{id:"about"},i.a.createElement(L,{ref:function(t){e.Header=t},className:"header-title"},i.a.createElement(P,null,"Hi, I'm Nicky."),i.a.createElement(V,null,"I'm a design driven Web Developer and Designer and I'm here to help.")),i.a.createElement(T,{ref:function(t){e.Content=t},className:"content-comp"},i.a.createElement(W,null,i.a.createElement("img",{style:{width:"100%",boxShadow:"0 0 5px 0 rgba(0,0,0,.5)"},src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,w_1221/v1526599568/6-8.jpg",alt:""})),i.a.createElement(q,null,i.a.createElement(A,null,"My passion for learning combined with my love for elegance is a tremendous driving force in everything I do, from designing the perfect landing page, to writing code, to juggling or sourcing tea from Taiwan."),i.a.createElement(A,null,"I care about creating clean, effective websites and designs for people and businesses. I love the feeling of helping clients transform their ideas into a home on the web that is easy to use and inspiring. I'm currently working as a freelancer in beautiful Portland, Oregon."),i.a.createElement(D,null,i.a.createElement(R,{href:"mailto:livelyevers@gmail.com",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(J.a,{color:this.state.email,size:this.state.emailSize,onMouseEnter:this.toggleEmailHover,onMouseLeave:this.toggleEmailHover,style:{transition:".3s ease"}})),i.a.createElement(R,{href:"https://github.com/NeversSync",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(J.b,{color:this.state.github,size:this.state.githubSize,onMouseEnter:this.toggleGithubHover,onMouseLeave:this.toggleGithubHover,style:{transition:".3s ease"}})),i.a.createElement(R,{href:"https://www.linkedin.com/in/nicky-evers/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(J.c,{color:this.state.linkedIn,size:this.state.linkedInSize,onMouseEnter:this.toggleLinkedInHover,onMouseLeave:this.toggleLinkedInHover,style:{transition:".3s ease"}}))))))},n}(n.Component),G=c.a.div.withConfig({displayName:"Projectsstyle__Wrapper",componentId:"sc-167tua7-0"})(["font-family:'Raleway',sans-serif;display:grid;grid-template-columns:repeat(auto-fill,minmax(600px,600px));grid-template-rows:350px 350px;justify-content:center;justify-items:center;grid-gap:1em;margin:2% 4%;color:hsla(187,5%,33%,1);align-items:center;@media(min-width:960px){margin:.5% 0;}"]),B=c.a.div.withConfig({displayName:"Projectsstyle__Title",componentId:"sc-167tua7-1"})(["display:flex;justify-content:center;align-items:center;height:140px;font-size:2.2em;color:white;background-color:hsla(187,65%,40%,.75);@media(min-width:768px){font-size:2em;}"]),U=c.a.div.withConfig({displayName:"Projectsstyle__ProjectSection",componentId:"sc-167tua7-2"})(["display:flex;justify-content:center;align-items:center;height:60px;font-size:2.2em;color:hsla(187,5%,33%,1);margin:50px 0px 0px 0px;@media(min-width:768px){font-size:2em;}"]),Y=c.a.div.withConfig({displayName:"Projectsstyle__Project",componentId:"sc-167tua7-3"})(["display:grid;height:auto;padding:15px;padding-top:5px;max-width:400px;transition:background-color 0.5s cubic-bezier(.25,.8,.25,1),box-shadow 0.5s cubic-bezier(.25,.8,.25,1),opacity 2000ms ease-out,transform 2000ms ease-out;opacity:0;transform:translateY(40px);@media(min-width:960px){&:hover{background-color:hsla(187,90%,40%,.25);cursor:pointer;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}}&:active{-webkit-transform:translate(0px,3px);transform:translate(0px,3px);box-shadow:none;}"]),Q=Object(c.a)(j).withConfig({displayName:"Projectsstyle__Header",componentId:"sc-167tua7-4"})(["color:hsl(187,40%,2%);text-align:center;font-weight:600;margin:2px;color:hsla(187,5%,33%,1);"]),X=c.a.h3.withConfig({displayName:"Projectsstyle__SubHeader",componentId:"sc-167tua7-5"})(["color:hsla(187,5%,33%,1);text-align:center;font-size:.85em;font-weight:300;line-height:1.6em;margin:2px 0 15px 0;@media(min-width:768px){font-size:.75em;}"]),Z=c.a.img.withConfig({displayName:"Projectsstyle__Img",componentId:"sc-167tua7-6"})(["width:100%;height:100%;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]);var K=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=new x.a.Controller;[this.GongFuProject,this.TableauProject,this.PascaleProject,this.EnterpriseProject,this.LangmoreFeesProject,this.ProplogicProject,this.DoodleProject,this.JoeMyGoodnessProject].forEach(function(t){new x.a.Scene({triggerElement:t,triggerHook:.9,reverse:!1}).setClassToggle(t,"fade-project-in").addTo(e)})},o.render=function(){var e=this;return i.a.createElement("div",{style:{marginBottom:"40px"}},i.a.createElement(B,null,"Projects"),i.a.createElement(U,null,"ReactJS Projects"),i.a.createElement(G,null,i.a.createElement(Y,{ref:function(t){e.PascaleProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://www.pascalevermont.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"Pascale Vermont"),i.a.createElement(X,null,"ReactJS, GatsbyJS,",i.a.createElement("br",null),"Mobile-first, Styled Components"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/f_auto,q_auto:best/v1539649113/Portfolio/pascale-vermont-site-screenshot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.TableauProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://the-tableau-app.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"Tableau"),i.a.createElement(X,null,"ReactJS/Redux, NodeJS, ExpressJS, AWS S3, MongoDB, Mongoose, Heroku, Mlab"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/dpr_auto,f_auto,q_auto:good/v1519772075/Portfolio/tableau-screen-shot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.JoeMyGoodnessProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://djjoemygoodness.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"DJ Joe My Goodness"),i.a.createElement(X,null,"ReactJS, GatsbyJS, ",i.a.createElement("br",null),"Styled Components, Mobile-first"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--bTHG76If--/f_auto,q_jpegmini/v1562789893/Portfolio/joemygoodness.com-screenshot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.GongFuProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://gongfucha.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"Gong Fu Tea"),i.a.createElement(X,null,"Mobile-first, NodeJS, ExpressJS, Google Maps API, PostgreSQL, MongoDB, Mongoose, TDD, Jquery, Heroku"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--OqiFZzIy--/dpr_auto,f_auto,q_jpegmini/v1519772080/Portfolio/gong-fu-tea-screenshot.png",alt:""})))),i.a.createElement(U,null,"Wordpress Sites"),i.a.createElement(G,null,i.a.createElement(Y,{ref:function(t){e.EnterpriseProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://enterpriseforyouth.org/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"Enterprise For Youth"),i.a.createElement(X,null,"Mobile-first, Wordpress"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--CmYI1J_B--/f_auto,q_jpegmini/v1549568086/Portfolio/enterprise-screenshot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.LangmoreFeesProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://langmorefees.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"LangmoreFEES"),i.a.createElement(X,null,"Mobile-first, Wordpress"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--O-SfcUf7--/f_auto,q_jpegmini/v1562789892/Portfolio/langmorefees.com-screenshot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.DoodleProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://www.doodlegrip.com/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"DoodleGrip®"),i.a.createElement(X,null,"Mobile-first, Wordpress"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--6Yx3USEt--/f_auto,q_jpegmini/v1549568085/Portfolio/doodlegrip-screenshot.png",alt:""}))),i.a.createElement(Y,{ref:function(t){e.ProplogicProject=t},className:"project-comp"},i.a.createElement("a",{href:"https://proplogic.studio/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(Q,null,"Prop Logic Studio"),i.a.createElement(X,null,"Mobile-first, Wordpress"),i.a.createElement(Z,{src:"https://res.cloudinary.com/nicky-cloudinary/image/upload/s--XeJPGpiG--/f_auto,q_jpegmini/v1534317155/PROP-LOGIC/Screen_Shot_2018-08-15_at_12.08.46_AM.png",alt:""})))))},n}(n.Component),$=a(588),ee=a.n($),te=a(589),ae=a.n(te),ne=c.a.div.withConfig({displayName:"Footerstyle__FooterWrapper",componentId:"vh57hr-0"})(["font-family:'Raleway',sans-serif;padding-top:5%;display:grid;grid-row:4 / 5;grid-column:1 / -1;grid-gap:1em;@media (min-width:1200px){grid-gap:3em;}"]),ie=c.a.div.withConfig({displayName:"Footerstyle__CallToAction",componentId:"vh57hr-1"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;min-width:175px;min-height:60px;"]),oe=c.a.div.withConfig({displayName:"Footerstyle__ButtonWrapper",componentId:"vh57hr-2"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:30px;@media(min-width:768px){flex-direction:row;margin-top:0;}"]),re=c.a.button.withConfig({displayName:"Footerstyle__Button",componentId:"vh57hr-3"})(["display:flex;justify-content:center;align-items:center;font-family:'Raleway',sans-serif;width:200px;height:57px;border-radius:8px;font-size:1em;padding:6px 0px;margin-bottom:15px;background:linear-gradient(hsla(187,65%,55%,1),hsla(187,65%,40%,1));border:none;border-bottom:3px solid hsla(187,65%,30%,.7);box-shadow:0px 2px 3px -1px rgba(0,0,0,0.3);transition:.3s ease;letter-spacing:1.8px;cursor:pointer;@media(min-width:768px){margin:0 10px;font-size:.9em;&:hover{background:linear-gradient(hsla(187,65%,58%,1),hsla(187,65%,40%,1));box-shadow:0 4px 4px rgba(0,0,0,.25);}}&:active{background:linear-gradient(hsla(187,65%,45%,1),hsla(187,65%,35%,1));-webkit-transform:translate(0px,2px);transform:translate(0px,2px);border-bottom:none;box-shadow:none;}"]),le=c.a.div.withConfig({displayName:"Footerstyle__LabelWrapper",componentId:"vh57hr-4"})(["display:flex;justify-content:space-between;align-items:center;color:white;"]),se=c.a.p.withConfig({displayName:"Footerstyle__Copy",componentId:"vh57hr-5"})(["margin:0 30px;text-align:center;font-size:1.5em;font-style:italic;font-weight:400;letter-spacing:.7px;@media(min-width:768px){font-size:1.2em;}"]),me=Object(c.a)(se).withConfig({displayName:"Footerstyle__Copyright",componentId:"vh57hr-6"})(["text-align:center;font-size:.8em;color:hsla(187,5%,33%,1);@media(min-width:768px){font-size:.9em;}"]),pe=c.a.div.withConfig({displayName:"Helpers__Wrapper",componentId:"nq7wmi-0"})(["display:grid;grid-template-columns:1fr 1fr;background:white;"]),ce=(c.a.p.withConfig({displayName:"Helpers__Copy",componentId:"nq7wmi-1"})(["font-family:'Rubik',sans-serif;font-size:.6em;line-height:22px;letter-spacing:1.5px;font-weight:300;margin:0;@media (min-width:900px){letter-spacing:1.75px;font-size:.8em;line-height:26px;}"]),c.a.div.withConfig({displayName:"Helpers__Card",componentId:"nq7wmi-2"})(["box-shadow:0 5px 15px rgba(50,50,93,0.1),0 3px 8px rgba(0,0,0,0.07);border-radius:4px;"])),de=(Object(c.a)(ce).withConfig({displayName:"Helpers__ImageWrapper",componentId:"nq7wmi-3"})(["display:grid;"]),c.a.img.withConfig({displayName:"Helpers__Image",componentId:"nq7wmi-4"})(["display:grid;width:100%;border-radius:4px;"]),c.a.h1.withConfig({displayName:"Helpers__Title",componentId:"nq7wmi-5"})(["display:grid;font-size:1em;letter-spacing:3px;font-family:'Sedgwick Ave Display',cursive;@media (min-width:1100px){font-size:1.4em;}"]),c.a.h3.withConfig({displayName:"Helpers__SubTitle",componentId:"nq7wmi-6"})(["font-family:'rubik',sans-serif;font-size:.9em;letter-spacing:4px;font-weight:300;@media (min-width:1100px){font-size:1em;}"]),c.a.p.withConfig({displayName:"Helpers__CTAButtonText",componentId:"nq7wmi-7"})(["color:white;"]),c.a.button.withConfig({displayName:"Helpers__CTAButton",componentId:"nq7wmi-8"})(["font-size:16px;margin-top:30px;display:flex;justify-content:space-evenly;align-items:center;width:200px;height:55px;background:linear-gradient(to left,hsla(348,86%,59%,.9),hsla(39,100%,63%,0.9));border:none;border-radius:7px;border-bottom:3px solid hsla(348,2%,10%,.5);box-shadow:0px 2px 3px -1px rgba(0,0,0,0.3);transition:.3s ease;letter-spacing:1.8px;cursor:pointer;&:hover{background:linear-gradient(to left,hsla(348,96%,69%,.9),hsla(39,100%,63%,0.9));box-shadow:0 4px 4px rgba(0,0,0,.25);}&:active{background:linear-gradient(to left,hsla(348,86%,49%,.9),hsla(39,90%,43%,0.9));-webkit-transform:translate(0px,2px);transform:translate(0px,2px);border-bottom:none;box-shadow:none;}@media(max-width:900px){margin:0;font-size:16px;&:hover{background:linear-gradient(to left,hsla(348,86%,59%,.9),hsla(39,100%,63%,0.9));box-shadow:0px 2px 3px -1px rgba(0,0,0,0.3);}}"]),c.a.div.withConfig({displayName:"Helpers__Spacer",componentId:"nq7wmi-9"})(["grid-column:1 / -1;width:100%;margin:1%;@media(max-width:900px){display:none;}"]),c.a.div.withConfig({displayName:"Helpers__Testimonial",componentId:"nq7wmi-10"})(["font-style:italic;font-size:22px;font-weight:200;line-height:32px;letter-spacing:1.55px;text-align:center;@media (max-width:1100px){font-size:18px;}"]),function(){return i.a.createElement("a",{href:"#",className:"arrow up-button"},i.a.createElement("svg",{className:"up-arrow",style:{width:"30px",height:"30px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 453.5 270"},i.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},i.a.createElement("path",{id:"arrow-head",fill:"none",stroke:"#000",strokeWidth:"20",d:"M318.5 10l125 125-125 125",strokeLinecap:"round",strokeLinejoin:"round"}),i.a.createElement("path",{id:"arrow-body",fill:"black",stroke:"black",strokeWidth:"",strokeMiterlimit:"0",d:"M433 144.5H10a10 10 0 0 1 0-20h423a10 10 0 0 1 0 20z"}))))});var he=function(){return i.a.createElement(ne,null,i.a.createElement(ie,null,i.a.createElement(oe,null,i.a.createElement(re,null,i.a.createElement("a",{href:ee.a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(le,null,i.a.createElement(ae.a,{color:"white",style:{margin:"0px 9px 0px 0px",height:"32px",width:"32px"}}),i.a.createElement("p",null,"RESUME")))))),i.a.createElement(me,null,"This site built with ReactJS ",i.a.createElement("br",null),"© Nicky Evers Design"),i.a.createElement(de,null))},ge=Object(c.a)(pe).withConfig({displayName:"Contactstyles__ContactWrapper",componentId:"sc-31085m-0"})(["background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%2386c1c9' fill-opacity='0.08' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E\"),linear-gradient(hsla(187,15%,55%,.1),hsla(187,65%,55%,.15));grid-template-columns:50px 1fr 50px;justify-items:center;grid-gap:1em;grid-template-rows:5vh auto auto auto 5vh;@media (min-width:1200px){grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-template-rows:10vh auto auto auto 5vh;}"]),ue=c.a.div.withConfig({displayName:"Contactstyles__ContactTitleWrapper",componentId:"sc-31085m-1"})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-gap:10px;grid-column:2 / 3;padding:20px;"]),fe=(Object(c.a)(ue).withConfig({displayName:"Contactstyles__ContactSummaryTitleWrapper",componentId:"sc-31085m-2"})(["grid-template-rows:1fr;padding:10px 0px 40px 0px;"]),Object(c.a)(j).withConfig({displayName:"Contactstyles__ContactTitle",componentId:"sc-31085m-3"})(["grid-column:2 / 3;grid-row:2 / 3;font-size:1.2em;color:hsla(187,5%,33%,1);font-weight:500;justify-self:center;text-align:center;margin:0;@media (min-width:1200px){grid-column:3 / 5;grid-row:2 / 3;font-size:1.5em;margin-bottom:1em;}"])),xe=Object(c.a)(ce).withConfig({displayName:"Contactstyles__ContactCard",componentId:"sc-31085m-4"})(["padding:2em 5px 0px 5px;background-color:white;grid-column:1 / -1;width:85%;grid-row:3 / 4;justify-self:center;height:550px;@media (min-width:1200px){padding:2em 5px;height:330px;display:grid;padding:2em;width:700px;grid-column:2 / 6;grid-row:3 / 4;justify-content:center;}"]),ye=c.a.form.withConfig({displayName:"Contactstyles__ContactForm",componentId:"sc-31085m-5"})(["display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;grid-gap:15px;width:unset;@media (min-width:1200px){grid-template-rows:250px 0px auto;width:600px;text-align:center;}"]),we=c.a.button.withConfig({displayName:"Contactstyles__SubmitButton",componentId:"sc-31085m-6"})(["display:grid;grid-column:1 / -1;grid-row:2 / 3;width:55%;height:55px;font-size:20px;justify-self:center;align-items:center;color:white;background:linear-gradient(hsla(187,65%,55%,1),hsla(187,65%,40%,1));border:none;border-radius:7px;border-bottom:3px solid hsla(187,65%,30%,.7);box-shadow:0px 2px 3px -1px rgba(0,0,0,0.3);transition:0.3s ease;letter-spacing:1.8px;&:hover{background:linear-gradient(hsla(187,65%,58%,1),hsla(187,65%,40%,1));box-shadow:0 4px 4px rgba(0,0,0,0.25);}&:active{background:linear-gradient(hsla(187,65%,45%,1),hsla(187,65%,35%,1));-webkit-transform:translate(0px,2px);transform:translate(0px,2px);border-bottom:none;box-shadow:none;}@media (max-width:900px){grid-column:1 / -1;grid-row:3 / 4;margin:0;font-size:16px;&:hover{background:linear-gradient(hsla(187,65%,45%,1),hsla(187,65%,35%,1));box-shadow:0px 2px 3px -1px rgba(0,0,0,0.3);}}"]),ve=c.a.div.withConfig({displayName:"Contactstyles__LeftHalfInputs",componentId:"sc-31085m-7"})(["display:grid;grid-column:1 / 2;grid-template-rows:1fr 1fr 1fr;grid-gap:10px;height:200px;margin:10px;@media (max-width:900px){grid-row:1 / 2;grid-column:1 / -1;}"]),be=c.a.div.withConfig({displayName:"Contactstyles__RightHalfInputs",componentId:"sc-31085m-8"})(["grid-column:2 / 3;height:180px;margin:10px;@media (max-width:900px){grid-row:2 / 3;grid-column:1 / -1;}"]),ze=c.a.input.withConfig({displayName:"Contactstyles__LeftInput",componentId:"sc-31085m-9"})(["border:none;box-shadow:0px 2px 4px rgba(50,50,93,0.1),0 3px 8px rgba(0,0,0,0.07) !important;font-size:16px;border-radius:8px;padding:10px;-webkit-appearance:none;&:focus{box-shadow:0px 0px 2px hsla(276,70%,59%,0.8);}@media (max-width:900px){width:80%;justify-self:center;}"]),_e=c.a.textarea.withConfig({displayName:"Contactstyles__RightTextArea",componentId:"sc-31085m-10"})(["display:grid;border:none;box-shadow:0px 2px 4px rgba(50,50,93,0.1),0 3px 8px rgba(0,0,0,0.07);border-radius:8px;font-size:16px;padding:10px;width:100%;height:100%;-webkit-appearance:none;&:focus{box-shadow:0px 0px 2px hsla(276,70%,59%,0.8);}@media (max-width:900px){width:80%;margin:0 auto;height:150px;}"]),Ee=function(){return i.a.createElement(ge,null,i.a.createElement(fe,null,"Hiring? Need help on a project?",i.a.createElement("br",null)," Lets talk."),i.a.createElement(xe,null,i.a.createElement(ye,{netlify:!0,"data-netlify":"true",method:"POST","netlify-honeypot":"bot-field","data-netlify-honeypot":"bot-field",name:"contact-form-portfolio"},i.a.createElement("input",{type:"hidden",name:"form-name",value:"contact-form-portfolio"}),i.a.createElement(ve,null,i.a.createElement(ze,{name:"name",type:"text",placeholder:"Name"}),i.a.createElement(ze,{name:"email",type:"email",placeholder:"Email address"}),i.a.createElement(ze,{name:"subject",type:"text",placeholder:"Subject"})),i.a.createElement(be,null,i.a.createElement(_e,{name:"message",type:"text",placeholder:"Message"})),i.a.createElement(we,{type:"submit",value:"submit"},"SUBMIT"))),i.a.createElement(he,null))},ke=c.a.div.withConfig({displayName:"Mainstyle__Wrapper",componentId:"sc-1np178i-0"})(["width:100%;overflow-x:hidden;letter-spacing:.2px;line-height:1.7;font-family:'Raleway',sans-serif;"]),Ce=c.a.div.withConfig({displayName:"Mainstyle__Content",componentId:"sc-1np178i-1"})(["background:white;position:relative;@media(min-width:768px){}"]);var He=function(){return i.a.createElement(ke,null,i.a.createElement(I,null),i.a.createElement(Ce,null,i.a.createElement(F,null),i.a.createElement(K,null),i.a.createElement(Ee,null)))};"undefined"!=typeof window&&a(590)('a[href*="#"]');t.default=function(){return i.a.createElement(h,null,i.a.createElement("div",{className:"App",id:"top"},i.a.createElement(He,null)))}},293:function(e,t,a){var n;e.exports=(n=a(367))&&n.default||n},366:function(e){e.exports={data:{site:{siteMetadata:{title:"Nicky Evers Design"}}}}},367:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),i=a.n(n),o=a(113);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},588:function(e,t,a){e.exports=a.p+"static/Nicky-Evers-Tech-Resume-aa4f57afafdd8936d9c97130c8a651ac.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-94290ac02cef6ad08884.js.map