(self.webpackChunkreact_contacts=self.webpackChunkreact_contacts||[]).push([[497],{497:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var t=r(1889),a=r(5527),i=r(4554),o=r(3044),u=r(890),c=r(403),s=r(9434),l=r(5705),d=r(1724),m=r(1087),f=r(7391),p=r(6151),h=r(7630),Z=r(8724),x=r(3329);function v(){var e=(0,s.I0)(),n=d.Ry().shape({name:d.Z_().matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name is not valid").required("required"),email:d.Z_().email("Write correct email").required("Required"),password:d.Z_().min(6).typeError("Must be a string").required("Required")});return(0,x.jsx)(l.J9,{initialValues:{name:"",email:"",password:""},validateOnBlur:!0,onSubmit:function(n){var r=n.name,t=n.email,a=n.password;e((0,Z.z2)({name:r,email:t,password:a}))},validationSchema:n,children:function(e){var n=e.values,r=e.errors,a=e.touched,o=e.handleChange,u=e.handleBlur,c=e.handleSubmit;return(0,x.jsxs)(i.Z,{component:"form",onSubmit:c,noValidate:!0,sx:{mt:1},children:[(0,x.jsx)(f.Z,{variant:"filled",margin:"normal",fullWidth:!0,id:"name",label:"Userame",name:"name",onChange:o,onBlur:u,value:n.name,error:!!a.name&&!!r.name,helperText:a.name&&r.name}),(0,x.jsx)(f.Z,{variant:"filled",margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",onChange:o,onBlur:u,value:n.email,error:!!a.email&&!!r.email,helperText:a.email&&r.email}),(0,x.jsx)(f.Z,{variant:"filled",margin:"normal",fullWidth:!0,onChange:o,onBlur:u,value:n.password,error:!!a.password&&!!r.password,helperText:a.password&&r.password,name:"password",label:"Password",type:"password",id:"password"}),(0,x.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",sx:{mt:3,mb:2},children:"Sign Up"}),(0,x.jsx)(t.ZP,{container:!0,children:(0,x.jsx)(t.ZP,{item:!0,children:(0,x.jsx)(g,{to:"/login",variant:"body2",children:"Already registred? Login"})})})]})}})}var g=(0,h.ZP)(m.OL)((function(e){return{color:e.theme.palette.primary.main,fontSize:14}})),b=r(2102);function j(){return(0,x.jsxs)(t.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,x.jsx)(t.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat(b,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),(0,x.jsx)(t.ZP,{item:!0,sx:{bgcolor:"background.default"},xs:12,sm:8,md:5,component:a.Z,elevation:6,square:!0,children:(0,x.jsxs)(i.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(o.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,x.jsx)(c.Z,{})}),(0,x.jsx)(u.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,x.jsx)(v,{})]})})]})}},403:function(e,n,r){"use strict";var t=r(4836);n.Z=void 0;var a=t(r(5649)),i=r(3329),o=(0,a.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=o},5649:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4421)},4421:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return a.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return m},setRef:function(){return f},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return Z},useControlled:function(){return x.Z},useEventCallback:function(){return v.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var t=r(5902),a=r(4036),i=r(8949).Z,o=r(9201),u=r(3199);var c=function(e,n){return function(){return null}},s=r(9103),l=r(8301),d=r(7602);r(7462);var m=function(e,n){return function(){return null}},f=r(2971).Z,p=r(162),h=r(7384);var Z=function(e,n,r,t,a){return null},x=r(4556),v=r(9683),g=r(2071),b=r(3031),j={configure:function(e){t.Z.configure(e)}}},2102:function(e,n,r){"use strict";e.exports=r.p+"static/media/login.0e53b1a01d15d21460c9.jpg"},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=497.116a4611.chunk.js.map