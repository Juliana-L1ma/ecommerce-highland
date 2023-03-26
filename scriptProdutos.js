
//PRODUTOS QUE APARECERÃO EM DESTAQUE NA PÁGINA HOME
fetch('produtos.json').then(response => response.json())
.then(informacoes => {

     /*---------------------------Produto 1 -----------------------------------*/
    document.getElementById("nomeProduto1").innerHTML = informacoes.sabonete.nome;
    // document.getElementById("id").innerHTML = "ID do produto " + informacoes.sabonete.id;
    document.getElementById("valorDolarProduto1").innerHTML =informacoes.sabonete.valor;
    var valorDolarProduto1 = informacoes.sabonete.valor; 
    document.getElementById("valorDolarProduto1").innerHTML = "U$ " + valorDolarProduto1;


     /*---------------------------Produto 2 -----------------------------------*/
     document.getElementById("nomeProduto2").innerHTML = informacoes.shampoo.nome;
    //  document.getElementById("id2").innerHTML = "ID do produto " + informacoes.shampoo.id;
     document.getElementById("valorDolarProduto2").innerHTML =informacoes.shampoo.valor;
     var valorDolarProduto2 = informacoes.shampoo.valor; 
     document.getElementById("valorDolarProduto2").innerHTML = "U$ " + valorDolarProduto2;

      /*---------------------------Produto 3 -----------------------------------*/
    document.getElementById("nomeProduto3").innerHTML = informacoes.condicionador.nome;
    // document.getElementById("id3").innerHTML = "ID do produto " + informacoes.condicionador.id;
    document.getElementById("valorDolarProduto3").innerHTML =informacoes.condicionador.valor;
    var valorDolarProduto3 = informacoes.condicionador.valor; 
    document.getElementById("valorDolarProduto3").innerHTML = "U$ " + valorDolarProduto3;

     /*---------------------------Produto 4 -----------------------------------*/
     document.getElementById("nomeProduto4").innerHTML = informacoes.kit1.nome;
    //  document.getElementById("id4").innerHTML = "ID do produto " + informacoes.kit1.id;
     document.getElementById("valorDolarProduto4").innerHTML =informacoes.kit1.valor;
     var valorDolarProduto4 = informacoes.kit1.valor; 
     document.getElementById("valorDolarProduto4").innerHTML = "U$ " + valorDolarProduto4;

      /*---------------------------Produto 5 -----------------------------------*/
    document.getElementById("nomeProduto5").innerHTML = informacoes.argila.nome;
    // document.getElementById("id5").innerHTML = "ID do produto " + informacoes.argila.id;
    document.getElementById("valorDolarProduto5").innerHTML =informacoes.argila.valor;
    var valorDolarProduto5 = informacoes.argila.valor; 
    document.getElementById("valorDolarProduto5").innerHTML = "U$ " + valorDolarProduto5;

     /*---------------------------Produto 6 -----------------------------------*/
     document.getElementById("nomeProduto6").innerHTML = informacoes.oleo.nome;
    //  document.getElementById("id6").innerHTML = "ID do produto " + informacoes.oleo.id;
     document.getElementById("valorDolarProduto6").innerHTML =informacoes.oleo.valor;
     var valorDolarProduto6 = informacoes.oleo.valor; 
     document.getElementById("valorDolarProduto6").innerHTML = "U$ " + valorDolarProduto6;

    

    fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
        return response.json() })
        .then(economia => {
    


        var dolarAtual = economia.USDBRL.bid;

        /*---------------------------Produto 1 -----------------------------------*/
        var convertidoValorProduto1 = valorDolarProduto1 * dolarAtual;
        var converValorProduto1 = convertidoValorProduto1.toFixed(2);
        document.getElementById("valorRealProduto1").innerHTML = "R$" + converValorProduto1;
        console.log();
         /*---------------------------Produto 2 -----------------------------------*/
         var convertidoValorProduto2 = valorDolarProduto2 * dolarAtual;
         var converValorProduto2 = convertidoValorProduto2.toFixed(2);
         document.getElementById("valorRealProduto2").innerHTML = "R$" + converValorProduto2;

          /*---------------------------Produto 3 -----------------------------------*/
        var convertidoValorProduto3 = valorDolarProduto3 * dolarAtual;
        var converValorProduto3 = convertidoValorProduto3.toFixed(2);
        document.getElementById("valorRealProduto3").innerHTML = "R$" + converValorProduto3;

         /*---------------------------Produto 4 -----------------------------------*/
         var convertidoValorProduto4 = valorDolarProduto4 * dolarAtual;
         var converValorProduto4 = convertidoValorProduto4.toFixed(2);
         document.getElementById("valorRealProduto4").innerHTML = "R$" + converValorProduto4;

          /*---------------------------Produto 5 -----------------------------------*/
        var convertidoValorProduto5 = valorDolarProduto5 * dolarAtual;
        var converValorProduto5 = convertidoValorProduto5.toFixed(2);
        document.getElementById("valorRealProduto5").innerHTML = "R$" + converValorProduto5;

         /*---------------------------Produto 6 -----------------------------------*/
         var convertidoValorProduto6 = valorDolarProduto6 * dolarAtual;
         var converValorProduto6 = convertidoValorProduto6.toFixed(2);
         document.getElementById("valorRealProduto6").innerHTML = "R$" + converValorProduto6;

        })
}
)


