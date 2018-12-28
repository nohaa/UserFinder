const serchCntainer = document.querySelector('.search');
const input = document.querySelector('#searchBox');
const profile = document.querySelector('.profile');
const repos = document.querySelector('#repos');

let http = new FETCH;
input.addEventListener('keyup',search);
 

function search(e){
    setTimeout(()=>{
        const data = e.target.value;
    if(data === ''){
        profile.innerHTML  = '';
        repos.innerHTML = `<h1>Latest Repos</h1>`;
    }else{
        http.get(`https://api.github.com/users/${data}?client_id=f32faa26950bb00e8e35&client_secret=ffd1991e44153d2f9fcd1133eb8b55213ee3aaab`)
        .then(showData).then(showRepos).then(()=>{ input.disabled = false;
            input.focus();
            console.log('end');
        });
       
        console.log('endaaa');
    }
    },1000);
    
}
