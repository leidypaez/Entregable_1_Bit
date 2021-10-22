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