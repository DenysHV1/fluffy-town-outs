import{S as l}from"./vendor-8b34e5c1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=()=>{const s=document.querySelector(".header-nav-mobile-button"),t=document.querySelector(".header-nav-mobile"),n=document.querySelector(".header-nav-mobile-button-close"),r=document.querySelectorAll(".header-nav-mobile-item"),e=document.querySelector(".header-logo");s.addEventListener("click",()=>{t.classList.add("is-open"),s.style.display="none",e.style.display="none"}),n.addEventListener("click",()=>{t.classList.remove("is-open"),s.style.display="flex",e.style.display="flex"}),r.forEach(o=>{o.addEventListener("click",()=>{t.classList.remove("is-open")})})},a=()=>{const s=document.querySelector(".cookies-accept-js"),t=document.querySelector(".cookies-decline-js"),n=document.querySelector(".cookies-section");if(JSON.parse(localStorage.getItem("status"))){n.style.display="none";return}s.addEventListener("click",()=>{n.style.display="none",localStorage.setItem("status",JSON.stringify(!0))}),t.addEventListener("click",()=>{n.style.display="none",localStorage.setItem("status",JSON.stringify(!1))})},d=()=>{new l(".swiper-reviews",{slidesPerView:1,slidesPerGroup:1,loop:!1,grabCursor:!0,spaceBetween:24,speed:800,simulateTouch:!0,touchRatio:1,initialSlide:0,mousewheel:{sensitivity:.5},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},1440:{slidesPerView:2}}})},u=()=>{const s=document.querySelectorAll(".faq-question-button-js");s.forEach(t=>{t.addEventListener("click",()=>{const n=t.nextElementSibling.classList.contains("open");s.forEach(r=>{r.nextElementSibling.classList.remove("open")}),n||(t.nextElementSibling.classList.add("open"),[...t.children].forEach(r=>{r.nodeName==="svg"&&(r.style.transform="rotate(0deg)")}))})})};c();a();d();u();
//# sourceMappingURL=main-4c20e2c3.js.map
