class Regalo{
    constructor(containserElement, regaloSrc) {
        this.containerElement = containserElement;
        this.abrirRegalo = this.abrirRegalo.bind(this);

        this.regaloSrc = regaloSrc;
        this.image = document.createElement("img");
        this.image.src = '../images/gift-icon.png'
        this.image.addEventListener("click", this.abrirRegalo);
        this.containerElement.appendChild(this.image);
    }

    abrirRegalo(event){
        this.image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
        this.image.removeEventListener("click", this.abrirRegalo);
    }
}