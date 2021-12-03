var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["exterior1.jpg", "exterior2.jpg", "interior.png"];

var i = 0;

//next btn
next.addEventListener('click', function(){
   i++;
   if(i > arr.length - 1){
        i = 0;
   }
   document.getElementById('image').src = arr[i];
})

//prev btn
prev.addEventListener('click', function(){
    i--;
    if(i < 0){
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})