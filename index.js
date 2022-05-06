document.addEventListener("DOMContentLoaded", function () {
  const text = "elops,";
  let letter = 0;
  let counter = 0;

  function typeText() {
    let speed = Math.floor(Math.random() * 150) + 100;
    switch (counter) {
      case 0:
        setTimeout(typeText, 700);
        counter++;
        break;
      case 1:
        document.getElementById("introduction").innerHTML = "Danielchapman.dev";
        counter++;

        setTimeout(typeText, speed);
        break;
      case 2:
        document.getElementById("introduction").innerHTML =
          "Daniel chapman.dev";
        counter++;
        setTimeout(typeText, speed);
        break;
      case 3:
        document.getElementById("introduction").innerHTML =
          "Daniel Chapman.dev";
        counter++;
        setTimeout(typeText, speed);
        break;
      case 4:
        document.getElementById("introduction").innerHTML =
          "Daniel Chapman dev";
        counter++;
        setTimeout(typeText, speed);
        break;
      default:
        if (letter < text.length) {
          document.getElementById("introduction").innerHTML +=
            text.charAt(letter);
          letter++;

          setTimeout(typeText, speed);
        }
        break;
    }
  }
  typeText();
});
