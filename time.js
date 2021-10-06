function change_bg_img(){
    day = new Date();
    hour = day.getHours();
    if(document.body){
        if((hour >= 22 && hour<=24)|| (hour >=0 && hour < 5)){//night
            document.getElementById("div").style.background='url(images/night.jpg)';
            document.getElementById('div').style.backgroundSize = "cover";
        } 
        else if(hour>=5&&hour<12){//morning
            document.getElementById("div").style.background='url(images/morning.jpg)';
            document.getElementById('div').style.backgroundSize = "cover";
        } 
        else if(hour>=12&&hour<18){//daytime
            document.getElementById("div").style.background='url(images/daytime.jpg)';
            document.getElementById('div').style.backgroundSize = "cover";
        } 
        else{//evening
            document.getElementById("div").style.background='url(images/evening.jpg)';
            document.getElementById('div').style.backgroundSize = "cover";
        }
    }
}

let index = 1;
let intervals;
function changeImage(){
    document.getElementById('images').src='images/'+index+'.png';
    if (index==10) {
        index = 1
    } else{
        index++;
    }
}

function slowImg(){
    clearInterval(intervals);
    intervals = setInterval(changeImage, document.getElementById('slow').value);
    var p=document.getElementById('p');
    p.innerHTML=document.getElementById('slow').value+"ms";
}