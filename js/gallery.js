generateID = () => `${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;

data = [
    {
        "id": this.generateID(),
        "title": "titleGame",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://p4.wallpaperbetter.com/wallpaper/588/5/300/rick-and-morty-toilets-hd-wallpaper-preview.jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame2",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame3",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame4",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame5",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        
        "title": "titleGame6",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame7",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg",
        "description": "rick toilets",
    },
    {
        "id": this.generateID(),
        "title": "titleGame8",
        "year": 2000,
        "urlTrailer": "urlTrailer",
        "urlImagen": "https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg",
        "description": "rick toilets",
    }
]

class Gallery {

    constructor(data, max) {
        this.columns = document.querySelectorAll('.gallery .col');
        this.modalContent = document.querySelector('.modal-content');
        this.plusMax = max || 2;
        this.data = data;
        this.build();
    }

    elementGallery = (obj) => {
        return `<div class="gallery__link" id="${obj.id}">
            <figure class="gallery__thumb">
                <img loading="lazy" class="gallery__image w-100 shadow-1-strong rounded mb-4" data-mdb-toggle="modal" data-mdb-target="#exampleModal"
                    src="${obj.urlImagen}"
                    alt="${obj.title}">
                <figcaption class="gallery__caption">${obj.title} - ${obj.year}</figcaption>
            </figure>
        </div>`;
    } 
    
    build = () => {
        let counter = 0;
    
        for (let index = 0; index < this.columns.length; index++) {
            for (let i = counter; i < counter + this.plusMax; i++) {
                this.columns[index].innerHTML += this.elementGallery(this.data[i]);
            }
            counter += this.plusMax;
        }

        this.lister();
    }

    lister = () => {
        document.querySelectorAll('.gallery__link')
        .forEach((element, i) => {
            element.addEventListener('click', () => {
                const obj = this.data[i];
                this.modalContent.innerHTML = `
                    <div class="modal-header p-1">
                        <h5 class="modal-title ps-1" id="exampleModalLabel">${obj.title}</h5>
                        <button type="button" class="btn-close m-0 pr-1" data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-1">
                        <div>
                            <figure class="p-0 m-0">
                                <img loading="lazy" class="w-100 shadow-1-strong rounded"
                                    src="${obj.urlImagen}"
                                    alt="${obj.title}">
                            </figure>
                        </div>
                    </div>`;
            });
        });
    }

}

const gallery = new Gallery(data, 2);   