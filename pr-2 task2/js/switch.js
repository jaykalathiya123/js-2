let season=6;
let msg=document.getElementById("season");

switch(season){
    case 1:
        msg.innerHTML="season::Winter";
        break;
    case 2:
        msg.innerHTML="season::Winter";
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        msg.innerHTML="season::Summer";
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        msg.innerHTML="season:Monsoon";
        break;
    case 11:
        msg.innerHTML="season::winter";
        break;
    case 12:    
        msg.innerHTML="season:winter";
        break;
    default:
        msg.innerHTML="Invalid";
}





