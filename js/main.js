!function(){var t={9662:function(t,e,r){var n=r(7854),o=r(614),i=r(6330),c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},9670:function(t,e,r){var n=r(7854),o=r(111),i=n.String,c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},1318:function(t,e,r){var n=r(5656),o=r(1400),i=r(6244),c=function(t){return function(e,r,c){var a,u=n(e),s=i(u),l=o(c,s);if(t&&r!=r){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},4326:function(t,e,r){var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,r){var n=r(7854),o=r(1694),i=r(614),c=r(4326),a=r(5112)("toStringTag"),u=n.Object,s="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),a))?r:s?c(e):"Object"==(n=c(e))&&i(e.callee)?"Arguments":n}},9920:function(t,e,r){var n=r(2597),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,e,r){for(var a=o(e),u=c.f,s=i.f,l=0;l<a.length;l++){var f=a[l];n(t,f)||r&&n(r,f)||u(t,f,s(e,f))}}},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,i=r(7854),c=r(8113),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),c=r(1320),a=r(3505),u=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,d,p,v=t.target,h=t.global,m=t.stat;if(r=h?n:m?n[v]||a(v,{}):(n[v]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(p=o(r,l))&&p.value:r[l],!s(h?l:v+(m?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),c(r,l,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:function(t,e,r){var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,r){var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,r){var n=r(9781),o=r(2597),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,s=a&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:s}},1702:function(t,e,r){var n=r(4374),o=Function.prototype,i=o.bind,c=o.call,a=n&&i.bind(c,c);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},5005:function(t,e,r){var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:function(t,e,r){var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,e,r){var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7854),o=r(1702),i=r(7293),c=r(4326),a=n.Object,u=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?u(t,""):a(t)}:a},2788:function(t,e,r){var n=r(1702),o=r(614),i=r(5465),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:function(t,e,r){var n,o,i,c=r(8536),a=r(7854),u=r(1702),s=r(111),l=r(8880),f=r(2597),d=r(5465),p=r(6200),v=r(3501),h="Object already initialized",m=a.TypeError,b=a.WeakMap;if(c||d.state){var y=d.state||(d.state=new b),g=u(y.get),x=u(y.has),S=u(y.set);n=function(t,e){if(x(y,t))throw new m(h);return e.facade=t,S(y,t,e),e},o=function(t){return g(y,t)||{}},i=function(t){return x(y,t)}}else{var E=p("state");v[E]=!0,n=function(t,e){if(f(t,E))throw new m(h);return e.facade=t,l(t,E,e),e},o=function(t){return f(t,E)?t[E]:{}},i=function(t){return f(t,E)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return r}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,r){var n=r(7293),o=r(614),i=/#|\.prototype\./,c=function(t,e){var r=u[a(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},a=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=c.data={},s=c.NATIVE="N",l=c.POLYFILL="P";t.exports=c},111:function(t,e,r){var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},2190:function(t,e,r){var n=r(7854),o=r(5005),i=r(614),c=r(7976),a=r(3307),u=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&c(e.prototype,u(t))}},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(614),i=r(2788),c=n.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},3070:function(t,e,r){var n=r(7854),o=r(9781),i=r(4664),c=r(3353),a=r(9670),u=r(4948),s=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?c?function(t,e,r){if(a(t),e=u(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=u(e),a(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(6916),i=r(5296),c=r(9114),a=r(5656),u=r(4948),s=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=u(e),l)try{return f(t,e)}catch(t){}if(s(t,e))return c(!o(i.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,r){var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){var n=r(1702),o=r(2597),i=r(5656),c=r(1318).indexOf,a=r(3501),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&u(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~c(l,r)||u(l,r));return l}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:function(t,e,r){var n=r(7854),o=r(6916),i=r(614),c=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!c(n=o(r,t)))return n;if(i(r=t.valueOf)&&!c(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!c(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(1702),i=r(8006),c=r(5181),a=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=c.f;return r?u(e,r(t)):e}},1320:function(t,e,r){var n=r(7854),o=r(614),i=r(2597),c=r(8880),a=r(3505),u=r(2788),s=r(9909),l=r(6530).CONFIGURABLE,f=s.get,d=s.enforce,p=String(String).split("String");(t.exports=function(t,e,r,u){var s,f=!!u&&!!u.unsafe,v=!!u&&!!u.enumerable,h=!!u&&!!u.noTargetGet,m=u&&void 0!==u.name?u.name:e;o(r)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==m)&&c(r,"name",m),(s=d(r)).source||(s.source=p.join("string"==typeof m?m:""))),t!==n?(f?!h&&t[e]&&(v=!0):delete t[e],v?t[e]=r:c(t,e,r)):v?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},4488:function(t,e,r){var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,r){var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,r){var n=r(7854),o=r(6916),i=r(111),c=r(2190),a=r(8173),u=r(2140),s=r(5112),l=n.TypeError,f=s("toPrimitive");t.exports=function(t,e){if(!i(t)||c(t))return t;var r,n=a(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||c(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:function(t,e,r){var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,r){var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:function(t,e,r){var n=r(1702),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(2597),c=r(9711),a=r(133),u=r(3307),s=o("wks"),l=n.Symbol,f=l&&l.for,d=u?l:l&&l.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!a&&"string"!=typeof s[t]){var e="Symbol."+t;a&&i(l,t)?s[t]=l[t]:s[t]=u&&f?f(e):d(e)}return s[t]}},1817:function(t,e,r){"use strict";var n=r(2109),o=r(9781),i=r(7854),c=r(1702),a=r(2597),u=r(614),s=r(7976),l=r(1340),f=r(3070).f,d=r(9920),p=i.Symbol,v=p&&p.prototype;if(o&&u(p)&&(!("description"in v)||void 0!==p().description)){var h={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=s(v,this)?new p(t):void 0===t?p():p(t);return""===t&&(h[e]=!0),e};d(m,p),m.prototype=v,v.constructor=m;var b="Symbol(test)"==String(p("test")),y=c(v.toString),g=c(v.valueOf),x=/^Symbol\((.*)\)[^)]+$/,S=c("".replace),E=c("".slice);f(v,"description",{configurable:!0,get:function(){var t=g(this),e=y(t);if(a(h,t))return"";var r=b?E(e,7,-1):S(e,x,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.p="",function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(1817);class e{static create(t,r,o,i=null){if(!this.inProcess){switch(this.callback=o,this.xhr=new XMLHttpRequest,this.xhr.open(t,`${this.url}/?method=${r}`,!0),r){case"editTicket":case"removeTicket":case"createTicket":this.xhr.send(i);break;default:this.xhr.send()}this.inProcess=!0,this.xhr.addEventListener("load",(()=>function(t,e,r){return function(t,e){if(t!==e)throw new TypeError("Private static access of wrong provenance")}(t,e),r}(e,e,n).call(e)))}}}function n(){const{xhr:t}=this;let e=null;if(t.status>=200&&t.status<300){try{e=JSON.parse(t.responseText)}catch(t){console.error(t)}return setTimeout((()=>{if(this.xhr=null,this.inProcess=!1,e.error)throw new Error(e.error);this.callback(e.result)}),500)}return null}t(e,"url","https://djreactive-heroku.herokuapp.com"),t(e,"xhr",null),t(e,"callback",null),t(e,"inProcess",!1);class o{static getFormatedDate(t){const e=new Date(t);return`${o.formatDateNumber(e.getDate())}.${o.formatDateNumber(e.getMonth()+1)}.${o.formatDateNumber(e.getFullYear())} ${o.formatDateNumber(e.getHours())}:${o.formatDateNumber(e.getMinutes())}`}static formatDateNumber(t){return String(t).padStart(2,"0")}}(new class{constructor(){this.loaders={},this.tickets=[],this.editIcon="✎",this.isOpenModal=!1,this.divTickets=document.getElementById("widjet").querySelector(".tickets"),this.createBut=document.querySelector(".ticket__add"),this.modalCrEdit=document.querySelector(".modal__create"),this.formCrEdit=document.getElementById("create-edit"),this.modalRemove=document.querySelector(".modal__remove"),this.formRemove=document.getElementById("remove-ticket")}init(){this.createBut.addEventListener("click",(()=>this.modalCreateEdit())),this.addLoader("ticket",this.divTickets),this.buildTickets=this.buildTickets.bind(this),e.create("GET","allTickets",this.buildTickets)}buildTickets(t){this.tickets=t,this.divTickets.innerHTML="",this.tickets.forEach((t=>{const r=document.createElement("div"),n=t.status?"✓":"✗";r.setAttribute("class","ticket flex"),r.dataset.id=t.id,r.innerHTML=`\n        <div class="ticket__status ${t.status?"complete":"in_work"}">${n}</div>\n        <div class="ticket__name">${t.name}</div>\n        <div class="ticket__created">${o.getFormatedDate(t.created)}</div>\n        <div class="ticket__control">\n          <button class="button" data-control="edit">${this.editIcon}</button>\n          <button class="button" data-control="remove">🗙</button>\n        </div>\n      `,this.divTickets.appendChild(r),r.addEventListener("click",(n=>{if(this.isLoader("ticketFull")||this.isOpenModal||n.target===n.currentTarget.querySelector("button"))return;const o=r.querySelector(".ticket__full");if(o)o.remove();else{const n=document.createElement("div");n.classList.add("ticket__full"),r.querySelector(".ticket__name").appendChild(n),this.addLoader("ticketFull",n),e.create("GET",`ticketById&id=${t.id}`,(t=>{this.removeLoader("ticketFull"),n.textContent=t.description}))}})),r.querySelector("[data-control=edit]").addEventListener("click",(r=>{this.isLoader("editor")||this.isOpenModal||(r.target.textContent="",this.addLoader("editor",r.target,19),this.modalCreateEdit=this.modalCreateEdit.bind(this),e.create("GET",`ticketById&id=${t.id}`,this.modalCreateEdit))})),r.querySelector("[data-control=remove]").addEventListener("click",(()=>{this.modalDelete(r,t.name)}))})),this.removeLoader("ticket")}modalCreateEdit(t=null){if(this.isOpenModal)return;const r=document.createElement("button");r.classList.add("button"),r.textContent=t?"Изменить":"Создать",r.setAttribute("type","submit");const n=document.createElement("button");n.classList.add("button"),n.textContent="Отмена",t&&(this.getParentLoader("editor").textContent=this.editIcon,this.modalCrEdit.querySelector("#ticket-name").value=t.name,this.modalCrEdit.querySelector("#ticket-description").value=t.description,this.removeLoader("editor")),this.isOpenModal=!0,this.modalCrEdit.querySelector(".modal__title").textContent=t?"Редактирование тикета":"Создание тикета",this.modalCrEdit.style.display="block",this.formCrEdit.querySelector(".buttons").appendChild(n),this.formCrEdit.querySelector(".buttons").appendChild(r),n.addEventListener("click",(t=>{t.preventDefault(),this.hideModal(this.modalCrEdit,r,n)})),this.formCrEdit.addEventListener("submit",(o=>{o.preventDefault();const i=new FormData(this.formCrEdit);null!==t&&i.append("id",t.id),e.create("POST",null!==t?"editTicket":"createTicket",this.buildTickets,i),this.hideModal(this.modalCrEdit,r,n)}))}modalDelete(t,r){if(this.isOpenModal)return;const n=document.createElement("button");n.classList.add("button"),n.textContent="Удалить",n.setAttribute("type","submit"),n.dataset.id=t.dataset.id;const o=document.createElement("button");o.classList.add("button"),o.textContent="Отмена",this.modalRemove.querySelector(".modal__title").textContent="Удаление тикета",this.modalRemove.querySelector(".modal__message").innerHTML=`Вы действительно хотите удалить тикет <p>"${r}"</p>?`,this.formRemove.querySelector(".buttons").appendChild(o),this.formRemove.querySelector(".buttons").appendChild(n),this.modalRemove.style.display="block",o.addEventListener("click",(t=>{t.preventDefault(),this.hideModal(this.modalRemove,n,o)})),this.modalRemove.addEventListener("submit",(t=>{t.preventDefault();const{id:r}=t.target.querySelector("button[type=submit]").dataset,i=new FormData;i.append("id",r),e.create("POST","removeTicket",this.buildTickets,i),this.hideModal(this.modalRemove,n,o)})),this.isOpenModal=!0}hideModal(t,...e){t.style.display="none",t.querySelector("form").reset(),this.isOpenModal=!1,Array.from(e).forEach((t=>t.remove()))}addLoader(t,e,r=null){this.removeLoader(t);const n=document.createElement("img");n.classList.add("loader"),n.setAttribute("src","images/tail-spin.svg"),r&&(n.style.width=`${r}px`),this.loaders[t]=n,e.appendChild(n)}isLoader(t){return!!this.loaders[t]}getParentLoader(t){return this.loaders[t].parentNode}removeLoader(t){this.loaders[t]&&(this.loaders[t].remove(),delete this.loaders[t])}}).init(),r.p}()}();