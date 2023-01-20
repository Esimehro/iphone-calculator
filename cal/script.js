const mainScreen = document.getElementById('main-screen');
const clearButton = document.getElementById('clear-button');
let mainScreenResult;

let keys = Array.from(document.querySelectorAll('.btn'));

keys.map( key =>{
    key.addEventListener("click" , (e)=>{
        let btn = e.target;
        let keyPressed = btn.innerHTML;
    
        switch (keyPressed) {
            case "AC":
                mainScreen.innerHTML = "";
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