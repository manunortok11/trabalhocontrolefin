document.getElementById("formsalvar").addEventListener("submit", function(event)
{
/**submete dados sem que outra página seja carregada */
    event.preventDefault();

    /**declara as variaveis epega os valores da caixa de texto */
    var data=document.getElementById("data").value
    var nome=document.getElementById("nome").value
    var valor=document.getElementById("valor").value
    /**declara o objeto com os atributo data nome e valor e atribui os dados q estao nas variaveis acima nome eidade */
    var despesa={data:data, nome:nome ,valor:valor}

    /**criar lista de despesas, carregar os despesas pré existentes ou carregar uma lista vazia */
    var lista_despesas= JSON.parse(localStorage.getItem('listagem')) || []
    /**inserir a despesa na lista */
    lista_despesas.push(despesa)

    /**adicionar o aluno no arquivo do local storage      stringfy de objt para texto*/    
    localStorage.setItem('listagem', JSON.stringify(lista_despesas))

    document.getElementById('data').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('valor').value = "";

   exibir_despesas()
   exibir_resumo()
})

function exibir_despesas(){
    var lista_despesas=JSON.parse(localStorage.getItem('listagem')) || []
    var output=document.getElementById('output')
        output.innerHTML=''

for(let i=0;i<lista_despesas.length;i++){
    let li=document.createElement('li')
    li.textContent='Data:'+lista_despesas[i].data+' Nome:'+lista_despesas[i].nome+' Valor:'+lista_despesas[i].valor
    output.appendChild(li)
}

    var salario = document.getElementById("salario").value;
    localStorage.setItem("salario", salario);

}

    function exibir_resumo() {
    let salario = Number(localStorage.getItem("salario")) || 0;
    let lista_despesas = JSON.parse(localStorage.getItem('listagem')) || [];

    let total = 0;
    for (let i = 0; i < lista_despesas.length; i++) {
        total += Number(lista_despesas[i].valor);
    }

    let saldo = salario - total;

    document.getElementById("saldofinal").innerHTML =
    "Salário: R$ " + salario + "<br>" +
    "Total de despesas: R$ " + total + "<br>" +
    "Saldo final: R$ " + saldo;
    }



    document.getElementById("btnLimpar").addEventListener("click", function() {
    localStorage.removeItem("listagem");
    salario= 0
    total=0
    saldo=0
    document.getElementById("saldofinal").innerHTML =
    "Salário: R$ " + salario + "<br>" +
    "Total de despesas: R$ " + total + "<br>" +
    "Saldo final: R$ " + saldo;
    exibir_despesas();

});

