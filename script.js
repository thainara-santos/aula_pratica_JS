const btt1 = window.document.getElementById("btt1");
const btt2 = window.document.getElementById("btt2");
const btt3 = window.document.getElementById("btt3");
const btt4 = window.document.getElementById("btt4");
const envie = window.document.getElementById("env")
const nome = window.document.getElementById("name")
const vaz = window.document.getElementById("vazio")

btt1.addEventListener('click', function(){somar();});
btt2.addEventListener('click', function(){subtrair();});
btt3.addEventListener('click', function(){multiplicar();});
btt4.addEventListener('click', function(){dividir();});
envie.addEventListener('click', function(){enviar()});

function enviar(){
    if(nome.value ===''){
       vaz.innerHTML = "Digite seu nome!!";
       vaz.style.color="red";
      }
    else{
        vaz.innerHTML = (`Olá ${nome.value}`);
        nome.style.display = "none";
        window.document.getElementById("nm").style.display = "none";
        envie.style.display = "none";
        vaz.style.color="black";
    }
}


function somar(){
    const cx1 =  window.document.getElementById("cx1").value;
    const cx2 =  window.document.getElementById("cx2").value;
    
    const num1= parseInt(cx1);
    const num2= parseInt(cx2);
    document.getElementById("res").value = num1+num2; 
}

function subtrair(){
    const cx1 =  window.document.getElementById("cx1").value;
    const cx2 =  window.document.getElementById("cx2").value;
    
    const num1= parseInt(cx1);
    const num2= parseInt(cx2);
    document.getElementById("res").value = num1-num2; 
}

function multiplicar(){
    const cx1 =  window.document.getElementById("cx1").value;
    const cx2 =  window.document.getElementById("cx2").value;
    
    const num1= parseInt(cx1);
    const num2= parseInt(cx2);
    document.getElementById("res").value = num1*num2; 
}

function dividir(){
    const cx1 =  window.document.getElementById("cx1").value;
    const cx2 =  window.document.getElementById("cx2").value;
    
    const num1= parseInt(cx1);
    const num2= parseInt(cx2);
    document.getElementById("res").value = num1/num2; 
}
