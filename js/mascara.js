 // O que este código vai fazer é ler o ficheiro enviado e apresentar antes de efetuar alguma ação como o Upload.
    //mascara do input valor padrão real brasileiro
    $(document).ready(function(){
        $('.valor_produto').mask('#.##0,00',{
    reverse: true});
    });
    function convertToCurrency(value) {
    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    })
    }
    $('#vm_ga').val(convertToCurrency(valor_produto));
    


$(function() {
// Pré-visualização de várias imagens no navegador
var visualizacaoImagens = function(input, lugarParaInserirVisualizacaoDeImagem) {

if (input.files) {
    var quantImagens = input.files.length;
    for (i = 0; i < quantImagens; i++) {
        var reader = new FileReader();
        reader.onload = function(event) {
            $($.parseHTML('<img class="miniatura">')).attr('src', event.target.result).appendTo(lugarParaInserirVisualizacaoDeImagem);
        }
        reader.readAsDataURL(input.files[i]);
    }
}

};

$('#addFoto').on('change', function() {
visualizacaoImagens(this, 'div.img_produto');    
});

});