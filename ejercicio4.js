/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, 
nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus
 propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
 instanciados.*/

 class Producto{
    constructor(codigo, nombre, precio){
        this.code= codigo,
        this.name= nombre,
        this.price= precio
    }
    get codigo(){
        return this.code;
    }
    get nombre(){
        return this.name;
    }
    get precio(){
        return this.price;
    }
    get imprimeDatos(){
        return (`<b>el codigo: ${this.codigo}, el nombre: ${this.nombre}, el precio: ${this.precio} <br>`);
    }
 }

 let Prodarray=[]

 let jamon= new Producto('7790713', 'jamon cocido paladini', 800);
 let salame = new Producto('7790855', 'salame cagnoli', 750);
 let quesoCremoso = new Producto('7790739', 'queso cremoso ilolay', 850);
Prodarray.push(jamon);
Prodarray.push(salame);
Prodarray.push(quesoCremoso);
for (let i = 0; i < Prodarray.length; i++) {
    document.write(Prodarray[i].imprimeDatos);
    
}
document.write(`<hr>`)