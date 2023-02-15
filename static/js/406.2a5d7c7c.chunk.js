/*! For license information please see 406.2a5d7c7c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_contacts=self.webpackChunkreact_contacts||[]).push([[406],{5527:function(t,n,e){e.d(n,{Z:function(){return x}});var o=e(3366),r=e(7462),a=e(2791),i=e(8182),u=e(4419),s=e(2065),c=e(7630),l=function(t){return((t<1?5.11916*Math.pow(t,2):4.5*Math.log(t+1)+2)/100).toFixed(2)},f=e(3736),p=e(5878),d=e(1217);function v(t){return(0,d.Z)("MuiPaper",t)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=e(3329),m=["className","component","elevation","square","variant"],E=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],!e.square&&n.rounded,"elevation"===e.variant&&n["elevation".concat(e.elevation)]]}})((function(t){var n,e=t.theme,o=t.ownerState;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((e.vars||e).palette.divider)},"elevation"===o.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",l(o.elevation)),", ").concat((0,s.Fq)("#fff",l(o.elevation)),")")},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[o.elevation]}))})),x=a.forwardRef((function(t,n){var e=(0,f.Z)({props:t,name:"MuiPaper"}),a=e.className,s=e.component,c=void 0===s?"div":s,l=e.elevation,p=void 0===l?1:l,d=e.square,x=void 0!==d&&d,b=e.variant,S=void 0===b?"elevation":b,y=(0,o.Z)(e,m),Z=(0,r.Z)({},e,{component:c,elevation:p,square:x,variant:S}),g=function(t){var n=t.square,e=t.elevation,o=t.variant,r=t.classes,a={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(e)]};return(0,u.Z)(a,v,r)}(Z);return(0,h.jsx)(E,(0,r.Z)({as:c,ownerState:Z,className:(0,i.Z)(g.root,a),ref:n},y))}))},6532:function(t,n){var e,o=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function E(t){if("object"===typeof t&&null!==t){var n=t.$$typeof;switch(n){case o:switch(t=t.type){case a:case u:case i:case p:case d:return t;default:switch(t=t&&t.$$typeof){case l:case c:case f:case h:case v:case s:return t;default:return n}}case r:return n}}}e=Symbol.for("react.module.reference")},8457:function(t,n,e){e(6532)},4999:function(t,n,e){e.d(n,{C:function(){return r},n:function(){return o}});var o=function(t){return t.scrollTop};function r(t,n){var e,o,r=t.timeout,a=t.easing,i=t.style,u=void 0===i?{}:i;return{duration:null!=(e=u.transitionDuration)?e:"number"===typeof r?r:r[n.mode]||0,easing:null!=(o=u.transitionTimingFunction)?o:"object"===typeof a?a[n.mode]:a,delay:u.transitionDelay}}},3199:function(t,n,e){var o=e(3981);n.Z=o.Z},9103:function(t,n,e){e.d(n,{Z:function(){return r}});var o=e(2791);var r=function(t,n){return o.isValidElement(t)&&-1!==n.indexOf(t.type.muiName)}},8301:function(t,n,e){var o=e(9723);n.Z=o.Z},7602:function(t,n,e){var o=e(7979);n.Z=o.Z},4556:function(t,n,e){var o=e(8959);n.Z=o.Z},162:function(t,n,e){var o=e(5721);n.Z=o.Z},8949:function(t,n,e){function o(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.reduce((function(t,n){return null==n?t:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t.apply(this,o),n.apply(this,o)}}),(function(){}))}e.d(n,{Z:function(){return o}})},3981:function(t,n,e){function o(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){t.apply(o,a)}),e)}return o.clear=function(){clearTimeout(n)},o}e.d(n,{Z:function(){return o}})},9723:function(t,n,e){function o(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return o}})},7979:function(t,n,e){e.d(n,{Z:function(){return r}});var o=e(9723);function r(t){return(0,o.Z)(t).defaultView||window}},8959:function(t,n,e){e.d(n,{Z:function(){return a}});var o=e(9439),r=e(2791);function a(t){var n=t.controlled,e=t.default,a=(t.name,t.state,r.useRef(void 0!==n).current),i=r.useState(e),u=(0,o.Z)(i,2),s=u[0],c=u[1];return[a?n:s,r.useCallback((function(t){a||c(t)}),[])]}},6248:function(t,n,e){var o;e.d(n,{Z:function(){return s}});var r=e(9439),a=e(2791),i=0;var u=(o||(o=e.t(a,2))).useId;function s(t){if(void 0!==u){var n=u();return null!=t?t:n}return function(t){var n=a.useState(t),e=(0,r.Z)(n,2),o=e[0],u=e[1],s=t||o;return a.useEffect((function(){null==o&&u("mui-".concat(i+=1))}),[o]),s}(t)}},8875:function(t,n,e){e.d(n,{ZP:function(){return E}});var o=e(3366),r=e(4578),a=e(2791),i=e(4164),u=!1,s=e(5545),c=e(8852),l="unmounted",f="exited",p="entering",d="entered",v="exiting",h=function(t){function n(n,e){var o;o=t.call(this,n,e)||this;var r,a=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?a?(r=f,o.appearStatus=p):r=d:r=n.unmountOnExit||n.mountOnEnter?l:f,o.state={status:r},o.nextCallback=null,o}(0,r.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:f}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==p&&e!==d&&(n=p):e!==p&&e!==d||(n=v)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!==typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this);e&&(0,c.Q)(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[i.findDOMNode(this),o],a=r[0],s=r[1],c=this.getTimeouts(),l=o?c.appear:c.enter;!t&&!e||u?this.safeSetState({status:d},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:p},(function(){n.props.onEntering(a,s),n.onTransitionEnd(l,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(a,s)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:i.findDOMNode(this);n&&!u?(this.props.onExit(o),this.safeSetState({status:v},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(o)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],a=r[0],u=r[1];this.props.addEndListener(a,u)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,o.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(s.Z.Provider,{value:null},"function"===typeof e?e(t,r):a.cloneElement(a.Children.only(e),r))},n}(a.Component);function m(){}h.contextType=s.Z,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},h.UNMOUNTED=l,h.EXITED=f,h.ENTERING=p,h.ENTERED=d,h.EXITING=v;var E=h},8852:function(t,n,e){e.d(n,{Q:function(){return o}});var o=function(t){return t.scrollTop}}}]);
//# sourceMappingURL=406.2a5d7c7c.chunk.js.map