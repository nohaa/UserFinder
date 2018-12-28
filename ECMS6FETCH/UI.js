
function showData(data){
    return new Promise((resolve, reject)=>{
        if(data.message === "Not Found"){
            //alert
            if(document.querySelector('.alert')){
                document.querySelector('.alert').remove();
            }
            profile.innerHTML  = '';
            repos.innerHTML = `<h1>Latest Repos</h1>`;
            const divAlert = document.createElement('div');
            divAlert.className = "alert alert-danger mt-2";
            divAlert.appendChild(document.createTextNode('This user not found'));
            document.querySelector('.big-container').insertBefore(divAlert,serchCntainer);
            
            setTimeout(()=>divAlert.remove(),3000);
            
        }else{
            profile.innerHTML = `<div class="card card-body mt-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${data.avatar_url}" class="w-100 d-block" alt="user Image"/>
                    <a href="${data.html_url}" target="_blank" class="btn btn-primary w-100 my-2">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary p-2  mt-1">Public Repos : ${data.public_repos}</span>
                    <span class="badge badge-secondary p-2  mt-1">Public Gists : ${data.public_gists}</span>
                    <span class="badge badge-success p-2  mt-1">Followers : ${data.followers}</span>
                    <span class="badge badge-info p-2  mt-1">Following : ${data.following}</span>
                    <br/>
                    <ul class="list-group mt-3 ">
                        <li class="list-group-item ">Company : ${data.company}</li>
                        <li class="list-group-item">Website/Blog : ${data.blog}</li>
                        <li class="list-group-item">Location : ${data.url}</li>
                        <li class="list-group-item">Member Since : ${data.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        repos.innerHTML = `<h1>Latest Repos</h1>`;
        resolve(data);
        }
    });
    
}

function showRepos(data){
    let op = '';
    repos.innerHTML = `<h1>Latest Repos</h1>`;
    
    const a = 'created:asc';
    let rep =`https://api.github.com/users/${data.login}/repos?per_page=5&sort=${a}&client_id=f32faa26950bb00e8e35&client_secret=ffd1991e44153d2f9fcd1133eb8b55213ee3aaab`; //url of repos 
   
    http.get(rep).then((repData)=>{
        
        repData.forEach((el)=>{
            op += `
                <li class="list-group-item py-3">
                <div class="row">
                    <div class="col-md-6 pl-3">
                        <a href="${el.svn_url}" target="_blank">${el.name}</a>
                    </div> 
                    <div class="col-md-6 pr-3">
                        <span class="badge badge-primary">stars: ${el.stargazers_count}</span>
                        <span class="badge badge-secondary">watchers: ${el.watchers_count}</span>
                        <span class="badge badge-success">forks: ${el.forks_count}</span>
                    </div>
                </div>  </li>`;
        });
        const ulRops = document.createElement('ul');
        ulRops.className = "list-group my-3";
        ulRops.innerHTML = op;
        repos.appendChild(ulRops);
         });
}
