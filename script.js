// function change(b){
//     let i = Math.floor(Math.random()*1800)+1;
//     let j = Math.floor(Math.random()*1000)+1;
//     b.style.position = "absolute";
//     b.style.left = i+"px";
//     b.style.top = j+"px";
//     b.style.padding = "1%"

// }
$(document).ready(()=>{
    console.log("altura da tela: ",$(window).height(), "\nLargura da tela: ",$(window).width(),"\nAltura do botao: ",$("#b").height(),"\nLargura do botao: ",$("#b").width())
    $('.botao2').mouseenter(()=>{
        var changeTop = (Math.random() * (Math.floor(Math.random() * $(window).height()))-200);
        var changeLeft = (Math.random() * (Math.floor(Math.random() * $(window).width()))-200);
        console.log("top",changeTop);
        console.log("left",changeLeft);
        $(".botao2").css("position","absolute");
        $(".botao2").css("padding", $(".botao").width() , "%")
        $(".botao2").css("margin-top", changeTop + "px");
        $(".botao2").css("margin-left", changeLeft + "px");
    })

})
