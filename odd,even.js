function odd() {  
    var x = document.getElementById('in').value;
    var y = document.getElementById('final');
    
    var b = /[a-zA-Z]/;

    if (x === '') {
        y.innerHTML = 'Enter the correct value';
        return;
    }

    if (b.test(x)) {
        y.innerHTML = x + " is a character";
        return;
    }

    x = Number(x); 

    if (isNaN(x)) {
        y.innerHTML = 'This is not a valid number';
        return;
    }

    if (!Number.isInteger(x)) {
        y.innerHTML = x + ' is not an integer';
        return;
    }

    if (x % 2 === 0) {
        y.innerHTML = x + ' is even';
    } else {
        y.innerHTML = x + ' is odd';
    }

    document.getElementById('in').value = ''; 
}
