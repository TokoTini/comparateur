const slider = document.getElementById('altitude-slider');

noUiSlider.create(slider, {
  start: [50, 1800], // Initial values for the handles
  connect: true, // Connect the handles with a colored bar
  step: 100,
  range: {
    min: 1400,
    max: 2900
  }
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


100 - 1000

300 - 500