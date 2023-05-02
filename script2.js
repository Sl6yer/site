let button = document.querySelector('button');
let erro1 = document.querySelector('.erro1');
let erro2 = document.querySelector('.erro2');
let erro3 = document.querySelector('.erro3');
let container = document.querySelector('.container');

let email = document.querySelector('.email');
let senha = document.querySelector('.senha');
let Confirm = document.querySelector('.Confirm');

email.addEventListener('input', function(){

    setTimeout(function(){
        if(email.value.length >= 1 && email.value.length <= 4){
          email.style.borderColor = 'red'
            console.log('error')
             erro1.style.display = 'block';
        } else if(email.value.length == 0){
           email.style.borderColor = ''
           erro1.style.display = 'none'
    }  else{
            email.style.borderColor = 'green'
            console.log('success')
            erro1.style.display = 'none';
        }
    }, 1000)
})

senha.addEventListener('input', function(){
    
    setTimeout(function(){
        if(senha.value.length >= 1 && senha.value.length <= 4){
            console.log('error')
            erro2.style.display = 'block';
            senha.style.borderColor = 'red';
        } else if(senha.value.length == 0){
            senha.style.borderColor = '';
             erro2.style.display = 'none'
        } else{
            senha.style.borderColor = 'green'
            erro2.style.display = 'none';
        }
    }, 1000)

})

Confirm.addEventListener('input', function(){
    setTimeout(function(){
        if(Confirm.value !== senha.value) {
            Confirm.style.borderColor = 'red';
            console.log('error');
            button.disabled = true;
            erro3.style.display = 'block';
            container.style.height = '450px';
        } else if(Confirm.value.length === senha.value.length && Confirm.value.length > 0) {
            Confirm.style.borderColor = 'green';
            console.log('success');
            button.disabled = false;
            erro3.style.display = 'none';
        } else {
            Confirm.style.borderColor = '';
            erro3.style.display = 'none';
            container.style.height = '';
        }
    }, 1000);
});

button.addEventListener('mouseover', function(){
    button.style.transform = 'scale(1.1)';
})

button.addEventListener('mouseout', function(){
    button.style.transform = '';
})