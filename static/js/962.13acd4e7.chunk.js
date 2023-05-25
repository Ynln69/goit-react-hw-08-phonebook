"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[962],{3051:function(e,n,i){i.d(n,{h:function(){return o},m:function(){return s}});var r,t,l=i(168),a=i(9584),o=a.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  > label {\n    position: relative;\n    border: 2px solid #111111;\n    border-radius: 40px;\n    padding: 20px 40px;\n    > input {\n      background-color: transparent;\n      border: none;\n      font-weight: 700;\n      font-size: 18px;\n      line-height: 24px;\n      letter-spacing: -0.01em;\n      outline: none;\n    }\n  }\n"]))),s=a.Z.button(t||(t=(0,l.Z)(["\n  position: absolute;\n  right: 15px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n\n  background-color: cadetblue;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 22px;\n  letter-spacing: -0.01em;\n"])))},6962:function(e,n,i){i.r(n),i.d(n,{default:function(){return z}});var r=i(9439),t=i(1413),l=i(4925),a=i(9886),o=i(2791);function s(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(i){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function d(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(e){n.forEach((function(n){s(n,e)}))}}var u=i(7872),c=i(9219),p=i(2996),f=i(7797),m=i(6992),v=i(3329),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],b=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),g=(0,r.Z)(b,2),Z=g[0],y=g[1],k=(0,a.k)({strict:!1,name:"FormControlContext"}),R=(0,r.Z)(k,2),j=R[0],I=R[1];var C=(0,u.G)((function(e,n){var i=(0,c.jC)("Form",e),a=function(e){var n=e.id,i=e.isRequired,a=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,c=(0,l.Z)(e,h),p=(0,o.useId)(),f=n||"field-".concat(p),v="".concat(f,"-label"),x="".concat(f,"-feedback"),b="".concat(f,"-helptext"),g=(0,o.useState)(!1),Z=(0,r.Z)(g,2),y=Z[0],k=Z[1],R=(0,o.useState)(!1),j=(0,r.Z)(R,2),I=j[0],C=j[1],F=(0,o.useState)(!1),w=(0,r.Z)(F,2),P=w[0],q=w[1],T=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:b},e),{},{ref:d(n,(function(e){e&&C(!0)}))})}),[b]),O=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(P),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(a),"data-readonly":(0,m.PB)(u),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,s,P,a,u,v]),_=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({id:x},e),{},{ref:d(n,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[x]),H=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)((0,t.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),S=(0,o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,t.Z)((0,t.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!a,isReadOnly:!!u,isDisabled:!!s,isFocused:!!P,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:y,setHasFeedbackText:k,hasHelpText:I,setHasHelpText:C,id:f,labelId:v,feedbackId:x,helpTextId:b,htmlProps:c,getHelpTextProps:T,getErrorMessageProps:_,getRootProps:H,getLabelProps:O,getRequiredIndicatorProps:S}}((0,p.Lr)(e)),s=a.getRootProps,u=(a.htmlProps,(0,l.Z)(a,x)),b=(0,m.cx)("chakra-form-control",e.className);return(0,v.jsx)(j,{value:u,children:(0,v.jsx)(Z,{value:i,children:(0,v.jsx)(f.m.div,(0,t.Z)((0,t.Z)({},s({},n)),{},{className:b,__css:i.container}))})})}));C.displayName="FormControl",(0,u.G)((function(e,n){var i=I(),r=y(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(f.m.div,(0,t.Z)((0,t.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:r.helperText,className:l}))})).displayName="FormHelperText";var F=["isDisabled","isInvalid","isReadOnly","isRequired"],w=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function P(e){var n=function(e){var n,i,r,a=I(),o=e.id,s=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,p=e.isInvalid,f=e.isReadOnly,v=e.isDisabled,h=e.onFocus,x=e.onBlur,b=(0,l.Z)(e,w),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&g.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&g.push(a.helpTextId);return(0,t.Z)((0,t.Z)({},b),{},{"aria-describedby":g.join(" ")||void 0,id:null!=o?o:null==a?void 0:a.id,isDisabled:null!=(n=null!=s?s:v)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(i=null!=d?d:f)?i:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=u?u:c)?r:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,m.v0)(null==a?void 0:a.onFocus,h),onBlur:(0,m.v0)(null==a?void 0:a.onBlur,x)})}(e),i=n.isDisabled,r=n.isInvalid,a=n.isReadOnly,o=n.isRequired,s=(0,l.Z)(n,F);return(0,t.Z)((0,t.Z)({},s),{},{disabled:i,readOnly:a,required:o,"aria-invalid":(0,m.Qm)(r),"aria-required":(0,m.Qm)(o),"aria-readonly":(0,m.Qm)(a)})}var q=["htmlSize"],T=(0,u.G)((function(e,n){var i=e.htmlSize,r=(0,l.Z)(e,q),a=(0,c.jC)("Input",r),o=P((0,p.Lr)(r)),s=(0,m.cx)("chakra-input",e.className);return(0,v.jsx)(f.m.input,(0,t.Z)((0,t.Z)({size:i},o),{},{__css:a.field,ref:n,className:s}))}));T.displayName="Input",T.id="Input";var O=i(9434),_=i(9273),H=i(3051),S=i(6151),D=function(){var e=(0,O.I0)(),n=(0,o.useState)(!1),i=(0,r.Z)(n,2),t=i[0],l=i[1];return(0,v.jsxs)(H.h,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget;e((0,_.z2)({name:i.elements.name.value,email:i.elements.email.value,password:i.elements.password.value})),i.reset()},autoComplete:"off",children:[(0,v.jsx)("label",{children:(0,v.jsx)("input",{type:"text",name:"name",placeholder:"Name"})}),(0,v.jsx)("label",{children:(0,v.jsx)("input",{type:"email",name:"email",placeholder:"Email"})}),(0,v.jsxs)("label",{children:[(0,v.jsx)(T,{type:t?"text":"password",name:"password",placeholder:"Password"}),(0,v.jsx)(H.m,{type:"button",h:"1.75rem",size:"sm",onClick:function(){return l(!t)},children:t?"Hide":"Show"})]}),(0,v.jsx)(S.E,{type:"submit",children:"Register"})]})},N=i(5171),B=i(1793),z=function(){return(0,v.jsx)(N.H,{children:(0,v.jsxs)(N.n,{children:[(0,v.jsx)("img",{src:B,alt:"",width:"200px"}),(0,v.jsx)(D,{})]})})}},5171:function(e,n,i){i.d(n,{H:function(){return o},n:function(){return s}});var r,t,l=i(168),a=i(9584),o=a.Z.section(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 150px 0;\n"]))),s=a.Z.div(t||(t=(0,l.Z)(["\n  position: relative;\n  padding-top: 140px;\n  padding-right: 30px;\n  padding-bottom: 40px;\n  padding-left: 30px;\n  border: 2px solid #111111;\n  border-radius: 18px;\n\n  background: #f6f6f6;\n  > img {\n    position: absolute;\n    left: 23%;\n    top: -23%;\n  }\n"])))},1793:function(e,n,i){e.exports=i.p+"static/media/icon-profile.5d30b5aefe7c7181dda7.png"}}]);
//# sourceMappingURL=962.13acd4e7.chunk.js.map