function circulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("circulo"); /*agrega y quita la clase con cada click*/
}

function rectangulo(){
    let figura=document.getElementById("figura");
    /*figura.classList.add("circulo"); /*agrega clases al elemento*/
    figura.classList.toggle("rectangulo"); /*agrega y quita la clase con cada click*/
}

function degradado(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("degrade");
}

function gif(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("animacion");
}