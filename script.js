let feet = document.getElementById('feet');
let inch = document.getElementById('inch');

function ft() {
    let f = this.value;
    let i = f*12;
    inch.value = i;
}

function inches() {
    let i = this.value;
    let f = i/12;
    feet.value = f.toFixed(2);
}

feet.addEventListener('input', ft)
inch.addEventListener('input', inches)