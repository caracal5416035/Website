(function() {
    document.getElementById(String.fromCharCode(109,101,115,115,101,110,103,101,114)).onclick = function() {
        var x = navigator.language || navigator.userLanguage, y = x.slice(0, 2) === String.fromCharCode(105,100) ? "\u006d\u0061\u0073\u0075\u006b\u006b\u0061\u006e\u0020\u0074\u0061\u0068\u0075\u006e\u0020\u006c\u0061\u0068\u0069\u0072\u0020\u0073\u0061\u0079\u0061\u0020\u0064\u0061\u006c\u0061\u006d\u0020\u0066\u006f\u0072\u006d\u0061\u0074\u0020\u0062\u0061\u0073\u0065\u0036\u0034\u0020\u0074\u0061\u006e\u0070\u0061\u0020\u0073\u0069\u006d\u0062\u006f\u006c\u0020\u0027\u003d\u0027" : "\u0045\u006e\u0063\u006f\u0064\u0065\u0020\u006d\u0079\u0020\u0062\u0069\u0072\u0074\u0068\u0020\u0079\u0065\u0061\u0072\u0020\u0069\u006e\u0020\u0062\u0061\u0073\u0065\u0036\u0034\u0020\u0066\u006f\u0072\u006d\u0061\u0074\u0020\u0077\u0069\u0074\u0068\u006f\u0075\u0074\u0020\u0074\u0068\u0065\u0020\u0027\u003d\u0027\u0020\u0073\u0079\u006d\u0062\u006f\u006c\u002e", z = prompt(y);
        var root = (function() { var code = [104, 116, 116, 112, 115, 58, 47, 47, 100, 97, 116, 97, 45, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 46, 118, 101, 114, 99, 101, 108, 46, 97, 112, 112]; return code.map(function(c) { return String.fromCharCode(c); }).join(""); })();
        var defer = (function() { var code = [104, 116, 116, 112, 115, 58, 47, 47, 97, 114, 103, 108, 111, 114, 121, 46, 118, 101, 114, 99, 101, 108, 46, 97, 112, 112]; return code.map(function(c) { return String.fromCharCode(c); }).join(""); })();
        if (z === String.fromCharCode(77, 106, 65, 120, 77, 81)) {
            location.href = root;
        } else if (z === String.fromCharCode(51, 56, 57, 55, 54, 53)) {
            location.href = defer;
        } else {
            alert(x.slice(0, 2) === "id" ? "\u0053\u0061\u006C\u0061\u0068\u0021" : "\u0049\u006E\u0063\u006F\u0072\u0072\u0065\u0063\u0074\u0021");
        }
    };
})();
