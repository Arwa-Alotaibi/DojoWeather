function loading(){
    alert('Loading weather report :)')
}


function remove_cookie(){
    var cookie=document.querySelector(".cokkies");
    cookie.remove();
}

function convert_two_fahrenheit(temperature){
    //To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
//Example: (30°C x 1.8) + 32 = 86°F
    return Math.round(9 / 5 * temperature +32) ;
}

function convert_two_Celsius(temperature){
// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).

//Example: (50°F - 32) x .5556 = 10°C
    return Math.round(5 / 9 * (temperature -32));
}

function change_temperature(element){
    for(var i=1; i<9; i++) {
        var temp_change = document.querySelector("#scale" + i);
        var temp_value = parseInt(temp_change.innerText);
        if(element.value == "°C") {
            temp_change.innerText = convert_two_Celsius(temp_value);
        } else {
            temp_change.innerText = convert_two_fahrenheit(temp_value);
        }
    }
}