const ui = new UI();
const catalog = new Catalog();

document.addEventListener('DOMContentLoaded', function () {

    catalog.getMainImage().then(image => {
        ui.displayCurrentReleaseImage(image);
    }).catch(err => {
        console.log('Unable to fetch images.', err);
    });

    catalog.getMainUrl().then(url => {
        ui.setCurrentReleaseImageUrl(url);
    }).catch(err => {
        console.log('Unable to fetch link.');
    });

    catalog.getCatalog().then(releasesList => {
        ui.displayThumbnails(releasesList);
    });

    ui.changeReleaseImages();

});