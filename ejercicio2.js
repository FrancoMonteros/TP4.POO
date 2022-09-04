/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar 
la descripción del estado de la cuenta.*/

class Cuenta{
    constructor(Nombre, Monto){
        this.nombre= Nombre,
        this.saldo= 0
        this.monto = Monto
    }
    ingresar(dinero){
        this.monto= dinero;
        this.saldo += dinero;
        document.write("<br> Ingresos de la cuenta Alex: " +this.monto)
    }
    extraer(dinero){
        this.monto= dinero
        if (this.saldo< dinero) {
            document.write('<br> saldo insuficiente, ' + 'el saldo de la cuenta Alex es de: ' + this.saldo);

            return
        }else
        this.saldo -= dinero;
        document.write("<br> Extracciones de la cuenta Alex: " + this.monto)
    }
    informar(){
        document.write("<br> la cuenta del titular<b> " + this.nombre + '</b> posee un saldo en efectivo de: ' + this.saldo);
    }
}
let cuentaAlex= new Cuenta('Alex');
cuentaAlex.informar();
cuentaAlex.ingresar(20000);
cuentaAlex.extraer(5000);
cuentaAlex.informar();
cuentaAlex.extraer(17000);
