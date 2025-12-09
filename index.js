import{a as p,S as m,i as a}from"./assets/vendor-BbatNMSH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(o,r){return p.get("https://pixabay.com/api/",{params:{key:"53591790-b582ea9c542996630b69812e5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:6}}).then(i=>i.data.hits)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new m(".photo-card div a",{});document.querySelector(".btn[type=submit]");function g(o){return h(o).then(r=>{if(!r.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r})}function b(o){const r=o.reduce((i,{likes:s,views:e,comments:t,downloads:n,previewURL:u,largeImageURL:d,tags:f})=>i+`<li class="photo-card">
        <div>
          <a href="${d}">
            <img src="${u}" alt="${f}">
          </a>
        </div>
        <ul>
          <li><p>Likes:<br>${s}</p></li>
          <li><p>Views:<br>${e}</p></li>
          <li><p>Comments:<br>${t}</p></li>
          <li><p>Downloads:<br>${n}</p></li>
        </ul>
      </li>`,"");c.innerHTML=r,y.refresh()}function L(){c.innerHTML=""}function S(){l.classList.add("is-hidden")}function q(){l.classList.remove("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.info({title:"info",message:"Поле вводу порожнє",position:"topRight"});return}L(),q(),g(r).then(i=>b(i)).catch(i=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
