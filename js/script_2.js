var globe_image_path = "http://127.0.0.1:3000/concorso_turista_curioso/";

function start()
{

    id = "#londra";
 
    $("body").css("height", "100vh");
    $("div#footer").css("height", "30px");

    $("<div class='clear spacer'></div>").appendTo("div#form");
    $("div#footer").css({"background-image": "none", "border": "none", "position": "static"}).appendTo("div#form");

    change_dest("init",id);


    /* animazione di apertura */
    $("div.menu:not("+id+")").stop(true, false).animate({ width: '0%' }, 380);
    $(id).stop(true, false).animate({ width: '100%' }, 380, function(){ 
        $("div#central_title").hide();

        $("div#facebook").remove();


        $(".select").remove();

        $(id).css("background-size", "100%");


        $("div#form").appendTo(id).fadeIn();    

        $(".box1 div:first-child").html("<img src='"+globe_image_path+"parti_"+id.replace('#','')+".png' title='Vola a "+id.replace('#','')+"' alt='Vola a "+id.replace('#','')+"' />");


        $(".overlay, div.menu:not("+id+")").remove();   
    });


    /* disabilita il mousehover*/
    $("div.menu, .overlay, .select").css("background-position", "0 0").css("cursor", "default").unbind('mouseout').unbind('mouseover');

    /*move step 3 fields to first form*/

    var via = "";
    var via_select = "";
    var giorni_select = "";

    for (var i=1; i<32; i++)
    {
        if(i<10)
            giorni_select += "<option value='0"+i+"'>0"+i+"</option>";
        else
            giorni_select += "<option value='"+i+"'>"+i+"</option>";
    }

    var mesi_select = "";

    for (var i=1; i<13; i++)
    {
        if(i<10)
            mesi_select += "<option value='0"+i+"'>0"+i+"</option>";    
        else
            mesi_select += "<option value='"+i+"'>"+i+"</option>";
    }

    var anni_select = "";

    for (var i=1995; i>1915; i--)
        anni_select += "<option value='"+i+"'>"+i+"</option>";

    var sesso_fb = $("input#sesso_fb").val();
    var sex_select = "<option value='1'>*Mlle</option><option value='2'>*Mme</option><option value='3'>*M</option>";
   
    $("div#step").html("<img src='"+globe_image_path+"ajax-loader.gif' id='loader_gif' alt='caricamento, attendi qualche secondo' title='caricamento, attendi qualche secondo' />CONTINUER");
    $("label.nb").css({"margin-right": "32px", "font-weight": "500px", "font-size": "15px"});
    
    $("select").each(function()
    {
        $(this).selectbox().next().css(
        {
            "width": $(this).css("width"),
            "margin-left": $(this).css("margin-left"),
            "float": $(this).css("float")
        });
    });
    

    /* modifica il footer */
    if($(document).width() > 640){
        $("div#footer")
        .css({
            "background-image": "url('"+globe_image_path+"282b37.png')",
            "border": "none",
            "width": "100%",
            "left": "0",
            "right": "0",
            "bottom": "0",
            "padding-left": "20px",
            "padding-right": "20px"
        })

        $("<iframe src='addsense/passo2.html' frameborder='0'></iframe>").load(function(){
            $("#adsense img").hide()
        }).appendTo("div#adsense")

    }else{
        $("<iframe src='addsense/passo2_mob.html' frameborder='0'></iframe>").load(function(){
            $("#adsense img").hide()
        }).appendTo("div#adsense")
        $("#adsense iframe, #adsense2 iframe").css("margin", "0 auto");
    }
});

$(document).ready(function()
{
    start();	
    step();
});