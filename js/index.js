$( document ).ready(function() {
    $('#search_form').submit(function() {
        var keywords = $('#search_text').val();
        var query = keywords + ' site:douban.com';
        $('#search_value').val(query);

        return true;
    });
});
