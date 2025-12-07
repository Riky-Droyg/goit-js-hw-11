import{S as f,a as m,i as p}from"./assets/vendor-BkVuWn-o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector("form.form"),h=c.querySelector('input[name="search-text"]');c.addEventListener("submit",o=>{o.preventDefault();const r=h.value.trim();b(r)});const y=new f(".gallery a",{}),g=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(o){return l.classList.remove("is-hidden"),m.get("https://pixabay.com/api/",{params:{key:"53591790-b582ea9c542996630b69812e5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{const{hits:i}=r.data;if(!i.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");L(r.data.hits)}).catch(r=>{p.error({title:"Error",message:r.message,position:"topRight"})}).finally(()=>{l.classList.add("is-hidden")})}function L(o){const r=o.reduce((i,{likes:a,views:e,comments:t,downloads:s,previewURL:u,largeImageURL:n,tags:d})=>i+`<li class="photo-card">

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
        <p>Comments: <br/> ${t}</p>
      </li>
      <li>
        <p>Downloads: <br/> ${s}</p>
      </li>
    </ul> 
    </li>`,"");g.innerHTML=r,y.refresh()}
//# sourceMappingURL=index.js.map
