let val = [null];
let tmp = null;
let token = 0;
let screen = document.getElementById("p");
document.getElementById("input").value="";
document.getElementById("input2").value="";


/**
 * Fonction qui met dans la liste la valeur de l'ecran
 */

function saveVal(){
    if(val[0] === null){
        val[0] = parseFloat(screen.innerHTML);
    }
    else{
        val.push(parseFloat(screen.innerHTML));
    }
    token = 1;
}

/**
 * fonction qui résout les valeur dans la liste
 */
function result() {
    tmp = "";

    for (let i = 0; i < val.length; i++) {
        tmp += val[i];
    }
    if (Number.isInteger(eval(tmp))) {
        return eval(tmp)
    } else {
        return eval(tmp).toFixed(6);
    }
}


document.getElementById("zero").addEventListener("click", function(){
    if (token === 0){
        screen.innerHTML = screen.innerHTML + "0";
    }

});

document.getElementById("one").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "1";
    }
});

document.getElementById("two").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "2";
    }
});

document.getElementById("three").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "3";
    }
});

document.getElementById("four").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "4";
    }
});

document.getElementById("five").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "5";
    }
});

document.getElementById("six").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "6";
    }
});

document.getElementById("seven").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "7";
    }
});

document.getElementById("eight").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "8";
    }
});

document.getElementById("nine").addEventListener("click", function(){
    if (token === 0) {
        screen.innerHTML = screen.innerHTML + "9";
    }
});

document.getElementById("dot").addEventListener("click", function(){
    const dot = ".";
    if (token ===0 ){
        if (screen.innerHTML === ""){
            screen.innerHTML = "0.";
        }
        else {
            if (screen.innerHTML.indexOf(dot) === -1 ){
                screen.innerHTML = screen.innerHTML + ".";
            }
        }
    }

});

document.getElementById("me").addEventListener("click", function(){
    tmp = document.getElementById("input");
    tmp.value = screen.innerHTML;
    tmp.select();
    document.execCommand("copy");

});

document.getElementById("del").addEventListener("click", function (){
    screen.innerHTML="";
    token = 0;
    inputVisual ();
});

document.getElementById("more").addEventListener("click", function (){
    if (screen.innerHTML === ""){
        if (token === 1){
            val.push("+");
            token = 0;
        }
    }
    else {
        saveVal();
        val.push("+");
        screen.innerHTML = "";
        token = 0;
    }
    inputVisual ();
});

document.getElementById("less").addEventListener("click", function (){
    if (screen.innerHTML === ""){
        if (token === 1){
            val.push("-");
            token = 0;
        }
    }
    else {
        saveVal();
        val.push("-");
        screen.innerHTML = "";
        token = 0;
    }
    inputVisual ();
});

document.getElementById("multiplication").addEventListener("click", function (){
    if (screen.innerHTML === ""){
        if (token === 1){
            val.push("*");
            token = 0;
        }
    }
    else {
        saveVal();
        val.push("*");
        screen.innerHTML = "";
        token = 0;
    }
    inputVisual ();
});

document.getElementById("slash").addEventListener("click", function (){
    if (screen.innerHTML === ""){
        if (token === 1){
            val.push("/");
            token = 0;
        }
    }
    else {
        saveVal();
        val.push("/");
        screen.innerHTML = "";
        token = 0;
    }
    inputVisual ();
});

document.getElementById("modulo").addEventListener("click", function (){
    if (screen.innerHTML === ""){
        if (token === 1){
            val.push("%");
            token = 0;
        }
    }
    else {
        saveVal();
        val.push("%");
        screen.innerHTML = "";
        token = 0;
    }
    inputVisual ();
});

document.getElementById("negative").addEventListener("click", function (){
    if (screen.innerHTML === ""){}
    else {
        screen.innerHTML = parseFloat(screen.innerHTML)*(-1);
    }
});

document.getElementById("result").addEventListener("click", function (){
    saveVal();
    inputVisual ();
    tmp = result();
    screen.innerHTML = tmp;
    val = [null];
    token = 1;
});

document.getElementById("parenthesisOpen").addEventListener("click", function (){

    if (screen.innerHTML === ""){
        if (val[0] === null) {
            val[0] = "(";
        }
        else {
            val.push("(");
            }
    }
    inputVisual ();
});

document.getElementById("parenthesisClosed").addEventListener("click", function (){
    if (screen.innerHTML === ""){}
    else if (countParenthesis() > 0){
            saveVal();
        val.push(")");
            screen.innerHTML = "";
        }
    inputVisual ();
});

function inputVisual (){
    document.getElementById("input2").value = "";
    for (let i = 0 ; i < val.length ; i++){
        if (val[0] === null){}
        else {
            document.getElementById("input2").value += val[i];
        }
    }
}
/**
 * comptage des parentheses
 * @returns {number}
 */
function countParenthesis (){
    let nbParenthesis = 0;
    for (let i = 0 ; i < val.length ; i++){
        switch (val[i]){
            case "(":
                nbParenthesis +=1;
                break;
            case ")":
                nbParenthesis -=1;
                break;
            default:
                break;
        }
        return nbParenthesis;
    }
}