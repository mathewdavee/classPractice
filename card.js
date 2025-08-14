const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardbtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

const radio = document.querySelectorAll("input[type='radio']").forEach((radio)=> {
    radio.addEventListener ("mousedown", function (e) {

        if (this.checked) {
            this.wasChecked = true;
        }else {
            this.wasChecked = false;
        }

    });

    radio.addEventListener("click", function(e) {
        if(this.wasChecked){
            this.checked = false;
        }
    });

});


mySubmit.addEventListener("click", () => {
   // checkbox for subscribe if check or not
    if(myCheckbox.checked){
        subResult.textContent  = `You are Subscribed`;
    }
    else {
        subResult.textContent = `You are NOT subscribe`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if (masterCardbtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{ 
        paymentResult.textContent = `Please choose a payment method`
    }



});


