$(document).ready(function() {

  $('.delete_user_btn').click(function() {
    if($('.user_to_delete').val() === '') {
      $('.delete_message').html('Please fill out this filled');
    } else {
      $.ajax({
        url: $(location).attr('pathname'),
        type: 'DELETE',
        cache: false,
        data: {
          value: $('.user_to_delete').val(),
        }
      }).done(function(data) {
        $('body').html(data)
      })
    }
  })
})
