/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulos {
    constructor(Alto1, Ancho1){
        this.alto= Alto1,
        this.ancho= Ancho1
    }
    altorec(altura){
            return this.alto = altura;
    }
    anchorec(anchor){
            return this.ancho = anchor;
    }
    perimetro(){
        return 2* (this.alto + this.ancho);
    }
    area(){
        return this.alto * this.ancho;
    }
}   
let rectangulo1 = new Rectangulos(20 ,10);
document.write(`<hr>`)
document.write(`el perimetro del rectangulo es de: ${rectangulo1.perimetro()} <br>`);
document.write(`el area del rectangulo es de: ${rectangulo1.area()}<br>`);
let rectangulo2 = new Rectangulos(15,8);
document.write(`el perimetro del rectangulo es de: ${rectangulo2.perimetro()} <br>`);
document.write(`el area del rectangulo es de: ${rectangulo2.area()}<br>`);
let rectangulo3 = new Rectangulos(5, 10);
document.write(`el perimetro del rectangulo es de: ${rectangulo3.perimetro()} <br>`);
document.write(`el area del rectangulo es de: ${rectangulo3.area()}<br>`);
document.write(`<hr>`)