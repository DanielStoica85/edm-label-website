class UI {
    constructor() {
        this.currentReleaseImage = document.getElementById('current-release');
        this.releaseImagesContainer = document.getElementById('release-images');
        this.currentReleaseLink = document.querySelector('#release-overlay a');
    }

    // Display current release image
    displayCurrentReleaseImage(imageSource) {
        this.currentReleaseImage.setAttribute('src', imageSource);
    }

    // Set url for initial current release image
    setCurrentReleaseImageUrl(url) {
        this.currentReleaseLink.href = url;
    }

    // Display smaller images for each release
    displayThumbnails(releasesList) {
        let output = '';
        releasesList.forEach((release) => {
            output += `<img src="${release.thumbnail}" alt="Release Image" data-image="${release.image}" data-url="${release.url}">`;
        });
        this.releaseImagesContainer.innerHTML = output;
        this.releaseImages = document.querySelectorAll('#release-images img');
    }

    // Change main image according to thumbnail clicked
    changeReleaseImages() {
        this.releaseImagesContainer.addEventListener('click', (e) => {
            this.changeCurrentImage(e);
            this.changeReleaseImageOpacity(e);
            this.changeCurrentReleaseLink(e);
        });
    }

    changeCurrentImage(event) {
        if (event.target.tagName === 'IMG') {
            this.currentReleaseImage.src = event.target.getAttribute('data-image');
        }
    }

    changeCurrentReleaseLink(event) {
        if (event.target.tagName === 'IMG') {
            this.currentReleaseLink.href = event.target.getAttribute('data-url');
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