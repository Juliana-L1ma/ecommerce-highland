
//array para as regiões
let regioes = [
    {regiao: 'Norte', estado:'AM' },
    {regiao: 'Norte', estado:'TO' },
    {regiao: 'Norte', estado:'PA' },
    {regiao: 'Norte', estado:'RO' },
    {regiao: 'Norte', estado:'RR' },
    {regiao: 'Norte', estado:'AC' },
    {regiao: 'Norte', estado:'AP' },

    {regiao:'Nordeste', estado:'PB'},
    {regiao:'Nordeste', estado:'MA'},
    {regiao:'Nordeste', estado:'PI'},
    {regiao:'Nordeste', estado:'CE'},
    {regiao:'Nordeste', estado:'RN'},
    {regiao:'Nordeste', estado:'PE'},
    {regiao:'Nordeste', estado:'AL'},
    {regiao:'Nordeste', estado:'SE'},
    {regiao:'Nordeste', estado:'BA'},

    {regiao:'Centro Oeste', estado:'MT'},
    {regiao:'Centro Oeste', estado:'MS'},
    {regiao:'Centro Oeste', estado:'GO'},
    {regiao:'Centro Oeste', estado:'DF'},

    {regiao:'Sudeste', estado:'SP'},
    {regiao:'Sudeste', estado:'RJ'},
    {regiao:'Sudeste', estado:'MG'},
    {regiao:'Sudeste', estado:'ES'},

    {regiao:'Sul', estado:'SC'},
    {regiao:'Sul', estado:'PR'},
    {regiao:'Sul', estado:'RS'},

];

   //buscar API
//Com async e await podemos trabalhar com código assíncrono em um estilo mais parecido com o bom e velho código síncrono.
const pesquisarCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
        const endereco = await dados.json();
            preencherFormulario(endereco);
            console.log(endereco);
}

 //preencher os inputs com arrow functions
 const preencherFormulario = (endereco) => {
     document.getElementById("rua").value = endereco.logradouro;
     document.getElementById("bairro").value = endereco.bairro;
     document.getElementById("cidade").value = endereco.localidade;
     document.getElementById("estado").value = endereco.uf;
     uf=endereco.uf;
 }

//variável local para o estado
var uf;

//Quando clica no botão de calcular
function calcularFrete(){
 

//Condições para cada região do Brasil
for( x=0; x<regioes.length; x++ ){

    if(regioes[x].estado == uf){
      
        var regiao = regioes[x].regiao;

        if(document.getElementById("cidade").value == 'Mogi das Cruzes'){
            document.getElementById("valorFrete").innerHTML = "Valor do frete = grátis" + "<br>Tempo de entrega a partir da postagem do produto: 1 dia útil";
            return;
        }

        if(regiao == 'Sudeste'){
            document.getElementById("valorFrete").innerHTML ="Valor do frete = R$ 20,00" + "<br>Tempo de entrega a partir da postagem do produto: 3 úteis";
            return;
        }

        if(regiao == 'Sul'){
            document.getElementById("valorFrete").innerHTML = "Valor do frete = R$ 40,00" + " <br>Tempo de entrega a partir da postagem do produto: 5 úteis";
           
            return;
        }
        if(regiao == 'Centro Oeste'){
            document.getElementById("valorFrete").innerHTML = "Valor do frete = R$ 40,00" + "<br> Tempo de entrega a partir da postagem do produto: 5 úteis";
            return;
        }
        if(regiao == 'Nordeste'){
            document.getElementById("valorFrete").innerHTML = "Valor do frete = R$ 50,00" + " <br>Tempo de entrega a partir da postagem do produto: 8 úteis";
            return;
        }
        if(regiao == 'Norte'){
            document.getElementById("valorFrete").innerHTML = "Valor do frete = R$ 60,00" + " <br>Tempo de entrega a partir da postagem do produto: 10 úteis";
           
            return;
        }
       

       
    }
}

}

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

