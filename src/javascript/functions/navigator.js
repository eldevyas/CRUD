export default function Navigator() {
    let initialPosition = $('#Current').position();
    $('#Navigator').css('top', initialPosition.top + 'px');
    $('.Item').each(function() {
        $(this).on('click', function() {
            $('.Item').attr('id', '')
            $(this).attr('id', 'Current');
            let position = $('#Current').position();
            $('#Navigator').css('top', position.top + 'px');
        })
    })
}