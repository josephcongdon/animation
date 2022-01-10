$("#click").click(()=> {
   console.log("blue");
   $(".testing").toggleClass("blue");
   $(".testing").html("<h3>This is blue</h3>");
});