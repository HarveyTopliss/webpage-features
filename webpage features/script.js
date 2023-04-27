'use strict';

const navbar = document.querySelector('.navbar');
const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebar = document.querySelector('.sidebar');
const slidebarBtn = document.querySelector('.slidebar-btn');
const slidebar = document.querySelector('.slidebar');
const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

//////////////////////////////////////////////////////////////////////////
let sidebarStatus = false;
let slidebarStatus = false;
const tabHeight = getComputedStyle(tabs[1]).transform;
const tabActiveHeight = getComputedStyle(tabs[0]).transform;

window.addEventListener('scroll', function () {
  if (scrollY > 100) {
    navbar.classList.add('sticky');
    if (sidebarStatus === true) {
      sidebar.style.top = '10%';
    }
    if (slidebarStatus === true) {
      slidebar.style.top = '10%';
    }
  } else {
    navbar.classList.remove('sticky');
    if (sidebarStatus === true) {
      sidebar.style.top = '15%';
    }
    if (slidebarStatus === true) {
      slidebar.style.top = '15%';
    }
  }
});

sidebarBtn.addEventListener('click', function () {
  if (sidebarStatus === false) {
    if (slidebarStatus === true) {
      slidebar.classList.add('hidden');
      slidebarStatus = false;
    }
    if (scrollY > 100) {
      sidebar.style.top = '10%';
    } else {
      sidebar.style.top = '15%';
    }
    sidebar.classList.remove('hidden');
    sidebarStatus = true;
  } else {
    sidebar.classList.add('hidden');
    sidebarStatus = false;
  }
});

slidebarBtn.addEventListener('click', function () {
  if (slidebarStatus === false) {
    if (sidebarStatus === true) {
      sidebar.classList.add('hidden');
      sidebarStatus = false;
    }
    if (scrollY > 100) {
      slidebar.style.top = '10%';
    } else {
      slidebar.style.top = '15%';
    }
    slidebar.classList.remove('hidden');
    slidebarStatus = true;
  } else {
    slidebar.classList.add('hidden');
    slidebarStatus = false;
  }
});

tabs.forEach(tab =>
  tab.addEventListener('click', function (e) {
    const clicked = e.target;
    if (
      clicked.dataset.tab == 1 ||
      clicked.dataset.tab == 2 ||
      clicked.dataset.tab == 3
    ) {
      tabs.forEach(tab => (tab.style.transform = tabHeight));
      tabContent.forEach(content => content.classList.add('hidden'));
      clicked.style.transform = tabActiveHeight;
      tabContent[clicked.dataset.tab - 1].classList.remove('hidden');
    }
  })
);
