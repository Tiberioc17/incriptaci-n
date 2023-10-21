function incriptacion(mensaje){
const letras= mensaje.split("")

const newElemento=letras.map((elemento)=>{
if (elemento=="a") return "1"
if (elemento=="b") return "2"
if (elemento=="c") return "3"
if (elemento=="d") return "4"
if (elemento=="e") return "5"
if (elemento=="f") return "6"
if (elemento=="g") return "7"
if (elemento=="h") return "8"
if (elemento=="i") return "9"
if (elemento=="j") return "10"
if (elemento=="k") return "11"
if (elemento=="l") return "12"
if (elemento=="m") return "13"
if (elemento=="n") return "14"
if (elemento=="ñ") return "15"
if (elemento=="o") return "16"
if (elemento=="p") return "17"
if (elemento=="q") return "18"
if (elemento=="r") return "19"
if (elemento=="s") return "20"
if (elemento=="t") return "21"
if (elemento=="u") return "22"
if (elemento=="v") return "23" 
if (elemento=="w") return "24"
if (elemento=="x") return "25"
if (elemento=="y") return "26"
if (elemento=="z") return "27"
if (elemento==" ") return "28"
})

const newMensaje = newElemento.join()
return newMensaje

}
console.log(incriptacion("abz "))