const form = document.getElementById('form')
const resultP = document.getElementById('resultContainer')
const rate_val = document.getElementById("rateVal")
const rateInput = document.getElementById('rate')
const principalInput = document.getElementById('principal');
rateInput.addEventListener("input", (e) => {
    rate_val.value = e.target.value
})


// Actual computation
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const names = ['principal', 'rate', 'years'];
    const values = names.reduce((acc, name) => {
        return {
            ...acc,
            [name]: event.target[name].value
        }
    }, {});
    console.log({values})

    const {principal, years, rate} = values;
    const principalNum = parseInt(principal, 10);

    if(principal.trim() === '' || principalNum < 1) {
        alert("Enter a positive number")
        return;
    };

    const yearsNum = parseInt(years)
    const interest = principalNum * yearsNum * parseFloat(rate)/100;
    const computedYear = new Date().getFullYear() + yearsNum
    resultP.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
                        at an interest rate of <mark>${rate}%</mark>.<br>
                        You will receive an amount of <mark>${interest}</mark>,<br>
                        in the year <mark>${computedYear}</mark>`
})

     