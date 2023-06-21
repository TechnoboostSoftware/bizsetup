$(function(){
    $(".sendEnquiry").click(function(){
        var emailRegex = /\S+@\S+\.\S+/;
        var mobRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
        console.log(emailRegex.test($('#email').val().trim()))
        console.log(mobRegex.test($('#mobile').val().trim()))
        if (emailRegex.test($('#email').val().trim()) && mobRegex.test($('#mobile').val().trim()) &&  $('#city').val().trim() != "") {
        
           
    
            var data = {
                "city": $('#city').val().trim(),
                "email": $('#email').val().trim(),
                "mobile": $('#mobile').val().trim(),
                "fullName": $('#name').val().trim(),
                "serviceName": $('#lookingFor').val().trim()
            }
    
            var emailBodyContent='<b>Name :</b> '+data.fullName+'<br> <b>Email :</b> '+data.mobile+'<br> <b>Mobile : </b> '+data.mobile+'<br><b>City: </b>'+data.city+'<br><b>Description:</b>'+data.serviceName || 'NA'
    
            var jsondata={
                "token": "uqx51lvs89",
                "emailSubjectLine": "Enquiry for business",
                "emailBodyContent": emailBodyContent
            }
    
            $.ajax({
                type: "POST",
                url: "https://es.technoboost.in/api/v1/mail-send",
                data: JSON.stringify(jsondata),
                contentType: "application/json; charset=utf-8",
                success: function(result){
                    if(result.hasOwnProperty('status') && result.status=='NOT_FOUND' ){
                        $('.testnot').replaceWith('<div class="alert alert-success alert-dismissible fade show" role="alert"> Something went wrong ! Try again <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div>');
                        reset();
                    }
                   
                },
                error:function(err){
                    console.log(err)
                }
        });
        }
        });
})
    
    