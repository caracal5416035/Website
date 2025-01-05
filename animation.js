document.getElementById("messenger").onclick = function() {var l = navigator.language || navigator.userLanguage;
  var m = l.slice(0, 2) === "id" ? "\u004d\u0061\u0073\u0075\u006b\u006b\u0061\u006e \u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003a" : "\u0045\u006e\u0074\u0065\u0072 \u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003a";
  var p = prompt(m);
  if (p === atob("MDUwNTIwMTE=")) {
    location.href = "https://data-animation-javascript.vercel.app";
  } else {
    alert(l.slice(0, 2) === "id" ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064 \u0073\u0061\u006c\u0061\u0068\u0021" : "\u0049\u006e\u0063\u006f\u0072\u0072\u0065\u0063\u0074 \u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0021");
  }
};