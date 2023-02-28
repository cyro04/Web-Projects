const main = document.querySelector('main');

const form = document.querySelector("#searchForm");
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    putData(res.data);
})
const putData = (shows) =>{
    for(let result of shows){
        if(result.show.image.medium != null) {
            const imgL = result.show.image.medium;
            const movieT = result.show.name;
            const movieS = result.show.summary;
            addCard(imgL, movieT, movieS);
        }
    }
}
function addCard(imgLink, movieTitle,movieSummary){
    main.insertAdjacentHTML("beforeend", `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${imgLink}" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${movieTitle}</h5>
        <p class="card-text">${movieSummary}</p>
      </div>
    </div>
  </div>
</div>`);
}