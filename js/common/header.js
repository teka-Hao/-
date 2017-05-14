define(['jquery', 'bootstrap', 'jquery_form'], function ($, ud, und) {
  $('#logout').on('click', function () {
    $.ajax({
      url: '/v6/logout',
      type: 'post',
      success: function () {
        location.href = '/html/home/login.html'
        console.log(1)
      }
    })
  })
})
