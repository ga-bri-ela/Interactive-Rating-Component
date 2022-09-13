//BUTTONS
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const submitButton = document.getElementById('submit-btn');
const rating = document.getElementById('rating');
const buttonArray = [button1, button2, button3, button4, button5];

//this is a flag to mark that a button has been selected
let isClicked = false;
//variable that represents the given rating
let clickedValue = 0;
//array to collect all ratings
let ratingArray = [];

/* The first event listener is being applied to all items in the array of buttons. Here the event will:
1- Update the value of clickedValue to the user given rating.
2- Mark that a button has been selected by the user.
3- Push the rating into the array with the total ratings.
 */
buttonArray.forEach((button) => {
    button.addEventListener("click", () => {
    clickedValue = button.innerHTML;
    isClicked = true;
    ratingArray.push(clickedValue);
    })
});

/* This is the event handler for the submit button.
1 - This event will hide the items displayed in the survey and load the thank you page.
2- It will change the value displayed as the given rating.
3- It will disable the submit button.
4- It will toggle isClicked back to its original value.
 */
const showThanks = () => {
    if(!isClicked) return;
    rating.innerHTML = clickedValue;
    document.getElementById('square1').style.display = 'block';
    document.getElementById('parent-container').style.display = 'none';
    submitButton.disabled = true;
    isClicked = false;
};

submitButton.addEventListener('click', showThanks);