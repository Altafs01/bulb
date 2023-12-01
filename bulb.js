

var a = document.querySelector(".bulb");
var b = document.querySelector('.on');

flag =0;

b.addEventListener("click",  function(){
        if (flag==0){
        a.style.backgroundColor= "yellow";
        // console.log("clicked");
        b.innerHTML = "OFF";
        flag = 1;
    }
    else{
        a.style.backgroundColor = "transparent";
        b.innerHTML = "ON"
        flag= 0;
    }
})