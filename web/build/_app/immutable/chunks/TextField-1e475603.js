import{S as q,i as A,s as C,k as c,q as E,a as h,x as I,l as b,m as L,r as S,h as u,c as d,y as V,n as r,b as p,I as k,z as w,u as z,f as B,t as F,A as N}from"./index-867ab049.js";import{V as P}from"./Validation-fc70f5a9.js";import{c as T}from"./index-adfdf48f.js";function U(i){let n,l=T(i[0])+"",f,o,a,_,m,s;return m=new P({props:{name:i[0]}}),{c(){n=c("label"),f=E(l),o=h(),a=c("input"),_=h(),I(m.$$.fragment),this.h()},l(e){n=b(e,"LABEL",{for:!0});var t=L(n);f=S(t,l),t.forEach(u),o=d(e),a=b(e,"INPUT",{id:!0,name:!0}),_=d(e),V(m.$$.fragment,e),this.h()},h(){r(n,"for",i[0]),r(a,"id",i[0]),r(a,"name",i[0]),a.value=i[1]},m(e,t){p(e,n,t),k(n,f),p(e,o,t),p(e,a,t),p(e,_,t),w(m,e,t),s=!0},p(e,[t]){(!s||t&1)&&l!==(l=T(e[0])+"")&&z(f,l),(!s||t&1)&&r(n,"for",e[0]),(!s||t&1)&&r(a,"id",e[0]),(!s||t&1)&&r(a,"name",e[0]),(!s||t&2&&a.value!==e[1])&&(a.value=e[1]);const v={};t&1&&(v.name=e[0]),m.$set(v)},i(e){s||(B(m.$$.fragment,e),s=!0)},o(e){F(m.$$.fragment,e),s=!1},d(e){e&&u(n),e&&u(o),e&&u(a),e&&u(_),N(m,e)}}}function $(i,n,l){let{name:f=""}=n,{value:o=""}=n;return i.$$set=a=>{"name"in a&&l(0,f=a.name),"value"in a&&l(1,o=a.value)},[f,o]}class H extends q{constructor(n){super(),A(this,n,$,U,C,{name:0,value:1})}}export{H as T};
