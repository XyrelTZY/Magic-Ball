const options = [
    "Nigga",
    "Alien",
    "Assuming",
    "GigaNigga",
    "Bayot"
  ];
  const magicBall = document.getElementById("mb_container");
  const response = document.getElementById("response");
  
  function myFunction() {
    const index = Math.floor(Math.random() * 5);
    const message = options[index];
    magicBall.className = "magicBall_container animate";
    setTimeout(() => {
      response.textContent = message;
      response.style.fontSize = "1.1rem";
      magicBall.className = "magicBall_container";
      setTimeout(timeup, 4000);
    }, 2500);
  
    function timeup() {
      document.getElementById("response").innerHTML = "Ask Again";
      document.getElementById("clear").value = "";
      document.getElementById("response").style.fontSize = "25px";
      document.getElementById("response").style.fontWeight = "600";
    }
  }
  