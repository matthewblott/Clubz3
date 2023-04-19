import{m as _}from"./index-9791be84.js";import{S as T,i as L,s as S,Y as C,e as k,b as m,Z as I,C as y,h as u,o as q,k as h,q as E,l as p,m as d,r as P,I as v,u as N,a as A,c as B,n as g,W as D}from"./index-867ab049.js";import{E as H}from"./employee-88b8a119.js";const Q=_.object({EmployeeId:_.number(),LastName:_.string(),FirstName:_.string(),Title:_.string(),TitleOfCourtesy:_.string(),BirthDate:_.coerce.date(),HireDate:_.coerce.date(),Address:_.string().max(50),City:_.string().max(15),Region:_.string().max(15),PostalCode:_.string().max(9),Country:_.string().max(15),HomePhone:_.string().min(1).max(15),Extension:_.coerce.number(),Photo:_.any(),Notes:_.string(),ReportsTo:_.coerce.number(),PhotoPath:_.string()});function R(i,e,n){const t=i.slice();return t[4]=e[n].Region,t}function j(i){let e,n,t=i[7].message+"",l;return{c(){e=h("p"),n=E("Something went wrong: "),l=E(t)},l(o){e=p(o,"P",{});var a=d(e);n=P(a,"Something went wrong: "),l=P(a,t),a.forEach(u)},m(o,a){m(o,e,a),v(e,n),v(e,l)},p(o,a){a&4&&t!==(t=o[7].message+"")&&N(l,t)},d(o){o&&u(e)}}}function F(i){let e,n=i[3]&&w(i);return{c(){n&&n.c(),e=k()},l(t){n&&n.l(t),e=k()},m(t,l){n&&n.m(t,l),m(t,e,l)},p(t,l){t[3]?n?n.p(t,l):(n=w(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&u(e)}}}function w(i){let e,n,t,l,o,a=i[3],s=[];for(let r=0;r<a.length;r+=1)s[r]=O(R(i,a,r));return{c(){e=h("label"),n=E("Region"),t=A(),l=h("select"),o=h("option");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=p(r,"LABEL",{for:!0});var f=d(e);n=P(f,"Region"),f.forEach(u),t=B(r),l=p(r,"SELECT",{name:!0,id:!0});var c=d(l);o=p(c,"OPTION",{}),d(o).forEach(u);for(let b=0;b<s.length;b+=1)s[b].l(c);c.forEach(u),this.h()},h(){g(e,"for",i[1]),o.__value="",o.value=o.__value,g(l,"name",i[1]),g(l,"id",i[1])},m(r,f){m(r,e,f),v(e,n),m(r,t,f),m(r,l,f),v(l,o);for(let c=0;c<s.length;c+=1)s[c].m(l,null)},p(r,f){if(f&2&&g(e,"for",r[1]),f&9){a=r[3];let c;for(c=0;c<a.length;c+=1){const b=R(r,a,c);s[c]?s[c].p(b,f):(s[c]=O(b),s[c].c(),s[c].m(l,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=a.length}f&2&&g(l,"name",r[1]),f&2&&g(l,"id",r[1])},d(r){r&&u(e),r&&u(t),r&&u(l),D(s,r)}}}function M(i){let e,n=i[4]+"",t,l;return{c(){e=h("option"),t=E(n),this.h()},l(o){e=p(o,"OPTION",{});var a=d(e);t=P(a,n),a.forEach(u),this.h()},h(){e.__value=l=i[4],e.value=e.__value},m(o,a){m(o,e,a),v(e,t)},p(o,a){a&8&&n!==(n=o[4]+"")&&N(t,n),a&8&&l!==(l=o[4])&&(e.__value=l,e.value=e.__value)},d(o){o&&u(e)}}}function W(i){let e,n=i[4]+"",t,l;return{c(){e=h("option"),t=E(n),this.h()},l(o){e=p(o,"OPTION",{});var a=d(e);t=P(a,n),a.forEach(u),this.h()},h(){e.__value=l=i[4],e.value=e.__value,e.selected=!0},m(o,a){m(o,e,a),v(e,t)},p(o,a){a&8&&n!==(n=o[4]+"")&&N(t,n),a&8&&l!==(l=o[4])&&(e.__value=l,e.value=e.__value)},d(o){o&&u(e)}}}function O(i){let e;function n(o,a){return o[4]===o[0]?W:M}let t=n(i),l=t(i);return{c(){l.c(),e=k()},l(o){l.l(o),e=k()},m(o,a){l.m(o,a),m(o,e,a)},p(o,a){t===(t=n(o))&&l?l.p(o,a):(l.d(1),l=t(o),l&&(l.c(),l.m(e.parentNode,e)))},d(o){l.d(o),o&&u(e)}}}function Y(i){let e,n;return{c(){e=h("p"),n=E("Loading ...")},l(t){e=p(t,"P",{});var l=d(e);n=P(l,"Loading ..."),l.forEach(u)},m(t,l){m(t,e,l),v(e,n)},p:y,d(t){t&&u(e)}}}function Z(i){let e,n,t={ctx:i,current:null,token:null,hasCatch:!0,pending:Y,then:F,catch:j,error:7};return C(n=i[2],t),{c(){e=k(),t.block.c()},l(l){e=k(),t.block.l(l)},m(l,o){m(l,e,o),t.block.m(l,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e},p(l,[o]){i=l,t.ctx=i,o&4&&n!==(n=i[2])&&C(n,t)||I(t,i,o)},i:y,o:y,d(l){l&&u(e),t.block.d(l),t.token=null,t=null}}}function z(i,e,n){let t=Promise.resolve(),{value:l=""}=e,{name:o="Region"}=e,a=[];return q(async()=>{n(2,t=await H.fetchRegions()),n(3,a=t.resource)}),i.$$set=s=>{"value"in s&&n(0,l=s.value),"name"in s&&n(1,o=s.name)},[l,o,t,a]}class U extends T{constructor(e){super(),L(this,e,z,Z,S,{value:0,name:1})}}export{U as E,Q as a};
