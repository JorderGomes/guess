$(document).ready(function() {
    $("#rules").on("click", function() {
        console.log("Botão 'rules' clicado!");
        $("#popup-canva").css("display", "flex");
        $("#popup-rules").show();
    });

    $("#btn-rules-close").on("click", function() {
        console.log("Botão 'close rules' clicado!");
        $("#popup-canva, #popup-rules").hide();
    })

    
});