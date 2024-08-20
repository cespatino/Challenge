const d = document;
const textArea = d.querySelector(".form_input");
const imagenMuneco = d.querySelector(".result_img");
const resultadoTitulo =d.querySelector(".result_title");
const resultadoText = d.querySelector(".result_text");
const botonEncriptar = d.querySelector(".form_btn");
const botonDesencriptar = d.querySelectorAll(".form_btn");
const botonCopiar = d.querySelector(".result_btn");


const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j=0; j < llaves.length; j++){
            if (letra === llaves[j][0]){
                encriptada = llaves [j][1];
                break
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptar (mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i ++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display ="none";
    console.log (e.target.value);
    resultadoTitulo.textContent = "Capturando Mensaje";  
    resultadoText.textContent = "";

})
//funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hiden");
    resultadoTitulo.textContent = "El resultado es: ";
})

botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptar(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es: ";
    botonCopiar.classList.remove("hiden");
})

botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
    imagenMuneco.style.display = "block";
    resultadoTitulo.textContent="El texto se copio";
    botonCopiar.classList.add("hidden");
    resultadoText.textContent = "";
    })
})