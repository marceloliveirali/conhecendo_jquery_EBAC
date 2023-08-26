$(document).ready(function() {
    $('form').submit(function(evt) {
        evt.preventDefault();
        const cadastroAtividade = $('input').val();
        const novoItem = $(`<li></li>`);

        $(`<a>${cadastroAtividade}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ol');
        $('input').val('');
    });

    $('ol').click(function () {
        $('li a').css('text-decoration', 'line-through');
    })


});