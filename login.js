function login()
{
    const nameEl = document.querySelector("#name");
    console.log(nameEl);
    localStorage.setItem("userName", nameEl.value)
    window.location.href = "playGame.html";
}