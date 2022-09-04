/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
 Crear el método mostrarLibro() para mostrar la información relativa al libro
 con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class libro{
    constructor(Isbn, Titulo, Autor, NumerodePaginas){
        this.isbn= Isbn ,
        this.Titulo= Titulo,
        this.Autor= Autor,
        this.NumeroDePaginas= NumerodePaginas
    }
    set ISBN1(ISBNnew){
        this.isbn = ISBNnew;
    }
    set Titulo1(Titulonew){
        this.Titulo= Titulonew;
    }
    set Autor1(Autornew){
        this.Autor= Autornew;
    }
    set NumeroDePaginas1(NumeroDePaginasnew){
        this.NumeroDePaginas= NumeroDePaginasnew;
    }
    get Visbn(){
        return this.isbn;
    }
    get VTitulo(){
       return this.Titulo;
    }
    get VAutor(){
       return this.Autor;
    }
    get VNumDePag(){
       return this.NumeroDePaginas;
    }
    mostrarLibro(){
        return `<br> <b>El libro: ${this.VTitulo} con ISBN nº: ${this.Visbn} creado por el autor: ${this.VAutor}, tiene ${this.VNumDePag} páginas en su totalidad`
    }
}
let el_ritual = new libro(33546794, 'El Ritual', 'Adam Nevill', 478);
let IT = new libro(66795230, 'El payaso IT', 'Stephen King', 328);
document.write(el_ritual.mostrarLibro());
document.write(IT.mostrarLibro());
if (el_ritual.VNumDePag> IT.VNumDePag) {
    document.write("<br>el libro El Ritual tiene mas paginas");
} else {
    document.write("<br>el libro IT tiene mas paginas");
}
document.write(`<hr>`)