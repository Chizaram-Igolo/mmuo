!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(b)
    : "object" == typeof exports
    ? (module.exports = b())
    : (a.wdtLoading = b());
})(this, function () {
  function a(a, b) {
    var c = "string" == typeof a ? a : d(a);
    return c.indexOf(" " + b + " ") >= 0;
  }
  function b(b, c) {
    var e = d(b),
      f = e + c;
    a(e, c) || (b.className = f.substring(1));
  }
  function c(b, c) {
    var e,
      f = d(b);
    a(b, c) &&
      ((e = f.replace(" " + c + " ", " ")),
      (b.className = e.substring(1, e.length - 1)));
  }
  function d(a) {
    return (" " + ((a && a.className) || "") + " ").replace(/\s+/gi, " ");
  }
  function e(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }
  var f = {};
  (f.defaults = { category: "default", speed: 2e3 }),
    (f.start = function (a) {
      (this.options = g(f.defaults, a)),
        (this.wdtLoadingScreen = document.querySelector(".wdt-loading-screen"));
      for (
        var b = document.querySelectorAll(".wdt-loading-phrase-category"),
          c = 0;
        c < b.length;
        c++
      )
        h(b[c], { display: "none" });
      (this.wdtPhraseActiveCat = document.querySelector(
        '.wdt-loading-phrase-category[data-category="' +
          this.options.category +
          '"]'
      )),
        h(this.wdtPhraseActiveCat, { display: "block" }),
        (this.activePhrases = this.wdtPhraseActiveCat.querySelectorAll(
          ".wdt-loading-phrase"
        )),
        (this.activePhrasesCount = this.activePhrases.length),
        this.activePhrasesCount < 5 &&
          console.warn(
            "wdtLoading -->",
            "Add more phrase for better spin animation!"
          );
      for (var d = [], c = 0; c < this.activePhrases.length; c++)
        d.push(this.activePhrases[c]), e(this.activePhrases[c]);
      d = f.shuffle(d);
      for (var c = 0; c < d.length; c++)
        this.wdtPhraseActiveCat.appendChild(d[c]);
      return h(this.wdtLoadingScreen, { display: "block" }), f.spin(), this;
    }),
    (f.spin = function () {
      var a = this;
      (this.phraseHeight = a.wdtPhraseActiveCat.querySelector(
        ".wdt-loading-phrase"
      ).scrollHeight),
        (a.currentIndex = 0),
        (a.currentTransform = this.phraseHeight),
        (a.spinInternal = setInterval(function () {
          (a.activePhrases = a.wdtPhraseActiveCat.querySelectorAll(
            ".wdt-loading-phrase"
          )),
            b(a.activePhrases[a.currentIndex], "wdt-checked"),
            a.currentIndex++,
            (a.currentTransform = a.currentTransform - a.phraseHeight);
          for (var d = 0; d < a.activePhrases.length; d++)
            h(a.activePhrases[d], {
              transform: "translateY(" + a.currentTransform + "px)",
            });
          if (a.currentIndex > 1) {
            var e = a.activePhrases[a.currentIndex - 2],
              f = e.cloneNode(!0);
            c(f, "wdt-checked"),
              b(f, "wdt-cloned-phrase"),
              (f.style.transform = ""),
              a.wdtPhraseActiveCat.appendChild(f);
          }
        }, this.options.speed));
    }),
    (f.done = function () {
      this.spinInternal && clearInterval(this.spinInternal),
        h(this.wdtLoadingScreen, { display: "none" });
      for (
        var a = document.querySelectorAll(".wdt-cloned-phrase"),
          b = document.querySelectorAll(".wdt-loading-phrase"),
          d = 0;
        d < b.length;
        d++
      )
        c(b[d], "wdt-checked"), (b[d].style.transform = "");
      for (var d = 0; d < a.length; d++) e(a[d]);
      clearInterval(this.spinInternal);
    }),
    (f.shuffle = function (a) {
      for (var b, c, d = a.length; d; )
        (c = Math.floor(Math.random() * d--)),
          (b = a[d]),
          (a[d] = a[c]),
          (a[c] = b);
      return a;
    });
  var g = function () {
      var a = {},
        b = !1,
        c = 0,
        d = arguments.length;
      "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
        ((b = arguments[0]), c++);
      for (
        var e = function (c) {
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) &&
              (b && "[object Object]" === Object.prototype.toString.call(c[d])
                ? (a[d] = g(!0, a[d], c[d]))
                : (a[d] = c[d]));
        };
        d > c;
        c++
      ) {
        var f = arguments[c];
        e(f);
      }
      return a;
    },
    h = (function () {
      function a(a) {
        return a
          .replace(/^-ms-/, "ms-")
          .replace(/-([\da-z])/gi, function (a, b) {
            return b.toUpperCase();
          });
      }
      function b(a) {
        var b = document.body.style;
        if (a in b) return a;
        for (
          var c, d = e.length, f = a.charAt(0).toUpperCase() + a.slice(1);
          d--;

        )
          if (((c = e[d] + f), c in b)) return c;
        return a;
      }
      function c(c) {
        return (c = a(c)), f[c] || (f[c] = b(c));
      }
      function d(a, b, d) {
        (b = c(b)), (a.style[b] = d);
      }
      var e = ["Webkit", "O", "Moz", "ms"],
        f = {};
      return function (a, b) {
        var c,
          e,
          f = arguments;
        if (2 == f.length)
          for (c in b)
            (e = b[c]), void 0 !== e && b.hasOwnProperty(c) && d(a, c, e);
        else d(a, f[1], f[2]);
      };
    })();
  return f;
});

wdtLoading.start();
