/*
* FETCH library
* Library for making HTTP requests
* @version 2.0.0
* @author Noha Elmenbawy
*/
class FETCH{

    get(url){  //return with all data in the file
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(data => data.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error));
        });
        
    }

    post(url, data){  //return with all data posted
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then((resp)=> resp.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error));
        });
        
    }

    put(url, data){ //return with updated data only
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then((resp)=> resp.json())
            .then((data)=>resolve(data))
            .catch((error)=>reject(error));
        });  
    }
    delete(url){  //return with empty object deleted
        return new Promise((resolve, reject)=>{
            fetch(url,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json'
                }   
            })
            .then((resp)=> resp.json()) // resp is empty object in this case
            .then((data)=>resolve('this is deleted succusess '+ data + '.....' ))
            .catch((error)=>reject(error));
        });  
    }
}