document.addEventListener('DOMContentLoaded', function () {
    const myInput = document.getElementById('myInput');
    const myDiv = document.getElementById('myDiv');

    myInput.addEventListener('focus', function () {
        myDiv.style.display = 'block';
    });

    myInput.addEventListener('blur', function () {
        myDiv.style.display = 'none';
    });
});