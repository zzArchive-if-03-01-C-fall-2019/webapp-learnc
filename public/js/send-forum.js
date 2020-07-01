$(document).ready(function() {

  $('.submit_button').click(function() {
    if($('.text').val() === '') {
      $('.message').html('Please write a comment');
    } else {
      $.ajax({
        url: $(location).attr('pathname'),
        type: 'POST',
        cache: false,
        data: {
          value: $('.text').val(),
          search: $('.searchtext').val()
        }
      }).done(function(data) {
        $('body').html(data)
      })
    }
  });

  $('.search_button').click(function() {
    $.ajax({
      url: $(location).attr('pathname'),
      type: 'POST',
      cache: false,
      data: {
        search: $('.searchtext').val()
      }
    }).done(function(data) {
      $('body').html(data)
    })
  });

  $('.delete_button').click(function() {
    $.ajax({
      url: $(location).attr('pathname'),
      type: 'DELETE',
      cache: false,
      data: {
        value: $(this).val(),
        search: $('.searchtext').val()
      }
    }).done(function(data) {
      $('body').html(data)
    })
  });

  $('.pin_button').click(function() {
    $.ajax({
      url: $(location).attr('pathname'),
      type: 'PUT',
      cache: false,
      data: {
        value: $(this).val(),
        search: $('.searchtext').val()
      }
    }).done(function(data) {
      $('body').html(data)
    })
  });

})
