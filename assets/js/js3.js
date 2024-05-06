
let currentLightIndex = 0;
let maxLightCount = 8;
let move = "RIGHT";
let interval = null

$('#btn').on('click',()=>{
     interval = setInterval(updateLightIndex,120);
    $('#audio')[0].play();
})
$('#btn1').on('click',()=>{
    clearInterval(interval);
    $('#audio')[0].pause();
})


function updateLightIndex() {

    $('.light').removeClass('light-on');
    $('.light').removeClass('light-on1');
    $('.light').eq(currentLightIndex).addClass("light-on");

    if (move==="RIGHT"){
        if (currentLightIndex!==0)$('.light').eq(currentLightIndex -1).addClass("light-on1")
        ++currentLightIndex;
        if (currentLightIndex>maxLightCount -2){
            move = "LEFT"
        }
    }else{
        $('.light').eq(currentLightIndex+1).addClass("light-on1");
        --currentLightIndex;
        if (currentLightIndex===0){
            move = "RIGHT"
        }
    }
}




