const search = document.querySelector("[name='search']");
const searchBtn = document.querySelector(".search-input__btn");
searchBtn.addEventListener("click", async () => {
  const query = search.value.toLowerCase().trim();
  if (query === "") return;
  window.location.href = `/movie_list/index.html?search=${query}`;
});