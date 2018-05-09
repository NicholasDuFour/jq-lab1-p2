"use strict";
$("document").ready(()=>{
//Hides the form upon initial load;
  $("form").hide();

const resList = [{}];


// Event listener for clicking on tables
  $(".circle").on("click", (event) => {
    $(event.target).addClass("currentCircle");
    $("form").fadeIn(400);
    // console.log("check?");
  });
  // User clicks save button, form fades out, current circle gets reserved
  $("button").on("click", (event) => {
    $("form").fadeOut(400)
    $(".currentCircle").toggleClass("reserved currentCircle")
    $("currentCircle").attr("status", "reserved");
    resList.push({
      Name:$("#name").val(),
      Phone:$("#phone").val(),
      PartySize:$("#partySize").val(),
      // Status:$(status).val()
      });
      $(".resInfo").append("#name").val().text;
      $(".resInfo").append("#partySize").val().text;
      $("#name").val(""),
      $("#phone").val(""),
      $("#partySize").val(""),
      console.log(resList);
  })

  // if ($("p").hasClass("reserved")) {
  //   $(".circle").addClass("reserved");
  // }

// User clicks X on the form, it fades out & loses currentCircle class
    $(".material-icons").click(function () {
      $("form").fadeOut(200);
      $(".currentCircle").toggleClass("currentCircle")
    })

// Hover function for reserved table
      // $(".reserved").on("mouseenter", (event) => {
      //   $(".resInfo").show();
      // });


}); /*End of document ready*/
