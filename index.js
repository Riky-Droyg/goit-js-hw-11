import{a as f,S as p,i as h}from"./assets/vendor-BbatNMSH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(o){return f.get("https://pixabay.com/api/",{params:{key:"53591790-b582ea9c542996630b69812e5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits)}const a=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".photo-card div a",{});function g(o){return m(o).then(t=>{if(!t.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t})}function L(o){const t=o.reduce((i,{likes:s,views:e,comments:r,downloads:n,previewURL:l,largeImageURL:u,tags:d})=>i+`<li class="photo-card">
        <div>
          <a href="${u}">
            <img src="${l}" alt="${d}">
          </a>
        </div>
        <ul>
          <li><p>Likes:<br>${s}</p></li>
          <li><p>Views:<br>${e}</p></li>
          <li><p>Comments:<br>${r}</p></li>
          <li><p>Downloads:<br>${n}</p></li>
        </ul>
      </li>`,"");a.innerHTML=t,y.refresh()}function b(){a.innerHTML=""}function v(){c.classList.add("is-hidden")}function S(){c.classList.remove("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value;b(),S(),g(t).then(i=>L(i)).catch(i=>{h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),console.log(i)}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
