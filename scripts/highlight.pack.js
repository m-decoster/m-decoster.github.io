/*
  Highlight.js 10.3.2 (31e1fc40)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(n){Object.freeze(n)
;var t="function"==typeof n
;return Object.getOwnPropertyNames(n).forEach((function(r){
!Object.hasOwnProperty.call(n,r)||null===n[r]||"object"!=typeof n[r]&&"function"!=typeof n[r]||t&&("caller"===r||"callee"===r||"arguments"===r)||Object.isFrozen(n[r])||e(n[r])
})),n}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
ignoreMatch(){this.ignore=!0}}function t(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function r(e,...n){var t={};for(const n in e)t[n]=e[n]
;return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}function a(e){
return e.nodeName.toLowerCase()}var i=Object.freeze({__proto__:null,
escapeHTML:t,inherit:r,nodeStream:function(e){var n=[];return function e(t,r){
for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({
event:"start",offset:r,node:i}),r=e(i,r),a(i).match(/br|hr|img|input/)||n.push({
event:"stop",offset:r,node:i}));return r}(e,0),n},mergeStreams:function(e,n,r){
var i=0,s="",o=[];function l(){
return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n
}function c(e){s+="<"+a(e)+[].map.call(e.attributes,(function(e){
return" "+e.nodeName+'="'+t(e.value)+'"'})).join("")+">"}function u(e){
s+="</"+a(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}
for(;e.length||n.length;){var d=l()
;if(s+=t(r.substring(i,d[0].offset)),i=d[0].offset,d===e){o.reverse().forEach(u)
;do{g(d.splice(0,1)[0]),d=l()}while(d===e&&d.length&&d[0].offset===i)
;o.reverse().forEach(c)
}else"start"===d[0].event?o.push(d[0].node):o.pop(),g(d.splice(0,1)[0])}
return s+t(r.substr(i))}});const s=e=>!!e.kind;class o{constructor(e,n){
this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
this.buffer+=t(e)}openNode(e){if(!s(e))return;let n=e.kind
;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){
s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const n={kind:e,children:[]}
;this.add(n),this.stack.push(n)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root
;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){
return new o(this,this.options).value()}finalize(){return!0}}function u(e){
return e?"string"==typeof e?e:e.source:null}
const g="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",h="\\b\\d+(\\.\\d+)?",f="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={
begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",
illegal:"\\n",contains:[m]},v={className:"string",begin:'"',end:'"',
illegal:"\\n",contains:[m]},x={
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},E=function(e,n,t={}){var a=r({className:"comment",begin:e,end:n,contains:[]
},t);return a.contains.push(x),a.contains.push({className:"doctag",
begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a
},_=E("//","$"),w=E("/\\*","\\*/"),N=E("#","$");var y=Object.freeze({
__proto__:null,IDENT_RE:g,UNDERSCORE_IDENT_RE:d,NUMBER_RE:h,C_NUMBER_RE:f,
BINARY_NUMBER_RE:p,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){
return e.map((e=>u(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),r({
className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{
0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:b,
QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:x,COMMENT:E,C_LINE_COMMENT_MODE:_,
C_BLOCK_COMMENT_MODE:w,HASH_COMMENT_MODE:N,NUMBER_MODE:{className:"number",
begin:h,relevance:0},C_NUMBER_MODE:{className:"number",begin:f,relevance:0},
BINARY_NUMBER_MODE:{className:"number",begin:p,relevance:0},CSS_NUMBER_MODE:{
className:"number",
begin:h+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,
relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:g,relevance:0
},UNDERSCORE_TITLE_MODE:{className:"title",begin:d,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){
return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},
"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}
}),R="of and for in not or if then".split(" ");function k(e){function n(n,t){
return RegExp(u(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{
constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,n){
n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
this.matchAt+=function(e){return RegExp(e.toString()+"|").exec("").length-1
}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,n="|"){
for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){
var s=r+=1,o=u(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o)
;if(null==l){a+=o;break}
a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),
"\\"===l[0][0]&&l[1]?a+="\\"+(Number(l[1])+s):(a+=l[0],"("===l[0]&&r++)}a+=")"}
return a}(e),!0),this.lastIndex=0}exec(e){
this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e)
;if(!n)return null
;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),r=this.matchIndexes[t]
;return n.splice(0,t),Object.assign(n,r)}}class a{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
;let t=n.exec(e)
;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
return t&&(this.regexIndex+=t.position+1,
this.regexIndex===this.count&&this.considerAll()),t}}function i(e,n){
const t=e.input[e.index-1],r=e.input[e.index+e[0].length]
;"."!==t&&"."!==r||n.ignoreMatch()}
if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return function t(s,o){const l=s;if(s.compiled)return l
;s.compiled=!0,s.__beforeBegin=null,s.keywords=s.keywords||s.beginKeywords
;let c=null
;if("object"==typeof s.keywords&&(c=s.keywords.$pattern,delete s.keywords.$pattern),
s.keywords&&(s.keywords=function(e,n){var t={}
;return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){
r(n,e[n])})),t;function r(e,r){
n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){var r=n.split("|")
;t[r[0]]=[e,O(r[0],r[1])]}))}
}(s.keywords,e.case_insensitive)),s.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
;return l.keywordPatternRe=n(s.lexemes||c||/\w+/,!0),
o&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",
s.__beforeBegin=i),
s.begin||(s.begin=/\B|\b/),l.beginRe=n(s.begin),s.endSameAsBegin&&(s.end=s.begin),
s.end||s.endsWithParent||(s.end=/\B|\b/),
s.end&&(l.endRe=n(s.end)),l.terminator_end=u(s.end)||"",
s.endsWithParent&&o.terminator_end&&(l.terminator_end+=(s.end?"|":"")+o.terminator_end)),
s.illegal&&(l.illegalRe=n(s.illegal)),
void 0===s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),
s.contains=[].concat(...s.contains.map((function(e){return function(e){
return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){
return r(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:M(e)?r(e,{
starts:e.starts?r(e.starts):null}):Object.isFrozen(e)?r(e):e}("self"===e?s:e)
}))),s.contains.forEach((function(e){t(e,l)
})),s.starts&&t(s.starts,o),l.matcher=function(e){const n=new a
;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"
}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(l),l}(e)}function M(e){
return!!e&&(e.endsWithParent||M(e.starts))}function O(e,n){
return n?Number(n):function(e){return R.includes(e.toLowerCase())}(e)?0:1}
const L={props:["language","code","autodetect"],data:function(){return{
detectedLanguage:"",unknownLanguage:!1}},computed:{className(){
return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
if(!this.autoDetect&&!hljs.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
this.unknownLanguage=!0,t(this.code);let e
;return this.autoDetect?(e=hljs.highlightAuto(this.code),
this.detectedLanguage=e.language):(e=hljs.highlight(this.language,this.code,this.ignoreIllegals),
this.detectectLanguage=this.language),e.value},autoDetect(){
return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
class:this.className,domProps:{innerHTML:this.highlighted}})])}},j={install(e){
e.component("highlightjs",L)}
},I=t,T=r,{nodeStream:S,mergeStreams:A}=i,B=Symbol("nomatch")
;return function(t){
var r=[],a=Object.create(null),i=Object.create(null),s=[],o=!0,l=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?"
;const g={disableAutodetect:!0,name:"Plain text",contains:[]};var d={
noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
tabReplace:null,useBR:!1,languages:null,__emitter:c};function h(e){
return d.noHighlightRe.test(e)}function f(e,n,t,r){var a={code:n,language:e}
;N("before:highlight",a);var i=a.result?a.result:p(a.language,a.code,t,r)
;return i.code=a.code,N("after:highlight",i),i}function p(e,t,r,i){var s=t
;function l(e,n){var t=_.case_insensitive?n[0].toLowerCase():n[0]
;return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}
function c(){null!=y.subLanguage?function(){if(""!==O){var e=null
;if("string"==typeof y.subLanguage){
if(!a[y.subLanguage])return void M.addText(O)
;e=p(y.subLanguage,O,!0,R[y.subLanguage]),R[y.subLanguage]=e.top
}else e=m(O,y.subLanguage.length?y.subLanguage:null)
;y.relevance>0&&(L+=e.relevance),M.addSublanguage(e.emitter,e.language)}
}():function(){if(!y.keywords)return void M.addText(O);let e=0
;y.keywordPatternRe.lastIndex=0;let n=y.keywordPatternRe.exec(O),t="";for(;n;){
t+=O.substring(e,n.index);const r=l(y,n);if(r){const[e,a]=r
;M.addText(t),t="",L+=a,M.addKeyword(n[0],e)}else t+=n[0]
;e=y.keywordPatternRe.lastIndex,n=y.keywordPatternRe.exec(O)}
t+=O.substr(e),M.addText(t)}(),O=""}function g(e){
return e.className&&M.openNode(e.className),y=Object.create(e,{parent:{value:y}
})}function h(e,t,r){let a=function(e,n){var t=e&&e.exec(n)
;return t&&0===t.index}(e.endRe,r);if(a){if(e["on:end"]){const r=new n(e)
;e["on:end"](t,r),r.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent
;return e}}if(e.endsWithParent)return h(e.parent,t,r)}function f(e){
return 0===y.matcher.regexIndex?(O+=e[0],1):(S=!0,0)}function b(e){
var n=e[0],t=s.substr(e.index),r=h(y,e,t);if(!r)return B;var a=y
;a.skip?O+=n:(a.returnEnd||a.excludeEnd||(O+=n),c(),a.excludeEnd&&(O=n));do{
y.className&&M.closeNode(),y.skip||y.subLanguage||(L+=y.relevance),y=y.parent
}while(y!==r.parent)
;return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),
g(r.starts)),a.returnEnd?0:n.length}var v={};function x(t,a){var i=a&&a[0]
;if(O+=t,null==i)return c(),0
;if("begin"===v.type&&"end"===a.type&&v.index===a.index&&""===i){
if(O+=s.slice(a.index,a.index+1),!o){const n=Error("0 width match regex")
;throw n.languageName=e,n.badRule=v.rule,n}return 1}
if(v=a,"begin"===a.type)return function(e){var t=e[0],r=e.rule
;const a=new n(r),i=[r.__beforeBegin,r["on:begin"]]
;for(const n of i)if(n&&(n(e,a),a.ignore))return f(t)
;return r&&r.endSameAsBegin&&(r.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
r.skip?O+=t:(r.excludeBegin&&(O+=t),
c(),r.returnBegin||r.excludeBegin||(O=t)),g(r),r.returnBegin?0:t.length}(a)
;if("illegal"===a.type&&!r){
const e=Error('Illegal lexeme "'+i+'" for mode "'+(y.className||"<unnamed>")+'"')
;throw e.mode=y,e}if("end"===a.type){var l=b(a);if(l!==B)return l}
if("illegal"===a.type&&""===i)return 1
;if(T>1e5&&T>3*a.index)throw Error("potential infinite loop, way more iterations than matches")
;return O+=i,i.length}var _=E(e)
;if(!_)throw console.error(u.replace("{}",e)),Error('Unknown language: "'+e+'"')
;var w=k(_),N="",y=i||w,R={},M=new d.__emitter(d);!function(){
for(var e=[],n=y;n!==_;n=n.parent)n.className&&e.unshift(n.className)
;e.forEach((e=>M.openNode(e)))}();var O="",L=0,j=0,T=0,S=!1;try{
for(y.matcher.considerAll();;){
T++,S?S=!1:y.matcher.considerAll(),y.matcher.lastIndex=j
;const e=y.matcher.exec(s);if(!e)break;const n=x(s.substring(j,e.index),e)
;j=e.index+n}return x(s.substr(j)),M.closeAllNodes(),M.finalize(),N=M.toHTML(),{
relevance:L,value:N,language:e,illegal:!1,emitter:M,top:y}}catch(n){
if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{
msg:n.message,context:s.slice(j-100,j+100),mode:n.mode},sofar:N,relevance:0,
value:I(s),emitter:M};if(o)return{illegal:!1,relevance:0,value:I(s),emitter:M,
language:e,top:y,errorRaised:n};throw n}}function m(e,n){
n=n||d.languages||Object.keys(a);var t=function(e){const n={relevance:0,
emitter:new d.__emitter(d),value:I(e),illegal:!1,top:g}
;return n.emitter.addText(e),n}(e),r=t
;return n.filter(E).filter(w).forEach((function(n){var a=p(n,e,!1);a.language=n,
a.relevance>r.relevance&&(r=a),a.relevance>t.relevance&&(r=t,t=a)
})),r.language&&(t.second_best=r),t}function b(e){
return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e
}function v(e){let n=null;const t=function(e){var n=e.className+" "
;n+=e.parentNode?e.parentNode.className:"";const t=d.languageDetectRe.exec(n)
;if(t){var r=E(t[1])
;return r||(console.warn(u.replace("{}",t[1])),console.warn("Falling back to no-highlight mode for this block.",e)),
r?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>h(e)||E(e)))}(e)
;if(h(t))return;N("before:highlightBlock",{block:e,language:t
}),d.useBR?(n=document.createElement("div"),
n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):n=e
;const r=n.textContent,a=t?f(t,r,!0):m(r),s=S(n);if(s.length){
const e=document.createElement("div");e.innerHTML=a.value,a.value=A(s,S(e),r)}
a.value=b(a.value),N("after:highlightBlock",{block:e,result:a
}),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?i[n]:t,a=[e.trim()]
;return e.match(/\bhljs\b/)||a.push("hljs"),
e.includes(r)||a.push(r),a.join(" ").trim()
}(e.className,t,a.language),e.result={language:a.language,re:a.relevance,
relavance:a.relevance},a.second_best&&(e.second_best={
language:a.second_best.language,re:a.second_best.relevance,
relavance:a.second_best.relevance})}const x=()=>{if(!x.called){x.called=!0
;var e=document.querySelectorAll("pre code");r.forEach.call(e,v)}}
;function E(e){return e=(e||"").toLowerCase(),a[e]||a[i[e]]}
function _(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e]=n
}))}function w(e){var n=E(e);return n&&!n.disableAutodetect}function N(e,n){
var t=e;s.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(t,{highlight:f,
highlightAuto:m,fixMarkup:function(e){
return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),
b(e)},highlightBlock:v,configure:function(e){
e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),
console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),
d=T(d,e)},initHighlighting:x,initHighlightingOnLoad:function(){
window.addEventListener("DOMContentLoaded",x,!1)},
registerLanguage:function(e,n){var r=null;try{r=n(t)}catch(n){
if(console.error("Language definition for '{}' could not be registered.".replace("{}",e)),
!o)throw n;console.error(n),r=g}
r.name||(r.name=e),a[e]=r,r.rawDefinition=n.bind(null,t),
r.aliases&&_(r.aliases,{languageName:e})},listLanguages:function(){
return Object.keys(a)},getLanguage:E,registerAliases:_,
requireLanguage:function(e){var n=E(e);if(n)return n
;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
autoDetection:w,inherit:T,addPlugin:function(e){s.push(e)},vuePlugin:j
}),t.debugMode=function(){o=!1},t.safeMode=function(){o=!0
},t.versionString="10.3.2";for(const n in y)"object"==typeof y[n]&&e(y[n])
;return Object.assign(t,y),t}({})}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("python",function(){"use strict";return function(e){
const n={
keyword:"and as assert async await break class continue def del elif else except finally for  from global if import in is lambda nonlocal|10 not or pass raise return try while with yield",
built_in:"__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
literal:"__debug__ Ellipsis False None NotImplemented True"},a={
className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,
end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,i,s]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,i,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,i,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t={
className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{
begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},l={
className:"params",variants:[{begin:/\(\s*\)/,skip:!0,className:null},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
contains:["self",a,t,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,t,a],{
name:"Python",aliases:["py","gyp","ipython"],keywords:n,
illegal:/(<\/|->|\?)|=>/,contains:[a,t,{beginKeywords:"if",relevance:0
},r,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{
className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,
contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,
keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{
begin:/\b(print|exec)\(/}]}}}());hljs.registerLanguage("javascript",function(){"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;function r(e){return i("(?=",e,")")}function t(e){return i("(",e,")?")}
function i(...e){return e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}
return function(c){const o=e,l={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
const a=e[0].replace("<","</");return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()):n.ignoreMatch()}},g={$pattern:e,keyword:n.join(" "),
literal:a.join(" "),built_in:s.join(" ")
},d=(e,n)=>`\\b0[${e}][${n}]([${n}_]*[${n}])?n?`,b=/[1-9]([0-9_]*\d)?/,E=/\d([0-9_]*\d)?/,u=i(/[eE][+-]?/,E),_={
className:"number",variants:[{begin:d("bB","01")},{begin:d("oO","0-7")},{
begin:d("xX","0-9a-fA-F")},{begin:i(/\b/,b,"n")},{begin:i(/(\b0)?\./,E,t(u))},{
begin:i(/\b/,b,t(i(/\./,t(E))),t(u))},{begin:/\b0[\.n]?/}],relevance:0},m={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},N={
begin:"html`",end:"",starts:{end:"`",returnEnd:!1,
contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},y={begin:"css`",end:"",
starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,m],subLanguage:"css"}
},f={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,m]},A={
className:"comment",variants:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,
contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",
begin:"\\{",end:"\\}",relevance:0},{className:"variable",
begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,
relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]
},p=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,_,c.REGEXP_MODE]
;m.contains=p.concat({begin:/{/,end:/}/,keywords:g,contains:["self"].concat(p)})
;const O=[].concat(A,m.contains),T=O.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(O)}]),R={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T};return{name:"Javascript",
aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:T},
illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",
relevance:5}),{label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,N,y,f,A,_,{
begin:i(/[{,\n]\s*/,r(i(/(\/\/.*$)*/,/(\/\*(.|\n)*\*\/)*/,/\s*/,o+"\\s*:"))),
relevance:0,contains:[{className:"attr",begin:o+r("\\s*:"),relevance:0}]},{
begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",contains:[A,c.REGEXP_MODE,{className:"function",
begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",
returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
begin:c.UNDERSCORE_IDENT_RE},{className:null,begin:/\(\s*\)/,skip:!0},{
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:T}]}]},{
begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{
begin:"<>",end:"</>"},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],
subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]
}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,
excludeEnd:!0,keywords:g,contains:["self",c.inherit(c.TITLE_MODE,{begin:o}),R],
illegal:/%/},{className:"function",
begin:c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*{",
returnBegin:!0,contains:[R,c.inherit(c.TITLE_MODE,{begin:o})]},{variants:[{
begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",
beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends"},c.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
end:/[\{;]/,excludeEnd:!0,contains:[c.inherit(c.TITLE_MODE,{begin:o}),"self",R]
},{begin:"(get|set)\\s+(?="+o+"\\()",end:/{/,keywords:"get set",
contains:[c.inherit(c.TITLE_MODE,{begin:o}),{begin:/\(\)/},R]},{begin:/\$[(.]/}]
}}}());hljs.registerLanguage("ini",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(...n){
return n.map((n=>e(n))).join("")}return function(a){var s={className:"number",
relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:a.NUMBER_RE}]
},i=a.COMMENT();i.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var t={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]
},r={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={
className:"string",contains:[a.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[i,r,t,l,s,"self"],
relevance:0
},g="("+[/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/].map((n=>e(n))).join("|")+")"
;return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[i,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n(g,"(\\s*\\.\\s*",g,")*",n("(?=",/\s*=\s*[^#\s]/,")")),className:"attr",
starts:{end:/$/,contains:[i,c,r,t,l,s]}}]}}}());hljs.registerLanguage("json",function(){"use strict";return function(n){var e={
literal:"true false null"
},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],t=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],a={
end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:e},l={begin:"{",
end:"}",contains:[{className:"attr",begin:/"/,end:/"/,
contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(a,{begin:/:/
})].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(a)],
illegal:"\\S"};return t.push(l,s),i.forEach((function(n){t.push(n)})),{
name:"JSON",contains:t,keywords:e,illegal:"\\S"}}}());hljs.registerLanguage("xml",function(){"use strict";return function(e){var n={
className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",
contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]
},s=e.inherit(a,{begin:"\\(",end:"\\)"}),t=e.inherit(e.APOS_STRING_MODE,{
className:"meta-string"}),i=e.inherit(e.QUOTE_STRING_MODE,{
className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,
contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{
begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{
begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{
begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",
relevance:10,contains:[a,i,t,s,{begin:"\\[",end:"\\]",contains:[{
className:"meta",begin:"<![a-z]",end:">",contains:[a,s,i,t]}]}]
},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",
end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,
relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{
name:"style"},contains:[c],starts:{end:"</style>",returnEnd:!0,
subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",
keywords:{name:"script"},contains:[c],starts:{end:"<\/script>",returnEnd:!0,
subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:"</?",
end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},c]}]}}
}());hljs.registerLanguage("markdown",function(){"use strict";return function(n){
const e={begin:"<",end:">",subLanguage:"xml",relevance:0},a={
begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{
className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,
relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,
excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,
excludeEnd:!0}],relevance:10},i={className:"strong",contains:[],variants:[{
begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={className:"emphasis",
contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,
relevance:0}]};i.contains.push(s),s.contains.push(i);var c=[e,a]
;return i.contains=i.contains.concat(c),s.contains=s.contains.concat(c),{
name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",
variants:[{begin:"^#{1,6}",end:"$",contains:c=c.concat(i,s)},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:c}]}]},e,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:c,
end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",
end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{
begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"
},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",
begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",
begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}}());hljs.registerLanguage("css",function(){"use strict";return function(e){var n={
begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",
endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",
excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{
begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/
},{begin:/\(/,end:/\)/,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]
},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]
}}]};return{name:"CSS",case_insensitive:!0,illegal:/[=\/|'\$]/,
contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",
begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{
className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",
begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",
lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",
illegal:/:/,returnBegin:!0,contains:[{className:"keyword",
begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,
className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]
}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{
begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}}());hljs.registerLanguage("glsl",function(){"use strict";return function(e){return{
name:"GLSL",keywords:{
keyword:"break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
type:"atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
built_in:"gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
literal:"true false"},illegal:'"',
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{
className:"meta",begin:"#",end:"$"}]}}}());hljs.registerLanguage("latex",function(){"use strict";return function(e){
const n=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{
begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/
},{begin:/\^{2}[\u0000-\u007f]/}],a=[{className:"keyword",begin:/\\/,
relevance:0,contains:[{endsParent:!0,begin:function(...e){return"("+e.map((e=>{
return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("|")+")"
}(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((e=>e+"(?![a-zA-Z@:_])")))
},{endsParent:!0,
begin:RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((e=>e+"(?![a-zA-Z:_])")).join("|"))
},{endsParent:!0,variants:n},{endsParent:!0,relevance:0,variants:[{
begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,
begin:/#+\d?/},{variants:n},{className:"built_in",relevance:0,begin:/[$&^_]/},{
className:"meta",begin:"% !TeX",end:"$",relevance:10},e.COMMENT("%","$",{
relevance:0})],t={begin:/\{/,end:/\}/,relevance:0,contains:["self",...a]
},i=e.inherit(t,{relevance:0,endsParent:!0,contains:[t,...a]}),r={begin:/\[/,
end:/\]/,endsParent:!0,relevance:0,contains:[t,...a]},s={begin:/\s+/,relevance:0
},c=[i],l=[r],o=function(e,n){return{contains:[s],starts:{relevance:0,
contains:e,starts:n}}},d=function(e,n){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",
keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[s],
starts:n}},g=function(n,a){return e.inherit({
begin:"\\\\begin(?=\\s*\\r?\\n?\\s*\\{"+n+"\\})",keywords:{
$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},o(c,a))
},m=(n="string")=>e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,
end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),u=function(e){
return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},b=(e="string")=>({
relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:e,
end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,
contains:["self"]}]}]}});return{name:"LaTeX",aliases:["TeX"],
contains:[...["verb","lstinline"].map((e=>d(e,{contains:[m()]}))),d("mint",o(c,{
contains:[m()]})),d("mintinline",o(c,{contains:[b(),m()]})),d("url",{
contains:[b("link"),b("link")]}),d("hyperref",{contains:[b("link")]
}),d("href",o(l,{contains:[b("link")]
})),...[].concat(...["","\\*"].map((e=>[g("verbatim"+e,u("verbatim"+e)),g("filecontents"+e,o(c,u("filecontents"+e))),...["","B","L"].map((n=>g(n+"Verbatim"+e,o(l,u(n+"Verbatim"+e)))))]))),g("minted",o(l,o(c,u("minted")))),...a]
}}}());hljs.registerLanguage("java",function(){"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function n(e){return a("(",e,")?")}
function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
return"("+n.map((n=>e(n))).join("|")+")"}return function(e){
var r="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",i={
className:"meta",begin:"@[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
contains:[{begin:/\(/,end:/\)/,contains:["self"]}]
},t=e=>a("[",e,"]+([",e,"_]*[",e,"]+)?"),c={className:"number",variants:[{
begin:`\\b(0[bB]${t("01")})[lL]?`},{begin:`\\b(0${t("0-7")})[dDfFlL]?`},{
begin:a(/\b0[xX]/,s(a(t("a-fA-F0-9"),/\./,t("a-fA-F0-9")),a(t("a-fA-F0-9"),/\.?/),a(/\./,t("a-fA-F0-9"))),/([pP][+-]?(\d+))?/,/[fFdDlL]?/)
},{begin:a(/\b/,s(a(/\d*\./,t("\\d")),t("\\d")),/[eE][+-]?[\d]+[dDfF]?/)},{
begin:a(/\b/,t(/\d/),n(/\.?/),n(t(/\d/)),/[dDfFlL]?/)}],relevance:0};return{
name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
className:"class",beginKeywords:"class interface enum",end:/[{;=]/,
excludeEnd:!0,keywords:"class interface enum",illegal:/[:"\[\]]/,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"new throw return else",relevance:0},{className:"class",
begin:"record\\s+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,excludeEnd:!0,
end:/[{;=]/,keywords:r,contains:[{beginKeywords:"record"},{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"function",
begin:"([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:r,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
keywords:r,relevance:0,
contains:[i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},c,i]}}}());hljs.registerLanguage("c-like",function(){"use strict";return function(e){
function t(e){return"(?:"+e+")?"}var n=e.COMMENT("//","$",{contains:[{
begin:/\\\n/}]
}),r="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+t(r)+"[a-zA-Z_]\\w*"+t("<.*?>")+")",i={
className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",
variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},c={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"meta-string"}),{
className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},n,e.C_BLOCK_COMMENT_MODE]},l={className:"title",begin:t(r)+e.IDENT_RE,
relevance:0},d=t(r)+e.IDENT_RE+"\\s*\\(",u={
keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
literal:"true false nullptr NULL"},m=[c,i,n,e.C_BLOCK_COMMENT_MODE,o,s],p={
variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{
beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:m.concat([{
begin:/\(/,end:/\)/,keywords:u,contains:m.concat(["self"]),relevance:0}]),
relevance:0},_={className:"function",begin:"("+a+"[\\*&\\s]+)+"+d,
returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>]/,
contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:d,
returnBegin:!0,contains:[l],relevance:0},{className:"params",begin:/\(/,
end:/\)/,keywords:u,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,s,o,i,{
begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:["self",n,e.C_BLOCK_COMMENT_MODE,s,o,i]}]
},i,n,e.C_BLOCK_COMMENT_MODE,c]};return{
aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(p,_,m,[c,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,
contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{
preprocessor:c,strings:s,keywords:u}}}}());hljs.registerLanguage("c",function(){"use strict";return function(e){
var n=e.requireLanguage("c-like").rawDefinition()
;return n.name="C",n.aliases=["c","h"],n}}());hljs.registerLanguage("rust",function(){"use strict";return function(e){
var n="([ui](8|16|32|64|128|size)|f(32|64))?",t="drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!"
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
keyword:"abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
literal:"true false Some None Ok Err",built_in:t},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n},{
begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+n}],relevance:0},{
className:"function",beginKeywords:"fn",end:"(\\(|<)",excludeEnd:!0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"meta",begin:"#\\!?\\[",
end:"\\]",contains:[{className:"meta-string",begin:/"/,end:/"/}]},{
className:"class",beginKeywords:"type",end:";",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"\\S"},{
className:"class",beginKeywords:"trait enum struct union",end:"{",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{endsParent:!0})],illegal:"[\\w\\d]"
},{begin:e.IDENT_RE+"::",keywords:{built_in:t}},{begin:"->"}]}}}());hljs.registerLanguage("cpp",function(){"use strict";return function(e){
var i=e.requireLanguage("c-like").rawDefinition();return i.disableAutodetect=!1,
i.name="C++",i.aliases=["cc","c++","h++","hpp","hh","hxx","cxx"],i}}());