const e={decrementBtn:document.querySelector('[data-action="decrement"]'),incrementBtn:document.querySelector('[data-action="increment"]'),value:document.querySelector("#value")};let t=0;const n=()=>e.value.textContent=t;e.decrementBtn.addEventListener("click",(()=>{t-=1,n()})),e.incrementBtn.addEventListener("click",(()=>{t+=1,n()}));
//# sourceMappingURL=hw-06-04.8e2d6b8b.js.map
