class Aplicacion {
    constructor(contenedorRegalo, contenedorTitulo) {
        this.contenedorRegalo = contenedorRegalo;
        this.contenedorTitulo = contenedorTitulo;

        this.regaloabierto = this.regaloabierto.bind(this);
        this.regalos = [];
        this.cargarContenedorRegalo();
        this.regalosAbiertos = 0;
    }
    cargarContenedorRegalo() {
        for (const enlace of REGALOS_ENLACES) {
            const regalo = new Regalo(this.contenedorRegalo, enlace, this.regaloabierto);
            this.regalos.push(regalo);
        }
    }

    regaloabierto(){
        this.regalosAbiertos++;
        if(this.regalosAbiertos === this.regalos.length){
            this.contenedorTitulo.textContent = 'Disfruta tus regalos';
        }
    }
}