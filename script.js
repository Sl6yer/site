let social = document.querySelector('.sv');
let social2 = document.querySelector('.sv2');
let social3 = document.querySelector('.sv3');
let button = document.querySelector('button');

let input = document.querySelector('input');
let erro = document.querySelector('.erro');  
let senha = document.querySelector('.senha');
let erro2 = document.querySelector('.erro1');  
let Confirm = document.querySelector('.senha-confirm');
let erro4 = document.querySelector('.erro3');

let userInput = ' '
 
input.addEventListener('input', function(){
    
    setTimeout(function(){
        if(input.value.length >= 1 && input.value.length <= 4){
           input.style.borderColor = 'red'
            console.log('error')
             erro.style.display = 'block';
        } else if(input.value.length == 0){
           input.style.borderColor = ''
           erro.style.display = 'none'
    }  else{
            input.style.borderColor = 'green'
            console.log('success')
            erro.style.display = 'none';
        }
    }, 1000)


    userInput = input.value;
    console.log(userInput);
})

senha.addEventListener('input', function(){
    
    setTimeout(function(){
        if(senha.value.length >= 1 && senha.value.length <= 5){
            senha.style.borderColor = 'red'
             console.log('error')
             erro2.style.display = 'block';
        } else if(senha.value.length == 0){
           senha.style.borderColor = '';
           erro2.style.display = 'none'
           Confirm.style.display = 'none';
           erro4.style.display = 'none';
        } else{
           senha.style.borderColor = 'green'
            console.log('success')
            erro2.style.display = 'none';
            Confirm.style.display = 'block';
        }
    }, 1000)
})

Confirm.addEventListener('input', function(){
    setTimeout(function(){
        if(Confirm.value !== senha.value) {
            Confirm.style.borderColor = 'red';
            console.log('error');
            button.disabled = true;
            erro4.style.display = 'block';
        } else if(Confirm.value.length === senha.value.length && Confirm.value.length > 0) {
            Confirm.style.borderColor = 'green';
            console.log('success');
            button.disabled = false;
            erro4.style.display = 'none';
        } else {
            Confirm.style.borderColor = '';
            erro4.style.display = 'none';
        }
    }, 1000);
});


// Login

button.addEventListener('click', () => {
    if (input.value.length >= 5 && senha.value.length >= 6) {
        console.log('Acesso liberado');
        window.location.href = "index2.html";
    } else {
        console.log('Acesso negado');
    }
});

button.addEventListener('mouseover', ()=>{
    button.style.background = 'rgb(32,24,154)';
})

button.addEventListener('mouseout', ()=>{
    button.style.background = '';
})

social.addEventListener('mouseover', () => {
     social.style.transform = 'rotate(-25deg)'

});

social.addEventListener('mouseout', () => {
    social.style.transform = 'rotate(0deg)'
})

social.addEventListener('click', ()=>{
    erro3.style.display = 'block';
    erro3.innerHTML = 'O Twitter está indisponivel no momento'
    setTimeout(function(){
      
       erro3.style.display = 'none';
    }, 3000)
   
})

//img2

social2.addEventListener('mouseover', () => {
    social2.style.transform = 'rotate(-25deg)'

});

social2.addEventListener('mouseout', () => {
   social2.style.transform = 'rotate(0deg)'
})

social2.addEventListener('click', ()=>{
    erro3.style.display = 'block';
    erro3.innerHTML = 'O Google está indisponivel no momento'
    setTimeout(function(){
      
       erro3.style.display = 'none';
    }, 3000)
   
})

//img1

let erro3 = document.querySelector('.erro2')

social3.addEventListener('mouseover', () => {
    social3.style.transform = 'rotate(-25deg)'

});

social3.addEventListener('mouseout', () => {
   social3.style.transform = 'rotate(0deg)'
})

social3.addEventListener('click', ()=>{
     erro3.style.display = 'block';
     erro3.innerHTML = 'O Facebook está indisponivel no momento'
     setTimeout(function(){
       
        erro3.style.display = 'none';
     }, 3000)
    
})