# BMI  CALCULATOR

### undestand JS code  
```javascript

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    ...
```
The ```preventDefault()```is a method of the Event interface, in this if the event does not get explicitly handled, its default action should not be taken as it normally would be.

They are mostly used with events and forms.

```javascript

let height = document.querySelector('#height').value;
    height = parseInt(height);

    let weight = document.querySelector('#weight').value;
    weight = parseInt(weight);

    ...
```
Converting height and weight into integer.

```javascript
    let results = document.querySelector('#results');

    ...
```
To store the result, getting the result div from the HTML.


```javascript

if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Invalid height or weight';
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI: ${bmi}</span>`;
    }
});


```
Applying conditions to check:

1. **`(isNaN(height)`**: is height a number or not.

1. `height <= 0` check for -ve height.
2. The same goes for the weight.

Apply the BMI formula :

`bmi = (weight / ((height * height) / 10000)).toFixed(2);`

The division by 10000 is to convert the square of height from square cm to square mtrs.

**`.toFixed(2)`** is used to round the calculated BMI value to two decimal places. It returns a string representation of the number with exactly two decimal places.



### End
#### Hope this helps...