const serchCntainer = document.querySelector('.search');
const input = document.querySelector('#searchBox');
const profile = document.querySelector('.profile');
const repos = document.querySelector('#repos');

let http = new FETCH;
input.addEventListener('keyup',search);

function search(e){
    const data = e.target.value;
    if(data === ''){
        profile.innerHTML  = '';
        repos.innerHTML = `<h1>Latest Repos</h1>`;
    }else{
        http.get(`https://api.github.com/users/${data}?client_id=f32faa26950bb00e8e35&client_secret=f32faa26950bb00e8e35`)
        .then(showData).then(showRepos);
    }
}
