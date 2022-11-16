class Modal{
    constructor() {
        this.index = 0;
        this.image = undefined;
        this.cargarModal();
    }
    cargarModal(event){
        this.image = event.element;
    }

}