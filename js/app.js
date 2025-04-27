
function register(event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(user => user.email === email)) {
    alert("Email already exists!");
    return;
  }

  users.push({ fullName, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Registered successfully!");
  window.location.href = 'login.html';
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'home.html';
  } else {
    alert("Invalid credentials!");
  }
}

function loadUser() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    window.location.href = 'login.html';
  } else {
    document.getElementById('username').innerText = user.fullName;
    document.getElementById('userInfo').innerText = user.fullName + " (" + user.email + ")";
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}

if (document.body.contains(document.getElementById('username'))) {
  loadUser();
}
