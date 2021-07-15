# [View preview](https://drkl151.github.io/registration-form.js/Form-registration)

## Registration form written in Javascript
![form-registration](img-git/form-registration.jpg)
* There are validity checks
* There are hints for the user
* There are marks indicating successful filling
* There is a button to clear the form
* Regular expressions are used

![form-registration-data-object](img-git/form-registration-data-object.jpg)
> Upon successful completion, we will get the data object to the console

__Dynamic function is used to return inputs to their default state:__
```javascript
function returnDefaultInput(selector, value, firstProperty, secondProperty) {
    const getSelector = document.querySelectorAll(selector);

    getSelector.forEach(item => {
        secondProperty ? item[firstProperty][secondProperty] = value : item[firstProperty] = value;
    })
}
```