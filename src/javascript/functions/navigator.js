export default function Navigator() {
    let initialPosition = $('#Current').position();
    $('#Section').scrollTo($('#' + $('#Current').attr('target')), 300, 'swing');

    $('#Title').text($('#Current').attr('title'));
    $('#Description').text($('#Current').attr('description'));

    let isEmptyBtn = $('#Current').attr('button') == '';

    if (isEmptyBtn) {
        $(('#Button')).hide();
    } else {
        $(('#Button')).show();
        $('#Button').text($('#Current').attr('button'));
    }

    $('#Navigator').css('top', initialPosition.top + 'px');
    $('.Item').each(function() {
        $(this).on('click', function() {
            $('.Item').attr('id', '')
            $(this).attr('id', 'Current');
            let position = $('#Current').position();
            $('#Navigator').css('top', position.top + 'px');

            let Target = $(this).attr('target'),
                Page = '#' + Target,
                Container = $('#Section');

            $('#Section').scrollTo(Page, 300, 'swing');

            $('#Title').text($('#Current').attr('title'));
            $('#Description').text($('#Current').attr('description'));

            isEmptyBtn = $('#Current').attr('button') == '';

            if (isEmptyBtn) {
                $('#Button').hide();
            } else {
                $(('#Button')).show();
                $('#Button').text($('#Current').attr('button'));
            }
        })
    })
}