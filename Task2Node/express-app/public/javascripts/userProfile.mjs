export function renderDetails(user){
    const name=document.querySelector('.name');
    const mail=document.querySelector('.email');
    name.innerHTML=user.name;
    mail.innerHTML=user.email;
}
(async function init(){
        let userObj= await getUser();
        renderDetails(userObj);
    
})();
export async function getUser() {
    let response = await fetch('http://localhost:3000/api/user');
    let user = await response.json();
    // console.log("user from api/user-->>",user);
    return user;
}