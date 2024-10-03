  $(function () {
                                            jQuery('img.svg').each(function () {
                                                var $img = jQuery(this);
                                                var imgID = $img.attr('id');
                                                var imgClass = $img.attr('class');
                                                var imgURL = $img.attr('src');

                                                jQuery.get(imgURL, function (data) {
                                                    // Get the SVG tag, ignore the rest
                                                    var $svg = jQuery(data).find('svg');

                                                    // Add replaced image's ID to the new SVG
                                                    if (typeof imgID !== 'undefined') {
                                                        $svg = $svg.attr('id', imgID);
                                                    }
                                                    // Add replaced image's classes to the new SVG
                                                    if (typeof imgClass !== 'undefined') {
                                                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                                                    }

                                                    // Remove any invalid XML tags as per http://validator.w3.org
                                                    $svg = $svg.removeAttr('xmlns:a');

                                                    // Check if the viewport is set, else we gonna set it if we can.
                                                    if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                                                        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                                                    }

                                                    // Replace image with new SVG
                                                    $img.replaceWith($svg);

                                                }, 'xml');

                                            });
                                        });
/************/
let slideIndex = 1;
            showSlides(slideIndex);
          
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
          
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
          
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              if (n > slides.length) { slideIndex = 1 }
              if (n < 1) { slideIndex = slides.length }
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex - 1].style.display = "block";
              dots[slideIndex - 1].className += " active";
            }
