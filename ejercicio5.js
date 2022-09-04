/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
 Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona 
creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: 
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Personas{
    constructor(nombre, edad, sexo, peso, altura, aniodeNacimiento){
        this.nombre= nombre,
        this.edad= edad,
        this.dni= this.generarDNI(),
        this.sexo= sexo,
        this.peso= peso,
        this.altura=altura,
        this.nacimiento= aniodeNacimiento
    }
    mostrarGeneracion(){
        if (this.nacimiento<1948 && this.nacimiento>1930) {
            return 'Generacion: "Silent Generation", Rango Caracteristico: "Austeridad '          
        } else if (this.nacimiento<1968 && this.nacimiento>1949) {
            return ('Generacion: "Baby Boom", Rango Caracteristicos: "Ambicion"');
        } else if (this.nacimiento<1980 && this.nacimiento>1969) {
            return('Generacion: "Generacion X", Rengo Caracteristicos:"Obsesion por el exito"');
        }else if (this.nacimiento<1993 && this.nacimiento>1981) {
            return ('Generacion: "Generacion Y Millennials", Rango caracteristicos: "Frustracion"');
        }else if (this.nacimiento<2010 && this.nacimiento>1994) {
            return ('Generacion: "Generacion Z", Rango caracteristicos: "irreverencia"');
        }else {
            return 'No se definio la generacion.';
        }
    }
    esMayorDeEdad(){
        if (this.edad>18) {
            return true;
        } else {
            return false;
        }
    }
    mostrarDatos(){
        return `<br>Nombre: ${this.nombre}<br> Edad: ${this.edad}<br> Sexo: ${this.sexo}<br> Peso: ${this.peso}<br> Altura: ${this.altura}<br> año de nacimiento: ${this.nacimiento}<br> DNI: ${this.dni}`; 
    }
    generarDNI(){
        return parseInt(Math.random()*99999999);
    }
}
let Nicolas= new Personas('Nicolas', 33, "", 'H', 70, 1.70, 1989);
document.write("<br>" + Nicolas.mostrarGeneracion());
document.write("<br" + Nicolas.esMayorDeEdad());
document.write("<br>" + Nicolas.mostrarDatos());
document.write(`<hr>`)