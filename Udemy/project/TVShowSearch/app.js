const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault(); //디폴트 이벤트동작 방지
    const searchTerm = form.elements.query.value;

    //쿼리 문자열에는 서너가지를 입력해야한다.
    const config = { params: { q: searchTerm } }   //쿼리 문자열 객체
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';

});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}