const input = document.getElementById("input")
const check = document.getElementById("check")
const check2 = document.getElementById("check2")
const button = document.getElementById("button")
const p = document.getElementById("valorfinal")

button.onclick = function(){
    let valor = Number(input.value)
    if(check.checked){
        if(!input.value || isNaN(valor)){
            p.textContent = "Não foi colocado nenhum valor"
        }
        else{
            resultado = calculo(valor, false)
            p.textContent = resultado
        }
    } else if(check2.checked){
        if(!input.value || isNaN(valor)){
            p.textContent = "Não foi colocado nenhum valor"
        }
        else{
            resultado = calculo(valor, true)
            p.textContent = resultado
        }
    }
}


function calculo(valor1, boleano){
    if(boleano == true){
        valor1 = (valor1 * 1.8) + 32
        return valor1;
    }
    else if(boleano == false){
        valor1 = (valor1 - 32) * 5 /  9
        return valor1;
    }

}