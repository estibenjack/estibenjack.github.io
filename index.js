'use strict';

const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.mobile-nav .nav-item');

window.onload = function () {
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', hideNav);
  });
};

function hideNav() {
  menuBtn.classList.remove('is-active');
  mobileNav.classList.remove('is-active');
}

// --- change language --- //

import { translations } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  const langOptions = document.querySelectorAll('.lang-options ul li');
  langOptions.forEach(option => {
    option.addEventListener('click', event => {
      event.preventDefault();
      const selectedLang = event.currentTarget
        .querySelector('a')
        .getAttribute('data-lang');
      changeLanguage(selectedLang);
      langOptionsContainer.classList.remove('open');
    });
  });
});

// toggle open class functionality

const langOptionsContainer = document.querySelector('.lang-options');
const selectedLang = document.getElementById('selected-lang');

selectedLang.addEventListener('click', function (event) {
  event.preventDefault();
  event.stopPropagation();
  langOptionsContainer.classList.toggle('open');
});

document.addEventListener('click', function (event) {
  if (
    !langOptionsContainer.contains(event.target) &&
    !selectedLang.contains(event.target)
  ) {
    langOptionsContainer.classList.remove('open');
  }
});

const langOptions = document.querySelectorAll('.lang-options ul li');
langOptions.forEach(option => {
  option.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

function changeLanguage(lang) {
  const selectedTranslations = translations[lang];

  // Update nav + mobile nav

  function updateElementsByID(id, text) {
    const elements = document.querySelectorAll(`#${id}`);
    elements.forEach(element => {
      element.textContent = text;
    });
  }

  updateElementsByID('projects', selectedTranslations.nav.projects);
  updateElementsByID('about', selectedTranslations.nav.about);
  updateElementsByID('contact', selectedTranslations.nav.contact);

  //Update lang selection element

  document.querySelector('.selected-lang .lang-text').textContent =
    selectedTranslations.nav.selected;
  document.querySelector(
    '.selected-flag'
  ).src = `https://flagsapi.com/${selectedTranslations.nav.flag}/shiny/64.png`;
  // Update banner
  document.getElementById('hi').textContent = selectedTranslations.banner.hi;
  document.querySelector('.banner-content h1').textContent =
    selectedTranslations.banner.name;
  document.getElementById('job').textContent = selectedTranslations.banner.job;

  // Update project section
  document.getElementById('projectstitle').textContent =
    selectedTranslations.projectsection.projectstitle;
  document.getElementById('description1').innerHTML =
    selectedTranslations.projectsection.description1;
  document.getElementById('description2').innerHTML =
    selectedTranslations.projectsection.description2;
  document.getElementById('description3').innerHTML =
    selectedTranslations.projectsection.description3;

  // Update about section
  document.getElementById('abouttitle').textContent =
    selectedTranslations.aboutsection.abouttitle;
  document.getElementById('abouttext').innerHTML =
    selectedTranslations.aboutsection.abouttext;

  // Update contact section
  document.getElementById('contact-section').textContent =
    selectedTranslations.contactsection.contacttitle;
}

// ---- MAP ---- //

// const map = new ol.Map({
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.TileJSON({
//         url: 'https://api.maptiler.com/maps/dataviz/tiles.json?key=UKzOdxVnuu8ffayB8YTM',
//         tileSize: 512,
//       }),
//     }),
//   ],
//   target: 'map',
//   view: new ol.View({
//     center: ol.proj.fromLonLat([-6.041013522970301, 54.551586227024686]),
//     zoom: 10.5,
//   }),
// });

// const marker = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     features: [
//       new ol.Feature({
//         geometry: new ol.geom.Point(
//           ol.proj.fromLonLat([-6.041013522970301, 54.551586227024686])
//         ),
//       }),
//     ],
//   }),
//   style: new ol.style.Style({
//     image: new ol.style.Icon({
//       src: './img/memoji-smile.png',
//       anchor: [0.5, 0.5],
//       scale: 0.2,
//     }),
//   }),
// });

// map.addLayer(marker);
