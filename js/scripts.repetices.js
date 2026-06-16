//PEGANDO ELEMENTOS DO DOM
const divFor = document.querySelector('#div-for')

//ESTRUTURAS DE REPETIÇÕES
for (i=0; i < 10; i++){
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0, contPar = 0, contImpar = 0
let acum = 0.0

btnNum1.addEventListener('click',(evt)=>{
    let numDigitado = Number(inputNum1.value)


    //DECLARAÇÃO DE CONTADOR
    cont++
    //DECLARAÇÃO DE ACUMULADOR
acum += numDigitado

if(numDigitado % 2 == 0){
    contPar++
}else{
    contImpar++

}divResult.innerHTML = `Total de números digitado ${cont} <br>
A soma dos números digitado ${acum} <br>
Total de números Par digitado: ${contPar} <br>
Total de números impar digitado: ${contImpar} <br>
`

inputNum1.value = ''

})

//REPETIÇÃO COM WHILE
const inputFrase = document.querySelector('#msg')
const inputNumRepeticao = document.querySelector('#numRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')

let contFrase = 0
let totalRepeticao = 0

btnExibir.addEventListener('click',(evt)=>{

    totalRepeticao = Number(inputNumRepeticao.value)

    while(totalRepeticao > contFrase){
        divResultFrase.innerHTML += `${inputFrase.value} <br>`
        contFrase++
    }
})//COLEÇÃO DE DADOS - ARRAY
transporte = ['Bicicleta', 'Carro', 'Moto', 'Ônibus', 'Avião', 'Caminhão']
for (i = 0; i < transporte.length; i++){
    console.log(transporte[i])
}

//FOR IN

const divForin = document.querySelector('#div-forin')

for(let pos in transporte){
    console.log(transporte[pos])
    divForin.innerHTML += `${transporte[pos]} <br>`
}

//FOR OF
const divForOf = document.querySelector('#div-forof')

for(let elem of transporte){
    divForOf.innerHTML += `${elem} <br>`
} 

//COLEÇÃO DE PESSOAS - ARRAY DE OBJETO
const pessoas = [
    {nome: 'Maria', idade: 18, renda: 15000 },
    {nome: 'Josefina', idade: 23, renda: 1800},
    {nome:  'Chicó', idade: 32, renda: 1.50},
    {nome: 'João Grilo', idade: 34, renda: 2.20},

]
console.log('----------LISTA POR FOR IN-------------')
for(let indiceObjPessoa in pessoas){
    console.log(pessoas[indiceObjPessoa]. nome, pessoas[indiceObjPessoa].idade, pessoas)
    [indiceObjpessoa].renda
}

console.log('-------------LISTA POR FOR OF----------')
for(let pessoas of pessoas){
    console.log(pessoas.nome, pessoa.idade, pessoa.renda)
}
//FOREACH
const divForeach = document.querySelector('#div-foreach')