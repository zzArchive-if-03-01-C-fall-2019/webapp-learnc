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

  if(username.username.value === '' || password.password.value === ''
  || email.email.value === '' || passwordcon.passwordcon.value === '') {

    message.innerText = "Please fill out all fields";

  } else if(username.username.length < 5 || password.password.length < 5) {

      message.innerText = "The username and the password should be longer than 5 characters";

  } else if(password.password.value !== passwordcon.passwordcon.value) {

    message.innerText = "The password was not right confirmed";

  } else {
    message.innerText = "";
    document.getElementById('interface_form').submit();
  }
}

function validate_comment_input() {
  let text = document.getElementsByName('text');
  let message = document.querySelector('.message');

  if(text.text.value === '') {
    message.innerText = 'Please write a comment';
  } else {
    document.getElementById('comment_form').submit();
  }
}

function validate_assign() {
  let username = document.getElementsByName('username');
  let message = document.querySelector('.message');

  if(username.username.value === '') {
    message.innerText = 'Please write down an user';
  } else {
    document.getElementById('interface_form').submit();
  }
}
