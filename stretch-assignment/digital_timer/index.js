// <div class="digits">
//   <div class="digit" id="secondTens">-</div>
//   <div class="digit" id="secondOnes">-</div>
//   <div class="digit" id="colon">:</div>
//   <div class="digit" id="msHundreds">-</div>
//   <div class="digit" id="msTens">-</div>
// </div>

siteContent = {
  // <div class="digits">
  //   <div class="digit" id="secondTens">-</div>
  //   <div class="digit" id="secondOnes">-</div>
  //   <div class="digit" id="colon">:</div>
  //   <div class="digit" id="msHundreds">-</div>
  //   <div class="digit" id="msTens">-</div>
  // </div>
};

let digits = document.querySelector(".digits");
let digit = digits.querySelectorAll(".digit");
let secondTens = digit[0];
let secondOnes = digit[1];
let colon = digit[2];
let msTens = digit[3];
let msHundreds = digit[4];
let stop = document.createElement("button");
let start = document.createElement("button");
start.setAttribute("id", "start");
stop.setAttribute("id", "stop");
stop.innerHTML = "Stop";
start.innerHTML = "Start";
let buttons = document.createElement("div");
buttons.setAttribute("id", "buttons");
digits.append(buttons);
digits.querySelector("#buttons").append(start);
digits.querySelector("#buttons").append(stop);
buttons.style.display = "flex";
buttons.style.flexDirection = "column";
start.style.background = "green";
stop.style.background = "red";
start.style.borderRadius = "5px";
stop.style.borderRadius = "5px";

let blink = window.setInterval(function() {
  let seconds = new Date().getSeconds();
  if (seconds % 2 === 0) {
    colon.style.color = "black";
  } else {
    colon.style.color = "white";
  }
  return;
}, 1000);

document.querySelector("#start").setAttribute("onclick", "count()");
count = function() {
  clearInterval(blink);
  colon.style.color = "black";
  secondTens.innerHTML = 0;
  secondOnes.innerHTML = 0;
  msTens.innerHTML = 0;
  msHundreds.innerHTML = 0;
  var timer = window.setInterval(function() {
    if (msHundreds.innerHTML >= 9) {
      msTens.innerHTML++;
      msHundreds.innerHTML = 0;
    } else {
      msHundreds.innerHTML++;
    }
    if (msTens.innerHTML >= 9) {
      secondOnes.innerHTML++;
      msTens.innerHTML = 0;
    }
    if (
      secondOnes.innerHTML >= 9 &&
      msTens.innerHTML >= 8 &&
      msHundreds.innerHTML >= 7||
      secondTens.innerHTML >= 1
    ) {
      secondTens.innerHTML = 1;
      secondOnes.innerHTML = 0;
      msTens.innerHTML = 0;
      msHundreds.innerHTML = 0;
      clearInterval(timer);
      return;
    }
    document
      .querySelector("#stop")
      .setAttribute("onclick", `clearInterval(${timer})`);
  }, 10);
  return;
};
