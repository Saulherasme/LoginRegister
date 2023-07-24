function toggleForm() {
  const loginForm = document.getElementById("loginform");
  const registrarForm = document.getElementById("registerForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registrarForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registrarForm.style.display = "block";
  }
}

function registrarUser() {
  const username = document.getElementById("registrarUsername").value;
  const password = document.getElementById("RegistrarPassword").value;

  if (username.trim() === "" || password.trim() === "") {
    alert("Usuario o contraseña estan vacio");
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert("Usuario registrado");
  return false;
}

function loginUser() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassord").value;

  if (username.trim() === "" || password.trim() === "") {
    alert("Usuario o contraseña estan vacio");
  }
  const storeName = localStorage.getItem("username", username);
  const storePassword = localStorage.getItem("password", password);

  if(storeName === username && storePassword === password){
    alert("Felicidades", username, " Bienvenido");
  }else{
    alert("No se pudo inicial, Intentelo de nuevo")
  }
  return false;
}
