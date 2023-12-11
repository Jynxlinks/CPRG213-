/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let selectedDaysCounter = 0;
let totalCost = 0;
let dayCost = 35;
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function applyClickedClass(event) {
    let target = event.target;
    if (!target.classList.contains('clicked')) {
        target.classList.add('clicked');
        selectedDaysCounter++;
        calculateCost();
    }
}

monday.addEventListener('click', applyClickedClass);
tuesday.addEventListener('click', applyClickedClass);
wednesday.addEventListener('click', applyClickedClass);
thursday.addEventListener('click', applyClickedClass);
friday.addEventListener('click', applyClickedClass);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById('clear-button');

function clearDays() {
    [monday, tuesday, wednesday, thursday, friday].forEach(function(day) {
        day.classList.remove('clicked');
    });
    selectedDaysCounter = 0;
    calculateCost();
}

clearButton.addEventListener('click', clearDays);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

let halfButton = document.getElementById('half');

function changeToHalfDayRate() {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    dayCost = 20;
    calculateCost();
}

halfButton.addEventListener('click', changeToHalfDayRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

let fullButton = document.getElementById('full');

function changeToFullDayRate() {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    dayCost = 35;
    calculateCost();
}

fullButton.addEventListener('click', changeToFullDayRate);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

let calculatedCost = document.getElementById('calculated-cost');

function calculateCost() {
    totalCost = dayCost * selectedDaysCounter;
    calculatedCost.innerHTML = totalCost;
}