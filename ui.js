class UI {
    constructor() {
        this.currentReleaseImage = document.getElementById('current-release');
        this.releaseImagesContainer = document.getElementById('release-images');

    }

    // Display current release image
    displayCurrentReleaseImage(imageSource) {
        this.currentReleaseImage.setAttribute('src', imageSource);
    }

    // Display smaller images for each release
    displayThumbnails(releasesList) {
        let output = '';
        releasesList.forEach((release) => {
            output += `<img src="${release.thumbnail}" alt="Release Image" data-image="${release.image}">`;
        });
        this.releaseImagesContainer.innerHTML = output;
        this.releaseImages = document.querySelectorAll('#release-images img');
    }

    // Change main image according to thumbnail clicked
    changeReleaseImages() {
        this.releaseImagesContainer.addEventListener('click', (e) => {
            this.changeCurrentImage(e);
            this.changeReleaseImageOpacity(e);
        });
    }

    changeCurrentImage(event) {
        if (event.target.tagName === 'IMG') {
            this.currentReleaseImage.src = event.target.getAttribute('data-image');
        }
    }

    changeReleaseImageOpacity(event) {
        if (event.target.tagName === 'IMG') {
            // Reset opacity for other images
            this.releaseImages.forEach((image) => {
                image.style.opacity = 1;
            });
            // Change opacity for selected image
            event.target.style.opacity = 0.4;
        }
    }
}