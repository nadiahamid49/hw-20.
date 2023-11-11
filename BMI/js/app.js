let height = Number(prompt(`Enter Your Height`));
let Weight = Number(prompt(`Enter Your Weight`));

let bmi = Weight / ((height*0.3048)**2);

if(bmi < 18.6){
    document.querySelector(`h1`).innerText = `UnderWeight`
}else if(bmi >= 18.6 && bmi <= 24.9){
    document.querySelector(`h2`).innerText = `Normal Weight`
}else if(bmi >= 25 && bmi <= 29.9){
    document.querySelector(`h3`).innerText = `OverWeight`
}else if(bmi >= 30){
    document.querySelector(`h4`).innerText = `aynai nijeke ar dekish nah bhai`
}