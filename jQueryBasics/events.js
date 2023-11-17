$(document).ready(function(){
    //focus
    $('#sname, #sclass, #scountry').focus(function(){
        $(this).css('backgroundColor', 'lightBlue')
    })

    //blur
    $('#sname, #sclass, #scountry').blur(function(){
        $(this).css('backgroundColor', '')
    })

    //select
    $('#sname, #sclass').select(function(){
        $(this).css('backgroundColor', 'yellow')
    })

    //set value
    $('#sname').val("Akansha");
    $('#sclass').val("B.Sc(Hons.)");

    //change
    $('#scountry').change(function(){
        $(this).css('backgroundColor', 'pink')
        var a= $(this).val();
        $('#test').html(a)
    })

    //submit
    $('#sform').submit(function(){
       alert("Form submitted");
    }) 

    //window events
    //scroll
    $(window).scroll(function(){
        console.log("window scrolling")
    })

    $('#boxWindow').scroll(function(){
        console.log("box scrolling")
    })

    //resize
    $(window).resize(function(){
        console.log("resizing window")
    })

}); 