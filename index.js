// count value save the value of counter

const countvalue = document.querySelector('#counter');

const increment = () => {

// With the help Of innerText value will be save as a string form but we need number form then we use   parseInt
    let value = parseInt (countvalue.innerText);
    // Update the value
    value = value + 1;
    // Set the value in UI
    countvalue.innerText = value;
};

const decrement = () => {
    // get the value from UI
    let value = parseInt (countvalue.innerText);
    // Update the value
    value = value - 1;
    countvalue.innerText = value;


};
