

fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
    return response.json()

}).then(economia => {



    var valor = 30;


  
     document.getElementById("dolar").value = economia.EURBRL.bid;





     for(x = 1; x < valor; x++){

      
        console.log(x + " Dólar corresponde a :");
       console.log(document.getElementById("dolar").value = economia.EURBRL.bid * x + " Reais");
      

     }

})