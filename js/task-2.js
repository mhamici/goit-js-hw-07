const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const galleryList = document.querySelector(`.gallery`);
//console.log(galleryList);

const createGalleryItem = itemInfo => {
  const galleryItemEl = document.createElement(`li`);
        galleryItemEl.classList.add(`gallery-item`);
        
  const galleryImgEl = document.createElement(`img`);
        galleryImgEl.src = itemInfo.url;
        galleryImgEl.alt = itemInfo.alt;
  galleryItemEl.append(galleryImgEl);

  return galleryItemEl;
};

const galleryImageArr = images.map(imgInfo => createGalleryItem(imgInfo));

galleryList.append(...galleryImageArr);


    galleryList.style.display = 'flex';
    galleryList.style.flexWrap = 'wrap';
    galleryList.style.listStyle = 'none';
    galleryList.style.padding = '0';
    galleryList.style.margin = '0';
    galleryList.style.gap = '20px';

    galleryImageArr.forEach(item => {
      item.style.flexBasis = 'calc(50% - 20px)';
      item.style.boxSizing = 'border-box';

      const img = item.querySelector('img');
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
    });

