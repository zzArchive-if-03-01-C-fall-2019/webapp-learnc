function validate_login() {
  let username = document.getElementsByName('username');
  let password = document.getElementsByName('password');
  let message = document.querySelector('.message');

  console.log('In Process');

  if(username.value && password.value) {
    message.innerHTML = '';
    document.getElementsByTagName('form').submit();
  } else {
    message.innerText = 'Fill out all fields';
    //return 'Fill out all fields';
  }
}

function validate_registration() {
  let username = documents.getElementsByName('username');
  let password = documents.getElementsByName('password');
  let email = documents.getElementsByName('email');
  let passwordcon = documents.getElementsByName('passwordcon');

  let message = documents.getElementsByClassName('message');

  if(username === '' || password === '' || email === '' || passwordcon === '') {

    message.innerHTML = "Please fill out all fields";

  } else if(username.length < 5 || password.length < 5) {

      message.innerHTML = "The username and the password should be longer than 5 characters";

  } else if(password !== passwordcon) {

    message.innerHTML = "The password was not right confirmed";

  } else {
    message.innerHTML = "";
    documents.getElementsByTagName('form').submit();
  }
}
