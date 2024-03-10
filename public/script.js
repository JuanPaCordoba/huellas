document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }, 
      body: JSON.stringify({ username, password })
    };

    fetch("http://localhost:8000/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(
            "Credenciales incorrectas. Por favor, inténtalo de nuevo."
          );
        }
      })
      .then((data) => {
        alert(`Bienvenido, ${username}!`);
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "none";
      })
      .catch((error) => {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
      });
  });

function myLogPassword() {
  var a = document.getElementById("password");
  var b = document.getElementById("eye");
  var c = document.getElementById("eye-slash");
  if (a.type === "password") {
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
  } else {
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
  }
}
