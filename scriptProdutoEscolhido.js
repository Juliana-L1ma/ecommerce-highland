
 //PÁGINA DO PRODUTO 6398
fetch('produtos.json').then(response => response.json())
.then(informacoes => {
    document.getElementById("id").innerHTML = "ID do produto " + informacoes.sabonete.id;
    document.getElementById("valorDolarProduto").innerHTML =informacoes.sabonete.valor;
    var valorDolarProduto = informacoes.sabonete.valor; 
    document.getElementById("valorDolarProduto").innerHTML = "U$ " + valorDolarProduto;


    fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
        return response.json() })
        .then(economia => {
    
          var dolarAtual = economia.USDBRL.bid;
    
    var convertidoValorProduto = valorDolarProduto * dolarAtual;
    var converValorProduto = convertidoValorProduto.toFixed(2);
    document.getElementById("valorRealProduto").innerHTML = "R$" + converValorProduto;
    
        }

        )
})


 //PÁGINA DO PRODUTO 1452
 fetch('produtos.json').then(response => response.json())
 .then(informacoes => {
   
      /*---------------------------Produto 2 -----------------------------------*/
      document.getElementById("id2").innerHTML = "ID do produto " + informacoes.shampoo.id;
       document.getElementById("valorDolarProduto2").innerHTML =informacoes.shampoo.valor;
       var valorDolarProduto2 = informacoes.shampoo.valor; 
       document.getElementById("valorDolarProduto2").innerHTML = "U$ " + valorDolarProduto2;
 
     fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
         return response.json() })
         .then(economia => {
     
           var dolarAtual = economia.USDBRL.bid;
     
          
     
     
  
     var convertidoValorProduto2 = valorDolarProduto2 * dolarAtual;
     var converValorProduto2 = convertidoValorProduto2.toFixed(2);
     document.getElementById("valorRealProduto2").innerHTML = "R$" + converValorProduto2;
         }
 
         )
 })

  //PÁGINA DO PRODUTO 3
  fetch('produtos.json').then(response => response.json())
  .then(informacoes => {
    
       document.getElementById("id3").innerHTML = "ID do produto " + informacoes.condicionador.id;
        document.getElementById("valorDolarProduto3").innerHTML =informacoes.condicionador.valor;
        var valorDolarProduto3 = informacoes.condicionador.valor; 
        document.getElementById("valorDolarProduto3").innerHTML = "U$ " + valorDolarProduto3;
    
    
  
      fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
          return response.json() })
          .then(economia => {
      
            var dolarAtual = economia.USDBRL.bid;
      
            var convertidoValorProduto3 = valorDolarProduto3 * dolarAtual;
            var converValorProduto3 = convertidoValorProduto3.toFixed(2);
            document.getElementById("valorRealProduto3").innerHTML = "R$" + converValorProduto3;
          }
  
          )
  })

   //PÁGINA DO PRODUTO 4
 fetch('produtos.json').then(response => response.json())
 .then(informacoes => {
   
     /*---------------------------Produto 4 -----------------------------------*/
    document.getElementById("id4").innerHTML = "ID do produto " + informacoes.kit1.id;
     document.getElementById("valorDolarProduto4").innerHTML =informacoes.kit1.valor;
     var valorDolarProduto4 = informacoes.kit1.valor; 
     document.getElementById("valorDolarProduto4").innerHTML = "U$ " + valorDolarProduto4;
   
 
     fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
         return response.json() })
         .then(economia => {
     
           var dolarAtual = economia.USDBRL.bid;
     
          
      
   /*---------------------------Produto 4 -----------------------------------*/
   var convertidoValorProduto4 = valorDolarProduto4 * dolarAtual;
   var converValorProduto4 = convertidoValorProduto4.toFixed(2);
   document.getElementById("valorRealProduto4").innerHTML = "R$" + converValorProduto4;
         }
 
         )
 })


  //PÁGINA DO PRODUTO 5
  fetch('produtos.json').then(response => response.json())
  .then(informacoes => {
    
          /*---------------------------Produto 5 -----------------------------------*/
    document.getElementById("id5").innerHTML = "ID do produto " + informacoes.argila.id;
    document.getElementById("valorDolarProduto5").innerHTML =informacoes.argila.valor;
    var valorDolarProduto5 = informacoes.argila.valor; 
    document.getElementById("valorDolarProduto5").innerHTML = "U$ " + valorDolarProduto5;
    
  
      fetch (`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL`).then(response => {
          return response.json() })
          .then(economia => {
      
            var dolarAtual = economia.USDBRL.bid;
      
           
       /*---------------------------Produto 5 -----------------------------------*/
       var convertidoValorProduto5 = valorDolarProduto5 * dolarAtual;
       var converValorProduto5 = convertidoValorProduto5.toFixed(2);
       document.getElementById("valorRealProduto5").innerHTML = "R$" + converValorProduto5;
          }
  
          )
  })