var total_buttons = document.querySelectorAll(".drum").length;   //to get the no of all the btns
for (var i = 0; i < total_buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var on_click = this.innerHTML;
        make_sound(on_click);
        buttonAnimation(on_click);
    })
}

document.addEventListener("keypress", function (event) {
    make_sound(event.key);
    buttonAnimation(event.key);
});

function make_sound(key) {
    switch (key) {
        case 'w':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 's':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'd':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 'a':
            var tom3 = new Audio("/sounds/tom-3.mp3");
            tom3.play();
            break;

        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(cuurentKey) {
    var activeButton = document.querySelector("." + cuurentKey);
    activeButton.classList.add("pressed");

    //setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}







// var noOfButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < noOfButtons; i++) {
//    document.querySelectorAll(".drum")[i].addEventListener("click", beatfun);
// }

// function beatfun() {
//    var clickable = this.innerHTML;
//    switch (clickable)
//    {
//       case 'w':
//          var tom4 = new Audio("sounds/tom-4.mp3");
//          tom4.play();
//          break;

//       case 'j':
//          var crash = new Audio("sounds/crash.mp3");
//          crash.play();
//          break;

//       case 's':
//          var tom1 = new Audio("sounds/tom-1.mp3");
//          tom1.play();
//          break;

//       case 'd':
//          var kick = new Audio("sounds/kick-bass.mp3");
//          kick.play();
//          break;

//       case 'l':
//          var snare = new Audio("sounds/snare.mp3");
//          snare.play();
//          break;

//       case 'k':
//          var tom2 = new Audio("sounds/tom-2.mp3");
//          tom2.play();
//          break;

//       case 'a':
//          var tom3 = new Audio("/sounds/tom-3.mp3");
//          tom3.play();
//          break;

//       default:
//          console.log(clickable);
//          break;
//    }
// }









//  var homemade={
//     age:23,
//     name:"umar abdulli",
//     profession:"gogohoho",
//     worker:"ladai krna"
//  }

//  function Bello(name,age,color,boo){
//     this.name=name;
//     this.age=age;
//     this.color=color;
//     this.boo=boo;
//  }

//  var Bello1=new Bello(1,2,3,4);

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
// {
//     var select = document.querySelectorAll(".drum")[i];
//     select.addEventListener("click", clicker);

//     function clicker() {
//       this.style.color="white";
//     }
// }

//  var audio=new Audio("sounds/crash.mp3");
// audio.play();