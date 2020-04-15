const db=require('./db.js');
function userDetails(username){
    const result= db.filter(entry => {
        
        if(entry.name === username) {
            user=entry;
         
            return user;
        }
    });
    if(result.length !== 1){
        return null;
    }

    return result[0];
}
function addPost(username ,data){
    let postAdded=false;
    db.map((user)=>{
        if(user.name === username ){
                user.post.push({id:user.post.length+1,message:data});
                postAdded=true;
                console.log("IN ADDPOST ---->>>>RETURNING TRUE---->>");
                return postAdded;
            }
    
    })
    return postAdded;
}
module.exports={userDetails,addPost};
