/*!
 *
 *   canvas-txt v2.0.2
 *   https://github.com/geongeorge/Canvas-Txt
 *
 *   Copyright (c) Geon George (https://geongeorge.com)
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function(t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('canvasTxt', [], e)
    : 'object' == typeof exports
    ? (exports.canvasTxt = e())
    : (t.canvasTxt = e())
})(window, function() {
  return (function(t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var i = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function(e) {
                return t[e]
              }.bind(null, i)
            )
        return r
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 0))
    )
  })([
    function(t, e, n) {
      'use strict'
      function r(t, e) {
        return (
          (function(t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function(t, e) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0
            try {
              for (
                var u, a = t[Symbol.iterator]();
                !(r = (u = a.next()).done) &&
                (n.push(u.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              ;(i = !0), (o = t)
            } finally {
              try {
                r || null == a.return || a.return()
              } finally {
                if (i) throw o
              }
            }
            return n
          })(t, e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      n.r(e)
      var i = {
        debug: !1,
        align: 'center',
        vAlign: 'middle',
        fontSize: 14,
        font: 'Arial',
        lineHeight: null,
        drawText: function(t, e, n, i, o, u) {
          var a = r(
            [n, i, o, u].map(function(t) {
              return parseInt(t)
            }),
            4
          )
          if (
            ((n = a[0]),
            (i = a[1]),
            (o = a[2]),
            (u = a[3]),
            !(0 >= o || 0 >= u || 0 >= this.fontSize))
          ) {
            var f = n + o,
              l = i + u
            this.textSize &&
              console.error(
                '%cCanvas-Txt:',
                'font-weight: bold;',
                'textSize is depricated and has been renamed to fontSize'
              )
            var s = this.fontSize + 'px ' + this.font
            t.font = s
            var c,
              d = i + u / 2 + parseInt(this.fontSize) / 2
            'right' === this.align
              ? ((c = f), (t.textAlign = 'right'))
              : 'left' === this.align
              ? ((c = n), (t.textAlign = 'left'))
              : ((c = n + o / 2), (t.textAlign = 'center'))
            var h = []
            e.split('\n').forEach(function(e) {
              var n = t.measureText(e).width
              if (n <= o) h.push(e)
              else {
                var r,
                  i,
                  u,
                  a = e,
                  f = o
                for (n = t.measureText(a).width; n > f; ) {
                  for (r = 0, i = 0, u = ''; i < f; )
                    r++,
                      (u = a.substr(0, r)),
                      (i = t.measureText(a.substr(0, r)).width)
                  var l = r
                  if (' ' != a.substr(r, 1)) {
                    for (; ' ' != a.substr(r, 1) && 0 != r; ) r--
                    0 == r && (r = l), (u = a.substr(0, r))
                  }
                  ;(a = a.substr(r)), (n = t.measureText(a).width), h.push(u)
                }
                0 < n && h.push(a)
              }
            })
            var p = this.lineHeight
                ? this.lineHeight
                : this.getTextHeight(e, this.font, this.fontSize),
              v = p * (h.length - 1),
              g = i
            'top' === this.vAlign
              ? (d = i + this.fontSize)
              : 'bottom' === this.vAlign
              ? ((d = l - v), (g = l))
              : ((g = i + u / 2), (d -= v / 2)),
              h.forEach(function(e) {
                t.fillText(e, c, d), (d += p)
              }),
              this.debug &&
                ((t.lineWidth = 3),
                (t.strokeStyle = '#00909e'),
                t.strokeRect(n, i, o, u),
                (t.lineWidth = 2),
                (t.strokeStyle = '#f6d743'),
                t.beginPath(),
                t.moveTo(c, i),
                t.lineTo(c, l),
                t.stroke(),
                (t.strokeStyle = '#ff6363'),
                t.beginPath(),
                t.moveTo(n, g),
                t.lineTo(f, g),
                t.stroke())
          }
        },
        getTextHeight: function(t, e, n) {
          var r = document.createElement('div')
          ;(r.style.cssText =
            'position:fixed;padding:0;left:-9999px;top:-9999px;font:' +
            e +
            ';font-size:' +
            n +
            'px'),
            (r.textContent = t),
            document.body.appendChild(r)
          var i = parseInt(getComputedStyle(r).getPropertyValue('height'), 10)
          return document.body.removeChild(r), i
        }
      }
      e.default = i
    }
  ])
})
