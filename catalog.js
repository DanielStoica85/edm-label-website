class Catalog {
    constructor() {

    }

    async getCatalog() {
        const imageResponse = await fetch('albums.json');

        const releases = await imageResponse.json();

        return releases;
    }

    async getMainImage() {

        const releases = await this.getCatalog();

        const mainImage = releases[0].image;

        return mainImage;
    }

    async getImages() {

        const releases = await this.getCatalog();

        let thumbnails = [];

        releases.forEach((release) => {
            thumbnails.push(release.thumbnail);
        });

        return thumbnails;
    }
}