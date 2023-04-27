!function(){
//! Selecting form and input fields
var e=document.querySelector(".feedback-form"),a=e.querySelector('input[name="email"]'),t=e.querySelector('textarea[name="message"]'),n="feedback-form-state",l=throttle((function(){var e={email:a.value,message:t.value};localStorage.setItem(n,JSON.stringify(e))}),500);e.addEventListener("input",(function(){l()})),window.addEventListener("load",(function(){var e;(e=JSON.parse(localStorage.getItem(n)))&&(a.value=e.email||"",t.value=e.message||"")})),e.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(n),a.value="",t.value="",console.log({email:"",message:""})}))}();
//# sourceMappingURL=03-feedback.f54570e4.js.map
