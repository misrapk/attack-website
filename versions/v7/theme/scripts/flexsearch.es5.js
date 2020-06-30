/*
 FlexSearch v0.6.30
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';function ma(q){var u=0;return function(){return u<q.length?{done:!1,value:q[u++]}:{done:!0}}}var na="function"==typeof Object.defineProperties?Object.defineProperty:function(q,u,r){q!=Array.prototype&&q!=Object.prototype&&(q[u]=r.value)},Z="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function pa(){pa=function(){};Z.Symbol||(Z.Symbol=qa)}function ra(q,u){this.b=q;na(this,"description",{configurable:!0,writable:!0,value:u})}
ra.prototype.toString=function(){return this.b};var qa=function(){function q(r){if(this instanceof q)throw new TypeError("Symbol is not a constructor");return new ra("jscomp_symbol_"+(r||"")+"_"+u++,r)}var u=0;return q}();function sa(){pa();var q=Z.Symbol.iterator;q||(q=Z.Symbol.iterator=Z.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[q]&&na(Array.prototype,q,{configurable:!0,writable:!0,value:function(){return ta(ma(this))}});sa=function(){}}
function ta(q){sa();q={next:q};q[Z.Symbol.iterator]=function(){return this};return q}function za(q,u){sa();q instanceof String&&(q+="");var r=0,E={next:function(){if(r<q.length){var K=r++;return{value:u(K,q[K]),done:!1}}E.next=function(){return{done:!0,value:void 0}};return E.next()}};E[Symbol.iterator]=function(){return E};return E}
function Aa(q,u){if(u){var r=Z;q=q.split(".");for(var E=0;E<q.length-1;E++){var K=q[E];K in r||(r[K]={});r=r[K]}q=q[q.length-1];E=r[q];u=u(E);u!=E&&null!=u&&na(r,q,{configurable:!0,writable:!0,value:u})}}Aa("Array.prototype.keys",function(q){return q?q:function(){return za(this,function(u){return u})}});function Ba(q){var u="undefined"!=typeof Symbol&&Symbol.iterator&&q[Symbol.iterator];return u?u.call(q):{next:ma(q)}}
Aa("Promise",function(q){function u(m){this.h=0;this.m=void 0;this.b=[];var x=this.j();try{m(x.resolve,x.reject)}catch(l){x.reject(l)}}function r(){this.b=null}function E(m){return m instanceof u?m:new u(function(x){x(m)})}if(q)return q;r.prototype.h=function(m){if(null==this.b){this.b=[];var x=this;this.j(function(){x.m()})}this.b.push(m)};var K=Z.setTimeout;r.prototype.j=function(m){K(m,0)};r.prototype.m=function(){for(;this.b&&this.b.length;){var m=this.b;this.b=[];for(var x=0;x<m.length;++x){var l=
m[x];m[x]=null;try{l()}catch(F){this.l(F)}}}this.b=null};r.prototype.l=function(m){this.j(function(){throw m;})};u.prototype.j=function(){function m(F){return function(I){l||(l=!0,F.call(x,I))}}var x=this,l=!1;return{resolve:m(this.L),reject:m(this.l)}};u.prototype.L=function(m){if(m===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(m instanceof u)this.M(m);else{a:switch(typeof m){case "object":var x=null!=m;break a;case "function":x=!0;break a;default:x=!1}x?this.K(m):this.w(m)}};
u.prototype.K=function(m){var x=void 0;try{x=m.then}catch(l){this.l(l);return}"function"==typeof x?this.N(x,m):this.w(m)};u.prototype.l=function(m){this.B(2,m)};u.prototype.w=function(m){this.B(1,m)};u.prototype.B=function(m,x){if(0!=this.h)throw Error("Cannot settle("+m+", "+x+"): Promise already settled in state"+this.h);this.h=m;this.m=x;this.I()};u.prototype.I=function(){if(null!=this.b){for(var m=0;m<this.b.length;++m)ba.h(this.b[m]);this.b=null}};var ba=new r;u.prototype.M=function(m){var x=
this.j();m.F(x.resolve,x.reject)};u.prototype.N=function(m,x){var l=this.j();try{m.call(x,l.resolve,l.reject)}catch(F){l.reject(F)}};u.prototype.then=function(m,x){function l(L,W){return"function"==typeof L?function(ja){try{F(L(ja))}catch(ka){I(ka)}}:W}var F,I,ca=new u(function(L,W){F=L;I=W});this.F(l(m,F),l(x,I));return ca};u.prototype.catch=function(m){return this.then(void 0,m)};u.prototype.F=function(m,x){function l(){switch(F.h){case 1:m(F.m);break;case 2:x(F.m);break;default:throw Error("Unexpected state: "+
F.h);}}var F=this;null==this.b?ba.h(l):this.b.push(l)};u.resolve=E;u.reject=function(m){return new u(function(x,l){l(m)})};u.race=function(m){return new u(function(x,l){for(var F=Ba(m),I=F.next();!I.done;I=F.next())E(I.value).F(x,l)})};u.all=function(m){var x=Ba(m),l=x.next();return l.done?E([]):new u(function(F,I){function ca(ja){return function(ka){L[ja]=ka;W--;0==W&&F(L)}}var L=[],W=0;do L.push(void 0),W++,E(l.value).F(ca(L.length-1),I),l=x.next();while(!l.done)})};return u});
(function(q,u,r){var E;(E=r.define)&&E.amd?E([],function(){return u}):(E=r.modules)?E[q.toLowerCase()]=u:"object"===typeof exports?module.exports=u:r[q]=u})("FlexSearch",function Ca(q){function r(a,c){var b=c?c.id:a&&a.id;this.id=b||0===b?b:Da++;this.init(a,c);x(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].f):Object.keys(this.f)});x(this,"length",function(){return this.index.length})}function E(a,c,b,d){this.D!==this.i&&(this.A=this.A.concat(b),this.D++,d&&this.A.length>=
d&&(this.D=this.i),this.D===this.i&&(this.cache&&this.u.set(c,this.A),this.H&&this.H(this.A)));return this}function K(a){var c=G(),b;for(b in a)if(a.hasOwnProperty(b)){var d=a[b];M(d)?c[b]=d.slice(0):P(d)?c[b]=K(d):c[b]=d}return c}function ba(a,c){for(var b=a.length,d=da(c),e=[],f=0,h=0;f<b;f++){var g=a[f];if(d&&c(g)||!d&&!c[g])e[h++]=g}return e}function m(a,c,b,d,e,f,h,g,k,n){b=ua(b,h?0:e,g,f,c,k,n);if(g){g=b.page;var w=b.next;b=b.result}if(h)c=this.where(h,null,e,b);else{c=b;b=this.v;e=c.length;
f=Array(e);for(h=0;h<e;h++)f[h]=b[c[h]];c=f}b=c;d&&(da(d)||(X=d.split(":"),1<X.length?d=ka:(X=X[0],d=ja)),b.sort(d));b=fa(g,w,b);this.cache&&this.u.set(a,b);return b}function x(a,c,b){Object.defineProperty(a,c,{get:b})}function l(a){return new RegExp(a,"g")}function F(a,c){for(var b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);return a}function I(a,c,b,d,e,f,h,g){if(c[b])return c[b];e=e?(g-(h||g/1.5))*f+(h||g/1.5)*e:f;c[b]=e;e>=h&&(a=a[g-(e+.5>>0)],a=a[b]||(a[b]=[]),a[a.length]=d);return e}function ca(a,
c){if(a)for(var b=Object.keys(a),d=0,e=b.length;d<e;d++){var f=b[d],h=a[f];if(h)for(var g=0,k=h.length;g<k;g++)if(h[g]===c){1===k?delete a[f]:h.splice(g,1);break}else P(h[g])&&ca(h[g],c)}}function L(a){for(var c="",b="",d="",e=0;e<a.length;e++){var f=a[e];if(f!==b)if(e&&"h"===f){if(d="a"===d||"e"===d||"i"===d||"o"===d||"u"===d||"y"===d,("a"===b||"e"===b||"i"===b||"o"===b||"u"===b||"y"===b)&&d||" "===b)c+=f}else c+=f;d=e===a.length-1?"":a[e+1];b=f}return c}function W(a,c){a=a.length-c.length;return 0>
a?1:a?-1:0}function ja(a,c){a=a[X];c=c[X];return a<c?-1:a>c?1:0}function ka(a,c){for(var b=X.length,d=0;d<b;d++)a=a[X[d]],c=c[X[d]];return a<c?-1:a>c?1:0}function fa(a,c,b){return a?{page:a,next:c?""+c:null,result:b}:b}function ua(a,c,b,d,e,f,h){var g=[];if(!0===b){b="0";var k=""}else k=b&&b.split(":");var n=a.length;if(1<n){var w=G(),z=[],v,p=0,t,D=!0,B=0,C;if(k)if(2===k.length){var A=k;k=!1}else k=C=parseInt(k[0],10);if(h){for(v=G();p<n;p++)if("not"===e[p]){var y=a[p];var J=y.length;for(t=0;t<J;t++)v["@"+
y[t]]=1}else var R=p+1;if(H(R))return fa(b,S,g);p=0}else var Y=T(e)&&e;for(var ha;p<n;p++){var N=p===(R||n)-1;if(!Y||!p)if((t=Y||e&&e[p])&&"and"!==t)if("or"===t)ha=!1;else continue;else ha=f=!0;y=a[p];if(J=y.length){if(D)if(U){var O=U.length;for(t=0;t<O;t++){D=U[t];var aa="@"+D;h&&v[aa]||(w[aa]=1,f||(g[B++]=D))}var U=null;D=!1}else{U=y;continue}aa=!1;for(t=0;t<J;t++){O=y[t];var V="@"+O,ea=f?w[V]||0:p;if(!(!ea&&!d||h&&v[V]||!f&&w[V]))if(ea===p){if(N){if(!C||--C<B)if(g[B++]=O,c&&B===c)return fa(b,B+
(k||0),g)}else w[V]=p+1;aa=!0}else d&&(V=z[ea]||(z[ea]=[]),V[V.length]=O)}if(ha&&!aa&&!d)break}else if(ha&&!d)return fa(b,S,y)}if(U)if(p=U.length,h)for(t=k?parseInt(k,10):0;t<p;t++)a=U[t],v["@"+a]||(g[B++]=a);else g=U;if(d)for(B=g.length,A?(p=parseInt(A[0],10)+1,t=parseInt(A[1],10)+1):(p=z.length,t=0);p--;)if(O=z[p]){for(J=O.length;t<J;t++)if(d=O[t],!h||!v["@"+d])if(g[B++]=d,c&&B===c)return fa(b,p+":"+t,g);t=0}}else!n||e&&"not"===e[0]||(g=a[0],k&&(k=parseInt(k[0],10)));if(c){h=g.length;k&&k>h&&(k=
0);k=k||0;var S=k+c;S<h?g=g.slice(k,S):(S=0,k&&(g=g.slice(k)))}return fa(b,S,g)}function T(a){return"string"===typeof a}function M(a){return a.constructor===Array}function da(a){return"function"===typeof a}function P(a){return"object"===typeof a}function H(a){return"undefined"===typeof a}function va(a){for(var c=Array(a),b=0;b<a;b++)c[b]=G();return c}function G(){return Object.create(null)}function Ea(){var a,c;self.onmessage=function(b){if(b=b.data)if(b.search){var d=c.search(b.content,b.threshold?
{limit:b.limit,threshold:b.threshold,where:b.where}:b.limit);self.postMessage({id:a,content:b.content,limit:b.limit,result:d})}else b.add?c.add(b.id,b.content):b.update?c.update(b.id,b.content):b.remove?c.remove(b.id):b.clear?c.clear():b.info?(b=c.info(),b.worker=a,console.log(b)):b.register&&(a=b.id,b.options.cache=!1,b.options.async=!1,b.options.worker=!1,c=(new Function(b.register.substring(b.register.indexOf("{")+1,b.register.lastIndexOf("}"))))(),c=new c(b.options))}}function Fa(a,c,b,d){a=q("flexsearch",
"id"+a,Ea,function(f){(f=f.data)&&f.result&&d(f.id,f.content,f.result,f.limit,f.where,f.cursor,f.suggest)},c);var e=Ca.toString();b.id=c;a.postMessage({register:e,options:b,id:c});return a}var Q={encode:"icase",g:"forward",split:/\W+/,cache:!1,async:!1,i:!1,G:!1,a:!1,c:9,threshold:0,depth:0},wa={memory:{encode:"extra",g:"strict",threshold:0,c:1},speed:{encode:"icase",g:"strict",threshold:1,c:3,depth:2},match:{encode:"extra",g:"full",threshold:1,c:3},score:{encode:"extra",g:"strict",threshold:1,c:9,
depth:4},balance:{encode:"balance",g:"strict",threshold:0,c:3,depth:3},fast:{encode:"icase",g:"strict",threshold:8,c:9,depth:1}},la=[],Da=0,xa={},ya={};r.create=function(a,c){return new r(a,c)};r.registerMatcher=function(a){for(var c in a)a.hasOwnProperty(c)&&la.push(l(c),a[c]);return this};r.registerEncoder=function(a,c){ia[a]=c.bind(ia);return this};r.registerLanguage=function(a,c){xa[a]=c.filter;ya[a]=c.stemmer;return this};r.encode=function(a,c){return ia[a](c)};r.prototype.init=function(a,c){this.h=
[];if(c){var b=c.preset;a=c}else a||(a=Q),b=a.preset;c={};T(a)?((c=wa[a])||console.warn("Preset not found: "+a),a={}):b&&((c=wa[b])||console.warn("Preset not found: "+b));if(b=a.worker)if("undefined"===typeof Worker)a.worker=!1,this.b=null;else{var d=parseInt(b,10)||4;this.w=-1;this.D=0;this.A=[];this.H=null;this.b=Array(d);for(var e=0;e<d;e++)this.b[e]=Fa(this.id,e,a,E.bind(this))}this.g=a.tokenize||c.g||this.g||Q.g;this.split=H(b=a.split)?this.split||Q.split:T(b)?l(b):b;this.G=a.rtl||this.G||Q.G;
this.async="undefined"===typeof Promise||H(b=a.async)?this.async||Q.async:b;this.i=H(b=a.worker)?this.i||Q.i:b;this.threshold=H(b=a.threshold)?c.threshold||this.threshold||Q.threshold:b;this.c=H(b=a.resolution)?b=c.c||this.c||Q.c:b;b<=this.threshold&&(this.c=this.threshold+1);this.depth="strict"!==this.g||H(b=a.depth)?c.depth||this.depth||Q.depth:b;this.j=(b=H(b=a.encode)?c.encode||Q.encode:b)&&ia[b]&&ia[b].bind(ia)||(da(b)?b:this.j||!1);(b=a.matcher)&&this.addMatcher(b);if(b=(c=a.lang)||a.filter){T(b)&&
(b=xa[b]);if(M(b)){d=this.j;e=G();for(var f=0;f<b.length;f++){var h=d?d(b[f]):b[f];e[h]=1}b=e}this.filter=b}if(b=c||a.stemmer){c=T(b)?ya[b]:b;d=this.j;e=[];for(var g in c)c.hasOwnProperty(g)&&(f=d?d(g):g,e.push(l(f+"($|\\W)"),d?d(c[g]):c[g]));this.stemmer=e}this.a=e=(b=a.doc)?K(b):this.a||Q.a;this.s=va(this.c-(this.threshold||0));this.o=G();this.f=G();if(e){this.v=G();a.doc=null;g=e.index={};c=e.keys=[];d=e.field;f=e.tag;h=e.store;M(e.id)||(e.id=e.id.split(":"));if(h){var k=G();if(T(h))k[h]=1;else if(M(h))for(var n=
0;n<h.length;n++)k[h[n]]=1;else P(h)&&(k=h);e.store=k}if(f){this.B=G();h=G();if(d)if(T(d))h[d]=a;else if(M(d))for(k=0;k<d.length;k++)h[d[k]]=a;else P(d)&&(h=d);M(f)||(e.tag=f=[f]);for(d=0;d<f.length;d++)this.B[f[d]]=G();this.I=f;d=h}if(d){if(!M(d))if(P(d)){var w=d;e.field=d=Object.keys(d)}else e.field=d=[d];for(e=0;e<d.length;e++)f=d[e],M(f)||(w&&(a=w[f]),c[e]=f,d[e]=f.split(":")),g[f]=new r(a)}a.doc=b}this.m=!0;this.u=(this.cache=b=H(b=a.cache)?this.cache||Q.cache:b)?new Ga(b):!1;return this};r.prototype.encode=
function(a){a&&(la.length&&(a=F(a,la)),this.h.length&&(a=F(a,this.h)),this.j&&(a=this.j(a)),this.stemmer&&(a=F(a,this.stemmer)));return a};r.prototype.addMatcher=function(a){var c=this.h,b;for(b in a)a.hasOwnProperty(b)&&c.push(l(b),a[b]);return this};r.prototype.add=function(a,c,b,d,e){if(this.a&&P(a))return this.l("add",a,c);if(c&&T(c)&&(a||0===a)){var f="@"+a;if(this.f[f]&&!d)return this.update(a,c);if(this.i)return++this.w>=this.b.length&&(this.w=0),this.b[this.w].postMessage({add:!0,id:a,content:c}),
this.f[f]=""+this.w,b&&b(),this;if(!e){if(this.async&&"function"!==typeof importScripts){var h=this;f=new Promise(function(Y){setTimeout(function(){h.add(a,c,null,d,!0);h=null;Y()})});if(b)f.then(b);else return f;return this}if(b)return this.add(a,c,null,d,!0),b(),this}c=this.encode(c);if(!c.length)return this;b=this.g;e=da(b)?b(c):c.split(this.split);this.filter&&(e=ba(e,this.filter));var g=G();g._ctx=G();for(var k=e.length,n=this.threshold,w=this.depth,z=this.c,v=this.s,p=this.G,t=0;t<k;t++){var D=
e[t];if(D){var B=D.length,C=(p?t+1:k-t)/k,A="";switch(b){case "reverse":case "both":for(var y=B;--y;)A=D[y]+A,I(v,g,A,a,p?1:(B-y)/B,C,n,z-1);A="";case "forward":for(y=0;y<B;y++)A+=D[y],I(v,g,A,a,p?(y+1)/B:1,C,n,z-1);break;case "full":for(y=0;y<B;y++)for(var J=(p?y+1:B-y)/B,R=B;R>y;R--)A=D.substring(y,R),I(v,g,A,a,J,C,n,z-1);break;default:if(B=I(v,g,D,a,1,C,n,z-1),w&&1<k&&B>=n)for(B=g._ctx[D]||(g._ctx[D]=G()),D=this.o[D]||(this.o[D]=va(z-(n||0))),C=t-w,A=t+w+1,0>C&&(C=0),A>k&&(A=k);C<A;C++)C!==t&&
I(D,B,e[C],a,0,z-(C<t?t-C:C-t),n,z-1)}}}this.f[f]=1;this.m=!1}return this};r.prototype.l=function(a,c,b){if(M(c)){var d=c.length;if(d--){for(var e=0;e<d;e++)this.l(a,c[e]);return this.l(a,c[d],b)}}else{var f=this.a.index,h=this.a.keys,g=this.a.tag;e=this.a.store;var k;var n=this.a.id;d=c;for(var w=0;w<n.length;w++)d=d[n[w]];if("remove"===a&&(delete this.v[d],n=h.length,n--)){for(c=0;c<n;c++)f[h[c]].remove(d);return f[h[n]].remove(d,b)}if(g){for(k=0;k<g.length;k++){var z=g[k];var v=c;n=z.split(":");
for(w=0;w<n.length;w++)v=v[n[w]];v="@"+v}k=this.B[z];k=k[v]||(k[v]=[])}n=this.a.field;g=0;for(z=n.length;g<z;g++){w=n[g];v=c;for(var p=0;p<w.length;p++)v=v[w[p]];w=f[h[g]];p="add"===a?w.add:w.update;g===z-1?p.call(w,d,v,b):p.call(w,d,v)}if(e){b=Object.keys(e);a=G();for(f=0;f<b.length;f++)if(h=b[f],e[h])for(h=h.split(":"),g=n=void 0,z=0;z<h.length;z++)v=h[z],n=(n||c)[v],g=(g||a)[v]=n;c=a}k&&(k[k.length]=c);this.v[d]=c}return this};r.prototype.update=function(a,c,b){if(this.a&&P(a))return this.l("update",
a,c);this.f["@"+a]&&T(c)&&(this.remove(a),this.add(a,c,b,!0));return this};r.prototype.remove=function(a,c,b){if(this.a&&P(a))return this.l("remove",a,c);var d="@"+a;if(this.f[d]){if(this.i)return this.b[this.f[d]].postMessage({remove:!0,id:a}),delete this.f[d],c&&c(),this;if(!b){if(this.async&&"function"!==typeof importScripts){var e=this;d=new Promise(function(f){setTimeout(function(){e.remove(a,null,!0);e=null;f()})});if(c)d.then(c);else return d;return this}if(c)return this.remove(a,null,!0),
c(),this}for(c=0;c<this.c-(this.threshold||0);c++)ca(this.s[c],a);this.depth&&ca(this.o,a);delete this.f[d];this.m=!1}return this};var X;r.prototype.search=function(a,c,b,d){if(P(c)){if(M(c))for(var e=0;e<c.length;e++)c[e].query=a;else c.query=a;a=c;c=1E3}else c&&da(c)?(b=c,c=1E3):c||0===c||(c=1E3);if(this.i){this.H=b;this.D=0;this.A=[];for(var f=0;f<this.i;f++)this.b[f].postMessage({search:!0,limit:c,content:a})}else{var h=[],g=a;if(P(a)&&!M(a)){b||(b=a.callback)&&(g.callback=null);var k=a.sort;
var n=a.page;c=a.limit;f=a.threshold;var w=a.suggest;a=a.query}if(this.a){f=this.a.index;var z=g.where,v=g.bool||"or",p=g.field,t=v,D,B;if(p)M(p)||(p=[p]);else if(M(g)){var C=g;p=[];t=[];for(var A=0;A<g.length;A++)d=g[A],e=d.bool||v,p[A]=d.field,t[A]=e,"not"===e?D=!0:"and"===e&&(B=!0)}else p=this.a.keys;v=p.length;for(A=0;A<v;A++)C&&(g=C[A]),n&&!T(g)&&(g.page=null,g.limit=0),h[A]=f[p[A]].search(g,0);if(b)return b(m.call(this,a,t,h,k,c,w,z,n,B,D));if(this.async){var y=this;return new Promise(function(oa){Promise.all(h).then(function(Ha){oa(m.call(y,
a,t,Ha,k,c,w,z,n,B,D))})})}return m.call(this,a,t,h,k,c,w,z,n,B,D)}f||(f=this.threshold||0);if(!d){if(this.async&&"function"!==typeof importScripts){var J=this;f=new Promise(function(oa){setTimeout(function(){oa(J.search(g,c,null,!0));J=null})});if(b)f.then(b);else return f;return this}if(b)return b(this.search(g,c,null,!0)),this}if(!a||!T(a))return h;g=a;if(this.cache)if(this.m){if(b=this.u.get(a))return b}else this.u.clear(),this.m=!0;g=this.encode(g);if(!g.length)return h;b=this.g;b=da(b)?b(g):
g.split(this.split);this.filter&&(b=ba(b,this.filter));C=b.length;d=!0;e=[];var R=G(),Y=0;1<C&&(this.depth&&"strict"===this.g?v=!0:b.sort(W));if(!v||(A=this.o))for(var ha=this.c;Y<C;Y++){var N=b[Y];if(N){if(v){if(!p)if(A[N])p=N,R[N]=1;else if(!w)return h;if(w&&Y===C-1&&!e.length)v=!1,N=p||N,R[N]=0;else if(!p)continue}if(!R[N]){var O=[],aa=!1,U=0,V=v?A[p]:this.s;if(V)for(var ea=void 0,S=0;S<ha-f;S++)if(ea=V[S]&&V[S][N])O[U++]=ea,aa=!0;if(aa)p=N,e[e.length]=1<U?O.concat.apply([],O):O[0];else if(!w){d=
!1;break}R[N]=1}}}else d=!1;d&&(h=ua(e,c,n,w));this.cache&&this.u.set(a,h);return h}};r.prototype.find=function(a,c){return this.where(a,c,1)[0]||null};r.prototype.where=function(a,c,b,d){var e=this.v,f=[],h=0,g;if(P(a)){b||(b=c);var k=Object.keys(a);var n=k.length;var w=!1;if(1===n&&"id"===k[0])return[e[a.id]];if((g=this.I)&&!d)for(var z=0;z<g.length;z++){var v=g[z],p=a[v];if(!H(p)){var t=this.B[v]["@"+p];if(0===--n)return t;k.splice(k.indexOf(v),1);delete a[v];break}}g=Array(n);for(z=0;z<n;z++)g[z]=
k[z].split(":")}else{if(da(a)){c=d||Object.keys(e);b=c.length;for(k=0;k<b;k++)n=e[c[k]],a(n)&&(f[h++]=n);return f}if(H(c))return[e[a]];if("id"===a)return[e[c]];k=[a];n=1;g=[a.split(":")];w=!0}d=t||d||Object.keys(e);z=d.length;for(v=0;v<z;v++){p=t?d[v]:e[d[v]];for(var D=!0,B=0;B<n;B++){w||(c=a[k[B]]);var C=g[B],A=C.length,y=p;if(1<A)for(var J=0;J<A;J++)y=y[C[J]];else y=y[C[0]];if(y!==c){D=!1;break}}if(D&&(f[h++]=p,b&&h===b))break}return f};r.prototype.info=function(){if(this.i)for(var a=0;a<this.i;a++)this.b[a].postMessage({info:!0,
id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.C?this.cache.C.length:!1,matcher:la.length+(this.h?this.h.length:0),worker:this.i,threshold:this.threshold,depth:this.depth,resolution:this.c,contextual:this.depth&&"strict"===this.g}};r.prototype.clear=function(){return this.destroy().init()};r.prototype.destroy=function(){this.cache&&(this.u.clear(),this.u=null);this.s=this.o=this.f=null;if(this.a){for(var a=this.a.keys,c=0;c<a.length;c++)this.a.index[a[c]].destroy();
this.a=this.v=null}return this};r.prototype.export=function(a){var c=!a||H(a.serialize)||a.serialize;if(this.a){var b=!a||H(a.doc)||a.doc,d=!a||H(a.index)||a.index;a=[];var e=0;if(d)for(d=this.a.keys;e<d.length;e++){var f=this.a.index[d[e]];a[e]=[f.s,f.o,Object.keys(f.f)]}b&&(a[e]=this.v)}else a=[this.s,this.o,Object.keys(this.f)];c&&(a=JSON.stringify(a));return a};r.prototype.import=function(a,c){if(!c||H(c.serialize)||c.serialize)a=JSON.parse(a);var b=G();if(this.a){var d=!c||H(c.doc)||c.doc,e=
0;if(!c||H(c.index)||c.index){c=this.a.keys;for(var f=c.length,h=a[0][2];e<h.length;e++)b[h[e]]=1;for(e=0;e<f;e++){h=this.a.index[c[e]];var g=a[e];g&&(h.s=g[0],h.o=g[1],h.f=b)}}d&&(this.v=P(d)?d:a[e])}else{d=a[2];for(e=0;e<d.length;e++)b[d[e]]=1;this.s=a[0];this.o=a[1];this.f=b}};var Ia=function(){var a=l("\\s+"),c=l("[^a-z0-9 ]"),b=[l("[-/]")," ",c,"",a," "];return function(d){return L(F(d.toLowerCase(),b))}}(),ia={icase:function(a){return a.toLowerCase()},simple:function(){var a=l("\\s+"),c=l("[^a-z0-9 ]"),
b=l("[-/]"),d=l("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"),e=l("[\u00e8\u00e9\u00ea\u00eb]"),f=l("[\u00ec\u00ed\u00ee\u00ef]"),h=l("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"),g=l("[\u00f9\u00fa\u00fb\u00fc\u0171]"),k=l("[\u00fd\u0177\u00ff]"),n=l("\u00f1"),w=l("[\u00e7c]"),z=l("\u00df"),v=l(" & "),p=[d,"a",e,"e",f,"i",h,"o",g,"u",k,"y",n,"n",w,"k",z,"s",v," and ",b," ",c,"",a," "];return function(t){t=F(t.toLowerCase(),p);return" "===t?"":t}}(),advanced:function(){var a=l("ae"),c=l("ai"),b=l("ay"),d=
l("ey"),e=l("oe"),f=l("ue"),h=l("ie"),g=l("sz"),k=l("zs"),n=l("ck"),w=l("cc"),z=l("sh"),v=l("th"),p=l("dt"),t=l("ph"),D=l("pf"),B=l("ou"),C=l("uo"),A=[a,"a",c,"ei",b,"ei",d,"ei",e,"o",f,"u",h,"i",g,"s",k,"s",z,"s",n,"k",w,"k",v,"t",p,"t",t,"f",D,"f",B,"o",C,"u"];return function(y,J){if(!y)return y;y=this.simple(y);2<y.length&&(y=F(y,A));J||1<y.length&&(y=L(y));return y}}(),extra:function(){var a=l("p"),c=l("z"),b=l("[cgq]"),d=l("n"),e=l("d"),f=l("[vw]"),h=l("[aeiouy]"),g=[a,"b",c,"s",b,"k",d,"m",
e,"t",f,"f",h,""];return function(k){if(!k)return k;k=this.advanced(k,!0);if(1<k.length){k=k.split(" ");for(var n=0;n<k.length;n++){var w=k[n];1<w.length&&(k[n]=w[0]+F(w.substring(1),g))}k=k.join(" ");k=L(k)}return k}}(),balance:Ia},Ga=function(){function a(c){this.clear();this.J=!0!==c&&c}a.prototype.clear=function(){this.cache=G();this.count=G();this.index=G();this.C=[]};a.prototype.set=function(c,b){if(this.J&&H(this.cache[c])){var d=this.C.length;if(d===this.J){d--;var e=this.C[d];delete this.cache[e];
delete this.count[e];delete this.index[e]}this.index[c]=d;this.C[d]=c;this.count[c]=-1;this.cache[c]=b;this.get(c)}else this.cache[c]=b};a.prototype.get=function(c){var b=this.cache[c];if(this.J&&b){var d=++this.count[c],e=this.index,f=e[c];if(0<f){for(var h=this.C,g=f;this.count[h[--f]]<=d&&-1!==f;);f++;if(f!==g){for(d=g;d>f;d--)g=h[d-1],h[d]=g,e[g]=d;h[f]=c;e[c]=f}}}return b};return a}();return r}(function(){var q={},u="undefined"!==typeof Blob&&"undefined"!==typeof URL&&URL.createObjectURL;return function(r,
E,K,ba,m){K=u?URL.createObjectURL(new Blob(["("+K.toString()+")()"],{type:"text/javascript"})):r+".es5.js";r+="-"+E;q[r]||(q[r]=[]);q[r][m]=new Worker(K);q[r][m].onmessage=ba;console.log("Register Worker: "+r+"@"+m);return q[r][m]}}()),this);