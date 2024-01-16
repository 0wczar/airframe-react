!(function n(a, u, c) {
  function f(t, r) {
    if (!u[t]) {
      if (!a[t]) {
        var e = "function" == typeof require && require;
        if (!r && e) return e(t, !0);
        if (p) return p(t, !0);
        var o = new Error("Cannot find module '" + t + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
      }
      var i = (u[t] = { exports: {} });
      a[t][0].call(
        i.exports,
        function (r) {
          return f(a[t][1][r] || r);
        },
        i,
        i.exports,
        n,
        a,
        u,
        c
      );
    }
    return u[t].exports;
  }
  for (
    var p = "function" == typeof require && require, r = 0;
    r < c.length;
    r++
  )
    f(c[r]);
  return f;
})(
  {
    1: [
      function (r, t, e) {
        "use strict";
        $("img[data-src]").each(function () {
          var r = $(this),
            t = r
              .data("src")
              .replace("[faker-initials]", faker.person.initials());
          r.attr("data-src", t);
        }),
          $(".your-checkbox").prop("indeterminate", !0),
          $('[data-toggle="tooltip"]').tooltip(),
          $('[data-toggle="popover"]').popover();
      },
      {},
    ],
  },
  {},
  [1]
);
//# sourceMappingURL=init.js.map
