 export function renderMail(user){
     let emailId=document.querySelector('.email');
     emailId.innerHTML=user.email;
 }
//  export function renderPosts(posts){
//     let outerDiv=document.querySelector('.posts');
//     let template=document.querySelector('#post');
//     posts.map((post)=>{
//         // const cont = template.content.cloneNode(true);
//         let id=document.querySelector('id');
//         let message=document.querySelector('message');
//         id.innerHTML=post.id;
//         message.innerHTML=post.message;
//     })
//  };     outerDiv.appendChild(template);
export function renderPosts(posts) {
    const parent = document.querySelector('.posts');
    const template= document.querySelector('#post');
    posts.map((post)=>{ 
        const cont = template.content.cloneNode(true);
        const id = cont.querySelector("#id");
        const message = cont.querySelector(".message");
        id.innerHTML=post.id;
        message.innerHTML=post.message;
        parent.appendChild(cont);
    });
};
  
export async function getUser() {
    let response = await fetch('http://localhost:3000/api/user');
    let user = await response.json();
    // console.log("user from api/user-->>",user);
    return user;
}
export async function getPosts(){
    let response=await fetch('http://localhost:3000/api/posts');
    let posts= await response.json();
    return posts;
}
(async function init() {
    let user= await getUser();
    renderMail(user);
    let posts = await getPosts();
    console.log("in INIT METHOD---->>>POST--->>",posts);
    renderPosts(posts);
})();

