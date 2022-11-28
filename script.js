// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
var input_textarea9 = document.querySelector('.content-input9');
var save_button9 = document.querySelector('.save-button9');
var input_textarea10 = document.querySelector('.content-input10');
var save_button10 = document.querySelector('.save-button10');
var input_textarea11 = document.querySelector('.content-input11');
var save_button11 = document.querySelector('.save-button11');
var input_textarea12 = document.querySelector('.content-input12');
var save_button12 = document.querySelector('.save-button12');
var input_textarea1 = document.querySelector('.content-input1');
var save_button1 = document.querySelector('.save-button1');
var input_textarea2 = document.querySelector('.content-input2');
var save_button2 = document.querySelector('.save-button2');
var input_textarea3 = document.querySelector('.content-input3');
var save_button3 = document.querySelector('.save-button3');
var input_textarea4 = document.querySelector('.content-input4');
var save_button4 = document.querySelector('.save-button4');
var input_textarea5 = document.querySelector('.content-input5');
var save_button5 = document.querySelector('.save-button5');

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
    console.log
  }
displayTime();

save_button9.addEventListener('click', updateOutput9);

input_textarea9.textContent = localStorage.getItem('content9');
input_textarea9.value = localStorage.getItem('content9');

function updateOutput9() {
  localStorage.setItem('content9', input_textarea9.value);

  input_textarea9.textContent = input_textarea9.value;
}

save_button10.addEventListener('click', updateOutput10);

input_textarea10.textContent = localStorage.getItem('content10');
input_textarea10.value = localStorage.getItem('content10');

function updateOutput10() {
  localStorage.setItem('content10', input_textarea10.value);

  input_textarea10.textContent = input_textarea10.value;
}

save_button11.addEventListener('click', updateOutput11);

input_textarea11.textContent = localStorage.getItem('content11');
input_textarea11.value = localStorage.getItem('content11');

function updateOutput11() {
  localStorage.setItem('content11', input_textarea11.value);

  input_textarea11.textContent = input_textarea11.value;
}

save_button12.addEventListener('click', updateOutput12);

input_textarea12.textContent = localStorage.getItem('content12');
input_textarea12.value = localStorage.getItem('content12');

function updateOutput12() {
  localStorage.setItem('content12', input_textarea12.value);

  input_textarea12.textContent = input_textarea12.value;
}

save_button1.addEventListener('click', updateOutput1);

input_textarea1.textContent = localStorage.getItem('content1');
input_textarea1.value = localStorage.getItem('content1');

function updateOutput1() {
  localStorage.setItem('content1', input_textarea1.value);

  input_textarea1.textContent = input_textarea1.value;
}

save_button2.addEventListener('click', updateOutput2);

input_textarea2.textContent = localStorage.getItem('content2');
input_textarea2.value = localStorage.getItem('content2');

function updateOutput2() {
  localStorage.setItem('content2', input_textarea2.value);

  input_textarea2.textContent = input_textarea2.value;
}

save_button3.addEventListener('click', updateOutput3);

input_textarea3.textContent = localStorage.getItem('content3');
input_textarea3.value = localStorage.getItem('content3');

function updateOutput3() {
  localStorage.setItem('content3', input_textarea3.value);

  input_textarea3.textContent = input_textarea3.value;
}

save_button4.addEventListener('click', updateOutput4);

input_textarea4.textContent = localStorage.getItem('content4');
input_textarea4.value = localStorage.getItem('content4');

function updateOutput4() {
  localStorage.setItem('content4', input_textarea4.value);

  input_textarea4.textContent = input_textarea4.value;
}

save_button5.addEventListener('click', updateOutput5);

input_textarea5.textContent = localStorage.getItem('content5');
input_textarea5.value = localStorage.getItem('content5');

function updateOutput5() {
  localStorage.setItem('content5', input_textarea5.value);

  input_textarea5.textContent = input_textarea5.value;
}

/*
$(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  });
  */