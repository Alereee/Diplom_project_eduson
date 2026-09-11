import{a as e,c as t,d as n,f as r,g as i,h as a,i as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./seacrh-CCkAIUMt.js";var p,m=i((()=>{p=`data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.1224%2019.4048L18.0015%2022.9606C19.0782%2023.6123%2020.3957%2022.649%2020.1124%2021.4306L18.554%2014.744L23.7532%2010.239C24.7024%209.41729%2024.1924%207.85896%2022.9457%207.75979L16.1032%207.17896L13.4257%200.860625C12.944%20-0.286875%2011.3007%20-0.286875%2010.819%200.860625L8.14152%207.16479L1.29902%207.74563C0.0523565%207.84479%20-0.457644%209.40312%200.491523%2010.2248L5.69069%2014.7298L4.13236%2021.4165C3.84902%2022.6348%205.16652%2023.5981%206.24319%2022.9465L12.1224%2019.4048Z'%20fill='%23C6C6C6'/%3e%3c/svg%3e`})),h,g=i((()=>{h=`data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.1224%2019.4048L18.0015%2022.9606C19.0782%2023.6123%2020.3957%2022.649%2020.1124%2021.4306L18.554%2014.744L23.7532%2010.239C24.7024%209.41729%2024.1924%207.85896%2022.9457%207.75979L16.1032%207.17896L13.4257%200.860625C12.944%20-0.286875%2011.3007%20-0.286875%2010.819%200.860625L8.14152%207.16479L1.29902%207.74563C0.0523565%207.84479%20-0.457644%209.40312%200.491523%2010.2248L5.69069%2014.7298L4.13236%2021.4165C3.84902%2022.6348%205.16652%2023.5981%206.24319%2022.9465L12.1224%2019.4048Z'%20fill='black'/%3e%3c/svg%3e`})),_=a((async()=>{n(),e(),t(),m(),g();var i=new u,a=new URLSearchParams(window.location.search),o=document.querySelector(`.movie-card`),s=a.get(`id`),l=await i.getMoviePage(s);console.log(l);var d=l.trailer?.items?.find(e=>e.name===`Трейлер`);o.innerHTML=`
  <div class="movie-card movie-card-image" style="background-image: url(${l.posterUrl}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${f(l.rating||l.ratingKinopoisk)}">
        <p>${l.rating||l.ratingKinopoisk||`N/A`}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;var _=e=>e.charAt(0).toUpperCase()+e.slice(1),v=document.querySelector(`.movie-card-podrobnee`);v.innerHTML=`
  <h2>${_(l.nameRu||l.nameOriginal||``)}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-content">
    ${l.genres&&l.genres.length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Жанр</label>
      <p>${c(l.genres.map(e=>_(e.genre)),4).join(`, `)}</p>
    </div>
    `:``}
    ${l.countries&&l.countries.length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Страна производства</label>
      <p>${c(l.countries.map(e=>_(e.country)),4).join(`, `)}</p>
    </div>
    `:``}
    ${l.direction&&l.direction.filter(e=>e.professionKey===`ACTOR`).length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Актеры</label>
      <p>${c(l.direction.filter(e=>e.professionKey===`ACTOR`).map(e=>_(e.nameRu)),4).join(`, `)}</p>
    </div>
    `:``}
    ${l.direction&&l.direction.filter(e=>e.professionKey===`DIRECTOR`).length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Режиссёры</label>
      <p>${c(l.direction.filter(e=>e.professionKey===`DIRECTOR`).map(e=>_(e.nameRu)),4).join(`, `)}</p>
    </div>
    `:``}
    ${l.year?`
    <div class="movie-card-podrobnee-params">
      <label>Дата релиза</label>
      <p>${l.year}</p>
    </div>
    `:``}
    ${l.ratingAgeLimits?`
    <div class="movie-card-podrobnee-params">
      <label>Возврастное ограничение</label>
      <p>${l.ratingAgeLimits.replace(`age`,``)+`+`}</p>
    </div>
    `:``}
  </div>
`;var y=document.querySelector(`.video-frag`);if(d){let e=document.createElement(`a`);e.href=d.url,e.target=`_blank`,e.classList.add(`trailer-button`),e.innerHTML=`Смотреть трейлер`,y.appendChild(e)}else y.parentElement.style.display=`none`;var b=document.querySelector(`.card-slider`),x=l.cadrs.items;if(x&&x.length>0)x.forEach(e=>{b.appendChild(r(e.imageUrl)),console.log(e.imageUrl)}),x.length<=1&&b.parentElement.classList.add(`slider-disabled`);else{let e=document.querySelector(`.fragments-contanier`);e&&(e.style.display=`none`)}console.log(x);var S=e=>{let t=``;for(let n=0;n<e;n++)if(t+=`<img src="${h}" alt="star" class="review-item-rating-item">`,n===10)return t;for(let n=e;n<10;n++)t+=`<img src="${p}" alt="star" class="review-item-rating-item">`;return t},C=document.querySelector(`.review-list`),w=l.reviews.items;if(w&&w.length>0)c(w,2).forEach(e=>{C.innerHTML+=`
  <div class="review-item">
    <div class="review-item-header">
      <h4>${e.author}</h4>
      <div class="review-item-rating">
        ${S(e.positiveRating)}
      </div>
    </div>
    <p>${e.description}</p>
  </div>
`});else{let e=C.parentElement;e&&(e.style.display=`none`)}}));l(),o(),_(),n(),d(),s();