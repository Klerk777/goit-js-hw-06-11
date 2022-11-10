const t=document.querySelector(".change-color"),e=document.querySelector(".color");t.addEventListener("click",(()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t,e.textContent=t,e.parentElement.style.color=t,e.parentElement.style.filter="invert(1)"}));
//# sourceMappingURL=hw-06-09.2a9f4a15.js.map
