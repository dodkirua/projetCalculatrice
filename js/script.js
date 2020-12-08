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
function result(liste){
    // recherche paranthese
    let nbIteration = 0;
    let pos;
    for (let i = 0; i < liste.length ; i++){
        let nbParenthesis = 0;
        let listeTmp = [null];
        nbIteration += 1;
        switch ( liste[i]){
            case "(":
                nbParenthesis += 1;
                if (nbParenthesis > 1){
                    if (listeTmp[0] === null){
                        listeTmp[0] = "(";
                        break;
                    }
                    else {
                        listeTmp.push("(");
                        pos = i;
                        break;
                    }
                }
                else{
                    break;
                }
            case ")":
                nbParenthesis -=1;
                if (nbParenthesis>2){
                    listeTmp.push(")");
                    break;
                }
                else {
                    liste[i] = result(liste);
                    liste.splice(pos , nbIteration-1 );
                    break;
                }

            default:
                break;
        }
    }
    
    // recherche de multiplication, div et modulo
    for (let i = 0 ; i < liste.length ; i++){
        switch (liste[i]){
            case "*":
             tmp = parseFloat(liste[i-1])*parseFloat(liste[i+1]);
             liste[i+1] = tmp;
             liste.splice((i-1),2);
             break;
            case "/":
                if (liste[i+1] === 0){
                    screen.innerHTML = "Div par 0 impossible";
                }
                else {
                    tmp = parseFloat(liste[i-1])/parseFloat(liste[i+1]);
                    liste[i+1] = tmp;
                    liste.splice((i-1),2);
                }
               break;
            case "%":
                if (liste[i+1] === 0){
                    screen.innerHTML = "Div par 0 impossible modulo impossible";
                }
                else {
                    tmp = parseFloat(liste[i-1])%parseFloat(liste[i+1]);
                    liste[i+1] = tmp;
                    liste.splice((i-1),2);
                }
                break;
                          
            default:
                break;
        }
    }

    // addition et soustraction
    for (let i = 0 ; i < liste.length ; i++){
        switch (liste[i]){
            case "+":
                tmp = parseFloat(liste[i-1])+parseFloat(liste[i+1]);
                liste[i+1] = tmp;
                liste.splice((i-1),2);
                break;
            case "-":
                tmp = parseFloat(liste[i-1])-parseFloat(liste[i+1]);
                liste[i+1] = tmp;
                liste.splice((i-1),2);
                break;
            default:
                break;
        }
    }

    return liste[0];
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
    tmp = (result(val).toFixed(6));
    screen.innerHTML = tmp;
    val = [null];
    token = 1;
});

document.getElementById("parenthesisOpen").addEventListener("click", function (){
    if (screen.innerHTML === ""){
     val.push("(");
    }
});

document.getElementById("parenthesisOpen").addEventListener("click", function (){
    if (screen.innerHTML === ""){}
    else if (countParenthesis() > 0){
            saveVal();
            val.push(")");
            screen.innerHTML = "";
        }
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