   $(document).ready(() =>{
	  
	  $("#p1").hide();
      $("#p2").hide();
      $("#p3").hide();


      $("#button1").click(function() {
      $("#p1").toggle();
      })
      $("#button2").click(function() {
      $("#p2").toggle();
      })
      $("#button3").click(function() {
      $("#p3").toggle();
      })
    })