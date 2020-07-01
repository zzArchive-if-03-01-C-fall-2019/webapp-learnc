$(document).ready(function() {

  $('.rename_user_btn').click(function() {
    if($('.rename_user_input').val() === '') {
      $('.message').html('Please fill out the Usernamefield or the Passwordfield');
    } else if($('.rename_user_input').val().length < 5 ||
    $('.rename_user_input').val().length > 15) {
      $('.message').html('The Username should be at least 5 and at last 15 characters long');
    } else {
      $.ajax({
        url: $(location).attr('pathname'),
        type: 'PUT',
        cache: false,
        data: {
          newUser: $('.rename_user_input').val(),
        }
      }).done(function(data) {
        $('body').html(data)
      })
    }
  });

  $('.rename_password_btn').click(function() {
    if($('.rename_password_input').val() === '') {
      $('.message').html('Please fill out the Usernamefield or the Passwordfield');
    } else if($('.rename_password_input').val().length < 5 ||
    $('.rename_password_input').val().length > 15) {
      $('.message').html('The Password should be at least 5 and at last 15 characters long');
    } else {
      $.ajax({
        url: $(location).attr('pathname'),
        type: 'PUT',
        cache: false,
        data: {
          newPassword: $('.rename_password_input').val(),
        }
      }).done(function(data) {
        $('body').html(data)
      })
    }
  });

});
