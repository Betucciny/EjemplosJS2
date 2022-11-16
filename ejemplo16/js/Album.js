class Album{
    constructor(albumView, photo_list) {
        this.albumView = albumView;
        this.miniaturas = [];
        const contenedor = document.querySelector('#modal-view');
        this.modal = new Modal(contenedor, photo_list)
        this.imagesSrc = photo_list;
        this.loadImages();
        this.onThumbnailClick = this.onThumbnailClick.bind(this)
    }
    loadImages(){
        for(let i=0; i<this.imagesSrc.length; i++){
            const photoSrc = this.imagesSrc[i];
            const image = createImage(photoSrc);
            image.dataset.index = i.toString();
            image.addEventListener('click', this.onThumbnailClick);
            this.miniaturas.append(image);
            this.albumView.appendChild(image);
        }
    }
    onThumbnailClick(event){
        this.modal.currentIndex = event.currentTarget.dataset.index;
        const image = createImage(event.currentTarget.src);
        this.modal.contenedor.appendChild(image);

        document.body.classList.add('no-scroll');
        this.modal.contenedor.style.top = window.pageYOffset + 'px';
        this.modal.contenedor.classList.remove('hidden');

        document.addEventListener('keydown', nextPhoto)
    }
}

class Modal{
    constructor(contenedor, photo_list) {
        this.contenedor = contenedor
        this.currentIndex = null;
        this.photo_list = photo_list;
        this.hideModal();
        this.nextPhoto = this.hideModal.bind(this);
        this.onModalClick();
        this.contenedor.addEventListener('click', this.onModalClick)
    }
    hideModal(){
        document.body.classList.remove('no-scroll');
        this.contenedor.classList.add('hidden');
        this.contenedor.innerHTML = '';
        document.removeEventListener("keydown", this.nextPhoto)
    }
    nextPhoto(event) {
        if (event.key === 'Escape') {
            this.hideModal();
            return;
        }
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            return;
        }
        let nextIndex = this.currentIndex;
        if (event.key === 'ArrowLeft') {
            nextIndex--;
        } else {
            nextIndex++;
        }
        if (nextIndex < 0 || nextIndex === this.photo_list.length) {
            return;
        }
        const photoSrc = this.photo_list[nextIndex];
        modalView.innerHTML = '';
        const image = createImage(photoSrc);
        modalView.appendChild(image);
        this.currentIndex = nextIndex;
    }
    onModalClick(){
        this.hideModal();
    }
}

function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumview = document.querySelector('#album-view')

const album1 = new Album(albumview, PHOTO_LIST)








