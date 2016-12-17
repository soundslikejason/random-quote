// Perform an asynchronous HTTP (Ajax request).
var loadQuote = function() {
  $.ajax({
    type: 'GET',
    url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    dataType: 'jsonp',
    success: function(data) {
      var quoteText = data.quoteText;
      $('#quoteText').html(quoteText);

      var quoteAuthor = data.quoteAuthor;
      $('#quoteAuthor').html(data.quoteAuthor);

      twitter = quoteText + ' ~ ' + quoteAuthor;
    }
  });
}

var twitter;

$(document).ready(function() {
  // Load first random quote upon page load.
  loadQuote();

  // Click event handler to load new random quote
  $('#new').on('click', function() {
    return loadQuote();
  });

  // Tweet out the current quote
  $('#tweet').on('click', function() {
    window.open('https://twitter.com/intent/tweet?text=' + twitter);
  });

});