//FETCH PARA OS PRODUTOS QUE APARECERÃO EM DESTAQUE NA PÁGINA PRODUTOS 
fetch('produtos.json').then(responde => responde.json())
.then(informacoes => {

            /*---------------------------Produto 1 -----------------------------------*/
            document.getElementById("nomeProduto1").innerHTML = informacoes.sabonete.nome;
            // document.getElementById("id").innerHTML = "ID do produto " + informacoes.sabonete.id;
            document.getElementById("valorDolarProduto1").innerHTML =informacoes.sabonete.valor;
            var valorDolarProduto1 = informacoes.sabonete.valor; 
            document.getElementById("valorDolarProduto1").innerHTML = "U$ " + valorDolarProduto1;
        
        
             /*---------------------------Produto 2 -----------------------------------*/
             document.getElementById("nomeProduto2").innerHTML = informacoes.shampoo.nome;
            //  document.getElementById("id2").innerHTML = "ID do produto " + informacoes.shampoo.id;
             document.getElementById("valorDolarProduto2").innerHTML =informacoes.shampoo.valor;
             var valorDolarProduto2 = informacoes.shampoo.valor; 
             document.getElementById("valorDolarProduto2").innerHTML = "U$ " + valorDolarProduto2;
        
              /*---------------------------Produto 3 -----------------------------------*/
            document.getElementById("nomeProduto3").innerHTML = informacoes.condicionador.nome;
            // document.getElementById("id3").innerHTML = "ID do produto " + informacoes.condicionador.id;
            document.getElementById("valorDolarProduto3").innerHTML =informacoes.condicionador.valor;
            var valorDolarProduto3 = informacoes.condicionador.valor; 
            document.getElementById("valorDolarProduto3").innerHTML = "U$ " + valorDolarProduto3;
        
             /*---------------------------Produto 4 -----------------------------------*/
             document.getElementById("nomeProduto4").innerHTML = informacoes.kit1.nome;
            //  document.getElementById("id4").innerHTML = "ID do produto " + informacoes.kit1.id;
             document.getElementById("valorDolarProduto4").innerHTML =informacoes.kit1.valor;
             var valorDolarProduto4 = informacoes.kit1.valor; 
             document.getElementById("valorDolarProduto4").innerHTML = "U$ " + valorDolarProduto4;
        
              /*---------------------------Produto 5 -----------------------------------*/
            document.getElementById("nomeProduto5").innerHTML = informacoes.argila.nome;
            // document.getElementById("id5").innerHTML = "ID do produto " + informacoes.argila.id;
            document.getElementById("valorDolarProduto5").innerHTML =informacoes.argila.valor;
            var valorDolarProduto5 = informacoes.argila.valor; 
            document.getElementById("valorDolarProduto5").innerHTML = "U$ " + valorDolarProduto5;
        
             /*---------------------------Produto 6 -----------------------------------*/
             document.getElementById("nomeProduto6").innerHTML = informacoes.oleo.nome;
            //  document.getElementById("id6").innerHTML = "ID do produto " + informacoes.oleo.id;
             document.getElementById("valorDolarProduto6").innerHTML =informacoes.oleo.valor;
             var valorDolarProduto6 = informacoes.oleo.valor; 
             document.getElementById("valorDolarProduto6").innerHTML = "U$ " + valorDolarProduto6;

             
       /*---------------------------Produto 7 -----------------------------------*/
       document.getElementById("nomeProduto7").innerHTML = informacoes.kit2.nome;
       //  document.getElementById("id7").innerHTML = "ID do produto " + informacoes.kit2.id;
        document.getElementById("valorDolarProduto7").innerHTML =informacoes.kit2.valor;
        var valorDolarProduto7 = informacoes.kit2.valor; 
        document.getElementById("valorDolarProduto7").innerHTML = "U$ " + valorDolarProduto7;
 
        
          /*---------------------------Produto 8 -----------------------------------*/
      document.getElementById("nomeProduto8").innerHTML = informacoes.essencia.nome;
     //  document.getElementById("id8").innerHTML = "ID do produto " + informacoes.essencia.id;
      document.getElementById("valorDolarProduto8").innerHTML =informacoes.essencia.valor;
      var valorDolarProduto8 = informacoes.essencia.valor; 
      document.getElementById("valorDolarProduto8").innerHTML = "U$ " + valorDolarProduto8;
 
 
        /*---------------------------Produto 9 -----------------------------------*/
        document.getElementById("nomeProduto9").innerHTML = informacoes.escova.nome;
       //  document.getElementById("id9").innerHTML = "ID do produto " + informacoes.escova.id;
        document.getElementById("valorDolarProduto9").innerHTML =informacoes.escova.valor;
        var valorDolarProduto9 = informacoes.escova.valor; 
        document.getElementById("valorDolarProduto9").innerHTML = "U$ " + valorDolarProduto9;
   
         /*---------------------------Produto 10 -----------------------------------*/
         document.getElementById("nomeProduto10").innerHTML = informacoes.argilaRosa.nome;
         // document.getElementById("id10").innerHTML = "ID do produto " + informacoes.argilaRosa.id;
         document.getElementById("valorDolarProduto10").innerHTML =informacoes.argilaRosa.valor;
         var valorDolarProduto10 = informacoes.argilaRosa.valor; 
         document.getElementById("valorDolarProduto10").innerHTML = "U$ " + valorDolarProduto10;
 
          /*---------------------------Produto 11 -----------------------------------*/
        document.getElementById("nomeProduto11").innerHTML = informacoes.serum.nome;
       //  document.getElementById("id11").innerHTML = "ID do produto " + informacoes.serum.id;
        document.getElementById("valorDolarProduto11").innerHTML =informacoes.serum.valor;
        var valorDolarProduto11 = informacoes.serum.valor; 
        document.getElementById("valorDolarProduto11").innerHTML = "U$ " + valorDolarProduto11;
 
 
         /*---------------------------Produto 12 -----------------------------------*/
         document.getElementById("nomeProduto12").innerHTML = informacoes.oleoEssencial.nome;
         // document.getElementById("id12").innerHTML = "ID do produto " + informacoes.oleoEssencial.id;
         document.getElementById("valorDolarProduto12").innerHTML =informacoes.oleoEssencial.valor;
         var valorDolarProduto12 = informacoes.oleoEssencial.valor; 
         document.getElementById("valorDolarProduto12").innerHTML = "U$ " + valorDolarProduto12;
  fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
    return response.json() })
    .then(economia => {

      var dolarAtual = economia.USDBRL.bid;

/*---------------------------Produto 7 -----------------------------------*/
var convertidoValorProduto7 = valorDolarProduto7 * dolarAtual;
var converValorProduto7 = convertidoValorProduto7.toFixed(2);
document.getElementById("valorRealProduto7").innerHTML = "R$" + converValorProduto7;

 /*---------------------------Produto 8 -----------------------------------*/
var convertidoValorProduto8 = valorDolarProduto8 * dolarAtual;
var converValorProduto8 = convertidoValorProduto8.toFixed(2);
document.getElementById("valorRealProduto8").innerHTML = "R$" + converValorProduto8;

/*---------------------------Produto 9 -----------------------------------*/
var convertidoValorProduto9 = valorDolarProduto9 * dolarAtual;
var converValorProduto9 = convertidoValorProduto9.toFixed(2);
document.getElementById("valorRealProduto9").innerHTML = "R$" + converValorProduto9;


 /*---------------------------Produto 10 -----------------------------------*/
 var convertidoValorProduto10 = valorDolarProduto10 * dolarAtual;
 var converValorProduto10 = convertidoValorProduto10.toFixed(2);
 document.getElementById("valorRealProduto10").innerHTML = "R$" + converValorProduto10;

  /*---------------------------Produto 11 -----------------------------------*/
var convertidoValorProduto11 = valorDolarProduto11 * dolarAtual;
var converValorProduto11 = convertidoValorProduto11.toFixed(2);
document.getElementById("valorRealProduto11").innerHTML = "R$" + converValorProduto11;

 /*---------------------------Produto 12 -----------------------------------*/
 var convertidoValorProduto12 = valorDolarProduto12 * dolarAtual;
 var converValorProduto12 = convertidoValorProduto12.toFixed(2);
 document.getElementById("valorRealProduto12").innerHTML = "R$" + converValorProduto12;
    }
    )
 
    
}
)


