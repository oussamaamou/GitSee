/** Declaration des Variables */

const lightbtn = document.getElementById("lightmode");
const darkbtn = document.getElementById("darkmode");

const srchbar = document.getElementById("searchbarre");
const srchbtn = document.getElementById("searchrbt");

const nbrrepo = document.getElementById("reposcnt");
const nbrflwrs = document.getElementById("flwrscnt");
const nbrflwng = document.getElementById("flwngcnt");

const imgprfl = document.getElementById("prflimg");

const username = document.getElementById("usergitname");
const country = document.getElementById("usercntry");
const addressgit = document.getElementById("useraddrs");
const gitcpny = document.getElementById("usercpny");

const repovst = document.getElementById("repovst");

const userbio = document.getElementById("userbio");


srchbtn.addEventListener('click', function(event){

    event.preventDefault();

    const url = `https://api.github.com/users/${srchbar.value}`;

    async function getdata() {

        const response = await fetch(url);
        const data = await response.json();

        nbrrepo.textContent = data.public_repos;

        nbrflwrs.textContent = data.followers;

        nbrflwng.textContent = data.following;

        imgprfl.src = data.avatar_url;

        username.textContent = data.name;

        country.textContent = data.location || "Non Disponible";

        addressgit.textContent = `@${data.login}`;

        gitcpny.textContent = data.company || "Non Disponible";

        repovst.href = data.html_url;

        userbio.textContent = data.bio || "Ce Profile n'a pas de Bio ";

    };

    getdata();

});


darkbtn.addEventListener('click' , function(){
    
    document.body.classList.remove('ligth');
    document.body.classList.add('dark');
    lightbtn.style.display = "block";
    darkbtn.style.display = "none";

});

lightbtn.addEventListener('click' , function(){

    document.body.classList.add('ligth');
    document.body.classList.remove('dark');
    lightbtn.style.display = "none";
    darkbtn.style.display = "block";
});


