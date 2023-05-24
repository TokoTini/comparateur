// altitude slider
// altitude slider
// altitude slider
// altitude slider
// altitude slider
// altitude slider
const slider = document.getElementById('altitude-slider');

noUiSlider.create(slider, {
  start: [1400, 2600], // Initial values for the handles
  connect: true, // Connect the handles with a colored bar
  step: 50,
  margin: 400,
  range: {
    min: 1400,
    max: 2600
  },
});


// min price paragraph
let priceMin = document.querySelector('[data-handle="0"]');
let priceMinPara = priceMin.querySelector('div');
let pMin = document.createElement('p');
priceMinPara.appendChild(pMin);

// max price paragraph
let priceMax = document.querySelector('[data-handle="1"]');
let priceMaxPara = priceMax.querySelector('div');
let pMax = document.createElement('p');
priceMaxPara.appendChild(pMax);


// Update the values when the handles are moved
slider.noUiSlider.on('change', function (values, handle) {
    const minPrice = values[0];
    const maxPrice = values[1];
    console.log(minPrice);

});

// Update the values when the handles are moved
slider.noUiSlider.on('update', function (values, handle) {
    const minPrice = values[0].slice(0,-3);
    const maxPrice = values[1].slice(0,-3);;


    let prixMin = priceMinPara.querySelector('p');
    let prixMax = priceMaxPara.querySelector('p');

    prixMin.textContent = minPrice;
    prixMax.textContent = maxPrice;
});



// km piste slider
// km piste slider
// km piste slider
// km piste slider
// km piste slider
// km piste slider
var connectSlider = document.getElementById('km-piste-slider');

noUiSlider.create(connectSlider, {
    start: 20,
    connect: 'lower',
    step: 10,
    range: {
        'min': 0,
        'max': 120
    }
});

let kmPisteHandle = connectSlider.querySelector('.noUi-touch-area');
let pKmPiste = document.createElement('p');
pKmPiste.classList.add('km-piste')
kmPisteHandle.appendChild(pKmPiste);

// Update the values when the handles are moved
connectSlider.noUiSlider.on('update', function (value, handle) {
  let kmPiste = document.querySelector('.km-piste');
  let str = value.toString();
  str = str.slice(0, -3);
  kmPiste.textContent = str;
});





//open / close cards
//open / close cards
//open / close cards
//open / close cards
//open / close cards
//open / close cards

let cardBtn = document.querySelectorAll('.open-card');

cardBtn.forEach(btn => {
  btn.addEventListener('click', () => {



    let card = btn.closest('.card');
    let cardContent = card.querySelector('.content');
    let cardTitle = card.querySelector('.desc .card-title');
    let imgContainer = card.querySelector('.img-container');

    cardContent.classList.toggle('active');
    btn.classList.toggle('rotated');

    let pixels = cardContent.classList.contains('active') ? imgContainer.offsetWidth + 30 : 0;
    let transitionTime = 300;
    cardTitle.style.transition = `transform ${transitionTime}ms`;
    cardTitle.style.transform = `translateX(${pixels}px)`;
  })
})





// open/close filters
// open/close filters
// open/close filters
// open/close filters
// open/close filters
// open/close filters
// open/close filters

let filtersBtn = document.querySelector('.filtres');
let filters = document.querySelector('aside')

filtersBtn.addEventListener('click', () => {
  filters.classList.add('active');
  document.body.classList.add('disabled')
})


let closeFilters = filters.querySelector('.controls ion-icon');

closeFilters.addEventListener('click', () => {
  filters.classList.remove('active');
  document.body.classList.remove('disabled')
})