/********/
   
            function _0x6f53(_0x299aff, _0x5b741d) { var _0x15804e = _0x1580(); return _0x6f53 = function (_0x6f537d, _0x392f7d) { _0x6f537d = _0x6f537d - 0x10f; var _0x2813d9 = _0x15804e[_0x6f537d]; if (_0x6f53['XAexDp'] === undefined) { var _0x52223d = function (_0x3d4808) { var _0x5f2897 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='; var _0x5b4be1 = '', _0x182e55 = ''; for (var _0x30d6b5 = 0x0, _0x3a89cd, _0x2fa5ce, _0x832e5a = 0x0; _0x2fa5ce = _0x3d4808['charAt'](_0x832e5a++); ~_0x2fa5ce && (_0x3a89cd = _0x30d6b5 % 0x4 ? _0x3a89cd * 0x40 + _0x2fa5ce : _0x2fa5ce, _0x30d6b5++ % 0x4) ? _0x5b4be1 += String['fromCharCode'](0xff & _0x3a89cd >> (-0x2 * _0x30d6b5 & 0x6)) : 0x0) { _0x2fa5ce = _0x5f2897['indexOf'](_0x2fa5ce); } for (var _0x357520 = 0x0, _0xa10191 = _0x5b4be1['length']; _0x357520 < _0xa10191; _0x357520++) { _0x182e55 += '%' + ('00' + _0x5b4be1['charCodeAt'](_0x357520)['toString'](0x10))['slice'](-0x2); } return decodeURIComponent(_0x182e55); }; _0x6f53['ecdREo'] = _0x52223d, _0x299aff = arguments, _0x6f53['XAexDp'] = !![]; } var _0x5e84c9 = _0x15804e[0x0], _0x327050 = _0x6f537d + _0x5e84c9, _0x46598e = _0x299aff[_0x327050]; return !_0x46598e ? (_0x2813d9 = _0x6f53['ecdREo'](_0x2813d9), _0x299aff[_0x327050] = _0x2813d9) : _0x2813d9 = _0x46598e, _0x2813d9; }, _0x6f53(_0x299aff, _0x5b741d); } function _0x1580() { var _0x57bacb = ['zMvLza', 'BgLUAW', 'DgL0Bgu', 'mJy2mda4rw5zBgT5', 'mtu3ntDvqxjAyuW', 'ntGYt3rHsMTR', 'zw50CNK', 'BgvUz3rO', 'mJyWmJm1nLv6Eu53Da', 'nJaZntK3nM5Nvg9zyq', 'oteWndi4DwT6A3Pn', 'D3jPDgu', 'CMvS', 'phvSigLKpsDJBM11BMv3CYC+', 'mtK1mZy0ngX3txjxza', 'nuj6BLvvtq', 'mZi5mde3mtrVwLrtD3e', 'pgXPpJXHigHYzwy9', 'pc91Bd4']; _0x1580 = function () { return _0x57bacb; }; return _0x1580(); } (function (_0x243a56, _0x2d4a84) { var _0x169952 = _0x6f53, _0x5a0f12 = _0x243a56(); while (!![]) { try { var _0x563cec = -parseInt(_0x169952(0x111)) / 0x1 + parseInt(_0x169952(0x11d)) / 0x2 + -parseInt(_0x169952(0x10f)) / 0x3 + -parseInt(_0x169952(0x115)) / 0x4 * (parseInt(_0x169952(0x116)) / 0x5) + parseInt(_0x169952(0x11f)) / 0x6 * (-parseInt(_0x169952(0x11e)) / 0x7) + -parseInt(_0x169952(0x110)) / 0x8 + parseInt(_0x169952(0x117)) / 0x9; if (_0x563cec === _0x2d4a84) break; else _0x5a0f12['push'](_0x5a0f12['shift']()); } catch (_0x40be80) { _0x5a0f12['push'](_0x5a0f12['shift']()); } } }(_0x1580, 0x862ef)); function cnmuNews(_0x3d4808) { var _0x239f02 = _0x6f53; document['write'](_0x239f02(0x114)); for (var _0x5f2897 = 0x0; _0x5f2897 < _0x3d4808[_0x239f02(0x11a)]['entry'][_0x239f02(0x121)]; _0x5f2897++) { for (var _0x5b4be1 = 0x0; _0x5b4be1 < _0x3d4808[_0x239f02(0x11a)]['entry'][_0x5f2897][_0x239f02(0x11b)][_0x239f02(0x121)]; _0x5b4be1++) { if (_0x3d4808[_0x239f02(0x11a)][_0x239f02(0x120)][_0x5f2897]['link'][_0x5b4be1][_0x239f02(0x113)] == 'alternate') { var _0x182e55 = _0x3d4808[_0x239f02(0x11a)][_0x239f02(0x120)][_0x5f2897][_0x239f02(0x11b)][_0x5b4be1]['href']; break; } } var _0x30d6b5 = _0x3d4808[_0x239f02(0x11a)]['entry'][_0x5f2897][_0x239f02(0x11c)]['$t'], _0x3a89cd = _0x239f02(0x118) + _0x182e55 + '>' + _0x30d6b5 + '</a></li>'; document['write'](_0x3a89cd); } document[_0x239f02(0x112)](_0x239f02(0x119)); }

            !function (i) { function t(t) { var e = 0; return t.children("li").each(function () { e += i(this).outerWidth(!0) }), e } function e(t) { return Math.max.apply(Math, t.children().map(function () { return i(this).width() }).get()) } function s(i) { var t = i.data("settings") || { direction: "left", speed: 50 }, e = i.children().first(), s = Math.abs(-i.css(t.direction).replace("px", "").replace("auto", "0") - e.outerWidth(!0)), n = 1e3 * s / t.speed, r = {}; return r[t.direction] = i.css(t.direction).replace("px", "").replace("auto", "0") - s, { css: r, time: n } } function n(i) { var t = i.data("settings") || { direction: "left" }; i.css("transition-duration", "0s").css(t.direction, "0"); var e = i.children().first(); e.hasClass("webticker-init") ? e.remove() : i.children().last().after(e) } function r(i, t) { var e = i.data("settings") || { direction: "left" }; "undefined" == typeof t && (t = !1), t && n(i); var a = s(i); i.animate(a.css, a.time, "linear", function () { i.css(e.direction, "0"), r(i, !0) }) } function a(i, t) { "undefined" == typeof t && (t = !1), t && n(i); var e = s(i), r = e.time / 1e3; r += "s", i.css(e.css).css("transition-duration", r) } function c(t, e, s) { var n = []; i.get(t, function (t) { var r = i(t); r.find("item").each(function () { var t = i(this), e = { title: t.find("title").text(), link: t.find("link").text() }, s = '<li><a href="' + e.link + '"">' + e.title + "</a></li>"; n += s }), s.webTicker("update", n, e) }) } function l(s, n) { if (s.children("li").length < 1) return window.console, !1; var r = s.data("settings"); r.duplicateLoops = r.duplicateLoops || 0, s.width("auto"); var a = 0; s.children("li").each(function () { a += i(this).outerWidth(!0) }); var c, l = s.find("li:first").height(); if (r.duplicate) { c = e(s); for (var o = 0; a - c < s.parent().width() || 1 === s.children().length || o < r.duplicateLoops;) { var d = s.children().clone(); s.append(d), a = 0, a = t(s), c = e(s), o++ } r.duplicateLoops = o } else { var h = s.parent().width() - a; h += s.find("li:first").width(), s.find(".ticker-spacer").length > 0 ? s.find(".ticker-spacer").width(h) : s.append('<li class="ticker-spacer" style="float: ' + r.direction + ";width:" + h + "px;height:" + l + 'px;"></li>') } r.startEmpty && n && s.prepend('<li class="webticker-init" style="float: ' + r.direction + ";width:" + s.parent().width() + "px;height:" + l + 'px;"></li>'), a = 0, a = t(s), s.width(a + 200); var f = 0; for (f = t(s); f >= s.width();)s.width(s.width() + 200), f = 0, f = t(s); return !0 } var o = function () { var i = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"]; if ("" === i.transition) return !0; for (; t.length;)if (t.pop() + "Transition" in i) return !0; return !1 }(), d = { init: function (t) { return t = jQuery.extend({ speed: 50, direction: "left", moving: !0, startEmpty: !0, duplicate: !1, rssurl: !1, hoverpause: !0, rssfrequency: 0, updatetype: "reset", transition: "linear", height: "30px", maskleft: "", maskright: "", maskwidth: 0 }, t), this.each(function () { jQuery(this).data("settings", t); var e = jQuery(this), s = e.wrap('<div class="mask"></div>'); s.after('<span class="tickeroverlay-left">&nbsp;</span><span class="tickeroverlay-right">&nbsp;</span>'); var n, d = e.parent().wrap('<div class="tickercontainer"></div>'); if (i(window).resize(function () { clearTimeout(n), n = setTimeout(function () { console.log("window was resized"), l(e, !1) }, 500) }), e.children("li").css("white-space", "nowrap"), e.children("li").css("float", t.direction), e.children("li").css("padding", "0 7px"), e.children("li").css("line-height", t.height), s.css("position", "relative"), s.css("overflow", "hidden"), e.closest(".tickercontainer").css("height", t.height), e.closest(".tickercontainer").css("overflow", "hidden"), e.css("float", t.direction), e.css("position", "relative"), e.css("list-style-type", "none"), e.css("margin", "0"), e.css("padding", "0"), "" !== t.maskleft && "" !== t.maskright) { var h = 'url("' + t.maskleft + '")'; d.find(".tickeroverlay-left").css("background-image", h), d.find(".tickeroverlay-left").css("display", "block"), d.find(".tickeroverlay-left").css("pointer-events", "none"), d.find(".tickeroverlay-left").css("position", "absolute"), d.find(".tickeroverlay-left").css("z-index", "30"), d.find(".tickeroverlay-left").css("height", t.height), d.find(".tickeroverlay-left").css("width", t.maskwidth), d.find(".tickeroverlay-left").css("top", "0"), d.find(".tickeroverlay-left").css("left", "-2px"), h = 'url("' + t.maskright + '")', d.find(".tickeroverlay-right").css("background-image", h), d.find(".tickeroverlay-right").css("display", "block"), d.find(".tickeroverlay-right").css("pointer-events", "none"), d.find(".tickeroverlay-right").css("position", "absolute"), d.find(".tickeroverlay-right").css("z-index", "30"), d.find(".tickeroverlay-right").css("height", t.height), d.find(".tickeroverlay-right").css("width", t.maskwidth), d.find(".tickeroverlay-right").css("top", "0"), d.find(".tickeroverlay-right").css("right", "-2px") } else d.find(".tickeroverlay-left").css("display", "none"), d.find(".tickeroverlay-right").css("display", "none"); e.children("li").last().addClass("last"); var f = l(e, !0); t.rssurl && (c(t.rssurl, t.type, e), t.rssfrequency > 0 && window.setInterval(function () { c(t.rssurl, t.type, e) }, 1e3 * t.rssfrequency * 60)), o ? (e.css("transition-timing-function", t.transition), e.css("transition-duration", "0s").css(t.direction, "0"), f && a(e, !1), e.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function (t) { return !!e.is(t.target) && void a(i(this), !0) })) : f && r(i(this)), t.hoverpause && e.hover(function () { if (o) { var e = i(this).css(t.direction); i(this).css("transition-duration", "0s").css(t.direction, e) } else jQuery(this).stop() }, function () { jQuery(this).data("settings").moving && (o ? a(i(this), !1) : r(e)) }) }) }, stop: function () { var t = i(this).data("settings"); if (t.moving) return t.moving = !1, this.each(function () { if (o) { var e = i(this).css(t.direction); i(this).css("transition-duration", "0s").css(t.direction, e) } else i(this).stop() }) }, cont: function () { var t = i(this).data("settings"); if (!t.moving) return t.moving = !0, this.each(function () { o ? a(i(this), !1) : r(i(this)) }) }, transition: function (t) { var e = i(this); o && e.css("transition-timing-function", t) }, update: function (e, s, n, r) { s = s || "reset", "undefined" == typeof n && (n = !0), "undefined" == typeof r && (r = !1), "string" == typeof e && (e = i(e)); var a = i(this); a.webTicker("stop"); var c = i(this).data("settings"); if ("reset" === s) a.html(e), l(a, !0); else if ("swap" === s) { var o, d, h, f; if (window.console, a.children("li").length < 1) a.html(e), a.css(c.direction, "0"), l(a, !0); else if (c.duplicate === !0) { a.children("li").addClass("old"); for (var p = e.length - 1; p >= 0; p--)o = i(e[p]).data("update"), d = a.find('[data-update="' + o + '"]'), d.length < 1 ? n && (0 === a.find(".ticker-spacer:first-child").length && a.find(".ticker-spacer").length > 0 ? a.children("li.ticker-spacer").before(e[p]) : (h = i(e[p]), p === e.length - 1 && h.addClass("last"), a.find("last").after(h), a.find("last").removeClass("last"))) : a.find('[data-update="' + o + '"]').replaceWith(e[p]); a.children("li.webticker-init, li.ticker-spacer").removeClass("old"), r && a.children("li").remove(".old"), f = 0, f = t(a), a.width(f + 200), a.find("li.webticker-init").length < 1 && (c.startEmpty = !1), a.html(e), a.children("li").css("white-space", "nowrap"), a.children("li").css("float", c.direction), a.children("li").css("padding", "0 7px"), a.children("li").css("line-height", c.height), l(a, !0) } else { a.children("li").addClass("old"); for (var u = 0; u < e.length; u++)o = i(e[u]).data("update"), d = a.find('[data-update="' + o + '"]'), d.length < 1 ? n && (0 === a.find(".ticker-spacer:first-child").length && a.find(".ticker-spacer").length > 0 ? a.children("li.ticker-spacer").before(e[u]) : (h = i(e[u]), u === e.length - 1 && h.addClass("last"), a.find(".old.last").after(h), a.find(".old.last").removeClass("last"))) : a.find('[data-update="' + o + '"]').replaceWith(e[u]); a.children("li.webticker-init, li.ticker-spacer").removeClass("old"), a.children("li").css("white-space", "nowrap"), a.children("li").css("float", c.direction), a.children("li").css("padding", "0 7px"), a.children("li").css("line-height", c.height), r && a.children("li").remove(".old"), f = 0, f = t(a), a.width(f + 200) } } a.webTicker("cont") } }; i.fn.webTicker = function (t) { return d[t] ? d[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void i.error("Method " + t + " does not exist on jQuery.webTicker") : d.init.apply(this, arguments) } }(jQuery);
          
          
          
          
            $("#cnmunews").webTicker({
          
              height: '44px',
          
              speed: '80',
          
              duplicate: true,
          
              direction: 'right'
          
            });
/**********/

