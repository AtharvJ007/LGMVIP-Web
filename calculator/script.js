function clearScreen() {
    document.getElementById("result").value = "";
}

function del(){
    var str = document.getElementById("result").value;
    str=str.toString();
    let len = str.length;
    str=str.substring(0,len-1);
    document.getElementById("result").value=str;
}
 
function display(value) {
    document.getElementById("result").value += value;
    document.getElementById("clear-btn").setAttribute("class", "style1");
    // document.getElementsByClassName("allbtn").setAttribute("button", "style1");
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}