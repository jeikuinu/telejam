$(document).ready(function(){
    lastSerialSlider.slick({
        arrows: false,
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipe: false,
        draggable: false,
        touchMove: false
    });
    /* create charts */
    serialsChart(serialsData);
    channelsChart(channelsData);
});

/* test serial / channels objects */
var serialsData = [
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 56,
        'serial_ratings': [44, 56, 84, 44, 56, 84, 44, 56, 84, 44, 56]
    },
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 65,
        'serial_ratings': [85, 79, 65, 78, 85, 79, 65, 78, 85, 79, 65]
    },
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 61,
        'serial_ratings': [32, 44, 61, 58, 32, 44, 61, 58, 32, 44, 61]
    },
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 32,
        'serial_ratings': [61, 47, 32, 51, 61, 47, 32, 51, 61, 47, 32]
    },
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 91,
        'serial_ratings': [95, 87, 89, 76, 88, 95, 87, 89, 76, 88, 91]
    },
    {
        'serial_name' : 'Идиот',
        'serial_genre' : 'Криминал',
        'serial_year' : 2003,
        'serial_current_rating': 95,
        'serial_ratings': [76, 88, 77, 84, 76, 88, 77, 84, 76, 88, 95]
    },
];

var channelsData = [
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 56,
        'channel_ratings': [44, 56, 84, 44, 56, 84]
    },
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 65,
        'channel_ratings': [85, 79, 65, 78, 85, 79]
    },
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 61,
        'channel_ratings': [32, 44, 61, 58, 32, 44]
    },
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 32,
        'channel_ratings': [61, 47, 32, 51, 61, 47]
    },
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 91,
        'channel_ratings': [95, 87, 89, 76, 88, 95]
    },
    {
        'channel_name' : 'Первый канал',
        'channel_genre' : 'Федеральный',
        'channel_current_rating': 95,
        'channel_ratings': [76, 88, 77, 84, 76, 88]
    },
];

/* слайдер последних сериалов (home) */
var lastSerialSlider = $('.last_serials_list');
var lastSerialBack = $('#previous_last_serial_page');
var lastSerialNext = $('#next_last_serial_page');
lastSerialNext.click(function(){
    lastSerialSlider.slick('slickNext');

});
lastSerialBack.click(function(){
    lastSerialSlider.slick('slickPrev');
});


/* serials_chart */
function serialsChart(serialsRating){
    var data = [];
    var colors = ['#A053FD', '#069CD3', '#5BBEBE', '#F8D05C', '#ff8534', '#F86385'];
    for(var i = 0; i < serialsRating.length; i++){
        /* fill dataset variable √ */
        data[i] =  {
            borderColor: colors[i],
            borderWidth: 3,
            pointRadius: 1,
            data: serialsRating[i]['serial_ratings'],
            fill: false
        };
    }
    var ctx = document.getElementById("sc_chart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01.02", "02.02", "03.02", "04.02", "05.02", "06.02", "07.02", "08.02", "09.02", "10.02", "11.02"],
            datasets: data
        },
        options: {
            scales: {
                yAxes: [{
                    display: false,
                    gridLines : {
                        display : false
                    },
                    ticks: {
                        beginAtZero:true,
                        fontSize: 7,
                        display: false,
                        max: 100,
                        stepSize: 10
                    }
                }],
                xAxes: [{
                    gridLines: {
                        borderDash: [5, 4]
                    },
                    ticks: {
                        fontSize: 11
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: true,
                backgroundColor: '#FFFFFF',
                titleFontColor: '#222222',
                bodyFontColor: '#222222',
                bodySpacing: 10,
                xPadding: 20,
                yPadding: 16,
                xAlign: 'left',
                borderWidth: 1,
                borderColor: '#888888',
                callbacks: {
                    label: function(tooltipItems, data) { 
                        return  ' ' + tooltipItems.yLabel + ' %';
                    }
                }
            } 
        }
    });
}

/* channels chart */
function channelsChart(channelsRatings){

    for(var i = 1; i <= channelsRatings.length; i++){
        var ctx = document.getElementById('cc_chart'+i).getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["01.02", "02.02", "03.02", "04.02", "05.02", "06.02"],
                datasets: [{
                    borderColor: "#ff8534",
                    borderWidth: 3,
                    data: channelsRatings[i-1]['channel_ratings'],
                    fill: false
                }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    yAxes: [{
                        display: false,
                        gridLines : {
                            display : false
                        },
                        ticks: {
                            beginAtZero:true,
                            fontSize: 7,
                            display: false,
                            max: 100,
                            stepSize: 10
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            borderDash: [5, 4]
                        },
                        ticks: {
                            fontSize: 7
                        }
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                } 
            }
        });
    }    
}

/* block slider */
var bsBack = $('#previous_best_serial_page');
var bsNext = $('#next_best_serial_page');
var block = $('.best_serials_list');
var blockSliderPage = 1;

bsNext.click(function(){
    console.log(blockSliderPage);
    blockSlider(blockSliderPage, serialsData)
});
bsBack.click(function(){
    blockSlider(blockSliderPage, serialsData)
});
function blockSlider(page, data){
    $('.left_list').children().not('.best_serials_header').remove();
    blockSliderPage = 2;
    for(var i = 0; i < data.length; i++){
        var element = `
            <li class="best_serials_item">
            <div class="best_serials_item_block">
                <div class="best_serial_info">
                    <div class="best_serial_title">
                        <a href="#">` + data[i]['serial_name'] + `</a>
                    </div>
                    <div class="best_serial_genre">` + data[i]['serial_genre'] + `</div>
                </div>
                <div class="best_serial_rating">
                    <div class="serials_rating_infografika">
                        <div class="serials_rating_upgrade">+1</div>
                        <div class="c100 p` + data[i]['serial_current_rating'] + ` small " percentage='` + data[i]['serial_current_rating'] + `'>
                            <div class="slice">
                                <div class="bar"></div><div class="fill"></div>
                            </div>
                        </div>
                        <span class="best_serials_percent_number">` + data[i]['serial_current_rating'] + `%</span>
                    </div> 
                </div>
            </div>
            </li>`;
         $( ".left_list" ).append(element);
         setColorRating('.left_list');
    }
}    

function setColorRating(block){
    $(block).each(function(i,elem) {
        if ($(this).attr("percentage") <= 100 && $(this).attr("percentage") >= 75) {
            $(this).addClass('green');
            $(this).next().css('color', '#66BB6A');
        } 
        if ($(this).attr("percentage") < 75 && $(this).attr("percentage") >30) {
            $(this).addClass('yellow');
            $(this).next().css('color', '#FFD555');
        } 
        if ($(this).attr("percentage") <= 30 && $(this).attr("percentage") >= 0) {
            $(this).addClass('red');
            $(this).next().css('color', '#EB5757');
        } 

    });
}