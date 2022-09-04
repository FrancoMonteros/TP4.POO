/*1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender 
y apagar el auto.*/

let auto = {
    color: "red",
    marca: "fiat",
    modelo:"punto",
    encendido: false,

    encender(){
      this.encendido=true;
      return this.encendido;
    },
    apagado(){
      this.encendido= false;
        return this.encendido;
    }
}
document.write('<b> color: ' + auto.color);
document.write('<br> marca: ' + auto.marca);
document.write('<br> modelo: ' + auto.modelo);
document.write('<br> esta encendido el auto?: ' + auto.encender() + " el auto esta encendido");
document.write('<br> el auto esta encendido?: ' + auto.apagado()+ " el auto esta apagado");