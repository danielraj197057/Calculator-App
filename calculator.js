var output = document.getElementById("output");
var errortag = document.getElementById("errtag");

function clr(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0,-1);
}

function display(num){
    output.value += num;
}

function calc(){
    try{
    output.value = eval(output.value);
    errortag.innerHTML = "";
    if(output.value == "undefined"){
        errortag.innerHTML = "* Please enter a number";
    }
    }
    catch(err){
        errortag.innerHTML = "* Please enter a valid sequence" + " ";
    }
}