function button_display(num) {
    document.getElementById("display").value += num;
}

function result() {
    try {
        let values = document.getElementById("display").value;
    let result = eval(values);
    document.getElementById("display").value = result;
        
    } catch (error) {

        document.getElementById("display").value = "Error";
    }

}
function Clear() {
    document.getElementById("display").value = "";
}
