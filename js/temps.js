function calcular() {

    var unidades=document.getElementById("unit").value;
    var grados=document.getElementById("grade").value;
   
    var ConverFtoC=parseFloat(grados-32)*5/9;
    var ConverCtoF=grados*1.8+32;

    if (unidades=="cel") {
        result1=parseFloat(grados)*1.8+32;
        document.getElementById("get").innerHTML= (grados+"°C a fahrenheit es: "+result1.toFixed(2)+"°F");
    }else if (unidades=="far") {
        result= parseFloat(grados-32)*5/9;
        document.getElementById("get").innerHTML= (grados+"°F a Celcius es: "+result.toFixed(2)+"°C");
    } 


}