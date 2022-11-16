class Album{
    constructor() {
        this.images = []
        this.loadImages()
    }
    loadImages(){
        for(let src of PHOTO_LIST){
            const image = document.createElement("img");
            image.src = src;
            this.images.append(image)
        }
    }
}