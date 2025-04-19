(function() {
    document.getElementById(String.fromCharCode(109,101,115,115,101,110,103,101,114)).onclick = function() {
        var x = navigator.language || navigator.userLanguage, y = x.slice(0, 2) === String.fromCharCode(105,100) ? "\u004d\u0061\u0073\u0075\u006b\u006b\u0061\u006e \u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003a" : "\u0045\u006e\u0074\u0065\u0072 \u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003a", z = prompt(y);
        var root = (function() { var code = [104, 116, 116, 112, 115, 58, 47, 47, 100, 97, 116, 97, 45, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 46, 118, 101, 114, 99, 101, 108, 46, 97, 112, 112]; return code.map(function(c) { return String.fromCharCode(c); }).join(""); })();
        var defer = (function() { var code = [104, 116, 116, 112, 115, 58, 47, 47, 97, 114, 103, 108, 111, 114, 121, 46, 118, 101, 114, 99, 101, 108, 46, 97, 112, 112]; return code.map(function(c) { return String.fromCharCode(c); }).join(""); })();
        if (z === String.fromCharCode(77, 106, 65, 120, 77, 81)) {
            location.href = root;
        } else if (z === String.fromCharCode(51, 56, 57, 55, 54, 53)) {
            location.href = defer;
        } else {
            alert(x.slice(0, 2) === "id" ? "\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064 \u0073\u0061\u006c\u0061\u0068\u0021" : "\u0049\u006e\u0063\u006f\u0072\u0072\u0065\u0063\u0074 \u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u0021");
        }
    };
})();
