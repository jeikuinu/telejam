var rate_script = $( ".rate_script" ).attr('aria-valuenow') * (10) + '%';
var rate_actors = $( ".rate_actors" ).attr('aria-valuenow') * (10) + '%';
var rate_expectation = $( ".rate_expectation" ).attr('aria-valuenow') * (10) + '%';
var rate_coverage = $( ".rate_coverage" ).attr('aria-valuenow') * (10) + '%';
var rate_reviews = $( ".rate_reviews" ).attr('aria-valuenow') * (10) + '%';

$( '.rate_script .rate-bar-value' ).css( "width", rate_script);
$( '.rate_actors .rate-bar-value' ).css( "width", rate_actors);
$( '.rate_expectation .rate-bar-value' ).css( "width", rate_expectation);
$( '.rate_coverage .rate-bar-value' ).css( "width", rate_coverage);
$( '.rate_reviews .rate-bar-value' ).css( "width", rate_reviews);

var ctx = document.getElementById("tj_index_chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            backgroundColor: "rgba(255, 184, 97, 0.6)",
            borderColor: "#ff8534",
            borderWidth: 3,
            data: [5, 70, 65, 89, 99, 75, 70, 61],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        fill: 'start',
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        } 
    }
});

var serialImageSlider = $('.photo_slider_content');
var back = $('.photo_back');
var next = $('.photo_next');

$(document).ready(function(){
    serialImageSlider.slick({
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
      });

});

/* image slider controls */
next.click(function(){
    serialImageSlider.slick('slickNext');

});
back.click(function(){
    serialImageSlider.slick('slickPrev');
});


// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['ru-sc', 0],
    ['ru-kr', 1],
    ['ru-2485', 2],
    ['ru-ar', 3],
    ['ru-nn', 4],
    ['ru-yn', 5],
    ['ru-ky', 6],
    ['ru-ck', 7],
    ['ru-kh', 8],
    ['ru-sl', 9],
    ['ru-ka', 10],
    ['ru-kt', 11],
    ['ru-ms', 12],
    ['ru-rz', 13],
    ['ru-sa', 14],
    ['ru-ul', 15],
    ['ru-om', 16],
    ['ru-ns', 17],
    ['ru-mm', 18],
    ['ru-ln', 0],
    ['ru-sp', 20],
    ['ru-ki', 21],
    ['ru-kc', 22],
    ['ru-in', 0],
    ['ru-kb', 24],
    ['ru-no', 25],
    ['ru-st', 0],
    ['ru-sm', 27],
    ['ru-ps', 28],
    ['ru-tv', 29],
    ['ru-vo', 30],
    ['ru-iv', 31],
    ['ru-ys', 32],
    ['ru-kg', 33],
    ['ru-br', 34],
    ['ru-ks', 35],
    ['ru-lp', 36],
    ['ru-2509', 37],
    ['ru-ol', 38],
    ['ru-nz', 39],
    ['ru-pz', 40],
    ['ru-vl', 41],
    ['ru-vr', 42],
    ['ru-ko', 43],
    ['ru-sv', 44],
    ['ru-bk', 45],
    ['ru-ud', 46],
    ['ru-mr', 47],
    ['ru-cv', 48],
    ['ru-cl', 49],
    ['ru-ob', 50],
    ['ru-sr', 51],
    ['ru-tt', 52],
    ['ru-to', 53],
    ['ru-ty', 54],
    ['ru-ga', 55],
    ['ru-kk', 56],
    ['ru-cn', 57],
    ['ru-kl', 58],
    ['ru-da', 59],
    ['ru-ro', 60],
    ['ru-bl', 61],
    ['ru-tu', 62],
    ['ru-ir', 63],
    ['ru-ct', 64],
    ['ru-yv', 65],
    ['ru-am', 66],
    ['ru-tb', 67],
    ['ru-tl', 68],
    ['ru-ng', 69],
    ['ru-vg', 70],
    ['ru-kv', 71],
    ['ru-me', 72],
    ['ru-ke', 73],
    ['ru-as', 74],
    ['ru-pr', 75],
    ['ru-mg', 76],
    ['ru-bu', 77],
    ['ru-kn', 78],
    ['ru-kd', 79],
    ['ru-ku', 80],
    ['ru-al', 81],
    ['ru-km', 82],
    ['ru-pe', 83],
    ['ru-ad', 84]
];

Highcharts.mapChart('mapData', {
    chart: {
        map: 'countries/ru/custom/ru-all-disputed'
    },

    title: {
        style: {
            display: 'none'
        }
    },
    mapNavigation: {
        enabled: false
    },

    colorAxis: {
        min: 0,
        max: 100,
        tickInterval: 20,
        stops: [
            [0, '#dde4e4'],
            [0.1, '#ffd940'],
            [0.3, '#ffc600'],
            [0.5, '#ffd940'],
            [1, '#ffad00']
        ],
        showInLegend: false
    },
    tooltip: {
        backgroundColor: '#ffffff',
        borderWidth: 0,
        shadow: true,
        useHTML: true,
        headerFormat: '',
        pointFormat: '<div class="map_baloon"><div class="baloon_header">{point.name}</div><div class="baloon_data"><span class="baloon_data_header">Интерес: </span><span class="baloon_data_percent">{point.value}%</span></div></div>'
    },
    series: [{
        data: data
    }]
});