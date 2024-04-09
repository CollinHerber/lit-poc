import{u as p,f as u,s as l}from"./lit-element-BfA8ce0F.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=e=>(r,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(e,r)}):customElements.define(e,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},h=(e=d,r,t)=>{const{kind:s,metadata:n}=t;let c=globalThis.litPropertyMetadata.get(n);if(c===void 0&&globalThis.litPropertyMetadata.set(n,c=new Map),c.set(t.name,e),s==="accessor"){const{name:o}=t;return{set(i){const a=r.get.call(this);r.set.call(this,i),this.requestUpdate(o,a,e)},init(i){return i!==void 0&&this.P(o,void 0,e),i}}}if(s==="setter"){const{name:o}=t;return function(i){const a=this[o];r.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+s)};function f(e){return(r,t)=>typeof t=="object"?h(e,r,t):((s,n,c)=>{const o=n.hasOwnProperty(c);return n.constructor.createProperty(c,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(n,c):void 0})(e,r,t)}var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,P=(e,r,t,s)=>{for(var n=s>1?void 0:s?v(r,t):r,c=e.length-1,o;c>=0;c--)(o=e[c])&&(n=(s?o(r,t,n):o(n))||n);return s&&n&&m(r,t,n),n};class y extends l{constructor(){super(...arguments),this.count=0}onClick(){this.count++}}P([f({type:Number})],y.prototype,"count",2);export{y as N,f as n,g as t};
