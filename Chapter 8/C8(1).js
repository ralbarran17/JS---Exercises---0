var timerID = setInterval(function() {
    $(document).click(function() {
        var sentences = [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7'
        ];
      
        var rand = sentences[Math.floor(Math.random() * sentences.length)];
        $('#quotes').fadeOut("slow", function() {
          $('#quotes').text(rand);
          $('#quotes').fadeIn("slow", function() {
          });
        });
      
      });
}, 60 * 1000); 

clearInterval(timerID); 