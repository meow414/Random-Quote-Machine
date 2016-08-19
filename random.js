$('.Yes').click(function() {

  // start get - URI (REPLACE KEY WITH YOUR OWN, callback function)

  // see http://coderwall.com/p/duapqq for tutorial on using Google Spreadsheet as JSON
  $.getJSON("https://spreadsheets.google.com/feeds/list/1tBLZMDQovKmRGeMKyVqFSOCSLEZyiML42hw__5_eZZE/od6/public/values?alt=json", function(data) {
    //start each
    var entry = data.feed.entry[Math.floor(Math.random() * data.feed.entry.length)];
    $('.results').html("<h2>" + entry.gsx$quote.$t + "</h2>");
    $("#w").attr("href", 'https://twitter.com/intent/tweet?text=' + entry.gsx$quote.$t);
  });
  // $("#w").append($(".results"));

});
/*$("#w").click(function(){
$(".results").clone.append("#w");
});
*/
/*$(".twitter-share-button").click(function(){
  // start get - URI (REPLACE KEY WITH YOUR OWN, callback function)

  // see http://coderwall.com/p/duapqq for tutorial on using Google Spreadsheet as JSON
  $.getJSON("https://spreadsheets.google.com/feeds/list/1tBLZMDQovKmRGeMKyVqFSOCSLEZyiML42hw__5_eZZE/od6/public/values?alt=json", function(data) {
  //start each
    var entry = data.feed.entry[Math.floor(Math.random()*data.feed.entry.length)];

$("#w").attr("href", 'https://twitter.com/intent/tweet?text=' + entry.gsx$quote.$t );// And only this part was needed but in above code,an yeah $(this).attr(); will not work.Used #w therefore!

  });

  });
This part doesn't work but it taught me why the above code(uncommnted part) will work.  :D
    It was producing diefferent quote.
*/
