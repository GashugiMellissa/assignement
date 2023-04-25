const token = localStorage.getItem("token").replace(/"/gi, "");
const auth = "Bearer " + token;
const preview = document.getElementById("user-preview");

window.addEventListener("load", () => {
  fetch("https://myapi-y8f8.onrender.com/api/v1/user", {
    method: "get",
    headers: {
      Authorization: auth,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data.response;
      for (let i = 0; i < user.length; i++) {
        const container = document.createElement("div");
        container.setAttribute('class', "card")
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        p1.textContent= `email: ${user[i].email}`;
        p2.textContent= `name: ${user[i].name}`;
        p3.textContent= `role: ${user[i].role}`;
        p4.textContent= `isLoggedIn: ${user[i].isLoggedIn}`;

        container.appendChild(p1)
        container.appendChild(p2)
        container.appendChild(p3)
        container.appendChild(p4)
        preview.appendChild(container)
      }
    })
    .catch((error) => console.log(error));
});
