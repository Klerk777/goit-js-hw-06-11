const e=document.querySelector(".login-form");e.addEventListener("submit",(a=>{a.preventDefault(),""===e.elements.email.value||""===e.elements.password.value?alert("Всі поля форми повинні бути заповнені!"):(console.table((()=>{const a={};return a[e.email.name]=e.email.value,a[e.password.name]=e.password.value,a})()),e.reset())}));
//# sourceMappingURL=hw-06-08.08dc9265.js.map
