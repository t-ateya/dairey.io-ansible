!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=require("path")},function(e,t){e.exports=require("vscode")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a,s,l,u=n(0),c=n(6),f=Object.prototype.toString;function d(e){return void 0!==e}function g(e){return"[object Number]"===f.call(e)}function p(e){return"[object String]"===f.call(e)}function h(e){return JSON.parse(c.readFileSync(e,"utf8"))}function m(e,t){return l&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,n){var r=n[0],o=t[r],i=e;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(i=String(o)),i}))}function v(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return g(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):m(e[t],r):p(n)?(console.warn("Message "+n+" didn't get externalized correctly."),m(n,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function b(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return m(t,n)}function y(e,t){return a[e]=t,t}function C(e,t){var n,r,o,i=u.join(s.cacheRoot,e.id+"-"+e.hash+".json"),a=!1,l=!1;try{return n=JSON.parse(c.readFileSync(i,{encoding:"utf8",flag:"r"})),r=i,o=new Date,c.utimes(r,o,o,(function(){})),n}catch(e){if("ENOENT"===e.code)l=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),c.unlink(i,(function(e){e&&console.error("Deleting corrupted bundle "+i+" failed.")})),a=!0}}if(!(n=function(e,t){var n=s.translationsConfig[e.id];if(n){var r=h(n).contents,o=h(u.join(t,"nls.metadata.json")),i=Object.create(null);for(var a in o){var l=o[a],c=r[e.outDir+"/"+a];if(c){for(var f=[],d=0;d<l.keys.length;d++){var g=l.keys[d],m=c[p(g)?g:g.key];void 0===m&&(m=l.messages[d]),f.push(m)}i[a]=f}else i[a]=l.messages}return i}}(e,t))||a)return n;if(l)try{c.writeFileSync(i,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}function k(e){try{return function(e){var t=h(u.join(e,"nls.metadata.json")),n=Object.create(null);for(var r in t){var o=t[r];n[r]=o.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function w(e,t){var n;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{n=C(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(s.languagePackSupport)return k(t);var r=function(e){for(var t=s.language;t;){var n=u.join(e,"nls.bundle."+t+".json");if(c.existsSync(n))return n;var r=t.lastIndexOf("-");t=r>0?t.substring(0,r):void 0}if(void 0===t){n=u.join(e,"nls.bundle.json");if(c.existsSync(n))return n}}(t);if(r)try{return h(r)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=k(t)}return n}function S(e){if(!e)return b;var t=u.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===r.both||s.messageFormat===r.bundle){var n=function(e){for(var t,n=u.dirname(e);t=u.join(n,"nls.metadata.header.json"),!c.existsSync(t);){var r=u.dirname(n);if(r===n){t=void 0;break}n=r}return t}(e);if(n){var o=u.dirname(n),i=a[o];if(void 0===i)try{var f=JSON.parse(c.readFileSync(n,"utf8"));try{var g=w(f,o);i=y(o,g?{header:f,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),i=y(o,null)}}catch(e){console.error("Failed to read header file",e),i=y(o,null)}if(i){var p=e.substr(o.length+1).replace(/\\/g,"/"),m=i.nlsBundle[p];return void 0===m?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):v(m)}}}if(s.messageFormat===r.both||s.messageFormat===r.file)try{var C=h(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(l||!s.language)t=".nls.json";else for(var n=s.language;n;){var r=".nls."+n+".json";if(c.existsSync(e+r)){t=r;break}var o=n.lastIndexOf("-");o>0?n=n.substring(0,o):(t=".nls.json",n=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(C)?v(C):d(C.messages)&&d(C.keys)?v(C.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(r=t.MessageFormat||(t.MessageFormat={})),function(e){e.standalone="standalone",e.languagePack="languagePack"}(o=t.BundleFormat||(t.BundleFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(i||(i={})),function(){if(s={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:r.bundle},p(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var n=e.availableLanguages["*"];p(n)&&(t=n)}if(p(e.locale)&&(s.locale=e.locale.toLowerCase()),void 0===t?s.language=s.locale:"en"!==t&&(s.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(s.languagePackSupport=e._languagePackSupport),p(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),p(e._languagePackId)&&(s.languagePackId=e._languagePackId),p(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=h(s.translationsConfigFile)}catch(t){e._corruptedFile&&c.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}l="pseudo"===s.locale,void 0,a=Object.create(null)}(),t.loadMessageBundle=S,t.config=function(e){return e&&(p(e.locale)&&(s.locale=e.locale.toLowerCase(),s.language=s.locale,void 0,a=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat),e.bundleFormat===o.standalone&&!0===s.languagePackSupport&&(s.languagePackSupport=!1)),l="pseudo"===s.locale,S}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.provideWorkspaceTrustExtensionProposals=t.provideInstalledExtensionProposals=void 0;const r=n(1),o=n(2).loadMessageBundle(n(0).join(__dirname,"extensionsProposals.ts"));t.provideInstalledExtensionProposals=function(e,t,n,i){if(Array.isArray(e)){const a=(i?r.extensions.all:r.extensions.all.filter(e=>!(e.id.startsWith("vscode.")||"Microsoft.vscode-markdown"===e.id))).filter(t=>-1===e.indexOf(t.id));if(a.length)return a.map(e=>{const o=new r.CompletionItem(e.id),i=`"${e.id}"${t}`;return o.kind=r.CompletionItemKind.Value,o.insertText=i,o.range=n,o.filterText=i,o});{const e=new r.CompletionItem(o(0,null));return e.insertText='"vscode.csharp"',e.kind=r.CompletionItemKind.Value,e.range=n,[e]}}},t.provideWorkspaceTrustExtensionProposals=function(e,t){if(Array.isArray(e)){const n=r.extensions.all.filter(e=>e.packageJSON.main).filter(t=>-1===e.indexOf(t.id));if(n.length)return n.map(e=>{const n=new r.CompletionItem(e.id),o=`"${e.id}": {\n\t"supported": false,\n\t"version": "${e.packageJSON.version}"\n}`;return n.kind=r.CompletionItemKind.Value,n.insertText=o,n.range=t,n.filterText=o,n});{const e=new r.CompletionItem(o(1,null));return e.insertText='"vscode.csharp: {\n\t"supported": false,\n\t"version": "0.0.0"\n}`;"',e.kind=r.CompletionItemKind.Value,e.range=t,[e]}}}},function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.length,r=0,s="",l=0,u=16,c=0,f=0,d=0,g=0,p=0;function h(t,n){for(var o=0,i=0;o<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)i=16*i+a-48;else if(a>=65&&a<=70)i=16*i+a-65+10;else{if(!(a>=97&&a<=102))break;i=16*i+a-97+10}r++,o++}return o<t&&(i=-1),i}function m(){if(s="",p=0,l=r,f=c,g=d,r>=n)return l=n,u=17;var t=e.charCodeAt(r);if(o(t)){do{r++,s+=String.fromCharCode(t),t=e.charCodeAt(r)}while(o(t));return u=15}if(i(t))return r++,s+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,s+="\n"),c++,d=r,u=14;switch(t){case 123:return r++,u=1;case 125:return r++,u=2;case 91:return r++,u=3;case 93:return r++,u=4;case 58:return r++,u=6;case 44:return r++,u=5;case 34:return r++,s=function(){for(var t="",o=r;;){if(r>=n){t+=e.substring(o,r),p=2;break}var a=e.charCodeAt(r);if(34===a){t+=e.substring(o,r),r++;break}if(92!==a){if(a>=0&&a<=31){if(i(a)){t+=e.substring(o,r),p=2;break}p=6}r++}else{if(t+=e.substring(o,r),++r>=n){p=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var s=h(4,!0);s>=0?t+=String.fromCharCode(s):p=4;break;default:p=5}o=r}}return t}(),u=10;case 47:var m=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!i(e.charCodeAt(r));)r++;return s=e.substring(m,r),u=12}if(42===e.charCodeAt(r+1)){r+=2;for(var b=n-1,y=!1;r<b;){var C=e.charCodeAt(r);if(42===C&&47===e.charCodeAt(r+1)){r+=2,y=!0;break}r++,i(C)&&(13===C&&10===e.charCodeAt(r)&&r++,c++,d=r)}return y||(r++,p=1),s=e.substring(m,r),u=13}return s+=String.fromCharCode(t),r++,u=16;case 45:if(s+=String.fromCharCode(t),++r===n||!a(e.charCodeAt(r)))return u=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&a(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&a(e.charCodeAt(r))))return p=3,e.substring(t,r);for(r++;r<e.length&&a(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&a(e.charCodeAt(r))){for(r++;r<e.length&&a(e.charCodeAt(r));)r++;n=r}else p=3;return e.substring(t,n)}(),u=11;default:for(;r<n&&v(t);)r++,t=e.charCodeAt(r);if(l!==r){switch(s=e.substring(l,r)){case"true":return u=8;case"false":return u=9;case"null":return u=7}return u=16}return s+=String.fromCharCode(t),r++,u=16}}function v(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,s="",l=0,u=16,p=0},getPosition:function(){return r},scan:t?function(){var e;do{e=m()}while(e>=12&&e<=15);return e}:m,getToken:function(){return u},getTokenValue:function(){return s},getTokenOffset:function(){return l},getTokenLength:function(){return r-l},getTokenStartLine:function(){return f},getTokenStartCharacter:function(){return l-g},getTokenError:function(){return p}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}function s(e,t,n){var o,i,a,s,c;if(t){for(s=t.offset,c=s+t.length,a=s;a>0&&!u(e,a-1);)a--;for(var f=c;f<e.length&&!u(e,f);)f++;i=e.substring(a,f),o=function(e,t){var n=0,r=0,o=t.tabSize||4;for(;n<e.length;){var i=e.charAt(n);if(" "===i)r++;else{if("\t"!==i)break;r+=o}n++}return Math.floor(r/o)}(i,n)}else i=e,o=0,a=0,s=0,c=e.length;var d,g=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(n,e),p=!1,h=0;d=n.insertSpaces?l(" ",n.tabSize||4):"\t";var m=r(i,!1),v=!1;function b(){return g+l(d,o+h)}function y(){var e=m.scan();for(p=!1;15===e||14===e;)p=p||14===e,e=m.scan();return v=16===e||0!==m.getTokenError(),e}var C=[];function k(t,n,r){!v&&n<c&&r>s&&e.substring(n,r)!==t&&C.push({offset:n,length:r-n,content:t})}var w=y();if(17!==w){var S=m.getTokenOffset()+a;k(l(d,o),a,S)}for(;17!==w;){for(var x=m.getTokenOffset()+m.getTokenLength()+a,A=y(),I="";!p&&(12===A||13===A);){k(" ",x,m.getTokenOffset()+a),x=m.getTokenOffset()+m.getTokenLength()+a,I=12===A?b():"",A=y()}if(2===A)1!==w&&(h--,I=b());else if(4===A)3!==w&&(h--,I=b());else{switch(w){case 3:case 1:h++,I=b();break;case 5:case 12:I=b();break;case 13:I=p?b():" ";break;case 6:I=" ";break;case 10:if(6===A){I="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===A||13===A?I=" ":5!==A&&17!==A&&(v=!0);break;case 16:v=!0}!p||12!==A&&13!==A||(I=b())}k(I,x,m.getTokenOffset()+a),w=A}return C}function l(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function u(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var c;function f(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=c.DEFAULT);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function i(e){return r.children.push(e),e}g(e,{onObjectBegin:function(e){r=i({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,t,n){(r=i({type:"property",offset:t,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:r})},onObjectEnd:function(e,t){o(e+t),r.length=e+t-r.offset,r=r.parent,o(e+t)},onArrayBegin:function(e,t){r=i({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,t){r.length=e+t-r.offset,r=r.parent,o(e+t)},onLiteralValue:function(e,t,n){i({type:p(e),offset:t,length:n,parent:r,value:e}),o(t+n)},onSeparator:function(e,t,n){"property"===r.type&&(":"===e?r.colonOffset=t:","===e&&o(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var a=r.children[0];return a&&delete a.parent,a}function d(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==n.type||!Array.isArray(n.children))return;for(var a=!1,s=0,l=n.children;s<l.length;s++){var u=l[s];if(Array.isArray(u.children)&&u.children[0].value===i){n=u.children[1],a=!0;break}}if(!a)return}else{var c=i;if("array"!==n.type||c<0||!Array.isArray(n.children)||c>=n.children.length)return;n=n.children[c]}}return n}}function g(e,t,n){void 0===n&&(n=c.DEFAULT);var o=r(e,!1);function i(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}function a(e){return e?function(t){return e(t,o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}var s=i(t.onObjectBegin),l=a(t.onObjectProperty),u=i(t.onObjectEnd),f=i(t.onArrayBegin),d=i(t.onArrayEnd),g=a(t.onLiteralValue),p=a(t.onSeparator),h=i(t.onComment),m=a(t.onError),v=n&&n.disallowComments,b=n&&n.allowTrailingComma;function y(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:C(14);break;case 5:C(15);break;case 3:C(13);break;case 1:v||C(11);break;case 2:C(12);break;case 6:C(16)}switch(e){case 12:case 13:v?C(10):h();break;case 16:C(1);break;case 15:case 14:break;default:return e}}}function C(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(e),t.length+n.length>0)for(var r=o.getToken();17!==r;){if(-1!==t.indexOf(r)){y();break}if(-1!==n.indexOf(r))break;r=y()}}function k(e){var t=o.getTokenValue();return e?g(t):l(t),y(),!0}function w(){switch(o.getToken()){case 3:return function(){f(),y();for(var e=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(e||C(4,[],[]),p(","),y(),4===o.getToken()&&b)break}else e&&C(6,[],[]);w()||C(4,[],[4,5]),e=!0}return d(),4!==o.getToken()?C(8,[4],[]):y(),!0}();case 1:return function(){s(),y();for(var e=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(e||C(4,[],[]),p(","),y(),2===o.getToken()&&b)break}else e&&C(6,[],[]);(10!==o.getToken()?(C(3,[],[2,5]),0):(k(!1),6===o.getToken()?(p(":"),y(),w()||C(4,[],[2,5])):C(5,[],[2,5]),1))||C(4,[],[2,5]),e=!0}return u(),2!==o.getToken()?C(7,[2],[]):y(),!0}();case 10:return k(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(C(2),e=0)}catch(e){C(2)}g(e);break;case 7:g(null);break;case 8:g(!0);break;case 9:g(!1);break;default:return!1}return y(),!0}()}}return y(),17===o.getToken()?!!n.allowEmptyContent||(C(4,[],[]),!1):w()?(17!==o.getToken()&&C(9,[],[]),!0):(C(4,[],[]),!1)}function p(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"object":return e?Array.isArray(e)?"array":"object":"null";default:return"null"}}function h(e,t,n,r,o){for(var i,a=t.slice(),s=f(e,[]),l=void 0,u=void 0;a.length>0&&(u=a.pop(),void 0===(l=d(s,a))&&void 0!==n);)"string"==typeof u?((i={})[u]=n,n=i):n=[n];if(l){if("object"===l.type&&"string"==typeof u&&Array.isArray(l.children)){var c=d(l,[u]);if(void 0!==c){if(void 0===n){if(!c.parent)throw new Error("Malformed AST");var g=l.children.indexOf(c.parent),p=void 0,h=c.parent.offset+c.parent.length;if(g>0)p=(w=l.children[g-1]).offset+w.length;else if(p=l.offset+1,l.children.length>1)h=l.children[1].offset;return m(e,{offset:p,length:h-p,content:""},r)}return m(e,{offset:c.offset,length:c.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var v=JSON.stringify(u)+": "+JSON.stringify(n),b=o?o(l.children.map((function(e){return e.children[0].value}))):l.children.length,y=void 0;return m(e,y=b>0?{offset:(w=l.children[b-1]).offset+w.length,length:0,content:","+v}:0===l.children.length?{offset:l.offset+1,length:0,content:v}:{offset:l.offset+1,length:0,content:v+","},r)}if("array"===l.type&&"number"==typeof u&&Array.isArray(l.children)){if(-1===u){v=""+JSON.stringify(n),y=void 0;if(0===l.children.length)y={offset:l.offset+1,length:0,content:v};else y={offset:(w=l.children[l.children.length-1]).offset+w.length,length:0,content:","+v};return m(e,y,r)}if(void 0===n&&l.children.length>=0){var C=u,k=l.children[C];y=void 0;if(1===l.children.length)y={offset:l.offset+1,length:l.length-2,content:""};else if(l.children.length-1===C){var w,S=(w=l.children[C-1]).offset+w.length;y={offset:S,length:l.offset+l.length-2-S,content:""}}else y={offset:k.offset,length:l.children[C+1].offset-k.offset,content:""};return m(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof u?"index":"property")+" to parent of type "+l.type)}if(void 0===n)throw new Error("Can not delete in empty document");return m(e,{offset:s?s.offset:0,length:s?s.length:0,content:JSON.stringify(n)},r)}function m(e,t,n){var r=v(e,t),o=t.offset,i=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!u(r,o-1);)o--;for(;i<r.length&&!u(r,i);)i++}for(var a=s(r,{offset:o,length:i-o},n),l=a.length-1;l>=0;l--){var c=a[l];r=v(r,c),o=Math.min(o,c.offset),i=Math.max(i,c.offset+c.length),i+=c.content.length-c.length}return[{offset:o,length:e.length-(r.length-i)-o,content:r.substring(o,i)}]}function v(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}n.r(t),n.d(t,"createScanner",(function(){return b})),n.d(t,"getLocation",(function(){return y})),n.d(t,"parse",(function(){return C})),n.d(t,"parseTree",(function(){return k})),n.d(t,"findNodeAtLocation",(function(){return w})),n.d(t,"findNodeAtOffset",(function(){return S})),n.d(t,"getNodePath",(function(){return x})),n.d(t,"getNodeValue",(function(){return A})),n.d(t,"visit",(function(){return I})),n.d(t,"stripComments",(function(){return O})),n.d(t,"printParseErrorCode",(function(){return T})),n.d(t,"format",(function(){return P})),n.d(t,"modify",(function(){return j})),n.d(t,"applyEdits",(function(){return E})),function(e){e.DEFAULT={allowTrailingComma:!1}}(c||(c={}));var b=r,y=function(e,t){var n=[],r=new Object,o=void 0,i={value:{},offset:0,length:0,type:"object",parent:void 0},a=!1;function s(e,t,n,r){i.value=e,i.offset=t,i.length=n,i.type=r,i.colonOffset=void 0,o=i}try{g(e,{onObjectBegin:function(e,i){if(t<=e)throw r;o=void 0,a=t>e,n.push("")},onObjectProperty:function(e,o,i){if(t<o)throw r;if(s(e,o,i,"property"),n[n.length-1]=e,t<=o+i)throw r},onObjectEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onArrayBegin:function(e,i){if(t<=e)throw r;o=void 0,n.push(0)},onArrayEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r;if(s(e,n,o,p(e)),t<=n+o)throw r},onSeparator:function(e,i,s){if(t<=i)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=i,a=!1,o=void 0;else if(","===e){var l=n[n.length-1];"number"==typeof l?n[n.length-1]=l+1:(a=!0,n[n.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:a,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}},C=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=c.DEFAULT);var r=null,o=[],i=[];function a(e){Array.isArray(o)?o.push(e):null!==r&&(o[r]=e)}return g(e,{onObjectBegin:function(){var e={};a(e),i.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=i.pop()},onArrayBegin:function(){var e=[];a(e),i.push(o),o=e,r=null},onArrayEnd:function(){o=i.pop()},onLiteralValue:a,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),o[0]},k=f,w=d,S=function e(t,n,r){if(void 0===r&&(r=!1),function(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}(t,n,r)){var o=t.children;if(Array.isArray(o))for(var i=0;i<o.length&&o[i].offset<=n;i++){var a=e(o[i],n,r);if(a)return a}return t}},x=function e(t){if(!t.parent||!t.parent.children)return[];var n=e(t.parent);if("property"===t.parent.type){var r=t.parent.children[0].value;n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},A=function e(t){switch(t.type){case"array":return t.children.map(e);case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var i=o[r],a=i.children[1];a&&(n[i.children[0].value]=e(a))}return n;case"null":case"string":case"number":case"boolean":return t.value;default:return}},I=g,O=function(e,t){var n,o,i=r(e),a=[],s=0;do{switch(o=i.getPosition(),n=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==t&&a.push(i.getTokenValue().replace(/[^\r\n]/g,t)),s=i.getPosition()}}while(17!==n);return a.join("")};function T(e){switch(e){case 1:return"InvalidSymbol";case 2:return"InvalidNumberFormat";case 3:return"PropertyNameExpected";case 4:return"ValueExpected";case 5:return"ColonExpected";case 6:return"CommaExpected";case 7:return"CloseBraceExpected";case 8:return"CloseBracketExpected";case 9:return"EndOfFileExpected";case 10:return"InvalidCommentToken";case 11:return"UnexpectedEndOfComment";case 12:return"UnexpectedEndOfString";case 13:return"UnexpectedEndOfNumber";case 14:return"InvalidUnicode";case 15:return"InvalidEscapeCharacter";case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"}function P(e,t,n){return s(e,t,n)}function j(e,t,n,r){return h(e,t,n,r.formattingOptions,r.getInsertionIndex)}function E(e,t){for(var n=t.length-1;n>=0;n--)e=v(e,t[n]);return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const r=n(4),o=n(1),i=n(2),a=n(7),s=n(3),l=i.loadMessageBundle(n(0).join(__dirname,"configurationEditingMain.ts"));function u(e){return o.languages.registerCompletionItemProvider({language:"jsonc",pattern:e},{provideCompletionItems(e,t,n){const i=(0,r.getLocation)(e.getText(),e.offsetAt(t));if(!i.isAtPropertyKey&&i.previousNode&&"string"===i.previousNode.type){const n=e.lineAt(t.line).text.indexOf("$"),r=n>=0?new o.Position(t.line,n):t;return[{label:"workspaceFolder",detail:l(0,null)},{label:"workspaceFolderBasename",detail:l(1,null)},{label:"relativeFile",detail:l(2,null)},{label:"relativeFileDirname",detail:l(3,null)},{label:"file",detail:l(4,null)},{label:"cwd",detail:l(5,null)},{label:"lineNumber",detail:l(6,null)},{label:"selectedText",detail:l(7,null)},{label:"fileDirname",detail:l(8,null)},{label:"fileExtname",detail:l(9,null)},{label:"fileBasename",detail:l(10,null)},{label:"fileBasenameNoExtension",detail:l(11,null)},{label:"defaultBuildTask",detail:l(12,null)}].map(e=>({label:"${"+e.label+"}",range:new o.Range(r,t),detail:e.detail}))}return[]}})}t.activate=function(e){e.subscriptions.push(o.languages.registerCompletionItemProvider({language:"jsonc",pattern:"**/settings.json"},{provideCompletionItems:(e,t,n)=>new a.SettingsDocument(e).provideCompletionItems(t,n)})),e.subscriptions.push(o.languages.registerCompletionItemProvider({pattern:"**/extensions.json"},{provideCompletionItems(e,t,n){const i=(0,r.getLocation)(e.getText(),e.offsetAt(t)),a=e.getWordRangeAtPosition(t)||new o.Range(t,t);if("recommendations"===i.path[0]){const t=(0,r.parse)(e.getText());return(0,s.provideInstalledExtensionProposals)(t&&t.recommendations||[],"",a,!1)}return[]}}),o.languages.registerCompletionItemProvider({pattern:"**/*.code-workspace"},{provideCompletionItems(e,t,n){const i=(0,r.getLocation)(e.getText(),e.offsetAt(t)),a=e.getWordRangeAtPosition(t)||new o.Range(t,t);if("extensions"===i.path[0]&&"recommendations"===i.path[1]){const t=(0,r.parse)(e.getText()).extensions;return(0,s.provideInstalledExtensionProposals)(t&&t.recommendations||[],"",a,!1)}return[]}})),e.subscriptions.push(u("**/launch.json")),e.subscriptions.push(u("**/tasks.json")),e.subscriptions.push(function(){const e=new Map([[{language:"jsonc",pattern:"**/keybindings.json"},[["*","when"]]],[{language:"json",pattern:"**/package.json"},[["contributes","menus","*","*","when"],["contributes","views","*","*","when"],["contributes","viewsWelcome","*","when"],["contributes","keybindings","*","when"],["contributes","keybindings","when"]]]]);return o.languages.registerCompletionItemProvider([...e.keys()],{async provideCompletionItems(t,n,i){const a=(0,r.getLocation)(t.getText(),t.offsetAt(n));if(a.isAtPropertyKey)return;let s=!1;for(const[n,r]of e)if(o.languages.match(n,t)&&r.some(a.matches.bind(a))){s=!0;break}if(!s)return;const l=t.getWordRangeAtPosition(n);if(!l||l.start.isEqual(n)||l.end.isEqual(n))return;let u;if(u=l.end.character-l.start.character==2||t.getWordRangeAtPosition(n,/\s+/)?new o.Range(n,n):t.getWordRangeAtPosition(n,/[a-zA-Z.]+/),!u)return;const c=u.with(void 0,n),f=await o.commands.executeCommand("getContextKeyInfo");if(i.isCancellationRequested||!f)return;const d=new o.CompletionList;for(const e of f){const t=new o.CompletionItem(e.key,o.CompletionItemKind.Constant);t.detail=e.type,t.range={replacing:u,inserting:c},t.documentation=e.description,d.items.push(t)}return d}})}())},o.languages.registerDocumentSymbolProvider({pattern:"**/launch.json",language:"jsonc"},{provideDocumentSymbols(e,t){const n=[];let i="",a="",s=0,l=0;return(0,r.visit)(e.getText(),{onObjectProperty:(e,t,n)=>{a=e},onLiteralValue:(e,t,n)=>{"name"===a&&(i=e)},onObjectBegin:(e,t)=>{l++,2===l&&(s=e)},onObjectEnd:(t,r)=>{i&&2===l&&n.push(new o.SymbolInformation(i,o.SymbolKind.Object,new o.Range(e.positionAt(s),e.positionAt(t)))),l--}}),n}},{label:"Launch Targets"})},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsDocument=void 0;const r=n(1),o=n(4),i=n(2),a=n(3),s=i.loadMessageBundle(n(0).join(__dirname,"settingsDocumentHelper.ts"));t.SettingsDocument=class{constructor(e){this.document=e}provideCompletionItems(e,t){const n=(0,o.getLocation)(this.document.getText(),this.document.offsetAt(e)),i=this.document.getWordRangeAtPosition(e)||new r.Range(e,e);if("window.title"===n.path[0])return this.provideWindowTitleCompletionItems(n,i);if("files.associations"===n.path[0])return this.provideFilesAssociationsCompletionItems(n,i);if("files.exclude"===n.path[0]||"search.exclude"===n.path[0])return this.provideExcludeCompletionItems(n,i);if("files.defaultLanguage"===n.path[0])return this.provideLanguageCompletionItems(n,i).then(e=>[this.newSimpleCompletionItem(JSON.stringify("${activeEditorLanguage}"),i,s(0,null)),...e]);if("settingsSync.ignoredExtensions"===n.path[0]){let e=[];try{e=(0,o.parse)(this.document.getText())["settingsSync.ignoredExtensions"]}catch(e){}return(0,a.provideInstalledExtensionProposals)(e,"",i,!0)}if("remote.extensionKind"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey){let e=[];try{e=Object.keys((0,o.parse)(this.document.getText())["remote.extensionKind"])}catch(e){}return(0,a.provideInstalledExtensionProposals)(e,': [\n\t"ui"\n]',i,!0)}if("extensions.supportUntrustedWorkspaces"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey){let e=[];try{e=Object.keys((0,o.parse)(this.document.getText())["extensions.supportUntrustedWorkspaces"])}catch(e){}return(0,a.provideWorkspaceTrustExtensionProposals)(e,i)}return this.provideLanguageOverridesCompletionItems(n,e)}provideWindowTitleCompletionItems(e,t){const n=[];return n.push(this.newSimpleCompletionItem("${activeEditorShort}",t,s(1,null))),n.push(this.newSimpleCompletionItem("${activeEditorMedium}",t,s(2,null))),n.push(this.newSimpleCompletionItem("${activeEditorLong}",t,s(3,null))),n.push(this.newSimpleCompletionItem("${activeFolderShort}",t,s(4,null))),n.push(this.newSimpleCompletionItem("${activeFolderMedium}",t,s(5,null))),n.push(this.newSimpleCompletionItem("${activeFolderLong}",t,s(6,null))),n.push(this.newSimpleCompletionItem("${rootName}",t,s(7,null))),n.push(this.newSimpleCompletionItem("${rootPath}",t,s(8,null))),n.push(this.newSimpleCompletionItem("${folderName}",t,s(9,null))),n.push(this.newSimpleCompletionItem("${folderPath}",t,s(10,null))),n.push(this.newSimpleCompletionItem("${appName}",t,s(11,null))),n.push(this.newSimpleCompletionItem("${remoteName}",t,s(12,null))),n.push(this.newSimpleCompletionItem("${dirty}",t,s(13,null))),n.push(this.newSimpleCompletionItem("${separator}",t,s(14,null))),Promise.resolve(n)}provideFilesAssociationsCompletionItems(e,t){const n=[];if(2===e.path.length){if(e.isAtPropertyKey&&""!==e.path[1])return this.provideLanguageCompletionItemsForLanguageOverrides(e,t);n.push(this.newSnippetCompletionItem({label:s(15,null),documentation:s(16,null),snippet:e.isAtPropertyKey?'"*.${1:extension}": "${2:language}"':'{ "*.${1:extension}": "${2:language}" }',range:t})),n.push(this.newSnippetCompletionItem({label:s(17,null),documentation:s(18,null),snippet:e.isAtPropertyKey?'"/${1:path to file}/*.${2:extension}": "${3:language}"':'{ "/${1:path to file}/*.${2:extension}": "${3:language}" }',range:t}))}return Promise.resolve(n)}provideExcludeCompletionItems(e,t){const n=[];return 1===e.path.length?(n.push(this.newSnippetCompletionItem({label:s(19,null),documentation:s(20,null),snippet:e.isAtPropertyKey?'"**/*.${1:extension}": true':'{ "**/*.${1:extension}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s(21,null),documentation:s(22,null),snippet:e.isAtPropertyKey?'"**/*.{ext1,ext2,ext3}": true':'{ "**/*.{ext1,ext2,ext3}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s(23,null),documentation:s(24,null),snippet:e.isAtPropertyKey?'"**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" }':'{ "**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" } }',range:t})),n.push(this.newSnippetCompletionItem({label:s(25,null),documentation:s(26,null),snippet:e.isAtPropertyKey?'"${1:name}": true':'{ "${1:name}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s(27,null),documentation:s(28,null),snippet:e.isAtPropertyKey?'"{folder1,folder2,folder3}": true':'{ "{folder1,folder2,folder3}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s(29,null),documentation:s(30,null),snippet:e.isAtPropertyKey?'"**/${1:name}": true':'{ "**/${1:name}": true }',range:t}))):(n.push(this.newSimpleCompletionItem("false",t,s(31,null))),n.push(this.newSimpleCompletionItem("true",t,s(32,null))),n.push(this.newSnippetCompletionItem({label:s(33,null),documentation:s(34,null),snippet:'{ "when": "$(basename).${1:extension}" }',range:t}))),Promise.resolve(n)}provideLanguageCompletionItems(e,t,n=(e=>JSON.stringify(e))){return r.languages.getLanguages().then(e=>e.map(e=>this.newSimpleCompletionItem(n(e),t)))}provideLanguageCompletionItemsForLanguageOverrides(e,t,n=(e=>JSON.stringify(e))){return r.languages.getLanguages().then(e=>{const o=[],i=r.workspace.getConfiguration();for(const a of e){const e=i.inspect(`[${a}]`);if(!e||!e.defaultValue){const e=new r.CompletionItem(n(a));e.kind=r.CompletionItemKind.Property,e.range=t,o.push(e)}}return o})}provideLanguageOverridesCompletionItems(e,t){if(0===e.path.length){let n=this.document.getWordRangeAtPosition(t,/^\s*\[.*]?/)||new r.Range(t,t),o=this.document.getText(n);if(o&&o.trim().startsWith("["))return n=new r.Range(new r.Position(n.start.line,n.start.character+o.indexOf("[")),n.end),this.provideLanguageCompletionItemsForLanguageOverrides(e,n,e=>`"[${e}]"`);n=this.document.getWordRangeAtPosition(t)||new r.Range(t,t),o=this.document.getText(n);let i='"[${1:language}]": {\n\t"$0"\n}';return o&&o.startsWith('"')&&(n=new r.Range(new r.Position(n.start.line,n.start.character+1),n.end),i=i.substring(1)),Promise.resolve([this.newSnippetCompletionItem({label:s(35,null),documentation:s(36,null),snippet:i,range:n})])}if(1===e.path.length&&e.previousNode&&"string"==typeof e.previousNode.value&&e.previousNode.value.startsWith("[")){const n=this.document.getWordRangeAtPosition(t)||new r.Range(t,t);return this.provideLanguageCompletionItemsForLanguageOverrides(e,n,e=>`"[${e}]"`)}return Promise.resolve([])}newSimpleCompletionItem(e,t,n,o){const i=new r.CompletionItem(e);return i.kind=r.CompletionItemKind.Value,i.detail=n,i.insertText=o||e,i.range=t,i}newSnippetCompletionItem(e){const t=new r.CompletionItem(e.label);return t.kind=r.CompletionItemKind.Value,t.documentation=e.documentation,t.insertText=new r.SnippetString(e.snippet),t.range=e.range,t}}}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/054a9295330880ed74ceaedda236253b4f39a335/extensions/configuration-editing/dist/configurationEditingMain.js.map