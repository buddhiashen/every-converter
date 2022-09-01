function yard_converter(valNum){
    document.getElementById("output_kel_to_far").innerHTML = ((valNum-273.15)*1.8)+32;
    document.getElementById("output_kel_to_cel").innerHTML = valNum-273.15;

}