var numero = 1;

switch(numero){
    case 1:
        console.log("Soy un uno")
    break;
    default:
        console.log("Soy un numero diferente a uno")
    break;
}

//  caso de omsión del break

var mes = "Mayo"

switch(mes){
    case "enero":
        case "marzo":
            case "mayo":
                case "julio":
                    case "agosto":
                        case "octubre":
                            case "diciembre":
                                console.log("El mes "+ mes +" tiene 31 días")
                                break;
                                case "abril":
                                    case "junio":
                                        case "septiembre":
                                            case "noviembre":
                                                console.log("El mes "+ mes + " tiene 30 días")
                                                break;

                                            case "febrero":
                                                console.log("El mes " + mes + " tiene 28 o 29 días")
                                
}