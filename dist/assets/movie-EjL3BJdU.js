import{a as e,d as t,i as n,l as r,m as i,n as a,o,r as s,s as c,t as l,u}from"./burger-menu-CE_QjbgP.js";var d=i((async()=>{u(),n(),c();var i=new o,a=new URLSearchParams(window.location.search),s=document.querySelector(`.movie-card`),l=a.get(`id`),d=await i.getMoviePage(l);console.log(d);var f=d.trailer?.items?.find(e=>e.name===`Трейлер`);s.innerHTML=`
  <div class="movie-card movie-card-image" style="background-image: url(${d.posterUrl}); background-position: center; background-size: cover; ">
    <div class="movie-rating" style="background-color: ${r(d.rating||d.ratingKinopoisk)}">
        <p>${d.rating||d.ratingKinopoisk||`N/A`}</p>
    </div>
    <div class="movie-title"></div>
  </div>
`;var p=e=>e.charAt(0).toUpperCase()+e.slice(1),m=document.querySelector(`.movie-card-podrobnee`);m.innerHTML=`
  <h2>${p(d.nameRu||d.nameOriginal||``)}</h2>
  <h3>О фильме</h3>
  <div class="movie-card-podrobnee-content">
    ${d.genres&&d.genres.length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Жанр</label>
      <p>${e(d.genres.map(e=>p(e.genre)),4).join(`, `)}</p>
    </div>
    `:``}
    ${d.countries&&d.countries.length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Страна производства</label>
      <p>${e(d.countries.map(e=>p(e.country)),4).join(`, `)}</p>
    </div>
    `:``}
    ${d.direction&&d.direction.filter(e=>e.professionKey===`ACTOR`).length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Актеры</label>
      <p>${e(d.direction.filter(e=>e.professionKey===`ACTOR`).map(e=>p(e.nameRu)),4).join(`, `)}</p>
    </div>
    `:``}
    ${d.direction&&d.direction.filter(e=>e.professionKey===`DIRECTOR`).length>0?`
    <div class="movie-card-podrobnee-params">
      <label>Режиссёры</label>
      <p>${e(d.direction.filter(e=>e.professionKey===`DIRECTOR`).map(e=>p(e.nameRu)),4).join(`, `)}</p>
    </div>
    `:``}
    ${d.year?`
    <div class="movie-card-podrobnee-params">
      <label>Дата релиза</label>
      <p>${d.year}</p>
    </div>
    `:``}
    ${d.ratingAgeLimits?`
    <div class="movie-card-podrobnee-params">
      <label>Возврастное ограничение</label>
      <p>${d.ratingAgeLimits.replace(`age`,``)+`+`}</p>
    </div>
    `:``}
  </div>
`;var h=document.querySelector(`.video-frag`);if(f){let e=document.createElement(`a`);e.href=f.url,e.target=`_blank`,e.classList.add(`trailer-button`),e.innerHTML=`Смотреть трейлер`,h.appendChild(e)}else h.parentElement.style.display=`none`;var g=document.querySelector(`.card-slider`),_=d.cadrs.items;if(_&&_.length>0)_.forEach(e=>{g.appendChild(t(e.imageUrl)),console.log(e.imageUrl)});else{let e=document.querySelector(`.fragments-contanier`);e&&(e.style.display=`none`)}console.log(_);var v=e=>{let t=``;for(let n=0;n<e;n++)if(t+=`<img src="${starBlack}" alt="star" class="review-item-rating-item">`,n===10)return t;for(let n=e;n<10;n++)t+=`<img src="${star}" alt="star" class="review-item-rating-item">`;return t},y=document.querySelector(`.review-list`),b=d.reviews.items;if(b&&b.length>0)e(b,2).forEach(e=>{y.innerHTML+=`
  <div class="review-item">
    <div class="review-item-header">
      <h4>${e.author}</h4>
      <div class="review-item-rating">
        ${v(e.positiveRating)}
      </div>
    </div>
    <p>${e.description}</p>
  </div>
`});else{let e=y.parentElement;e&&(e.style.display=`none`)}}));a(),s(),d(),u(),l();