// import { getUser } from "./post.mjs";
// import { renderMail } from "./post.mjs";

export function renderEmail(user) {
    const mail = document.querySelector('.email');
    mail.innerHTML = user.email;
}
(async function init() {
    let userObj = await getUser();
    renderEmail(userObj);

})();
export async function getUser() {
    let response = await fetch('http://localhost:3000/api/user');
    let user = await response.json();
    console.log("user from api/user-->>", user);
    return user;
}
