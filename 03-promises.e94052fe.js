!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var u=r("6JpON"),a={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),createPromisesBtn:document.querySelector('[type="submit"]')};console.log(a.amount),a.form.addEventListener("submit",(function(o){var n=function(o){var n=Number(a.delay.value)+Number(a.step.value)*(o-1);setTimeout((function(){var t,r;t=o,r=n,Math.random()>.3?new Promise((function(o){e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r))})):new Promise((function(o){e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r))}))}),n)},t=Number(a.amount.value);o.preventDefault();for(var r=1;r<=t;r++)n(r);a.form.reset()}))}();
//# sourceMappingURL=03-promises.e94052fe.js.map
