const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
// array of indices so we can iterate over the images
const imageIndexes = [1, 2, 3, 4];
const selectedIndex = null;

imageIndexes.forEach(i => {
    // create img for each one that we have
    const image = document.createElement('img');
    image.src = `images/food_${i}.jpg`;
    image.alt = `food picture #${i} for EverFresh Eatery`;
    image.style.width = `335px`;
    image.style.height = `223px`;
    image.style.objectFit = `cover;` 
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        // popup stuff
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `images/food_${i}.jpg`;
        selectedImage.alt = `food picture #${i} for EverFresh Eatery`;
    })

    // add it to the gallery
    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})