"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var q=c(function(D,p){
function E(e,r,t,u,s,i,v,n){var f,o,x,l,a;if(e<=0)return i;for(r<0&&(r=0),a=r%e,a>0&&(a=e-a),x=e+r,f=s+a*u,o=n,l=0;l<x;l++)i[o]=t[f],o+=v,a+=1,a===e?(a=0,f=s):f+=u;return i}p.exports=E
});var C=c(function(F,j){
var y=require('@stdlib/strided-base-stride2offset/dist'),M=q();function O(e,r,t,u,s,i){var v,n;return r<0&&(r=0),v=y(e,u),n=y(e+r,i),M(e,r,t,u,v,s,i,n)}j.exports=O
});var R=c(function(G,m){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=C(),g=q();b(P,"ndarray",g);m.exports=P
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),d,_=w(h(__dirname,"./native.js"));z(_)?d=A:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
