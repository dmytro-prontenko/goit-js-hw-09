const t={body:document.body,start:document.querySelector("[data-start"),stop:document.querySelector("[data-stop")};let e,a=!1;t.start.disabled=!1,t.stop.disabled=!0,t.start.addEventListener("click",(function(d){if(a)return;a=!0,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.start.disabled=!0,t.stop.disabled=!1}),1e3),t.start})),t.stop.addEventListener("click",(function(d){clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0,a=!1}));
//# sourceMappingURL=01-color-switcher.e25c7043.js.map