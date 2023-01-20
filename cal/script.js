const mainScreen = document.getElementById('main-screen');
const clearButton = document.getElementById('clear-button');
let mainScreenResult;
let expression = " ";
let answer ;

let keys = Array.from(document.querySelectorAll('.btn'));
keys.forEach( key =>{
    key.addEventListener("click" , (e)=>{
        let btn = e.target;
        let keyPressed = btn.innerHTML;
        
    
        switch (keyPressed) {
            case "AC":
                mainScreen.innerHTML = "0";
                expression = 0;
                break;
            case "=":
                answer = eval(mainScreen.innerHTML);
                mainScreen.innerHTML = answer;
                break;
            
        
            default:
                mainScreen.innerHTML += keyPressed;
                break;


        }
    })
})