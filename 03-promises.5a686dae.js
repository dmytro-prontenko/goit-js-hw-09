function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var u=n("7Y9D8");const l={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),createPromisesBtn:document.querySelector('[type="submit"]')};function i(t,o){const r=Math.random()>.3;return new Promise(r?r=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}`)}:r=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}`)})}console.log(l.amount),l.form.addEventListener("submit",(function(e){const t=Number(l.amount.value);e.preventDefault();for(let e=1;e<=t;e++){let t=Number(l.delay.value)+Number(l.step.value)*(e-1);setTimeout((()=>{i(e,t)}),t)}l.form.reset()}));
//# sourceMappingURL=03-promises.5a686dae.js.map