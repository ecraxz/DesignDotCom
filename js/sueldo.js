

function descuento () {
    var select=document.getElementById("ball").value;
    var discount=document.getElementById("colors").value;
    var result=select*discount;
    var aumento=parseFloat(select)+parseFloat(result);
    var afp=parseFloat(aumento.toFixed(2))*parseFloat(7.25/100);
    var afp2=parseFloat(afp.toFixed(2));
    var iss=parseFloat(aumento)*0.03;
    var resultado = iss.toFixed(2);
    var SueldoNeto=parseFloat(aumento)-parseFloat(afp)-parseFloat(iss);
    var res_sueldo_neto=SueldoNeto.toFixed(2);
    
    var SinRenta=("No aplica");
    
 if (aumento>=0.01 && aumento<=487.60) {

        document.getElementById("text2").innerHTML=("Sueldo Base: $"+select+"<br>"+"Sueldo + Aumento: $"+aumento +"<br>"+ "Descuento AFP: $ "+afp2+"<br>"+"Descuento ISSS: $"+resultado+"<br>"+"Descuento Renta: "+SinRenta +"<br>"+"Sueldo Neto: $"+res_sueldo_neto);

    }else if (aumento>=487.61 && aumento<=915.81) {
        Renta_10=SueldoNeto*0.10;
        res_renta_10=Renta_10.toFixed(2);

        document.getElementById("text2").innerHTML=("Sueldo Base: $"+select+"<br>"+"Sueldo + Aumento: $"+aumento.toFixed(2) +"<br>"+ "Descuento AFP: $ "+afp2+"<br>"+"Descuento ISSS: $"+resultado+"<br>"+"Descuento Renta: $"+res_renta_10+"<br>"+"Sueldo Neto: $"+res_sueldo_neto);

    }else if (aumento>=915.82 && aumento<=2058.67) {

        Renta_20=SueldoNeto*0.20;
        res_renta_20=Renta_20.toFixed(2);

        document.getElementById("text2").innerHTML=("Sueldo Base: $" + select+"<br>"+"Sueldo + Aumento: $"+aumento+"<br>"+ " Descuento AFP: $ "+afp2+"<br>"+"Descuento ISSS: $"+resultado+"<br>"+"Descuento Renta: $"+res_renta_20+"<br>"+"Sueldo Neto: $"+res_sueldo_neto);

    }else if (aumento>=2058.68) {

        Renta_30=SueldoNeto*0.30;
        res_renta_30=Renta_30.toFixed(2);

        document.getElementById("text2").innerHTML=("Sueldo Base: $" + select+"<br>"+"Sueldo + Aumento: $"+aumento + "<br>"+ "Descuento AFP: $ "+afp2+"<br>"+"Descuento ISSS: $"+resultado+"<br>"+"Descuento Renta: $"+res_renta_30 + "<br>" + "Sueldo Neto: $" + res_sueldo_neto );
    }else if (discount=="Sin Aumento"){

        
        D_AFP=parseFloat(select)*0.0725;
        D_ISSS=parseFloat(select)*0.03;
        document.getElementById("text2").innerHTML=("Sueldo Base: $"+select+ "<br>"+"Descuento AFP: $"+D_AFP+"<br>"+"Descuento ISSS: $"+D_ISSS);

    }

  
}