"use strict";
$(document).ready(()=>{
//Declare reservation list and currentTable as variables
const resList = [];
let currentTable;
let name;
let partyNum;

// Event listener for clicking on tables
  $(document).on("click", ".available", (event) => {
    $(event.target).addClass("currentCircle");
    currentTable = $(event.target);
    $(".tablenum").text(`Table Number: ${currentTable.text()}`)
    $("form").css("display", "flex");
    $("form").fadeIn(400);
  });
  // User clicks save button, form fades out, current circle gets reserved
  $("button").on("click", (event) => {
    name = $("#name").val();
    partyNum = $("#partySize").val();
    $(".currentCircle").attr("name", name);
    $(".currentCircle").attr("partySize", partyNum);
    $(".currentCircle").addClass("reserved").removeClass("available currentCircle");
    $("form").fadeOut(400);
    //The form fades out, the values get reset
      $("#name").val("");
      $("#phone").val("");
      $("#partySize").val("");

  })

// User clicks X on the form, it fades out & loses currentCircle class
    $(".material-icons").click(function () {
      $("form").fadeOut(200);
      $(".currentCircle").toggleClass("currentCircle")
    })

// Hover function for reserved table
       $(document).on("mouseenter", ".reserved", (event) => {
         currentTable = $(event.target);
         name = $(event.target).attr("name");
         partyNum = $(event.target).attr("partySize");
         $(".resInfo").html(`
           <p>Name: ${name}</p>
           <p>Party Size: ${partyNum}</p>
           `)
         $(".resInfo").show();
         $(currentTable).append($(".resInfo"));
      })
      .on("mouseleave", ".reserved", (e) =>{
        $(".resInfo").hide();
      })

}); /*End of document ready*/
