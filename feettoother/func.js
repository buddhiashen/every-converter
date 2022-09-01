
function feet_converter(valNum) {
  if(valNum<0){
    alert("Lenght cant be negative: \n A magnitude cannot be negative because it is said to be positive or equal to zero between every points (elements). That is a Metric Space, on its very first rule. This inspires the Norm (metric on norm spaces). Most of those objects require an absolute value \n PLEASE MAKE SURE TO USE POSITIVE VALUE FOR LENGHT")
  }
  else if (valNum >= 0){
    document.getElementById("outputMeters").innerHTML=valNum/ 3.2808;
    document.getElementById("outputInches").innerHTML=valNum * 12;
    document.getElementById("outputcm").innerHTML = valNum/0.032808;
    document.getElementById("outputyard").innerHTML = valNum*0.33333;
    document.getElementById("outputkm").innerHTML = valNum/3280.8;
    
  }
  }

