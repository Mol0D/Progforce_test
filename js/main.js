import gallery from './gallery';
import galleryHbs from './components/gallery.hbs';
import favoriteHbs from './components/favorite.hbs';

import state from './state';

const galleryElement = document.getElementById("gallery");
const favoriteElement = document.getElementById("favorite");

const URL = 'http://my-json-server.typicode.com/moviedb-tech/movies/list';

(async function getData() {
    state.isLoading = true;

    await fetch(URL)
        .then(response => response.json())
        .then(data => state.data = data)
        .catch(err => console.error(err));

    state.isLoading = false;
    console.log(state);
    createHtml();
})();

const createHtml = () => {
    galleryElement.innerHTML = galleryHbs({data: state.data});
    favoriteElement.innerHTML = favoriteHbs({});
}
