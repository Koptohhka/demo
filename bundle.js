!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=8)}([function(n,r,e){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function s(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function d(n,r){for(var e={},t=[],o=0;o<n.length;o++){var i=n[o],d=r.base?i[0]+r.base:i[0],p=e[d]||0,c="".concat(d," ").concat(p);e[d]=p+1;var l=s(c),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(u)):a.push({identifier:c,updater:_(u,r),references:1}),t.push(c)}return t}function p(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=e.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var c,l=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function u(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function h(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var x=null,f=0;function _(n,r){var e,t,o;if(r.singleton){var i=f++;e=x||(x=p(r)),t=u.bind(null,e,i,!1),o=u.bind(null,e,i,!0)}else e=p(r),t=h.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var e=d(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=s(e[t]);a[o].references--}for(var i=d(n,r),p=0;p<e.length;p++){var c=s(e[p]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}e=i}}}},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,s,d;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&o[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),r.push(d))}},r}},function(n,r,e){var t=e(0),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Montserrat', sans-serif;\r\n    outline: none;\r\n}\r\n\r\nhtml {\r\n    background: black;\r\n}\r\n\r\nbody {\r\n    /*background: url('./assets/img/bg\\ 3.png') no-repeat;*/\r\n    background: black;\r\n    position: relative;\r\n    z-index: -1;\r\n    font-size: 16px;\r\n    background-size: contain;\r\n}\r\n\r\nfieldset {\r\n    border: none;\r\n}\r\n\r\n.body-gradient {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: linear-gradient(180deg, rgba(8, 15, 26, 0.59) 0%, rgba(86, 86, 131, 0.46) 100%);\r\n    z-index: -5;\r\n}\r\n\r\n.body-background {\r\n    z-index: -4;\r\n    background-size: cover;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1130px;\r\n    width: 100%;\r\n    padding: 0 20px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.header {\r\n    padding-top: 40px;\r\n    margin-bottom: 57px;\r\n}\r\n\r\n.header__wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header__inputs {\r\n    display: flex;\r\n    width: 223px;\r\n    justify-content: space-between;\r\n    height: 44px;\r\n}\r\n\r\n.header__input {\r\n    display: block;\r\n    background-color: transparent;\r\n    border: 2px solid white;\r\n\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n\r\n.inputs__reboot {\r\n    height: 100%;\r\n    width: 44px;\r\n    /*background: url('./assets/img/Intersect.svg') no-repeat;*/\r\n    background-position: 0 6px;\r\n    /*background-color: rgba(174, 181, 185, 0.5);*/\r\n}\r\n\r\n.reboot-arrow {\r\n    width: 20px;\r\n    height: 25px;\r\n    fill: white;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.inputs__select {\r\n    padding-left: 11px;\r\n    width: 71px;\r\n\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n\r\n.inputs__select::after {\r\n    content: \"\";\r\n    display: block;\r\n    border-style: solid;\r\n    border-width: 6px 5px 0 5px;\r\n    border-color: #000 transparent transparent transparent;\r\n    pointer-events: none;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 1rem;\r\n    z-index: 1;\r\n    margin-top: -3px;\r\n\r\n}\r\n\r\n.inputs__degree-button {\r\n    width: 88px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.F,\r\n.C {\r\n    width: 44px;\r\n    border: none;\r\n    background-color: transparent;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.F {\r\n    border-right: solid white;\r\n    border-radius: 5px 0px 0px 5px;\r\n    -webkit-border-radius: 5px 0px 0px 5px;\r\n    -moz-border-radius: 5px 0px 0px 5px;\r\n    -ms-border-radius: 5px 0px 0px 5px;\r\n    -o-border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.C {\r\n    border-left: 1px solid white;\r\n}\r\n\r\n.header__search-field {\r\n    display: flex;\r\n    width: 375px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.search-field__input {\r\n    font-weight: normal;\r\n    text-transform: unset;\r\n    padding-left: 15px;\r\n    width: 274px;\r\n    height: 100%;\r\n    border: 2px solid white;\r\n    border-radius: 5px 0px 0px 5px;\r\n    -webkit-border-radius: 5px 0px 0px 5px;\r\n    -moz-border-radius: 5px 0px 0px 5px;\r\n    -ms-border-radius: 5px 0px 0px 5px;\r\n    -o-border-radius: 5px 0px 0px 5px;\r\n}\r\n\r\n.search-field__search-button {\r\n    font-size: 14px;\r\n    width: 101px;\r\n    border-radius: 0px 5px 5px 0px;\r\n    -webkit-border-radius: 0px 5px 5px 0px;\r\n    -moz-border-radius: 0px 5px 5px 0px;\r\n    -ms-border-radius: 0px 5px 5px 0px;\r\n    -o-border-radius: 0px 5px 5px 0px;\r\n}\r\n\r\n.search-field__search-button:hover,\r\n.inputs__reboot:hover,\r\n.F:hover,\r\n.C:hover,\r\n.inputs__select:hover {\r\n    cursor: pointer;\r\n    background-color: white;\r\n    color: black;\r\n    transition: 0.3s;\r\n    -webkit-transition: 0.3s;\r\n    -moz-transition: 0.3s;\r\n    -ms-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n}\r\n\r\n.inputs__degree-button--active {\r\n    background-color: white;\r\n    color: black;\r\n    cursor: auto;\r\n}\r\n\r\n.inputs__reboot .reboot-arrow:hover {\r\n    fill: black;\r\n}\r\n\r\n.main {\r\n    color: white;\r\n}\r\n\r\n.main__wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.section-left__town-title {\r\n    font-size: 44px;\r\n    line-height: 54px;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.section-left__day-info {\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n}\r\n\r\n.section-left__today-container {\r\n    display: flex;\r\n    font-weight: bold;\r\n    align-items: flex-end;\r\n\r\n    position: relative;\r\n}\r\n\r\n.today-container__degree-number {\r\n    position: relative;\r\n}\r\n\r\n.today-container__degree-title {\r\n    font-size: 306px;\r\n    /*line-height: 373px;*/\r\n    margin-right: 72px;\r\n\r\n    z-index: 2;\r\n}\r\n\r\n.today-container__degree-round {\r\n    position: absolute;\r\n    font-size: 100px;\r\n    line-height: 0px;\r\n    right: 5px;\r\n    /*top: calc(50% - 35px/2 - 79.5px);*/\r\n    top: 50px;\r\n    z-index: 2;\r\n}\r\n\r\n.today-container__cloud {\r\n    position: absolute;\r\n\r\n    width: 200px;\r\n    height: 200px;\r\n    top: -5px;\r\n    right: 0;\r\n}\r\n\r\n.today-container__weather-info {\r\n    font-size: 17px;\r\n    line-height: 37px;\r\n    padding-bottom: 70px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.weather-info__weather-type {\r\n    text-transform: uppercase;\r\n}\r\n\r\n.section-left__another-days {\r\n    list-style: none;\r\n\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.another-days__another-day {\r\n    position: relative;\r\n}\r\n\r\n.another-day__title {\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    line-height: 27px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.another-day__degree {\r\n    font-weight: 600;\r\n    font-size: 80px;\r\n    line-height: 98px;\r\n}\r\n\r\n.another-day__icon {\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    top: -10px;\r\n    right: -70px;\r\n    z-index: -5;\r\n}\r\n\r\n.main__section-left {\r\n    max-width: 635px;\r\n    width: 100%;\r\n}\r\n\r\n.main__section-right {\r\n    position: relative;\r\n}\r\n\r\n.section-right__map-container {\r\n    position: relative;\r\n    /*top: 20px;\r\n    left: 40px;\r\n    bottom: 0;*/\r\n    width: 350px;\r\n    height: 350px;\r\n\r\n    border-radius: 25px;\r\n    -webkit-border-radius: 25px;\r\n    -moz-border-radius: 25px;\r\n    -ms-border-radius: 25px;\r\n    -o-border-radius: 25px;\r\n}\r\n\r\n.section-right__coords-container {\r\n    padding-top: 20px;\r\n    padding-left: 30px;\r\n    text-align: right;\r\n}\r\n\r\n.coords-container__coord-row {\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    color: white;\r\n}\r\n\r\n@media (max-width: 1064px) {\r\n    .section-right__map-container {\r\n        width: 300px;\r\n        height: 300px;\r\n    }\r\n\r\n    @media (max-width: 934px) {\r\n        .section-right__map-container {\r\n            width: 250px;\r\n            height: 250px;\r\n        }\r\n\r\n        @media (max-width: 900px) {\r\n            .header {\r\n                margin-bottom: 30px;\r\n            }\r\n\r\n            .main__wrapper {\r\n                flex-direction: column;\r\n                position: relative;\r\n            }\r\n\r\n            .main__section-left {\r\n                max-width: 90%;\r\n            }\r\n\r\n            .section-left__today-container {}\r\n\r\n            .main__section-right {\r\n                order: -1;\r\n            }\r\n\r\n            .main__section-right {\r\n                margin-bottom: 50px;\r\n            }\r\n\r\n            .section-right__map-container {\r\n                width: 100%;\r\n                height: 250px;\r\n                /*top: -210px;\r\n                left: 0px;*/\r\n            }\r\n\r\n            .section-left__another-days {\r\n                margin: 0 auto;\r\n            }\r\n\r\n            @media (max-width: 730px) {\r\n                .section-left__another-days {\r\n                    width: 85%;\r\n                }\r\n\r\n                .header__search-field {\r\n                    width: auto;\r\n                }\r\n\r\n                .search-field__input {\r\n                    width: 230px;\r\n                }\r\n\r\n                .another-day__icon {\r\n                    width: 70px;\r\n                    height: 70px;\r\n                    right: -50px;\r\n                }\r\n\r\n                @media (max-width: 700px) {\r\n                    .section-left__town-title {\r\n                        font-size: 38px;\r\n                    }\r\n\r\n                    .today-container__degree-title {\r\n                        font-size: 240px;\r\n                        margin-right: 40px;\r\n                    }\r\n\r\n                    .today-container__degree-round {\r\n                        font-size: 65px;\r\n                    }\r\n\r\n                    .today-container__cloud {\r\n                        position: absolute;\r\n\r\n                        width: 150px;\r\n                        height: 150px;\r\n                        z-index: 5;\r\n                        top: -40px;\r\n                        right: 20px;\r\n                    }\r\n\r\n                    .today-container__weather-info {\r\n                        line-height: 28px;\r\n                    }\r\n\r\n                    .another-day__title {\r\n                        font-size: 18px;\r\n                        line-height: 27px;\r\n                    }\r\n\r\n                    .another-day__degree {\r\n                        font-size: 50px;\r\n                        line-height: 68px;\r\n                    }\r\n\r\n                    .another-day__icon {\r\n                        width: 80px;\r\n                        height: 80px;\r\n                        top: -10px;\r\n                        right: -40px;\r\n                    }\r\n\r\n                    @media (max-width: 666px) {\r\n                        .search-field__input {\r\n                            width: 180px;\r\n                        }\r\n\r\n                        .search-field__search-button {\r\n                            width: 75px;\r\n                            font-size: 12px;\r\n                        }\r\n\r\n                        .main__section-left {\r\n                            max-width: none;\r\n                        }\r\n\r\n                        @media (max-width: 600px) {\r\n                            .main__section-left {}\r\n\r\n                            .today-container__degree-title {}\r\n\r\n                            .today-container__degree-round {}\r\n\r\n                            @media (max-width: 570px) {\r\n                                .main__section-left {}\r\n\r\n                                .section-left__town-title {\r\n                                    font-size: 27px;\r\n                                }\r\n\r\n                                .today-container__degree-title {\r\n                                    font-size: 180px;\r\n                                    margin-right: 40px;\r\n                                }\r\n\r\n                                .today-container__degree-round {\r\n                                    font-size: 35px;\r\n                                }\r\n\r\n                                .section-left__day-info {\r\n                                    font-size: 18px;\r\n                                }\r\n\r\n                                .today-container__cloud {\r\n                                    position: absolute;\r\n\r\n                                    width: 100px;\r\n                                    height: 100px;\r\n                                    z-index: 5;\r\n                                    top: -80px;\r\n                                    right: 30px;\r\n                                }\r\n\r\n                                .header__inputs {\r\n                                    height: 37px;\r\n                                    width: 190px;\r\n                                }\r\n\r\n                                .header__input {\r\n                                    font-size: 12px;\r\n                                }\r\n\r\n                                .inputs__degree-button {\r\n                                    width: 64px;\r\n                                }\r\n\r\n                                .inputs__reboot,\r\n                                .F,\r\n                                .C {\r\n                                    width: 37px;\r\n                                }\r\n\r\n                                .inputs__select {\r\n                                    width: 57px;\r\n                                }\r\n\r\n                                .search-field__input {\r\n                                    width: 150px;\r\n                                }\r\n\r\n                                .search-field__search-button {\r\n                                    width: 60px;\r\n                                    font-size: 10px;\r\n                                }\r\n\r\n                                @media (max-width: 500px) {\r\n                                    .section-left__today-container {\r\n                                        align-items: center;\r\n                                    }\r\n\r\n                                    .today-container__weather-info {\r\n                                        padding-bottom: 0;\r\n                                        font-size: 14px;\r\n                                    }\r\n\r\n                                    .another-day__title {\r\n                                        font-size: 16px;\r\n                                    }\r\n\r\n                                    .another-day__degree {\r\n                                        font-size: 34px;\r\n                                        line-height: 43px;\r\n                                    }\r\n\r\n                                    @media (max-width: 460px) {\r\n                                        .today-container__degree-title {\r\n                                            font-size: 145px;\r\n                                        }\r\n\r\n                                        .another-day__icon {\r\n                                            width: 55px;\r\n                                            height: 55px;\r\n                                        }\r\n\r\n                                        .inputs__degree-button {\r\n                                            width: 64px;\r\n                                        }\r\n\r\n                                        .inputs__reboot,\r\n                                        .F,\r\n                                        .C {\r\n                                            width: 37px;\r\n                                        }\r\n\r\n                                        .inputs__select {\r\n                                            width: 50px;\r\n                                        }\r\n\r\n                                        .search-field__input {\r\n                                            width: 130px;\r\n                                        }\r\n\r\n                                        .search-field__search-button {\r\n                                            width: 55px;\r\n\r\n                                        }\r\n\r\n                                        .header__inputs {\r\n                                            width: 170px;\r\n                                        }\r\n\r\n                                        .today-container__cloud {\r\n                                            right: -20px;\r\n                                        }\r\n\r\n                                        @media (max-width: 480px) {\r\n                                            .section-left__town-title {\r\n                                                font-size: 21px;\r\n                                            }\r\n\r\n                                            .today-container__degree-title {\r\n                                                margin-right: 18px;\r\n                                            }\r\n\r\n                                            .header__inputs {\r\n                                                margin-bottom: 18px;\r\n                                            }\r\n\r\n                                            .header__wrapper {\r\n                                                flex-direction: column;\r\n                                            }\r\n\r\n                                            .header__search-field {\r\n                                                width: auto;\r\n                                                justify-content: flex-start;\r\n                                                height: 37px;\r\n                                            }\r\n\r\n                                            .search-field__input {\r\n                                                width: 80%;\r\n                                            }\r\n\r\n                                            .search-field__search-button {\r\n                                                width: 20%;\r\n                                            }\r\n\r\n                                            .section-left__another-days {\r\n                                                width: 87%;\r\n                                            }\r\n\r\n                                            .another-day__icon {\r\n                                                top: -30px;\r\n                                            }\r\n\r\n                                            .another-day__title {\r\n                                                font-size: 14px;\r\n                                            }\r\n\r\n                                            @media (max-width: 380px) {\r\n                                                .today-container__weather-info {\r\n                                                    font-size: 11px;\r\n                                                }\r\n\r\n                                                .today-container__degree-title {\r\n                                                    font-size: 110px;\r\n                                                }\r\n\r\n                                                .today-container__cloud {\r\n                                                    width: 70px;\r\n                                                    height: 70px;\r\n                                                    top: -40px;\r\n                                                    right: 20px;\r\n                                                }\r\n\r\n                                                .another-day__title {\r\n                                                    font-size: 10px;\r\n                                                }\r\n\r\n                                                .another-day__degree {\r\n                                                    font-size: 24px;\r\n                                                    line-height: 21px;\r\n                                                }\r\n\r\n                                                .another-day__icon {\r\n                                                    width: 35px;\r\n                                                    height: 35px;\r\n                                                    top: 20px;\r\n                                                    right: -10px;\r\n                                                }\r\n\r\n                                                .main__section-left {\r\n                                                    padding-bottom: 10px;\r\n                                                }\r\n\r\n                                                .another-days__another-day {\r\n                                                    margin-right: 6px;\r\n                                                }\r\n\r\n                                                @media (max-width: 330px) {\r\n                                                    .today-container__cloud {\r\n                                                        right: -15body-backgroundpx;\r\n                                                    }\r\n                                                }\r\n                                            }\r\n                                        }\r\n                                    }\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}",""]),n.exports=r},function(n,r,e){var t=e(0),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,".loader-container {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.loader-container--start-mode {\r\n    \r\n}\r\n\r\n.loader,\r\n.loader:after {\r\n  border-radius: 50%;\r\n  width: 10em;\r\n  height: 10em;\r\n}\r\n.loader {\r\n  margin: 60px auto;\r\n  font-size: 40px;\r\n  position: relative;\r\n  text-indent: -9999em;\r\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\r\n  border-left: 1.1em solid #ffffff;\r\n  -webkit-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-animation: load8 1.1s infinite linear;\r\n  animation: load8 1.1s infinite linear;\r\n}\r\n@-webkit-keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes load8 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n",""]),n.exports=r},function(n,r,e){var t=e(0),o=e(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,r,e){(r=e(1)(!1)).push([n.i,".error-popup {\r\n    width: 340px;\r\n    height: 200px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 9;\r\n    border: solid rgb(173, 3, 3) 2px;\r\n    background-color: rgba(0, 0, 0, 0.493);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    transform: translate(-50%, -100%);\r\n    -webkit-transform: translate(-50%, -100%);\r\n    -moz-transform: translate(-50%, -100%);\r\n    -ms-transform: translate(-50%, -100%);\r\n    -o-transform: translate(-50%, -100%);\r\n    -webkit-border-radius: 5px;\r\n    -moz-border-radius: 5px;\r\n    -ms-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n}\r\n\r\n.error-popup__error-message {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.error-popup__icon {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    fill: white;\r\n    z-index: 10;\r\n}\r\n\r\n.error-popup__icon:hover {\r\n    cursor: pointer;\r\n    fill: rgb(192, 2, 2);\r\n    transition: 0.3s;\r\n    -webkit-transition: 0.3s;\r\n    -moz-transition: 0.3s;\r\n    -ms-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n}\r\n",""]),n.exports=r},function(n,r,e){"use strict";e.r(r);e(2),e(4),e(6);var t=e.p+"57fd2b6a95444bd86ed29bda8e5b8fb2.svg",o=e.p+"19ff3c30164844769f3ce4b84c5b180f.svg",i=e.p+"44fb82231e1f5a7515c3d42a24af16aa.svg",a=e.p+"130d6250fca4e54ff49f051788a840ef.svg",s=e.p+"c90a1604f5f5f5bea2edcac4ba61d8a4.svg",d=e.p+"874c6a3fe4937d85ef0a6ca3ce8466ee.svg",p=e.p+"c90bdee4da1603d1252136515065c96b.svg";const c={en:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ru:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],pl:["Niedziela","Poniedzialek","Wtorek","Sroda","Czwartek","Piatek","Sobota"],be:["Нядзеля","Панядзелак","Аўторак","Серада","Чацвер","Пятніца","субота"]},l={en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],pl:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"],ru:["Янв.","Февр.","Март","Апр.","Май","Июнь","Июль","Авг.","Сент.","Окт.","Нояб.","Дек."],be:["Студз.","Февр.","Сакавік","крас.","Май","Чэрвень","Ліпень","жнів.","Сэнт.","Каст.","Ліст.","Cнеж."]},u="fd94bceee040423489f53c43355656c0",h={en:{"feels like expression":"feels like","humidity expression":"humidity","wind expression":"Wind speed","error popup text":"Please enter a valid request!",palceholder:"Search by city name or coords...",coordinates:["Latitude","Longititude"]},ru:{"feels like expression":"ощущается как","humidity expression":"влажность","wind expression":"Скорость ветра","error popup text":"Пожалуйста, введите корректный запрос!",palceholder:"Введите город...",coordinates:["Широта","Долгота"]},pl:{"feels like expression":"Czuje się jak","humidity expression":"Wilgotność","wind expression":"Prędkość wiatru","error popup text":"Wpisz poprawne zapytanie!",palceholder:"Znajdź miasto...",coordinates:["Szerokość","Długość"]},be:{"feels like expression":"Адчуваецца як","humidity expression":"Вільготнасць","wind expression":"Xуткасць ветру","error popup text":"Калі ласка, увядзіце карэктны запыт!",palceholder:"Знайсці горад...",coordinates:["Шырата","Даўгата"]}};async function x(){const n=await fetch("https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=ap9MW6-kwkmLkjbbJDgCXO4OHqPQtVpFP_dha2cT8io"),r=await n.json();document.querySelector(".body-background").style.background=`url('${r.urls.full}') fixed no-repeat`}let f=new Date;function _(n){return new Date(n).getDay()-1}function g(n){document.querySelector("body").insertAdjacentHTML("afterbegin",`<div id="error-popup" class="error-popup">\n    <svg class="error-popup__icon" fill="" aria-hidden="true" focusable="false" data-prefix="far"\n        data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img"\n        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n        <path\n            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z">\n        </path>\n    </svg>\n    <p class="error-popup__error-message">${n}</p>\n    </div>`),document.addEventListener("click",(function n(r){r.target.classList.contains("error-popup")||r.target.classList.contains("error-popup__error-message")||(document.getElementById("error-popup").remove(),document.removeEventListener("click",n)),document.removeEventListener("click",n)}))}function m(n){let r="clear";return r=n<300?"thunder":n>=300&&n<501?"rainy1":n>=501&&n<600?"rainy2":n>=600&&n<700?"snowy":n>=700&&n<800?"clouds2":800===n?"clear":802===n||804===n?"clouds2":"clouds1",r}const b={clear:t,thunder:o,rainy1:i,rainy2:a,snowy:s,clouds2:d,clouds1:p},y=document.getElementById("language-select"),w=document.getElementById("degree-converter"),v=new class{insertCoordinates(n,r,e){const t=n[1].toFixed(2).toString(),o=n[0].toFixed(2).toString(),i=`<p class="coords-container__coord-row">${r}: ${t.replace(".","°")}'</p>\n        <p class="coords-container__coord-row">${e}: ${o.replace(".","°")}'</p>`;document.getElementById("coordinates").innerHTML=i}init(n){mapboxgl.accessToken="pk.eyJ1Ijoia29wdG9oaGthIiwiYSI6ImNrYWN0YjU2cTFqdjkydG1rZWloeGFjaTYifQ.ePoZ9VznPV1BoZgMp8eSTA",this.map=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:n,zoom:13})}flyTo(n){this.map.flyTo({center:n,zoom:9,speed:2,curve:1,easing:n=>n})}};let k,z=[],j="en",$="",M=!0,S="M";async function L(n){const r=await fetch(`https://api.opencagedata.com/geocode/v1/json?key=fd3b45d060af433e9287616c9130e020&q=${n}&pretty=1&no_annotations=1&language=${j}`);let e;if(e=(await r.json()).results[0],!e||"country"===e.components._type)return L($),g(h[j]["error popup text"]),null;const t=await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=MCDDYFSLEOKU&format=json&by=position&lat=${e.geometry.lat}&lng=${e.geometry.lng}`),o=await t.json();!async function(n,r){const e=n.slice(0,n.indexOf(",")),t=await fetch(`https://api.weatherbit.io/v2.0/current?city=${e}&days=1&units=${S}&lang=${j}&key=${u}`);if(204===t.status)return g(h[j]["error popup text"]),L($),null;$=e;const o=(await t.json()).data[0],i=`<div class="section-left__town-title">\n        ${n}\n        </div>\n        <div class="section-left__day-info">\n    ${c[j][f.getDay()]} ${f.getDate()}, ${l[j][f.getMonth()]}, <span id="timer"></span>\n         </div>\n         <div class="section-left__today-container">\n    <div class="today-container__degree-number">\n        <p class="today-container__degree-title">${Math.ceil(o.temp)}</p>\n        <p class="today-container__degree-round">°</p>\n    </div> \n\n\n\n    <img class="today-container__cloud" src="${b[m(o.weather.code)]}">\n\n    <div class="today-container__weather-info">\n        <p class="weather-info__weather-type">${o.weather.description}</p>\n        <p class="weather-info__feels-like">${h[j]["feels like expression"]}: ${o.app_temp}°</p>\n        <p class="weather-info__wind">${h[j]["wind expression"]}  ${Math.ceil(o.wind_spd)}: m/s</p>\n        <p class="weather-info__humidity">${h[j]["humidity expression"]}: ${o.rh}%</p>\n    </div>\n    </div>`;z.push(i),async function(n){const r=`https://api.weatherbit.io/v2.0/forecast/daily?city=${n}&days=4&units=${S}&lang=${j}&key=${u}`,e=await fetch(r),t=await e.json(),o=`<ul class="section-left__another-days">\n    <li class="another-days__another-day">\n        <p class="another-day__title">${c[j][_(t.data[1].datetime)]}</p>\n        <p class="another-day__degree">${Math.ceil(t.data[1].temp)}°</p>\n        <img src="${b[m(t.data[1].weather.code)]}" alt="" class="another-day__icon">\n    </li>\n    <li class="another-days__another-day">\n        <p class="another-day__title">${c[j][_(t.data[2].datetime)]}</p>\n        <p class="another-day__degree">${Math.ceil(t.data[2].temp)}°</p>\n        <img src="${b[m(t.data[2].weather.code)]}" alt="" class="another-day__icon">\n    </li>\n    <li class="another-days__another-day">\n        <p class="another-day__title">${c[j][_(t.data[3].datetime)]}</p>\n        <p class="another-day__degree">${Math.ceil(t.data[3].temp)}°</p>\n        <img src="${b[m(t.data[3].weather.code)]}" alt="" class="another-day__icon">\n    </li>\n    </ul>`;z.push(o),document.getElementById("weather-container").innerHTML=z.join(""),z=[]}(e);let a=function(n){let r=new Date(n);return function(){const n=document.getElementById("timer");if(!n)return null;let e=r.getMinutes(),t=r.getSeconds();e<10&&(e="0"+r.getMinutes()),t<10&&(t="0"+r.getSeconds()),n.textContent=`${r.getHours()}:${e}:${t}`,r.setSeconds(r.getSeconds()+1),r=new Date(r)}}(r);k=setInterval(a,1e3)}(e.formatted,o.formatted),M?v.init([e.geometry.lng,e.geometry.lat]):v.flyTo([e.geometry.lng,e.geometry.lat]),v.insertCoordinates([e.geometry.lng,e.geometry.lat],h[j].coordinates[0],h[j].coordinates[1]),M=!1}async function C(n){L(n),document.getElementById("weather-container").innerHTML='<div class="loader-container loader-container--start-mode">\n    <div class="loader"></div>\n    </div>',clearInterval(k)}document.getElementById("reboot").addEventListener("click",x),document.getElementById("search-button").addEventListener("click",(function(){C(document.getElementById("serach-input").value)})),y.addEventListener("change",(function(n){j=n.target.value;const r=n.target.querySelectorAll("option");for(let e=0;e<r.length;e++)r[e].value===n.target.value?r[e].classList.add("language-option--active"):r[e].classList.remove("language-option--active");var e;C($),e=h[j].palceholder,document.getElementById("serach-input").placeholder=e})),w.addEventListener("click",(function(n){const r=n.target;for(let n=0;n<w.children.length;n++)w.children[n].classList.remove("inputs__degree-button--active");r.classList.add("inputs__degree-button--active"),r.dataset.units!==S&&(S=r.dataset.units,C($))})),async function(){const n=await fetch("https://ipinfo.io/json?token=228cc3bbcd9fa3"),r=await n.json();$=r.city,L($),x()}()}]);