import{S as m,a as f,i as p}from"./assets/vendor-BkVuWn-o.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const l=document.querySelector("form.form"),h=l.querySelector('input[name="search-text"]');l.addEventListener("submit",o=>{o.preventDefault();const t=h.value.trim();b(t)});const g=new m(".listSearchImage a",{}),y=document.querySelector(".listSearchImage"),c=document.querySelector(".loader");function b(o){return c.classList.remove("is-hidden"),f.get("https://pixabay.com/api/",{params:{key:"53591790-b582ea9c542996630b69812e5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{const{hits:i}=t.data;if(!i.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");S(t.data.hits)}).catch(t=>{p.error({title:"Error",message:t.message,position:"topRight"}),console.log(t)}).finally(()=>{c.classList.add("is-hidden")})}function S(o){const t=o.reduce((i,{likes:a,views:e,comments:r,downloads:s,previewURL:u,largeImageURL:n,tags:d})=>i+`<li class="photo-card">

      <div>
      <a href="${n}">
<img src="${u}" data-large-image="${n}" alt="${d}">
</a>
      </div>


        <ul>
      <li>
        <p>Likes: <br/> ${a}</p>
      </li>
      <li>
        <p>Views: <br/> ${e}</p>
      </li>
      <li>
        <p>Comments: <br/> ${r}</p>
      </li>
      <li>
        <p>Downloads: <br/> ${s}</p>
      </li>
    </ul> 
    </li>`,"");y.innerHTML=t,g.refresh()}
//# sourceMappingURL=index.js.map
