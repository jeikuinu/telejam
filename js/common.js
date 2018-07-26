$(document).ready(function(){
    setColorRating();
});


/* поисковая строка */
var navbarMenu = $('.header_navbar_list');
var searchBtn = $('.search_icon');
var searchField = $('.header_search_field');
var searchFieldInput = $('.header_search_field input');
var searchResults = $('.search_dynamic_result_wrapper');

searchBtn.click(function(){
    searchBtn.hide();
    navbarMenu.hide();
    searchField.show(200);
    searchFieldInput.focus();
});
searchFieldInput.focusout(function(){
    searchField.hide(200);
    searchBtn.show();
    navbarMenu.show();
   
});
searchFieldInput.keyup(function(){
    if(searchFieldInput.val().length > 0)
        searchResults.show(200);
    else
        searchResults.hide(200); 
});



function setColorRating(){
    $('.c100').each(function(i,elem) {
        if ($(this).attr("percentage") <= 100 && $(this).attr("percentage") >= 75) {
            $(this).addClass('green');
            $(this).next().css('color', '#66BB6A');
            if($(this).hasClass('big')){
                $(this).find(':first-child').css('color', '#66BB6A');
            }
        } 
        if ($(this).attr("percentage") < 75 && $(this).attr("percentage") >30) {
            $(this).addClass('yellow');
            $(this).next().css('color', '#FFD555');
            if($(this).hasClass('big')){
                $(this).find(':first-child').css('color', '#FFD555');
            }
        } 
        if ($(this).attr("percentage") <= 30 && $(this).attr("percentage") >= 0) {
            $(this).addClass('red');
            $(this).next().css('color', '#EB5757');
            if($(this).hasClass('big')){
                $(this).find(':first-child').css('color', '#EB5757');
            }
        } 

    });
}