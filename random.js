$(document).ready(function(){
$('.Yes').click(function() {

  // start get - URI (REPLACE KEY WITH YOUR OWN, callback function)

  // see http://coderwall.com/p/duapqq for tutorial on using Google Spreadsheet as JSON
  $.getJSON("https://spreadsheets.google.com/feeds/list/1tBLZMDQovKmRGeMKyVqFSOCSLEZyiML42hw__5_eZZE/od6/public/values?alt=json", function(data) {
    //start each
    var entry = data.feed.entry[Math.floor(Math.random() * data.feed.entry.length)];
    $('.results').html("<h2>" + entry.gsx$quote.$t + "</h2>");
    $("#w").attr("href", 'https://twitter.com/intent/tweet?text=' + entry.gsx$quote.$t);
  });
 

});
});
