// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSortingBtn(){
    document.getElementById("bubbleSort").disabled = true;
    document.getElementById("insertionSort").disabled = true;
    document.getElementById("mergeSort").disabled = true;
    document.getElementById("quickSort").disabled = true;
    document.getElementById("selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingBtn(){
    document.getElementById("bubbleSort").disabled = false;
    document.getElementById("insertionSort").disabled = false;
    document.getElementById("mergeSort").disabled = false;
    document.getElementById("quickSort").disabled = false;
    document.getElementById("selectionSort").disabled = false;
}

function disableInput()
{
    document.querySelector()
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeSlider()
{
    document.querySelector("#arr_size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeSlider()
{
    document.querySelector("#arr_size").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn()
{
    document.querySelector("#newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableNewArrayBtn()
{
    document.querySelector("#newArray").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Selecting size slider from DOM
let arraySize = document.querySelector('#arr_size');

// Event listener to update the bars on the UI
arraySize.addEventListener('input', function(){

    createNewArray(parseInt(arraySize.value));
});

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();


// To create new array input size of array
function createNewArray(noOfBars = 20) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.style.height = `${array[i] * 2}px`;
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
}); 