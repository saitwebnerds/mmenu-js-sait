!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s={hooks:{},extensions:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{close:null,preventDefault:null,setSelected:!0},slidingSubmenus:!0};var i={classNames:{divider:"Divider",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",vertical:"Vertical"},language:null,panelNodetype:["ul","ol","div"]};const a=(e,t)=>{"object"!=o(e)&&(e={}),"object"!=o(t)&&(t={});for(let n in t)t.hasOwnProperty(n)&&(void 0===e[n]?e[n]=t[n]:"object"==o(e[n])&&a(e[n],t[n]));return e},o=e=>({}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()),r=()=>"mm-"+l++;let l=0;const m=e=>"mm-"==e.slice(0,3)?e.slice(3):e;var d={};function c(e,t){void 0===d[t]&&(d[t]={}),a(d[t],e)}var h={Menu:"منو"},p={Menu:"Menü"},u={Menu:"Меню"};const f=e=>{const t=e.split("."),n=document.createElement(t.shift());return n.classList.add(...t),n},b=(e,t)=>t.length?Array.prototype.slice.call(e.querySelectorAll(t)):[],v=(e,t)=>{const n=Array.prototype.slice.call(e.children);return t?n.filter(e=>e.matches(t)):n},g=e=>e.filter(e=>!e.matches(".mm-hidden")),L=e=>{let t=[];return g(e).forEach(e=>{t.push(...v(e,"a.mm-listitem__text"))}),t.filter(e=>!e.matches(".mm-btn--next"))},_=(e,t,n)=>{e.matches("."+t)&&e.classList.add(n)};let w={};const E=(e,t,n)=>{"number"==typeof e&&(e="(min-width: "+e+"px)"),w[e]=w[e]||[],w[e].push({yes:t,no:n})},y=(e,t)=>{var n=t.matches?"yes":"no";for(let t=0;t<w[e].length;t++)w[e][t][n]()};c({Menu:"Menu"},"nl"),c(h,"fa"),c(p,"de"),c(u,"ru");class P{constructor(e,t,n){return this.opts=a(t,s),this.conf=a(n,i),this._api=["bind","openPanel","closePanel","setSelected"],this.node={},this.hook={},this.node.menu="string"==typeof e?document.querySelector(e):e,"function"==typeof this._deprecatedWarnings&&this._deprecatedWarnings(),this._initObservers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initAPI(),this._initMenu(),this._initPanels(),this._initOpened(),this._initMedia(),this}openPanel(e,t=!0,n=!0){if(e){if(e.matches(".mm-panel")||(e=e.closest(".mm-panel")),this.trigger("openPanel:before",[e,{animation:t,setfocus:n}]),e.parentElement.matches(".mm-listitem--vertical"))e.parentElement.classList.add("mm-listitem--opened");else{const n=v(this.node.pnls,".mm-panel--opened")[0];e.matches(".mm-panel--parent")&&n&&n.classList.add("mm-panel--highest"),v(this.node.pnls,".mm-panel").forEach(e=>{const s=["mm-panel--opened","mm-panel--parent"],i=[];t?s.push("mm-panel--noanimation"):i.push("mm-panel--noanimation"),e!==n&&s.push("mm-panel--highest"),e.classList.add(...i),e.classList.remove(...s)}),e.classList.add("mm-panel--opened");let s=b(this.node.pnls,"#"+e.dataset.mmParent)[0];for(;s;)s=s.closest(".mm-panel"),s.classList.add("mm-panel--parent"),s=b(this.node.pnls,"#"+s.dataset.mmParent)[0]}this.trigger("openPanel:after",[e,{animation:t,setfocus:n}])}}closePanel(e,t=!0){if(e){if(this.trigger("closePanel:before",[e]),e.parentElement.matches(".mm-listitem--vertical"))e.parentElement.classList.remove("mm-listitem--opened");else if(e.dataset.mmParent){const n=b(this.node.pnls,"#"+e.dataset.mmParent)[0];this.openPanel(n,t)}else{const n=v(this.node.pnls,".mm-panel")[0];e!==n&&this.openPanel(n,t)}this.trigger("closePanel:after",[e])}}togglePanel(e){let t="openPanel";(e.parentElement.matches(".mm-listitem--opened")||e.matches(".mm-panel--opened"))&&(t="closePanel"),this[t](e)}setSelected(e){this.trigger("setSelected:before",[e]),b(this.node.menu,".mm-listitem--selected").forEach(e=>{e.classList.remove("mm-listitem--selected")}),e.classList.add("mm-listitem--selected"),this.trigger("setSelected:after",[e])}bind(e,t){this.hook[e]=this.hook[e]||[],this.hook[e].push(t)}trigger(e,t){if(this.hook[e])for(var n=0,s=this.hook[e].length;n<s;n++)this.hook[e][n].apply(this,t)}_initObservers(){this.panelObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{e.matches(this.conf.panelNodetype.join(", "))&&this._initListview(e)})})}),this.listviewObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{this._initListitem(e)})})}),this.listitemObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{(null==e?void 0:e.matches(this.conf.panelNodetype.join(", ")))&&this._initSubPanel(e)})})})}_initAPI(){var e=this;this.API={},this._api.forEach(t=>{this.API[t]=function(){var n=e[t].apply(e,arguments);return void 0===n?e.API:n}}),this.node.menu.mmApi=this.API}_initHooks(){for(let e in this.opts.hooks)this.bind(e,this.opts.hooks[e])}_initAddons(){this.trigger("initAddons:before");for(let e in P.addons)P.addons[e].call(this);this.trigger("initAddons:after")}_initExtensions(){this.trigger("initExtensions:before"),"array"==o(this.opts.extensions)&&(this.opts.extensions={all:this.opts.extensions}),Object.keys(this.opts.extensions).forEach(e=>{let t=this.opts.extensions[e].map(e=>"mm-menu--"+e);t.length&&E(e,()=>{this.node.menu.classList.add(...t)},()=>{this.node.menu.classList.remove(...t)})}),this.trigger("initExtensions:after")}_initMenu(){this.trigger("initMenu:before"),this.node.wrpr=this.node.wrpr||this.node.menu.parentElement,this.node.wrpr.classList.add("mm-wrapper"),this.node.menu.classList.add("mm-menu"),this.node.menu.id=this.node.menu.id||r();const e=v(this.node.menu).filter(e=>e.matches(this.conf.panelNodetype.join(", ")));this.node.pnls=f("div.mm-panels"),this.node.menu.append(this.node.pnls),e.forEach(e=>{this._initPanel(e)}),this.trigger("initMenu:after")}_initPanels(){this.trigger("initPanels:before"),this.node.menu.addEventListener("click",e=>{var t,n;const s=(null===(n=null===(t=e.target)||void 0===t?void 0:t.closest("a[href]"))||void 0===n?void 0:n.getAttribute("href"))||"";if("#"===s.slice(0,1))try{const t=b(this.node.menu,s)[0];t&&(e.preventDefault(),this.togglePanel(t))}catch(e){}},{capture:!0}),this.trigger("initPanels:after")}_initPanel(e){var t;if(!e.matches(".mm-panel")&&(_(e,this.conf.classNames.panel,"mm-panel"),_(e,this.conf.classNames.nopanel,"mm-nopanel"),!e.matches(".mm-nopanel"))){if(this.trigger("initPanel:before",[e]),e.id=e.id||r(),e.matches("ul, ol")){let t=f("div");t.id=e.id,e.removeAttribute("id"),Array.prototype.slice.call(e.classList).filter(e=>"mm-"===e.slice(0,3)).forEach(n=>{t.classList.add(n),e.classList.remove(n)}),Object.keys(e.dataset).filter(e=>"mm"===e.slice(0,2)).forEach(n=>{t.dataset[n]=e.dataset[n],delete e.dataset[n]}),e.before(t),t.append(e),e=t}return e.classList.add("mm-panel"),(null===(t=e.parentElement)||void 0===t?void 0:t.matches(".mm-listitem--vertical"))||this.node.pnls.append(e),this._initNavbar(e),v(e,"ul, ol").forEach(e=>{this._initListview(e)}),this.panelObserver.observe(e,{childList:!0}),this.trigger("initPanel:after",[e]),e}}_initNavbar(e){if(v(e,".mm-navbar").length)return;let t=null,n=null;if(e.dataset.mmParent&&(t=b(this.node.pnls,"#"+e.dataset.mmParent)[0],n=t.closest(".mm-panel")),t&&t.matches(".mm-listitem--vertical"))return;this.trigger("initNavbar:before",[e]);let s=f("div.mm-navbar");if(this.opts.navbar.add||s.classList.add("mm-hidden"),n){let e=f("a.mm-btn.mm-btn--prev.mm-navbar__btn");e.href="#"+n.id,s.append(e)}let i=null;t?i=v(t,".mm-listitem__text")[0]:n&&(i=b(n,'a[href="#'+e.id+'"]')[0]);let a=f("a.mm-navbar__title"),o=f("span");a.append(o),o.innerHTML=e.dataset.mmTitle||(i?i.textContent:"")||this.i18n(this.opts.navbar.title)||this.i18n("Menu");let r="#";switch(this.opts.navbar.titleLink){case"anchor":i&&(r=i.getAttribute("href"));break;case"parent":n&&(r="#"+n.id)}a.setAttribute("href",r),s.append(a),e.prepend(s),this.trigger("initNavbar:after",[e])}_initListview(e){["htmlulistelement","htmlolistelement"].includes(o(e))&&(_(e,this.conf.classNames.nolistview,"mm-nolistview"),e.matches(".mm-nolistview")||(this.trigger("initListview:before",[e]),e.classList.add("mm-listview"),v(e).forEach(e=>{this._initListitem(e)}),this.listviewObserver.observe(e,{childList:!0}),this.trigger("initListview:after",[e])))}_initListitem(e){["htmllielement"].includes(o(e))&&(_(e,this.conf.classNames.divider,"mm-divider"),e.matches(".mm-divider")||(this.trigger("initListitem:before",[e]),e.classList.add("mm-listitem"),_(e,this.conf.classNames.selected,"mm-listitem--selected"),v(e,"a, span").forEach(e=>{e.classList.add("mm-listitem__text")}),v(e,this.conf.panelNodetype.join(", ")).forEach(e=>{this._initSubPanel(e)}),this.listitemObserver.observe(e,{childList:!0}),this.trigger("initListitem:after",[e])))}_initSubPanel(e){const t=e.parentElement;(e.matches("."+this.conf.classNames.vertical)||!this.opts.slidingSubmenus)&&t.classList.add("mm-listitem--vertical"),t.id=t.id||r(),e.id=e.id||r(),t.dataset.mmChild=e.id,e.dataset.mmParent=t.id;let n=v(t,".mm-btn")[0];n||(n=f("a.mm-btn.mm-btn--next.mm-listitem__btn"),v(t,"a, span").forEach(e=>{e.matches("span")?(n.classList.add("mm-listitem__text"),n.innerHTML=e.innerHTML,t.insertBefore(n,e.nextElementSibling),e.remove()):t.insertBefore(n,e.nextElementSibling)})),n.href="#"+e.id,this._initPanel(e)}_initOpened(){this.trigger("initOpened:before");const e=b(this.node.pnls,".mm-listitem--selected").pop();let t=v(this.node.pnls,".mm-panel")[0];e&&(this.setSelected(e),t=e.closest(".mm-panel")),this.openPanel(t,!1),this.trigger("initOpened:after")}_initMedia(){this.trigger("initMedia:before"),(()=>{for(let e in w){let t=window.matchMedia(e);y(e,t),t.onchange=n=>{y(e,t)}}})(),this.trigger("initMedia:after")}i18n(e){return((e,t)=>"string"==typeof t&&void 0!==d[t]&&d[t][e]||e)(e,this.conf.language)}}P.addons={},P.node={},P.vars={};var S={use:!0};var x={clone:!1,menu:{insertMethod:"prepend",insertSelector:"body"},page:{nodetype:"div",selector:null,noSelector:[]}};const M=(e,t,n)=>{e[t]=n,e.setAttribute(t,n.toString())},k=(e,t,n)=>{M(e,"aria-"+t,n)},T=e=>{const t=f("span.mm-sronly");return t.innerHTML=e,t};P.prototype.open=function(){if(!this.node.menu.matches(".mm-menu--opened")){this.trigger("open:before");this.node.wrpr.classList.add("mm-wrapper--opened"),this.node.menu.classList.add("mm-menu--opened"),this.node.wrpr.classList.add("mm-wrapper--opened"),k(this.node.menu,"hidden",!1),k(P.node.blck,"hidden",!1),this.trigger("open:after")}},P.prototype.close=function(){this.node.menu.matches(".mm-menu--opened")&&(this.trigger("close:before"),this.node.menu.classList.remove("mm-menu--opened"),this.node.wrpr.classList.remove("mm-wrapper--opened"),k(this.node.menu,"hidden",!0),k(P.node.blck,"hidden",!0),this.trigger("close:after"))},P.prototype.setPage=function(e){var t=this.conf.offCanvas;if(!e){let n="string"==typeof t.page.selector?b(document.body,t.page.selector):v(document.body,t.page.nodetype);if(n=n.filter(e=>!e.matches(".mm-menu, .mm-wrapper__blocker")),t.page.noSelector.length&&(n=n.filter(e=>!e.matches(t.page.noSelector.join(", ")))),n.length>1){let e=f("div");n[0].before(e),n.forEach(t=>{e.append(t)}),n=[e]}e=n[0]}this.trigger("setPage:before",[e]),e.classList.add("mm-page","mm-slideout"),e.id=e.id||r(),P.node.page=e,this.trigger("setPage:after",[e])};var A={enable:!0,enhance:!0};const O="ontouchstart"in window||!!navigator.msMaxTouchPoints||!1;var N={aria:!0,text:!0};var C={text:{openMenu:"Open menu",closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},H={"Open menu":"باز کردن منو","Close menu":"بستن منو","Close submenu":"بستن زیرمنو","Open submenu":"بازکردن زیرمنو","Toggle submenu":"سوییچ زیرمنو"},j={"Open menu":"Menü öffnen","Close menu":"Menü schließen","Close submenu":"Untermenü schließen","Open submenu":"Untermenü öffnen","Toggle submenu":"Untermenü wechseln"},I={"Open menu":"открыть меню","Close menu":"Закрыть меню","Close submenu":"Закрыть подменю","Open submenu":"Открыть подменю","Toggle submenu":"Переключить подменю"};c({"Open menu":"Menu openen","Close menu":"Menu sluiten","Close submenu":"Submenu sluiten","Open submenu":"Submenu openen","Toggle submenu":"Submenu wisselen"},"nl"),c(H,"fa"),c(j,"de"),c(I,"ru");var q={fix:!0};var R={close:!1,open:!1};var B={add:!1};var D={use:!1,top:[],bottom:[],position:"left",type:"default"};var F={add:!1,blockPanel:!0,visible:3};var $={breadcrumbs:{separator:"/",removeFirst:!1}};function U(){this.opts.navbars=this.opts.navbars||[],this.conf.navbars=this.conf.navbars||{},a(this.conf.navbars,$);let e=this.opts.navbars;if(void 0!==e&&(e instanceof Array||(e=[e]),e.length)){var t={};e.forEach(e=>{if(!(e=function(e){return"boolean"==typeof e&&e&&(e={}),"object"!=typeof e&&(e={}),void 0===e.content&&(e.content=["prev","title"]),e.content instanceof Array||(e.content=[e.content]),void 0===e.use&&(e.use=!0),e}(e)).use)return;const n=f("div.mm-navbar");let{position:s}=e;"bottom"!==s&&(s="top"),t[s]||(t[s]=f("div.mm-navbars.mm-navbars--"+s)),t[s].append(n);for(let t=0,s=e.content.length;t<s;t++){const s=e.content[t];if("string"==typeof s){const e=U.navbarContents[s];if("function"==typeof e)e.call(this,n);else{let e=f("span");e.innerHTML=s;const t=v(e);1==t.length&&(e=t[0]),n.append(e)}}else n.append(s)}if("string"==typeof e.type){const t=U.navbarTypes[e.type];"function"==typeof t&&t.call(this,n)}let i=()=>{n.classList.remove("mm-hidden"),k(n,"hidden",!1)},a=()=>{n.classList.add("mm-hidden"),k(n,"hidden",!0)};"boolean"==typeof e.use?this.bind("initMenu:after",i):E(e.use,i,a)}),this.bind("initMenu:after",()=>{for(let e in t)this.node.pnls["bottom"==e?"after":"before"](t[e])})}}U.navbarContents={breadcrumbs:function(e){var t=f("div.mm-navbar__breadcrumbs");e.append(t),this.bind("initNavbar:after",e=>{if(!e.querySelector(".mm-navbar__breadcrumbs")){v(e,".mm-navbar")[0].classList.add("mm-hidden");for(var t=[],n=f("span.mm-navbar__breadcrumbs"),s=e,i=!0;s;){if(!(s=s.closest(".mm-panel")).parentElement.matches(".mm-listitem--vertical")){let e=b(s,".mm-navbar__title span")[0];if(e){let n=e.textContent;n.length&&t.unshift(i?`<span>${n}</span>`:`<a href="#${s.id}">${n}</a>`)}i=!1}s=b(this.node.pnls,"#"+s.dataset.mmParent)[0]}this.conf.navbars.breadcrumbs.removeFirst&&t.shift(),n.innerHTML=t.join('<span class="mm-separator">'+this.conf.navbars.breadcrumbs.separator+"</span>"),v(e,".mm-navbar")[0].append(n)}}),this.bind("openPanel:before",e=>{var n=e.querySelector(".mm-navbar__breadcrumbs");t.innerHTML=n?n.innerHTML:""})},close:function(e){const t=f("a.mm-btn.mm-btn--close.mm-navbar__btn");e.append(t),t.append(T(this.i18n(this.conf.screenReader.text.closeMenu))),this.bind("setPage:after",e=>{t.setAttribute("href","#"+e.id)})},prev:function(e){const t=f("a.mm-btn.mm-btn--prev.mm-navbar__btn");e.append(t),this.bind("initNavbar:after",e=>{v(e,".mm-navbar")[0].classList.add("mm-hidden")}),this.bind("openPanel:before",e=>{var n;if(e.parentElement.matches(".mm-listitem--vertical"))return;const s=(null===(n=e.querySelector(".mm-navbar__btn.mm-btn--prev"))||void 0===n?void 0:n.getAttribute("href"))||"";s?(t.href=s,t.classList.remove("mm-hidden")):(t.removeAttribute("href"),t.classList.add("mm-hidden"))})},searchfield:function(e){e.id=e.id||r(),this.opts.searchfield=this.opts.searchfield||{},this.opts.searchfield.add=!0,this.opts.searchfield.addTo="#"+e.id},title:function(e){const t=f("a.mm-navbar__title"),n=f("span");let s;t.append(n),e.append(t),this.bind("openPanel:before",e=>{var s;if(e.parentElement.matches(".mm-listitem--vertical"))return;const i=b(e,".mm-navbar__title")[0];let a=(null==i?void 0:i.getAttribute("href"))||"";a?t.href=a:t.removeAttribute("href"),n.innerHTML=(null===(s=v(i,"span")[0])||void 0===s?void 0:s.innerHTML)||""}),this.bind("openPanel:before",e=>{if(this.opts.screenReader.text){if(!s)v(this.node.menu,".mm-navbars").forEach(e=>{let t=b(e,".mm-btn--prev")[0];t&&(s=t)});if(s){var n=!0;"parent"==this.opts.navbar.titleLink&&(n=!s.matches(".mm-hidden")),k(t,"hidden",n)}}})}},U.navbarTypes={tabs:function(e){function t(n){const s=v(e,`.mm-navbar__tab[href="#${n.id}"]`)[0];if(s)s.classList.add("mm-navbar__tab--selected"),k(s,"expanded",!0);else{const e=b(this.node.pnls,"#"+n.dataset.mmParent)[0];e&&t.call(this,e.closest(".mm-panel"))}}e.classList.add("mm-navbar--tabs"),e.closest(".mm-navbars").classList.add("mm-navbars--has-tabs"),v(e,"a").forEach(e=>{e.classList.add("mm-navbar__tab")}),this.bind("openPanel:before",n=>{v(e,"a").forEach(e=>{e.classList.remove("mm-navbar__tab--selected"),k(e,"expanded",!1)}),t.call(this,n)}),this.bind("initPanels:after",()=>{e.addEventListener("click",e=>{var t,n,s;const i=null===(n=null===(t=e.target)||void 0===t?void 0:t.closest(".mm-navbar__tab"))||void 0===n?void 0:n.getAttribute("href");try{null===(s=b(this.node.pnls,i+".mm-panel")[0])||void 0===s||s.classList.add("mm-panel--noanimation")}catch(e){}},{capture:!0})})}};var Y={scroll:!1,update:!1};var Z={scrollOffset:0,updateOffset:50};var z={add:!1,addTo:"panels",noResults:"No results found.",placeholder:"Search",searchIn:"panels",splash:"",title:"Search"};var W={cancel:!0,clear:!0,form:{},input:{},panel:{},submit:!1},G={Search:"جستجو","No results found.":"نتیجه‌ای یافت نشد.",cancel:"انصراف"},K={Search:"Suche","No results found.":"Keine Ergebnisse gefunden.",cancel:"beenden"},Q={Search:"Найти","No results found.":"Ничего не найдено.",cancel:"отменить"},V={Search:"Buscar","No results found.":"Nenhum resultado encontrado.",cancel:"cancelar"};c({Search:"Zoeken","No results found.":"Geen resultaten gevonden.",cancel:"annuleren"},"nl"),c(G,"fa"),c(K,"de"),c(Q,"ru"),c(V,"pt_br");const J=function(){const e=this.opts.searchfield,t=this.conf.searchfield;let n=v(this.node.pnls,".mm-panel--search")[0];return n||(n=f("div.mm-panel--search"),oe(n,t.panel),e.title.length&&(n.dataset.mmTitle=this.i18n(e.title)),n.append(f("ul")),this._initPanel(n),n)},X=function(e){const t=this.opts.searchfield;if(e.matches(t.addTo)){const t=e.matches(".mm-panel--search");if(!b(e,".mm-searchfield").length){const n=ee.call(this,t);t&&n.classList.add("mm-searchfield--cancelable"),e.prepend(n),te.call(this,n)}}if(t.splash.length&&e.matches(".mm-panel--search")&&!b(e,".mm-panel__splash").length){const n=f("div.mm-panel__splash");n.innerHTML=this.i18n(t.splash),e.append(n)}if(t.noResults.length&&!b(e,".mm-panel__noresults").length){const n=f("div.mm-panel__noresults");n.innerHTML=this.i18n(t.noResults),e.append(n)}},ee=function(e=!1){const t=this.opts.searchfield,n=this.conf.searchfield,s=f("form.mm-searchfield");oe(s,n.form);const i=f("div.mm-searchfield__input");s.append(i);const a=f("input");if(i.append(a),a.type="text",a.autocomplete="off",a.placeholder=this.i18n(t.placeholder),a.setAttribute("aria-label",this.i18n(t.placeholder)),oe(a,n.input),n.submit){const e=f("button.mm-btnreset.mm-btn.mm-btn--next.mm-searchfield__btn");e.type="submit",i.append(e)}else if(n.clear){const e=f("button.mm-btnreset.mm-btn.mm-btn--close.mm-searchfield__btn");e.type="reset",i.append(e),s.addEventListener("reset",()=>{window.requestAnimationFrame(()=>{a.dispatchEvent(new Event("input"))})})}if(n.cancel&&e){const e=f("a.mm-searchfield__cancel");e.href="#",e.textContent=this.i18n("cancel"),s.append(e),e.addEventListener("click",()=>{this.closePanel(v(this.node.pnls,".mm-panel--search")[0],!1)})}return s},te=function(e){const t=this.opts.searchfield,n=e.closest(".mm-panel")||b(this.node.pnls,".mm-panel--search")[0],s=b(e,"input")[0];let i=n.matches(".mm-panel--search")?b(this.node.pnls,t.searchIn):[n];i=i.filter(e=>!e.matches(".mm-panel--search"));const a=()=>{const t=s.value.toLowerCase().trim(),a=[];if(i.forEach(e=>{e.scrollTop=0,a.push(...b(e,".mm-listitem"))}),t.length){this.trigger("search:before"),e.classList.add("mm-searchfield--searching"),n.classList.add("mm-panel--searching"),a.forEach(e=>{const n=v(e,".mm-listitem__text")[0];var s;(!n||(s=n,Array.prototype.slice.call(s.childNodes).filter(e=>3==e.nodeType).map(e=>e.textContent).join(" ")).toLowerCase().indexOf(t)>-1)&&(e.dataset.mmSearchresult=t)});let s=0;s=n.matches(".mm-panel--search")?ne(n,t,i):ie(t,i),n.classList[0==s?"add":"remove"]("mm-panel--noresults"),this.trigger("search:after")}else this.trigger("clear:before"),e.classList.remove("mm-searchfield--searching"),n.classList.remove("mm-panel--searching"),n.classList.remove("mm-panel--noresults"),n.matches(".mm-panel--search")?se(n):ae(i),this.trigger("clear:after")};s.addEventListener("input",a),a()},ne=(e,t,n)=>{const s=b(e,".mm-listview")[0];s.innerHTML="";let i=0;return n.forEach(e=>{const n=b(e,`[data-mm-searchresult="${t}"]`);if(i+=n.length,n.length){const t=b(e,".mm-navbar__title")[0];if(t){const e=f("li.mm-divider");e.innerHTML=t.innerHTML,s.append(e)}n.forEach(e=>{s.append(e.cloneNode(!0))})}}),i},se=e=>{b(e,".mm-listview")[0].innerHTML=""},ie=(e,t)=>{let n=0;return t.forEach(t=>{const s=b(t,`[data-mm-searchresult="${e}"]`);n+=s.length,s.length&&s.forEach(t=>{const n=((e,t)=>{let n=[],s=e.previousElementSibling;for(;s;)t&&!s.matches(t)||n.push(s),s=s.previousElementSibling;return n})(t,".mm-divider")[0];n&&(n.dataset.mmSearchresult=e)}),b(t,".mm-listitem, .mm-divider").forEach(t=>{t.classList[t.dataset.mmSearchresult===e?"remove":"add"]("mm-hidden")})}),n},ae=e=>{e.forEach(e=>{b(e,".mm-listitem, .mm-divider").forEach(e=>{e.classList.remove("mm-hidden")})})},oe=(e,t)=>{t&&Object.keys(t).forEach(n=>{e[n]=t[n]})};var re={add:!1,addTo:"panels"};var le={current:!0,hover:!1,parent:!1};var me={collapsed:{use:!1,blockMenu:!0},expanded:{use:!1,initial:"open"}};
/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 */
P.addons={offcanvas:function(){this.opts.offCanvas=this.opts.offCanvas||{},this.conf.offCanvas=this.conf.offCanvas||{};const e=a(this.opts.offCanvas,S),t=a(this.conf.offCanvas,x);e.use&&(this._api.push("open","close","setPage"),P.node.blck||this.bind("initMenu:before",()=>{const e=f("a.mm-wrapper__blocker.mm-slideout");e.id=r();const n=f("div.mm-wrapper__backdrop");e.append(n),document.querySelector(t.menu.insertSelector).append(e),e.append(T(this.i18n(this.conf.screenReader.text.closeMenu))),P.node.blck=e}),this.bind("setPage:after",()=>{P.node.blck.setAttribute("href","#"+P.node.page.id)}),this.bind("initMenu:before",()=>{t.clone&&(this.node.menu=this.node.menu.cloneNode(!0),this.node.menu.id&&(this.node.menu.id="mm-"+this.node.menu.id),b(this.node.menu,"[id]").forEach(e=>{e.id="mm-"+e.id})),this.node.wrpr=document.querySelector(t.menu.insertSelector),document.querySelector(t.menu.insertSelector)[t.menu.insertMethod](this.node.menu)}),this.bind("initMenu:after",()=>{this.setPage(P.node.page),this.node.menu.classList.add("mm-menu--offcanvas");let e=window.location.hash;if(e){let t=m(this.node.menu.id);t&&t==e.slice(1)&&setTimeout(()=>{this.open()},1e3)}}),this.bind("initMenu:after",()=>{k(this.node.menu,"hidden",!0),k(P.node.blck,"hidden",!0)}),document.addEventListener("click",e=>{var t;switch(null===(t=e.target.closest("a"))||void 0===t?void 0:t.getAttribute("href")){case"#"+m(this.node.menu.id):e.preventDefault(),this.open();break;case"#"+m(P.node.page.id):e.preventDefault(),this.close()}}))},keyboardNavigation:function(){if(O)return;this.opts.keyboardNavigation=this.opts.keyboardNavigation||{};const e=a(this.opts.keyboardNavigation,A);e.enable&&(this.bind("initMenu:after",()=>{var e;this.node.menu.setAttribute("tabindex","-1"),this.node.pnls.setAttribute("tabindex","-1"),null===(e=P.node.blck)||void 0===e||e.setAttribute("tabindex","-1")}),this.bind("setPage:after",()=>{var e;null===(e=P.node.page)||void 0===e||e.setAttribute("tabindex","-1")}),this.bind("openPanel:after",(e,t)=>{t.setfocus&&this.node.pnls.focus()}),this.bind("open:after",()=>{this.node.menu.focus()}),this.bind("close:after",()=>{var e;null===(e=document.querySelector(`[href="#${this.node.menu.id}"]`)||this.node.page||null)||void 0===e||e.focus()}),this.opts.offCanvas.use&&document.addEventListener("focusin",e=>{var t,n,s;this.node.menu.matches(".mm-menu--opened")&&((null===(t=e.target)||void 0===t?void 0:t.closest("#"+this.node.menu.id))||(null===(n=e.target)||void 0===n?void 0:n.closest("#"+P.node.blck.id))||null===(s=P.node.blck)||void 0===s||s.focus())}),e.enhance&&this.node.menu.addEventListener("keydown",e=>{switch(e.key){case"Backspace":if(!e.target.closest("input")){const e=b(this.node.pnls,".mm-panel--opened")[0];e&&this.closePanel(e)}break;case"Escape":this.opts.offCanvas.use&&this.close()}}))},screenReader:function(){this.opts.screenReader=this.opts.screenReader||{},this.conf.screenReader=this.conf.screenReader||{};const e=a(this.opts.screenReader,N),t=a(this.conf.screenReader,C);e.aria&&(this.bind("initListitem:after",e=>{b(e,".mm-btn").forEach(e=>{k(e,"haspopup",!0)})}),this.bind("initPanel:after",e=>{k(e,"hidden",!0)}),this.bind("openPanel:after",()=>{b(this.node.pnls,".mm-panel").forEach(e=>{e.matches(".mm-panel--opened")||e.parentElement.matches(".mm-listitem--opened")?k(e,"hidden",!1):k(e,"hidden",!0)})}),this.bind("closePanel:after",e=>{k(e,"hidden",!0)})),e.text&&(this.bind("initNavbar:after",e=>{var n;const s=v(e,".mm-navbar")[0];s&&(null===(n=v(s,".mm-btn--prev")[0])||void 0===n||n.append(T(this.i18n(t.text.closeSubmenu))))}),this.bind("initListview:after",e=>{const n=e.closest(".mm-panel"),s=b(this.node.pnls,"#"+n.dataset.mmParent)[0];if(s){const e=v(s,".mm-btn--next")[0];if(e){const n=this.i18n(t.text[e.parentElement.matches(".mm-listitem--vertical")?"toggleSubmenu":"openSubmenu"]);e.prepend(T(n))}}}))},scrollBugFix:function(){if(!O||!this.opts.offCanvas.use)return;this.opts.scrollBugFix=this.opts.scrollBugFix||{};if(!a(this.opts.scrollBugFix,q).fix)return;const e=(e=>{let t="";return e.addEventListener("touchmove",e=>{t="",e.movementY>0?t="down":e.movementY<0&&(t="up")}),{get:()=>t}})(this.node.menu);function t(e){e.preventDefault(),e.stopPropagation()}this.node.menu.addEventListener("scroll",t,{passive:!1}),this.node.menu.addEventListener("touchmove",n=>{let s=n.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");s&&s.closest(".mm-listitem--vertical")&&(s=((e,t)=>{let n=[],s=e.parentElement;for(;s;)n.push(s),s=s.parentElement;return t?n.filter(e=>e.matches(t)):n})(s,".mm-panel").pop()),s?(s.scrollHeight===s.offsetHeight||0==s.scrollTop&&"down"==e.get()||s.scrollHeight==s.scrollTop+s.offsetHeight&&"up"==e.get())&&t(n):t(n)},{passive:!1}),this.bind("open:after",()=>{var e=v(this.node.pnls,".mm-panel--opened")[0];e&&(e.scrollTop=0)}),window.addEventListener("orientationchange",e=>{var t=v(this.node.pnls,".mm-panel--opened")[0];t&&(t.scrollTop=0,t.style["-webkit-overflow-scrolling"]="auto",t.style["-webkit-overflow-scrolling"]="touch")})},backButton:function(){if(this.opts.backButton=this.opts.backButton||{},!this.opts.offCanvas.use)return;const e=a(this.opts.backButton,R),t="#"+this.node.menu.id;if(e.close){var n=[];const e=()=>{n=[t],v(this.node.pnls,".mm-panel--opened, .mm-panel--parent").forEach(e=>{n.push("#"+e.id)})};this.bind("open:after",()=>{history.pushState(null,document.title,t)}),this.bind("open:after",e),this.bind("openPanel:after",e),this.bind("close:after",()=>{n=[],history.back(),history.pushState(null,document.title,location.pathname+location.search)}),window.addEventListener("popstate",e=>{if(this.node.menu.matches(".mm-menu--opened")&&n.length){var s=(n=n.slice(0,-1))[n.length-1];s==t?this.close():(this.openPanel(this.node.menu.querySelector(s)),history.pushState(null,document.title,t))}})}e.open&&window.addEventListener("popstate",e=>{this.node.menu.matches(".mm-menu--opened")||location.hash!=t||this.open()})},counters:function(){this.opts.counters=this.opts.counters||{};if(!a(this.opts.counters,B).add)return;const e=e=>{const t=this.node.pnls.querySelector("#"+e.dataset.mmParent);if(!t)return;const n=t.querySelector(".mm-counter");if(!n)return;const s=[];v(e,".mm-listview").forEach(e=>{s.push(...v(e))}),n.innerHTML=g(s).length.toString()},t=new MutationObserver(t=>{t.forEach(t=>{"class"==t.attributeName&&e(t.target.closest(".mm-panel"))})});this.bind("initListview:after",t=>{const n=t.closest(".mm-panel"),s=this.node.pnls.querySelector("#"+n.dataset.mmParent);if(s){if(!b(s,".mm-counter").length){const e=v(s,".mm-btn")[0];null==e||e.prepend(f("span.mm-counter"))}e(n)}}),this.bind("initListitem:after",e=>{const n=e.closest(".mm-panel");if(!n)return;this.node.pnls.querySelector("#"+n.dataset.mmParent)&&t.observe(e,{attributes:!0})})},iconbar:function(){this.opts.iconbar=this.opts.iconbar||{};const e=a(this.opts.iconbar,D);if(!e.use)return;let t;if(["top","bottom"].forEach((n,s)=>{let i=e[n];"array"!=o(i)&&(i=[i]);const a=f("div.mm-iconbar__"+n);for(let e=0,t=i.length;e<t;e++)"string"==typeof i[e]?a.innerHTML+=i[e]:a.append(i[e]);a.children.length&&(t||(t=f("div.mm-iconbar")),t.append(a))}),t){this.bind("initMenu:after",()=>{this.node.menu.prepend(t)});let n="mm-menu--iconbar-"+e.position,s=()=>{this.node.menu.classList.add(n),k(t,"hidden",!1)},i=()=>{this.node.menu.classList.remove(n),k(t,"hidden",!0)};if("boolean"==typeof e.use?this.bind("initMenu:after",s):E(e.use,s,i),"tabs"==e.type){t.classList.add("mm-iconbar--tabs"),t.addEventListener("click",e=>{const t=e.target.closest(".mm-iconbar__tab");if(t)if(t.matches(".mm-iconbar__tab--selected"))e.stopImmediatePropagation();else try{const n=b(this.node.menu,t.getAttribute("href")+".mm-panel")[0];n&&(e.preventDefault(),e.stopImmediatePropagation(),this.openPanel(n,!1))}catch(e){}});const e=n=>{b(t,"a").forEach(e=>{e.classList.remove("mm-iconbar__tab--selected")});const s=b(t,'[href="#'+n.id+'"]')[0];if(s)s.classList.add("mm-iconbar__tab--selected");else{const t=b(this.node.pnls,"#"+n.dataset.mmParent)[0];t&&e(t.closest(".mm-panel"))}};this.bind("openPanel:before",e)}}},iconPanels:function(){this.opts.iconPanels=this.opts.iconPanels||{};const e=a(this.opts.iconPanels,F);let t=!1;if("first"==e.visible&&(t=!0,e.visible=1),e.visible=Math.min(3,Math.max(1,e.visible)),e.visible++,e.add){if(this.bind("initMenu:after",()=>{this.node.menu.classList.add("mm-menu--iconpanel")}),t)this.bind("initMenu:after",()=>{var e;null===(e=v(this.node.pnls,".mm-panel")[0])||void 0===e||e.classList.add("mm-panel--iconpanel-first")});else{const t=["mm-panel--iconpanel-0","mm-panel--iconpanel-1","mm-panel--iconpanel-2","mm-panel--iconpanel-3"];this.bind("openPanel:after",n=>{if(n.parentElement.matches(".mm-listitem--vertical"))return;let s=v(this.node.pnls,".mm-panel");s=s.filter(e=>e.matches(".mm-panel--parent")),s.push(n),s=s.slice(-e.visible),s.forEach((e,n)=>{e.classList.remove(...t),e.classList.add("mm-panel--iconpanel-"+n)})})}this.bind("initPanel:after",t=>{if(e.blockPanel&&!t.parentElement.matches(".mm-listitem--vertical")&&!v(t,".mm-panel__blocker")[0]){let e=f("a.mm-panel__blocker");e.setAttribute("href","#"+t.closest(".mm-panel").id),t.prepend(e)}})}},navbars:U,pageScroll:function(){this.opts.pageScroll=this.opts.pageScroll||{},this.conf.pageScroll=this.conf.pageScroll||{};const e=a(this.opts.pageScroll,Y),t=a(this.conf.pageScroll,Z);var n;function s(){n&&window.scrollTo({top:n.getBoundingClientRect().top+document.scrollingElement.scrollTop-t.scrollOffset,behavior:"smooth"}),n=null}function i(e){try{if("#"==e.slice(0,1))return b(P.node.page,e)[0]}catch(e){}return null}if(this.opts.offCanvas.use&&e.scroll&&(this.bind("close:after",()=>{s()}),this.node.menu.addEventListener("click",e=>{var t,a;const o=(null===(a=null===(t=e.target)||void 0===t?void 0:t.closest("a[href]"))||void 0===a?void 0:a.getAttribute("href"))||"";(n=i(o))&&(e.preventDefault(),this.node.menu.matches(".mm-menu--sidebar-expanded")&&this.node.wrpr.matches(".mm-wrapper--sidebar-expanded")?s():this.close())})),e.update){let e=[];this.bind("initListview:after",t=>{const n=v(t,".mm-listitem");L(n).forEach(t=>{const n=i(t.getAttribute("href"));n&&e.unshift(n)})});let n=-1;window.addEventListener("scroll",s=>{const i=window.scrollY;for(var a=0;a<e.length;a++)if(e[a].offsetTop<i+t.updateOffset){if(n!==a){n=a;let t=v(this.node.pnls,".mm-panel--opened")[0],s=b(t,".mm-listitem"),i=L(s);i=i.filter(t=>t.matches('[href="#'+e[a].id+'"]')),i.length&&this.setSelected(i[0].parentElement)}break}},{passive:!0})}},searchfield:function(){this.opts.searchfield=this.opts.searchfield||{},this.conf.searchfield=this.conf.searchfield||{};const e=a(this.opts.searchfield,z);a(this.opts.searchfield,W);if(e.add){switch(e.addTo){case"panels":e.addTo=".mm-panel";break;case"searchpanel":e.addTo=".mm-panel--search"}switch(e.searchIn){case"panels":e.searchIn=".mm-panel"}this.bind("initPanel:after",t=>{t.matches(e.addTo)&&!t.closest(".mm-listitem--vertical")&&X.call(this,t)}),this.bind("initMenu:after",()=>{const t=J.call(this);X.call(this,t),b(this.node.menu,e.addTo).forEach(n=>{if(!n.matches(".mm-panel")){const s=ee.call(this,!0);n.prepend(s);const i=b(s,"input")[0];e.splash.length?(i.addEventListener("focusin",()=>{this.openPanel(t,!1,!1)}),this.bind("openPanel:after",e=>{e.matches(".mm-panel--search")?s.classList.add("mm-searchfield--cancelable"):s.classList.remove("mm-searchfield--cancelable")})):(this.bind("search:after",()=>{this.openPanel(t,!1,!1)}),this.bind("clear:after",()=>{this.closePanel(t,!1)})),te.call(this,s)}})}),this.bind("close:before",()=>{b(this.node.menu,".mm-searchfield input").forEach(e=>{e.blur()})})}},sectionIndexer:function(){this.opts.sectionIndexer=this.opts.sectionIndexer||{};a(this.opts.sectionIndexer,re).add&&this.bind("initPanels:after",()=>{if(!this.node.indx){let e="";"abcdefghijklmnopqrstuvwxyz".split("").forEach(t=>{e+='<a href="#">'+t+"</a>"});let t=f("div.mm-sectionindexer");t.innerHTML=e,this.node.pnls.prepend(t),this.node.indx=t,this.node.indx.addEventListener("click",e=>{e.target.matches("a")&&e.preventDefault()});let n=e=>{if(!e.target.matches("a"))return;const t=e.target.textContent,n=v(this.node.pnls,".mm-panel--opened")[0];let s=-1,i=n.scrollTop;n.scrollTop=0,b(n,".mm-divider").filter(e=>!e.matches(".mm-hidden")).forEach(e=>{s<0&&t==e.textContent.trim().slice(0,1).toLowerCase()&&(s=e.offsetTop)}),n.scrollTop=s>-1?s:i};O?(this.node.indx.addEventListener("touchstart",n),this.node.indx.addEventListener("touchmove",n)):this.node.indx.addEventListener("mouseover",n)}this.bind("openPanel:before",e=>{const t=b(e,".mm-divider").filter(e=>!e.matches(".mm-hidden")).length;this.node.indx.classList[t?"add":"remove"]("mm-sectionindexer--active")})})},setSelected:function(){this.opts.setSelected=this.opts.setSelected||{};const e=a(this.opts.setSelected,le);if("detect"==e.current){const e=t=>{t=t.split("?")[0].split("#")[0];const n=this.node.menu.querySelector('a[href="'+t+'"], a[href="'+t+'/"]');if(n)this.setSelected(n.parentElement);else{const n=t.split("/").slice(0,-1);n.length&&e(n.join("/"))}};this.bind("initMenu:after",()=>{e.call(this,window.location.href)})}else e.current||this.bind("initListview:after",e=>{v(e,".mm-listitem--selected").forEach(e=>{e.classList.remove("mm-listitem--selected")})});e.hover&&this.bind("initMenu:after",()=>{this.node.menu.classList.add("mm-menu--selected-hover")}),e.parent&&(this.bind("openPanel:after",e=>{b(this.node.pnls,".mm-listitem--selected-parent").forEach(e=>{e.classList.remove("mm-listitem--selected-parent")});let t=e;for(;t;){let e=b(this.node.pnls,"#"+t.dataset.mmParent)[0];t=null==e?void 0:e.closest(".mm-panel"),e&&!e.matches(".mm-listitem--vertical")&&e.classList.add("mm-listitem--selected-parent")}}),this.bind("initMenu:after",()=>{this.node.menu.classList.add("mm-menu--selected-parent")}))},sidebar:function(){if(!this.opts.offCanvas.use)return;this.opts.sidebar=this.opts.sidebar||{};const e=a(this.opts.sidebar,me);if(e.collapsed.use){this.bind("initMenu:after",()=>{if(this.node.menu.classList.add("mm-menu--sidebar-collapsed"),e.collapsed.blockMenu&&!v(this.node.menu,".mm-menu__blocker")[0]){const e=f("a.mm-menu__blocker");e.setAttribute("href","#"+this.node.menu.id),this.node.menu.prepend(e),e.title=this.i18n(this.conf.screenReader.text.openMenu)}});let t=()=>{this.node.wrpr.classList.add("mm-wrapper--sidebar-collapsed")},n=()=>{this.node.wrpr.classList.remove("mm-wrapper--sidebar-collapsed")};"boolean"==typeof e.collapsed.use?this.bind("initMenu:after",t):E(e.collapsed.use,t,n)}if(e.expanded.use){this.bind("initMenu:after",()=>{this.node.menu.classList.add("mm-menu--sidebar-expanded")});let t=!1,n=()=>{t=!0,this.node.wrpr.classList.add("mm-wrapper--sidebar-expanded"),this.open()},s=()=>{t=!1,this.node.wrpr.classList.remove("mm-wrapper--sidebar-expanded"),this.close()};"boolean"==typeof e.expanded.use?this.bind("initMenu:after",n):E(e.expanded.use,n,s),this.bind("close:after",()=>{t&&window.sessionStorage.setItem("mmenuExpandedState","closed")}),this.bind("open:after",()=>{t&&window.sessionStorage.setItem("mmenuExpandedState","open")});let i=e.expanded.initial;const a=window.sessionStorage.getItem("mmenuExpandedState");switch(a){case"open":case"closed":i=a}"closed"==i&&this.bind("initMedia:after",()=>{this.close()})}}};var de;t.default=P;window&&(window.Mmenu=P),(de=window.jQuery||window.Zepto||null)&&(de.fn.mmenu=function(e,t){var n=de();return this.each((function(s,i){if(!i.mmApi){var a=new P(i,e,t),o=de(a.node.menu);o.data("mmenu",a.API),n=n.add(o)}})),n})}]);