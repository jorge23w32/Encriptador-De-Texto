

//Variables

let contadorInicio = 0;
let divSinResultado = document.getElementById("sinResultado");
let divConResultado = document.getElementById("conResultado");
let resultadoACopiar = document.getElementById("textoResultado");
let botonCopiar = document.getElementById("botonCopiar");
let textoUsuario = document.getElementById("textoUsuario");
const palabrasEncriptadas = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
};

const palabrasDesencriptadas = {
    'ai' : 'a',
    'enter' : 'e',
    'imes' : 'i',
    'ober' : 'o',
    'ufat' : 'u'
};
//Se muestra primero la seccion sinResultado y se oculta la seccion conResultado cuando se inciia por primera vez

if(contadorInicio == 0){
    divSinResultado.style.display = 'grid';
    divConResultado.style.display = 'none';
    contadorInicio++;
}

//Funcion para a
function verificarTexto(){
    //Verifica que el texto este escrito solo en minusculas, si es verdadero significa que son minusculas
    if (/^[a-z\s.,¡!¿?()]*$/.test(textoUsuario.value)) {
        return true;       
    }else{
        return false;
    }
}

//Funcion que Activa la seccion conResultado para que se muestre el resultado

function activarResultado(){
    divConResultado.style.display = 'grid';
    divSinResultado.style.display = 'none';
    botonCopiar.textContent = 'Copiar';
}

//Funcion para encriptar el texto obtenido del usuario

function encriptarTexto(){
    let verificador = verificarTexto();
    if(verificador == true){
        activarResultado();
        let texto = textoUsuario.value;
        let textoEncriptado = texto.replace(/[aeiou]/g, m => palabrasEncriptadas[m]);
        resultadoACopiar.textContent = textoEncriptado;
    }else{
        alert('Recuerda que el texto debe estar escrito en minúsculas');
    }
}

//Funcion para desencriptar el texto obtenido del usuario
function desencriptarTexto(){
    let verificador = verificarTexto();
    if(verificador == true){
        activarResultado();
        let texto = textoUsuario.value;
        var textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched) {
            return palabrasDesencriptadas[matched];
        });
        resultadoACopiar.textContent = textoDesencriptado;
    }else{
        alert('Recuerda que el texto debe estar escrito en minúsculas');
    }
}


//Funcion para copiar el texto encriptado o desencriptado
function copiarTexto(){
    navigator.clipboard.writeText(resultadoACopiar.textContent)
    botonCopiar.textContent = 'Texto Copiado';
}

