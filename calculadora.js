function calcularImc(){
    //Entrada
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    //Processamento
    let imc = peso / (altura * altura);
    let classificacao= ""
    //Saída
    

    
    if(imc<18.5){
        classificacao = "Magreza"
    }else if(imc>=18.5 && imc<=24.9){
        classificacao = "Normal"
    }else if(imc>=25.0 && imc<=29.9){
        classificacao = "Sobrepeso"
    }else if(imc>=30.0 && imc<=39.9){
        classificacao = "Obesidade"
    }else if(imc>=40.0){
        classificacao = "Obesidade grave"
    }

    document.getElementById("resultado").textContent= "Imc: "+imc.toFixed(2) + " - " + classificacao;
}