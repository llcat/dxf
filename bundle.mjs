function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],a=!0,t=!1,o=void 0
try{for(var f,l=r[Symbol.iterator]();!(a=(f=l.next()).done)&&(e.push(f.value),!n||e.length!==n);a=!0);}catch(r){t=!0,o=r}finally{try{a||null==l.return||l.return()}finally{if(t)throw o}}return e}}(r,e)||n(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(r,n){if(r){if("string"==typeof r)return e(r,n)
var a=Object.prototype.toString.call(r).slice(8,-1)
return"Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a?Array.from(r):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?e(r,n):void 0}}function e(r,n){(null==n||n>r.length)&&(n=r.length)
for(var e=0,a=new Array(n);e<n;e++)a[e]=r[e]
return a}function a(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=n(r))){var e=0,a=function(){}
return{s:a,n:function(){return e>=r.length?{done:!0}:{done:!1,value:r[e++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,o,f=!0,l=!1
return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next()
return f=r.done,r},e:function(r){l=!0,o=r},f:function(){try{f||null==t.return||t.return()}finally{if(l)throw o}}}}var t=function(r,n){if(r){var e,t=a(r)
try{for(t.s();!(e=t.n()).done;){var o=e.value
if(o[0]===n)return o[1]}}catch(r){t.e(r)}finally{t.f()}}},o=function(){return Object.create(null)},f=function(r,n){switch(r){default:var e,f=[],l=[],c=a(n)
try{for(c.s();!(e=c.n()).done;){var u=e.value
0===u[0]&&f.push(l=[]),l.push(u)}}catch(r){c.e(r)}finally{c.f()}return f
case"HEADER":var i,v=o(),s=[],y=a(n)
try{for(y.s();!(i=y.n()).done;){var d=i.value
9===d[0]?v[d[1]]=s=[]:s.push(d)}}catch(r){y.e(r)}finally{y.f()}return v
case"CLASSES":var h,p=o(),A=[],b=a(n)
try{for(b.s();!(h=b.n()).done;){var S=h.value
0===S[0]?A=[]:1===S[0]?p[S[1]]=A:A.push(S)}}catch(r){b.e(r)}finally{b.f()}return p
case"TABLES":var E,m=o(),C=[],g=[],D=a(n)
try{for(D.s();!(E=D.n()).done;){var O=E.value
0===O[0]?(g=[],"TABLE"===O[1]?C=[g]:"ENDTAB"!==O[1]&&C.push(g)):2===O[0]&&"TABLE"===t(g,0)&&(m[O[1]]=C),g.push(O)}}catch(r){D.e(r)}finally{D.f()}return m
case"BLOCKS":var T,w=o(),I=[],B=[],L=a(n)
try{for(L.s();!(T=L.n()).done;){var x=T.value
0===x[0]?(B=[],"BLOCK"===x[1]?I=[B]:I.push(B)):2===x[0]&&"BLOCK"===t(B,0)&&(w[x[1]]=I),B.push(x)}}catch(r){L.e(r)}finally{L.f()}return w
case"OBJECTS":var j,k=[],N=[],K=a(n)
try{for(K.s();!(j=K.n()).done;){var R=j.value
0===R[0]&&k.push(N=[]),N.push(R)}}catch(r){K.e(r)}finally{K.f()}return k
case"ACDSDATA":var H,$=[],G=[$],J=[G],M=a(n)
try{for(M.s();!(H=M.n()).done;){var _=H.value
0===_[0]?(J.push(G=[]),G.push($=[])):2===_[0]&&G.push($=[]),$.push(_)}}catch(r){M.e(r)}finally{M.f()}return J}}
function l(r){for(var n=r.split(/\r\n|\r|\n/),e=Math.floor(n.length/2),a=Array(e),t=0;t<e;t++)a[t]=[parseInt(n[t+t],10),n[t+t+1]]
return a}function c(r){for(var n=[],e=1;e<r.length;e++)if(0===r[e-1][0]&&"SECTION"===r[e-1][1]&&2===r[e][0]){for(var a=e;++e<r.length&&(0!==r[e][0]||"ENDSEC"!==r[e][1]););n.push({name:r[a][1],startIndex:a+1,endIndex:e})}return n}var u=function(r){var n,e=Object.create(null),t=l(r),o=a(c(t))
try{for(o.s();!(n=o.n()).done;){var u=n.value,i=u.name,v=u.startIndex,s=u.endIndex
e[i]=f(i,t.slice(v,s))}}catch(r){o.e(r)}finally{o.f()}return e},i={cp874:"dos-874",cp932:"ms932",cp936:"gbk",cp949:"windows-949",cp950:"csbig5",cp1361:"johab","mac-roman":"mac"},v={ja:"ms932"},s=function r(n,e){var o,s=null==e?void 0:e.encoding,y=new TextDecoder(s?(o=s.trim().toLowerCase().replace(/^dos|^ansi_/,"cp").replace(/^iso8859_/,"iso8859-"),i[o]||o):void 0).decode(n)
if(!s){var d,h,p=function(r,n){var e,t=l(r),o=a(c(t))
try{for(o.s();!(e=o.n()).done;){var u=e.value,i=u.name,v=u.startIndex,s=u.endIndex
if("HEADER"===i)return f(i,t.slice(v,s))}}catch(r){o.e(r)}finally{o.f()}}(y),A=t(null==p?void 0:p.$ACADVER,1)
if(!A||A<"AC1021")return r(n,{encoding:null!==(d=null!==(h=t(null==p?void 0:p.$DWGCODEPAGE,3))&&void 0!==h?h:v[navigator.language])&&void 0!==d?d:"cp1252"})}return u(y)},y=function(n,e){var t,o=a(e)
try{for(o.s();!(t=o.n()).done;){var f=r(t.value,2),l=f[0],c=f[1]
n+=l,n+="\n",n+=c,n+="\n"}}catch(r){o.e(r)}finally{o.f()}return n},d=function(n){var e=""
for(var t in n){e+="0\nSECTION\n2\n",e+=t,e+="\n"
var o=n[t]
switch(t){default:var f,l=a(o)
try{for(l.s();!(f=l.n()).done;){var c=f.value
e=y(e,c)}}catch(r){l.e(r)}finally{l.f()}break
case"HEADER":for(var u in o){e+="9\n",e+=u,e+="\n"
var i,v=a(o[u])
try{for(v.s();!(i=v.n()).done;){var s=r(i.value,2),d=s[0],h=s[1]
e+=d,e+="\n",e+=h,e+="\n"}}catch(r){v.e(r)}finally{v.f()}}break
case"CLASSES":for(var p in o){e+="0\nCLASS\n1\n",e+=p,e+="\n"
var A,b=a(o[p])
try{for(b.s();!(A=b.n()).done;){var S=r(A.value,2),E=S[0],m=S[1]
0!==E&&(e+=E,e+="\n",e+=m,e+="\n")}}catch(r){b.e(r)}finally{b.f()}}break
case"TABLES":for(var C in o){var g,D=a(o[C])
try{for(D.s();!(g=D.n()).done;){var O=g.value
e=y(e,O)}}catch(r){D.e(r)}finally{D.f()}e+="0\nENDTAB\n"}break
case"BLOCKS":for(var T in o){var w,I=a(o[T])
try{for(I.s();!(w=I.n()).done;){var B=w.value
e=y(e,B)}}catch(r){I.e(r)}finally{I.f()}}break
case"OBJECTS":var L,x=a(o)
try{for(x.s();!(L=x.n()).done;){var j,k=a(L.value)
try{for(k.s();!(j=k.n()).done;){var N=r(j.value,2),K=N[0],R=N[1]
e+=K,e+="\n",e+=R,e+="\n"}}catch(r){k.e(r)}finally{k.f()}}}catch(r){x.e(r)}finally{x.f()}break
case"ACDSDATA":var H,$=a(o)
try{for($.s();!(H=$.n()).done;){var G,J=a(H.value)
try{for(J.s();!(G=J.n()).done;){var M=G.value
e=y(e,M)}}catch(r){J.e(r)}finally{J.f()}}}catch(r){$.e(r)}finally{$.f()}}e+="0\nENDSEC\n"}return e+"0\nEOF\n"},h=function(r,n){var e=[]
if(r){var t,o=a(r)
try{for(o.s();!(t=o.n()).done;){var f=t.value
f[0]===n&&e.push(f[1])}}catch(r){o.e(r)}finally{o.f()}}return e}
export{d as createDxfFileString,t as getGroupCodeValue,h as getGroupCodeValues,s as parseDxfFileArrayBuffer,u as parseDxfFileString}