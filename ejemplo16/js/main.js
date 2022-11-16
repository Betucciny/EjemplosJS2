for (let photoSrc of PHOTO_LIST){
    const image = new Image(photoSrc);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick)