/*
JavsScript
*/

  var ref = new Firebase("https://proyectorpi.firebaseio.com/");

 
  ref.once("value", function(res) {

    var sensorAmmonia = res.child("sensor/Ammonia");
    var valueSensorAmmonia = sensorAmmonia.val()
    $('#Ammonia').text(valueSensorAmmonia);

    var sensorGas = res.child("sensor/Gas");
    var valueSensorGas = sensorGas.val()
    $('#Gas').text(valueSensorGas);
    
    var dust = res.child("sensor/dust");
    var valuedust = dust.val()
    $('#dust').text(valuedust);

    image(valueSensorGas,valueSensorAmmonia,valuedust)

  });

 
  ref.on("child_changed", function(res) {

    var valueSensorAmmonia = res.val().Ammonia
    $('#Ammonia').text(valueSensorAmmonia);

    var valueSensorGas = res.val().Gas
    $('#Gas').text(valueSensorGas);
    
    var valuedust = res.val().dust
    $('#dust').text(valuedust);        

    sensor(valueSensorGas,valueSensorAmmonia,valuedust)

  });        

  

  function sensor(valueSensorGas, valueSensorAmmonia, valuedust){

    if(valueSensorGas>=7){

        console.log("Es de dia");

        if(valueSensorAmmonia<17){

          console.log("dia frio");
          $("#imgDiaFrio").siblings().fadeOut(3000);
          $("#imgDiaFrio").fadeIn(3000);
          $("#dia").text("Dia Frio");

        }
        else if(valueSensorAmmonia>17 && valueSensorAmmonia<=23){
          console.log("dia fresco");
          $("#imgDiaFresco").siblings().fadeOut(3000);
          $("#imgDiaFresco").fadeIn(3000)
          $("#dia").text("Dia Fresco");
        }

        else if(valueSensorAmmonia>24){
          console.log("dia Calido");
          $("#imgDiaCalido").siblings().fadeOut(3000);
          $("#imgDiaCalido").fadeIn(3000);
          $("#dia").text("Dia Calido");
        }

    }else{
        console.log("Es de noche");
        $("#imgNoche").siblings().fadeOut(3000);
        $("#imgNoche").fadeIn(3000);          
        $("#dia").text("Noche");

    }
 }       