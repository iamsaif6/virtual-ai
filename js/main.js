/*change languge*/
$(".user_language").change(function(){
      language=this.value;
      $.ajax({
         url:'/site/changelanguage',
         type:"GET",
         data:{language:language},
         success:function(result){
           console.log(result);
           location.reload();
         },
     });
    });
 /*end*/
 
 wow=new WOW({animateClass:'animated',offset:50,callback:function(box){console.log("WOW: animating <"+box.tagName.toLowerCase()+">")}});wow.init();
       
       $(document).ready(function () {
 
   $('.first-button').on('click', function () {
 
     $('.animated-icon1').toggleClass('open');
   });
   $('.second-button').on('click', function () {
 
     $('.animated-icon2').toggleClass('open');
   });
   $('.third-button').on('click', function () {
 
     $('.animated-icon3').toggleClass('open');
   });
 });
 
 function submit_form()
 {
       $('.modal-footer').hide();
       $.ajax({
          url: '/contactus/submitrequest/',
          type: 'post',
          data:$('#contactform').serialize(),
             success: function(data){	
                   $('#msg').html('Thank you for submitting your request we will get in touch with you shortly.');
         $('.modal-footer').show();
                    $("#contactform").trigger("reset");
             },
             error: function(data){
             
             }
 
   });
 return false;	
 }