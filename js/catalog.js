/* смена вида (catalog)*/
var blockModeBtn = $('.block_mode');
var lineModeBtn = $('.line_mode');
var blockView = $('.block_view');
var lineView = $('.line_view');
var activeMode = 'block';
var greyColor = '#C4C4C4';
var blackColor = '#222222';

blockModeBtn.click(function(){
    if(activeMode !== 'block'){
        lineView.hide(100);
        blockView.show(100);
        blockModeBtn.css('color', blackColor)
        lineModeBtn.css('color', greyColor)
        activeMode = 'block';
    }
});
lineModeBtn.click(function(){
    if(activeMode !== 'line'){
        blockView.hide(100);
        lineView.show(100);
        blockModeBtn.css('color', greyColor)
        lineModeBtn.css('color', blackColor)
        activeMode = 'line';
    }
});
