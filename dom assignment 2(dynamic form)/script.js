let label = document.querySelector('#label');
let container = document.querySelector('.container');
let selectType = document.querySelector('select');
let formGroup = document.querySelector('.form-group');

label.addEventListener('keyup',(event)=>{
    const key = event.key;
    if(key==='Enter'){
       const type = selectType.value;
    //    console.log(type);
       const newLabel = event.target.value;
       

    //    console.log(newLabel);
        let input;
       if(type==='textArea'){
        input = document.createElement('textarea');
        
       }else{
        input = document.createElement('input');
       }
       const createLabel = document.createElement('label');
       createLabel.style.margin='10px 0';
       createLabel.innerHTML = newLabel+'<br>';
       createLabel.className = 'form-control';
       


       input.className= 'form-control';
       input.type = type;
       
       if(type!='submit'){
        formGroup.append(createLabel);
       }
       if(type==='submit'){
        input.classList.add('btn');
        input.classList.add('btn-success');
        
        input.value = label.value;
       }
       formGroup.append(input);
    }
})