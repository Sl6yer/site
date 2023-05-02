let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button4 = document.querySelector('.button4');

let links = document.querySelector('.home');
let links2 = document.querySelector('.browse');
let links3 = document.querySelector('.page');


button4.addEventListener('mouseover', function() {
    button4.style.backgroundColor = '#27cb8b';
})

button4.addEventListener('mouseout', function() {
    button4.style.backgroundColor = '';
})

let bt = document.querySelector('.bt-ct');
let contedContainer = document.querySelector('.conted-container');
let ct2 = document.querySelector('.ct2');
let bt2 = document.querySelector('.bt-ct2');
let ct3 = document.querySelector('.ct3');
let bt3 = document.querySelector('.bt-ct3');
let ct4 = document.querySelector('.ct4');
let bt4 = document.querySelector('.bt-ct4');
let ct5 = document.querySelector('.ct5');
let bt5 = document.querySelector('.bt-ct5');


contedContainer.addEventListener('mouseover', function() {
    bt.style.backgroundColor = '#000DFF';
    bt.style.color = 'white';
})

contedContainer.addEventListener('mouseout', function() {
    bt.style.backgroundColor = '';
    bt.style.color = '';
})

ct2.addEventListener('mouseover', function() {
    bt2.style.backgroundColor = '#000DFF';
    bt2.style.color = 'white';
})

ct2.addEventListener('mouseout', function() {
    bt2.style.backgroundColor = '';
    bt2.style.color = '';
})

ct3.addEventListener('mouseover', function(){
    bt3.style.backgroundColor = '#000DFF';
    bt3.style.color = 'white';
})

ct3.addEventListener('mouseout', function(){
    bt3.style.backgroundColor = '';
    bt3.style.color = '';
})

ct4.addEventListener('mouseover', function(){
    bt4.style.backgroundColor = '#000DFF';
    bt4.style.color = 'white';
});

ct4.addEventListener('mouseout', function(){
    bt4.style.backgroundColor = '';
    bt4.style.color = '';
})

ct5.addEventListener('mouseover', function(){
    bt5.style.backgroundColor = '#000DFF';
    bt5.style.color = 'white';
});

ct5.addEventListener('mouseout', function(){
    bt5.style.backgroundColor = '';
    bt5.style.color = '';
})

let descBt = document.querySelector('.desc-bt');

descBt.addEventListener('mouseover', function(){
    descBt.style.backgroundColor = '#27cb8b'
});

descBt.addEventListener('mouseout', function(){
    descBt.style.backgroundColor = ''
});

let el1 = document.querySelector('.el1');
let elButton = document.querySelector('.el-button');
let el2 = document.querySelector('.el2');
let elButton2 = document.querySelector('.el-button2');
let el3 = document.querySelector('.el3');
let elButton3 = document.querySelector('.el-button3');
let el4 = document.querySelector('.el4');
let elButton4 = document.querySelector('.el-button4');
let el5 = document.querySelector('.el5');
let elButton5 = document.querySelector('.el-button5');
let el6 = document.querySelector('.el6');
let elButton6 = document.querySelector('.el-button6');

el1.addEventListener('mouseover', function(){
   elButton.style.marginLeft = '35px';
   elButton.style.backgroundColor = '#f0f1ff';
   el1.style.backgroundColor = '#fcfafa'
});

el1.addEventListener('mouseout', function(){
    elButton.style.marginLeft = '';
    elButton.style.backgroundColor = '';
    el1.style.backgroundColor = ''
});

el2.addEventListener('mouseover', function(){
    elButton2.style.marginLeft = '35px';
    elButton2.style.backgroundColor = '#f0f1ff';
    el2.style.backgroundColor = '#fcfafa'
 });

el2.addEventListener('mouseout', function(){
    elButton2.style.marginLeft = '';
    elButton2.style.backgroundColor = '';
    el2.style.backgroundColor = ''
});

el3.addEventListener('mouseover', function(){
    elButton3.style.marginLeft = '35px';
    elButton3.style.backgroundColor = '#f0f1ff';
    el3.style.backgroundColor = '#fcfafa'
 });

el3.addEventListener('mouseout', function(){
    elButton3.style.marginLeft = '';
    elButton3.style.backgroundColor = '';
    el3.style.backgroundColor = ''
});

el4.addEventListener('mouseover', function(){
    elButton4.style.marginLeft = '35px';
    elButton4.style.backgroundColor = '#f0f1ff';
    el4.style.backgroundColor = '#fcfafa'
 });
 
 el4.addEventListener('mouseout', function(){
     elButton4.style.marginLeft = '';
     elButton4.style.backgroundColor = '';
     el4.style.backgroundColor = ''
 });
 
 el5.addEventListener('mouseover', function(){
    elButton5.style.marginLeft = '35px';
    elButton5.style.backgroundColor = '#f0f1ff';
    el5.style.backgroundColor = '#fcfafa'
 });
 
 el5.addEventListener('mouseout', function(){
     elButton5.style.marginLeft = '';
     elButton5.style.backgroundColor = '';
     el5.style.backgroundColor = ''
 });

el6.addEventListener('mouseover', function(){
    elButton6.style.marginLeft = '35px';
    elButton6.style.backgroundColor = '#f0f1ff';
    el6.style.backgroundColor = '#fcfafa';
});

el6.addEventListener('mouseout', function(){
    elButton6.style.marginLeft = '';
    elButton6.style.backgroundColor = '';
    el6.style.backgroundColor = '';
});

let endbutton = document.querySelector('.end-button');
let endbutton2 = document.querySelector('.end-button2');
let endbutton3 = document.querySelector('.end-button3');
let endsvg = document.querySelector('.end-svg');
let endsvg2 = document.querySelector('.end-svg2');
let endsvg3 = document.querySelector('.end-svg3');

endbutton.addEventListener('mouseover', function(){
   endsvg.style.transform = 'scaleX(-1)'
   endbutton.style.backgroundColor = '#d9dbe2';
});

endbutton.addEventListener('mouseout', function(){
    endsvg.style.transform = 'scaleX(1)'
    endbutton.style.backgroundColor = '';
});

endbutton2.addEventListener('mouseover', function(){
    endsvg2.style.transform = 'scaleX(-1)'
    endbutton2.style.backgroundColor = '#d9dbe2';
 });
 
 endbutton2.addEventListener('mouseout', function(){
     endsvg2.style.transform = 'scaleX(1)'
     endbutton2.style.backgroundColor = '';
 });

endbutton3.addEventListener('mouseover', function(){
    endsvg3.style.transform = 'scaleX(-1)'
    endbutton3.style.backgroundColor = '#d9dbe2';
 });
 
endbutton3.addEventListener('mouseout', function(){
     endsvg3.style.transform = 'scaleX(1)'
     endbutton3.style.backgroundColor = '';
 });
 
 let liend = document.querySelectorAll('li');

 liend.forEach(item => {
   item.addEventListener('mouseover', function() {
     this.style.transform = 'scale(1.1)';
     this.style.marginLeft = '20px'
   });
 });

 liend.forEach(item => {
    item.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
      this.style.marginLeft = ''
    });
  });
 
