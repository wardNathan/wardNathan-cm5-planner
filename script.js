// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
var saveBtn = document.getElementById('svBtn');
var notes = document.getElementsByClassName('notes');

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(rightNow);
    console.log
  }
displayTime();

saveBtn.addEventListener('click', function(event) {
event.preventDefault();

localStorage.setItem('notes', JSON.stringify(notes));
renderMessage();
});

function renderMessage() {
    var lastNote =JSON.parse(localStorage.getItem('notes'));
    if (lastNote !== null) {
        document.querySelector('.notes').textContent
    }
}
// document.getElementById('currentDay').innerHTML = today;

// function saveNotes(notes) {
//     localStorage.setItem('notes', JSON.stringify(notes));
// }

// $('#saveBtn').click(function () {
//     notes.push({
//     })
//     localStorage.setItem("notes", JSON.stringify())
//     console.log

// })

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