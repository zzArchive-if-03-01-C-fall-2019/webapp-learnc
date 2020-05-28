function validate_login() {
  let username = document.getElementsByName('username');
  let password = document.getElementsByName('password');
  let message = document.querySelector('.message');

  console.log('In Process');

  if(username.username.value && password.password.value) {
    message.innerText = '';
    document.getElementById('interface_form').submit()
  } else {
    message.innerText = 'Please fill out all fields';
  }
}

function validate_registration() {
  let username = document.getElementsByName('username');
  let password = document.getElementsByName('password');
  let email = document.getElementsByName('email');
  let passwordcon = document.getElementsByName('passwordcon');

  let message = document.querySelector('.message');

  if(username === '' || password === '' || email === '' || passwordcon === '') {

    message.innerText = "Please fill out all fields";

  } else if(username.length < 5 || password.length < 5) {

      message.innerText = "The username and the password should be longer than 5 characters";

  } else if(password !== passwordcon) {

    message.innerText = "The password was not right confirmed";

  } else {
    message.innerText = "";
    document.getElementById('interface_form').submit();
  }
}
