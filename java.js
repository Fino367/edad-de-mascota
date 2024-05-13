function IMC(){
    let peso = parseFloat(document.getElementById("p1").value)
    let pies= parseFloat(document.getElementById("pie").value)
    let pulgadas = parseFloat(document.getElementById("pulg").value)
    let altura = (pies*12)+pulgadas;
    let imc = 703*peso/(altura**2)
    let clasi = ""
    if (imc < 18.5) {
        clasi = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasi = "Normal";
    } else if (imc >= 25 && imc < 30) {
        clasi = "Exceso de peso";
    } else {
        clasi = "Obeso";
    }
    document.getElementById("cla").innerHTML = clasi;
    document.getElementById("IMC").innerHTML = imc.toFixed(1);
}
function Perro(){
    let edadp = parseFloat(document.getElementById("ed").value)
    r = Math.log(edadp)
    edadph = 16*r+31
    document.getElementById("eph").innerHTML = edadph.toFixed(1);
}