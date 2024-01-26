
//Declarando Campo de preencher o valor 'peso' e 'altura'
var peso = document.getElementById('peso')
var altura = document.getElementById('altura')

//Declarando classificação do resultado IMC
var mAbaixo = document.getElementById('mAbaixo')
var abaixo = document.getElementById('abaixo')
var pNormal = document.getElementById('pNormal')
var acimaP = document.getElementById('acimaP')
var obesidadeI = document.getElementById('obesidadeI')
var obesidadeII = document.getElementById('obesidadeII')
var obesidadeIII = document.getElementById('obesidadeIII')

var mmAbaixo =document.getElementById('mmAbaixo')
var aabaixo =document.getElementById('aabaixo')
var ppNormal =document.getElementById('ppNormal')
var aacimaP =document.getElementById('aacimaP')
var oobesidadeI =document.getElementById('oobesidadeI')
var oobesidadeII =document.getElementById('oobesidadeII')
var oobesidadeIII =document.getElementById('oobesidadeIII')

//Declarando o resultado do valor do IMC da pessoa 
var resultado = document.getElementById('resultado')

//Função de limpar o campo 
function clean(){
    peso.value = ''
    altura.value = ''
    resultado.innerHTML =''
}

//Função do calculo e resultado do IMC
function calcular(){
    
    var kilo = (peso.value)
    var tamanho = (altura.value)
    
    var imc = kilo / (tamanho * tamanho)

    if(imc <= 16.9){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        mAbaixo.style.background = 'green'
        mAbaixo.style.color = 'white'
        mmAbaixo.style.background = 'green'
        mmAbaixo.style.color = 'white'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'
        
        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'

    }else if(imc >= 17 && imc<= 18.4){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        abaixo.style.background = 'green'
        abaixo.style.color = 'white'
        aabaixo.style.background = 'green'
        aabaixo.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'
    }else if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        pNormal.style.background = 'green'
        pNormal.style.color = 'white'
        ppNormal.style.background = 'green'
        ppNormal.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'
    }else if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        acimaP.style.background = 'green'
        acimaP.style.color = 'white'
        aacimaP.style.background = 'green'
        aacimaP.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'

        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'
    }else if(imc >=30 && imc <= 34.9){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        obesidadeI.style.background = 'green'
        obesidadeI.style.color = 'white'
        oobesidadeI.style.background = 'green'
        oobesidadeI.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'

        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'
    }else if(imc>= 35 && imc <= 40){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'

        obesidadeII.style.background = 'green'
        obesidadeII.style.color = 'white'
        oobesidadeII.style.background = 'green'
        oobesidadeII.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'

        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeIII.style.background = ''
        obesidadeIII.style.color = 'black'
        oobesidadeIII.style.background = ''
        oobesidadeIII.style.color = 'black'

        
    }else if(imc > 40){
        resultado.innerHTML = `${imc}`
        resultado.style.color = 'green'
        resultado.style.fontSize = '20px'
        
        obesidadeIII.style.background = 'green'
        obesidadeIII.style.color = 'white'
        oobesidadeIII.style.background = 'green'
        oobesidadeIII.style.color = 'white'

        mAbaixo.style.background = ''
        mAbaixo.style.color = 'black'
        mmAbaixo.style.background = ''
        mmAbaixo.style.color = 'black'

        abaixo.style.background = ''
        abaixo.style.color = 'black'
        aabaixo.style.background = ''
        aabaixo.style.color = 'black'

        pNormal.style.background = ''
        pNormal.style.color = 'black'
        ppNormal.style.background = ''
        ppNormal.style.color = 'black'

        acimaP.style.background = ''
        acimaP.style.color = 'black'
        aacimaP.style.background = ''
        aacimaP.style.color = 'black'

        obesidadeI.style.background = ''
        obesidadeI.style.color = 'black'
        oobesidadeI.style.background = ''
        oobesidadeI.style.color = 'black'

        obesidadeII.style.background = ''
        obesidadeII.style.color = 'black'
        oobesidadeII.style.background = ''
        oobesidadeII.style.color = 'black'
    }

}