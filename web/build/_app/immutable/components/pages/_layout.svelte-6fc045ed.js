import{S as d,i as S,s as g,D as v,a as m,k as E,E as b,h as f,c,l as A,m as $,p,b as u,F as D,G as H,H as P,f as w,t as y,o as I}from"../../chunks/index-867ab049.js";import{_ as L}from"../../chunks/preload-helper-41c905a7.js";import{r as V}from"../../chunks/index-81f5a037.js";const k=V("SafeArea",{web:()=>L(()=>import("../../chunks/web-9cfdf8f7.js"),["../../chunks/web-9cfdf8f7.js","../../chunks/index-81f5a037.js"],import.meta.url).then(o=>new o.SafeAreaWeb)});function q(o){let i,n,s,_,a;document.title=i=h;const r=o[2].default,t=v(r,o,o[1],null);return{c(){n=m(),s=E("div"),_=m(),t&&t.c(),this.h()},l(e){b("svelte-1az6e94",document.head).forEach(f),n=c(e),s=A(e,"DIV",{style:!0}),$(s).forEach(f),_=c(e),t&&t.l(e),this.h()},h(){p(s,"height",o[0]+"px")},m(e,l){u(e,n,l),u(e,s,l),u(e,_,l),t&&t.m(e,l),a=!0},p(e,[l]){(!a||l&0)&&i!==(i=h)&&(document.title=i),(!a||l&1)&&p(s,"height",e[0]+"px"),t&&t.p&&(!a||l&2)&&D(t,r,e,e[1],a?P(r,e[1],l,null):H(e[1]),null)},i(e){a||(w(t,e),a=!0)},o(e){y(t,e),a=!1},d(e){e&&f(n),e&&f(s),e&&f(_),t&&t.d(e)}}}let h="Home";function z(o,i,n){let s,{$$slots:_={},$$scope:a}=i;return I(()=>{k.getStatusBarHeight().then(({statusBarHeight:r})=>{n(0,s=r)})}),o.$$set=r=>{"$$scope"in r&&n(1,a=r.$$scope)},n(0,s=0),[s,a,_]}class G extends d{constructor(i){super(),S(this,i,z,q,g,{})}}export{G as default};