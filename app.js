const handleSubmit = (event) => {
  event.preventDefault();
  const form = document.querySelector("form");
  const formData = new FormData(form);

  event.target.submit();
  form.reset();
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const loadStyles = (url) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;

  // Insert link at the end of the head
  const headScript = document.querySelector("head");
  headScript.append(link);
};
const Fetch_db = () => {
  let myUsers = null;
  fetch("display_users.php")
    .then((response) => response.json())
    .then((data) => {
      myUsers = data;
      console.log(myUsers);
      const resultDiv = document.querySelector(".user-display ");
      let index = 0;
      for (let user of myUsers) {
        index++;
        const p_index = document.createElement("p");
        const ul = document.createElement("ul");
        const li_username = document.createElement("li");
        const li_password = document.createElement("li");
        const li_sexe = document.createElement("li");
        p_index.innerText = "user" + " " + index;
        li_username.innerText = user.username;
        li_password.innerText = user.password;
        li_sexe.innerText = user.sexe;
        ul.appendChild(p_index);
        ul.appendChild(li_username);
        ul.appendChild(li_password);
        ul.appendChild(li_sexe);
        resultDiv.appendChild(ul);
      }

      loadStyles("display.css");
    });
};

document.addEventListener("DOMContentLoaded", Fetch_db);
