function yard_converter(valNum){
    document.getElementById("output_far_to_cel").innerHTML = (valNum-32)/1.8;
    document.getElementById("output_far_to_kel").innerHTML = ((valNum-32)/1.8)+273.15;

}