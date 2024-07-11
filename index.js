'use strict';

const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

window.onload = function () {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  });
};

function hideNav() {
  menuBtn.classList.remove('is-active');
  mobileNav.classList.remove('is-active');
}

// ---- MAP ---- //

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileJSON({
        url: 'https://api.maptiler.com/maps/dataviz/tiles.json?key=UKzOdxVnuu8ffayB8YTM',
        tileSize: 512,
      }),
    }),
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([-6.041013522970301, 54.551586227024686]),
    zoom: 10.5,
  }),
});

const marker = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: [
      new ol.Feature({
        geometry: new ol.geom.Point(
          ol.proj.fromLonLat([-6.041013522970301, 54.551586227024686])
        ),
      }),
    ],
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      src: './img/memoji-smile.png',
      anchor: [0.5, 0.5],
      scale: 0.2,
    }),
  }),
});

map.addLayer(marker);
