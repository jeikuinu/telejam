var ctx = document.getElementById("sd_chart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [{
            backgroundColor: "rgba(255, 184, 97, 0.6)",
            borderColor: "#ff8534",
            borderWidth: 2,
            pointRadius: 1,
            data: [5, 70, 65, 89, 99, 75, 70, 61],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize: 7
                }
            }],
            xAxes: [{
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

/* block slider */
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
var bsBack = $('#next_rating_best_serials');
var bsNext = $('#next_rating_best_serials');
var block = $('.serials_list');
var blockSliderPage = 1;

bsNext.click(function(){
    blockSlider(blockSliderPage, serialsData)
});
bsBack.click(function(){
    blockSlider(blockSliderPage, serialsData)
});

function blockSlider(page, data){
    block.children().remove();
    blockSliderPage += 1;
    for(var i = 0; i < data.length; i++){
        var element = `
            <li class="serials_list_item">
            <div class="serials_list_item_wrapper">
                <div class="serials_rating_info">
                    <div class="serials_list_item_number">` + i + `</div>
                    <div class="serials_rating_wrapper">
                        <div class="serials_rating_title"><a href="#">` + data[i]['serial_name'] + `</a></div>
                        <div class="serials_rating_years">` + data[i]['serial_year'] + `</div>
                    </div>
                </div>
                <div class="serials_rating_infografika">
                    <div class="serials_rating_upgrade">+1</div>
                    <div class="c100 p` + data[i]['serial_current_rating'] + ` small" percentage="` + data[i]['serial_current_rating'] + `">
                        <div class="slice">
                            <div class="bar"></div><div class="fill"></div>
                        </div>
                    </div>
                    <span class="serials_rating_percent_number">` + data[i]['serial_current_rating'] + `%</span>
                </div> 
            </div>
            </li> 
        `;
        block.append(element);
        setColorRatingBlock('.serials_list');
    }
}    
function setColorRatingBlock(block){
    $( '.c100' ).each(function(i,elem) {
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