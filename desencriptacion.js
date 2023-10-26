function  desencriptacion(mensaje){
    const letras=mensaje.split(",")
    const newElemento=letras.map((elemento)=>{

        if (elemento=="1") return "a"
        if (elemento=="2") return "b"
        if (elemento=="3") return "c"
        if (elemento=="4") return "d"
        if (elemento=="5") return "e"
        if (elemento=="6") return "f"
        if (elemento=="7") return "g"
        if (elemento=="8") return "h"
        if (elemento=="9") return "i"
        if (elemento=="10") return "j"
        if (elemento=="11") return "k"
        if (elemento=="12") return "l"
        if (elemento=="13") return "m"
        if (elemento=="14") return "n"
        if (elemento=="15") return "ñ"
        if (elemento=="16") return "o"
        if (elemento=="17") return "p"
        if (elemento=="18") return "q"
        if (elemento=="19") return "r"
        if (elemento=="20") return "s"
        if (elemento=="21") return "t"
        if (elemento=="22") return "u"
        if (elemento=="23") return "v"
        if (elemento=="24") return "w"
        if (elemento=="25") return "x"
        if (elemento=="26") return "y"
        if (elemento=="27") return "z"
        if (elemento=="28") return " "
    })
    const newMensaje= newElemento.join("")
        return newMensaje
}

console.log(desencriptacion("1,23,17,25")) 