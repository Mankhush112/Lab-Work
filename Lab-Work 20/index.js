// IF STATEMENT - if a condition is true, execute some code
//                if not, do something else

    const myText = document.getElementById("myText");
    const mySubmit = document.getElementById("mySubmit");
    const resultElement = document.getElementById("resultElement");
    let age = 0;

mySubmit.onclick = function(){

        age = myText.value;
        age = Number(age);

    if(age >= 100){
            resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
         resultElement.textContent = `you can't enter, you were just born.`;
    }
    else if(age >= 18){
         resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0){
         resultElement.textContent = `You are can't be below 0`;
    }
    else{
         resultElement.textContent = `You must be 18+ to enter this site`;
    }    
}    