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

//y-repositioning of sidebar and slidebar when the header is on the viewport and not
window.addEventListener('scroll', function () {
  if (scrollY > 300) {
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

//when sidebar button is clicked
sidebarBtn.addEventListener('click', function () {
  //display sidebar: hide slidebar if it's displayed
  if (sidebarStatus === false) {
    if (slidebarStatus === true) {
      slidebar.classList.add('hidden');
      slidebarStatus = false;
    }
    //initial y-position based on whether header is showing
    if (scrollY > 300) {
      sidebar.style.top = '10%';
    } else {
      sidebar.style.top = '15%';
    }
    sidebar.classList.remove('hidden');
    sidebarStatus = true;
    //when sidebar is already displayed: add hidden class
  } else {
    sidebar.classList.add('hidden');
    sidebarStatus = false;
  }
});

//when slidebar button is clicked
slidebarBtn.addEventListener('click', function () {
  if (slidebarStatus === false) {
    if (sidebarStatus === true) {
      sidebar.classList.add('hidden');
      sidebarStatus = false;
    }
    if (scrollY > 300) {
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

//tabbed component
tabs.forEach(tab =>
  tab.addEventListener('click', function (e) {
    const clicked = e.target;
    if (
      clicked.dataset.tab == 1 ||
      clicked.dataset.tab == 2 ||
      clicked.dataset.tab == 3
    ) {
      //hide each content element, then only display the according content
      tabs.forEach(tab => (tab.style.transform = tabHeight));
      tabContent.forEach(content => content.classList.add('hidden'));
      clicked.style.transform = tabActiveHeight;
      tabContent[clicked.dataset.tab - 1].classList.remove('hidden');
    }
  })
);
