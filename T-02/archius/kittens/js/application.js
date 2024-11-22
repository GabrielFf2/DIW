$(document).ready(function() {
    var names = ['Tiger', 'Samuel', 'Leeloo',
        'Bella', 'Mo', 'Sly',
        'Beezy', 'Maple', 'Rodney',
        'Yonce', 'Reginald', 'Winifred'];

    var ages = ['9 Weeks', '12 Weeks', '3 Months',
        '8 Weeks', '1 Year', '15 Weeks',
        '4 Months', '2 Months', '14 Weeks',
        '6 Months', '10 Weeks', '8 Months'];

    var cats = [
        'https://cdn2.thecatapi.com/images/ziBew-QH2.jpg',
        'https://cdn2.thecatapi.com/images/wdT-_qOL3.jpg',
        'https://cdn2.thecatapi.com/images/j3WPHuW7A.jpg',
        'https://cdn2.thecatapi.com/images/IEjdx1W5q.jpg',
        'https://cdn2.thecatapi.com/images/JnD5BF9Uq.jpg',
        'https://cdn2.thecatapi.com/images/BQMSld0A0.jpg',
        'https://cdn2.thecatapi.com/images/aMcspzvtg.jpg',
        'https://cdn2.thecatapi.com/images/KLpZzAE_a.jpg',
    ]

    $('.kittens').find('li').each(function (i, el) {
        var img = $(el).find('img');
        var name = $(el).find('.name');
        var age = $(el).find('.age');

        var w = 250;
        var h = 250;

        img.attr('src', cats[i]);
        name.text(names[i]);
        age.text(ages[i]);
    });
});
