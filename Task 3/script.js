/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const renderUserCard = (users) => {
  const output = document.getElementById("output");
  users.forEach((user) => {
    const card = document.createElement("div");

    const login = document.createElement("h1");
    login.innerText = user.login;

    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;

    card.append(login, avatar);
    output.append(card);
  });
};

const fetchUser = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      renderUserCard(data);
    }
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("btn").addEventListener("click", () => {
  fetchUser();
  document.getElementById("message").style.display = "none";
});
