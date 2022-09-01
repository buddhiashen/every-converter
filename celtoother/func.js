function yard_converter(valNum){
    document.getElementById("output_cel_to_far").innerHTML = (valNum*1.8)+32;
    document.getElementById("output_cel_to_kel").innerHTML = valNum+273.15;

}