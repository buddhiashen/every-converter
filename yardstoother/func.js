function yard_converter(valNum){
    if(valNum<0){
        alert("Lenght cant be negative: \n A magnitude cannot be negative because it is said to be positive or equal to zero between every points (elements). That is a Metric Space, on its very first rule. This inspires the Norm (metric on norm spaces). Most of those objects require an absolute value \n PLEASE MAKE SURE TO USE POSITIVE VALUE FOR LENGHT")
    }

    else if(valNum >= 0){
    document.getElementById("output_yd_to_ft").innerHTML = valNum*3;
    document.getElementById("output_yd_to_m").innerHTML = valNum/1.0936;
    document.getElementById("output_yd_to_in").innerHTML = valNum*36;
    document.getElementById("output_yd_to_cm").innerHTML = valNum/0.010936;
    document.getElementById("output_yd_to_km").innerHTML = valNum/1093.6;
    document.getElementById("output_yd_to_mi").innerHTML = valNum*0.00056818;
    }
    
}