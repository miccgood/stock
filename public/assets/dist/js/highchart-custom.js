/*
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 
 (c) 2009-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 
 Highcharts funnel module
 
 (c) 2010-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 Exporting module
 
 (c) 2010-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 Data module
 
 (c) 2012-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 Plugin for displaying a message when there is no data visible in chart.
 
 (c) 2010-2014 Highsoft AS
 Author: Oystein Moseng
 
 License: www.highcharts.com/license
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 Solid angular gauge module
 
 (c) 2010-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 Highcharts 4.1.8 JS v/Highstock 2.1.8 (2015-08-20)
 
 (c) 2011-2014 Torstein Honsi
 
 License: www.highcharts.com/license
 */
(function() {
    function r() {
        var a, b = arguments, c, d = {}, e = function(a, b) {
            var c, d;
            "object" !== typeof a && (a = {});
            for (d in b)
                b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
            return a
        };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++)
            d = e(d, b[a]);
        return d
    }
    function E(a, b) {
        return parseInt(a, b || 10)
    }
    function Y(a) {
        return"string" === typeof a
    }
    function W(a) {
        return a &&
                "object" === typeof a
    }
    function R(a) {
        return"[object Array]" === Object.prototype.toString.call(a)
    }
    function X(a) {
        return"number" === typeof a
    }
    function S(a) {
        return pa.log(a) / pa.LN10
    }
    function C(a) {
        return pa.pow(10, a)
    }
    function p(a, b) {
        for (var c = a.length; c--; )
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }
    function t(a) {
        return a !== H && null !== a
    }
    function G(a, b, c) {
        var d, e;
        if (Y(b))
            t(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (t(b) && W(b))
            for (d in b)
                a.setAttribute(d, b[d]);
        return e
    }
    function B(a) {
        return R(a) ?
                a : [a]
    }
    function y(a, b) {
        Pa && !za && b && b.opacity !== H && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        O(a.style, b)
    }
    function F(a, b, c, d, e) {
        a = aa.createElement(a);
        b && O(a, b);
        e && y(a, {padding: 0, border: "none", margin: 0});
        c && y(a, c);
        d && d.appendChild(a);
        return a
    }
    function U(a, b) {
        var c = function() {
            return H
        };
        c.prototype = new a;
        O(c.prototype, b);
        return c
    }
    function I(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }
    function ga(a, b) {
        return/%$/.test(a) ? b * parseFloat(a) / 100 : parseFloat(a)
    }
    function V(a) {
        return 6E4 * (nb && nb(a) ||
                Bb || 0)
    }
    function v(a, b) {
        for (var c = "{", d = !1, e, f, g, h, k, n = []; -1 !== (c = a.indexOf(c)); ) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                k = g.length;
                e = b;
                for (h = 0; h < k; h++)
                    e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = oa.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, null !== e && (e = Z.numberFormat(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = Ca(f, e))
            }
            n.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        n.push(a);
        return n.join("")
    }
    function l(a) {
        return pa.pow(10, ja(pa.log(a) / pa.LN10))
    }
    function q(a,
            b, c, d, e) {
        var f, g = a;
        c = z(c, 1);
        f = a / c;
        b || (b = [1, 2, 2.5, 5, 10], !1 === d && (1 === c ? b = [1, 2, 5, 10] : .1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(g = b[d], e && g * c >= a || !e && f <= (b[d] + (b[d + 1] || b[d])) / 2); d++)
            ;
        return g * c
    }
    function M(a, b) {
        var c = a.length, d, e;
        for (e = 0; e < c; e++)
            a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++)
            delete a[e].ss_i
    }
    function D(a) {
        for (var b = a.length, c = a[0]; b--; )
            a[b] < c && (c = a[b]);
        return c
    }
    function qa(a) {
        for (var b = a.length, c = a[0]; b--; )
            a[b] > c && (c = a[b]);
        return c
    }
    function ka(a,
            b) {
        for (var c in a)
            a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }
    function ta(a) {
        ob || (ob = F("div"));
        a && ob.appendChild(a);
        ob.innerHTML = ""
    }
    function P(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b)
            throw c;
        ra.console && console.log(c)
    }
    function ua(a, b) {
        return parseFloat(a.toPrecision(b || 14))
    }
    function Sa(a, b) {
        b.renderer.globalAnimation = z(a, b.animation)
    }
    function Ya() {
        var a = oa.global, b = a.useUTC, c = b ? "getUTC" : "get", d = b ? "setUTC" : "set";
        Aa = a.Date || window.Date;
        Bb = b && a.timezoneOffset;
        nb = b && a.getTimezoneOffset;
        pb = function(a, c, d, h, k, n) {
            var m;
            b ? (m = Aa.UTC.apply(0, arguments), m += V(m)) : m = (new Aa(a, c, z(d, 1), z(h, 0), z(k, 0), z(n, 0))).getTime();
            return m
        };
        Cb = c + "Minutes";
        Db = c + "Hours";
        Eb = c + "Day";
        db = c + "Date";
        eb = c + "Month";
        fb = c + "FullYear";
        Ub = d + "Milliseconds";
        Vb = d + "Seconds";
        Wb = d + "Minutes";
        Xb = d + "Hours";
        Fb = d + "Date";
        Gb = d + "Month";
        Hb = d + "FullYear"
    }
    function ha() {
    }
    function Za(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }
    function Yb(a, b, c, d, e) {
        var f = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.total = null;
        this.points = {};
        this.stack = e;
        this.alignOptions = {align: b.align || (f ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"), y: z(b.y, f ? 4 : c ? 14 : -6), x: z(b.x, f ? c ? -6 : 6 : 0)};
        this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    }
    function Ib(a) {
        var b = a.options, c = b.navigator, d = c.enabled, b = b.scrollbar, e = b.enabled, f = d ? c.height : 0, g = e ? b.height : 0;
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.setBaseSeries();
        this.height = f;
        this.scrollbarHeight = g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions = c;
        this.scrollbarOptions = b;
        this.outlineHeight = f + g;
        this.init()
    }
    function Da(a) {
        this.init(a)
    }
    function va(a, b, c) {
        this.init.call(this, a, b, c)
    }
    var H, aa = document, ra = window, pa = Math, K = pa.round, ja = pa.floor, Na = pa.ceil, L = pa.max, T = pa.min, la = pa.abs, wa = pa.cos, Ba = pa.sin, Ka = pa.PI, Ia = 2 * Ka / 360, Qa = navigator.userAgent, Zb = ra.opera, Pa = /(msie|trident)/i.test(Qa) && !Zb, qb = 8 === aa.documentMode,
            rb = /AppleWebKit/.test(Qa), $a = /Firefox/.test(Qa), gb = /(Mobile|Android|Windows Phone)/.test(Qa), Ta = "http://www.w3.org/2000/svg", za = !!aa.createElementNS && !!aa.createElementNS(Ta, "svg").createSVGRect, kc = $a && 4 > parseInt(Qa.split("Firefox/")[1], 10), Ea = !za && !Pa && !!aa.createElement("canvas").getContext, ab, cb, $b = {}, Jb = 0, ob, oa, Ca, Kb, ia, ma = function() {
        return H
    }, xa = [], hb = 0, lc = /^[0-9]+$/, sb = ["plotTop", "marginRight", "marginBottom", "plotLeft"], Aa, pb, Bb, nb, Cb, Db, Eb, db, eb, fb, Ub, Vb, Wb, Xb, Fb, Gb, Hb, Q = {}, Z;
    Z = ra.Highcharts =
            ra.Highcharts ? P(16, !0) : {};
    Z.seriesTypes = Q;
    var O = Z.extend = function(a, b) {
        var c;
        a || (a = {});
        for (c in b)
            a[c] = b[c];
        return a
    }, z = Z.pick = function() {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++)
            if (c = a[b], c !== H && null !== c)
                return c
    }, ba = Z.wrap = function(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    };
    Ca = function(a, b, c) {
        if (!t(b) || isNaN(b))
            return oa.lang.invalidDate || "";
        a = z(a, "%Y-%m-%d %H:%M:%S");
        var d = new Aa(b - V(b)), e, f = d[Db](), g = d[Eb](), h = d[db](),
                k = d[eb](), n = d[fb](), m = oa.lang, w = m.weekdays, d = O({a: w[g].substr(0, 3), A: w[g], d: I(h), e: h, w: g, b: m.shortMonths[k], B: m.months[k], m: I(k + 1), y: n.toString().substr(2, 2), Y: n, H: I(f), k: f, I: I(f % 12 || 12), l: f % 12 || 12, M: I(d[Cb]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm", S: I(d.getSeconds()), L: I(K(b % 1E3), 3)}, Z.dateFormats);
        for (e in d)
            for (; - 1 !== a.indexOf("%" + e); )
                a = a.replace("%" + e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    ia = {millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5,
        week: 6048E5, month: 24192E5, year: 314496E5};
    Z.numberFormat = function(a, b, c, d) {
        var e = oa.lang;
        a = +a || 0;
        var f = -1 === b ? T((a.toString().split(".")[1] || "").length, 20) : isNaN(b = la(b)) ? 2 : b;
        b = void 0 === c ? e.decimalPoint : c;
        d = void 0 === d ? e.thousandsSep : d;
        e = 0 > a ? "-" : "";
        c = String(E(a = la(a).toFixed(f)));
        var g = 3 < c.length ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + la(a - c).toFixed(f).slice(2) : "")
    };
    Kb = {init: function(a, b, c) {
            b = b || "";
            var d = a.shift, e = -1 < b.indexOf("C"), f = e ? 7 : 3, g;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, n = function(a) {
                for (g = a.length; g--; )
                    "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
            };
            e && (n(b), n(c));
            a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length)
                for (; d--; )
                    c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a; )
                    d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(k));
            return[b, c]
        }, step: function(a, b, c, d) {
            var e = [],
                    f = a.length;
            if (1 === c)
                e = d;
            else if (f === b.length && 1 > c)
                for (; f--; )
                    d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else
                e = b;
            return e
        }};
    (function(a) {
        ra.HighchartsAdapter = ra.HighchartsAdapter || a && {init: function(b) {
                var c = a.fx;
                a.extend(a.easing, {easeOutQuad: function(a, b, c, g, h) {
                        return-g * (b /= h) * (b - 2) + c
                    }});
                a.each(["cur", "_default", "width", "height", "opacity"], function(b, e) {
                    var f = c.step, g;
                    "cur" === e ? f = c.prototype : "_default" === e && a.Tween && (f = a.Tween.propHooks[e], e = "set");
                    (g = f[e]) && (f[e] = function(a) {
                        var c;
                        a = b ? a : this;
                        if ("align" !== a.prop)
                            return c = a.elem, c.attr ? c.attr(a.prop, "cur" === e ? H : a.now) : g.apply(this, arguments)
                    })
                });
                ba(a.cssHooks.opacity, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                this.addAnimSetter("d", function(a) {
                    var c = a.elem, f;
                    a.started || (f = b.init(c, c.d, c.toD), a.start = f[0], a.end = f[1], a.started = !0);
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                });
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    var c, g = a.length;
                    for (c =
                            0; c < g; c++)
                        if (!1 === b.call(a[c], a[c], c, a))
                            return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart", b = arguments, c, g;
                    this[0] && (Y(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)), c = b[0], c !== H && (c.chart = c.chart || {}, c.chart.renderTo = this[0], new Z[a](c, b[1]), g = this), c === H && (g = xa[G(this[0], "data-highcharts-chart")]));
                    return g
                }
            }, addAnimSetter: function(b, c) {
                a.Tween ? a.Tween.propHooks[b] = {set: c} : a.fx.step[b] = c
            }, getScript: a.getScript, inArray: a.inArray, adapterRun: function(b, c) {
                return a(b)[c]()
            }, grep: a.grep, map: function(a,
                    c) {
                for (var d = [], e = 0, f = a.length; e < f; e++)
                    d[e] = c.call(a[e], a[e], e, a);
                return d
            }, offset: function(b) {
                return a(b).offset()
            }, addEvent: function(b, c, d) {
                a(b).bind(c, d)
            }, removeEvent: function(b, c, d) {
                var e = aa.removeEventListener ? "removeEventListener" : "detachEvent";
                aa[e] && b && !b[e] && (b[e] = function() {
                });
                a(b).unbind(c, d)
            }, fireEvent: function(b, c, d, e) {
                var f = a.Event(c), g = "detached" + c, h;
                !Pa && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                O(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"],
                        function(a, b) {
                            var c = f[b];
                            f[b] = function() {
                                try {
                                    c.call(f)
                                } catch (a) {
                                    "preventDefault" === b && (h = !0)
                                }
                            }
                        });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                !e || f.isDefaultPrevented() || h || e(f)
            }, washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                c.pageX === H && (c.pageX = a.pageX, c.pageY = a.pageY);
                return c
            }, animate: function(b, c, d) {
                var e = a(b);
                b.style || (b.style = {});
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                c.opacity !== H && b.attr && (c.opacity += "px");
                b.hasAnim = 1;
                e.animate(c, d)
            }, stop: function(b) {
                b.hasAnim && a(b).stop()
            }}
    })(ra.jQuery);
    var tb =
            ra.HighchartsAdapter, Fa = tb || {};
    tb && tb.init.call(tb, Kb);
    var ub = Fa.adapterRun, mc = Fa.getScript, Ua = Fa.inArray, x = Z.each = Fa.each, ib = Fa.grep, nc = Fa.offset, La = Fa.map, ca = Fa.addEvent, sa = Fa.removeEvent, na = Fa.fireEvent, oc = Fa.washMouseEvent, vb = Fa.animate, jb = Fa.stop;
    oa = {colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {loading: "Loading...", months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "}, global: {useUTC: !0, canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.1.8/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.1.8/gfx/vml-radial-gradient.png"},
        chart: {borderColor: "#4572A7", borderRadius: 0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}}, title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}}, subtitle: {text: "", align: "center", style: {color: "#555555"}}, plotOptions: {line: {allowPointSelect: !1, showCheckbox: !1, animation: {duration: 1E3}, events: {}, lineWidth: 2, marker: {lineWidth: 0,
                    radius: 4, lineColor: "#FFFFFF", states: {hover: {enabled: !0, lineWidthPlus: 1, radiusPlus: 2}, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}}}, point: {events: {}}, dataLabels: {align: "center", formatter: function() {
                        return null === this.y ? "" : Z.numberFormat(this.y, -1)
                    }, style: {color: "contrast", fontSize: "11px", fontWeight: "bold", textShadow: "0 0 6px contrast, 0 0 3px contrast"}, verticalAlign: "bottom", x: 0, y: 0, padding: 5}, cropThreshold: 300, pointRange: 0, states: {hover: {lineWidthPlus: 1, marker: {}, halo: {size: 10, opacity: .25}},
                    select: {marker: {}}}, stickyTracking: !0, turboThreshold: 1E3}}, labels: {style: {position: "absolute", color: "#3E576F"}}, legend: {enabled: !0, align: "center", layout: "horizontal", labelFormatter: function() {
                return this.name
            }, borderColor: "#909090", borderRadius: 0, navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"}, shadow: !1, itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"}, itemHoverStyle: {color: "#000"}, itemHiddenStyle: {color: "#CCC"}, itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"},
            symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: {style: {fontWeight: "bold"}}}, loading: {labelStyle: {fontWeight: "bold", position: "relative", top: "45%"}, style: {position: "absolute", backgroundColor: "white", opacity: .5, textAlign: "center"}}, tooltip: {enabled: !0, animation: za, backgroundColor: "rgba(249, 249, 249, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: {millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y",
                month: "%B %Y", year: "%Y"}, footerFormat: "", headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', shadow: !0, snap: gb ? 25 : 10, style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}}, credits: {enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: {align: "right", x: -10, verticalAlign: "bottom", y: -5}, style: {cursor: "pointer", color: "#909090", fontSize: "9px"}}};
    var da = oa.plotOptions, kb = da.line;
    Ya();
    var pc = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, qc = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, rc = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, Ja = function(a) {
        var b = [], c, d;
        (function(a) {
            a && a.stops ? d = La(a.stops, function(a) {
                return Ja(a[1])
            }) : (c = pc.exec(a)) ? b = [E(c[1]), E(c[2]), E(c[3]), parseFloat(c[4], 10)] : (c = qc.exec(a)) ? b = [E(c[1], 16), E(c[2], 16), E(c[3], 16), 1] : (c = rc.exec(a)) && (b = [E(c[1]),
                E(c[2]), E(c[3]), 1])
        })(a);
        return{get: function(c) {
                var f;
                d ? (f = r(a), f.stops = [].concat(f.stops), x(d, function(a, b) {
                    f.stops[b] = [f.stops[b][0], a.get(c)]
                })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                return f
            }, brighten: function(a) {
                if (d)
                    x(d, function(b) {
                        b.brighten(a)
                    });
                else if (X(a) && 0 !== a) {
                    var c;
                    for (c = 0; 3 > c; c++)
                        b[c] += E(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255)
                }
                return this
            }, rgba: b, setOpacity: function(a) {
                b[3] = a;
                return this
            }, raw: a}
    };
    ha.prototype = {opacity: 1,
        textProps: "fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textShadow".split(" "), init: function(a, b) {
            this.element = "span" === b ? F(b) : aa.createElementNS(Ta, b);
            this.renderer = a
        }, animate: function(a, b, c) {
            b = z(b, this.renderer.globalAnimation, !0);
            jb(this);
            b ? (b = r(b, {}), c && (b.complete = c), vb(this, a, b)) : this.attr(a, null, c);
            return this
        }, colorGradient: function(a, b, c) {
            var d = this.renderer, e, f, g, h, k, n, m, w, u, A, N = [];
            a.linearGradient ? f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                n = a.stops;
                u = c.radialReference;
                R(g) && (a[f] = g = {x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse"});
                "radialGradient" === f && u && !t(g.gradientUnits) && (g = r(g, {cx: u[0] - u[2] / 2 + g.cx * u[2], cy: u[1] - u[2] / 2 + g.cy * u[2], r: g.r * u[2], gradientUnits: "userSpaceOnUse"}));
                for (A in g)
                    "id" !== A && N.push(A, g[A]);
                for (A in n)
                    N.push(n[A]);
                N = N.join(",");
                h[N] ? a = h[N].attr("id") : (g.id = a = "highcharts-" + Jb++, h[N] = k = d.createElement(f).attr(g).add(d.defs), k.stops = [], x(n, function(a) {
                    0 === a[1].indexOf("rgba") ?
                            (e = Ja(a[1]), m = e.get("rgb"), w = e.get("a")) : (m = a[1], w = 1);
                    a = d.createElement("stop").attr({offset: a[0], "stop-color": m, "stop-opacity": w}).add(k);
                    k.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")")
            }
        }, applyTextShadow: function(a) {
            var b = this.element, c, d = -1 !== a.indexOf("contrast"), e = {}, f = this.renderer.forExport || b.style.textShadow !== H && !Pa;
            d && (e.textShadow = a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
            rb && (e.textRendering = "geometricPrecision");
            f ? y(b, e) : (this.fakeTS = !0, this.ySetter =
                    this.xSetter, c = [].slice.call(b.getElementsByTagName("tspan")), x(a.split(/\s?,\s?/g), function(a) {
                var d = b.firstChild, e, f;
                a = a.split(" ");
                e = a[a.length - 1];
                (f = a[a.length - 2]) && x(c, function(a, c) {
                    var g;
                    0 === c && (a.setAttribute("x", b.getAttribute("x")), c = b.getAttribute("y"), a.setAttribute("y", c || 0), null === c && b.setAttribute("y", 0));
                    g = a.cloneNode(1);
                    G(g, {"class": "highcharts-text-shadow", fill: e, stroke: e, "stroke-opacity": 1 / L(E(f), 3), "stroke-width": f, "stroke-linejoin": "round"});
                    b.insertBefore(g, d)
                })
            }))
        }, attr: function(a,
                b, c) {
            var d, e = this.element, f, g = this, h;
            "string" === typeof a && b !== H && (d = a, a = {}, a[d] = b);
            if ("string" === typeof a)
                g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (d in a)
                    b = a[d], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(d) && (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0), h || (this[d + "Setter"] || this._defaultSetter).call(this, b, d, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) &&
                            this.updateShadows(d, b);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            c && c();
            return g
        }, updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--; )
                c[d].setAttribute(a, "height" === a ? L(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b)
        }, addClass: function(a) {
            var b = this.element, c = G(b, "class") || "";
            -1 === c.indexOf(a) && G(b, "class", c + " " + a);
            return this
        }, symbolAttr: function(a) {
            var b = this;
            x("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = z(a[c], b[c])
            });
            b.attr({d: b.renderer.symbols[b.symbolName](b.x,
                        b.y, b.width, b.height, b)})
        }, clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
        }, crisp: function(a) {
            var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || 0;
            d = K(e) % 2 / 2;
            a.x = ja(a.x || this.x || 0) + d;
            a.y = ja(a.y || this.y || 0) + d;
            a.width = ja((a.width || this.width || 0) - 2 * d);
            a.height = ja((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a)
                this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        }, css: function(a) {
            var b = this.styles, c = {}, d = this.element, e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b)
                for (f in a)
                    a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && E(a.width) || this.textWidth;
                b && (a = O(b, c));
                this.styles = a;
                e && (Ea || !za && this.renderer.forExport) && delete a.width;
                if (Pa && !za)
                    y(this.element, a);
                else {
                    b = function(a, b) {
                        return"-" + b.toLowerCase()
                    };
                    for (f in a)
                        g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    G(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        }, on: function(a, b) {
            var c = this, d = c.element;
            cb && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired =
                        Aa.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (-1 === Qa.indexOf("Android") || 1100 < Aa.now() - (c.touchEventFired || 0)) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        }, setRadialReference: function(a) {
            this.element.radialReference = a;
            return this
        }, translate: function(a, b) {
            return this.attr({translateX: a, translateY: b})
        }, invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        }, updateTransform: function() {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted,
                    f = this.rotation, g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (t(c) || t(d)) && a.push("scale(" + z(c, 1) + " " + z(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        }, toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        }, align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions =
                        a, this.alignByTranslate = b, !c || Y(c))
                    this.alignTo = d = c || "renderer", p(f, this), f.push(this), c = null
            } else
                a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = z(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x || 0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d)
                f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
            h[b ? "translateX" : "x"] = K(f);
            if ("bottom" === e || "middle" === e)
                g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1);
            h[b ? "translateY" : "y"] = K(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed =
                    !0;
            this.alignAttr = h;
            return this
        }, getBBox: function(a) {
            var b, c = this.renderer, d, e = this.rotation, f = this.element, g = this.styles, h = e * Ia;
            d = this.textStr;
            var k, n = f.style, m, w;
            d !== H && (w = ["", e || 0, g && g.fontSize, f.style.width].join(), w = "" === d || lc.test(d) ? "num:" + d.toString().length + w : d + w);
            w && !a && (b = c.cache[w]);
            if (!b) {
                if (f.namespaceURI === Ta || c.forExport) {
                    try {
                        m = this.fakeTS && function(a) {
                            x(f.querySelectorAll(".highcharts-text-shadow"), function(b) {
                                b.style.display = a
                            })
                        }, $a && n.textShadow ? (k = n.textShadow, n.textShadow = "") :
                                m && m("none"), b = f.getBBox ? O({}, f.getBBox()) : {width: f.offsetWidth, height: f.offsetHeight}, k ? n.textShadow = k : m && m("")
                    } catch (u) {
                    }
                    if (!b || 0 > b.width)
                        b = {width: 0, height: 0}
                } else
                    b = this.htmlGetBBox();
                c.isSVG && (a = b.width, d = b.height, Pa && g && "11px" === g.fontSize && "16.9" === d.toPrecision(3) && (b.height = d = 14), e && (b.width = la(d * Ba(h)) + la(a * wa(h)), b.height = la(d * wa(h)) + la(a * Ba(h))));
                w && (c.cache[w] = b)
            }
            return b
        }, show: function(a) {
            return this.attr({visibility: a ? "inherit" : "visible"})
        }, hide: function() {
            return this.attr({visibility: "hidden"})
        },
        fadeOut: function(a) {
            var b = this;
            b.animate({opacity: 0}, {duration: a || 150, complete: function() {
                    b.attr({y: -9999})
                }})
        }, add: function(a) {
            var b = this.renderer, c = this.element, d;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            this.added = !0;
            if (!a || a.handleZ || this.zIndex)
                d = this.zIndexSetter();
            d || (a ? a.element : b.box).appendChild(c);
            if (this.onAdd)
                this.onAdd();
            return this
        }, safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        }, destroy: function() {
            var a =
                    this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup, e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            jb(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f < a.stops.length; f++)
                    a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && x(c, function(b) {
                a.safeRemoveChild(b)
            }); d && d.div && 0 === d.div.childNodes.length; )
                b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && p(a.renderer.alignedObjects, a);
            for (e in a)
                delete a[e];
            return null
        }, shadow: function(a, b, c) {
            var d = [], e, f, g = this.element, h, k, n, m;
            if (a) {
                k = z(a.width, 3);
                n = (a.opacity || .15) / k;
                m = this.parentInverted ? "(-1,-1)" : "(" + z(a.offsetX, 1) + ", " + z(a.offsetY, 1) + ")";
                for (e = 1; e <= k; e++)
                    f = g.cloneNode(0), h = 2 * k + 1 - 2 * e, G(f, {isShadow: "true", stroke: a.color || "black", "stroke-opacity": n * e, "stroke-width": h, transform: "translate" + m, fill: "none"}), c && (G(f, "height", L(G(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        },
        xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {x: "cx", y: "cy"}[a] || a);
            return this._defaultGetter(a)
        }, _defaultGetter: function(a) {
            a = z(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
            return a
        }, dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        }, dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot",
                        "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--; )
                    a[b] = E(a[b]) * this["stroke-width"];
                a = a.join(",").replace("NaN", "none");
                this.element.setAttribute("stroke-dasharray", a)
            }
        }, alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
        }, opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        }, titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = aa.createElementNS(Ta, "title"), this.element.appendChild(b));
            b.appendChild(aa.createTextNode(String(z(a), "").replace(/<[^>]*>/g, "")))
        }, textSetter: function(a) {
            a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        }, fillSetter: function(a, b, c) {
            "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        }, visibilitySetter: function(a, b, c) {
            "inherit" === a ? c.removeAttribute(b) : c.setAttribute(b, a)
        }, zIndexSetter: function(a, b) {
            var c = this.renderer, d = this.parentGroup,
                    c = (d || c).element || c.box, e, f, g = this.element, h;
            e = this.added;
            var k;
            t(a) && (g.setAttribute(b, a), a = +a, this[b] === a && (e = !1), this[b] = a);
            if (e) {
                (a = this.zIndex) && d && (d.handleZ = !0);
                d = c.childNodes;
                for (k = 0; k < d.length && !h; k++)
                    e = d[k], f = G(e, "zIndex"), e !== g && (E(f) > a || !t(a) && t(f)) && (c.insertBefore(g, e), h = !0);
                h || c.appendChild(g)
            }
            return h
        }, _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }};
    ha.prototype.yGetter = ha.prototype.xGetter;
    ha.prototype.translateXSetter = ha.prototype.translateYSetter = ha.prototype.rotationSetter =
            ha.prototype.verticalAlignSetter = ha.prototype.scaleXSetter = ha.prototype.scaleYSetter = function(a, b) {
                this[b] = a;
                this.doTransform = !0
            };
    ha.prototype["stroke-widthSetter"] = ha.prototype.strokeSetter = function(a, b, c) {
        this[b] = a;
        this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], ha.prototype.fillSetter.call(this, this.stroke, "stroke", c), c.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (c.removeAttribute("stroke"), this.hasStroke =
                !1)
    };
    var Ga = function() {
        this.init.apply(this, arguments)
    };
    Ga.prototype = {Element: ha, init: function(a, b, c, d, e) {
            var f = location, g;
            d = this.createElement("svg").attr({version: "1.1"}).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            -1 === a.innerHTML.indexOf("xmlns") && G(g, "xmlns", Ta);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = ($a || rb) && aa.getElementsByTagName("base").length ? f.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(aa.createTextNode("Created with Highcharts 4.1.8 /Highstock 2.1.8"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            $a && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                y(a, {left: 0, top: 0});
                h = a.getBoundingClientRect();
                y(a, {left: Na(h.left) - h.left + "px", top: Na(h.top) - h.top + "px"})
            }, b(), ca(ra, "resize", b))
        }, getStyle: function(a) {
            return this.style = O({fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px"}, a)
        }, isHidden: function() {
            return!this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            ka(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && sa(ra, "resize", this.subPixelFix);
            return this.alignedObjects = null
        }, createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        }, draw: function() {
        }, buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = z(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, k, n = G(b, "x"), m = a.styles, w = a.textWidth,
                    u = m && m.lineHeight, A = m && m.textShadow, N = m && "ellipsis" === m.textOverflow, J = g.length, l = w && !a.added && this.box, t = function(a) {
                        return u ? E(u) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : m && m.fontSize || c.style.fontSize || 12, a).h
                    }, q = function(a) {
                return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            }; J--; )
                b.removeChild(g[J]);
            f || A || N || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, k = /<.*href="(http[^"]+)".*>/, l && l.appendChild(b), e = f ? e.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g,
                    '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), x(e, function(e, f) {
                var g, u = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                x(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var A = {}, J = aa.createElementNS(Ta, "tspan"), l;
                        h.test(e) && (l = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), G(J, "style", l));
                        k.test(e) && !d && (G(J, "onclick", 'location.href="' + e.match(k)[1] + '"'),
                                y(J, {cursor: "pointer"}));
                        e = q(e.replace(/<(.|\n)*?>/g, "") || " ");
                        if (" " !== e) {
                            J.appendChild(aa.createTextNode(e));
                            u ? A.dx = 0 : f && null !== n && (A.x = n);
                            G(J, A);
                            b.appendChild(J);
                            !u && f && (!za && d && y(J, {display: "block"}), G(J, "dy", t(J)));
                            if (w) {
                                for (var A = e.replace(/([^\^])-/g, "$1- ").split(" "), v = 1 < g.length || f || 1 < A.length && "nowrap" !== m.whiteSpace, z, p, M, x = [], sc = t(J), D = 1, C = a.rotation, r = e, wb = r.length; (v || N) && (A.length || x.length); )
                                    a.rotation = 0, z = a.getBBox(!0), M = z.width, !za && c.forExport && (M = c.measureSpanWidth(J.firstChild.data,
                                            a.styles)), z = M > w, void 0 === p && (p = z), N && p ? (wb /= 2, "" === r || !z && .5 > wb ? A = [] : (z && (p = !0), r = e.substring(0, r.length + (z ? -1 : 1) * Na(wb)), A = [r + (3 < w ? "\u2026" : "")], J.removeChild(J.firstChild))) : z && 1 !== A.length ? (J.removeChild(J.firstChild), x.unshift(A.pop())) : (A = x, x = [], A.length && (D++, J = aa.createElementNS(Ta, "tspan"), G(J, {dy: sc, x: n}), l && G(J, "style", l), b.appendChild(J)), M > w && (w = M)), A.length && J.appendChild(aa.createTextNode(A.join(" ").replace(/- /g, "-")));
                                p && a.attr("title", a.textStr);
                                a.rotation = C
                            }
                            u++
                        }
                    }
                })
            }), l && l.removeChild(b),
                    A && a.applyTextShadow && a.applyTextShadow(A)) : b.appendChild(aa.createTextNode(q(e)))
        }, getContrast: function(a) {
            a = Ja(a).rgba;
            return 384 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
        }, button: function(a, b, c, d, e, f, g, h, k) {
            var n = this.label(a, b, c, k, null, null, null, null, "button"), m = 0, w, u, A, N, J, l;
            a = {x1: 0, y1: 0, x2: 0, y2: 1};
            e = r({"stroke-width": 1, stroke: "#CCCCCC", fill: {linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]}, r: 2, padding: 5, style: {color: "black"}}, e);
            A = e.style;
            delete e.style;
            f = r(e, {stroke: "#68A", fill: {linearGradient: a,
                    stops: [[0, "#FFF"], [1, "#ACF"]]}}, f);
            N = f.style;
            delete f.style;
            g = r(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]]}}, g);
            J = g.style;
            delete g.style;
            h = r(e, {style: {color: "#CCC"}}, h);
            l = h.style;
            delete h.style;
            ca(n.element, Pa ? "mouseover" : "mouseenter", function() {
                3 !== m && n.attr(f).css(N)
            });
            ca(n.element, Pa ? "mouseout" : "mouseleave", function() {
                3 !== m && (w = [e, f, g][m], u = [A, N, J][m], n.attr(w).css(u))
            });
            n.setState = function(a) {
                (n.state = m = a) ? 2 === a ? n.attr(g).css(J) : 3 === a && n.attr(h).css(l) : n.attr(e).css(A)
            };
            return n.on("click", function(a) {
                3 !== m && d.call(n, a)
            }).attr(e).css(O({cursor: "default"}, A))
        }, crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = K(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = K(a[2]) + b % 2 / 2);
            return a
        }, path: function(a) {
            var b = {fill: "none"};
            R(a) ? b.d = a : W(a) && O(b, a);
            return this.createElement("path").attr(b)
        }, circle: function(a, b, c) {
            a = W(a) ? a : {x: a, y: b, r: c};
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            W(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0});
            a.r = c;
            return a
        }, rect: function(a, b, c, d, e, f) {
            e = W(a) ? a.r : e;
            var g = this.createElement("rect");
            a = W(a) ? a : a === H ? {} : {x: a, y: b, width: L(c, 0), height: L(d, 0)};
            f !== H && (a.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                G(this.element, {rx: a, ry: a})
            };
            return g.attr(a)
        }, setSize: function(a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width = a;
            this.height =
                    b;
            for (this.boxWrapper[z(c, !0)?"animate":"attr"]({width:a, height:b}); e--; )
                d[e].align()
        }, g: function(a) {
            var b = this.createElement("g");
            return t(a) ? b.attr({"class": "highcharts-" + a}) : b
        }, image: function(a, b, c, d, e) {
            var f = {preserveAspectRatio: "none"};
            1 < arguments.length && O(f, {x: b, y: c, width: d, height: e});
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        }, symbol: function(a, b, c, d, e, f) {
            var g,
                    h = this.symbols[a], h = h && h(K(b), K(c), d, e, f), k = /^url\((.*?)\)$/, n, m;
            h ? (g = this.path(h), O(g, {symbolName: a, x: b, y: c, width: d, height: e}), f && O(g, f)) : k.test(a) && (m = function(a, b) {
                a.element && (a.attr({width: b[0], height: b[1]}), a.alignByTranslate || a.translate(K((d - b[0]) / 2), K((e - b[1]) / 2)))
            }, n = a.match(k)[1], a = $b[n] || f && f.width && f.height && [f.width, f.height], g = this.image(n).attr({x: b, y: c}), g.isImg = !0, a ? m(g, a) : (g.attr({width: 0, height: 0}), F("img", {onload: function() {
                    m(g, $b[n] = [this.width, this.height])
                }, src: n})));
            return g
        },
        symbols: {circle: function(a, b, c, d) {
                var e = .166 * c;
                return["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function(a, b, c, d) {
                return["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function(a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function(a, b, c, d) {
                return["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            }, diamond: function(a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - .001;
                d = e.innerR;
                var h = e.open, k = wa(f), n = Ba(f), m = wa(g), g = Ba(g);
                e = e.end - f < Ka ? 0 : 1;
                return["M", a + c * k, b + c * n, "A", c, c, 0, e, 1, a + c * m, b + c * g, h ? "M" : "L", a + d * m, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * n, h ? "" : "Z"]
            }, callout: function(a, b, c, d, e) {
                var f = T(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX;
                e = e && e.anchorY;
                var k;
                k = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && e > b + g && e < b + d - g ? k.splice(13, 3, "L", a + c, e - 6, a + c + 6, e, a + c, e + 6, a + c, b + d - f) : h && 0 >
                        h && e > b + g && e < b + d - g ? k.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + f) : e && e > d && h > a + g && h < a + c - g ? k.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : e && 0 > e && h > a + g && h < a + c - g && k.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return k
            }}, clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Jb++, f = this.createElement("clipPath").attr({id: e}).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            a.count = 0;
            return a
        }, text: function(a, b, c, d) {
            var e = Ea || !za && this.forExport, f = {};
            if (d && !this.forExport)
                return this.html(a, b, c);
            f.x =
                    Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a)
                f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({position: "absolute"});
            d || (a.xSetter = function(a, b, c) {
                var d = c.getElementsByTagName("tspan"), e, f = c.getAttribute(b), u;
                for (u = 0; u < d.length; u++)
                    e = d[u], e.getAttribute(b) === f && e.setAttribute(b, a);
                c.setAttribute(b, a)
            });
            return a
        }, fontMetrics: function(a, b) {
            var c, d;
            a = a || this.style.fontSize;
            b && ra.getComputedStyle && (b = b.element || b, a = (c = ra.getComputedStyle(b, "")) && c.fontSize);
            a = /px/.test(a) ? E(a) : /em/.test(a) ?
                    12 * parseFloat(a) : 12;
            c = 24 > a ? a + 3 : K(1.2 * a);
            d = K(.8 * c);
            return{h: c, b: d, f: a}
        }, rotCorr: function(a, b, c) {
            var d = a;
            b && c && (d = L(d * wa(b * Ia), 4));
            return{x: -a / 3 * Ba(b * Ia), y: d}
        }, label: function(a, b, c, d, e, f, g, h, k) {
            function n() {
                var a, b;
                a = N.element.style;
                l = (void 0 === p || void 0 === M || A.styles.textAlign) && t(N.textStr) && N.getBBox();
                A.width = (p || l.width || 0) + 2 * v + z;
                A.height = (M || l.height || 0) + 2 * v;
                qa = v + u.fontMetrics(a && a.fontSize, N).b;
                B && (J || (a = K(-q * v) + y, b = (h ? -qa : 0) + y, A.box = J = d ? u.symbol(d, a, b, A.width, A.height, G) : u.rect(a, b, A.width,
                        A.height, 0, G["stroke-width"]), J.isImg || J.attr("fill", "none"), J.add(A)), J.isImg || J.attr(O({width: K(A.width), height: K(A.height)}, G)), G = null)
            }
            function m() {
                var a = A.styles, a = a && a.textAlign, b = z + v * (1 - q), c;
                c = h ? 0 : qa;
                t(p) && l && ("center" === a || "right" === a) && (b += {center: .5, right: 1}[a] * (p - l.width));
                if (b !== N.x || c !== N.y)
                    N.attr("x", b), c !== H && N.attr("y", c);
                N.x = b;
                N.y = c
            }
            function w(a, b) {
                J ? J.attr(a, b) : G[a] = b
            }
            var u = this, A = u.g(k), N = u.text("", 0, 0, g).attr({zIndex: 1}), J, l, q = 0, v = 3, z = 0, p, M, D, C, y = 0, G = {}, qa, B;
            A.onAdd = function() {
                N.add(A);
                A.attr({text: a || 0 === a ? a : "", x: b, y: c});
                J && t(e) && A.attr({anchorX: e, anchorY: f})
            };
            A.widthSetter = function(a) {
                p = a
            };
            A.heightSetter = function(a) {
                M = a
            };
            A.paddingSetter = function(a) {
                t(a) && a !== v && (v = A.padding = a, m())
            };
            A.paddingLeftSetter = function(a) {
                t(a) && a !== z && (z = a, m())
            };
            A.alignSetter = function(a) {
                q = {left: 0, center: .5, right: 1}[a]
            };
            A.textSetter = function(a) {
                a !== H && N.textSetter(a);
                n();
                m()
            };
            A["stroke-widthSetter"] = function(a, b) {
                a && (B = !0);
                y = a % 2 / 2;
                w(b, a)
            };
            A.strokeSetter = A.fillSetter = A.rSetter = function(a, b) {
                "fill" === b &&
                        a && (B = !0);
                w(b, a)
            };
            A.anchorXSetter = function(a, b) {
                e = a;
                w(b, K(a) - y - D)
            };
            A.anchorYSetter = function(a, b) {
                f = a;
                w(b, a - C)
            };
            A.xSetter = function(a) {
                A.x = a;
                q && (a -= q * ((p || l.width) + v));
                D = K(a);
                A.attr("translateX", D)
            };
            A.ySetter = function(a) {
                C = A.y = K(a);
                A.attr("translateY", C)
            };
            var F = A.css;
            return O(A, {css: function(a) {
                    if (a) {
                        var b = {};
                        a = r(a);
                        x(A.textProps, function(c) {
                            a[c] !== H && (b[c] = a[c], delete a[c])
                        });
                        N.css(b)
                    }
                    return F.call(A, a)
                }, getBBox: function() {
                    return{width: l.width + 2 * v, height: l.height + 2 * v, x: l.x - v, y: l.y - v}
                }, shadow: function(a) {
                    J &&
                            J.shadow(a);
                    return A
                }, destroy: function() {
                    sa(A.element, "mouseenter");
                    sa(A.element, "mouseleave");
                    N && (N = N.destroy());
                    J && (J = J.destroy());
                    ha.prototype.destroy.call(A);
                    A = u = n = m = w = null
                }})
        }};
    ab = Ga;
    O(ha.prototype, {htmlCss: function(a) {
            var b = this.element;
            if (b = a && "SPAN" === b.tagName && a.width)
                delete a.width, this.textWidth = b, this.updateTransform();
            a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
            this.styles = O(this.styles, a);
            y(this.element, a);
            return this
        }, htmlGetBBox: function() {
            var a = this.element;
            "text" === a.nodeName && (a.style.position = "absolute");
            return{x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
        }, htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {left: 0, center: .5, right: 1}[g], k = this.shadows, n = this.styles;
                y(b, {marginLeft: c, marginTop: d});
                k && x(k, function(a) {
                    y(a, {marginLeft: c + 1, marginTop: d + 1})
                });
                this.inverted && x(b.childNodes, function(c) {
                    a.invertChild(c,
                            b)
                });
                if ("SPAN" === b.tagName) {
                    var m = this.rotation, w, u = E(this.textWidth), A = [m, g, b.innerHTML, this.textWidth, this.textAlign].join();
                    A !== this.cTT && (w = a.fontMetrics(b.style.fontSize).b, t(m) && this.setSpanRotation(m, h, w), k = z(this.elemWidth, b.offsetWidth), k > u && /[ \-]/.test(b.textContent || b.innerText) && (y(b, {width: u + "px", display: "block", whiteSpace: n && n.whiteSpace || "normal"}), k = u), this.getSpanCorrection(k, w, h, m, g));
                    y(b, {left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px"});
                    rb && (w = b.offsetHeight);
                    this.cTT =
                    A
                }
            } else
                this.alignOnAdd = !0
        }, setSpanRotation: function(a, b, c) {
            var d = {}, e = Pa ? "-ms-transform" : rb ? "-webkit-transform" : $a ? "MozTransform" : Zb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + ($a ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            y(this.element, d)
        }, getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }});
    O(Ga.prototype, {html: function(a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML =
                        this.textStr = a;
                d.htmlUpdateTransform()
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function(a, b) {
                "align" === b && (b = "textAlign");
                d[b] = a;
                d.htmlUpdateTransform()
            };
            d.attr({text: a, x: K(b), y: K(c)}).css({position: "absolute", fontFamily: this.style.fontFamily, fontSize: this.style.fontSize});
            e.style.whiteSpace = "nowrap";
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode, n = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a; )
                            n.push(a), a = a.parentGroup;
                        x(n.reverse(), function(a) {
                            var d, e = G(a.element,
                                    "class");
                            e && (e = {className: e});
                            b = a.div = a.div || F("div", e, {position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px"}, b || c);
                            d = b.style;
                            O(a, {translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }, translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }});
                            ba(a, "visibilitySetter", function(a, b, c, e) {
                                a.call(this, b, c, e);
                                d[c] = b
                            })
                        })
                    }
                } else
                    b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            });
            return d
        }});
    var lb, Va;
    if (!za && !Ea) {
        Va = {init: function(a,
                    b) {
                var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", "absolute", ";"], e = "div" === b;
                ("shape" === b || e) && d.push("left:0;top:0;width:1px;height:1px;");
                d.push("visibility: ", e ? "hidden" : "visible");
                c.push(' style="', d.join(""), '"/>');
                b && (c = e || "span" === b || "img" === b ? c.join("") : a.prepVML(c), this.element = F(c));
                this.renderer = a
            }, add: function(a) {
                var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                d.appendChild(c);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform &&
                        this.updateTransform();
                if (this.onAdd)
                    this.onAdd();
                return this
            }, updateTransform: ha.prototype.htmlUpdateTransform, setSpanRotation: function() {
                var a = this.rotation, b = wa(a * Ia), c = Ba(a * Ia);
                y(this.element, {filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", b, ", M12=", -c, ", M21=", c, ", M22=", b, ", sizingMethod='auto expand')"].join("") : "none"})
            }, getSpanCorrection: function(a, b, c, d, e) {
                var f = d ? wa(d * Ia) : 1, g = d ? Ba(d * Ia) : 0, h = z(this.elemHeight, this.element.offsetHeight), k;
                this.xCorr = 0 > f && -a;
                this.yCorr = 0 > g && -h;
                k = 0 > f * g;
                this.xCorr += g * b * (k ? 1 - c : c);
                this.yCorr -= f * b * (d ? k ? c : 1 - c : 1);
                e && "left" !== e && (this.xCorr -= a * c * (0 > f ? -1 : 1), d && (this.yCorr -= h * c * (0 > g ? -1 : 1)), y(this.element, {textAlign: e}))
            }, pathToVML: function(a) {
                for (var b = a.length, c = []; b--; )
                    X(a[b]) ? c[b] = K(10 * a[b]) - 5 : "Z" === a[b] ? c[b] = "x" : (c[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (c[b + 5] === c[b + 7] && (c[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), c[b + 6] === c[b + 8] && (c[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)));
                return c.join(" ") || "x"
            }, clip: function(a) {
                var b = this, c;
                a ? (c = a.members, p(c, b), c.push(b), b.destroyClip =
                        function() {
                            p(c, b)
                        }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {clip: qb ? "inherit" : "rect(auto)"});
                return b.css(a)
            }, css: ha.prototype.htmlCss, safeRemoveChild: function(a) {
                a.parentNode && ta(a)
            }, destroy: function() {
                this.destroyClip && this.destroyClip();
                return ha.prototype.destroy.apply(this)
            }, on: function(a, b) {
                this.element["on" + a] = function() {
                    var a = ra.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            }, cutOffPath: function(a, b) {
                var c;
                a = a.split(/[ ,]/);
                c = a.length;
                if (9 === c || 11 === c)
                    a[c - 4] = a[c - 2] = E(a[c - 2]) - 10 * b;
                return a.join(" ")
            }, shadow: function(a, b, c) {
                var d = [], e, f = this.element, g = this.renderer, h, k = f.style, n, m = f.path, w, u, A, N;
                m && "string" !== typeof m.value && (m = "x");
                u = m;
                if (a) {
                    A = z(a.width, 3);
                    N = (a.opacity || .15) / A;
                    for (e = 1; 3 >= e; e++)
                        w = 2 * A + 1 - 2 * e, c && (u = this.cutOffPath(m.value, w + .5)), n = ['<shape isShadow="true" strokeweight="', w, '" filled="false" path="', u, '" coordsize="10 10" style="', f.style.cssText, '" />'], h = F(g.prepVML(n), null, {left: E(k.left) + z(a.offsetX, 1), top: E(k.top) + z(a.offsetY, 1)}), c && (h.cutOff = w + 1), n = ['<stroke color="',
                            a.color || "black", '" opacity="', N * e, '"/>'], F(g.prepVML(n), null, null, h), b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f), d.push(h);
                    this.shadows = d
                }
                return this
            }, updateShadows: ma, setAttr: function(a, b) {
                qb ? this.element[a] = b : this.element.setAttribute(a, b)
            }, classSetter: function(a) {
                this.element.className = a
            }, dashstyleSetter: function(a, b, c) {
                (c.getElementsByTagName("stroke")[0] || F(this.renderer.prepVML(["<stroke/>"]), null, null, c))[b] = a || "solid";
                this[b] = a
            }, dSetter: function(a, b, c) {
                var d = this.shadows;
                a =
                        a || [];
                this.d = a.join && a.join(" ");
                c.path = a = this.pathToVML(a);
                if (d)
                    for (c = d.length; c--; )
                        d[c].path = d[c].cutOff ? this.cutOffPath(a, d[c].cutOff) : a;
                this.setAttr(b, a)
            }, fillSetter: function(a, b, c) {
                var d = c.nodeName;
                "SPAN" === d ? c.style.color = a : "IMG" !== d && (c.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, c, b, this)))
            }, opacitySetter: ma, rotationSetter: function(a, b, c) {
                c = c.style;
                this[b] = c[b] = a;
                c.left = -K(Ba(a * Ia) + 1) + "px";
                c.top = K(wa(a * Ia)) + "px"
            }, strokeSetter: function(a, b, c) {
                this.setAttr("strokecolor",
                        this.renderer.color(a, c, b))
            }, "stroke-widthSetter": function(a, b, c) {
                c.stroked = !!a;
                this[b] = a;
                X(a) && (a += "px");
                this.setAttr("strokeweight", a)
            }, titleSetter: function(a, b) {
                this.setAttr(b, a)
            }, visibilitySetter: function(a, b, c) {
                "inherit" === a && (a = "visible");
                this.shadows && x(this.shadows, function(c) {
                    c.style[b] = a
                });
                "DIV" === c.nodeName && (a = "hidden" === a ? "-999em" : 0, qb || (c.style[b] = a ? "visible" : "hidden"), b = "top");
                c.style[b] = a
            }, xSetter: function(a, b, c) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] =
                        a, this.updateClipping()) : c.style[b] = a
            }, zIndexSetter: function(a, b, c) {
                c.style[b] = a
            }};
        Z.VMLElement = Va = U(ha, Va);
        Va.prototype.ySetter = Va.prototype.widthSetter = Va.prototype.heightSetter = Va.prototype.xSetter;
        var tc = {Element: Va, isIE8: -1 < Qa.indexOf("MSIE 8.0"), init: function(a, b, c, d) {
                var e;
                this.alignedObjects = [];
                d = this.createElement("div").css(O(this.getStyle(d), {position: "relative"}));
                e = d.element;
                a.appendChild(d.element);
                this.isVML = !0;
                this.box = e;
                this.boxWrapper = d;
                this.cache = {};
                this.setSize(b, c, !1);
                if (!aa.namespaces.hcv) {
                    aa.namespaces.add("hcv",
                            "urn:schemas-microsoft-com:vml");
                    try {
                        aa.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (f) {
                        aa.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            }, isHidden: function() {
                return!this.box.offsetWidth
            }, clipRect: function(a, b, c, d) {
                var e = this.createElement(), f = W(a);
                return O(e, {members: [], count: 0, left: (f ? a.x : a) + 1, top: (f ? a.y : b) + 1, width: (f ?
                            a.width : c) - 1, height: (f ? a.height : d) - 1, getCSS: function(a) {
                        var b = a.element, c = b.nodeName;
                        a = a.inverted;
                        var d = this.top - ("shape" === c ? b.offsetTop : 0), e = this.left, b = e + this.width, f = d + this.height, d = {clip: "rect(" + K(a ? e : d) + "px," + K(a ? f : b) + "px," + K(a ? b : f) + "px," + K(a ? d : e) + "px)"};
                        !a && qb && "DIV" === c && O(d, {width: b + "px", height: f + "px"});
                        return d
                    }, updateClipping: function() {
                        x(e.members, function(a) {
                            a.element && a.css(e.getCSS(a))
                        })
                    }})
            }, color: function(a, b, c, d) {
                var e = this, f, g = /^rgba/, h, k, n = "none";
                a && a.linearGradient ? k = "gradient" :
                        a && a.radialGradient && (k = "pattern");
                if (k) {
                    var m, w, u = a.linearGradient || a.radialGradient, A, N, J, l, q, t = "";
                    a = a.stops;
                    var v, z = [], p = function() {
                        h = ['<fill colors="' + z.join(",") + '" opacity="', J, '" o:opacity2="', N, '" type="', k, '" ', t, 'focus="100%" method="any" />'];
                        F(e.prepVML(h), null, null, b)
                    };
                    A = a[0];
                    v = a[a.length - 1];
                    0 < A[0] && a.unshift([0, A[1]]);
                    1 > v[0] && a.push([1, v[1]]);
                    x(a, function(a, b) {
                        g.test(a[1]) ? (f = Ja(a[1]), m = f.get("rgb"), w = f.get("a")) : (m = a[1], w = 1);
                        z.push(100 * a[0] + "% " + m);
                        b ? (J = w, l = m) : (N = w, q = m)
                    });
                    if ("fill" ===
                            c)
                        if ("gradient" === k)
                            c = u.x1 || u[0] || 0, a = u.y1 || u[1] || 0, A = u.x2 || u[2] || 0, u = u.y2 || u[3] || 0, t = 'angle="' + (90 - 180 * pa.atan((u - a) / (A - c)) / Ka) + '"', p();
                        else {
                            var n = u.r, M = 2 * n, D = 2 * n, C = u.cx, r = u.cy, y = b.radialReference, G, n = function() {
                                y && (G = d.getBBox(), C += (y[0] - G.x) / G.width - .5, r += (y[1] - G.y) / G.height - .5, M *= y[2] / G.width, D *= y[2] / G.height);
                                t = 'src="' + oa.global.VMLRadialGradientURL + '" size="' + M + "," + D + '" origin="0.5,0.5" position="' + C + "," + r + '" color2="' + q + '" ';
                                p()
                            };
                            d.added ? n() : d.onAdd = n;
                            n = l
                        }
                    else
                        n = m
                } else
                    g.test(a) && "IMG" !== b.tagName ?
                            (f = Ja(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], F(this.prepVML(h), null, null, b), n = f.get("rgb")) : (n = b.getElementsByTagName(c), n.length && (n[0].opacity = 1, n[0].type = "solid"), n = a);
                return n
            }, prepVML: function(a) {
                var b = this.isIE8;
                a = a.join("");
                b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = -1 === a.indexOf('style="') ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<",
                        "<hcv:");
                return a
            }, text: Ga.prototype.html, path: function(a) {
                var b = {coordsize: "10 10"};
                R(a) ? b.d = a : W(a) && O(b, a);
                return this.createElement("shape").attr(b)
            }, circle: function(a, b, c) {
                var d = this.symbol("circle");
                W(a) && (c = a.r, b = a.y, a = a.x);
                d.isCircle = !0;
                d.r = c;
                return d.attr({x: a, y: b})
            }, g: function(a) {
                var b;
                a && (b = {className: "highcharts-" + a, "class": "highcharts-" + a});
                return this.createElement("div").attr(b)
            }, image: function(a, b, c, d, e) {
                var f = this.createElement("img").attr({src: a});
                1 < arguments.length && f.attr({x: b,
                    y: c, width: d, height: e});
                return f
            }, createElement: function(a) {
                return"rect" === a ? this.symbol(a) : Ga.prototype.createElement.call(this, a)
            }, invertChild: function(a, b) {
                var c = this, d = b.style, e = "IMG" === a.tagName && a.style;
                y(a, {flip: "x", left: E(d.width) - (e ? E(e.top) : 1), top: E(d.height) - (e ? E(e.left) : 1), rotation: -90});
                x(a.childNodes, function(b) {
                    c.invertChild(b, a)
                })
            }, symbols: {arc: function(a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d;
                    c = e.innerR;
                    d = wa(f);
                    var k = Ba(f), n = wa(g), m = Ba(g);
                    if (0 === g - f)
                        return["x"];
                    f = ["wa", a - h, b - h,
                        a + h, b + h, a + h * d, b + h * k, a + h * n, b + h * m];
                    e.open && !c && f.push("e", "M", a, b);
                    f.push("at", a - c, b - c, a + c, b + c, a + c * n, b + c * m, a + c * d, b + c * k, "x", "e");
                    f.isArc = !0;
                    return f
                }, circle: function(a, b, c, d, e) {
                    e && (c = d = 2 * e.r);
                    e && e.isCircle && (a -= c / 2, b -= d / 2);
                    return["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                }, rect: function(a, b, c, d, e) {
                    return Ga.prototype.symbols[t(e) && e.r ? "callout" : "square"].call(0, a, b, c, d, e)
                }}};
        Z.VMLRenderer = lb = function() {
            this.init.apply(this, arguments)
        };
        lb.prototype = r(Ga.prototype, tc);
        ab = lb
    }
    Ga.prototype.measureSpanWidth =
            function(a, b) {
                var c = aa.createElement("span"), d;
                d = aa.createTextNode(a);
                c.appendChild(d);
                y(c, b);
                this.box.appendChild(c);
                d = c.offsetWidth;
                ta(c);
                return d
            };
    var Lb, ac;
    Ea && (Z.CanVGRenderer = Lb = function() {
        Ta = "http://www.w3.org/1999/xhtml"
    }, Lb.prototype.symbols = {}, ac = function() {
        function a() {
            var a = b.length, d;
            for (d = 0; d < a; d++)
                b[d]();
            b = []
        }
        var b = [];
        return{push: function(c, d) {
                0 === b.length && mc(d, a);
                b.push(c)
            }}
    }(), ab = Lb);
    Za.prototype = {addLabel: function() {
            var a = this.axis, b = a.options, c = a.chart, d = a.categories, e = a.names,
                    f = this.pos, g = b.labels, h = a.tickPositions, k = f === h[0], n = f === h[h.length - 1], e = d ? z(d[f], e[f], f) : f, d = this.label, h = h.info, m;
            a.isDatetimeAxis && h && (m = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = k;
            this.isLast = n;
            b = a.labelFormatter.call({axis: a, chart: c, isFirst: k, isLast: n, dateTimeLabelFormat: m, value: a.isLog ? ua(C(e)) : e});
            t(d) ? d && d.attr({text: b}) : (this.labelLength = (this.label = d = t(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).css(r(g.style)).add(a.labelGroup) : null) && d.getBBox().width, this.rotation =
                    0)
        }, getLabelSize: function() {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
        }, handleOverflow: function(a) {
            var b = this.axis, c = a.x, d = b.chart.chartWidth, e = b.chart.spacing, f = z(b.labelLeft, T(b.pos, e[3])), e = z(b.labelRight, L(b.pos + b.len, d - e[1])), g = this.label, h = this.rotation, k = {left: 0, center: .5, right: 1}[b.labelAlign], n = g.getBBox().width, m = b.slotWidth, w = 1, u, A = {};
            if (h)
                0 > h && c - k * n < f ? u = K(c / wa(h * Ia) - f) : 0 < h && c + k * n > e && (u = K((d - c) / wa(h * Ia)));
            else if (d = c + (1 - k) * n, c - k * n < f ? m = a.x + m * (1 - k) - f : d > e &&
                    (m = e - a.x + m * k, w = -1), m = T(b.slotWidth, m), m < b.slotWidth && "center" === b.labelAlign && (a.x += w * (b.slotWidth - m - k * (b.slotWidth - T(n, m)))), n > m || b.autoRotation && g.styles.width)
                u = m;
            u && (A.width = u, b.options.labels.style.textOverflow || (A.textOverflow = "ellipsis"), g.css(A))
        }, getPosition: function(a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return{x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset -
                        (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB}
        }, getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var k = this.axis, n = k.transA, m = k.reversed, w = k.staggerLines, u = k.tickRotCorr || {x: 0, y: 0};
            c = z(e.y, u.y + (2 === k.side ? 8 : -(c.getBBox().height / 2)));
            a = a + e.x + u.x - (f && d ? f * n * (m ? -1 : 1) : 0);
            b = b + c - (f && !d ? f * n * (m ? 1 : -1) : 0);
            w && (b += g / (h || 1) % w * (k.labelOffset / w));
            return{x: a, y: K(b)}
        }, getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function(a, b, c) {
            var d = this.axis, e = d.options,
                    f = d.chart.renderer, g = d.horiz, h = this.type, k = this.label, n = this.pos, m = e.labels, w = this.gridLine, u = h ? h + "Grid" : "grid", A = h ? h + "Tick" : "tick", N = e[u + "LineWidth"], J = e[u + "LineColor"], l = e[u + "LineDashStyle"], q = e[A + "Length"], u = z(e[A + "Width"], !h && d.isXAxis ? 1 : 0), t = e[A + "Color"], v = e[A + "Position"], A = this.mark, p = m.step, M = !0, D = d.tickmarkOffset, x = this.getPosition(g, n, D, b), C = x.x, x = x.y, r = g && C === d.pos + d.len || !g && x === d.pos ? -1 : 1;
            c = z(c, 1);
            this.isActive = !0;
            if (N && (n = d.getPlotLinePath(n + D, N * r, b, !0), w === H && (w = {stroke: J, "stroke-width": N},
            l && (w.dashstyle = l), h || (w.zIndex = 1), b && (w.opacity = 0), this.gridLine = w = N ? f.path(n).attr(w).add(d.gridGroup) : null), !b && w && n))
                w[this.isNew ? "attr" : "animate"]({d: n, opacity: c});
            u && q && ("inside" === v && (q = -q), d.opposite && (q = -q), h = this.getMarkPath(C, x, q, u * r, g, f), A ? A.animate({d: h, opacity: c}) : this.mark = f.path(h).attr({stroke: t, "stroke-width": u, opacity: c}).add(d.axisGroup));
            k && !isNaN(C) && (k.xy = x = this.getLabelPosition(C, x, k, g, m, D, a, p), this.isFirst && !this.isLast && !z(e.showFirstLabel, 1) || this.isLast && !this.isFirst &&
                    !z(e.showLastLabel, 1) ? M = !1 : !g || d.isRadial || m.step || m.rotation || b || 0 === c || this.handleOverflow(x), p && a % p && (M = !1), M && !isNaN(x.y) ? (x.opacity = c, k[this.isNew ? "attr" : "animate"](x), this.isNew = !1) : k.attr("y", -9999))
        }, destroy: function() {
            ka(this, this.axis)
        }};
    Z.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id)
    };
    Z.PlotLineOrBand.prototype = {render: function() {
            var a = this, b = a.axis, c = b.horiz, d = a.options, e = d.label, f = a.label, g = d.width, h = d.to, k = d.from, n = t(k) && t(h), m = d.value, w = d.dashStyle, u = a.svgElem,
                    A = [], N, J = d.color, l = d.zIndex, q = d.events, v = {}, p = b.chart.renderer;
            b.isLog && (k = S(k), h = S(h), m = S(m));
            if (g)
                A = b.getPlotLinePath(m, g), v = {stroke: J, "stroke-width": g}, w && (v.dashstyle = w);
            else if (n)
                A = b.getPlotBandPath(k, h, d), J && (v.fill = J), d.borderWidth && (v.stroke = d.borderColor, v["stroke-width"] = d.borderWidth);
            else
                return;
            t(l) && (v.zIndex = l);
            if (u)
                A ? u.animate({d: A}, null, u.onGetPath) : (u.hide(), u.onGetPath = function() {
                    u.show()
                }, f && (a.label = f = f.destroy()));
            else if (A && A.length && (a.svgElem = u = p.path(A).attr(v).add(), q))
                for (N in d =
                        function(b) {
                            u.on(b, function(c) {
                                q[b].apply(a, [c])
                            })
                        }, q)
                    d(N);
            e && t(e.text) && A && A.length && 0 < b.width && 0 < b.height ? (e = r({align: c && n && "center", x: c ? !n && 4 : 10, verticalAlign: !c && n && "middle", y: c ? n ? 16 : 10 : n ? 6 : -4, rotation: c && !n && 90}, e), f || (v = {align: e.textAlign || e.align, rotation: e.rotation}, t(l) && (v.zIndex = l), a.label = f = p.text(e.text, 0, 0, e.useHTML).attr(v).css(e.style).add()), b = [A[1], A[4], n ? A[6] : A[1]], n = [A[2], A[5], n ? A[7] : A[2]], A = D(b), c = D(n), f.align(e, !1, {x: A, y: c, width: qa(b) - A, height: qa(n) - c}), f.show()) : f && f.hide();
            return a
        }, destroy: function() {
            p(this.axis.plotLinesAndBands, this);
            delete this.axis;
            ka(this)
        }};
    var fa = Z.Axis = function() {
        this.init.apply(this, arguments)
    };
    fa.prototype = {defaultOptions: {dateTimeLabelFormats: {millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"}, endOnTick: !1, gridLineColor: "#D8D8D8", labels: {enabled: !0, style: {color: "#606060", cursor: "default", fontSize: "11px"}, x: 0, y: 15}, lineColor: "#C0D0E0", lineWidth: 1, minPadding: .01, maxPadding: .01,
            minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", title: {align: "middle", style: {color: "#707070"}}, type: "linear"}, defaultYAxisOptions: {endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: {x: -8, y: 3}, lineWidth: 0, maxPadding: .05, minPadding: .05, startOnTick: !0, title: {rotation: 270,
                text: "Values"}, stackLabels: {enabled: !1, formatter: function() {
                    return Z.numberFormat(this.total, -1)
                }, style: r(da.line.dataLabels.style, {color: "#000000"})}}, defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}}, defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}}, defaultBottomAxisOptions: {labels: {autoRotation: [-45], x: 0, y: null}, title: {rotation: 0}}, defaultTopAxisOptions: {labels: {autoRotation: [-45], x: 0, y: -15}, title: {rotation: 0}}, init: function(a, b) {
            var c = b.isX;
            this.chart = a;
            this.horiz =
                    a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d = this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.reversed = d.reversed;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories || "category" === e;
            this.names = this.names || [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" ===
                    e;
            this.isLinked = t(d.linkedTo);
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.stacksTouched = 0;
            this.min = this.max = null;
            this.crosshair = z(d.crosshair, B(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            -1 === Ua(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this),
                    a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === H && (this.reversed = !0);
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            for (f in d)
                ca(this, f, d[f]);
            this.isLog && (this.val2lin = S, this.lin2val = C)
        }, setOptions: function(a) {
            this.options = r(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], r(oa[this.coll], a))
        }, defaultLabelFormatter: function() {
            var a =
                    this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = oa.lang.numericSymbols, f = e && e.length, g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h)
                g = v(h, this);
            else if (c)
                g = b;
            else if (d)
                g = Ca(d, b);
            else if (f && 1E3 <= a)
                for (; f-- && g === H; )
                    c = Math.pow(1E3, f + 1), a >= c && 0 === 10 * b % c && null !== e[f] && (g = Z.numberFormat(b / c, -1) + e[f]);
            g === H && (g = 1E4 <= la(b) ? Z.numberFormat(b, -1) : Z.numberFormat(b, -1, H, ""));
            return g
        }, getSeriesExtremes: function() {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = a.ignoreMinPadding =
                    a.ignoreMaxPadding = null;
            a.buildStacks && a.buildStacks();
            x(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries = !0;
                    a.isLog && 0 >= d && (d = null);
                    a.isXAxis ? (d = c.xData, d.length && (a.dataMin = T(z(a.dataMin, d[0]), D(d)), a.dataMax = L(z(a.dataMax, d[0]), qa(d)))) : (c.getExtremes(), e = c.dataMax, c = c.dataMin, t(c) && t(e) && (a.dataMin = T(z(a.dataMin, c), c), a.dataMax = L(z(a.dataMax, e), e)), t(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax =
                            d, a.ignoreMaxPadding = !0)))
                }
            })
        }, translate: function(a, b, c, d, e, f) {
            var g = this.linkedParent || this, h = 1, k = 0, n = d ? g.oldTransA : g.transA;
            d = d ? g.oldMin : g.min;
            var m = g.minPixelPadding;
            e = (g.doPostTranslate || g.isLog && e) && g.lin2val;
            n || (n = g.transA);
            c && (h *= -1, k = g.len);
            g.reversed && (h *= -1, k -= h * (g.sector || g.len));
            b ? (a = a * h + k - m, a = a / n + d, e && (a = g.lin2val(a))) : (e && (a = g.val2lin(a)), "between" === f && (f = .5), a = h * (a - d) * n + k + h * m + (X(f) ? n * f * g.pointRange : 0));
            return a
        }, toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) +
                    (b ? 0 : this.pos)
        }, toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        }, getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart, g = this.left, h = this.top, k, n, m = c && f.oldChartHeight || f.chartHeight, w = c && f.oldChartWidth || f.chartWidth, u;
            k = this.transB;
            var A = function(a, b, c) {
                if (a < b || a > c)
                    d ? a = T(L(b, a), c) : u = !0;
                return a
            };
            e = z(e, this.translate(a, null, null, c));
            a = c = K(e + k);
            k = n = K(m - e - k);
            isNaN(e) ? u = !0 : this.horiz ? (k = h, n = m - this.bottom, a = c = A(a, g, g + this.width)) : (a = g, c = w - this.right, k = n = A(k, h, h + this.height));
            return u && !d ? null : f.renderer.crispLine(["M", a, k, "L", c, n], b || 1)
        }, getLinearTickPositions: function(a, b, c) {
            var d, e = ua(ja(b / a) * a), f = ua(Na(c / a) * a), g = [];
            if (b === c && X(b))
                return[b];
            for (b = e; b <= f; ) {
                g.push(b);
                b = ua(b + a);
                if (b === d)
                    break;
                d = b
            }
            return g
        }, getMinorTickPositions: function() {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e, f = this.pointRangePadding || 0;
            e = this.min - f;
            var f = this.max + f, g = f - e;
            if (g && g / c < this.len / 3)
                if (this.isLog)
                    for (f = b.length, e = 1; e < f; e++)
                        d = d.concat(this.getLogTickPositions(c,
                                b[e - 1], b[e], !0));
                else if (this.isDatetimeAxis && "auto" === a.minorTickInterval)
                    d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), e, f, a.startOfWeek));
                else
                    for (b = e + (b[0] - e) % c; b <= f; b += c)
                        d.push(b);
            0 !== d.length && this.trimTicks(d, a.startOnTick, a.endOnTick);
            return d
        }, adjustForMinRange: function() {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, k, n;
            this.isXAxis && this.minRange === H && !this.isLog && (t(a.min) || t(a.max) ? this.minRange = null : (x(this.series, function(a) {
                k =
                        a.xData;
                for (g = n = a.xIncrement?1:k.length - 1; 0 < g; g--)
                    if (h = k[g] - k[g - 1], f === H || h < f)
                        f = h
            }), this.minRange = T(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var m = this.minRange;
                d = (m - c + b) / 2;
                d = [b - d, z(a.min, b - d)];
                e && (d[2] = this.dataMin);
                b = qa(d);
                c = [b + m, z(a.max, b + m)];
                e && (c[2] = this.dataMax);
                c = D(c);
                c - b < m && (d[0] = c - m, d[1] = z(a.min, c - m), b = qa(d))
            }
            this.min = b;
            this.max = c
        }, setAxisTranslation: function(a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, k = !!b.categories, n = b.transA, m = b.isXAxis;
            if (m || k || d)
                h ? (f = h.minPointOffset, g = h.pointRangePadding) : x(b.series, function(a) {
                    var h = k ? 1 : m ? a.pointRange : b.axisPointRange || 0, n = a.options.pointPlacement, N = a.closestPointRange;
                    h > c && (h = 0);
                    d = L(d, h);
                    b.single || (f = L(f, Y(n) ? 0 : h / 2), g = L(g, "on" === n ? 0 : h));
                    !a.noSharedTooltip && t(N) && (e = t(e) ? T(e, N) : N)
                }), h = b.ordinalSlope && e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = T(d, c), m && (b.closestPointRange = e);
            a && (b.oldTransA = n);
            b.translationSlope = b.transA = n = b.len / (c + g || 1);
            b.transB = b.horiz ?
                    b.left : b.bottom;
            b.minPixelPadding = n * f
        }, minFromRange: function() {
            return this.max - this.range
        }, setTickInterval: function(a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, k = d.maxPadding, n = d.minPadding, m = d.tickInterval, w = d.tickPixelInterval, u = b.categories;
            f || u || h || this.getTickAmount();
            h ? (b.linkedParent = c[b.coll][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = z(c.min, c.dataMin), b.max = z(c.max, c.dataMax), d.type !== b.linkedParent.options.type && P(11, 1)) : (b.min = z(b.userMin,
                    d.min, b.dataMin), b.max = z(b.userMax, d.max, b.dataMax));
            e && (!a && 0 >= T(b.min, z(b.dataMin, b.min)) && P(10, 1), b.min = ua(S(b.min), 15), b.max = ua(S(b.max), 15));
            b.range && t(b.max) && (b.userMin = b.min = L(b.min, b.minFromRange()), b.userMax = b.max, b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(u || b.axisPointRange || b.usePercentage || h) && t(b.min) && t(b.max) && (c = b.max - b.min) && (t(d.min) || t(b.userMin) || !n || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * n), t(d.max) || t(b.userMax) || !k || !(0 < b.dataMax) && b.ignoreMaxPadding ||
                    (b.max += c * k));
            X(d.floor) && (b.min = L(b.min, d.floor));
            X(d.ceiling) && (b.max = T(b.max, d.ceiling));
            b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : h && !m && w === b.linkedParent.options.tickPixelInterval ? m = b.linkedParent.tickInterval : z(m, this.tickAmount ? (b.max - b.min) / L(this.tickAmount - 1, 1) : void 0, u ? 1 : (b.max - b.min) * w / L(b.len, w));
            g && !a && x(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval &&
                    (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = L(b.pointRange, b.tickInterval));
            a = z(d.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
            !m && b.tickInterval < a && (b.tickInterval = a);
            f || e || m || (b.tickInterval = q(b.tickInterval, null, l(b.tickInterval), z(d.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
            !this.tickAmount && this.len && (b.tickInterval = b.unsquish());
            this.setTickPositions()
        }, setTickPositions: function() {
            var a =
                    this.options, b, c = a.tickPositions, d = a.tickPositioner, e = a.startOnTick, f = a.endOnTick, g;
            this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
            this.tickPositions = b = c && c.slice();
            !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange,
                    !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max]))) && (this.tickPositions = b = d);
            this.isLinked || (this.trimTicks(b, e, f), this.min === this.max && t(this.min) && !this.tickAmount && (g = !0, this.min -= .5, this.max += .5), this.single = g, c || d || this.adjustTickAmount())
        }, trimTicks: function(a, b, c) {
            var d = a[0], e = a[a.length - 1], f = this.minPointOffset ||
                    0;
            b ? this.min = d : this.min - f > d && a.shift();
            c ? this.max = e : this.max + f < e && a.pop();
            0 === a.length && t(d) && a.push((e + d) / 2)
        }, getTickAmount: function() {
            var a = {}, b, c = this.options, d = c.tickAmount, e = c.tickPixelInterval;
            !t(c.tickInterval) && this.len < e && !this.isRadial && !this.isLog && c.startOnTick && c.endOnTick && (d = 2);
            d || !1 === this.chart.options.chart.alignTicks || !1 === c.alignTicks || (x(this.chart[this.coll], function(c) {
                var d = c.options, e = c.horiz, d = [e ? d.left : d.top, e ? d.width : d.height, d.pane].join();
                a[d] ? c.series.length && (b = !0) :
                        a[d] = 1
            }), b && (d = Na(this.len / e) + 1));
            4 > d && (this.finalTickAmt = d, d = 5);
            this.tickAmount = d
        }, adjustTickAmount: function() {
            var a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, d = this.finalTickAmt, e = b && b.length;
            if (e < c) {
                for (; b.length < c; )
                    b.push(ua(b[b.length - 1] + a));
                this.transA *= (e - 1) / (c - 1);
                this.max = b[b.length - 1]
            } else
                e > c && (this.tickInterval *= 2, this.setTickPositions());
            if (t(d)) {
                for (a = c = b.length; a--; )
                    (3 === d && 1 === a % 2 || 2 >= d && 0 < a && a < c - 1) && b.splice(a, 1);
                this.finalTickAmt = H
            }
        }, setScale: function() {
            var a, b;
            this.oldMin =
                    this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            b = this.len !== this.oldAxisLength;
            x(this.series, function(b) {
                if (b.isDirtyData || b.isDirty || b.xAxis.isDirty)
                    a = !0
            });
            b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin ||
                    this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        }, setExtremes: function(a, b, c, d, e) {
            var f = this, g = f.chart;
            c = z(c, !0);
            x(f.series, function(a) {
                delete a.kdTree
            });
            e = O(e, {min: a, max: b});
            na(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                c && g.redraw(d)
            })
        }, zoom: function(a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options, f = T(c, z(e.min, c)), e = L(d, z(e.max, d));
            this.allowZoomOutside || (t(c) && a <= f && (a = f), t(d) && b >= e && (b = e));
            this.displayBtn = a !== H || b !== H;
            this.setExtremes(a, b, !1, H, {trigger: "zoom"});
            return!0
        }, setAxisSize: function() {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = z(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = z(b.height, a.plotHeight), g = z(b.top, a.plotTop), b = z(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseFloat(f) / 100 * a.plotHeight);
            c.test(g) && (g = parseFloat(g) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f - g;
            this.right = a.chartWidth - e - b;
            this.len = L(d ? e : f, 0);
            this.pos = d ? b : g
        }, getExtremes: function() {
            var a = this.isLog;
            return{min: a ? ua(C(this.min)) : this.min, max: a ? ua(C(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax}
        }, getThreshold: function(a) {
            var b = this.isLog, c = b ? C(this.min) : this.min, b = b ? C(this.max) : this.max;
            null === a ? a = 0 > b ? b : c : c > a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        }, autoLabelAlign: function(a) {
            a = (z(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
        }, unsquish: function() {
            var a = this.ticks, b = this.options.labels, c = this.horiz,
                    d = this.tickInterval, e = d, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d), g, h = b.rotation, k = this.chart.renderer.fontMetrics(b.style.fontSize, a[0] && a[0].label), n, m = Number.MAX_VALUE, w, u = function(a) {
                a /= f || 1;
                a = 1 < a ? Na(a) : 1;
                return a * d
            };
            c ? (w = t(h) ? [h] : f < z(b.autoRotationLimit, 80) && !b.staggerLines && !b.step && b.autoRotation) && x(w, function(a) {
                var b;
                if (a === h || a && -90 <= a && 90 >= a)
                    n = u(la(k.h / Ba(Ia * a))), b = n + la(a / 360), b < m && (m = b, g = a, e = n)
            }) : b.step || (e = u(k.h));
            this.autoRotation = w;
            this.labelRotation = g;
            return e
        }, renderUnsquish: function() {
            var a =
                    this.chart, b = a.renderer, c = this.tickPositions, d = this.ticks, e = this.options.labels, f = this.horiz, g = a.margin, h = this.categories ? c.length : c.length - 1, k = this.slotWidth = f && !e.step && !e.rotation && (this.staggerLines || 1) * a.plotWidth / h || !f && (g[3] && g[3] - a.spacing[3] || .33 * a.chartWidth), n = L(1, K(k - 2 * (e.padding || 5))), m = {}, g = b.fontMetrics(e.style.fontSize, d[0] && d[0].label), h = e.style.textOverflow, w, u = 0;
            Y(e.rotation) || (m.rotation = e.rotation || 0);
            if (this.autoRotation)
                x(c, function(a) {
                    (a = d[a]) && a.labelLength > u && (u = a.labelLength)
                }),
                        u > n && u > g.h ? m.rotation = this.labelRotation : this.labelRotation = 0;
            else if (k && (w = {width: n + "px"}, !h))
                for (w.textOverflow = "clip", k = c.length; !f && k--; )
                    if (n = c[k], n = d[n].label)
                        "ellipsis" === n.styles.textOverflow && n.css({textOverflow: "clip"}), n.getBBox().height > this.len / c.length - (g.h - g.f) && (n.specCss = {textOverflow: "ellipsis"});
            m.rotation && (w = {width: (u > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"}, h || (w.textOverflow = "ellipsis"));
            this.labelAlign = m.align = e.align || this.autoLabelAlign(this.labelRotation);
            x(c, function(a) {
                var b = (a = d[a]) && a.label;
                b && (w && b.css(r(w, b.specCss)), delete b.specCss, b.attr(m), a.rotation = m.rotation)
            });
            this.tickRotCorr = b.rotCorr(g.b, this.labelRotation || 0, 2 === this.side)
        }, hasData: function() {
            return this.hasVisibleSeries || t(this.min) && t(this.max) && !!this.tickPositions
        }, getOffset: function() {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, k = b.inverted ? [1, 0, 3, 2][h] : h, n, m, w = 0, u, A = 0, N = d.title, J = d.labels, l = 0, q = b.axisOffset, b = b.clipOffset, v = [-1,
                1, 1, -1][h], p;
            n = a.hasData();
            a.showAxis = m = n || z(d.showEmpty, !0);
            a.staggerLines = a.horiz && J.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({zIndex: d.gridZIndex || 1}).add(), a.axisGroup = c.g("axis").attr({zIndex: d.zIndex || 2}).add(), a.labelGroup = c.g("axis-labels").attr({zIndex: J.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add());
            if (n || a.isLinked)
                x(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new Za(a, b)
                }), a.renderUnsquish(), x(e, function(b) {
                    if (0 === h || 2 === h || {1: "left", 3: "right"}[h] ===
                            a.labelAlign)
                        l = L(f[b].getLabelSize(), l)
                }), a.staggerLines && (l *= a.staggerLines, a.labelOffset = l);
            else
                for (p in f)
                    f[p].destroy(), delete f[p];
            N && N.text && !1 !== N.enabled && (a.axisTitle || (a.axisTitle = c.text(N.text, 0, 0, N.useHTML).attr({zIndex: 7, rotation: N.rotation || 0, align: N.textAlign || {low: "left", middle: "center", high: "right"}[N.align]}).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(N.style).add(a.axisGroup), a.axisTitle.isNew = !0), m && (w = a.axisTitle.getBBox()[g ? "height" : "width"], u = N.offset, A = t(u) ?
                    0 : z(N.margin, g ? 5 : 10)), a.axisTitle[m ? "show" : "hide"]());
            a.offset = v * z(d.offset, q[h]);
            a.tickRotCorr = a.tickRotCorr || {x: 0, y: 0};
            c = 2 === h ? a.tickRotCorr.y : 0;
            g = l + A + (l && v * (g ? z(J.y, a.tickRotCorr.y + 8) : J.x) - c);
            a.axisTitleMargin = z(u, g);
            q[h] = L(q[h], a.axisTitleMargin + w + v * a.offset, g);
            d = d.offset ? 0 : 2 * ja(d.lineWidth / 2);
            b[k] = L(b[k], d)
        }, getLinePath: function(a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M",
                e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        }, getTitlePosition: function() {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, k = e.x || 0, n = e.y || 0, m = E(e.style.fontSize || 12), d = {low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0)}[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? m : 0);
            return{x: a ? d + k : b + (g ? this.width : 0) + h + k, y: a ? b + n - (g ? this.height : 0) + h : d + n}
        }, render: function() {
            var a =
                    this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, k = a.ticks, n = a.minorTicks, m = a.alternateBands, w = d.stackLabels, u = d.alternateGridColor, A = a.tickmarkOffset, N = d.lineWidth, J, l = b.hasRendered && t(a.oldMin) && !isNaN(a.oldMin), q = a.showAxis, v = c.globalAnimation, p, z;
            a.labelEdge.length = 0;
            a.overlap = !1;
            x([k, n, m], function(a) {
                for (var b in a)
                    a[b].isActive = !1
            });
            if (a.hasData() || f)
                a.minorTickInterval && !a.categories && x(a.getMinorTickPositions(), function(b) {
                    n[b] || (n[b] = new Za(a,
                            b, "minor"));
                    l && n[b].isNew && n[b].render(null, !0);
                    n[b].render(null, !1, 1)
                }), g.length && (x(g, function(b, c) {
                    if (!f || b >= a.min && b <= a.max)
                        k[b] || (k[b] = new Za(a, b)), l && k[b].isNew && k[b].render(c, !0, .1), k[b].render(c)
                }), A && (0 === a.min || a.single) && (k[-1] || (k[-1] = new Za(a, -1, null, !0)), k[-1].render(-1))), u && x(g, function(b, c) {
                    0 === c % 2 && b < a.max && (m[b] || (m[b] = new Z.PlotLineOrBand(a)), p = b + A, z = g[c + 1] !== H ? g[c + 1] + A : a.max, m[b].options = {from: e ? C(p) : p, to: e ? C(z) : z, color: u}, m[b].render(), m[b].isActive = !0)
                }), a._addedPlotLB || (x((d.plotLines ||
                []).concat(d.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0);
            x([k, n, m], function(a) {
                var c, d, e = [], f = v ? v.duration || 500 : 0, g = function() {
                    for (d = e.length; d--; )
                        a[e[d]] && !a[e[d]].isActive && (a[e[d]].destroy(), delete a[e[d]])
                };
                for (c in a)
                    a[c].isActive || (a[c].render(c, !1, 0), a[c].isActive = !1, e.push(c));
                a !== m && b.hasRendered && f ? f && setTimeout(g, f) : g()
            });
            N && (J = a.getLinePath(N), a.axisLine ? a.axisLine.animate({d: J}) : a.axisLine = c.path(J).attr({stroke: d.lineColor, "stroke-width": N, zIndex: 7}).add(a.axisGroup),
                    a.axisLine[q ? "show" : "hide"]());
            h && q && (h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1);
            w && w.enabled && a.renderStackTotals();
            a.isDirty = !1
        }, redraw: function() {
            this.render();
            x(this.plotLinesAndBands, function(a) {
                a.render()
            });
            x(this.series, function(a) {
                a.isDirty = !0
            })
        }, destroy: function(a) {
            var b = this, c = b.stacks, d, e = b.plotLinesAndBands;
            a || sa(b);
            for (d in c)
                ka(c[d]), c[d] = null;
            x([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                ka(a)
            });
            for (a = e.length; a--; )
                e[a].destroy();
            x("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "),
                    function(a) {
                        b[a] && (b[a] = b[a].destroy())
                    });
            this.cross && this.cross.destroy()
        }, drawCrosshair: function(a, b) {
            var c, d = this.crosshair, e = d.animation;
            if (!this.crosshair || !1 === (t(b) || !z(this.crosshair.snap, !0)) || b && b.series && b.series[this.coll] !== this)
                this.hideCrosshair();
            else if (z(d.snap, !0) ? t(b) && (c = this.isXAxis ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos, c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : z(b.stackY, b.y)) || null : this.getPlotLinePath(null, null, null,
                    null, c) || null, null === c)
                this.hideCrosshair();
            else if (this.cross)
                this.cross.attr({visibility: "visible"})[e ? "animate" : "attr"]({d: c}, e);
            else
                e = this.categories && !this.isRadial, e = {"stroke-width": d.width || (e ? this.transA : 1), stroke: d.color || (e ? "rgba(155,200,255,0.2)" : "#C0C0C0"), zIndex: d.zIndex || 2}, d.dashStyle && (e.dashstyle = d.dashStyle), this.cross = this.chart.renderer.path(c).attr(e).add()
        }, hideCrosshair: function() {
            this.cross && this.cross.hide()
        }};
    O(fa.prototype, {getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b,
                    null, null, !0), d = this.getPlotLinePath(a, null, null, !0);
            d && c && d.toString() !== c.toString() ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        }, addPlotBand: function(a) {
            return this.addPlotBandOrLine(a, "plotBands")
        }, addPlotLine: function(a) {
            return this.addPlotBandOrLine(a, "plotLines")
        }, addPlotBandOrLine: function(a, b) {
            var c = (new Z.PlotLineOrBand(this, a)).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] || [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        }, removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands,
                    c = this.options, d = this.userOptions, e = b.length; e--; )
                b[e].id === a && b[e].destroy();
            x([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--; )
                    b[e].id === a && p(b, b[e])
            })
        }});
    fa.prototype.getTimeTicks = function(a, b, c, d) {
        var e = [], f = {}, g = oa.global.useUTC, h, k = new Aa(b - V(b)), n = a.unitRange, m = a.count;
        if (t(b)) {
            k[Ub](n >= ia.second ? 0 : m * ja(k.getMilliseconds() / m));
            if (n >= ia.second)
                k[Vb](n >= ia.minute ? 0 : m * ja(k.getSeconds() / m));
            if (n >= ia.minute)
                k[Wb](n >= ia.hour ? 0 : m * ja(k[Cb]() / m));
            if (n >=
                    ia.hour)
                k[Xb](n >= ia.day ? 0 : m * ja(k[Db]() / m));
            if (n >= ia.day)
                k[Fb](n >= ia.month ? 1 : m * ja(k[db]() / m));
            n >= ia.month && (k[Gb](n >= ia.year ? 0 : m * ja(k[eb]() / m)), h = k[fb]());
            if (n >= ia.year)
                k[Hb](h - h % m);
            if (n === ia.week)
                k[Fb](k[db]() - k[Eb]() + z(d, 1));
            b = 1;
            if (Bb || nb)
                k = k.getTime(), k = new Aa(k + V(k));
            h = k[fb]();
            d = k.getTime();
            for (var w = k[eb](), u = k[db](), A = (ia.day + (g ? V(k) : 6E4 * k.getTimezoneOffset())) % ia.day; d < c; )
                e.push(d), d = n === ia.year ? pb(h + b * m, 0) : n === ia.month ? pb(h, w + b * m) : g || n !== ia.day && n !== ia.week ? d + n * m : pb(h, w, u + b * m * (n === ia.day ? 1 :
                        7)), b++;
            e.push(d);
            x(ib(e, function(a) {
                return n <= ia.hour && a % ia.day === A
            }), function(a) {
                f[a] = "day"
            })
        }
        e.info = O(a, {higherRanks: f, totalRange: n * m});
        return e
    };
    fa.prototype.normalizeTimeTickInterval = function(a, b) {
        var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = ia[d[0]], f = d[1], g;
        for (g = 0; g < c.length && !(d = c[g], e = ia[d[0]], f = d[1], c[g + 1] && a <=
                (e * f[f.length - 1] + ia[c[g + 1][0]]) / 2); g++)
            ;
        e === ia.year && a < 5 * e && (f = [1, 2, 5]);
        c = q(a / e, f, "year" === d[0] ? L(l(a / e), 1) : 1);
        return{unitRange: e, count: c, unitName: d[0]}
    };
    fa.prototype.getLogTickPositions = function(a, b, c, d) {
        var e = this.options, f = this.len, g = [];
        d || (this._minorAutoInterval = null);
        if (.5 <= a)
            a = K(a), g = this.getLinearTickPositions(a, b, c);
        else if (.08 <= a)
            for (var f = ja(b), h, k, n, m, w, e = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !w; f++)
                for (k = e.length, h = 0; h < k && !w; h++)
                    n = S(C(f) * e[h]), n > b && (!d || m <= c) && m !==
                            H && g.push(m), m > c && (w = !0), m = n;
        else
            b = C(b), c = C(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = z("auto" === a ? null : a, this._minorAutoInterval, e.tickPixelInterval / (d ? 5 : 1) * (c - b) / ((d ? f / this.tickPositions.length : f) || 1)), a = q(a, null, l(a)), g = La(this.getLinearTickPositions(a, b, c), S), d || (this._minorAutoInterval = a / 5);
        d || (this.tickInterval = a);
        return g
    };
    var Mb = Z.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Mb.prototype = {init: function(a, b) {
            var c = b.borderWidth, d = b.style, e = E(d.padding);
            this.chart = a;
            this.options =
                    b;
            this.crosshairs = [];
            this.now = {x: 0, y: 0};
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout", null, null, b.useHTML, null, "tooltip").attr({padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8}).css(d).css({padding: 0}).add().attr({y: -9999});
            Ea || this.label.shadow(b.shadow);
            this.shared = b.shared
        }, destroy: function() {
            this.label && (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        }, move: function(a, b, c, d) {
            var e = this, f = e.now,
                    g = !1 !== e.options.animation && !e.isHidden && (1 < la(a - f.x) || 1 < la(b - f.y)), h = e.followPointer || 1 < e.len;
            O(f, {x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: h ? H : g ? (2 * f.anchorX + c) / 3 : c, anchorY: h ? H : g ? (f.anchorY + d) / 2 : d});
            e.label.attr(f);
            g && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32))
        }, hide: function(a) {
            var b = this;
            clearTimeout(this.hideTimer);
            this.isHidden || (this.hideTimer = setTimeout(function() {
                b.label.fadeOut();
                b.isHidden = !0
            }, z(a, this.options.hideDelay, 500)))
        },
        getAnchor: function(a, b) {
            var c, d = this.chart, e = d.inverted, f = d.plotTop, g = d.plotLeft, h = 0, k = 0, n, m;
            a = B(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === H && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (x(a, function(a) {
                n = a.series.yAxis;
                m = a.series.xAxis;
                h += a.plotX + (!e && m ? m.left - g : 0);
                k += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && n ? n.top - f : 0)
            }), h /= a.length, k /= a.length, c = [e ? d.plotWidth - k : h, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - h : k]);
            return La(c, K)
        }, getPosition: function(a,
                b, c) {
            var d = this.chart, e = this.distance, f = {}, g = c.h || 0, h, k = ["y", d.chartHeight, b, c.plotY + d.plotTop, d.plotTop, d.plotTop + d.plotHeight], n = ["x", d.chartWidth, a, c.plotX + d.plotLeft, d.plotLeft, d.plotLeft + d.plotWidth], m = z(c.ttBelow, d.inverted && !c.negative || !d.inverted && c.negative), w = function(a, b, c, d, h, k) {
                var n = c < d - e, u = d + e + c < b, w = d - e - c;
                d += e;
                if (m && u)
                    f[a] = d;
                else if (!m && n)
                    f[a] = w;
                else if (n)
                    f[a] = T(k - c, 0 > w - g ? w : w - g);
                else if (u)
                    f[a] = L(h, d + g + c > b ? d : d + g);
                else
                    return!1
            }, u = function(a, b, c, d) {
                if (d < e || d > b - e)
                    return!1;
                f[a] = d < c / 2 ?
                        1 : d > b - c / 2 ? b - c - 2 : d - c / 2
            }, A = function(a) {
                var b = k;
                k = n;
                n = b;
                h = a
            }, N = function() {
                !1 !== w.apply(0, k) ? !1 !== u.apply(0, n) || h || (A(!0), N()) : h ? f.x = f.y = 0 : (A(!0), N())
            };
            (d.inverted || 1 < this.len) && A();
            N();
            return f
        }, defaultFormatter: function(a) {
            var b = this.points || B(this), c;
            c = [a.tooltipFooterHeaderFormatter(b[0])];
            c = c.concat(a.bodyFormatter(b));
            c.push(a.tooltipFooterHeaderFormatter(b[0], !0));
            return c.join("")
        }, refresh: function(a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h, k = {}, n, m = [];
            n = e.formatter || this.defaultFormatter;
            var k = c.hoverPoints, w, u = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer = B(a)[0].series.tooltipOptions.followPointer;
            h = this.getAnchor(a, b);
            f = h[0];
            g = h[1];
            !u || a.series && a.series.noSharedTooltip ? k = a.getLabelConfig() : (c.hoverPoints = a, k && x(k, function(a) {
                a.setState()
            }), x(a, function(a) {
                a.setState("hover");
                m.push(a.getLabelConfig())
            }), k = {x: a[0].category, y: a[0].y}, k.points = m, this.len = m.length, a = a[0]);
            n = n.call(k, this);
            k = a.series;
            this.distance = z(k.tooltipOptions.distance, 16);
            !1 === n ? this.hide() : (this.isHidden &&
                    (jb(d), d.attr("opacity", 1).show()), d.attr({text: n}), w = e.borderColor || a.color || k.color || "#606060", d.attr({stroke: w}), this.updatePosition({plotX: f, plotY: g, negative: a.negative, ttBelow: a.ttBelow, h: h[2] || 0}), this.isHidden = !1);
            na(c, "tooltipRefresh", {text: n, x: f + c.plotLeft, y: g + c.plotTop, borderColor: w})
        }, updatePosition: function(a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(K(c.x), K(c.y || 0), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }, getXDateFormat: function(a,
                b, c) {
            var d;
            b = b.dateTimeLabelFormats;
            var e = c && c.closestPointRange, f, g = {millisecond: 15, second: 12, minute: 9, hour: 6, day: 3}, h, k = "millisecond";
            if (e) {
                h = Ca("%m-%d %H:%M:%S.%L", a.x);
                for (f in ia) {
                    if (e === ia.week && +Ca("%w", a.x) === c.options.startOfWeek && "00:00:00.000" === h.substr(6)) {
                        f = "week";
                        break
                    } else if (ia[f] > e) {
                        f = k;
                        break
                    } else if (g[f] && h.substr(g[f]) !== "01-01 00:00:00.000".substr(g[f]))
                        break;
                    "week" !== f && (k = f)
                }
                f && (d = b[f])
            } else
                d = b.day;
            return d || b.year
        }, tooltipFooterHeaderFormatter: function(a, b) {
            var c = b ? "footer" :
                    "header", d = a.series, e = d.tooltipOptions, f = e.xDateFormat, g = d.xAxis, h = g && "datetime" === g.options.type && X(a.key), c = e[c + "Format"];
            h && !f && (f = this.getXDateFormat(a, e, g));
            h && f && (c = c.replace("{point.key}", "{point.key:" + f + "}"));
            return v(c, {point: a, series: d})
        }, bodyFormatter: function(a) {
            return La(a, function(a) {
                var c = a.series.tooltipOptions;
                return(c.pointFormatter || a.point.tooltipFormatter).call(a.point, c.pointFormat)
            })
        }};
    var Ma;
    cb = aa.documentElement.ontouchstart !== H;
    var Wa = Z.Pointer = function(a, b) {
        this.init(a,
                b)
    };
    Wa.prototype = {init: function(a, b) {
            var c = b.chart, d = c.events, e = Ea ? "" : c.zoomType, c = a.inverted, f;
            this.options = b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            Z.Tooltip && b.tooltip.enabled && (a.tooltip = new Mb(a, b.tooltip), this.followTouchMove = z(b.tooltip.followTouchMove, !0));
            this.setDOMEvents()
        }, normalize: function(a, b) {
            var c, d;
            a = a || window.event;
            a = oc(a);
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b || (this.chartPosition = b = nc(this.chart.container));
            d.pageX === H ? (c = L(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return O(a, {chartX: K(c), chartY: K(d)})
        }, getCoordinates: function(a) {
            var b = {xAxis: [], yAxis: []};
            x(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            });
            return b
        }, runPointActions: function(a) {
            var b =
                    this.chart, c = b.series, d = b.tooltip, e = d ? d.shared : !1, f = b.hoverPoint, g = b.hoverSeries, h, k = b.chartWidth, n, m, w = [], u, A;
            if (!e && !g)
                for (h = 0; h < c.length; h++)
                    if (c[h].directTouch || !c[h].options.stickyTracking)
                        c = [];
            !e && g && g.directTouch && f ? u = f : (x(c, function(b) {
                n = b.noSharedTooltip && e;
                m = !e && b.directTouch;
                b.visible && !n && !m && z(b.options.enableMouseTracking, !0) && (A = b.searchPoint(a, !n && 1 === b.kdDimensions)) && w.push(A)
            }), x(w, function(a) {
                a && "number" === typeof a.dist && a.dist < k && (k = a.dist, u = a)
            }));
            if (u && (u !== this.prevKDPoint ||
                    d && d.isHidden)) {
                if (e && !u.series.noSharedTooltip) {
                    for (h = w.length; h--; )
                        (w[h].clientX !== u.clientX || w[h].series.noSharedTooltip) && w.splice(h, 1);
                    w.length && d && d.refresh(w, a);
                    x(w, function(b) {
                        b.onMouseOver(a, b !== (g && g.directTouch && f || u))
                    })
                } else if (d && d.refresh(u, a), !g || !g.directTouch)
                    u.onMouseOver(a);
                this.prevKDPoint = u
            } else
                c = g && g.tooltipOptions.followPointer, d && c && !d.isHidden && (c = d.getAnchor([{}], a), d.updatePosition({plotX: c[0], plotY: c[1]}));
            d && !this._onDocumentMouseMove && (this._onDocumentMouseMove = function(a) {
                if (xa[Ma])
                    xa[Ma].pointer.onDocumentMouseMove(a)
            },
                    ca(aa, "mousemove", this._onDocumentMouseMove));
            x(b.axes, function(b) {
                b.drawCrosshair(a, z(u, f))
            })
        }, reset: function(a, b) {
            var c = this.chart, d = c.hoverSeries, e = c.hoverPoint, f = c.hoverPoints, g = c.tooltip, h = g && g.shared ? f : e;
            (a = a && g && h) && B(h)[0].plotX === H && (a = !1);
            if (a)
                g.refresh(h), e && (e.setState(e.state, !0), x(c.axes, function(a) {
                    z(a.options.crosshair && a.options.crosshair.snap, !0) ? a.drawCrosshair(null, e) : a.hideCrosshair()
                }));
            else {
                if (e)
                    e.onMouseOut();
                f && x(f, function(a) {
                    a.setState()
                });
                if (d)
                    d.onMouseOut();
                g && g.hide(b);
                this._onDocumentMouseMove && (sa(aa, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                x(c.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = c.hoverPoints = c.hoverPoint = null
            }
        }, scaleGroups: function(a, b) {
            var c = this.chart, d;
            x(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d), e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        }, dragStart: function(a) {
            var b =
                    this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        }, drag: function(a) {
            var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, k = b.plotTop, n = b.plotWidth, m = b.plotHeight, w, u = this.selectionMarker, A = this.mouseDownX, N = this.mouseDownY, J = c.panKey && a[c.panKey + "Key"];
            u && u.touch || (d < h ? d = h : d > h + n && (d = h + n), e < k ? e = k : e > k + m && (e = k + m), this.hasDragged = Math.sqrt(Math.pow(A - d, 2) + Math.pow(N - e, 2)), 10 < this.hasDragged &&
                    (w = b.isInsidePlot(A - h, N - k), b.hasCartesianSeries && (this.zoomX || this.zoomY) && w && !J && !u && (this.selectionMarker = u = b.renderer.rect(h, k, f ? 1 : n, g ? 1 : m, 0).attr({fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7}).add()), u && f && (d -= A, u.attr({width: la(d), x: (0 < d ? 0 : d) + A})), u && g && (d = e - N, u.attr({height: la(d), y: (0 < d ? 0 : d) + N})), w && !u && c.panning && b.pan(a, c.panning)))
        }, drop: function(a) {
            var b = this, c = this.chart, d = this.hasPinched;
            if (this.selectionMarker) {
                var e = {xAxis: [], yAxis: [], originalEvent: a.originalEvent ||
                    a}, f = this.selectionMarker, g = f.attr ? f.attr("x") : f.x, h = f.attr ? f.attr("y") : f.y, k = f.attr ? f.attr("width") : f.width, n = f.attr ? f.attr("height") : f.height, m;
                if (this.hasDragged || d)
                    x(c.axes, function(c) {
                        if (c.zoomEnabled && t(c.min) && (d || b[{xAxis: "zoomX", yAxis: "zoomY"}[c.coll]])) {
                            var f = c.horiz, A = "touchend" === a.type ? c.minPixelPadding : 0, N = c.toValue((f ? g : h) + A), f = c.toValue((f ? g + k : h + n) - A);
                            e[c.coll].push({axis: c, min: T(N, f), max: L(N, f)});
                            m = !0
                        }
                    }), m && na(c, "selection", e, function(a) {
                        c.zoom(O(a, d ? {animation: !1} : null))
                    });
                this.selectionMarker =
                        this.selectionMarker.destroy();
                d && this.scaleGroups()
            }
            c && (y(c.container, {cursor: c._cursor}), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        }, onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        }, onDocumentMouseUp: function(a) {
            xa[Ma] && xa[Ma].pointer.drop(a)
        }, onDocumentMouseMove: function(a) {
            var b = this.chart, c = this.chartPosition;
            a = this.normalize(a, c);
            !c || this.inClass(a.target, "highcharts-tracker") ||
                    b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
        }, onContainerMouseLeave: function() {
            var a = xa[Ma];
            a && (a.pointer.reset(), a.pointer.chartPosition = null)
        }, onContainerMouseMove: function(a) {
            var b = this.chart;
            Ma = b.index;
            a = this.normalize(a);
            a.returnValue = !1;
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a)
        }, inClass: function(a, b) {
            for (var c; a; ) {
                if (c = G(a, "class")) {
                    if (-1 !==
                            c.indexOf(b))
                        return!0;
                    if (-1 !== c.indexOf("highcharts-container"))
                        return!1
                }
                a = a.parentNode
            }
        }, onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries, c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b)
                b.onMouseOut()
        }, onContainerClick: function(a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop;
            a = this.normalize(a);
            a.originalEvent = a;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (na(c.series,
                    "click", O(a, {point: c})), b.hoverPoint && c.firePointEvent("click", a)) : (O(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && na(b, "click", a)))
        }, setDOMEvents: function() {
            var a = this, b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            ca(b, "mouseleave", a.onContainerMouseLeave);
            1 === hb && ca(aa, "mouseup", a.onDocumentMouseUp);
            cb && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            },
                    b.ontouchmove = function(b) {
                        a.onContainerTouchMove(b)
                    }, 1 === hb && ca(aa, "touchend", a.onDocumentTouchEnd))
        }, destroy: function() {
            var a;
            sa(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            hb || (sa(aa, "mouseup", this.onDocumentMouseUp), sa(aa, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this)
                this[a] = null
        }};
    O(Z.Pointer.prototype, {pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) &&
                    this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        }, pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var k = this.chart, n = a ? "x" : "y", m = a ? "X" : "Y", w = "chart" + m, u = a ? "width" : "height", A = k["plot" + (a ? "Left" : "Top")], N, J, l = h || 1, q = k.inverted, v = k.bounds[a ? "h" : "v"], t = 1 === b.length, p = b[0][w], z = c[0][w], M = !t && b[1][w], x = !t && c[1][w], D;
            c = function() {
                !t && 20 < la(p - M) && (l = h || la(z - x) / la(p - M));
                J = (A - z) / l + p;
                N = k["plot" + (a ? "Width" : "Height")] / l
            };
            c();
            b = J;
            b < v.min ? (b = v.min, D = !0) : b + N > v.max && (b = v.max - N, D = !0);
            D ? (z -= .8 * (z - g[n][0]), t || (x -= .8 * (x -
                    g[n][1])), c()) : g[n] = [z, x];
            q || (f[n] = J - A, f[u] = N);
            f = q ? 1 / l : l;
            e[u] = N;
            e[n] = b;
            d[q ? a ? "scaleY" : "scaleX" : "scale" + m] = l;
            d["translate" + m] = f * A + (z - f * p)
        }, pinch: function(a) {
            var b = this, c = b.chart, d = b.pinchDown, e = a.touches, f = e.length, g = b.lastValidTouch, h = b.hasZoom, k = b.selectionMarker, n = {}, m = 1 === f && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), w = {};
            1 < f && (b.initiated = !0);
            h && b.initiated && !m && a.preventDefault();
            La(e, function(a) {
                return b.normalize(a)
            });
            "touchstart" === a.type ? (x(e, function(a,
                    b) {
                d[b] = {chartX: a.chartX, chartY: a.chartY}
            }), g.x = [d[0].chartX, d[1] && d[1].chartX], g.y = [d[0].chartY, d[1] && d[1].chartY], x(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(z(a.options.min, a.dataMin)), f = a.toPixels(z(a.options.max, a.dataMax)), g = T(e, f), e = L(e, f);
                    b.min = T(a.pos, g - d);
                    b.max = L(a.pos + a.len, e + d)
                }
            }), b.res = !0) : d.length && (k || (b.selectionMarker = k = O({destroy: ma, touch: !0}, c.plotBox)), b.pinchTranslate(d, e, n, k, w, g), b.hasPinched = h, b.scaleGroups(n, w), !h &&
                    b.followTouchMove && 1 === f ? this.runPointActions(b.normalize(a)) : b.res && (b.res = !1, this.reset(!1, 0)))
        }, touch: function(a, b) {
            var c = this.chart;
            Ma = c.index;
            1 === a.touches.length ? (a = this.normalize(a), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && !c.openMenu ? (b && this.runPointActions(a), this.pinch(a)) : b && this.reset()) : 2 === a.touches.length && this.pinch(a)
        }, onContainerTouchStart: function(a) {
            this.touch(a, !0)
        }, onContainerTouchMove: function(a) {
            this.touch(a)
        }, onDocumentTouchEnd: function(a) {
            xa[Ma] && xa[Ma].pointer.drop(a)
        }});
    if (ra.PointerEvent || ra.MSPointerEvent) {
        var Oa = {}, Nb = !!ra.PointerEvent, uc = function() {
            var a, b = [];
            b.item = function(a) {
                return this[a]
            };
            for (a in Oa)
                Oa.hasOwnProperty(a) && b.push({pageX: Oa[a].pageX, pageY: Oa[a].pageY, target: Oa[a].target});
            return b
        }, Ob = function(a, b, c, d) {
            a = a.originalEvent || a;
            "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !xa[Ma] || (d(a), d = xa[Ma].pointer, d[b]({type: c, target: a.currentTarget, preventDefault: ma, touches: uc()}))
        };
        O(Wa.prototype, {onContainerPointerDown: function(a) {
                Ob(a,
                        "onContainerTouchStart", "touchstart", function(a) {
                            Oa[a.pointerId] = {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                        })
            }, onContainerPointerMove: function(a) {
                Ob(a, "onContainerTouchMove", "touchmove", function(a) {
                    Oa[a.pointerId] = {pageX: a.pageX, pageY: a.pageY};
                    Oa[a.pointerId].target || (Oa[a.pointerId].target = a.currentTarget)
                })
            }, onDocumentPointerUp: function(a) {
                Ob(a, "onDocumentTouchEnd", "touchend", function(a) {
                    delete Oa[a.pointerId]
                })
            }, batchMSEvents: function(a) {
                a(this.chart.container, Nb ? "pointerdown" : "MSPointerDown",
                        this.onContainerPointerDown);
                a(this.chart.container, Nb ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(aa, Nb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }});
        ba(Wa.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            this.hasZoom && y(b.container, {"-ms-touch-action": "none", "touch-action": "none"})
        });
        ba(Wa.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(ca)
        });
        ba(Wa.prototype, "destroy", function(a) {
            this.batchMSEvents(sa);
            a.call(this)
        })
    }
    var xb =
            Z.Legend = function(a, b) {
                this.init(a, b)
            };
    xb.prototype = {init: function(a, b) {
            var c = this, d = b.itemStyle, e = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.itemStyle = d, c.itemHiddenStyle = r(d, b.itemHiddenStyle), c.itemMarginTop = e, c.padding = d = z(b.padding, 8), c.initialItemX = d, c.initialItemY = d - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.symbolWidth = z(b.symbolWidth, 16), c.pages = [], c.render(), ca(c.chart, "endResize", function() {
                c.positionCheckboxes()
            }))
        }, colorizeItem: function(a, b) {
            var c = this.options, d = a.legendItem,
                    e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, k = {fill: h}, n;
            d && d.css({fill: c, color: c});
            e && e.attr({stroke: h});
            if (f) {
                if (g && f.isMarker)
                    for (n in k.stroke = h, g = a.convertAttribs(g), g)
                        d = g[n], d !== H && (k[n] = d);
                f.attr(k)
            }
        }, positionItem: function(a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            (a = a.legendGroup) && a.element && a.translate(b ? e : this.legendWidth - e - 2 * c -
                    4, d);
            f && (f.x = e, f.y = d)
        }, destroyItem: function(a) {
            var b = a.checkbox;
            x(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && ta(a.checkbox)
        }, destroy: function() {
            var a = this.group, b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        }, positionCheckboxes: function(a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, x(this.allItems, function(e) {
                var f = e.checkbox, g;
                f && (g = c + f.y + (a || 0) + 3, y(f, {left: b.translateX + e.checkboxOffset +
                            f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : "none"}))
            }))
        }, renderTitle: function() {
            var a = this.padding, b = this.options.title, c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({translateY: c}));
            this.titleHeight = c
        }, setText: function(a) {
            var b = this.options;
            a.legendItem.attr({text: b.labelFormat ? v(b.labelFormat,
                        a) : b.labelFormatter.call(a)})
        }, renderItem: function(a) {
            var b = this.chart, c = b.renderer, d = this.options, e = "horizontal" === d.layout, f = this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, k = this.itemHiddenStyle, n = this.padding, m = e ? z(d.itemDistance, 20) : 0, w = !d.rtl, u = d.width, A = d.itemMarginBottom || 0, l = this.itemMarginTop, J = this.initialItemX, q = a.legendItem, v = a.series && a.series.drawLegendSymbol ? a.series : a, t = v.options, t = this.createCheckboxForItem && t && t.showCheckbox, p = d.useHTML;
            q || (a.legendGroup = c.g("legend-item").attr({zIndex: 1}).add(this.scrollGroup),
                    a.legendItem = q = c.text("", w ? f + g : -g, this.baseline || 0, p).css(r(a.visible ? h : k)).attr({align: w ? "left" : "right", zIndex: 2}).add(a.legendGroup), this.baseline || (this.fontMetrics = c.fontMetrics(h.fontSize, q), this.baseline = this.fontMetrics.f + 3 + l, q.attr("y", this.baseline)), v.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, q, p, h, k), this.colorizeItem(a, a.visible), t && this.createCheckboxForItem(a));
            this.setText(a);
            c = q.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + m + (t ? 20 :
                    0);
            this.itemHeight = g = K(a.legendItemHeight || c.height);
            e && this.itemX - J + f > (u || b.chartWidth - 2 * n - J - d.x) && (this.itemX = J, this.itemY += l + this.lastLineHeight + A, this.lastLineHeight = 0);
            this.maxItemWidth = L(this.maxItemWidth, f);
            this.lastItemY = l + this.itemY + A;
            this.lastLineHeight = L(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += l + g + A, this.lastLineHeight = g);
            this.offsetWidth = u || L((e ? this.itemX - J - m : f) + n, this.offsetWidth)
        }, getAllItems: function() {
            var a = [];
            x(this.chart.series,
                    function(b) {
                        var c = b.options;
                        z(c.showInLegend, t(c.linkedTo) ? !1 : H, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
                    });
            return a
        }, adjustMargins: function(a, b) {
            var c = this.chart, d = this.options, e = d.align.charAt(0) + d.verticalAlign.charAt(0) + d.layout.charAt(0);
            this.display && !d.floating && x([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(f, g) {
                f.test(e) && !t(a[g]) && (c[sb[g]] = L(c[sb[g]], c.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * d[g % 2 ? "x" : "y"] + z(d.margin,
                        12) + b[g]))
            })
        }, render: function() {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, k = a.box, n = a.options, m = a.padding, w = n.borderWidth, u = n.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({zIndex: 7}).add(), a.contentGroup = c.g().attr({zIndex: 1}).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            M(e, function(a, b) {
                return(a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            n.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            a.lastLineHeight = 0;
            x(e, function(b) {
                a.renderItem(b)
            });
            g = (n.width || a.offsetWidth) + m;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            h += m;
            if (w || u)
                k ? 0 < g && 0 < h && (k[k.isNew ? "attr" : "animate"](k.crisp({width: g, height: h})), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, n.borderRadius, w || 0).attr({stroke: n.borderColor, "stroke-width": w || 0, fill: u || "none"}).add(d).shadow(n.shadow), k.isNew = !0), k[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight =
                    h;
            x(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(O({width: g, height: h}, n), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function(a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, h, k = this.clipRect, n = e.navigation, m = z(n.animation, !0), w = n.arrowSize || 12, u = this.nav, A = this.pages, l = this.padding, J, q = this.allItems, v = function(a) {
                k.attr({height: a});
                b.contentGroup.div && (b.contentGroup.div.style.clip =
                        "rect(" + l + "px,9999px," + (l + a) + "px,0)")
            };
            "horizontal" === e.layout && (f /= 2);
            g && (f = T(f, g));
            A.length = 0;
            a > f ? (this.clipHeight = h = L(f - 20 - this.titleHeight - l, 0), this.currentPage = z(this.currentPage, 1), this.fullHeight = a, x(q, function(a, b) {
                var c = a._legendItemPos[1], d = K(a.legendItem.getBBox().height), e = A.length;
                if (!e || c - A[e - 1] > h && (J || c) !== A[e - 1])
                    A.push(J || c), e++;
                b === q.length - 1 && c + d - A[e - 1] > h && A.push(c);
                c !== J && (J = c)
            }), k || (k = b.clipRect = d.clipRect(0, l, 9999, 0), b.contentGroup.clip(k)), v(h), u || (this.nav = u = d.g().attr({zIndex: 1}).add(this.group),
                    this.up = d.symbol("triangle", 0, 0, w, w).on("click", function() {
                b.scroll(-1, m)
            }).add(u), this.pager = d.text("", 15, 10).css(n.style).add(u), this.down = d.symbol("triangle-down", 0, 0, w, w).on("click", function() {
                b.scroll(1, m)
            }).add(u)), b.scroll(0), a = f) : u && (v(c.chartHeight), u.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0);
            return a
        }, scroll: function(a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, k = this.pager, n = this.padding;
            e > d && (e = d);
            0 < e && (b !== H && Sa(b, this.chart), this.nav.attr({translateX: n, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible"}), this.up.attr({fill: 1 === e ? g : h}).css({cursor: 1 === e ? "default" : "pointer"}), k.attr({text: e + "/" + d}), this.down.attr({x: 18 + this.pager.getBBox().width, fill: e === d ? g : h}).css({cursor: e === d ? "default" : "pointer"}), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = e, this.positionCheckboxes(c))
        }};
    var mb = Z.LegendSymbolMixin = {drawRectangle: function(a,
                b) {
            var c = a.options.symbolHeight || a.fontMetrics.f;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - c + 1, a.symbolWidth, c, a.options.symbolRadius || 0).attr({zIndex: 3}).add(b.legendGroup)
        }, drawLineMarker: function(a) {
            var b = this.options, c = b.marker, d;
            d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup;
            a = a.baseline - K(.3 * a.fontMetrics.b);
            var g;
            b.lineWidth && (g = {"stroke-width": b.lineWidth}, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f));
            c && !1 !== c.enabled &&
                    (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0)
        }};
    (/Trident\/7\.0/.test(Qa) || $a) && ba(xb.prototype, "positionItem", function(a, b) {
        var c = this, d = function() {
            b._legendItemPos && a.call(c, b)
        };
        d();
        setTimeout(d)
    });
    var Ra = Z.Chart = function() {
        this.init.apply(this, arguments)
    };
    Ra.prototype = {callbacks: [], init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = r(oa, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing",
                    d);
            var e = d.events;
            this.bounds = {h: {}, v: {}};
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this, g;
            f.index = xa.length;
            xa.push(f);
            hb++;
            !1 !== d.reflow && ca(f, "load", function() {
                f.initReflow()
            });
            if (e)
                for (g in e)
                    ca(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = Ea ? !1 : z(d.animation, !0);
            f.pointCount = f.colorCounter = f.symbolCounter = 0;
            f.firstRender()
        }, initSeries: function(a) {
            var b = this.options.chart;
            (b = Q[a.type || b.type || b.defaultSeriesType]) || P(17,
                    !0);
            b = new b;
            b.init(this, a);
            return b
        }, isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        }, redraw: function(a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, k = this.hasCartesianSeries, n = this.isDirtyBox, m = c.length, w = m, u = this.renderer, A = u.isHidden(), l = [];
            Sa(a, this);
            A && this.cloneRenderTo();
            for (this.layOutTitles(); w--; )
                if (a = c[w], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h)
                for (w = m; w--; )
                    a = c[w], a.options.stacking &&
                            (a.isDirty = !0);
            x(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), f = !0)
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g && this.getStacks();
            k && !this.isResizing && (this.maxTicks = null, x(b, function(a) {
                a.setScale()
            }));
            this.getMargins();
            k && (x(b, function(a) {
                a.isDirty && (n = !0)
            }), x(b, function(a) {
                var b = a.min + "," + a.max;
                a.extKey !== b && (a.extKey = b, l.push(function() {
                    na(a, "afterSetExtremes", O(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (n || g) && a.redraw()
            }));
            n && this.drawChartBox();
            x(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            u.draw();
            na(this, "redraw");
            A && this.cloneRenderTo(!0);
            x(l, function(a) {
                a.call()
            })
        }, get: function(a) {
            var b = this.axes, c = this.series, d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a)
                    return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a)
                    return c[d];
            for (d = 0; d < c.length; d++)
                for (e = c[d].points || [], b = 0; b < e.length; b++)
                    if (e[b].id === a)
                        return e[b];
            return null
        }, getAxes: function() {
            var a = this, b = this.options,
                    c = b.xAxis = B(b.xAxis || {}), b = b.yAxis = B(b.yAxis || {});
            x(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            x(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            x(c, function(b) {
                new fa(a, b)
            })
        }, getSelectedPoints: function() {
            var a = [];
            x(this.series, function(b) {
                a = a.concat(ib(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function() {
            return ib(this.series, function(a) {
                return a.selected
            })
        }, setTitle: function(a, b, c) {
            var d = this, e = d.options, f;
            f = e.title = r(e.title, a);
            e = e.subtitle = r(e.subtitle, b);
            x([["title", a, f],
                ["subtitle", b, e]], function(a) {
                var b = a[0], c = d[b], e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4}).css(a.style).add())
            });
            d.layOutTitles(c)
        }, layOutTitles: function(a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g = this.renderer, h = this.spacingBox.width - 44;
            c && (c.css({width: (f.width || h) + "px"}).align(O({y: g.fontMetrics(f.style.fontSize, c).b - 3}, f), !1, "spacingBox"),
                    f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({width: (e.width || h) + "px"}).align(O({y: b + (f.margin - 13) + g.fontMetrics(f.style.fontSize, d).b}, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Na(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && z(a, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function() {
            var a = this.options.chart, b = a.width, a = a.height, c = this.renderToClone || this.renderTo;
            t(b) || (this.containerWidth =
                    ub(c, "width"));
            t(a) || (this.containerHeight = ub(c, "height"));
            this.chartWidth = L(0, b || this.containerWidth || 600);
            this.chartHeight = L(0, z(a, 19 < this.containerHeight ? this.containerHeight : 400))
        }, cloneRenderTo: function(a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), ta(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), y(b, {position: "absolute", top: "-9999px", display: "block"}), b.style.setProperty &&
                    b.style.setProperty("display", "block", "important"), aa.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function() {
            var a, b = this.options.chart, c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + Jb++;
            Y(a) && (this.renderTo = a = aa.getElementById(a));
            a || P(13, !0);
            c = E(G(a, "data-highcharts-chart"));
            !isNaN(c) && xa[c] && xa[c].hasRendered && xa[c].destroy();
            G(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            b.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = F("div", {className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e}, O({position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"}, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = b.forExport ? new Ga(a, c, d, b.style, !0) : new ab(a, c, d, b.style);
            Ea && this.renderer.create(this, a, c, d);
            this.renderer.chartIndex = this.index
        }, getMargins: function(a) {
            var b = this.spacing,
                    c = this.margin, d = this.titleOffset;
            this.resetMargins();
            d && !t(c[0]) && (this.plotTop = L(this.plotTop, d + this.options.title.margin + b[0]));
            this.legend.adjustMargins(c, b);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            a || this.getAxisMargins()
        }, getAxisMargins: function() {
            var a = this, b = a.axisOffset = [0, 0, 0, 0], c = a.margin;
            a.hasCartesianSeries && x(a.axes, function(a) {
                a.getOffset()
            });
            x(sb, function(d, e) {
                t(c[e]) || (a[d] += b[e])
            });
            a.setChartSize()
        },
        reflow: function(a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width || ub(d, "width"), f = c.height || ub(d, "height"), c = a ? a.target : ra, d = function() {
                b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
            };
            if (!b.hasUserSize && !b.isPrinting && e && f && (c === ra || c === aa)) {
                if (e !== b.containerWidth || f !== b.containerHeight)
                    clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        }, initReflow: function() {
            var a = this, b = function(b) {
                a.reflow(b)
            };
            ca(ra, "resize", b);
            ca(a, "destroy",
                    function() {
                        sa(ra, "resize", b)
                    })
        }, setSize: function(a, b, c) {
            var d = this, e, f, g, h = d.renderer, k = h.globalAnimation;
            d.isResizing += 1;
            g = function() {
                d && na(d, "endResize", null, function() {
                    --d.isResizing
                })
            };
            Sa(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            t(a) && (d.chartWidth = e = L(0, K(a)), d.hasUserSize = !!e);
            t(b) && (d.chartHeight = f = L(0, K(b)));
            (k ? vb : y)(d.container, {width: e + "px", height: f + "px"}, k);
            d.setChartSize(!0);
            h.setSize(e, f, c);
            d.maxTicks = null;
            x(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            x(d.series,
                    function(a) {
                        a.isDirty = !0
                    });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight = null;
            na(d, "resize");
            !1 === k ? g() : setTimeout(g, k && k.duration || 500)
        }, setChartSize: function(a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, k, n, m, w;
            this.plotLeft = k = K(this.plotLeft);
            this.plotTop = n = K(this.plotTop);
            this.plotWidth = m = L(0, K(d - k - this.marginRight));
            this.plotHeight = w = L(0, K(e - n - this.marginBottom));
            this.plotSizeX = b ? w : m;
            this.plotSizeY = b ? m : w;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {x: g[3], y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2]};
            this.plotBox = c.plotBox = {x: k, y: n, width: m, height: w};
            d = 2 * ja(this.plotBorderWidth / 2);
            b = Na(L(d, h[3]) / 2);
            c = Na(L(d, h[0]) / 2);
            this.clipBox = {x: b, y: c, width: ja(this.plotSizeX - L(d, h[1]) / 2 - b), height: L(0, ja(this.plotSizeY - L(d, h[2]) / 2 - c))};
            a || x(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function() {
            var a = this;
            x(sb, function(b,
                    c) {
                a[b] = z(a.margin[c], a.spacing[c])
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function() {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, k = a.borderWidth || 0, n = a.backgroundColor, m = a.plotBackgroundColor, w = a.plotBackgroundImage, u = a.plotBorderWidth || 0, A, l = this.plotLeft, J = this.plotTop, q = this.plotWidth, v = this.plotHeight, t = this.plotBox, p = this.clipRect, z = this.clipBox;
            A = k + (a.shadow ?
                    8 : 0);
            if (k || n)
                e ? e.animate(e.crisp({width: c - A, height: d - A})) : (e = {fill: n || "none"}, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(A / 2, A / 2, c - A, d - A, a.borderRadius, k).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            m && (f ? f.animate(t) : this.plotBackground = b.rect(l, J, q, v, 0).attr({fill: m}).add().shadow(a.plotShadow));
            w && (h ? h.animate(t) : this.plotBGImage = b.image(w, l, J, q, v).add());
            p ? p.animate({width: z.width, height: z.height}) : this.clipRect = b.clipRect(z);
            u && (g ? g.animate(g.crisp({x: l,
                y: J, width: q, height: v, strokeWidth: -u})) : this.plotBorder = b.rect(l, J, q, v, 0, -u).attr({stroke: a.plotBorderColor, "stroke-width": u, fill: "none", zIndex: 1}).add());
            this.isDirtyBox = !1
        }, propFromSeries: function() {
            var a = this, b = a.options.chart, c, d = a.options.series, e, f;
            x(["inverted", "angular", "polar"], function(g) {
                c = Q[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--; )
                    (c = Q[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        }, linkSeries: function() {
            var a = this, b = a.series;
            x(b, function(a) {
                a.linkedSeries.length =
                0
            });
            x(b, function(b) {
                var d = b.options.linkedTo;
                Y(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = z(b.options.visible, d.options.visible, b.visible))
            })
        }, renderSeries: function() {
            x(this.series, function(a) {
                a.translate();
                a.render()
            })
        }, renderLabels: function() {
            var a = this, b = a.options.labels;
            b.items && x(b.items, function(c) {
                var d = O(b.style, c.style), e = E(d.left) + a.plotLeft, f = E(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                a.renderer.text(c.html, e, f).attr({zIndex: 2}).css(d).add()
            })
        },
        render: function() {
            var a = this.axes, b = this.renderer, c = this.options, d, e, f, g;
            this.setTitle();
            this.legend = new xb(this, c.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            d = this.plotWidth;
            e = this.plotHeight -= 13;
            x(a, function(a) {
                a.setScale()
            });
            this.getAxisMargins();
            f = 1.1 < d / this.plotWidth;
            g = 1.1 < e / this.plotHeight;
            if (f || g)
                this.maxTicks = null, x(a, function(a) {
                    (a.horiz && f || !a.horiz && g) && a.setTickInterval(!0)
                }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries && x(a, function(a) {
                a.render()
            });
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({zIndex: 3}).add());
            this.renderSeries();
            this.renderLabels();
            this.showCredits(c.credits);
            this.hasRendered = !0
        }, showCredits: function(a) {
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text, 0, 0).on("click", function() {
                a.href && (location.href = a.href)
            }).attr({align: a.position.align, zIndex: 8}).css(a.style).add().align(a.position))
        }, destroy: function() {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode;
            na(a, "destroy");
            xa[a.index] =
                    H;
            hb--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            sa(a);
            for (e = b.length; e--; )
                b[e] = b[e].destroy();
            for (e = c.length; e--; )
                c[e] = c[e].destroy();
            x("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            d && (d.innerHTML = "", sa(d), f && ta(d));
            for (e in a)
                delete a[e]
        }, isReadyToRender: function() {
            var a = this;
            return!za && ra == ra.top &&
                    "complete" !== aa.readyState || Ea && !ra.canvg ? (Ea ? ac.push(function() {
                        a.firstRender()
                    }, a.options.global.canvasToolsURL) : aa.attachEvent("onreadystatechange", function() {
                        aa.detachEvent("onreadystatechange", a.firstRender);
                        "complete" === aa.readyState && a.firstRender()
                    }), !1) : !0
        }, firstRender: function() {
            var a = this, b = a.options, c = a.callback;
            a.isReadyToRender() && (a.getContainer(), na(a, "init"), a.resetMargins(), a.setChartSize(), a.propFromSeries(), a.getAxes(), x(b.series || [], function(b) {
                a.initSeries(b)
            }), a.linkSeries(),
                    na(a, "beforeRender"), Z.Pointer && (a.pointer = new Wa(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), x(a.callbacks, function(b) {
                a.index !== H && b.apply(a, [a])
            }), na(a, "load"), a.cloneRenderTo(!0))
        }, splashArray: function(a, b) {
            var c = b[a], c = W(c) ? c : [c, c, c, c];
            return[z(b[a + "Top"], c[0]), z(b[a + "Right"], c[1]), z(b[a + "Bottom"], c[2]), z(b[a + "Left"], c[3])]
        }};
    var bc = Z.CenteredSeriesMixin = {getCenter: function() {
            var a = this.options, b = this.chart, c = 2 * (a.slicedOffset || 0), d = b.plotWidth - 2 * c, b = b.plotHeight - 2 * c, e = a.center, e = [z(e[0],
                        "50%"), z(e[1], "50%"), a.size || "100%", a.innerSize || 0], f = T(d, b), g, h;
            for (g = 0; 4 > g; ++g)
                h = e[g], a = 2 > g || 2 === g && /%$/.test(h), e[g] = ga(h, [d, b, f, e[2]][g]) + (a ? c : 0);
            return e
        }}, Ha = function() {
    };
    Ha.prototype = {init: function(a, b, c) {
            this.series = a;
            this.color = a.color;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        }, applyOptions: function(a,
                b) {
            var c = this.series, d = c.options.pointValKey || c.pointValKey;
            a = Ha.prototype.optionsToObject.call(this, a);
            O(this, a);
            this.options = this.options ? O(this.options, a) : a;
            d && (this.y = this[d]);
            this.x === H && c && (this.x = b === H ? c.autoIncrement() : b);
            return this
        }, optionsToObject: function(a) {
            var b = {}, c = this.series, d = c.options.keys, e = d || c.pointArrayMap || ["y"], f = e.length, g = 0, h = 0;
            if ("number" === typeof a || null === a)
                b[e[0]] = a;
            else if (R(a))
                for (!d && a.length > f && (c = typeof a[0], "string" === c?b.name = a[0]:"number" === c && (b.x = a[0]), g++); h <
                        f; )
                    b[e[h++]] = a[g++];
            else
                "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        }, destroy: function() {
            var a = this.series.chart, b = a.hoverPoints, c;
            a.pointCount--;
            b && (this.setState(), p(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint)
                this.onMouseOut();
            if (this.graphic || this.dataLabel)
                sa(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this)
                this[c] = null
        }, destroyElements: function() {
            for (var a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "),
                    b, c = 6; c--; )
                b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function() {
            return{x: this.category, y: this.y, color: this.color, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal}
        }, tooltipFormatter: function(a) {
            var b = this.series, c = b.tooltipOptions, d = z(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            x(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f)
                    a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return v(a, {point: this, series: this.series})
        }, firePointEvent: function(a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select && d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            na(this, a, b, c)
        }};
    var ea = Z.Series = function() {
    };
    ea.prototype = {isCartesian: !0, type: "line", pointClass: Ha, sorted: !0, requireSorting: !0, pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth",
            fill: "fillColor", r: "radius"}, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function(a, b) {
            var c = this, d, e, f = a.series, g = function(a, b) {
                return z(a.options.index, a._i) - z(b.options.index, b._i)
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            O(c, {name: b.name, state: "", pointAttr: {}, visible: !1 !== b.visible, selected: !0 === b.selected});
            Ea && (b.animation = !1);
            e = b.events;
            for (d in e)
                ca(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)
                a.runTrackerClick =
                        !0;
            c.getColor();
            c.getSymbol();
            x(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            M(f, g);
            this.yAxis && M(this.yAxis.series, g);
            x(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        }, bindAxes: function() {
            var a = this, b = a.options, c = a.chart, d;
            x(a.axisTypes || [], function(e) {
                x(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== H && b[e] === d.id || b[e] === H && 0 === d.index)
                        c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || a.optionalAxis ===
                        e || P(18, !0)
            })
        }, updateParallelArrays: function(a, b) {
            var c = a.series, d = arguments;
            x(c.parallelArrays, "number" === typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        }, autoIncrement: function() {
            var a = this.options, b = this.xIncrement, c, d = a.pointIntervalUnit, b = z(b, a.pointStart, 0);
            this.pointInterval = c = z(this.pointInterval, a.pointInterval, 1);
            if ("month" === d || "year" === d)
                a = new Aa(b), a = "month" === d ? +a[Gb](a[eb]() +
                        c) : +a[Hb](a[fb]() + c), c = a - b;
            this.xIncrement = b + c;
            return b
        }, getSegments: function() {
            var a = -1, b = [], c, d = this.points, e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--; )
                        null === d[c].y && d.splice(c, 1);
                    d.length && (b = [d])
                } else
                    x(d, function(c, g) {
                        null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                    });
            this.segments = b
        }, setOptions: function(a) {
            var b = this.chart, c = b.options.plotOptions, b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = r(e, c.series, a);
            this.tooltipOptions =
                    r(oa.tooltip, oa.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            this.zoneAxis = c.zoneAxis;
            a = this.zones = (c.zones || []).slice();
            !c.negativeColor && !c.negativeFillColor || c.zones || a.push({value: c[this.zoneAxis + "Threshold"] || c.threshold || 0, color: c.negativeColor, fillColor: c.negativeFillColor});
            a.length && t(a[a.length - 1].value) && a.push({color: this.color, fillColor: this.fillColor});
            return c
        }, getCyclic: function(a,
                b, c) {
            var d = this.userOptions, e = "_" + a + "Index", f = a + "Counter";
            b || (t(d[e]) ? b = d[e] : (d[e] = b = this.chart[f] % c.length, this.chart[f] += 1), b = c[b]);
            this[a] = b
        }, getColor: function() {
            this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || da[this.type].color, this.chart.options.colors)
        }, getSymbol: function() {
            var a = this.options.marker;
            this.getCyclic("symbol", a.symbol, this.chart.options.symbols);
            /^url/.test(this.symbol) && (a.radius = 0)
        }, drawLegendSymbol: mb.drawLineMarker, setData: function(a,
                b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, k = e.options, n = e.chart, m = null, w = e.xAxis, u = w && !!w.categories, A = k.turboThreshold, l = this.xData, J = this.yData, q = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = z(b, !0);
            if (!1 !== d && h && g === h && !e.cropped && !e.hasGroupedData && e.visible)
                x(a, function(a, b) {
                    f[b].update && f[b].update(a, !1, null, !1)
                });
            else {
                e.xIncrement = null;
                e.pointRange = u ? 1 : k.pointRange;
                e.colorCounter = 0;
                x(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (A && h > A) {
                    for (c = 0; null === m && c < h; )
                        m = a[c],
                                c++;
                    if (X(m)) {
                        u = z(k.pointStart, 0);
                        k = z(k.pointInterval, 1);
                        for (c = 0; c < h; c++)
                            l[c] = u, J[c] = a[c], u += k;
                        e.xIncrement = u
                    } else if (R(m))
                        if (q)
                            for (c = 0; c < h; c++)
                                k = a[c], l[c] = k[0], J[c] = k.slice(1, q + 1);
                        else
                            for (c = 0; c < h; c++)
                                k = a[c], l[c] = k[0], J[c] = k[1];
                    else
                        P(12)
                } else
                    for (c = 0; c < h; c++)
                        a[c] !== H && (k = {series: e}, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), u && t(k.name) && (w.names[k.x] = k.name));
                Y(J[0]) && P(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--; )
                    f[c] && f[c].destroy && f[c].destroy();
                w && (w.minRange =
                        w.userMinRange);
                e.isDirty = e.isDirtyData = n.isDirtyBox = !0;
                c = !1
            }
            b && n.redraw(c)
        }, processData: function(a) {
            var b = this.xData, c = this.yData, d = b.length, e;
            e = 0;
            var f, g, h = this.xAxis, k, n = this.options;
            k = n.cropThreshold;
            var m = this.isCartesian, w, u;
            if (m && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !a)
                return!1;
            h && (a = h.getExtremes(), w = a.min, u = a.max);
            if (m && this.sorted && (!k || d > k || this.forceCrop))
                if (b[d - 1] < w || b[0] > u)
                    b = [], c = [];
                else if (b[0] < w || b[d - 1] > u)
                    e = this.cropData(this.xData, this.yData, w, u), b = e.xData, c = e.yData, e =
                            e.start, f = !0;
            for (k = b.length - 1; 0 <= k; k--)
                d = b[k] - b[k - 1], 0 < d && (g === H || d < g) ? g = d : 0 > d && this.requireSorting && P(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            null === n.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g
        }, cropData: function(a, b, c, d) {
            var e = a.length, f = 0, g = e, h = z(this.cropShoulder, 1), k;
            for (k = 0; k < e; k++)
                if (a[k] >= c) {
                    f = L(0, k - h);
                    break
                }
            for (; k < e; k++)
                if (a[k] > d) {
                    g = k + h;
                    break
                }
            return{xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g}
        }, generatePoints: function() {
            var a =
                    this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, k, n = this.hasGroupedData, m, w = [], u;
            b || n || (b = [], b.length = a.length, b = this.data = b);
            for (u = 0; u < g; u++)
                k = h + u, n ? w[u] = (new f).init(this, [d[u]].concat(B(e[u]))) : (b[k] ? m = b[k] : a[k] !== H && (b[k] = m = (new f).init(this, a[k], d[u])), w[u] = m), w[u].index = k;
            if (b && (g !== (c = b.length) || n))
                for (u = 0; u < c; u++)
                    u !== h || n || (u += g), b[u] && (b[u].destroyElements(), b[u].plotX = H);
            this.data = b;
            this.points = w
        }, getExtremes: function(a) {
            var b =
                    this.yAxis, c = this.processedXData, d, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min, h = d.max, k, n, m, w;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (w = 0; w < d; w++)
                if (n = c[w], m = a[w], k = null !== m && m !== H && (!b.isLog || m.length || 0 < m), n = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (c[w + 1] || n) >= g && (c[w - 1] || n) <= h, k && n)
                    if (k = m.length)
                        for (; k--; )
                            null !== m[k] && (e[f++] = m[k]);
                    else
                        e[f++] = m;
            this.dataMin = D(e);
            this.dataMax = qa(e)
        }, translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories, e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, k = a.pointPlacement, n = "between" === k || X(k), m = a.threshold, w = a.startFromThreshold ? m : 0, u, A, l, J = Number.MAX_VALUE, a = 0; a < g; a++) {
                var q = f[a], v = q.x, p = q.y;
                A = q.low;
                var x = b && e.stacks[(this.negStacks && p < (w ? 0 : m) ? "-" : "") + this.stackKey];
                e.isLog && null !== p && 0 >= p && (q.y = p = null, P(10));
                q.plotX = u = T(L(-1E5, c.translate(v, 0, 0, 0, 1, k, "flags" === this.type)), 1E5);
                b && this.visible && x && x[v] &&
                        (x = x[v], p = x.points[this.index + "," + a], A = p[0], p = p[1], A === w && (A = z(m, e.min)), e.isLog && 0 >= A && (A = null), q.total = q.stackTotal = x.total, q.percentage = x.total && q.y / x.total * 100, q.stackY = p, x.setOffset(this.pointXOffset || 0, this.barW || 0));
                q.yBottom = t(A) ? e.translate(A, 0, 1, 0, 1) : null;
                h && (p = this.modifyValue(p, q));
                q.plotY = A = "number" === typeof p && Infinity !== p ? T(L(-1E5, e.translate(p, 0, 1, 0, 1)), 1E5) : H;
                q.isInside = A !== H && 0 <= A && A <= e.len && 0 <= u && u <= c.len;
                q.clientX = n ? c.translate(v, 0, 0, 0, 1) : u;
                q.negative = q.y < (m || 0);
                q.category = d &&
                        d[q.x] !== H ? d[q.x] : q.x;
                a && (J = T(J, la(u - l)));
                l = u
            }
            this.closestPointRangePx = J;
            this.getSegments()
        }, setClip: function(a) {
            var b = this.chart, c = b.renderer, d = b.inverted, e = this.clipBox, f = e || b.clipBox, g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, f.height].join(), h = b[g], k = b[g + "m"];
            h || (a && (f.width = 0, b[g + "m"] = k = c.clipRect(-99, d ? -b.plotLeft : -b.plotTop, 99, d ? b.chartWidth : b.chartHeight)), b[g] = h = c.clipRect(f));
            a && (h.count += 1);
            !1 !== this.options.clip && (this.group.clip(a || e ? h : b.clipRect), this.markerGroup.clip(k),
                    this.sharedClipKey = g);
            a || (--h.count, 0 >= h.count && g && b[g] && (e || (b[g] = b[g].destroy()), b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())))
        }, animate: function(a) {
            var b = this.chart, c = this.options.animation, d;
            c && !W(c) && (c = da[this.type].animation);
            a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({width: b.plotSizeX}, c), b[d + "m"] && b[d + "m"].animate({width: b.plotSizeX + 99}, c), this.animate = null)
        }, afterAnimate: function() {
            this.setClip();
            na(this, "afterAnimate")
        }, drawPoints: function() {
            var a, b = this.points, c = this.chart,
                    d, e, f, g, h, k, n, m, w = this.options.marker, u = this.pointAttr[""], A, l, J, q = this.markerGroup, v = z(w.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * w.radius);
            if (!1 !== w.enabled || this._hasPointMarkers)
                for (f = b.length; f--; )
                    g = b[f], d = ja(g.plotX), e = g.plotY, m = g.graphic, A = g.marker || {}, l = !!g.marker, a = v && A.enabled === H || A.enabled, J = g.isInside, a && e !== H && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || u, h = a.r, k = z(A.symbol, this.symbol), n = 0 === k.indexOf("url"), m ? m[J ? "show" : "hide"](!0).animate(O({x: d - h,
                        y: e - h}, m.symbolName ? {width: 2 * h, height: 2 * h} : {})) : J && (0 < h || n) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h, l ? A : w).attr(a).add(q))) : m && (g.graphic = m.destroy())
        }, convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e)
                g = e[f], h[f] = z(a[g], b[f], c[f], d[f]);
            return h
        }, getAttribs: function() {
            var a = this, b = a.options, c = da[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color, h = a.options.negativeColor;
            f = {stroke: g, fill: g};
            var k = a.points || [], n, m, w = [],
                    u = a.pointAttrToOptions;
            n = a.hasPointSpecificOptions;
            var A = c.lineColor, l = c.fillColor;
            m = b.turboThreshold;
            var J = a.zones, q = a.zoneAxis || "y", v;
            b.marker ? (e.radius = e.radius || c.radius + e.radiusPlus, e.lineWidth = e.lineWidth || c.lineWidth + e.lineWidthPlus) : (e.color = e.color || Ja(e.color || g).brighten(e.brightness).get(), e.negativeColor = e.negativeColor || Ja(e.negativeColor || h).brighten(e.brightness).get());
            w[""] = a.convertAttribs(c, f);
            x(["hover", "select"], function(b) {
                w[b] = a.convertAttribs(d[b], w[""])
            });
            a.pointAttr = w;
            g =
                    k.length;
            if (!m || g < m || n)
                for (; g--; ) {
                    m = k[g];
                    (c = m.options && m.options.marker || m.options) && !1 === c.enabled && (c.radius = 0);
                    if (J.length) {
                        n = 0;
                        for (f = J[n]; m[q] >= f.value; )
                            f = J[++n];
                        f.color && (m.color = m.fillColor = f.color)
                    }
                    n = b.colorByPoint || m.color;
                    if (m.options)
                        for (v in u)
                            t(c[u[v]]) && (n = !0);
                    n ? (c = c || {}, n = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !m.options.color && e[m.negative && h ? "negativeColor" : "color"] || Ja(m.color).brighten(f.brightness || e.brightness).get()), f = {color: m.color}, l || (f.fillColor =
                            m.color), A || (f.lineColor = m.color), c.hasOwnProperty("color") && !c.color && delete c.color, n[""] = a.convertAttribs(O(f, c), w[""]), n.hover = a.convertAttribs(d.hover, w.hover, n[""]), n.select = a.convertAttribs(d.select, w.select, n[""])) : n = w;
                    m.pointAttr = n
                }
        }, destroy: function() {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(Qa), d, e = a.data || [], f, g, h;
            na(a, "destroy");
            sa(a);
            x(a.axisTypes || [], function(b) {
                if (h = a[b])
                    p(h.series, a), h.isDirty = h.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (d = e.length; d--; )
                (f =
                        e[d]) && f.destroy && f.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            for (g in a)
                a[g]instanceof ha && !a[g].survive && (d = c && "group" === g ? "hide" : "destroy", a[g][d]());
            b.hoverSeries === a && (b.hoverSeries = null);
            p(b.series, a);
            for (g in a)
                delete a[g]
        }, getSegmentPath: function(a) {
            var b = this, c = [], d = b.options.step;
            x(a, function(e, f) {
                var g = e.plotX, h = e.plotY, k;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (k = a[f - 1], "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX +
                        g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        }, getGraphPath: function() {
            var a = this, b = [], c, d = [];
            x(a.segments, function(e) {
                c = a.getSegmentPath(e);
                1 < e.length ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        }, drawGraph: function() {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color, b.dashStyle]], d = b.lineWidth, e = "square" !== b.linecap, f = this.getGraphPath(), g = this.fillGraph && this.color || "none";
            x(this.zones, function(d, e) {
                c.push(["zoneGraph" + e,
                    d.color || a.color, d.dashStyle || b.dashStyle])
            });
            x(c, function(c, k) {
                var n = c[0], m = a[n];
                m ? m.animate({d: f}) : (d || g) && f.length && (m = {stroke: c[1], "stroke-width": d, fill: g, zIndex: 1}, c[2] ? m.dashstyle = c[2] : e && (m["stroke-linecap"] = m["stroke-linejoin"] = "round"), a[n] = a.chart.renderer.path(f).attr(m).add(a.group).shadow(2 > k && b.shadow))
            })
        }, applyZones: function() {
            var a = this, b = this.chart, c = b.renderer, d = this.zones, e, f, g = this.clips || [], h, k = this.graph, n = this.area, m = L(b.chartWidth, b.chartHeight), w = this[(this.zoneAxis || "y") +
                    "Axis"], u, A = w.reversed, l = b.inverted, J = w.horiz, q, v, t, p = !1;
            d.length && (k || n) && w.min !== H && (k && k.hide(), n && n.hide(), u = w.getExtremes(), x(d, function(d, x) {
                e = A ? J ? b.plotWidth : 0 : J ? 0 : w.toPixels(u.min);
                e = T(L(z(f, e), 0), m);
                f = T(L(K(w.toPixels(z(d.value, u.max), !0)), 0), m);
                p && (e = f = w.toPixels(u.max));
                q = Math.abs(e - f);
                v = T(e, f);
                t = L(e, f);
                w.isXAxis ? (h = {x: l ? t : v, y: 0, width: q, height: m}, J || (h.x = b.plotHeight - h.x)) : (h = {x: 0, y: l ? t : v, width: m, height: q}, J && (h.y = b.plotWidth - h.y));
                b.inverted && c.isVML && (h = w.isXAxis ? {x: 0, y: A ? v : t, height: h.width,
                    width: b.chartWidth} : {x: h.y - b.plotLeft - b.spacingBox.x, y: 0, width: h.height, height: b.chartHeight});
                g[x] ? g[x].animate(h) : (g[x] = c.clipRect(h), k && a["zoneGraph" + x].clip(g[x]), n && a["zoneArea" + x].clip(g[x]));
                p = d.value > u.max
            }), this.clips = g)
        }, invertGroups: function() {
            function a() {
                var a = {width: b.yAxis.len, height: b.xAxis.len};
                x(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this, c = b.chart;
            b.xAxis && (ca(c, "resize", a), ca(b, "destroy", function() {
                sa(c, "resize", a)
            }), a(), b.invertGroups = a)
        }, plotGroup: function(a,
                b, c, d, e) {
            var f = this[a], g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({visibility: c, zIndex: d || .1}).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        }, getPlotBox: function() {
            var a = this.chart, b = this.xAxis, c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return{translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1}
        }, render: function() {
            var a = this, b = a.chart, c, d = a.options, e = (c = d.animation) && !!a.animate && b.renderer.isSVG && z(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex,
                    h = a.hasRendered, k = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            x(a.points, function(a) {
                a.redraw && a.redraw()
            });
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey || h || c.clip(b.clipRect);
            e &&
                    a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate()
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        }, redraw: function() {
            var a = this.chart, b = this.isDirtyData, c = this.isDirty, d = this.group, e = this.xAxis, f = this.yAxis;
            d && (a.inverted && d.attr({width: a.plotWidth, height: a.plotHeight}), d.animate({translateX: z(e && e.left, a.plotLeft), translateY: z(f && f.top, a.plotTop)}));
            this.translate();
            this.render();
            b && na(this, "updatedData");
            (c || b) && delete this.kdTree
        }, kdDimensions: 1, kdAxisArray: ["clientX",
            "plotY"], searchPoint: function(a, b) {
            var c = this.xAxis, d = this.yAxis, e = this.chart.inverted;
            return this.searchKDTree({clientX: e ? c.len - a.chartY + c.pos : a.chartX - c.pos, plotY: e ? d.len - a.chartX + d.pos : a.chartY - d.pos}, b)
        }, buildKDTree: function() {
            function a(b, d, g) {
                var h, k;
                if (k = b && b.length)
                    return h = c.kdAxisArray[d % g], b.sort(function(a, b) {
                        return a[h] - b[h]
                    }), k = Math.floor(k / 2), {point: b[k], left: a(b.slice(0, k), d + 1, g), right: a(b.slice(k + 1), d + 1, g)}
            }
            function b() {
                var b = ib(c.points || [], function(a) {
                    return null !== a.y
                });
                c.kdTree =
                        a(b, d, d)
            }
            var c = this, d = c.kdDimensions;
            delete c.kdTree;
            c.options.kdSync ? b() : setTimeout(b)
        }, searchKDTree: function(a, b) {
            function c(a, b, n, m) {
                var w = b.point, u = d.kdAxisArray[n % m], A, l, q = w;
                l = t(a[e]) && t(w[e]) ? Math.pow(a[e] - w[e], 2) : null;
                A = t(a[f]) && t(w[f]) ? Math.pow(a[f] - w[f], 2) : null;
                A = (l || 0) + (A || 0);
                w.dist = t(A) ? Math.sqrt(A) : Number.MAX_VALUE;
                w.distX = t(l) ? Math.sqrt(l) : Number.MAX_VALUE;
                u = a[u] - w[u];
                A = 0 > u ? "left" : "right";
                l = 0 > u ? "right" : "left";
                b[A] && (A = c(a, b[A], n + 1, m), q = A[g] < q[g] ? A : w);
                b[l] && Math.sqrt(u * u) < q[g] && (a = c(a,
                        b[l], n + 1, m), q = a[g] < q[g] ? a : q);
                return q
            }
            var d = this, e = this.kdAxisArray[0], f = this.kdAxisArray[1], g = b ? "distX" : "dist";
            this.kdTree || this.buildKDTree();
            if (this.kdTree)
                return c(a, this.kdTree, this.kdDimensions, this.kdDimensions)
        }};
    Yb.prototype = {destroy: function() {
            ka(this, this.axis)
        }, render: function(a) {
            var b = this.options, c = b.format, c = c ? v(c, this) : b.formatter.call(this);
            this.label ? this.label.attr({text: c, visibility: "hidden"}) : this.label = this.axis.chart.renderer.text(c, null, null, b.useHTML).css(b.style).attr({align: this.textAlign,
                rotation: b.rotation, visibility: "hidden"}).add(a)
        }, setOffset: function(a, b) {
            var c = this.axis, d = c.chart, e = d.inverted, f = c.reversed, f = this.isNegative && !f || !this.isNegative && f, g = c.translate(c.usePercentage ? 100 : this.total, 0, 0, 0, 1), c = c.translate(0), c = la(g - c), h = d.xAxis[0].translate(this.x) + a, k = d.plotHeight, f = {x: e ? f ? g : g - c : h, y: e ? k - h - b : f ? k - g - c : k - g, width: e ? c : b, height: e ? b : c};
            if (e = this.label)
                e.align(this.alignOptions, null, f), f = e.alignAttr, e[!1 === this.options.crop || d.isInsidePlot(f.x, f.y) ? "show" : "hide"](!0)
        }};
    Ra.prototype.getStacks =
            function() {
                var a = this;
                x(a.yAxis, function(a) {
                    a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
                });
                x(a.series, function(b) {
                    !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type + z(b.options.stack, ""))
                })
            };
    fa.prototype.buildStacks = function() {
        var a = this.series, b = z(this.options.reversedStacks, !0), c = a.length;
        if (!this.isXAxis) {
            for (this.usePercentage = !1; c--; )
                a[b ? c : a.length - c - 1].setStackedPoints();
            if (this.usePercentage)
                for (c = 0; c < a.length; c++)
                    a[c].setPercentStacks()
        }
    };
    fa.prototype.renderStackTotals = function() {
        var a = this.chart, b = a.renderer, c = this.stacks, d, e, f = this.stackTotalGroup;
        f || (this.stackTotalGroup = f = b.g("stack-labels").attr({visibility: "visible", zIndex: 6}).add());
        f.translate(a.plotLeft, a.plotTop);
        for (d in c)
            for (e in a = c[d], a)
                a[e].render(f)
    };
    fa.prototype.resetStacks = function() {
        var a = this.stacks, b, c;
        if (!this.isXAxis)
            for (b in a)
                for (c in a[b])
                    a[b][c].touched < this.stacksTouched ? (a[b][c].destroy(), delete a[b][c]) : (a[b][c].total = null, a[b][c].cum = 0)
    };
    fa.prototype.cleanStacks =
            function() {
                var a, b, c;
                if (!this.isXAxis)
                    for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a)
                        for (c in a[b])
                            a[b][c].cum = a[b][c].total
            };
    ea.prototype.setStackedPoints = function() {
        if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var a = this.processedXData, b = this.processedYData, c = [], d = b.length, e = this.options, f = e.threshold, g = e.startFromThreshold ? f : 0, h = e.stack, e = e.stacking, k = this.stackKey, n = "-" + k, m = this.negStacks, w = this.yAxis, u = w.stacks, A = w.oldStacks, l, q,
                    v, t, p, x;
            w.stacksTouched += 1;
            for (t = 0; t < d; t++)
                p = a[t], x = b[t], v = this.index + "," + t, q = (l = m && x < (g ? 0 : f)) ? n : k, u[q] || (u[q] = {}), u[q][p] || (A[q] && A[q][p] ? (u[q][p] = A[q][p], u[q][p].total = null) : u[q][p] = new Yb(w, w.options.stackLabels, l, p, h)), q = u[q][p], q.points[v] = [z(q.cum, g)], q.touched = w.stacksTouched, "percent" === e ? (l = l ? k : n, m && u[l] && u[l][p] ? (l = u[l][p], q.total = l.total = L(l.total, q.total) + la(x) || 0) : q.total = ua(q.total + (la(x) || 0))) : q.total = ua(q.total + (x || 0)), q.cum = z(q.cum, g) + (x || 0), q.points[v].push(q.cum), c[t] = q.cum;
            "percent" ===
                    e && (w.usePercentage = !0);
            this.stackedYData = c;
            w.oldStacks = {}
        }
    };
    ea.prototype.setPercentStacks = function() {
        var a = this, b = a.stackKey, c = a.yAxis.stacks, d = a.processedXData;
        x([b, "-" + b], function(b) {
            for (var f = d.length, g, h; f--; )
                if (g = d[f], g = (h = c[b] && c[b][g]) && h.points[a.index + "," + f])
                    h = h.total ? 100 / h.total : 0, g[0] = ua(g[0] * h), g[1] = ua(g[1] * h), a.stackedYData[f] = g[1]
        })
    };
    O(Ra.prototype, {addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = z(b, !0), na(e, "addSeries", {options: a}, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        }, addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new fa(this, r(a, {index: this[e].length, isX: b}));
            f[e] = B(f[e] || {});
            f[e].push(a);
            z(c, !0) && this.redraw(d)
        }, showLoading: function(a) {
            var b = this, c = b.options, d = b.loadingDiv, e = c.loading, f = function() {
                d && y(d, {left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px"})
            };
            d || (b.loadingDiv = d = F("div", {className: "highcharts-loading"}, O(e.style, {zIndex: 10, display: "none"}), b.container), b.loadingSpan =
                    F("span", null, e.labelStyle, d), ca(b, "redraw", f));
            b.loadingSpan.innerHTML = a || c.lang.loading;
            b.loadingShown || (y(d, {opacity: 0, display: ""}), vb(d, {opacity: e.style.opacity}, {duration: e.showDuration || 0}), b.loadingShown = !0);
            f()
        }, hideLoading: function() {
            var a = this.options, b = this.loadingDiv;
            b && vb(b, {opacity: 0}, {duration: a.loading.hideDuration || 100, complete: function() {
                    y(b, {display: "none"})
                }});
            this.loadingShown = !1
        }});
    O(Ha.prototype, {update: function(a, b, c, d) {
            function e() {
                f.applyOptions(a);
                null === f.y && h && (f.graphic =
                        h.destroy());
                W(a) && !R(a) && (f.redraw = function() {
                    h && h.element && a && a.marker && a.marker.symbol && (f.graphic = h.destroy());
                    a && a.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy());
                    f.redraw = null
                });
                k = f.index;
                g.updateParallelArrays(f, k);
                w && f.name && (w[f.x] = f.name);
                m.data[k] = f.options;
                g.isDirty = g.isDirtyData = !0;
                !g.fixedBox && g.hasCartesianSeries && (n.isDirtyBox = !0);
                "point" === m.legendType && (n.isDirtyLegend = !0);
                b && n.redraw(c)
            }
            var f = this, g = f.series, h = f.graphic, k, n = g.chart, m = g.options, w = g.xAxis && g.xAxis.names;
            b = z(b, !0);
            !1 === d ? e() : f.firePointEvent("update", {options: a}, e)
        }, remove: function(a, b) {
            this.series.removePoint(Ua(this, this.series.data), a, b)
        }});
    O(ea.prototype, {addPoint: function(a, b, c, d) {
            var e = this, f = e.options, g = e.data, h = e.graph, k = e.area, n = e.chart, m = e.xAxis && e.xAxis.names, w = h && h.shift || 0, u = ["graph", "area"], h = f.data, A, l = e.xData;
            Sa(d, n);
            if (c) {
                for (d = e.zones.length; d--; )
                    u.push("zoneGraph" + d, "zoneArea" + d);
                x(u, function(a) {
                    e[a] && (e[a].shift = w + 1)
                })
            }
            k && (k.isArea = !0);
            b = z(b, !0);
            k = {series: e};
            e.pointClass.prototype.applyOptions.apply(k,
                    [a]);
            u = k.x;
            d = l.length;
            if (e.requireSorting && u < l[d - 1])
                for (A = !0; d && l[d - 1] > u; )
                    d--;
            e.updateParallelArrays(k, "splice", d, 0, 0);
            e.updateParallelArrays(k, d);
            m && k.name && (m[u] = k.name);
            h.splice(d, 0, a);
            A && (e.data.splice(d, 0, null), e.processData());
            "point" === f.legendType && e.generatePoints();
            c && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), e.updateParallelArrays(k, "shift"), h.shift()));
            e.isDirty = !0;
            e.isDirtyData = !0;
            b && (e.getAttribs(), n.redraw())
        }, removePoint: function(a, b, c) {
            var d = this, e = d.data, f = e[a], g = d.points, h =
                    d.chart, k = function() {
                        e.length === g.length && g.splice(a, 1);
                        e.splice(a, 1);
                        d.options.data.splice(a, 1);
                        d.updateParallelArrays(f || {series: d}, "splice", a, 1);
                        f && f.destroy();
                        d.isDirty = !0;
                        d.isDirtyData = !0;
                        b && h.redraw()
                    };
            Sa(c, h);
            b = z(b, !0);
            f ? f.firePointEvent("remove", null, k) : k()
        }, remove: function(a, b) {
            var c = this, d = c.chart;
            a = z(a, !0);
            c.isRemoving || (c.isRemoving = !0, na(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            }));
            c.isRemoving = !1
        }, update: function(a, b) {
            var c =
                    this, d = this.chart, e = this.userOptions, f = this.type, g = Q[f].prototype, h = ["group", "markerGroup", "dataLabelsGroup"], k;
            if (a.type && a.type !== f || void 0 !== a.zIndex)
                h.length = 0;
            x(h, function(a) {
                h[a] = c[a];
                delete c[a]
            });
            a = r(e, {animation: !1, index: this.index, pointStart: this.xData[0]}, {data: this.options.data}, a);
            this.remove(!1);
            for (k in g)
                this[k] = H;
            O(this, Q[a.type || f].prototype);
            x(h, function(a) {
                c[a] = h[a]
            });
            this.init(d, a);
            d.linkSeries();
            z(b, !0) && d.redraw(!1)
        }});
    O(fa.prototype, {update: function(a, b) {
            var c = this.chart;
            a =
                    c.options[this.coll][this.options.index] = r(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = this.chart._labelPanes = H;
            this.init(c, O(a, {events: H}));
            c.isDirtyBox = !0;
            z(b, !0) && c.redraw()
        }, remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series, e = d.length; e--; )
                d[e] && d[e].remove(!1);
            p(b.axes, this);
            p(b[c], this);
            b.options[c].splice(this.options.index, 1);
            x(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            z(a, !0) && b.redraw()
        }, setTitle: function(a, b) {
            this.update({title: a},
            b)
        }, setCategories: function(a, b) {
            this.update({categories: a}, b)
        }});
    var vc = U(ea);
    Q.line = vc;
    da.area = r(kb, {threshold: 0});
    var cc = U(ea, {type: "area", getSegments: function() {
            var a = this, b = [], c = [], d = [], e = this.xAxis, f = this.yAxis, g = f.stacks[this.stackKey], h = {}, k, n, m = this.points, w = this.options.connectNulls, u, A;
            if (this.options.stacking && !this.cropped) {
                for (u = 0; u < m.length; u++)
                    h[m[u].x] = m[u];
                for (A in g)
                    null !== g[A].total && d.push(+A);
                d.sort(function(a, b) {
                    return a - b
                });
                x(d, function(b) {
                    var d = 0, m;
                    if (!w || h[b] && null !== h[b].y)
                        if (h[b])
                            c.push(h[b]);
                        else {
                            for (u = a.index; u <= f.series.length; u++)
                                if (m = g[b].points[u + "," + b]) {
                                    d = m[1];
                                    break
                                }
                            k = e.translate(b);
                            n = f.toPixels(d, !0);
                            c.push({y: null, plotX: k, clientX: k, plotY: n, yBottom: n, onMouseOver: ma})
                        }
                });
                c.length && b.push(c)
            } else
                ea.prototype.getSegments.call(this), b = this.segments;
            this.segments = b
        }, getSegmentPath: function(a) {
            var b = ea.prototype.getSegmentPath.call(this, a), c = [].concat(b), d, e = this.options;
            d = b.length;
            var f = this.yAxis.getThreshold(e.threshold), g;
            3 === d && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)
                for (d =
                        a.length - 1; 0 <= d; d--)
                    g = z(a[d].yBottom, f), d < a.length - 1 && e.step && c.push(a[d + 1].plotX, g), c.push(a[d].plotX, g);
            else
                this.closeSegment(c, a, f);
            this.areaPath = this.areaPath.concat(c);
            return b
        }, closeSegment: function(a, b, c) {
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        }, drawGraph: function() {
            this.areaPath = [];
            ea.prototype.drawGraph.apply(this);
            var a = this, b = this.areaPath, c = this.options, d = [["area", this.color, c.fillColor]];
            x(this.zones, function(b, f) {
                d.push(["zoneArea" + f, b.color || a.color, b.fillColor || c.fillColor])
            });
            x(d, function(d) {
                var f = d[0], g = a[f];
                g ? g.animate({d: b}) : a[f] = a.chart.renderer.path(b).attr({fill: z(d[2], Ja(d[1]).setOpacity(z(c.fillOpacity, .75)).get()), zIndex: 0}).add(a.group)
            })
        }, drawLegendSymbol: mb.drawRectangle});
    Q.area = cc;
    da.spline = r(kb);
    var dc = U(ea, {type: "spline", getPointSpline: function(a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, k, n, m;
            if (f && g) {
                a = f.plotY;
                n = g.plotX;
                var g = g.plotY, w;
                h = (1.5 * d + f.plotX) / 2.5;
                k = (1.5 * e + a) / 2.5;
                n = (1.5 * d + n) / 2.5;
                m = (1.5 * e + g) / 2.5;
                w = (m - k) * (n - d) / (n - h) + e - m;
                k += w;
                m += w;
                k > a &&
                        k > e ? (k = L(a, e), m = 2 * e - k) : k < a && k < e && (k = T(a, e), m = 2 * e - k);
                m > g && m > e ? (m = L(g, e), k = 2 * e - m) : m < g && m < e && (m = T(g, e), k = 2 * e - m);
                b.rightContX = n;
                b.rightContY = m
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, k || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }});
    Q.spline = dc;
    da.areaspline = r(da.area);
    var Pb = cc.prototype, wc = U(dc, {type: "areaspline", closedStacks: !0, getSegmentPath: Pb.getSegmentPath, closeSegment: Pb.closeSegment, drawGraph: Pb.drawGraph, drawLegendSymbol: mb.drawRectangle});
    Q.areaspline = wc;
    da.column = r(kb, {borderColor: "#FFFFFF", borderRadius: 0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {hover: {brightness: .1, shadow: !1, halo: !1}, select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}}, dataLabels: {align: null, verticalAlign: null, y: null}, startFromThreshold: !0, stickyTracking: !1, tooltip: {distance: 6}, threshold: 0});
    var Qb = U(ea, {type: "column", pointAttrToOptions: {stroke: "borderColor", fill: "color", r: "borderRadius"}, cropShoulder: 0, directTouch: !0,
        trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function() {
            ea.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasRendered && x(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            })
        }, getColumnMetrics: function() {
            var a = this, b = a.options, c = a.xAxis, d = a.yAxis, e = c.reversed, f, g = {}, h, k = 0;
            !1 === b.grouping ? k = 1 : x(a.chart.series, function(b) {
                var c = b.options, e = b.yAxis;
                b.type === a.type && b.visible && d.len === e.len && d.pos === e.pos && (c.stacking ? (f = b.stackKey, g[f] === H && (g[f] = k++), h = g[f]) : !1 !== c.grouping &&
                        (h = k++), b.columnIndex = h)
            });
            var n = T(la(c.transA) * (c.ordinalSlope || b.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), m = n * b.groupPadding, w = (n - 2 * m) / k, b = T(b.maxPointWidth || c.len, z(b.pointWidth, w * (1 - 2 * b.pointPadding)));
            return a.columnMetrics = {width: b, offset: (w - b) / 2 + (m + ((e ? k - (a.columnIndex || 0) : a.columnIndex) || 0) * w - n / 2) * (e ? -1 : 1)}
        }, translate: function() {
            var a = this, b = a.chart, c = a.options, d = a.borderWidth = z(c.borderWidth, 2 > a.closestPointRange * a.xAxis.transA ? 0 : 1), e = a.yAxis, f = a.translatedThreshold = e.getThreshold(c.threshold),
                    g = z(c.minPointLength, 5), h = a.getColumnMetrics(), k = h.width, n = a.barW = L(k, 1 + 2 * d), m = a.pointXOffset = h.offset, w = -(d % 2 ? .5 : 0), u = d % 2 ? .5 : 1;
            b.inverted && (f -= .5, b.renderer.isVML && (u += 1));
            c.pointPadding && (n = Na(n));
            ea.prototype.translate.apply(a);
            x(a.points, function(c) {
                var d = z(c.yBottom, f), h = 999 + la(d), h = T(L(-h, c.plotY), e.len + h), l = c.plotX + m, q = n, v = T(h, d), p, t;
                p = L(h, d) - v;
                la(p) < g && g && (p = g, t = !e.reversed && !c.negative || e.reversed && c.negative, v = K(la(v - f) > g ? d - g : f - (t ? g : 0)));
                c.barX = l;
                c.pointWidth = k;
                q = K(l + q) + w;
                l = K(l) + w;
                q -= l;
                d = .5 > la(v);
                p = T(K(v + p) + u, 9E4);
                v = K(v) + u;
                p -= v;
                d && (--v, p += 1);
                c.tooltipPos = b.inverted ? [e.len + e.pos - b.plotLeft - h, a.xAxis.len - l - q / 2, p] : [l + q / 2, h + e.pos - b.plotTop, p];
                c.shapeType = "rect";
                c.shapeArgs = {x: l, y: v, width: q, height: p}
            })
        }, getSymbol: ma, drawLegendSymbol: mb.drawRectangle, drawGraph: ma, drawPoints: function() {
            var a = this, b = this.chart, c = a.options, d = b.renderer, e = c.animationLimit || 250, f, g;
            x(a.points, function(h) {
                var k = h.plotY, n = h.graphic;
                k === H || isNaN(k) || null === h.y ? n && (h.graphic = n.destroy()) : (f = h.shapeArgs, k = t(a.borderWidth) ?
                        {"stroke-width": a.borderWidth} : {}, g = h.pointAttr[h.selected ? "select" : ""] || a.pointAttr[""], n ? (jb(n), n.attr(k)[b.pointCount < e ? "animate" : "attr"](r(f))) : h.graphic = d[h.shapeType](f).attr(k).attr(g).add(a.group).shadow(c.shadow, null, c.stacking && !c.borderRadius))
            })
        }, animate: function(a) {
            var b = this.yAxis, c = this.options, d = this.chart.inverted, e = {};
            za && (a ? (e.scaleY = .001, a = T(b.pos + b.len, L(b.pos, b.toPixels(c.threshold))), d ? e.translateX = a - b.len : e.translateY = a, this.group.attr(e)) : (e.scaleY = 1, e[d ? "translateX" : "translateY"] =
                    b.pos, this.group.animate(e, this.options.animation), this.animate = null))
        }, remove: function() {
            var a = this, b = a.chart;
            b.hasRendered && x(b.series, function(b) {
                b.type === a.type && (b.isDirty = !0)
            });
            ea.prototype.remove.apply(a, arguments)
        }});
    Q.column = Qb;
    da.bar = r(da.column);
    var xc = U(Qb, {type: "bar", inverted: !0});
    Q.bar = xc;
    da.scatter = r(kb, {lineWidth: 0, marker: {enabled: !0}, tooltip: {headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px;"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});
    var ec = U(ea, {type: "scatter", sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, kdDimensions: 2, drawGraph: function() {
            this.options.lineWidth && ea.prototype.drawGraph.call(this)
        }});
    Q.scatter = ec;
    da.pie = r(kb, {borderColor: "#FFFFFF", borderWidth: 1, center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {distance: 30, enabled: !0, formatter: function() {
                return null === this.y ? void 0 : this.point.name
            }, x: 0}, ignoreHiddenPoint: !0, legendType: "point",
        marker: null, size: null, showInLegend: !1, slicedOffset: 10, states: {hover: {brightness: .1, shadow: !1}}, stickyTracking: !1, tooltip: {followPointer: !0}});
    var Rb = {type: "pie", isCartesian: !1, pointClass: U(Ha, {init: function() {
                Ha.prototype.init.apply(this, arguments);
                var a = this, b;
                O(a, {visible: !1 !== a.visible, name: z(a.name, "Slice")});
                b = function(b) {
                    a.slice("select" === b.type)
                };
                ca(a, "select", b);
                ca(a, "unselect", b);
                return a
            }, setVisible: function(a, b) {
                var c = this, d = c.series, e = d.chart, f = d.options.ignoreHiddenPoint;
                b = z(b, f);
                a !==
                        c.visible && (c.visible = c.options.visible = a = a === H ? !c.visible : a, d.options.data[Ua(c, d.data)] = c.options, x(["graphic", "dataLabel", "connector", "shadowGroup"], function(b) {
                            if (c[b])
                                c[b][a ? "show" : "hide"](!0)
                        }), c.legendItem && e.legend.colorizeItem(c, a), a || "hover" !== c.state || c.setState(""), f && (d.isDirty = !0), b && e.redraw())
            }, slice: function(a, b, c) {
                var d = this.series;
                Sa(c, d.chart);
                z(b, !0);
                this.sliced = this.options.sliced = a = t(a) ? a : !this.sliced;
                d.options.data[Ua(this, d.data)] = this.options;
                a = a ? this.slicedTranslation : {translateX: 0,
                    translateY: 0};
                this.graphic.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            }, haloPath: function(a) {
                var b = this.shapeArgs, c = this.series.chart;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.plotLeft + b.x, c.plotTop + b.y, b.r + a, b.r + a, {innerR: this.shapeArgs.r, start: b.start, end: b.end})
            }}), requireSorting: !1, directTouch: !0, noSharedTooltip: !0, trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        animate: function(a) {
            var b = this, c = b.points, d = b.startAngleRad;
            a || (x(c, function(a) {
                var c = a.graphic, g = a.shapeArgs;
                c && (c.attr({r: a.startR || b.center[3] / 2, start: d, end: d}), c.animate({r: g.r, start: g.start, end: g.end}, b.options.animation))
            }), b.animate = null)
        }, setData: function(a, b, c, d) {
            ea.prototype.setData.call(this, a, !1, c, d);
            this.processData();
            this.generatePoints();
            z(b, !0) && this.chart.redraw(c)
        }, updateTotals: function() {
            var a, b = 0, c = this.points, d = c.length, e, f = this.options.ignoreHiddenPoint;
            for (a = 0; a < d; a++)
                e = c[a],
                        b += f && !e.visible ? 0 : e.y;
            this.total = b;
            for (a = 0; a < d; a++)
                e = c[a], e.percentage = 0 < b && (e.visible || !f) ? e.y / b * 100 : 0, e.total = b
        }, generatePoints: function() {
            ea.prototype.generatePoints.call(this);
            this.updateTotals()
        }, translate: function(a) {
            this.generatePoints();
            var b = 0, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g, h, k = c.startAngle || 0, n = this.startAngleRad = Ka / 180 * (k - 90), k = (this.endAngleRad = Ka / 180 * (z(c.endAngle, k + 360) - 90)) - n, m = this.points, w = c.dataLabels.distance, c = c.ignoreHiddenPoint, u, A = m.length, l;
            a || (this.center =
                    a = this.getCenter());
            this.getX = function(b, c) {
                h = pa.asin(T((b - a[1]) / (a[2] / 2 + w), 1));
                return a[0] + (c ? -1 : 1) * wa(h) * (a[2] / 2 + w)
            };
            for (u = 0; u < A; u++) {
                l = m[u];
                f = n + b * k;
                if (!c || l.visible)
                    b += l.percentage / 100;
                g = n + b * k;
                l.shapeType = "arc";
                l.shapeArgs = {x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: K(1E3 * f) / 1E3, end: K(1E3 * g) / 1E3};
                h = (g + f) / 2;
                h > 1.5 * Ka ? h -= 2 * Ka : h < -Ka / 2 && (h += 2 * Ka);
                l.slicedTranslation = {translateX: K(wa(h) * d), translateY: K(Ba(h) * d)};
                f = wa(h) * a[2] / 2;
                g = Ba(h) * a[2] / 2;
                l.tooltipPos = [a[0] + .7 * f, a[1] + .7 * g];
                l.half = h < -Ka / 2 || h > Ka / 2 ?
                        1 : 0;
                l.angle = h;
                e = T(e, w / 2);
                l.labelPos = [a[0] + f + wa(h) * w, a[1] + g + Ba(h) * w, a[0] + f + wa(h) * e, a[1] + g + Ba(h) * e, a[0] + f, a[1] + g, 0 > w ? "center" : l.half ? "right" : "left", h]
            }
        }, drawGraph: null, drawPoints: function() {
            var a = this, b = a.chart.renderer, c, d, e = a.options.shadow, f, g, h;
            e && !a.shadowGroup && (a.shadowGroup = b.g("shadow").add(a.group));
            x(a.points, function(k) {
                null !== k.y && (d = k.graphic, g = k.shapeArgs, f = k.shadowGroup, e && !f && (f = k.shadowGroup = b.g("shadow").add(a.shadowGroup)), c = k.sliced ? k.slicedTranslation : {translateX: 0, translateY: 0},
                f && f.attr(c), d ? d.animate(O(g, c)) : (h = {"stroke-linejoin": "round"}, k.visible || (h.visibility = "hidden"), k.graphic = d = b[k.shapeType](g).setRadialReference(a.center).attr(k.pointAttr[k.selected ? "select" : ""]).attr(h).attr(c).add(a.group).shadow(e, f)))
            })
        }, searchPoint: ma, sortByAngle: function(a, b) {
            a.sort(function(a, d) {
                return void 0 !== a.angle && (d.angle - a.angle) * b
            })
        }, drawLegendSymbol: mb.drawRectangle, getCenter: bc.getCenter, getSymbol: ma}, Rb = U(ea, Rb);
    Q.pie = Rb;
    ea.prototype.drawDataLabels = function() {
        var a = this, b = a.options,
                c = b.cursor, d = b.dataLabels, e = a.points, f, g, h = a.hasRendered || 0, k, n, m = a.chart.renderer;
        if (d.enabled || a._hasPointLabels)
            a.dlProcessOptions && a.dlProcessOptions(d), n = a.plotGroup("dataLabelsGroup", "data-labels", d.defer ? "hidden" : "visible", d.zIndex || 6), z(d.defer, !0) && (n.attr({opacity: +h}), h || ca(a, "afterAnimate", function() {
                a.visible && n.show();
                n[b.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
            })), g = d, x(e, function(e) {
                var h, l = e.dataLabel, q, p, x = e.connector, M = !0, D, C = {};
                f = e.dlOptions || e.options && e.options.dataLabels;
                h = z(f && f.enabled, g.enabled);
                if (l && !h)
                    e.dataLabel = l.destroy();
                else if (h) {
                    d = r(g, f);
                    D = d.style;
                    h = d.rotation;
                    q = e.getLabelConfig();
                    k = d.format ? v(d.format, q) : d.formatter.call(q, d);
                    D.color = z(d.color, D.color, a.color, "black");
                    if (l)
                        t(k) ? (l.attr({text: k}), M = !1) : (e.dataLabel = l = l.destroy(), x && (e.connector = x.destroy()));
                    else if (t(k)) {
                        l = {fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: h, padding: d.padding, zIndex: 1};
                        "contrast" === D.color && (C.color = d.inside || 0 > d.distance ||
                                b.stacking ? m.getContrast(e.color || a.color) : "#000000");
                        c && (C.cursor = c);
                        for (p in l)
                            l[p] === H && delete l[p];
                        l = e.dataLabel = m[h ? "text" : "label"](k, 0, -999, d.shape, null, null, d.useHTML).attr(l).css(O(D, C)).add(n).shadow(d.shadow)
                    }
                    l && a.alignDataLabel(e, l, d, null, M)
                }
            })
    };
    ea.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = z(a.plotX, -999), k = z(a.plotY, -999), n = b.getBBox(), m = f.renderer.fontMetrics(c.style.fontSize).b, w = this.visible && (a.series.forceDL || f.isInsidePlot(h, K(k), g) || d && f.isInsidePlot(h,
                g ? d.x + 1 : d.y + d.height - 1, g));
        w && (d = O({x: g ? f.plotWidth - k : h, y: K(g ? f.plotHeight - h : k), width: 0, height: 0}, d), O(c, {width: n.width, height: n.height}), c.rotation ? (a = f.renderer.rotCorr(m, c.rotation), b[e ? "attr" : "animate"]({x: d.x + c.x + d.width / 2 + a.x, y: d.y + c.y + d.height / 2}).attr({align: c.align})) : (b.align(c, null, d), g = b.alignAttr, "justify" === z(c.overflow, "justify") ? this.justifyDataLabel(b, c, g, n, d, e) : z(c.crop, !0) && (w = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + n.width, g.y + n.height)), c.shape && b.attr({anchorX: a.plotX, anchorY: a.plotY})));
        w || (b.attr({y: -999}), b.placed = !1)
    };
    ea.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart, h = b.align, k = b.verticalAlign, n, m, w = a.box ? 0 : a.padding || 0;
        n = c.x + w;
        0 > n && ("right" === h ? b.align = "left" : b.x = -n, m = !0);
        n = c.x + d.width - w;
        n > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - n, m = !0);
        n = c.y + w;
        0 > n && ("bottom" === k ? b.verticalAlign = "top" : b.y = -n, m = !0);
        n = c.y + d.height - w;
        n > g.plotHeight && ("top" === k ? b.verticalAlign = "bottom" : b.y = g.plotHeight - n, m = !0);
        m && (a.placed = !f, a.align(b, null, e))
    };
    Q.pie && (Q.pie.prototype.drawDataLabels =
            function() {
                var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = z(e.connectorPadding, 10), g = z(e.connectorWidth, 1), h = d.plotWidth, k = d.plotHeight, n, m, w = z(e.softConnector, !0), u = e.distance, l = a.center, q = l[2] / 2, v = l[1], p = 0 < u, t, M, D, C = [[], []], r, y, G, H, B, F = [0, 0, 0, 0], ka = function(a, b) {
                    return b.y - a.y
                };
                if (a.visible && (e.enabled || a._hasPointLabels)) {
                    ea.prototype.drawDataLabels.apply(a);
                    x(b, function(a) {
                        a.dataLabel && a.visible && C[a.half].push(a)
                    });
                    for (H = 2; H--; ) {
                        var P = [], U = [], I = C[H], ta = I.length, E;
                        if (ta) {
                            a.sortByAngle(I,
                                    H - .5);
                            for (B = b = 0; !b && I[B]; )
                                b = I[B] && I[B].dataLabel && (I[B].dataLabel.getBBox().height || 21), B++;
                            if (0 < u) {
                                M = T(v + q + u, d.plotHeight);
                                for (B = L(0, v - q - u); B <= M; B += b)
                                    P.push(B);
                                M = P.length;
                                if (ta > M) {
                                    c = [].concat(I);
                                    c.sort(ka);
                                    for (B = ta; B--; )
                                        c[B].rank = B;
                                    for (B = ta; B--; )
                                        I[B].rank >= M && I.splice(B, 1);
                                    ta = I.length
                                }
                                for (B = 0; B < ta; B++) {
                                    c = I[B];
                                    D = c.labelPos;
                                    c = 9999;
                                    var O, S;
                                    for (S = 0; S < M; S++)
                                        O = la(P[S] - D[1]), O < c && (c = O, E = S);
                                    if (E < B && null !== P[B])
                                        E = B;
                                    else
                                        for (M < ta - B + E && null !== P[B] && (E = M - ta + B); null === P[E]; )
                                            E++;
                                    U.push({i: E, y: P[E]});
                                    P[E] = null
                                }
                                U.sort(ka)
                            }
                            for (B =
                                    0; B < ta; B++) {
                                c = I[B];
                                D = c.labelPos;
                                t = c.dataLabel;
                                G = !1 === c.visible ? "hidden" : "inherit";
                                c = D[1];
                                if (0 < u) {
                                    if (M = U.pop(), E = M.i, y = M.y, c > y && null !== P[E + 1] || c < y && null !== P[E - 1])
                                        y = T(L(0, c), d.plotHeight)
                                } else
                                    y = c;
                                r = e.justify ? l[0] + (H ? -1 : 1) * (q + u) : a.getX(y === v - q - u || y === v + q + u ? c : y, H);
                                t._attr = {visibility: G, align: D[6]};
                                t._pos = {x: r + e.x + ({left: f, right: -f}[D[6]] || 0), y: y + e.y - 10};
                                t.connX = r;
                                t.connY = y;
                                null === this.options.size && (M = t.width, r - M < f ? F[3] = L(K(M - r + f), F[3]) : r + M > h - f && (F[1] = L(K(r + M - h + f), F[1])), 0 > y - b / 2 ? F[0] = L(K(-y + b / 2), F[0]) :
                                        y + b / 2 > k && (F[2] = L(K(y + b / 2 - k), F[2])))
                            }
                        }
                    }
                    if (0 === qa(F) || this.verifyDataLabelOverflow(F))
                        this.placeDataLabels(), p && g && x(this.points, function(b) {
                            n = b.connector;
                            D = b.labelPos;
                            (t = b.dataLabel) && t._pos && b.visible ? (G = t._attr.visibility, r = t.connX, y = t.connY, m = w ? ["M", r + ("left" === D[6] ? 5 : -5), y, "C", r, y, 2 * D[2] - D[4], 2 * D[3] - D[5], D[2], D[3], "L", D[4], D[5]] : ["M", r + ("left" === D[6] ? 5 : -5), y, "L", D[2], D[3], "L", D[4], D[5]], n ? (n.animate({d: m}), n.attr("visibility", G)) : b.connector = n = a.chart.renderer.path(m).attr({"stroke-width": g, stroke: e.connectorColor ||
                                        b.color || "#606060", visibility: G}).add(a.dataLabelsGroup)) : n && (b.connector = n.destroy())
                        })
                }
            }, Q.pie.prototype.placeDataLabels = function() {
        x(this.points, function(a) {
            var b = a.dataLabel;
            b && a.visible && ((a = b._pos) ? (b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({y: -999}))
        })
    }, Q.pie.prototype.alignDataLabel = ma, Q.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center, c = this.options, d = c.center, e = c.minSize || 80, f = e, g;
        null !== d[0] ? f = L(b[2] - L(a[1], a[3]), e) : (f = L(b[2] - a[1] - a[3], e), b[0] +=
                (a[3] - a[1]) / 2);
        null !== d[1] ? f = L(T(f, b[2] - L(a[0], a[2])), e) : (f = L(T(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
        f < b[2] ? (b[2] = f, b[3] = ga(c.innerSize || 0, f), this.translate(b), x(this.points, function(a) {
            a.dataLabel && (a.dataLabel._pos = null)
        }), this.drawDataLabels && this.drawDataLabels()) : g = !0;
        return g
    });
    Q.column && (Q.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart.inverted, g = a.series, h = a.dlBox || a.shapeArgs, k = z(a.below, a.plotY > z(this.translatedThreshold, g.yAxis.len)), n = z(c.inside, !!this.options.stacking);
        h && (d = r(h), f && (d = {x: g.yAxis.len - d.y - d.height, y: g.xAxis.len - d.x - d.width, width: d.height, height: d.width}), n || (f ? (d.x += k ? 0 : d.width, d.width = 0) : (d.y += k ? d.height : 0, d.height = 0)));
        c.align = z(c.align, !f || n ? "center" : k ? "right" : "left");
        c.verticalAlign = z(c.verticalAlign, f || n ? "middle" : k ? "top" : "bottom");
        ea.prototype.alignDataLabel.call(this, a, b, c, d, e)
    });
    var bb = Z.TrackerMixin = {drawTrackerPoint: function() {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function(a) {
                for (var c = a.target, d; c && !d; )
                    d =
                            c.point, c = c.parentNode;
                if (d !== H && d !== b.hoverPoint)
                    d.onMouseOver(a)
            };
            x(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point = a)
            });
            a._hasTracking || (x(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                    c.onTrackerMouseOut(a)
                }).css(e), cb))
                    a[b].on("touchstart", f)
            }), a._hasTracking = !0)
        }, drawTrackerGraph: function() {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e =
                    d.length, f = a.chart, g = f.pointer, h = f.renderer, k = f.options.tooltip.snap, n = a.tracker, m = b.cursor, w = m && {cursor: m}, m = a.singlePoints, u, l = function() {
                if (f.hoverSeries !== a)
                    a.onMouseOver()
            }, q = "rgba(192,192,192," + (za ? 1E-4 : .002) + ")";
            if (e && !c)
                for (u = e + 1; u--; )
                    "M" === d[u] && d.splice(u + 1, 0, d[u + 1] - k, d[u + 2], "L"), (u && "M" === d[u] || u === e) && d.splice(u, 0, "L", d[u - 2] + k, d[u - 1]);
            for (u = 0; u < m.length; u++)
                e = m[u], d.push("M", e.plotX - k, e.plotY, "L", e.plotX + k, e.plotY);
            n ? n.attr({d: d}) : (a.tracker = h.path(d).attr({"stroke-linejoin": "round", visibility: a.visible ?
                        "visible" : "hidden", stroke: q, fill: c ? q : "none", "stroke-width": b.lineWidth + (c ? 0 : 2 * k), zIndex: 2}).add(a.group), x([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", l).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(w);
                if (cb)
                    a.on("touchstart", l)
            }))
        }};
    Q.column && (Qb.prototype.drawTracker = bb.drawTrackerPoint);
    Q.pie && (Q.pie.prototype.drawTracker = bb.drawTrackerPoint);
    Q.scatter && (ec.prototype.drawTracker = bb.drawTrackerPoint);
    O(xb.prototype, {setItemEvents: function(a, b,
                c, d, e) {
            var f = this;
            (c ? b : a.legendGroup).on("mouseover", function() {
                a.setState("hover");
                b.css(f.options.itemHoverStyle)
            }).on("mouseout", function() {
                b.css(a.visible ? d : e);
                a.setState()
            }).on("click", function(b) {
                var c = function() {
                    a.setVisible()
                };
                b = {browserEvent: b};
                a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : na(a, "legendItemClick", b, c)
            })
        }, createCheckboxForItem: function(a) {
            a.checkbox = F("input", {type: "checkbox", checked: a.selected, defaultChecked: a.selected}, this.options.itemCheckboxStyle, this.chart.container);
            ca(a.checkbox, "click", function(b) {
                na(a.series || a, "checkboxClick", {checked: b.target.checked, item: a}, function() {
                    a.select()
                })
            })
        }});
    oa.legend.itemStyle.cursor = "pointer";
    O(Ra.prototype, {showResetZoom: function() {
            var a = this, b = oa.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({align: c.position.align, title: b.resetZoomTitle}).add().align(c.position, !1,
                    f)
        }, zoomOut: function() {
            var a = this;
            na(a, "selection", {resetSelection: !0}, function() {
                a.zoom()
            })
        }, zoom: function(a) {
            var b, c = this.pointer, d = !1, e;
            !a || a.resetSelection ? x(this.axes, function(a) {
                b = a.zoom()
            }) : x(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis, h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"])
                    b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && W(e) && (this.resetZoomButton = e.destroy());
            b && this.redraw(z(this.options.chart.animation, a && a.animation,
                    100 > this.pointCount))
        }, pan: function(a, b) {
            var c = this, d = c.hoverPoints, e;
            d && x(d, function(a) {
                a.setState()
            });
            x("xy" === b ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], k = c[b ? "mouseDownX" : "mouseDownY"], n = (h.pointRange || 0) / 2, m = h.getExtremes(), w = h.toValue(k - d, !0) + n, n = h.toValue(k + c[b ? "plotWidth" : "plotHeight"] - d, !0) - n, k = k > d;
                h.series.length && (k || w > T(m.dataMin, m.min)) && (!k || n < L(m.dataMax, m.max)) && (h.setExtremes(w, n, !1, !1, {trigger: "pan"}), e = !0);
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e &&
                    c.redraw(!1);
            y(c.container, {cursor: "move"})
        }});
    O(Ha.prototype, {select: function(a, b) {
            var c = this, d = c.series, e = d.chart;
            a = z(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function() {
                c.selected = c.options.selected = a;
                d.options.data[Ua(c, d.data)] = c.options;
                c.setState(a && "select");
                b || x(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Ua(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
            })
        }, onMouseOver: function(a, b) {
            var c =
                    this.series, d = c.chart, e = d.tooltip, f = d.hoverPoint;
            if (d.hoverSeries !== c)
                c.onMouseOver();
            if (f && f !== this)
                f.onMouseOut();
            this.series && (this.firePointEvent("mouseOver"), !e || e.shared && !c.noSharedTooltip || e.refresh(this, a), this.setState("hover"), b || (d.hoverPoint = this))
        }, onMouseOut: function() {
            var a = this.series.chart, b = a.hoverPoints;
            this.firePointEvent("mouseOut");
            b && -1 !== Ua(this, b) || (this.setState(), a.hoverPoint = null)
        }, importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = r(this.series.options.point, this.options).events,
                        b;
                this.events = a;
                for (b in a)
                    ca(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        }, setState: function(a, b) {
            var c = this.plotX, d = this.plotY, e = this.series, f = e.options.states, g = da[e.type].marker && e.options.marker, h = g && !g.enabled, k = g && g.states[a], n = k && !1 === k.enabled, m = e.stateMarkerGraphic, w = this.marker || {}, u = e.chart, l = e.halo, q;
            a = a || "";
            q = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (n || h && !1 === k.enabled) || a && w.states && w.states[a] && !1 === w.states[a].enabled)) {
                if (this.graphic)
                    g =
                            g && this.graphic.symbolName && q.r, this.graphic.attr(r(q, g ? {x: c - g, y: d - g, width: 2 * g, height: 2 * g} : {})), m && m.hide();
                else {
                    if (a && k)
                        if (g = k.radius, w = w.symbol || e.symbol, m && m.currentSymbol !== w && (m = m.destroy()), m)
                            m[b ? "animate" : "attr"]({x: c - g, y: d - g});
                        else
                            w && (e.stateMarkerGraphic = m = u.renderer.symbol(w, c - g, d - g, 2 * g, 2 * g).attr(q).add(e.markerGroup), m.currentSymbol = w);
                    m && (m[a && u.isInsidePlot(c, d, u.inverted) ? "show" : "hide"](), m.element.point = this)
                }
                (c = f[a] && f[a].halo) && c.size ? (l || (e.halo = l = u.renderer.path().add(u.seriesGroup)),
                        l.attr(O({fill: Ja(this.color || e.color).setOpacity(c.opacity).get()}, c.attributes))[b ? "animate" : "attr"]({d: this.haloPath(c.size)})) : l && l.attr({d: []});
                this.state = a
            }
        }, haloPath: function(a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, 2 * a, 2 * a)
        }});
    O(ea.prototype, {onMouseOver: function() {
            var a = this.chart, b = a.hoverSeries;
            if (b && b !== this)
                b.onMouseOut();
            this.options.events.mouseOver &&
                    na(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        }, onMouseOut: function() {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            b.hoverSeries = null;
            if (d)
                d.onMouseOut();
            this && a.events.mouseOut && na(this, "mouseOut");
            !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            this.setState()
        }, setState: function(a) {
            var b = this.options, c = this.graph, d = b.states, e = b.lineWidth, b = 0;
            a = a || "";
            if (this.state !== a && (this.state = a, !d[a] || !1 !== d[a].enabled) && (a && (e = d[a].lineWidth || e + (d[a].lineWidthPlus ||
                    0)), c && !c.dashstyle))
                for (a = {"stroke-width":e}, c.attr(a); this["zoneGraph" + b]; )
                    this["zoneGraph" + b].attr(a), b += 1
        }, setVisible: function(a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === H ? !h : a) ? "show" : "hide";
            x(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a])
                    c[a][f]()
            });
            if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c)
                c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking &&
                    x(d.series, function(a) {
                        a.options.stacking && a.visible && (a.isDirty = !0)
                    });
            x(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            g && (d.isDirtyBox = !0);
            !1 !== b && d.redraw();
            na(c, f)
        }, show: function() {
            this.setVisible(!0)
        }, hide: function() {
            this.setVisible(!1)
        }, select: function(a) {
            this.selected = a = a === H ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            na(this, a ? "select" : "unselect")
        }, drawTracker: bb.drawTrackerGraph});
    ba(ea.prototype, "init", function(a) {
        var b;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        (b = this.xAxis) && b.options.ordinal && ca(this, "updatedData", function() {
            delete b.ordinalIndex
        })
    });
    ba(fa.prototype, "getTimeTicks", function(a, b, c, d, e, f, g, h) {
        var k = 0, n = 0, m, w = {}, u, l, q, v = [], p = -Number.MAX_VALUE, x = this.options.tickPixelInterval;
        if (!this.options.ordinal && !this.options.breaks || !f || 3 > f.length || c === H)
            return a.call(this, b, c, d, e);
        for (l = f.length; n < l; n++) {
            q = n && f[n - 1] > d;
            f[n] < c && (k = n);
            if (n === l - 1 || f[n + 1] - f[n] > 5 * g || q) {
                if (f[n] > p) {
                    for (m = a.call(this, b, f[k], f[n], e); m.length && m[0] <= p; )
                        m.shift();
                    m.length && (p =
                            m[m.length - 1]);
                    v = v.concat(m)
                }
                k = n + 1
            }
            if (q)
                break
        }
        a = m.info;
        if (h && a.unitRange <= ia.hour) {
            n = v.length - 1;
            for (k = 1; k < n; k++)
                Ca("%d", v[k]) !== Ca("%d", v[k - 1]) && (w[v[k]] = "day", u = !0);
            u && (w[v[0]] = "day");
            a.higherRanks = w
        }
        v.info = a;
        if (h && t(x)) {
            h = a = v.length;
            var n = [], D;
            for (u = []; h--; )
                k = this.translate(v[h]), D && (u[h] = D - k), n[h] = D = k;
            u.sort();
            u = u[ja(u.length / 2)];
            u < .6 * x && (u = null);
            h = v[a - 1] > d ? a - 1 : a;
            for (D = void 0; h--; )
                k = n[h], d = D - k, D && d < .8 * x && (null === u || d < .8 * u) ? (w[v[h]] && !w[v[h + 1]] ? (d = h + 1, D = k) : d = h, v.splice(d, 1)) : D = k
        }
        return v
    });
    O(fa.prototype,
            {beforeSetTickPositions: function() {
                    var a, b = [], c = !1, d, e = this.getExtremes(), f = e.min, g = e.max, h, k = this.isXAxis && !!this.options.breaks;
                    if ((e = this.options.ordinal) || k) {
                        x(this.series, function(c, d) {
                            if (!1 !== c.visible && (!1 !== c.takeOrdinalPosition || k) && (b = b.concat(c.processedXData), a = b.length, b.sort(function(a, b) {
                                return a - b
                            }), a))
                                for (d = a - 1; d--; )
                                    b[d] === b[d + 1] && b.splice(d, 1)
                        });
                        a = b.length;
                        if (2 < a) {
                            d = b[1] - b[0];
                            for (h = a - 1; h-- && !c; )
                                b[h + 1] - b[h] !== d && (c = !0);
                            !this.options.keepOrdinalPadding && (b[0] - f > d || g - b[b.length - 1] >
                                    d) && (c = !0)
                        }
                        c ? (this.ordinalPositions = b, d = this.val2lin(L(f, b[0]), !0), h = L(this.val2lin(T(g, b[b.length - 1]), !0), 1), this.ordinalSlope = g = (g - f) / (h - d), this.ordinalOffset = f - d * g) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = H
                    }
                    this.doPostTranslate = e && c || k;
                    this.groupIntervalFactor = null
                }, val2lin: function(a, b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = c.length, e, f;
                        for (e = d; e--; )
                            if (c[e] === a) {
                                f = e;
                                break
                            }
                        for (e = d - 1; e--; )
                            if (a > c[e] || 0 === e) {
                                c = (a - c[e]) / (c[e + 1] - c[e]);
                                f = e + c;
                                break
                            }
                        return b ? f : this.ordinalSlope * (f ||
                                0) + this.ordinalOffset
                    }
                    return a
                }, lin2val: function(a, b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = this.ordinalSlope, e = this.ordinalOffset, f = c.length - 1, g, h;
                        if (b)
                            0 > a ? a = c[0] : a > f ? a = c[f] : (f = ja(a), h = a - f);
                        else
                            for (; f--; )
                                if (g = d * f + e, a >= g) {
                                    d = d * (f + 1) + e;
                                    h = (a - g) / (d - g);
                                    break
                                }
                        return h !== H && c[f] !== H ? c[f] + (h ? h * (c[f + 1] - c[f]) : 0) : a
                    }
                    return a
                }, getExtendedPositions: function() {
                    var a = this.chart, b = this.series[0].currentDataGrouping, c = this.ordinalIndex, d = b ? b.count + b.unitName : "raw", e = this.getExtremes(), f, g;
                    c || (c = this.ordinalIndex =
                            {});
                    c[d] || (f = {series: [], getExtremes: function() {
                            return{min: e.dataMin, max: e.dataMax}
                        }, options: {ordinal: !0}, val2lin: fa.prototype.val2lin}, x(this.series, function(c) {
                        g = {xAxis: f, xData: c.xData, chart: a, destroyGroupedData: ma};
                        g.options = {dataGrouping: b ? {enabled: !0, forced: !0, approximation: "open", units: [[b.unitName, [b.count]]]} : {enabled: !1}};
                        c.processData.apply(g);
                        f.series.push(g)
                    }), this.beforeSetTickPositions.apply(f), c[d] = f.ordinalPositions);
                    return c[d]
                }, getGroupIntervalFactor: function(a, b, c) {
                    var d = 0;
                    c = c.processedXData;
                    var e = c.length, f = [], g = this.groupIntervalFactor;
                    if (!g) {
                        for (; d < e - 1; d++)
                            f[d] = c[d + 1] - c[d];
                        f.sort(function(a, b) {
                            return a - b
                        });
                        d = f[ja(e / 2)];
                        a = L(a, c[0]);
                        b = T(b, c[e - 1]);
                        this.groupIntervalFactor = g = e * d / (b - a)
                    }
                    return g
                }, postProcessTickInterval: function(a) {
                    var b = this.ordinalSlope;
                    return b ? this.options.breaks ? this.closestPointRange : a / (b / this.closestPointRange) : a
                }});
    ba(Ra.prototype, "pan", function(a, b) {
        var c = this.xAxis[0], d = b.chartX, e = !1;
        if (c.options.ordinal && c.series.length) {
            var f = this.mouseDownX, g = c.getExtremes(),
                    h = g.dataMax, k = g.min, n = g.max, m = this.hoverPoints, w = c.closestPointRange, f = (f - d) / (c.translationSlope * (c.ordinalSlope || w)), u = {ordinalPositions: c.getExtendedPositions()}, w = c.lin2val, l = c.val2lin, q;
            u.ordinalPositions ? 1 < la(f) && (m && x(m, function(a) {
                a.setState()
            }), 0 > f ? (m = u, q = c.ordinalPositions ? c : u) : (m = c.ordinalPositions ? c : u, q = u), u = q.ordinalPositions, h > u[u.length - 1] && u.push(h), this.fixedRange = n - k, f = c.toFixedRange(null, null, w.apply(m, [l.apply(m, [k, !0]) + f, !0]), w.apply(q, [l.apply(q, [n, !0]) + f, !0])), f.min >= T(g.dataMin,
                    k) && f.max <= L(h, n) && c.setExtremes(f.min, f.max, !0, !1, {trigger: "pan"}), this.mouseDownX = d, y(this.container, {cursor: "move"})) : e = !0
        } else
            e = !0;
        e && a.apply(this, Array.prototype.slice.call(arguments, 1))
    });
    ba(ea.prototype, "getSegments", function(a) {
        var b, c = this.options.gapSize, d = this.xAxis;
        a.apply(this, Array.prototype.slice.call(arguments, 1));
        c && (b = this.segments, x(b, function(a, f) {
            for (var g = a.length - 1; g--; )
                if (a[g].x < d.min && a[g + 1].x > d.max) {
                    b.length = 0;
                    break
                } else
                    a[g + 1].x - a[g].x > d.closestPointRange * c && b.splice(f +
                            1, 0, a.splice(g + 1, a.length - g))
        }))
    });
    var ya = ea.prototype, fc = Mb.prototype, yc = ya.processData, zc = ya.generatePoints, Ac = ya.destroy, Bc = fc.tooltipFooterHeaderFormatter, Cc = {approximation: "average", groupPixelWidth: 2, dateTimeLabelFormats: {millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], day: ["%A, %b %e, %Y",
                "%A, %b %e", "-%A, %b %e, %Y"], week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], month: ["%B %Y", "%B", "-%B %Y"], year: ["%Y", "%Y", "-%Y"]}}, gc = {line: {}, spline: {}, area: {}, areaspline: {}, column: {approximation: "sum", groupPixelWidth: 10}, arearange: {approximation: "range"}, areasplinerange: {approximation: "range"}, columnrange: {approximation: "range", groupPixelWidth: 10}, candlestick: {approximation: "ohlc", groupPixelWidth: 10}, ohlc: {approximation: "ohlc", groupPixelWidth: 5}}, hc = [["millisecond", [1, 2, 5, 10, 20,
                25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1]], ["week", [1]], ["month", [1, 3, 6]], ["year", null]], Xa = {sum: function(a) {
            var b = a.length, c;
            if (!b && a.hasNulls)
                c = null;
            else if (b)
                for (c = 0; b--; )
                    c += a[b];
            return c
        }, average: function(a) {
            var b = a.length;
            a = Xa.sum(a);
            "number" === typeof a && b && (a /= b);
            return a
        }, open: function(a) {
            return a.length ? a[0] : a.hasNulls ? null : H
        }, high: function(a) {
            return a.length ? qa(a) : a.hasNulls ? null : H
        }, low: function(a) {
            return a.length ? D(a) :
                    a.hasNulls ? null : H
        }, close: function(a) {
            return a.length ? a[a.length - 1] : a.hasNulls ? null : H
        }, ohlc: function(a, b, c, d) {
            a = Xa.open(a);
            b = Xa.high(b);
            c = Xa.low(c);
            d = Xa.close(d);
            if ("number" === typeof a || "number" === typeof b || "number" === typeof c || "number" === typeof d)
                return[a, b, c, d]
        }, range: function(a, b) {
            a = Xa.low(a);
            b = Xa.high(b);
            if ("number" === typeof a || "number" === typeof b)
                return[a, b]
        }};
    ya.groupData = function(a, b, c, d) {
        var e = this.data, f = this.options.data, g = [], h = [], k = a.length, n, m, w = !!b, u = [[], [], [], []];
        d = "function" === typeof d ?
                d : Xa[d];
        var l = this.pointArrayMap, q = l && l.length, v;
        for (v = 0; v <= k && !(a[v] >= c[0]); v++)
            ;
        for (; v <= k; v++) {
            for (; (c[1] !== H && a[v] >= c[1] || v === k) && (n = c.shift(), m = d.apply(0, u), m !== H && (g.push(n), h.push(m)), u[0] = [], u[1] = [], u[2] = [], u[3] = [], v !== k); )
                ;
            if (v === k)
                break;
            if (l) {
                n = this.cropStart + v;
                n = e && e[n] || this.pointClass.prototype.applyOptions.apply({series: this}, [f[n]]);
                var p;
                for (m = 0; m < q; m++)
                    p = n[l[m]], "number" === typeof p ? u[m].push(p) : null === p && (u[m].hasNulls = !0)
            } else
                n = w ? b[v] : null, "number" === typeof n ? u[0].push(n) : null ===
                        n && (u[0].hasNulls = !0)
        }
        return[g, h]
    };
    ya.processData = function() {
        var a = this.chart, b = this.options, c = b.dataGrouping, d = !1 !== this.allowDG && c && z(c.enabled, a.options._stock), e;
        this.forceCrop = d;
        this.groupPixelWidth = null;
        this.hasProcessed = !0;
        if (!1 !== yc.apply(this, arguments) && d) {
            this.destroyGroupedData();
            var f = this.processedXData, g = this.processedYData, h = a.plotSizeX, a = this.xAxis, k = a.options.ordinal, n = this.groupPixelWidth = a.getGroupPixelWidth && a.getGroupPixelWidth(), d = this.pointRange;
            if (n) {
                e = !0;
                this.points = null;
                var m = a.getExtremes(), d = m.min, m = m.max, k = k && a.getGroupIntervalFactor(d, m, this) || 1, h = n * (m - d) / h * k, n = a.getTimeTicks(a.normalizeTimeTickInterval(h, c.units || hc), d, m, a.options.startOfWeek, f, this.closestPointRange), g = ya.groupData.apply(this, [f, g, n, c.approximation]), f = g[0], g = g[1];
                if (c.smoothed) {
                    c = f.length - 1;
                    for (f[c] = m; c-- && 0 < c; )
                        f[c] += h / 2;
                    f[0] = d
                }
                this.currentDataGrouping = n.info;
                null === b.pointRange && (this.pointRange = n.info.totalRange);
                this.closestPointRange = n.info.totalRange;
                t(f[0]) && f[0] < a.dataMin && (a.min ===
                        a.dataMin && (a.min = f[0]), a.dataMin = f[0]);
                this.processedXData = f;
                this.processedYData = g
            } else
                this.currentDataGrouping = null, this.pointRange = d;
            this.hasGroupedData = e
        }
    };
    ya.destroyGroupedData = function() {
        var a = this.groupedData;
        x(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null)
        });
        this.groupedData = null
    };
    ya.generatePoints = function() {
        zc.apply(this);
        this.destroyGroupedData();
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    fc.tooltipFooterHeaderFormatter = function(a, b) {
        var c = a.series, d = c.tooltipOptions,
                e = c.options.dataGrouping, f = d.xDateFormat, g, h = c.xAxis;
        h && "datetime" === h.options.type && e && X(a.key) ? (c = c.currentDataGrouping, e = e.dateTimeLabelFormats, c ? (h = e[c.unitName], 1 === c.count ? f = h[0] : (f = h[1], g = h[2])) : !f && e && (f = this.getXDateFormat(a, d, h)), f = Ca(f, a.key), g && (f += Ca(g, a.key + c.totalRange - 1)), d = d[(b ? "footer" : "header") + "Format"].replace("{point.key}", f)) : d = Bc.call(this, a, b);
        return d
    };
    ya.destroy = function() {
        for (var a = this.groupedData || [], b = a.length; b--; )
            a[b] && a[b].destroy();
        Ac.apply(this)
    };
    ba(ya, "setOptions",
            function(a, b) {
                var c = a.call(this, b), d = this.type, e = this.chart.options.plotOptions, f = da[d].dataGrouping;
                gc[d] && (f || (f = r(Cc, gc[d])), c.dataGrouping = r(f, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping));
                this.chart.options._stock && (this.requireSorting = !0);
                return c
            });
    ba(fa.prototype, "setScale", function(a) {
        a.call(this);
        x(this.series, function(a) {
            a.hasProcessed = !1
        })
    });
    fa.prototype.getGroupPixelWidth = function() {
        var a = this.series, b = a.length, c, d = 0, e = !1, f;
        for (c = b; c--; )
            (f = a[c].options.dataGrouping) &&
                    (d = L(d, f.groupPixelWidth));
        for (c = b; c--; )
            (f = a[c].options.dataGrouping) && a[c].hasProcessed && (b = (a[c].processedXData || a[c].data).length, a[c].groupPixelWidth || b > this.chart.plotSizeX / d || b && f.forced) && (e = !0);
        return e ? d : 0
    };
    fa.prototype.setDataGrouping = function(a, b) {
        var c;
        b = z(b, !0);
        a || (a = {forced: !1, units: null});
        if (this instanceof fa)
            for (c = this.series.length; c--; )
                this.series[c].update({dataGrouping: a}, !1);
        else
            x(this.chart.options.series, function(b) {
                b.dataGrouping = a
            }, !1);
        b && this.chart.redraw()
    };
    da.ohlc = r(da.column,
            {lineWidth: 1, tooltip: {pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'}, states: {hover: {lineWidth: 3}}, threshold: null});
    var ic = U(Q.column, {type: "ohlc", pointArrayMap: ["open", "high", "low", "close"], toYData: function(a) {
            return[a.open, a.high, a.low, a.close]
        }, pointValKey: "high", pointAttrToOptions: {stroke: "color", "stroke-width": "lineWidth"}, upColorProp: "stroke", getAttribs: function() {
            Q.column.prototype.getAttribs.apply(this,
                    arguments);
            var a = this.options, b = a.states, a = a.upColor || this.color, c = r(this.pointAttr), d = this.upColorProp;
            c[""][d] = a;
            c.hover[d] = b.hover.upColor || a;
            c.select[d] = b.select.upColor || a;
            x(this.points, function(a) {
                a.open < a.close && !a.options.color && (a.pointAttr = c)
            })
        }, translate: function() {
            var a = this.yAxis;
            Q.column.prototype.translate.apply(this);
            x(this.points, function(b) {
                null !== b.open && (b.plotOpen = a.translate(b.open, 0, 1, 0, 1));
                null !== b.close && (b.plotClose = a.translate(b.close, 0, 1, 0, 1))
            })
        }, drawPoints: function() {
            var a =
                    this, b = a.chart, c, d, e, f, g, h, k, n;
            x(a.points, function(m) {
                m.plotY !== H && (k = m.graphic, c = m.pointAttr[m.selected ? "selected" : ""] || a.pointAttr[""], f = c["stroke-width"] % 2 / 2, n = K(m.plotX) - f, g = K(m.shapeArgs.width / 2), h = ["M", n, K(m.yBottom), "L", n, K(m.plotY)], null !== m.open && (d = K(m.plotOpen) + f, h.push("M", n, d, "L", n - g, d)), null !== m.close && (e = K(m.plotClose) + f, h.push("M", n, e, "L", n + g, e)), k ? k.attr(c).animate({d: h}) : m.graphic = b.renderer.path(h).attr(c).add(a.group))
            })
        }, animate: null});
    Q.ohlc = ic;
    da.candlestick = r(da.column, {lineColor: "black",
        lineWidth: 1, states: {hover: {lineWidth: 2}}, tooltip: da.ohlc.tooltip, threshold: null, upColor: "white"});
    var Dc = U(ic, {type: "candlestick", pointAttrToOptions: {fill: "color", stroke: "lineColor", "stroke-width": "lineWidth"}, upColorProp: "fill", getAttribs: function() {
            Q.ohlc.prototype.getAttribs.apply(this, arguments);
            var a = this.options, b = a.states, c = a.upLineColor || a.lineColor, d = b.hover.upLineColor || c, e = b.select.upLineColor || c;
            x(this.points, function(a) {
                a.open < a.close && (a.lineColor && (a.pointAttr = r(a.pointAttr), c = a.lineColor),
                        a.pointAttr[""].stroke = c, a.pointAttr.hover.stroke = d, a.pointAttr.select.stroke = e)
            })
        }, drawPoints: function() {
            var a = this, b = a.chart, c, d = a.pointAttr[""], e, f, g, h, k, n, m, w, u, l, q;
            x(a.points, function(v) {
                u = v.graphic;
                v.plotY !== H && (c = v.pointAttr[v.selected ? "selected" : ""] || d, m = c["stroke-width"] % 2 / 2, w = K(v.plotX) - m, e = v.plotOpen, f = v.plotClose, g = pa.min(e, f), h = pa.max(e, f), q = K(v.shapeArgs.width / 2), k = K(g) !== K(v.plotY), n = h !== v.yBottom, g = K(g) + m, h = K(h) + m, l = ["M", w - q, h, "L", w - q, g, "L", w + q, g, "L", w + q, h, "Z", "M", w, g, "L", w, k ? K(v.plotY) :
                            g, "M", w, h, "L", w, n ? K(v.yBottom) : h], u ? u.attr(c).animate({d: l}) : v.graphic = b.renderer.path(l).attr(c).add(a.group).shadow(a.options.shadow))
            })
        }});
    Q.candlestick = Dc;
    var yb = Ga.prototype.symbols;
    da.flags = r(da.column, {fillColor: "white", lineWidth: 1, pointRange: 0, shape: "flag", stackDistance: 12, states: {hover: {lineColor: "black", fillColor: "#FCFFC5"}}, style: {fontSize: "11px", fontWeight: "bold", textAlign: "center"}, tooltip: {pointFormat: "{point.text}<br/>"}, threshold: null, y: -30});
    Q.flags = U(Q.column, {type: "flags", sorted: !1,
        noSharedTooltip: !0, allowDG: !1, takeOrdinalPosition: !1, trackerGroups: ["markerGroup"], forceCrop: !0, init: ea.prototype.init, pointAttrToOptions: {fill: "fillColor", stroke: "color", "stroke-width": "lineWidth", r: "radius"}, translate: function() {
            Q.column.prototype.translate.apply(this);
            var a = this.chart, b = this.points, c = b.length - 1, d, e, f = this.options.onSeries, f = (d = f && a.get(f)) && d.options.step, g = d && d.points, h = g && g.length, k = this.xAxis, n = k.getExtremes(), m, w, u;
            if (d && d.visible && h)
                for (d = d.currentDataGrouping, w = g[h - 1].x +
                        (d?d.totalRange:0), b.sort(function(a, b) {
                    return a.x - b.x
                }); h-- && b[c] && !(d = b[c], m = g[h], m.x <= d.x && m.plotY !== H && (d.x <= w && (d.plotY = m.plotY, m.x < d.x && !f && (u = g[h + 1]) && u.plotY !== H && (d.plotY += (d.x - m.x) / (u.x - m.x) * (u.plotY - m.plotY))), c--, h++, 0 > c)); )
                    ;
            x(b, function(c, d) {
                var f;
                c.plotY === H && (c.x >= n.min && c.x <= n.max ? c.plotY = a.chartHeight - k.bottom - (k.opposite ? k.height : 0) + k.offset - a.plotTop : c.shapeArgs = {});
                (e = b[d - 1]) && e.plotX === c.plotX && (e.stackIndex === H && (e.stackIndex = 0), f = e.stackIndex + 1);
                c.stackIndex = f
            })
        }, drawPoints: function() {
            var a,
                    b = this.pointAttr[""], c = this.points, d = this.chart.renderer, e, f, g = this.options, h = g.y, k, n, m, w, u, l;
            for (n = c.length; n--; )
                m = c[n], a = m.plotX > this.xAxis.len, e = m.plotX, 0 < e && (e -= z(m.lineWidth, g.lineWidth) % 2), w = m.stackIndex, k = m.options.shape || g.shape, f = m.plotY, f !== H && (f = m.plotY + h - (w !== H && w * g.stackDistance)), u = w ? H : m.plotX, l = w ? H : m.plotY, w = m.graphic, f !== H && 0 <= e && !a ? (a = m.pointAttr[m.selected ? "select" : ""] || b, w ? w.attr({x: e, y: f, r: a.r, anchorX: u, anchorY: l}) : m.graphic = d.label(m.options.title || g.title || "A", e, f, k, u, l, g.useHTML).css(r(g.style,
                        m.style)).attr(a).attr({align: "flag" === k ? "left" : "center", width: g.width, height: g.height}).add(this.markerGroup).shadow(g.shadow), m.tooltipPos = [e, f]) : w && (m.graphic = w.destroy())
        }, drawTracker: function() {
            var a = this.points;
            bb.drawTrackerPoint.apply(this);
            x(a, function(b) {
                var c = b.graphic;
                c && ca(c.element, "mouseover", function() {
                    0 < b.stackIndex && !b.raised && (b._y = c.y, c.attr({y: b._y - 8}), b.raised = !0);
                    x(a, function(a) {
                        a !== b && a.raised && a.graphic && (a.graphic.attr({y: a._y}), a.raised = !1)
                    })
                })
            })
        }, animate: ma, buildKDTree: ma,
        setClip: ma});
    yb.flag = function(a, b, c, d, e) {
        return["M", e && e.anchorX || a, e && e.anchorY || b, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "Z"]
    };
    x(["circle", "square"], function(a) {
        yb[a + "pin"] = function(b, c, d, e, f) {
            var g = f && f.anchorX;
            f = f && f.anchorY;
            "circle" === a && e > d && (b -= K((e - d) / 2), d = e);
            b = yb[a](b, c, d, e);
            g && f && b.push("M", g, c > f ? c : c + e, "L", g, f);
            return b
        }
    });
    ab === Z.VMLRenderer && x(["flag", "circlepin", "squarepin"], function(a) {
        lb.prototype.symbols[a] = yb[a]
    });
    var Sb = [].concat(hc), zb = function(a) {
        var b = ib(arguments, function(a) {
            return"number" ===
                    typeof a
        });
        if (b.length)
            return Math[a].apply(0, b)
    };
    Sb[4] = ["day", [1, 2, 3, 4]];
    Sb[5] = ["week", [1, 2, 3]];
    O(oa, {navigator: {handles: {backgroundColor: "#ebe7e8", borderColor: "#b2b1b6"}, height: 40, margin: 25, maskFill: "rgba(128,179,236,0.3)", maskInside: !0, outlineColor: "#b2b1b6", outlineWidth: 1, series: {type: Q.areaspline === H ? "line" : "areaspline", color: "#4572A7", compare: null, fillOpacity: .05, dataGrouping: {approximation: "average", enabled: !0, groupPixelWidth: 2, smoothed: !0, units: Sb}, dataLabels: {enabled: !1, zIndex: 2}, id: "highcharts-navigator-series",
                lineColor: "#4572A7", lineWidth: 1, marker: {enabled: !1}, pointRange: 0, shadow: !1, threshold: null}, xAxis: {tickWidth: 0, lineWidth: 0, gridLineColor: "#EEE", gridLineWidth: 1, tickPixelInterval: 200, labels: {align: "left", style: {color: "#888"}, x: 3, y: -4}, crosshair: !1}, yAxis: {gridLineWidth: 0, startOnTick: !1, endOnTick: !1, minPadding: .1, maxPadding: .1, labels: {enabled: !1}, crosshair: !1, title: {text: null}, tickWidth: 0}}, scrollbar: {height: gb ? 20 : 14, barBackgroundColor: "#bfc8d1", barBorderRadius: 0, barBorderWidth: 1, barBorderColor: "#bfc8d1",
            buttonArrowColor: "#666", buttonBackgroundColor: "#ebe7e8", buttonBorderColor: "#bbb", buttonBorderRadius: 0, buttonBorderWidth: 1, minWidth: 6, rifleColor: "#666", trackBackgroundColor: "#eeeeee", trackBorderColor: "#eeeeee", trackBorderWidth: 1, liveRedraw: za && !gb}});
    Ib.prototype = {drawHandle: function(a, b) {
            var c = this.chart, d = c.renderer, e = this.elementsToDestroy, f = this.handles, g = this.navigatorOptions.handles, g = {fill: g.backgroundColor, stroke: g.borderColor, "stroke-width": 1}, h;
            this.rendered || (f[b] = d.g("navigator-handle-" +
                    ["left", "right"][b]).css({cursor: "ew-resize"}).attr({zIndex: 4 - b}).add(), h = d.rect(-4.5, 0, 9, 16, 0, 1).attr(g).add(f[b]), e.push(h), h = d.path(["M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12]).attr(g).add(f[b]), e.push(h));
            f[b][c.isResizing ? "animate" : "attr"]({translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), translateY: this.top + this.height / 2 - 8})
        }, drawScrollbarButton: function(a) {
            var b = this.chart.renderer, c = this.elementsToDestroy, d = this.scrollbarButtons, e = this.scrollbarHeight, f = this.scrollbarOptions,
                    g;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-.5, -.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({stroke: f.buttonBorderColor, "stroke-width": f.buttonBorderWidth, fill: f.buttonBackgroundColor}).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({fill: f.buttonArrowColor}).add(d[a]), c.push(g));
            a && d[a].attr({translateX: this.scrollerWidth - e})
        }, render: function(a, b, c, d) {
            var e = this.chart, f = e.renderer, g, h, k, n, m = this.scrollbarGroup,
                    w = this.navigatorGroup, u = this.scrollbar, w = this.xAxis, l = this.scrollbarTrack, q = this.scrollbarHeight, v = this.scrollbarEnabled, p = this.navigatorOptions, x = this.scrollbarOptions, D = x.minWidth, M = this.height, r = this.top, C = this.navigatorEnabled, y = p.outlineWidth, B = y / 2, G = 0, H = this.outlineHeight, qa = x.barBorderRadius, F = x.barBorderWidth, P = r + B, ka;
            if (t(a) && !isNaN(a)) {
                this.navigatorLeft = g = z(w.left, e.plotLeft + q);
                this.navigatorWidth = h = z(w.len, e.plotWidth - 2 * q);
                this.scrollerLeft = k = g - q;
                this.scrollerWidth = n = n = h + 2 * q;
                w.getExtremes &&
                        (ka = this.getUnionExtremes(!0), !ka || ka.dataMin === w.min && ka.dataMax === w.max || w.setExtremes(ka.dataMin, ka.dataMax, !0, !1));
                c = z(c, w.translate(a));
                d = z(d, w.translate(b));
                if (isNaN(c) || Infinity === la(c))
                    c = 0, d = n;
                if (!(w.translate(d, !0) - w.translate(c, !0) < e.xAxis[0].minRange)) {
                    this.zoomedMax = T(L(c, d), h);
                    this.zoomedMin = L(this.fixedWidth ? this.zoomedMax - this.fixedWidth : T(c, d), 0);
                    this.range = this.zoomedMax - this.zoomedMin;
                    c = K(this.zoomedMax);
                    b = K(this.zoomedMin);
                    a = c - b;
                    this.rendered || (C && (this.navigatorGroup = w = f.g("navigator").attr({zIndex: 3}).add(),
                            this.leftShade = f.rect().attr({fill: p.maskFill}).add(w), p.maskInside ? this.leftShade.css({cursor: "ew-resize "}) : this.rightShade = f.rect().attr({fill: p.maskFill}).add(w), this.outline = f.path().attr({"stroke-width": y, stroke: p.outlineColor}).add(w)), v && (this.scrollbarGroup = m = f.g("scrollbar").add(), u = x.trackBorderWidth, this.scrollbarTrack = l = f.rect().attr({x: 0, y: -u % 2 / 2, fill: x.trackBackgroundColor, stroke: x.trackBorderColor, "stroke-width": u, r: x.trackBorderRadius || 0, height: q}).add(m), this.scrollbar = u = f.rect().attr({y: -F %
                                2 / 2, height: q, fill: x.barBackgroundColor, stroke: x.barBorderColor, "stroke-width": F, r: qa}).add(m), this.scrollbarRifles = f.path().attr({stroke: x.rifleColor, "stroke-width": 1}).add(m)));
                    e = e.isResizing ? "animate" : "attr";
                    if (C) {
                        this.leftShade[e](p.maskInside ? {x: g + b, y: r, width: c - b, height: M} : {x: g, y: r, width: b, height: M});
                        if (this.rightShade)
                            this.rightShade[e]({x: g + c, y: r, width: h - c, height: M});
                        this.outline[e]({d: ["M", k, P, "L", g + b - B, P, g + b - B, P + H, "L", g + c - B, P + H, "L", g + c - B, P, k + n, P].concat(p.maskInside ? ["M", g + b + B, P, "L", g + c - B,
                                P] : [])});
                        this.drawHandle(b + B, 0);
                        this.drawHandle(c + B, 1)
                    }
                    v && m && (this.drawScrollbarButton(0), this.drawScrollbarButton(1), m[e]({translateX: k, translateY: K(P + M)}), l[e]({width: n}), g = q + b, h = a - F, h < D && (G = (D - h) / 2, h = D, g -= G), this.scrollbarPad = G, u[e]({x: ja(g) + F % 2 / 2, width: h}), D = q + b + a / 2 - .5, this.scrollbarRifles.attr({visibility: 12 < a ? "visible" : "hidden"})[e]({d: ["M", D - 3, q / 4, "L", D - 3, 2 * q / 3, "M", D, q / 4, "L", D, 2 * q / 3, "M", D + 3, q / 4, "L", D + 3, 2 * q / 3]}));
                    this.scrollbarPad = G;
                    this.rendered = !0
                }
            }
        }, addEvents: function() {
            var a = this.chart.container,
                    b = this.mouseDownHandler, c = this.mouseMoveHandler, d = this.mouseUpHandler, e;
            e = [[a, "mousedown", b], [a, "mousemove", c], [document, "mouseup", d]];
            cb && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]);
            x(e, function(a) {
                ca.apply(null, a)
            });
            this._events = e
        }, removeEvents: function() {
            x(this._events, function(a) {
                sa.apply(null, a)
            });
            this._events = H;
            this.navigatorEnabled && this.baseSeries && sa(this.baseSeries, "updatedData", this.updatedDataHandler)
        }, init: function() {
            var a = this, b = a.chart, c, d, e = a.scrollbarHeight,
                    f = a.navigatorOptions, g = a.height, h = a.top, k, n, m = a.baseSeries;
            a.mouseDownHandler = function(d) {
                d = b.pointer.normalize(d);
                var e = a.zoomedMin, f = a.zoomedMax, h = a.top, m = a.scrollbarHeight, n = a.scrollerLeft, w = a.scrollerWidth, u = a.navigatorLeft, l = a.navigatorWidth, q = a.scrollbarPad, v = a.range, p = d.chartX, t = d.chartY;
                d = b.xAxis[0];
                var x, D = gb ? 10 : 7;
                t > h && t < h + g + m && ((h = !a.scrollbarEnabled || t < h + g) && pa.abs(p - e - u) < D ? (a.grabbedLeft = !0, a.otherHandlePos = f, a.fixedExtreme = d.max, b.fixedRange = null) : h && pa.abs(p - f - u) < D ? (a.grabbedRight = !0,
                        a.otherHandlePos = e, a.fixedExtreme = d.min, b.fixedRange = null) : p > u + e - q && p < u + f + q ? (a.grabbedCenter = p, a.fixedWidth = v, k = p - e) : p > n && p < n + w && (f = h ? p - u - v / 2 : p < u ? e - .2 * v : p > n + w - m ? e + .2 * v : p < u + e ? e - v : f, 0 > f ? f = 0 : f + v >= l && (f = l - v, x = a.getUnionExtremes().dataMax), f !== e && (a.fixedWidth = v, e = c.toFixedRange(f, f + v, null, x), d.setExtremes(e.min, e.max, !0, !1, {trigger: "navigator"}))))
            };
            a.mouseMoveHandler = function(c) {
                var d = a.scrollbarHeight, e = a.navigatorLeft, f = a.navigatorWidth, g = a.scrollerLeft, h = a.scrollerWidth, m = a.range, u;
                0 !== c.pageX && (c =
                        b.pointer.normalize(c), u = c.chartX, u < e ? u = e : u > g + h - d && (u = g + h - d), a.grabbedLeft ? (n = !0, a.render(0, 0, u - e, a.otherHandlePos)) : a.grabbedRight ? (n = !0, a.render(0, 0, a.otherHandlePos, u - e)) : a.grabbedCenter && (n = !0, u < k ? u = k : u > f + k - m && (u = f + k - m), a.render(0, 0, u - k, u - k + m)), n && a.scrollbarOptions.liveRedraw && setTimeout(function() {
                    a.mouseUpHandler(c)
                }, 0))
            };
            a.mouseUpHandler = function(d) {
                var e, f;
                n && (a.zoomedMin === a.otherHandlePos ? e = a.fixedExtreme : a.zoomedMax === a.otherHandlePos && (f = a.fixedExtreme), e = c.toFixedRange(a.zoomedMin, a.zoomedMax,
                        e, f), b.xAxis[0].setExtremes(e.min, e.max, !0, !1, {trigger: "navigator", triggerOp: "navigator-drag", DOMEvent: d}));
                "mousemove" !== d.type && (a.grabbedLeft = a.grabbedRight = a.grabbedCenter = a.fixedWidth = a.fixedExtreme = a.otherHandlePos = n = k = null)
            };
            var w = b.xAxis.length, u = b.yAxis.length;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.navigatorEnabled ? (a.xAxis = c = new fa(b, r({breaks: m && m.xAxis.options.breaks, ordinal: m && m.xAxis.options.ordinal}, f.xAxis, {id: "navigator-x-axis", isX: !0, type: "datetime", index: w, height: g, offset: 0,
                offsetLeft: e, offsetRight: -e, keepOrdinalPadding: !0, startOnTick: !1, endOnTick: !1, minPadding: 0, maxPadding: 0, zoomEnabled: !1})), a.yAxis = d = new fa(b, r(f.yAxis, {id: "navigator-y-axis", alignTicks: !1, height: g, offset: 0, index: u, zoomEnabled: !1})), m || f.series.data ? a.addBaseSeries() : 0 === b.series.length && ba(b, "redraw", function(c, d) {
                0 < b.series.length && !a.series && (a.setBaseSeries(), b.redraw = c);
                c.call(b, d)
            })) : a.xAxis = c = {translate: function(a, c) {
                    var d = b.xAxis[0], f = d.getExtremes(), g = b.plotWidth - 2 * e, h = zb("min", d.options.min,
                            f.dataMin), d = zb("max", d.options.max, f.dataMax) - h;
                    return c ? a * d / g + h : g * (a - h) / d
                }, toFixedRange: fa.prototype.toFixedRange};
            ba(b, "getMargins", function(b) {
                var e = this.legend, f = e.options;
                b.apply(this, [].slice.call(arguments, 1));
                a.top = h = a.navigatorOptions.top || this.chartHeight - a.height - a.scrollbarHeight - this.spacing[2] - ("bottom" === f.verticalAlign && f.enabled && !f.floating ? e.legendHeight + z(f.margin, 10) : 0);
                c && d && (c.options.top = d.options.top = h, c.setAxisSize(), d.setAxisSize())
            });
            a.addEvents()
        }, getUnionExtremes: function(a) {
            var b =
                    this.chart.xAxis[0], c = this.xAxis, d = c.options, e = b.options, f;
            a && null === b.dataMin || (f = {dataMin: z(d && d.min, zb("min", e.min, b.dataMin, c.dataMin)), dataMax: z(d && d.max, zb("max", e.max, b.dataMax, c.dataMax))});
            return f
        }, setBaseSeries: function(a) {
            var b = this.chart;
            a = a || b.options.navigator.baseSeries;
            this.series && this.series.remove();
            this.baseSeries = b.series[a] || "string" === typeof a && b.get(a) || b.series[0];
            this.xAxis && this.addBaseSeries()
        }, addBaseSeries: function() {
            var a = this.baseSeries, b = a ? a.options : {}, c = b.data, d =
                    this.navigatorOptions.series, e;
            e = d.data;
            this.hasNavigatorData = !!e;
            b = r(b, d, {enableMouseTracking: !1, group: "nav", padXAxis: !1, xAxis: "navigator-x-axis", yAxis: "navigator-y-axis", name: "Navigator", showInLegend: !1, isInternal: !0, visible: !0});
            b.data = e || c;
            this.series = this.chart.initSeries(b);
            a && !1 !== this.navigatorOptions.adaptToUpdatedData && (ca(a, "updatedData", this.updatedDataHandler), a.userOptions.events = O(a.userOptions.event, {updatedData: this.updatedDataHandler}))
        }, updatedDataHandler: function() {
            var a = this.chart.scroller,
                    b = a.baseSeries, c = b.xAxis, d = c.getExtremes(), e = d.min, f = d.max, g = d.dataMin, d = d.dataMax, h = f - e, k, n, m, w, u, l = a.series;
            k = l.xData;
            var q = !!c.setExtremes;
            n = f >= k[k.length - 1] - (this.closestPointRange || 0);
            k = e <= g;
            a.hasNavigatorData || (l.options.pointStart = b.xData[0], l.setData(b.options.data, !1), u = !0);
            k && (w = g, m = w + h);
            n && (m = d, k || (w = L(m - h, l.xData[0])));
            q && (k || n) ? isNaN(w) || c.setExtremes(w, m, !0, !1, {trigger: "updatedData"}) : (u && this.chart.redraw(!1), a.render(L(e, g), T(f, d)))
        }, destroy: function() {
            this.removeEvents();
            x([this.xAxis,
                this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function(a) {
                a && a.destroy && a.destroy()
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
            x([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(a) {
                ka(a)
            })
        }};
    Z.Scroller = Ib;
    ba(fa.prototype, "zoom", function(a, b, c) {
        var d = this.chart, e = d.options, f = e.chart.zoomType,
                g = e.navigator, e = e.rangeSelector, h;
        this.isXAxis && (g && g.enabled || e && e.enabled) && ("x" === f ? d.resetZoomButton = "blocked" : "y" === f ? h = !1 : "xy" === f && (d = this.previousZoom, t(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom)));
        return h !== H ? h : a.call(this, b, c)
    });
    ba(Ra.prototype, "init", function(a, b, c) {
        ca(this, "beforeRender", function() {
            var a = this.options;
            if (a.navigator.enabled || a.scrollbar.enabled)
                this.scroller = new Ib(this)
        });
        a.call(this, b, c)
    });
    ba(ea.prototype, "addPoint", function(a,
            b, c, d, e) {
        var f = this.options.turboThreshold;
        f && this.xData.length > f && W(b) && !R(b) && this.chart.scroller && P(20, !0);
        a.call(this, b, c, d, e)
    });
    O(oa, {rangeSelector: {buttonTheme: {width: 28, height: 18, fill: "#f7f7f7", padding: 2, r: 0, "stroke-width": 0, style: {color: "#444", cursor: "pointer", fontWeight: "normal"}, zIndex: 7, states: {hover: {fill: "#e7e7e7"}, select: {fill: "#e7f0f9", style: {color: "black", fontWeight: "bold"}}}}, inputPosition: {align: "right"}, labelStyle: {color: "#666"}}});
    oa.lang = r(oa.lang, {rangeSelectorZoom: "Zoom", rangeSelectorFrom: "From",
        rangeSelectorTo: "To"});
    Da.prototype = {clickButton: function(a, b) {
            var c = this, d = c.selected, e = c.chart, f = c.buttons, g = c.buttonOptions[a], h = e.xAxis[0], k = e.scroller && e.scroller.getUnionExtremes() || h || {}, n = k.dataMin, m = k.dataMax, l, u = h && K(T(h.max, z(m, h.max))), q = g.type, v, k = g._range, p, t, D, M = g.dataGrouping;
            if (null !== n && null !== m && a !== c.selected) {
                e.fixedRange = k;
                M && (this.forcedDataGrouping = !0, fa.prototype.setDataGrouping.call(h || {chart: this.chart}, M, !1));
                if ("month" === q || "year" === q)
                    h ? (q = {range: g, max: u, dataMin: n, dataMax: m},
                    l = h.minFromRange.call(q), "number" === typeof q.newMax && (u = q.newMax)) : k = g;
                else if (k)
                    l = L(u - k, n), u = T(l + k, m);
                else if ("ytd" === q)
                    if (h)
                        m === H && (n = Number.MAX_VALUE, m = Number.MIN_VALUE, x(e.series, function(a) {
                            a = a.xData;
                            n = T(a[0], n);
                            m = L(a[a.length - 1], m)
                        }), b = !1), u = new Aa(m), l = u.getFullYear(), l = p = L(n || 0, Aa.UTC(l, 0, 1)), u = u.getTime(), u = T(m || u, u);
                    else {
                        ca(e, "beforeRender", function() {
                            c.clickButton(a)
                        });
                        return
                    }
                else
                    "all" === q && h && (l = n, u = m);
                f[d] && f[d].setState(0);
                f[a] && f[a].setState(2);
                h ? (h.setExtremes(l, u, z(b, 1), 0, {trigger: "rangeSelectorButton",
                    rangeSelectorButton: g}), c.setSelected(a)) : (v = e.options.xAxis[0], D = v.range, v.range = k, t = v.min, v.min = p, c.setSelected(a), ca(e, "load", function() {
                    v.range = D;
                    v.min = t
                }))
            }
        }, setSelected: function(a) {
            this.selected = this.options.selected = a
        }, defaultButtons: [{type: "month", count: 1, text: "1m"}, {type: "month", count: 3, text: "3m"}, {type: "month", count: 6, text: "6m"}, {type: "ytd", text: "YTD"}, {type: "year", count: 1, text: "1y"}, {type: "all", text: "All"}], init: function(a) {
            var b = this, c = a.options.rangeSelector, d = c.buttons || [].concat(b.defaultButtons),
                    e = c.selected, f = b.blurInputs = function() {
                        var a = b.minInput, c = b.maxInput;
                        a && a.blur && na(a, "blur");
                        c && c.blur && na(c, "blur")
                    };
            b.chart = a;
            b.options = c;
            b.buttons = [];
            a.extraTopMargin = 35;
            b.buttonOptions = d;
            ca(a.container, "mousedown", f);
            ca(a, "resize", f);
            x(d, b.computeButtonRange);
            e !== H && d[e] && this.clickButton(e, !1);
            ca(a, "load", function() {
                ca(a.xAxis[0], "setExtremes", function(c) {
                    this.max - this.min !== a.fixedRange && "rangeSelectorButton" !== c.trigger && "updatedData" !== c.trigger && b.forcedDataGrouping && this.setDataGrouping(!1,
                            !1)
                });
                ca(a.xAxis[0], "afterSetExtremes", function() {
                    b.updateButtonStates(!0)
                })
            })
        }, updateButtonStates: function(a) {
            var b = this, c = this.chart, d = c.xAxis[0], e = c.scroller && c.scroller.getUnionExtremes() || d, f = e.dataMin, g = e.dataMax, h = b.selected, k = b.options.allButtonsEnabled, n = b.buttons;
            a && c.fixedRange !== K(d.max - d.min) && (n[h] && n[h].setState(0), b.setSelected(null));
            x(b.buttonOptions, function(a, e) {
                var u = K(d.max - d.min), l = a._range, q = a.type, v = a.count || 1, p = l > g - f, t = l < d.minRange, x = "all" === a.type && d.max - d.min >= g - f && 2 !==
                        n[e].state, D = "ytd" === a.type && Ca("%Y", f) === Ca("%Y", g), M = c.renderer.forExport && e === h, l = l === u;
                ("month" === q || "year" === q) && u >= 864E5 * {month: 28, year: 365}[q] * v && u <= 864E5 * {month: 31, year: 366}[q] * v && (l = !0);
                M || l && e !== h ? (b.setSelected(e), n[e].setState(2)) : !k && (p || t || x || D) ? n[e].setState(3) : 3 === n[e].state && n[e].setState(0)
            })
        }, computeButtonRange: function(a) {
            var b = a.type, c = a.count || 1, d = {millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5};
            if (d[b])
                a._range = d[b] * c;
            else if ("month" === b || "year" === b)
                a._range =
                        864E5 * {month: 30, year: 365}[b] * c
        }, setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            t(b) && (this[a + "Input"].HCTime = b);
            this[a + "Input"].value = Ca(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({text: Ca(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)})
        }, showInput: function(a) {
            var b = this.inputGroup, c = this[a + "DateBox"];
            y(this[a + "Input"], {left: b.translateX + c.x + "px", top: b.translateY + "px", width: c.width - 2 + "px", height: c.height - 2 + "px", border: "2px solid silver"})
        },
        hideInput: function(a) {
            y(this[a + "Input"], {border: 0, width: "1px", height: "1px"});
            this.setInputValue(a)
        }, drawInput: function(a) {
            var b = this, c = b.chart, d = c.renderer.style, e = c.renderer, f = c.options.rangeSelector, g = b.div, h = "min" === a, k, n, m = this.inputGroup;
            this[a + "Label"] = n = e.label(oa.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({padding: 2}).css(r(d, f.labelStyle)).add(m);
            m.offset += n.width + 5;
            this[a + "DateBox"] = e = e.label("", m.offset).attr({padding: 2, width: f.inputBoxWidth || 90, height: f.inputBoxHeight ||
                17, stroke: f.inputBoxBorderColor || "silver", "stroke-width": 1}).css(r({textAlign: "center", color: "#444"}, d, f.inputStyle)).on("click", function() {
                b.showInput(a);
                b[a + "Input"].focus()
            }).add(m);
            m.offset += e.width + (h ? 10 : 0);
            this[a + "Input"] = k = F("input", {name: a, className: "highcharts-range-selector", type: "text"}, O({position: "absolute", border: 0, width: "1px", height: "1px", padding: 0, textAlign: "center", fontSize: d.fontSize, fontFamily: d.fontFamily, top: c.plotTop + "px"}, f.inputStyle), g);
            k.onfocus = function() {
                b.showInput(a)
            };
            k.onblur = function() {
                b.hideInput(a)
            };
            k.onchange = function() {
                var a = k.value, d = (f.inputDateParser || Aa.parse)(a), e = c.xAxis[0], g = e.dataMin, m = e.dataMax;
                isNaN(d) && (d = a.split("-"), d = Aa.UTC(E(d[0]), E(d[1]) - 1, E(d[2])));
                isNaN(d) || (oa.global.useUTC || (d += 6E4 * (new Aa).getTimezoneOffset()), h ? d > b.maxInput.HCTime ? d = H : d < g && (d = g) : d < b.minInput.HCTime ? d = H : d > m && (d = m), d !== H && c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, H, H, {trigger: "rangeSelectorInput"}))
            }
        }, getPosition: function() {
            var a = this.chart, a = z((a.options.rangeSelector.buttonPosition ||
                    {}).y, a.plotTop - a.axisOffset[0] - 35);
            return{buttonTop: a, inputTop: a - 10}
        }, render: function(a, b) {
            var c = this, d = c.chart, e = d.renderer, f = d.container, g = d.options, h = g.exporting && g.navigation && g.navigation.buttonOptions, k = g.rangeSelector, n = c.buttons, g = oa.lang, m = c.div, m = c.inputGroup, l = k.buttonTheme, u = k.buttonPosition || {}, q = k.inputEnabled, v = l && l.states, p = d.plotLeft, D, M = this.getPosition(), r = c.group, C = c.rendered;
            C || (c.group = r = e.g("range-selector-buttons").add(), c.zoomText = e.text(g.rangeSelectorZoom, z(u.x, p), 15).css(k.labelStyle).add(r),
                    D = z(u.x, p) + c.zoomText.getBBox().width + 5, x(c.buttonOptions, function(a, b) {
                n[b] = e.button(a.text, D, 0, function() {
                    c.clickButton(b);
                    c.isActive = !0
                }, l, v && v.hover, v && v.select, v && v.disabled).css({textAlign: "center"}).add(r);
                D += n[b].width + z(k.buttonSpacing, 5);
                c.selected === b && n[b].setState(2)
            }), c.updateButtonStates(), !1 !== q && (c.div = m = F("div", null, {position: "relative", height: 0, zIndex: 1}), f.parentNode.insertBefore(m, f), c.inputGroup = m = e.g("input-group").add(), m.offset = 0, c.drawInput("min"), c.drawInput("max")));
            r[C ?
                    "animate" : "attr"]({translateY: M.buttonTop});
            !1 !== q && (m.align(O({y: M.inputTop, width: m.offset, x: h && M.inputTop < (h.y || 0) + h.height - d.spacing[0] ? -40 : 0}, k.inputPosition), !0, d.spacingBox), t(q) || (d = r.getBBox(), m[m.translateX < d.x + d.width + 10 ? "hide" : "show"]()), c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0
        }, destroy: function() {
            var a = this.minInput, b = this.maxInput, c = this.chart, d = this.blurInputs, e;
            sa(c.container, "mousedown", d);
            sa(c, "resize", d);
            ka(this.buttons);
            a && (a.onfocus = a.onblur = a.onchange =
                    null);
            b && (b.onfocus = b.onblur = b.onchange = null);
            for (e in this)
                this[e] && "chart" !== e && (this[e].destroy ? this[e].destroy() : this[e].nodeType && ta(this[e])), this[e] = null
        }};
    fa.prototype.toFixedRange = function(a, b, c, d) {
        var e = this.chart && this.chart.fixedRange;
        a = z(c, this.translate(a, !0));
        b = z(d, this.translate(b, !0));
        c = e && (b - a) / e;
        .7 < c && 1.3 > c && (d ? a = b - e : b = a + e);
        return{min: a, max: b}
    };
    fa.prototype.minFromRange = function() {
        var a = this.range, b = {month: "Month", year: "FullYear"}[a.type], c = this.max, d = new Aa(c), e;
        "number" === typeof a ?
                (b = this.max - a, e = a) : (d["set" + b](d["get" + b]() - a.count), b = d.getTime());
        a = z(this.dataMin, Number.MIN_VALUE);
        isNaN(b) && (b = a);
        b <= a && (b = a, this.newMax = T(b + e, this.dataMax));
        isNaN(c) && (b = void 0);
        return b
    };
    ba(Ra.prototype, "init", function(a, b, c) {
        ca(this, "init", function() {
            this.options.rangeSelector.enabled && (this.rangeSelector = new Da(this))
        });
        a.call(this, b, c)
    });
    Z.RangeSelector = Da;
    Ra.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(f.min, f.max)
        }
        function c() {
            f = a.xAxis[0].getExtremes();
            isNaN(f.min) || h.render(f.min, f.max)
        }
        function d(a) {
            "navigator-drag" !== a.triggerOp && g.render(a.min, a.max)
        }
        function e(a) {
            h.render(a.min, a.max)
        }
        var f, g = a.scroller, h = a.rangeSelector;
        g && (ca(a.xAxis[0], "afterSetExtremes", d), ba(a, "drawChartBox", function(a) {
            var c = this.isDirtyBox;
            a.call(this);
            c && b()
        }), b());
        h && (ca(a.xAxis[0], "afterSetExtremes", e), ca(a, "resize", c), c());
        ca(a, "destroy", function() {
            g && sa(a.xAxis[0], "afterSetExtremes", d);
            h && (sa(a, "resize", c), sa(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    Z.StockChart = function(a,
            b) {
        var c = a.series, d, e = z(a.navigator && a.navigator.enabled, !0) ? {startOnTick: !1, endOnTick: !1} : null, f = {marker: {enabled: !1, radius: 2}}, g = {shadow: !1, borderWidth: 0};
        a.xAxis = La(B(a.xAxis || {}), function(a) {
            return r({minPadding: 0, maxPadding: 0, ordinal: !0, title: {text: null}, labels: {overflow: "justify"}, showLastLabel: !0}, a, {type: "datetime", categories: null}, e)
        });
        a.yAxis = La(B(a.yAxis || {}), function(a) {
            d = z(a.opposite, !0);
            return r({labels: {y: -2}, opposite: d, showLastLabel: !1, title: {text: null}}, a)
        });
        a.series = null;
        a = r({chart: {panning: !0,
                pinchType: "x"}, navigator: {enabled: !0}, scrollbar: {enabled: !0}, rangeSelector: {enabled: !0}, title: {text: null, style: {fontSize: "16px"}}, tooltip: {shared: !0, crosshairs: !0}, legend: {enabled: !1}, plotOptions: {line: f, spline: f, area: f, areaspline: f, arearange: f, areasplinerange: f, column: g, columnrange: g, candlestick: g, ohlc: g}}, a, {_stock: !0, chart: {inverted: !1}});
        a.series = c;
        return new Ra(a, b)
    };
    ba(Wa.prototype, "init", function(a, b, c) {
        var d = c.chart.pinchType || "";
        a.call(this, b, c);
        this.pinchX = this.pinchHor = -1 !== d.indexOf("x");
        this.pinchY = this.pinchVert = -1 !== d.indexOf("y");
        this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
    });
    ba(fa.prototype, "autoLabelAlign", function(a) {
        var b = this.chart, c = this.options, b = b._labelPanes = b._labelPanes || {}, d = this.options.labels;
        return this.chart.options._stock && "yAxis" === this.coll && (c = c.top + "," + c.height, !b[c] && d.enabled) ? (15 === d.x && (d.x = 0), void 0 === d.align && (d.align = "right"), b[c] = 1, "right") : a.call(this, [].slice.call(arguments, 1))
    });
    ba(fa.prototype, "getPlotLinePath", function(a, b, c, d, e, f) {
        var g =
                this, h = this.isLinked && !this.series ? this.linkedParent.series : this.series, k = g.chart, n = k.renderer, m = g.left, l = g.top, u, q, v, p, D = [], M = [], r;
        if ("colorAxis" === g.coll)
            return a.apply(this, [].slice.call(arguments, 1));
        M = g.isXAxis ? t(g.options.yAxis) ? [k.yAxis[g.options.yAxis]] : La(h, function(a) {
            return a.yAxis
        }) : t(g.options.xAxis) ? [k.xAxis[g.options.xAxis]] : La(h, function(a) {
            return a.xAxis
        });
        x(g.isXAxis ? k.yAxis : k.xAxis, function(a) {
            if (t(a.options.id) ? -1 === a.options.id.indexOf("navigator") : 1) {
                var b = a.isXAxis ? "yAxis" :
                        "xAxis", b = t(a.options[b]) ? k[b][a.options[b]] : k[b][0];
                g === b && M.push(a)
            }
        });
        r = M.length ? [] : [g.isXAxis ? k.yAxis[0] : k.xAxis[0]];
        x(M, function(a) {
            -1 === Ua(a, r) && r.push(a)
        });
        f = z(f, g.translate(b, null, null, d));
        isNaN(f) || (g.horiz ? x(r, function(a) {
            var b;
            q = a.pos;
            p = q + a.len;
            u = v = K(f + g.transB);
            if (u < m || u > m + g.width)
                e ? u = v = T(L(m, u), m + g.width) : b = !0;
            b || D.push("M", u, q, "L", v, p)
        }) : x(r, function(a) {
            var b;
            u = a.pos;
            v = u + a.len;
            q = p = K(l + g.height - f);
            if (q < l || q > l + g.height)
                e ? q = p = T(L(l, q), g.top + g.height) : b = !0;
            b || D.push("M", u, q, "L", v, p)
        }));
        return 0 < D.length ? n.crispPolyLine(D, c || 1) : null
    });
    fa.prototype.getPlotBandPath = function(a, b) {
        var c = this.getPlotLinePath(b, null, null, !0), d = this.getPlotLinePath(a, null, null, !0), e = [], f;
        if (d && c && d.toString() !== c.toString())
            for (f = 0; f < d.length; f += 6)
                e.push("M", d[f + 1], d[f + 2], "L", d[f + 4], d[f + 5], c[f + 4], c[f + 5], c[f + 1], c[f + 2]);
        else
            e = null;
        return e
    };
    Ga.prototype.crispPolyLine = function(a, b) {
        var c;
        for (c = 0; c < a.length; c += 6)
            a[c + 1] === a[c + 4] && (a[c + 1] = a[c + 4] = K(a[c + 1]) - b % 2 / 2), a[c + 2] === a[c + 5] && (a[c + 2] = a[c + 5] = K(a[c + 2]) + b % 2 /
                    2);
        return a
    };
    ab === Z.VMLRenderer && (lb.prototype.crispPolyLine = Ga.prototype.crispPolyLine);
    ba(fa.prototype, "hideCrosshair", function(a, b) {
        a.call(this, b);
        t(this.crossLabelArray) && (t(b) ? this.crossLabelArray[b] && this.crossLabelArray[b].hide() : x(this.crossLabelArray, function(a) {
            a.hide()
        }))
    });
    ba(fa.prototype, "drawCrosshair", function(a, b, c) {
        var d, e;
        a.call(this, b, c);
        if (t(this.crosshair.label) && this.crosshair.label.enabled && t(c)) {
            e = this.chart;
            var f = this.options.crosshair.label, g = this.isXAxis ? "x" : "y";
            d = this.horiz;
            var h = this.opposite, k = this.left, n = this.top;
            a = this.crossLabel;
            var m, l = f.format, u = "";
            a || (a = this.crossLabel = e.renderer.label().attr({align: f.align || (d ? "center" : h ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center"), zIndex: 12, height: d ? 16 : H, fill: f.backgroundColor || this.series[0] && this.series[0].color || "gray", padding: z(f.padding, 2), stroke: f.borderColor || null, "stroke-width": f.borderWidth || 0}).css(O({color: "white", fontWeight: "normal", fontSize: "11px", textAlign: "center"}, f.style)).add());
            d ? (b = c.plotX + k, m = n + (h ? 0 : this.height)) : (b = h ? this.width + k : 0, m = c.plotY + n);
            if (m < n || m > n + this.height)
                this.hideCrosshair();
            else {
                l || f.formatter || (this.isDatetimeAxis && (u = "%b %d, %Y"), l = "{value" + (u ? ":" + u : "") + "}");
                a.attr({text: l ? v(l, {value: c[g]}) : f.formatter.call(this, c[g]), x: b, y: m, visibility: "visible"});
                c = a.getBBox();
                if (d) {
                    if ("inside" === this.options.tickPosition && !h || "inside" !== this.options.tickPosition && h)
                        m = a.y - c.height
                } else
                    m = a.y - c.height / 2;
                d ? (d = k - c.x, e = k + this.width - c.x) : (d = "left" === this.labelAlign ? k : 0,
                        e = "right" === this.labelAlign ? k + this.width : e.chartWidth);
                a.translateX < d && (b += d - a.translateX);
                a.translateX + c.width >= e && (b -= a.translateX + c.width - e);
                a.attr({x: b, y: m, visibility: "visible"})
            }
        }
    });
    var Ec = ya.init, Fc = ya.processData, Gc = Ha.prototype.tooltipFormatter;
    ya.init = function() {
        Ec.apply(this, arguments);
        this.setCompare(this.options.compare)
    };
    ya.setCompare = function(a) {
        this.modifyValue = "value" === a || "percent" === a ? function(b, c) {
            var d = this.compareValue;
            b !== H && (b = "value" === a ? b - d : b = b / d * 100 - 100, c && (c.change = b));
            return b
        } : null;
        this.chart.hasRendered && (this.isDirty = !0)
    };
    ya.processData = function() {
        var a = 0, b, c, d;
        Fc.apply(this, arguments);
        if (this.xAxis && this.processedYData)
            for (b = this.processedXData, c = this.processedYData, d = c.length; a < d; a++)
                if ("number" === typeof c[a] && b[a] >= this.xAxis.min) {
                    this.compareValue = c[a];
                    break
                }
    };
    ba(ya, "getExtremes", function(a) {
        a.apply(this, [].slice.call(arguments, 1));
        this.modifyValue && (this.dataMax = this.modifyValue(this.dataMax), this.dataMin = this.modifyValue(this.dataMin))
    });
    fa.prototype.setCompare =
            function(a, b) {
                this.isXAxis || (x(this.series, function(b) {
                    b.setCompare(a)
                }), z(b, !0) && this.chart.redraw())
            };
    Ha.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (0 < this.change ? "+" : "") + Z.numberFormat(this.change, z(this.series.tooltipOptions.changeDecimals, 2)));
        return Gc.apply(this, [a])
    };
    ba(ea.prototype, "render", function(a) {
        this.chart.options._stock && this.xAxis && (!this.clipBox && this.animate ? (this.clipBox = r(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) :
                this.chart[this.sharedClipKey] && (jb(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({width: this.xAxis.len, height: this.yAxis.len})));
        a.call(this)
    });
    O(va.prototype, {init: function(a, b, c) {
            var d = this, e = d.defaultOptions;
            d.chart = b;
            d.options = a = r(e, b.angular ? {background: {}} : void 0, a);
            (a = a.background) && x([].concat(B(a)).reverse(), function(a) {
                var b = a.backgroundColor, e = c.userOptions;
                a = r(d.defaultBackgroundOptions, a);
                b && (a.backgroundColor = b);
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a);
                e.plotBands = e.plotBands || [];
                e.plotBands.unshift(a)
            })
        }, defaultOptions: {center: ["50%", "50%"], size: "85%", startAngle: 0}, defaultBackgroundOptions: {shape: "circle", borderWidth: 1, borderColor: "silver", backgroundColor: {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#FFF"], [1, "#DDD"]]}, from: -Number.MAX_VALUE, innerRadius: 0, to: Number.MAX_VALUE, outerRadius: "105%"}});
    var Ab = fa.prototype, Tb = Za.prototype, Hc = {getOffset: ma, redraw: function() {
            this.isDirty = !1
        }, render: function() {
            this.isDirty = !1
        }, setScale: ma, setCategories: ma,
        setTitle: ma}, jc = {isRadial: !0, defaultRadialGaugeOptions: {labels: {align: "center", x: 0, y: null}, minorGridLineWidth: 0, minorTickInterval: "auto", minorTickLength: 10, minorTickPosition: "inside", minorTickWidth: 1, tickLength: 10, tickPosition: "inside", tickWidth: 2, title: {rotation: 0}, zIndex: 2}, defaultRadialXOptions: {gridLineWidth: 1, labels: {align: null, distance: 15, x: 0, y: null}, maxPadding: 0, minPadding: 0, showLastLabel: !1, tickLength: 0}, defaultRadialYOptions: {gridLineInterpolation: "circle", labels: {align: "right", x: -3, y: -2},
            showLastLabel: !1, title: {x: 4, text: null, rotation: 90}}, setOptions: function(a) {
            a = this.options = r(this.defaultOptions, this.defaultRadialOptions, a);
            a.plotBands || (a.plotBands = [])
        }, getOffset: function() {
            Ab.getOffset.call(this);
            this.chart.axisOffset[this.side] = 0;
            this.center = this.pane.center = bc.getCenter.call(this.pane)
        }, getLinePath: function(a, b) {
            var c = this.center;
            b = z(b, c[2] / 2 - this.offset);
            return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {start: this.startAngleRad, end: this.endAngleRad, open: !0,
                innerR: 0})
        }, setAxisTranslation: function() {
            Ab.setAxisTranslation.call(this);
            this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
        }, beforeSetTickPositions: function() {
            this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
        }, setAxisSize: function() {
            Ab.setAxisSize.call(this);
            this.isRadial && (this.center = this.pane.center =
                    Z.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * z(this.sector, 1) / 2)
        }, getPosition: function(a, b) {
            return this.postTranslate(this.isCircular ? this.translate(a) : 0, z(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
        }, postTranslate: function(a, b) {
            var c = this.chart, d = this.center;
            a = this.startAngleRad + a;
            return{x: c.plotLeft + d[0] + Math.cos(a) * b, y: c.plotTop + d[1] + Math.sin(a) * b}
        }, getPlotBandPath: function(a,
                b, c) {
            var d = this.center, e = this.startAngleRad, f = d[2] / 2, g = [z(c.outerRadius, "100%"), c.innerRadius, z(c.thickness, 10)], h = /%$/, k, n = this.isCircular;
            "polygon" === this.options.gridLineInterpolation ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (a = Math.max(a, this.min), b = Math.min(b, this.max), n || (g[0] = this.translate(a), g[1] = this.translate(b)), g = La(g, function(a) {
                h.test(a) && (a = E(a, 10) * f / 100);
                return a
            }), "circle" !== c.shape && n ? (a = e + this.translate(a), b = e + this.translate(b)) : (a = -Math.PI / 2, b = 1.5 * Math.PI,
                    k = !0), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], g[0], g[0], {start: Math.min(a, b), end: Math.max(a, b), innerR: z(g[1], g[0] - g[2]), open: k}));
            return d
        }, getPlotLinePath: function(a, b) {
            var c = this, d = c.center, e = c.chart, f = c.getPosition(a), g, h, k;
            c.isCircular ? k = ["M", d[0] + e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : "circle" === c.options.gridLineInterpolation ? (a = c.translate(a)) && (k = c.getLinePath(0, a)) : (x(e.xAxis, function(a) {
                a.pane === c.pane && (g = a)
            }), k = [], a = c.translate(a), d = g.tickPositions, g.autoConnect &&
                    (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), x(d, function(b, c) {
                h = g.getPosition(b, a);
                k.push(c ? "L" : "M", h.x, h.y)
            }));
            return k
        }, getTitlePosition: function() {
            var a = this.center, b = this.chart, c = this.options.title;
            return{x: b.plotLeft + a[0] + (c.x || 0), y: b.plotTop + a[1] - {high: .5, middle: .25, low: 0}[c.align] * a[2] + (c.y || 0)}
        }};
    ba(Ab, "init", function(a, b, c) {
        var d = b.angular, e = b.polar, f = c.isX, g = d && f, h, k;
        k = b.options;
        var n = c.pane || 0;
        if (d) {
            if (O(this, g ? Hc : jc), h = !f)
                this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else
            e &&
                    (O(this, jc), this.defaultRadialOptions = (h = f) ? this.defaultRadialXOptions : r(this.defaultYAxisOptions, this.defaultRadialYOptions));
        a.call(this, b, c);
        g || !d && !e || (a = this.options, b.panes || (b.panes = []), this.pane = n = b.panes[n] = b.panes[n] || new va(B(k.pane)[n], b, this), n = n.options, b.inverted = !1, k.chart.zoomType = null, this.startAngleRad = b = (n.startAngle - 90) * Math.PI / 180, this.endAngleRad = k = (z(n.endAngle, n.startAngle + 360) - 90) * Math.PI / 180, this.offset = a.offset || 0, (this.isCircular = h) && c.max === H && k - b === 2 * Math.PI && (this.autoConnect =
                !0))
    });
    ba(Tb, "getPosition", function(a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    ba(Tb, "getLabelPosition", function(a, b, c, d, e, f, g, h, k) {
        var n = this.axis, m = f.y, l = 20, u = f.align, q = (n.translate(this.pos) + n.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        n.isRadial ? (a = n.getPosition(this.pos, n.center[2] / 2 + z(f.distance, -25)), "auto" === f.rotation ? d.attr({rotation: q}) : null === m && (m = n.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), null === u && (n.isCircular ?
                (this.label.getBBox().width > n.len * n.tickInterval / (n.max - n.min) && (l = 0), u = q > l && q < 180 - l ? "left" : q > 180 + l && q < 360 - l ? "right" : "center") : u = "center", d.attr({align: u})), a.x += f.x, a.y += m) : a = a.call(this, b, c, d, e, f, g, h, k);
        return a
    });
    ba(Tb, "getMarkPath", function(a, b, c, d, e, f, g) {
        var h = this.axis;
        h.isRadial ? (a = h.getPosition(this.pos, h.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, g);
        return b
    });
    da.arearange = r(da.area, {lineWidth: 1, marker: null, threshold: null, tooltip: {pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        trackByArea: !0, dataLabels: {align: null, verticalAlign: null, xLow: 0, xHigh: 0, yLow: 0, yHigh: 0}, states: {hover: {halo: !1}}});
    Q.arearange = U(Q.area, {type: "arearange", pointArrayMap: ["low", "high"], dataLabelCollections: ["dataLabel", "dataLabelUpper"], toYData: function(a) {
            return[a.low, a.high]
        }, pointValKey: "low", deferTranslatePolar: !0, highToXY: function(a) {
            var b = this.chart, c = this.xAxis.postTranslate(a.rectPlotX, this.yAxis.len - a.plotHigh);
            a.plotHighX = c.x - b.plotLeft;
            a.plotHigh = c.y - b.plotTop
        }, getSegments: function() {
            var a =
                    this;
            x(a.points, function(b) {
                a.options.connectNulls || null !== b.low && null !== b.high ? null === b.low && null !== b.high && (b.y = b.high) : b.y = null
            });
            ea.prototype.getSegments.call(this)
        }, translate: function() {
            var a = this, b = a.yAxis;
            Q.area.prototype.translate.apply(a);
            x(a.points, function(a) {
                var d = a.low, e = a.high, f = a.plotY;
                null === e && null === d ? a.y = null : null === d ? (a.plotLow = a.plotY = null, a.plotHigh = b.translate(e, 0, 1, 0, 1)) : null === e ? (a.plotLow = f, a.plotHigh = null) : (a.plotLow = f, a.plotHigh = b.translate(e, 0, 1, 0, 1))
            });
            this.chart.polar &&
                    x(this.points, function(b) {
                        a.highToXY(b)
                    })
        }, getSegmentPath: function(a) {
            var b, c = [], d = a.length, e = ea.prototype.getSegmentPath, f, g;
            g = this.options;
            var h = g.step;
            for (b = HighchartsAdapter.grep(a, function(a) {
                return null !== a.plotLow
            }); d--; )
                f = a[d], null !== f.plotHigh && c.push({plotX: f.plotHighX || f.plotX, plotY: f.plotHigh});
            a = e.call(this, b);
            h && (!0 === h && (h = "left"), g.step = {left: "right", center: "center", right: "left"}[h]);
            c = e.call(this, c);
            g.step = h;
            g = [].concat(a, c);
            this.chart.polar || (c[0] = "L");
            this.areaPath = this.areaPath.concat(a,
                    c);
            return g
        }, drawDataLabels: function() {
            var a = this.data, b = a.length, c, d = [], e = ea.prototype, f = this.options.dataLabels, g = f.align, h, k, n = this.chart.inverted;
            if (f.enabled || this._hasPointLabels) {
                for (c = b; c--; )
                    if (h = a[c])
                        k = h.plotHigh > h.plotLow, h.y = h.high, h._plotY = h.plotY, h.plotY = h.plotHigh, d[c] = h.dataLabel, h.dataLabel = h.dataLabelUpper, h.below = k, n ? (g || (f.align = k ? "right" : "left"), f.x = f.xHigh) : f.y = f.yHigh;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments);
                for (c = b; c--; )
                    if (h = a[c])
                        k = h.plotHigh > h.plotLow, h.dataLabelUpper =
                                h.dataLabel, h.dataLabel = d[c], h.y = h.low, h.plotY = h._plotY, h.below = !k, n ? (g || (f.align = k ? "left" : "right"), f.x = f.xLow) : f.y = f.yLow;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments)
            }
            f.align = g
        }, alignDataLabel: function() {
            Q.column.prototype.alignDataLabel.apply(this, arguments)
        }, setStackedPoints: ma, getSymbol: ma, drawPoints: ma});
    da.areasplinerange = r(da.arearange);
    Q.areasplinerange = U(Q.arearange, {type: "areasplinerange", getPointSpline: Q.spline.prototype.getPointSpline});
    (function() {
        var a = Q.column.prototype;
        da.columnrange = r(da.column, da.arearange, {lineWidth: 1, pointRange: null});
        Q.columnrange = U(Q.arearange, {type: "columnrange", translate: function() {
                var b = this, c = b.yAxis, d;
                a.translate.apply(b);
                x(b.points, function(a) {
                    var f = a.shapeArgs, g = b.options.minPointLength, h;
                    a.tooltipPos = null;
                    a.plotHigh = d = c.translate(a.high, 0, 1, 0, 1);
                    a.plotLow = a.plotY;
                    h = d;
                    a = a.plotY - d;
                    Math.abs(a) < g ? (g -= a, a += g, h -= g / 2) : 0 > a && (a *= -1, h -= a);
                    f.height = a;
                    f.y = h
                })
            }, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], drawGraph: ma, pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints, drawTracker: a.drawTracker, animate: a.animate, getColumnMetrics: a.getColumnMetrics})
    })();
    da.gauge = r(da.line, {dataLabels: {enabled: !0, defer: !1, y: 15, borderWidth: 1, borderColor: "silver", borderRadius: 3, crop: !1, verticalAlign: "top", zIndex: 2}, dial: {}, pivot: {}, tooltip: {headerFormat: ""}, showInLegend: !1});
    var Ic = {type: "gauge", pointClass: U(Ha, {setState: function(a) {
                this.state = a
            }}), angular: !0, drawGraph: ma, fixedBox: !0, forceDL: !0, trackerGroups: ["group", "dataLabelsGroup"], translate: function() {
            var a =
                    this.yAxis, b = this.options, c = a.center;
            this.generatePoints();
            x(this.points, function(d) {
                var e = r(b.dial, d.dial), f = E(z(e.radius, 80)) * c[2] / 200, g = E(z(e.baseLength, 70)) * f / 100, h = E(z(e.rearLength, 10)) * f / 100, k = e.baseWidth || 3, n = e.topWidth || 1, m = b.overshoot, l = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                m && "number" === typeof m ? (m = m / 180 * Math.PI, l = Math.max(a.startAngleRad - m, Math.min(a.endAngleRad + m, l))) : !1 === b.wrap && (l = Math.max(a.startAngleRad, Math.min(a.endAngleRad, l)));
                l = 180 * l / Math.PI;
                d.shapeType = "path";
                d.shapeArgs =
                        {d: e.path || ["M", -h, -k / 2, "L", g, -k / 2, f, -n / 2, f, n / 2, g, k / 2, -h, k / 2, "z"], translateX: c[0], translateY: c[1], rotation: l};
                d.plotX = c[0];
                d.plotY = c[1]
            })
        }, drawPoints: function() {
            var a = this, b = a.yAxis.center, c = a.pivot, d = a.options, e = d.pivot, f = a.chart.renderer;
            x(a.points, function(b) {
                var c = b.graphic, e = b.shapeArgs, n = e.d, m = r(d.dial, b.dial);
                c ? (c.animate(e), e.d = n) : b.graphic = f[b.shapeType](e).attr({stroke: m.borderColor || "none", "stroke-width": m.borderWidth || 0, fill: m.backgroundColor || "black", rotation: e.rotation}).add(a.group)
            });
            c ? c.animate({translateX: b[0], translateY: b[1]}) : a.pivot = f.circle(0, 0, z(e.radius, 5)).attr({"stroke-width": e.borderWidth || 0, stroke: e.borderColor || "silver", fill: e.backgroundColor || "black"}).translate(b[0], b[1]).add(a.group)
        }, animate: function(a) {
            var b = this;
            a || (x(b.points, function(a) {
                var d = a.graphic;
                d && (d.attr({rotation: 180 * b.yAxis.startAngleRad / Math.PI}), d.animate({rotation: a.shapeArgs.rotation}, b.options.animation))
            }), b.animate = null)
        }, render: function() {
            this.group = this.plotGroup("group", "series", this.visible ?
                    "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            ea.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        }, setData: function(a, b) {
            ea.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            z(b, !0) && this.chart.redraw()
        }, drawTracker: bb && bb.drawTrackerPoint};
    Q.gauge = U(Q.line, Ic);
    da.boxplot = r(da.column, {fillColor: "#FFFFFF", lineWidth: 1, medianWidth: 2, states: {hover: {brightness: -.3}}, threshold: null, tooltip: {pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
        whiskerLength: "50%", whiskerWidth: 2});
    Q.boxplot = U(Q.column, {type: "boxplot", pointArrayMap: ["low", "q1", "median", "q3", "high"], toYData: function(a) {
            return[a.low, a.q1, a.median, a.q3, a.high]
        }, pointValKey: "high", pointAttrToOptions: {fill: "fillColor", stroke: "color", "stroke-width": "lineWidth"}, drawDataLabels: ma, translate: function() {
            var a = this.yAxis, b = this.pointArrayMap;
            Q.column.prototype.translate.apply(this);
            x(this.points, function(c) {
                x(b, function(b) {
                    null !== c[b] && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        }, drawPoints: function() {
            var a =
                    this, b = a.points, c = a.options, d = a.chart.renderer, e, f, g, h, k, n, m, l, q, v, p, t, D, M, r, C, y, B, G, F, qa, P, ka = !1 !== a.doQuartiles, I = parseInt(a.options.whiskerLength, 10) / 100;
            x(b, function(b) {
                q = b.graphic;
                qa = b.shapeArgs;
                p = {};
                M = {};
                C = {};
                P = b.color || a.color;
                b.plotY !== H && (e = b.pointAttr[b.selected ? "selected" : ""], y = qa.width, B = ja(qa.x), G = B + y, F = K(y / 2), f = ja(ka ? b.q1Plot : b.lowPlot), g = ja(ka ? b.q3Plot : b.lowPlot), h = ja(b.highPlot), k = ja(b.lowPlot), p.stroke = b.stemColor || c.stemColor || P, p["stroke-width"] = z(b.stemWidth, c.stemWidth, c.lineWidth),
                        p.dashstyle = b.stemDashStyle || c.stemDashStyle, M.stroke = b.whiskerColor || c.whiskerColor || P, M["stroke-width"] = z(b.whiskerWidth, c.whiskerWidth, c.lineWidth), C.stroke = b.medianColor || c.medianColor || P, C["stroke-width"] = z(b.medianWidth, c.medianWidth, c.lineWidth), m = p["stroke-width"] % 2 / 2, l = B + F + m, v = ["M", l, g, "L", l, h, "M", l, f, "L", l, k], ka && (m = e["stroke-width"] % 2 / 2, l = ja(l) + m, f = ja(f) + m, g = ja(g) + m, B += m, G += m, t = ["M", B, g, "L", B, f, "L", G, f, "L", G, g, "L", B, g, "z"]), I && (m = M["stroke-width"] % 2 / 2, h += m, k += m, D = ["M", l - F * I, h, "L", l + F * I,
                    h, "M", l - F * I, k, "L", l + F * I, k]), m = C["stroke-width"] % 2 / 2, n = K(b.medianPlot) + m, r = ["M", B, n, "L", G, n], q ? (b.stem.animate({d: v}), I && b.whiskers.animate({d: D}), ka && b.box.animate({d: t}), b.medianShape.animate({d: r})) : (b.graphic = q = d.g().add(a.group), b.stem = d.path(v).attr(p).add(q), I && (b.whiskers = d.path(D).attr(M).add(q)), ka && (b.box = d.path(t).attr(e).add(q)), b.medianShape = d.path(r).attr(C).add(q)))
            })
        }, setStackedPoints: ma});
    da.errorbar = r(da.boxplot, {color: "#000000", grouping: !1, linkedTo: ":previous", tooltip: {pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
        whiskerWidth: null});
    Q.errorbar = U(Q.boxplot, {type: "errorbar", pointArrayMap: ["low", "high"], toYData: function(a) {
            return[a.low, a.high]
        }, pointValKey: "high", doQuartiles: !1, drawDataLabels: Q.arearange ? Q.arearange.prototype.drawDataLabels : ma, getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || Q.column.prototype.getColumnMetrics.call(this)
        }});
    da.waterfall = r(da.column, {lineWidth: 1, lineColor: "#333", dashStyle: "dot", borderColor: "#333", dataLabels: {inside: !0}, states: {hover: {lineWidthPlus: 0}}});
    Q.waterfall = U(Q.column, {type: "waterfall", upColorProp: "fill", pointValKey: "y", translate: function() {
            var a = this.options, b = this.yAxis, c, d, e, f, g, h, k, n, m, l = a.threshold, q = a.stacking;
            Q.column.prototype.translate.apply(this);
            k = n = l;
            d = this.points;
            c = 0;
            for (a = d.length; c < a; c++)
                e = d[c], h = this.processedYData[c], f = e.shapeArgs, m = (g = q && b.stacks[(this.negStacks && h < l ? "-" : "") + this.stackKey]) ? g[e.x].points[this.index + "," + c] : [0, h], e.isSum ? e.y = h : e.isIntermediateSum && (e.y = h - n), g = L(k, k + e.y) + m[0], f.y = b.translate(g, 0, 1), e.isSum ?
                        (f.y = b.translate(m[1], 0, 1), f.height = Math.min(b.translate(m[0], 0, 1), b.len) - f.y) : e.isIntermediateSum ? (f.y = b.translate(m[1], 0, 1), f.height = Math.min(b.translate(n, 0, 1), b.len) - f.y, n = m[1]) : (0 !== k && (f.height = 0 < h ? b.translate(k, 0, 1) - f.y : b.translate(k, 0, 1) - b.translate(k - h, 0, 1)), k += h), 0 > f.height && (f.y += f.height, f.height *= -1), e.plotY = f.y = K(f.y) - this.borderWidth % 2 / 2, f.height = L(K(f.height), .001), e.yBottom = f.y + f.height, f = e.plotY + (e.negative ? f.height : 0), this.chart.inverted ? e.tooltipPos[0] = b.len - f : e.tooltipPos[1] =
                f
        }, processData: function(a) {
            var b = this.yData, c = this.options.data, d, e = b.length, f, g, h, k, n, m;
            g = f = h = k = this.options.threshold || 0;
            for (m = 0; m < e; m++)
                n = b[m], d = c && c[m] ? c[m] : {}, "sum" === n || d.isSum ? b[m] = g : "intermediateSum" === n || d.isIntermediateSum ? b[m] = f : (g += n, f += n), h = Math.min(g, h), k = Math.max(g, k);
            ea.prototype.processData.call(this, a);
            this.dataMin = h;
            this.dataMax = k
        }, toYData: function(a) {
            return a.isSum ? 0 === a.x ? null : "sum" : a.isIntermediateSum ? 0 === a.x ? null : "intermediateSum" : a.y
        }, getAttribs: function() {
            Q.column.prototype.getAttribs.apply(this,
                    arguments);
            var a = this, b = a.options, c = b.states, d = b.upColor || a.color, b = Z.Color(d).brighten(.1).get(), e = r(a.pointAttr), f = a.upColorProp;
            e[""][f] = d;
            e.hover[f] = c.hover.upColor || b;
            e.select[f] = c.select.upColor || d;
            x(a.points, function(b) {
                b.options.color || (0 < b.y ? (b.pointAttr = e, b.color = d) : b.pointAttr = a.pointAttr)
            })
        }, getGraphPath: function() {
            var a = this.data, b = a.length, c = K(this.options.lineWidth + this.borderWidth) % 2 / 2, d = [], e, f, g;
            for (g = 1; g < b; g++)
                f = a[g].shapeArgs, e = a[g - 1].shapeArgs, f = ["M", e.x + e.width, e.y + c, "L", f.x,
                    e.y + c], 0 > a[g - 1].y && (f[2] += e.height, f[5] += e.height), d = d.concat(f);
            return d
        }, getExtremes: ma, drawGraph: ea.prototype.drawGraph});
    da.bubble = r(da.scatter, {dataLabels: {formatter: function() {
                return this.point.z
            }, inside: !0, verticalAlign: "middle"}, marker: {lineColor: null, lineWidth: 1}, minSize: 8, maxSize: "20%", states: {hover: {halo: {size: 5}}}, tooltip: {pointFormat: "({point.x}, {point.y}), Size: {point.z}"}, turboThreshold: 0, zThreshold: 0, zoneAxis: "z"});
    var Jc = U(Ha, {haloPath: function() {
            return Ha.prototype.haloPath.call(this,
                    this.shapeArgs.r + this.series.options.states.hover.halo.size)
        }, ttBelow: !1});
    Q.bubble = U(Q.scatter, {type: "bubble", pointClass: Jc, pointArrayMap: ["y", "z"], parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], bubblePadding: !0, zoneAxis: "z", pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor"}, applyOpacity: function(a) {
            var b = this.options.marker, c = z(b.fillOpacity, .5);
            a = a || b.fillColor || this.color;
            1 !== c && (a = Ja(a).setOpacity(c).get("rgba"));
            return a
        }, convertAttribs: function() {
            var a =
                    ea.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        }, getRadii: function(a, b, c, d) {
            var e, f, g = this.zData, h = [], k = "width" !== this.options.sizeBy, n = b - a;
            e = 0;
            for (b = g.length; e < b; e++)
                g[e] < a ? h.push(c / 2 - 1) : (f = 0 < n ? (g[e] - a) / n : .5, k && 0 <= f && (f = Math.sqrt(f)), h.push(pa.ceil(c + f * (d - c)) / 2));
            this.radii = h
        }, animate: function(a) {
            var b = this.options.animation;
            a || (x(this.points, function(a) {
                var d = a.graphic;
                a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({r: a.r}, b))
            }), this.animate = null)
        }, translate: function() {
            var a,
                    b = this.data, c, d, e = this.radii;
            Q.scatter.prototype.translate.call(this);
            for (a = b.length; a--; )
                c = b[a], d = e ? e[a] : 0, d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {x: c.plotX, y: c.plotY, r: d}, c.dlBox = {x: c.plotX - d, y: c.plotY - d, width: 2 * d, height: 2 * d}) : c.shapeArgs = c.plotY = c.dlBox = H
        }, drawLegendSymbol: function(a, b) {
            var c = E(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c, c).attr({zIndex: 3}).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        }, drawPoints: Q.column.prototype.drawPoints,
        alignDataLabel: Q.column.prototype.alignDataLabel, buildKDTree: ma, applyZones: ma});
    fa.prototype.beforePadding = function() {
        var a = this, b = this.len, c = this.chart, d = 0, e = b, f = this.isXAxis, g = f ? "xData" : "yData", h = this.min, k = {}, n = pa.min(c.plotWidth, c.plotHeight), m = Number.MAX_VALUE, l = -Number.MAX_VALUE, q = this.max - h, v = b / q, p = [];
        x(this.series, function(b) {
            var d = b.options;
            !b.bubblePadding || !b.visible && c.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, p.push(b), f && (x(["minSize", "maxSize"], function(a) {
                var b = d[a],
                        c = /%$/.test(b), b = E(b);
                k[a] = c ? n * b / 100 : b
            }), b.minPxSize = k.minSize, b.maxPxSize = k.maxSize, b = b.zData, b.length && (m = z(d.zMin, pa.min(m, pa.max(D(b), !1 === d.displayNegative ? d.zThreshold : -Number.MAX_VALUE))), l = z(d.zMax, pa.max(l, qa(b))))))
        });
        x(p, function(a) {
            var b = a[g], c = b.length, k;
            f && a.getRadii(m, l, a.minPxSize, a.maxPxSize);
            if (0 < q)
                for (; c--; )
                    "number" === typeof b[c] && (k = a.radii[c], d = Math.min((b[c] - h) * v - k, d), e = Math.max((b[c] - h) * v + k, e))
        });
        p.length && 0 < q && !this.isLog && (e -= b, v *= (b + d - e) / b, x([["min", "userMin", d], ["max", "userMax",
                e]], function(b) {
            z(a.options[b[0]], a[b[1]]) === H && (a[b[0]] += b[2] / v)
        }))
    };
    (function() {
        function a(a, b, c) {
            a.call(this, b, c);
            this.chart.polar && (this.closeSegment = function(a) {
                var b = this.xAxis.center;
                a.push("L", b[0], b[1])
            }, this.closedStacks = !0)
        }
        function b(a, b) {
            var c = this.chart, d = this.options.animation, e = this.group, m = this.markerGroup, l = this.xAxis.center, q = c.plotLeft, v = c.plotTop;
            c.polar ? c.renderer.isSVG && (!0 === d && (d = {}), b ? (c = {translateX: l[0] + q, translateY: l[1] + v, scaleX: .001, scaleY: .001}, e.attr(c), m && m.attr(c)) :
                    (c = {translateX: q, translateY: v, scaleX: 1, scaleY: 1}, e.animate(c, d), m && m.animate(c, d), this.animate = null)) : a.call(this, b)
        }
        var c = ea.prototype, d = Wa.prototype, e;
        c.searchPointByAngle = function(a) {
            var b = this.chart, c = this.xAxis.pane.center;
            return this.searchKDTree({clientX: 180 + Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop) * (-180 / Math.PI)})
        };
        ba(c, "buildKDTree", function(a) {
            this.chart.polar && (this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2);
            a.apply(this)
        });
        c.toXY = function(a) {
            var b,
                    c = this.chart, d = a.plotX;
            b = a.plotY;
            a.rectPlotX = d;
            a.rectPlotY = b;
            b = this.xAxis.postTranslate(a.plotX, this.yAxis.len - b);
            a.plotX = a.polarPlotX = b.x - c.plotLeft;
            a.plotY = a.polarPlotY = b.y - c.plotTop;
            this.kdByAngle ? (c = (d / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, 0 > c && (c += 360), a.clientX = c) : a.clientX = a.plotX
        };
        Q.area && ba(Q.area.prototype, "init", a);
        Q.areaspline && ba(Q.areaspline.prototype, "init", a);
        Q.spline && ba(Q.spline.prototype, "getPointSpline", function(a, b, c, d) {
            var e, m, l, q, v, p, t;
            this.chart.polar ? (e = c.plotX,
                    m = c.plotY, a = b[d - 1], l = b[d + 1], this.connectEnds && (a || (a = b[b.length - 2]), l || (l = b[1])), a && l && (q = a.plotX, v = a.plotY, b = l.plotX, p = l.plotY, q = (1.5 * e + q) / 2.5, v = (1.5 * m + v) / 2.5, l = (1.5 * e + b) / 2.5, t = (1.5 * m + p) / 2.5, b = Math.sqrt(Math.pow(q - e, 2) + Math.pow(v - m, 2)), p = Math.sqrt(Math.pow(l - e, 2) + Math.pow(t - m, 2)), q = Math.atan2(v - m, q - e), v = Math.atan2(t - m, l - e), t = Math.PI / 2 + (q + v) / 2, Math.abs(q - t) > Math.PI / 2 && (t -= Math.PI), q = e + Math.cos(t) * b, v = m + Math.sin(t) * b, l = e + Math.cos(Math.PI + t) * p, t = m + Math.sin(Math.PI + t) * p, c.rightContX = l, c.rightContY = t),
                    d ? (c = ["C", a.rightContX || a.plotX, a.rightContY || a.plotY, q || e, v || m, e, m], a.rightContX = a.rightContY = null) : c = ["M", e, m]) : c = a.call(this, b, c, d);
            return c
        });
        ba(c, "translate", function(a) {
            var b = this.chart;
            a.call(this);
            if (b.polar && (this.kdByAngle = b.tooltip && b.tooltip.shared, !this.preventPostTranslate))
                for (a = this.points, b = a.length; b--; )
                    this.toXY(a[b])
        });
        ba(c, "getSegmentPath", function(a, b) {
            var c = this.points;
            this.chart.polar && !1 !== this.options.connectEnds && b[b.length - 1] === c[c.length - 1] && null !== c[0].y && (this.connectEnds =
                    !0, b = [].concat(b, [c[0]]));
            return a.call(this, b)
        });
        ba(c, "animate", b);
        Q.column && (e = Q.column.prototype, ba(e, "animate", b), ba(e, "translate", function(a) {
            var b = this.xAxis, c = this.yAxis.len, d = b.center, e = b.startAngleRad, m = this.chart.renderer, l, q;
            this.preventPostTranslate = !0;
            a.call(this);
            if (b.isRadial)
                for (b = this.points, q = b.length; q--; )
                    l = b[q], a = l.barX + e, l.shapeType = "path", l.shapeArgs = {d: m.symbols.arc(d[0], d[1], c - l.plotY, null, {start: a, end: a + l.pointWidth, innerR: c - z(l.yBottom, c)})}, this.toXY(l), l.tooltipPos = [l.plotX,
                        l.plotY], l.ttBelow = l.plotY > d[1]
        }), ba(e, "alignDataLabel", function(a, b, d, e, n, m) {
            this.chart.polar ? (a = b.rectPlotX / Math.PI * 180, null === e.align && (e.align = 20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center"), null === e.verticalAlign && (e.verticalAlign = 45 > a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle"), c.alignDataLabel.call(this, b, d, e, n, m)) : a.call(this, b, d, e, n, m)
        }));
        ba(d, "getCoordinates", function(a, b) {
            var c = this.chart, d = {xAxis: [], yAxis: []};
            c.polar ? x(c.axes, function(a) {
                var e = a.isXAxis, f = a.center, l = b.chartX - f[0] - c.plotLeft,
                        f = b.chartY - f[1] - c.plotTop;
                d[e ? "xAxis" : "yAxis"].push({axis: a, value: a.translate(e ? Math.PI - Math.atan2(l, f) : Math.sqrt(Math.pow(l, 2) + Math.pow(f, 2)), !0)})
            }) : d = a.call(this, b);
            return d
        })
    })();
    O(Z, {Color: Ja, Point: Ha, Tick: Za, Renderer: ab, SVGElement: ha, SVGRenderer: Ga, arrayMin: D, arrayMax: qa, charts: xa, dateFormat: Ca, error: P, format: v, pathAnim: Kb, getOptions: function() {
            return oa
        }, hasBidiBug: kc, isTouchDevice: gb, setOptions: function(a) {
            oa = r(!0, oa, a);
            Ya();
            return oa
        }, addEvent: ca, removeEvent: sa, createElement: F, discardElement: ta,
        css: y, each: x, map: La, merge: r, splat: B, extendClass: U, pInt: E, svg: za, canvas: Ea, vml: !za && !Ea, product: "Highcharts 4.1.8", version: "/Highstock 2.1.8"})
})();
(function(r) {
    var E = r.getOptions(), Y = E.plotOptions, W = r.seriesTypes, R = r.merge, X = function() {
    }, S = r.each, C = r.pick;
    Y.funnel = R(Y.pie, {animation: !1, center: ["50%", "50%"], width: "90%", neckWidth: "30%", height: "100%", neckHeight: "25%", reversed: !1, dataLabels: {connectorWidth: 1, connectorColor: "#606060"}, size: !0, states: {select: {color: "#C0C0C0", borderColor: "#000000", shadow: !1}}});
    W.funnel = r.extendClass(W.pie, {type: "funnel", animate: X, translate: function() {
            var p = function(l, q) {
                return/%$/.test(l) ? q * parseInt(l, 10) / 100 : parseInt(l,
                        10)
            }, t = 0, r = this.chart, C = this.options, y = C.reversed, F = C.ignoreHiddenPoint, E = r.plotWidth, I = r.plotHeight, ga = 0, r = C.center, V = p(r[0], E), v = p(r[1], I), l = p(C.width, E), q, M, D = p(C.height, I), qa = p(C.neckWidth, E), ka = p(C.neckHeight, I), ta = D - ka, p = this.data, P, ua, Sa = "left" === C.dataLabels.position ? 1 : 0, Ya, ha, R, W, Y, Da, va;
            this.getWidthAt = M = function(q) {
                return q > D - ka || D === ka ? qa : qa + (D - ka - q) / (D - ka) * (l - qa)
            };
            this.getX = function(l, q) {
                return V + (q ? -1 : 1) * (M(y ? I - l : l) / 2 + C.dataLabels.distance)
            };
            this.center = [V, v, D];
            this.centerX = V;
            S(p, function(l) {
                F &&
                        !1 === l.visible || (t += l.y)
            });
            S(p, function(l) {
                va = null;
                ua = t ? l.y / t : 0;
                ha = v - D / 2 + ga * D;
                Y = ha + ua * D;
                q = M(ha);
                Ya = V - q / 2;
                R = Ya + q;
                q = M(Y);
                W = V - q / 2;
                Da = W + q;
                ha > ta ? (Ya = W = V - qa / 2, R = Da = V + qa / 2) : Y > ta && (va = Y, q = M(ta), W = V - q / 2, Da = W + q, Y = ta);
                y && (ha = D - ha, Y = D - Y, va = va ? D - va : null);
                P = ["M", Ya, ha, "L", R, ha, Da, Y];
                va && P.push(Da, va, W, va);
                P.push(W, Y, "Z");
                l.shapeType = "path";
                l.shapeArgs = {d: P};
                l.percentage = 100 * ua;
                l.plotX = V;
                l.plotY = (ha + (va || Y)) / 2;
                l.tooltipPos = [V, l.plotY];
                l.slice = X;
                l.half = Sa;
                F && !1 === l.visible || (ga += ua)
            })
        }, drawPoints: function() {
            var p =
                    this, t = p.options, r = p.chart.renderer;
            S(p.data, function(B) {
                var y = B.options, F = B.graphic, E = B.shapeArgs;
                F ? F.animate(E) : B.graphic = r.path(E).attr({fill: B.color, stroke: C(y.borderColor, t.borderColor), "stroke-width": C(y.borderWidth, t.borderWidth)}).add(p.group)
            })
        }, sortByAngle: function(p) {
            p.sort(function(p, r) {
                return p.plotY - r.plotY
            })
        }, drawDataLabels: function() {
            var p = this.data, t = this.options.dataLabels.distance, r, C, y, F = p.length, E, I;
            for (this.center[2] -= 2 * t; F--; )
                y = p[F], C = (r = y.half) ? 1 : -1, I = y.plotY, E = this.getX(I,
                        r), y.labelPos = [0, I, E + (t - 5) * C, I, E + t * C, I, r ? "right" : "left", 0];
            W.pie.prototype.drawDataLabels.call(this)
        }});
    E.plotOptions.pyramid = r.merge(E.plotOptions.funnel, {neckWidth: "0%", neckHeight: "0%", reversed: !0});
    r.seriesTypes.pyramid = r.extendClass(r.seriesTypes.funnel, {type: "pyramid"})
})(Highcharts);
(function(r) {
    var E = r.Chart, Y = r.addEvent, W = r.removeEvent, R = HighchartsAdapter.fireEvent, X = r.createElement, S = r.discardElement, C = r.css, p = r.merge, t = r.each, G = r.extend, B = r.splat, y = Math.max, F = document, U = window, I = r.isTouchDevice, ga = r.Renderer.prototype.symbols, V = r.getOptions(), v;
    G(V.lang, {printChart: "Print chart", downloadPNG: "Download PNG image", downloadJPEG: "Download JPEG image", downloadPDF: "Download PDF document", downloadSVG: "Download SVG vector image", contextButtonTitle: "Chart context menu"});
    V.navigation =
            {menuStyle: {border: "1px solid #A0A0A0", background: "#FFFFFF", padding: "5px 0"}, menuItemStyle: {padding: "0 10px", background: "none", color: "#303030", fontSize: I ? "14px" : "11px"}, menuItemHoverStyle: {background: "#4572A5", color: "#FFFFFF"}, buttonOptions: {symbolFill: "#E0E0E0", symbolSize: 14, symbolStroke: "#666", symbolStrokeWidth: 3, symbolX: 12.5, symbolY: 10.5, align: "right", buttonSpacing: 3, height: 22, theme: {fill: "white", stroke: "none"}, verticalAlign: "top", width: 24}};
    V.exporting = {type: "image/png", url: "http://export.highcharts.com/",
        buttons: {contextButton: {menuClassName: "highcharts-contextmenu", symbol: "menu", _titleKey: "contextButtonTitle", menuItems: [{textKey: "printChart", onclick: function() {
                            this.print()
                        }}, {separator: !0}, {textKey: "downloadPNG", onclick: function() {
                            this.exportChart()
                        }}, {textKey: "downloadJPEG", onclick: function() {
                            this.exportChart({type: "image/jpeg"})
                        }}, {textKey: "downloadPDF", onclick: function() {
                            this.exportChart({type: "application/pdf"})
                        }}, {textKey: "downloadSVG", onclick: function() {
                            this.exportChart({type: "image/svg+xml"})
                        }}]}}};
    r.post = function(l, q, v) {
        var t;
        l = X("form", p({method: "post", action: l, enctype: "multipart/form-data"}, v), {display: "none"}, F.body);
        for (t in q)
            X("input", {type: "hidden", name: t, value: q[t]}, null, l);
        l.submit();
        S(l)
    };
    G(E.prototype, {sanitizeSVG: function(l) {
            return l.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g,
                    " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, "\u00a0").replace(/&shy;/g, "\u00ad").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g, ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g,
                    " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(l) {
                return l.toLowerCase()
            })
        }, getChartHTML: function() {
            return this.container.innerHTML
        }, getSVG: function(l) {
            var q = this, v, D, C, y, I, P = p(q.options, l), E = P.exporting.allowHTML;
            F.createElementNS || (F.createElementNS = function(l, q) {
                return F.createElement(q)
            });
            D = X("div", null, {position: "absolute", top: "-9999em", width: q.chartWidth + "px", height: q.chartHeight + "px"}, F.body);
            C = q.renderTo.style.width;
            I = q.renderTo.style.height;
            C = P.exporting.sourceWidth ||
                    P.chart.width || /px$/.test(C) && parseInt(C, 10) || 600;
            I = P.exporting.sourceHeight || P.chart.height || /px$/.test(I) && parseInt(I, 10) || 400;
            G(P.chart, {animation: !1, renderTo: D, forExport: !E, width: C, height: I});
            P.exporting.enabled = !1;
            delete P.data;
            P.series = [];
            t(q.series, function(l) {
                y = p(l.options, {animation: !1, enableMouseTracking: !1, showCheckbox: !1, visible: l.visible});
                y.isInternal || P.series.push(y)
            });
            l && t(["xAxis", "yAxis"], function(q) {
                t(B(l[q]), function(l, v) {
                    P[q][v] = p(P[q][v], l)
                })
            });
            v = new r.Chart(P, q.callback);
            t(["xAxis",
                "yAxis"], function(l) {
                t(q[l], function(q, p) {
                    var t = v[l][p], D = q.getExtremes(), C = D.userMin, D = D.userMax;
                    !t || void 0 === C && void 0 === D || t.setExtremes(C, D, !0, !1)
                })
            });
            C = v.getChartHTML();
            P = null;
            v.destroy();
            S(D);
            E && (D = C.match(/<\/svg>(.*?$)/)) && (D = '<foreignObject x="0" y="0 width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + D[1] + "</body></foreignObject>", C = C.replace("</svg>", D + "</svg>"));
            C = this.sanitizeSVG(C);
            return C = C.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
        },
        getSVGForExport: function(l, q) {
            var v = this.options.exporting;
            return this.getSVG(p({chart: {borderRadius: 0}}, v.chartOptions, q, {exporting: {sourceWidth: l && l.sourceWidth || v.sourceWidth, sourceHeight: l && l.sourceHeight || v.sourceHeight}}))
        }, exportChart: function(l, q) {
            var v = this.getSVGForExport(l, q);
            l = p(this.options.exporting, l);
            r.post(l.url, {filename: l.filename || "chart", type: l.type, width: l.width || 0, scale: l.scale || 2, svg: v}, l.formAttributes)
        }, print: function() {
            var l = this, q = l.container, v = [], p = q.parentNode, C = F.body,
                    r = C.childNodes;
            l.isPrinting || (l.isPrinting = !0, R(l, "beforePrint"), t(r, function(l, q) {
                1 === l.nodeType && (v[q] = l.style.display, l.style.display = "none")
            }), C.appendChild(q), U.focus(), U.print(), setTimeout(function() {
                p.appendChild(q);
                t(r, function(l, q) {
                    1 === l.nodeType && (l.style.display = v[q])
                });
                l.isPrinting = !1;
                R(l, "afterPrint")
            }, 1E3))
        }, contextMenu: function(l, q, v, p, r, B, F) {
            var P = this, I = P.options.navigation, E = I.menuItemStyle, S = P.chartWidth, U = P.chartHeight, V = "cache-" + l, ga = P[V], R = y(r, B), Da, va, H, aa = function(q) {
                P.pointer.inClass(q.target,
                        l) || va()
            };
            ga || (P[V] = ga = X("div", {className: l}, {position: "absolute", zIndex: 1E3, padding: R + "px"}, P.container), Da = X("div", null, G({MozBoxShadow: "3px 3px 10px #888", WebkitBoxShadow: "3px 3px 10px #888", boxShadow: "3px 3px 10px #888"}, I.menuStyle), ga), va = function() {
                C(ga, {display: "none"});
                F && F.setState(0);
                P.openMenu = !1
            }, Y(ga, "mouseleave", function() {
                H = setTimeout(va, 500)
            }), Y(ga, "mouseenter", function() {
                clearTimeout(H)
            }), Y(document, "mouseup", aa), Y(P, "destroy", function() {
                W(document, "mouseup", aa)
            }), t(q, function(l) {
                if (l) {
                    var q =
                            l.separator ? X("hr", null, null, Da) : X("div", {onmouseover: function() {
                            C(this, I.menuItemHoverStyle)
                        }, onmouseout: function() {
                            C(this, E)
                        }, onclick: function(q) {
                            q.stopPropagation();
                            va();
                            l.onclick && l.onclick.apply(P, arguments)
                        }, innerHTML: l.text || P.options.lang[l.textKey]}, G({cursor: "pointer"}, E), Da);
                    P.exportDivElements.push(q)
                }
            }), P.exportDivElements.push(Da, ga), P.exportMenuWidth = ga.offsetWidth, P.exportMenuHeight = ga.offsetHeight);
            q = {display: "block"};
            v + P.exportMenuWidth > S ? q.right = S - v - r - R + "px" : q.left = v - R + "px";
            p + B +
                    P.exportMenuHeight > U && "top" !== F.alignOptions.verticalAlign ? q.bottom = U - p - R + "px" : q.top = p + B - R + "px";
            C(ga, q);
            P.openMenu = !0
        }, addButton: function(l) {
            var q = this, t = q.renderer, D = p(q.options.navigation.buttonOptions, l), C = D.onclick, y = D.menuItems, B, F, I = {stroke: D.symbolStroke, fill: D.symbolFill}, E = D.symbolSize || 12;
            q.btnCount || (q.btnCount = 0);
            q.exportDivElements || (q.exportDivElements = [], q.exportSVGElements = []);
            if (!1 !== D.enabled) {
                var S = D.theme, U = S.states, V = U && U.hover, U = U && U.select, ga;
                delete S.states;
                C ? ga = function(l) {
                    l.stopPropagation();
                    C.call(q, l)
                } : y && (ga = function() {
                    q.contextMenu(F.menuClassName, y, F.translateX, F.translateY, F.width, F.height, F);
                    F.setState(2)
                });
                D.text && D.symbol ? S.paddingLeft = r.pick(S.paddingLeft, 25) : D.text || G(S, {width: D.width, height: D.height, padding: 0});
                F = t.button(D.text, 0, 0, ga, S, V, U).attr({title: q.options.lang[D._titleKey], "stroke-linecap": "round"});
                F.menuClassName = l.menuClassName || "highcharts-menu-" + q.btnCount++;
                D.symbol && (B = t.symbol(D.symbol, D.symbolX - E / 2, D.symbolY - E / 2, E, E).attr(G(I, {"stroke-width": D.symbolStrokeWidth ||
                    1, zIndex: 1})).add(F));
                F.add().align(G(D, {width: F.width, x: r.pick(D.x, v)}), !0, "spacingBox");
                v += (F.width + D.buttonSpacing) * ("right" === D.align ? -1 : 1);
                q.exportSVGElements.push(F, B)
            }
        }, destroyExport: function(l) {
            l = l.target;
            var q, v;
            for (q = 0; q < l.exportSVGElements.length; q++)
                if (v = l.exportSVGElements[q])
                    v.onclick = v.ontouchstart = null, l.exportSVGElements[q] = v.destroy();
            for (q = 0; q < l.exportDivElements.length; q++)
                v = l.exportDivElements[q], W(v, "mouseleave"), l.exportDivElements[q] = v.onmouseout = v.onmouseover = v.ontouchstart =
                        v.onclick = null, S(v)
        }});
    ga.menu = function(l, q, v, p) {
        return["M", l, q + 2.5, "L", l + v, q + 2.5, "M", l, q + p / 2 + .5, "L", l + v, q + p / 2 + .5, "M", l, q + p - 1.5, "L", l + v, q + p - 1.5]
    };
    E.prototype.callbacks.push(function(l) {
        var q, p = l.options.exporting, t = p.buttons;
        v = 0;
        if (!1 !== p.enabled) {
            for (q in t)
                l.addButton(t[q]);
            Y(l, "destroy", l.destroyExport)
        }
    })
})(Highcharts);
(function(r) {
    var E = r.each, Y = r.pick, W = HighchartsAdapter.inArray, R = r.splat, X, S = function(C, p) {
        this.init(C, p)
    };
    r.extend(S.prototype, {init: function(C, p) {
            this.options = C;
            this.chartOptions = p;
            this.columns = C.columns || this.rowsToColumns(C.rows) || [];
            this.firstRowAsNames = Y(C.firstRowAsNames, !0);
            this.decimalRegex = C.decimalPoint && new RegExp("^([0-9]+)" + C.decimalPoint + "([0-9]+)$");
            this.rawColumns = [];
            this.columns.length ? this.dataFound() : (this.parseCSV(), this.parseTable(), this.parseGoogleSpreadsheet())
        }, getColumnDistribution: function() {
            var C =
                    this.chartOptions, p = this.options, t = [], G = function(p) {
                return(r.seriesTypes[p || "line"].prototype.pointArrayMap || [0]).length
            }, B = C && C.chart && C.chart.type, y = [], F = [], S = 0, I;
            E(C && C.series || [], function(p) {
                y.push(G(p.type || B))
            });
            E(p && p.seriesMapping || [], function(p) {
                t.push(p.x || 0)
            });
            0 === t.length && t.push(0);
            E(p && p.seriesMapping || [], function(p) {
                var t = new X, v, l = y[S] || G(B), q = r.seriesTypes[((C && C.series || [])[S] || {}).type || B || "line"].prototype.pointArrayMap || ["y"];
                t.addColumnReader(p.x, "x");
                for (v in p)
                    p.hasOwnProperty(v) &&
                            "x" !== v && t.addColumnReader(p[v], v);
                for (I = 0; I < l; I++)
                    t.hasReader(q[I]) || t.addColumnReader(void 0, q[I]);
                F.push(t);
                S++
            });
            p = r.seriesTypes[B || "line"].prototype.pointArrayMap;
            void 0 === p && (p = ["y"]);
            this.valueCount = {global: G(B), xColumns: t, individual: y, seriesBuilders: F, globalPointArrayMap: p}
        }, dataFound: function() {
            this.options.switchRowsAndColumns && (this.columns = this.rowsToColumns(this.columns));
            this.getColumnDistribution();
            this.parseTypes();
            !1 !== this.parsed() && this.complete()
        }, parseCSV: function() {
            var C = this,
                    p = this.options, t = p.csv, r = this.columns, B = p.startRow || 0, y = p.endRow || Number.MAX_VALUE, F = p.startColumn || 0, S = p.endColumn || Number.MAX_VALUE, I, R, V = 0;
            t && (R = t.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split(p.lineDelimiter || "\n"), I = p.itemDelimiter || (-1 !== t.indexOf("\t") ? "\t" : ","), E(R, function(v, l) {
                var q = C.trim(v), p = 0 === q.indexOf("#");
                l >= B && l <= y && !p && "" !== q && (q = v.split(I), E(q, function(l, q) {
                    q >= F && q <= S && (r[q - F] || (r[q - F] = []), r[q - F][V] = l)
                }), V += 1)
            }), this.dataFound())
        }, parseTable: function() {
            var C = this.options, p =
                    C.table, t = this.columns, r = C.startRow || 0, B = C.endRow || Number.MAX_VALUE, y = C.startColumn || 0, F = C.endColumn || Number.MAX_VALUE;
            p && ("string" === typeof p && (p = document.getElementById(p)), E(p.getElementsByTagName("tr"), function(p, C) {
                C >= r && C <= B && E(p.children, function(p, B) {
                    ("TD" === p.tagName || "TH" === p.tagName) && B >= y && B <= F && (t[B - y] || (t[B - y] = []), t[B - y][C - r] = p.innerHTML)
                })
            }), this.dataFound())
        }, parseGoogleSpreadsheet: function() {
            var C = this, p = this.options, t = p.googleSpreadsheetKey, r = this.columns, B = p.startRow || 0, y = p.endRow ||
                    Number.MAX_VALUE, F = p.startColumn || 0, E = p.endColumn || Number.MAX_VALUE, I, S;
            t && jQuery.ajax({dataType: "json", url: "https://spreadsheets.google.com/feeds/cells/" + t + "/" + (p.googleSpreadsheetWorksheet || "od6") + "/public/values?alt=json-in-script&callback=?", error: p.error, success: function(p) {
                    p = p.feed.entry;
                    var v, l = p.length, q = 0, t = 0, D;
                    for (D = 0; D < l; D++)
                        v = p[D], q = Math.max(q, v.gs$cell.col), t = Math.max(t, v.gs$cell.row);
                    for (D = 0; D < q; D++)
                        D >= F && D <= E && (r[D - F] = [], r[D - F].length = Math.min(t, y - B));
                    for (D = 0; D < l; D++)
                        v = p[D], I = v.gs$cell.row -
                                1, S = v.gs$cell.col - 1, S >= F && S <= E && I >= B && I <= y && (r[S - F][I - B] = v.content.$t);
                    C.dataFound()
                }})
        }, trim: function(r, p) {
            "string" === typeof r && (r = r.replace(/^\s+|\s+$/g, ""), p && /^[0-9\s]+$/.test(r) && (r = r.replace(/\s/g, "")), this.decimalRegex && (r = r.replace(this.decimalRegex, "$1.$2")));
            return r
        }, parseTypes: function() {
            for (var r = this.columns, p = r.length; p--; )
                this.parseColumn(r[p], p)
        }, parseColumn: function(r, p) {
            var t = this.rawColumns, G = this.columns, B = r.length, y, F, E, I, S = this.firstRowAsNames, V = -1 !== W(p, this.valueCount.xColumns),
                    v = [], l = this.chartOptions, q, M = (this.options.columnTypes || [])[p], l = V && (l && l.xAxis && "category" === R(l.xAxis)[0].type || "string" === M);
            for (t[p] || (t[p] = []); B--; )
                y = v[B] || r[B], E = this.trim(y), I = this.trim(y, !0), F = parseFloat(I), void 0 === t[p][B] && (t[p][B] = E), l || 0 === B && S ? r[B] = E : +I === F ? (r[B] = F, 31536E6 < F && "float" !== M ? r.isDatetime = !0 : r.isNumeric = !0, void 0 !== r[B + 1] && (q = F > r[B + 1])) : (F = this.parseDate(y), V && "number" === typeof F && !isNaN(F) && "float" !== M ? (v[B] = y, r[B] = F, r.isDatetime = !0, void 0 !== r[B + 1] && (y = F > r[B + 1], y !== q && void 0 !==
                        q && (this.alternativeFormat ? (this.dateFormat = this.alternativeFormat, B = r.length, this.alternativeFormat = this.dateFormats[this.dateFormat].alternative) : r.unsorted = !0), q = y)) : (r[B] = "" === E ? null : E, 0 !== B && (r.isDatetime || r.isNumeric) && (r.mixed = !0)));
            V && r.mixed && (G[p] = t[p]);
            if (V && q && this.options.sort)
                for (p = 0; p < G.length; p++)
                    G[p].reverse(), S && G[p].unshift(G[p].pop())
        }, dateFormats: {"YYYY-mm-dd": {regex: /^([0-9]{4})[\-\/\.]([0-9]{2})[\-\/\.]([0-9]{2})$/, parser: function(r) {
                    return Date.UTC(+r[1], r[2] - 1, +r[3])
                }}, "dd/mm/YYYY": {regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/,
                parser: function(r) {
                    return Date.UTC(+r[3], r[2] - 1, +r[1])
                }, alternative: "mm/dd/YYYY"}, "mm/dd/YYYY": {regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{4})$/, parser: function(r) {
                    return Date.UTC(+r[3], r[1] - 1, +r[2])
                }}, "dd/mm/YY": {regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/, parser: function(r) {
                    return Date.UTC(+r[3] + 2E3, r[2] - 1, +r[1])
                }, alternative: "mm/dd/YY"}, "mm/dd/YY": {regex: /^([0-9]{1,2})[\-\/\.]([0-9]{1,2})[\-\/\.]([0-9]{2})$/, parser: function(r) {
                    return Date.UTC(+r[3] + 2E3, r[1] - 1, +r[2])
                }}},
        parseDate: function(r) {
            var p = this.options.parseDate, t, G, B = this.options.dateFormat || this.dateFormat, y;
            if (p)
                t = p(r);
            else if ("string" === typeof r) {
                if (B)
                    p = this.dateFormats[B], (y = r.match(p.regex)) && (t = p.parser(y));
                else
                    for (G in this.dateFormats)
                        if (p = this.dateFormats[G], y = r.match(p.regex)) {
                            this.dateFormat = G;
                            this.alternativeFormat = p.alternative;
                            t = p.parser(y);
                            break
                        }
                y || (y = Date.parse(r), "object" === typeof y && null !== y && y.getTime ? t = y.getTime() - 6E4 * y.getTimezoneOffset() : "number" !== typeof y || isNaN(y) || (t = y - 6E4 * (new Date(y)).getTimezoneOffset()))
            }
            return t
        },
        rowsToColumns: function(r) {
            var p, t, G, B, y;
            if (r)
                for (y = [], t = r.length, p = 0; p < t; p++)
                    for (B = r[p].length, G = 0; G < B; G++)
                        y[G] || (y[G] = []), y[G][p] = r[p][G];
            return y
        }, parsed: function() {
            if (this.options.parsed)
                return this.options.parsed.call(this, this.columns)
        }, getFreeIndexes: function(r, p) {
            var t, G, B = [], y = [], F;
            for (G = 0; G < r; G += 1)
                B.push(!0);
            for (t = 0; t < p.length; t += 1)
                for (F = p[t].getReferencedColumnIndexes(), G = 0; G < F.length; G += 1)
                    B[F[G]] = !1;
            for (G = 0; G < B.length; G += 1)
                B[G] && y.push(G);
            return y
        }, complete: function() {
            var r = this.columns,
                    p, t = this.options, G, B, y, F, E = [], I;
            if (t.complete || t.afterComplete) {
                for (y = 0; y < r.length; y++)
                    this.firstRowAsNames && (r[y].name = r[y].shift());
                G = [];
                B = this.getFreeIndexes(r.length, this.valueCount.seriesBuilders);
                for (y = 0; y < this.valueCount.seriesBuilders.length; y++)
                    I = this.valueCount.seriesBuilders[y], I.populateColumns(B) && E.push(I);
                for (; 0 < B.length; ) {
                    I = new X;
                    I.addColumnReader(0, "x");
                    y = W(0, B);
                    -1 !== y && B.splice(y, 1);
                    for (y = 0; y < this.valueCount.global; y++)
                        I.addColumnReader(void 0, this.valueCount.globalPointArrayMap[y]);
                    I.populateColumns(B) && E.push(I)
                }
                0 < E.length && 0 < E[0].readers.length && (I = r[E[0].readers[0].columnIndex], void 0 !== I && (I.isDatetime ? p = "datetime" : I.isNumeric || (p = "category")));
                if ("category" === p)
                    for (y = 0; y < E.length; y++)
                        for (I = E[y], B = 0; B < I.readers.length; B++)
                            "x" === I.readers[B].configName && (I.readers[B].configName = "name");
                for (y = 0; y < E.length; y++) {
                    I = E[y];
                    B = [];
                    for (F = 0; F < r[0].length; F++)
                        B[F] = I.read(r, F);
                    G[y] = {data: B};
                    I.name && (G[y].name = I.name);
                    "category" === p && (G[y].turboThreshold = 0)
                }
                r = {series: G};
                p && (r.xAxis = {type: p});
                t.complete && t.complete(r);
                t.afterComplete && t.afterComplete(r)
            }
        }});
    r.Data = S;
    r.data = function(r, p) {
        return new S(r, p)
    };
    r.wrap(r.Chart.prototype, "init", function(C, p, t) {
        var G = this;
        p && p.data ? r.data(r.extend(p.data, {afterComplete: function(B) {
                var y, F;
                if (p.hasOwnProperty("series"))
                    if ("object" === typeof p.series)
                        for (y = Math.max(p.series.length, B.series.length); y--; )
                            F = p.series[y] || {}, p.series[y] = r.merge(F, B.series[y]);
                    else
                        delete p.series;
                p = r.merge(B, p);
                C.call(G, p, t)
            }}), p) : C.call(G, p, t)
    });
    X = function() {
        this.readers =
        [];
        this.pointIsArray = !0
    };
    X.prototype.populateColumns = function(r) {
        var p = !0;
        E(this.readers, function(p) {
            void 0 === p.columnIndex && (p.columnIndex = r.shift())
        });
        E(this.readers, function(r) {
            void 0 === r.columnIndex && (p = !1)
        });
        return p
    };
    X.prototype.read = function(r, p) {
        var t = this.pointIsArray, G = t ? [] : {}, B;
        E(this.readers, function(y) {
            var B = r[y.columnIndex][p];
            t ? G.push(B) : G[y.configName] = B
        });
        void 0 === this.name && 2 <= this.readers.length && (B = this.getReferencedColumnIndexes(), 2 <= B.length && (B.shift(), B.sort(), this.name = r[B.shift()].name));
        return G
    };
    X.prototype.addColumnReader = function(r, p) {
        this.readers.push({columnIndex: r, configName: p});
        "x" !== p && "y" !== p && void 0 !== p && (this.pointIsArray = !1)
    };
    X.prototype.getReferencedColumnIndexes = function() {
        var r, p = [], t;
        for (r = 0; r < this.readers.length; r += 1)
            t = this.readers[r], void 0 !== t.columnIndex && p.push(t.columnIndex);
        return p
    };
    X.prototype.hasReader = function(r) {
        var p, t;
        for (p = 0; p < this.readers.length; p += 1)
            if (t = this.readers[p], t.configName === r)
                return!0
    }
})(Highcharts);
(function(r) {
    function E() {
        return!!this.points.length
    }
    function Y() {
        this.hasData() ? this.hideNoData() : this.showNoData()
    }
    var W = r.seriesTypes, R = r.Chart.prototype, X = r.getOptions(), S = r.extend, C = r.each;
    S(X.lang, {noData: "No data to display"});
    X.noData = {position: {x: 0, y: 0, align: "center", verticalAlign: "middle"}, attr: {}, style: {fontWeight: "bold", fontSize: "12px", color: "#60606a"}};
    C(["pie", "gauge", "waterfall", "bubble"], function(p) {
        W[p] && (W[p].prototype.hasData = E)
    });
    r.Series.prototype.hasData = function() {
        return this.visible &&
                void 0 !== this.dataMax && void 0 !== this.dataMin
    };
    R.showNoData = function(p) {
        var r = this.options;
        p = p || r.lang.noData;
        r = r.noData;
        this.noDataLabel || (this.noDataLabel = this.renderer.label(p, 0, 0, null, null, null, r.useHTML, null, "no-data").attr(r.attr).css(r.style).add(), this.noDataLabel.align(S(this.noDataLabel.getBBox(), r.position), !1, "plotBox"))
    };
    R.hideNoData = function() {
        this.noDataLabel && (this.noDataLabel = this.noDataLabel.destroy())
    };
    R.hasData = function() {
        for (var p = this.series, r = p.length; r--; )
            if (p[r].hasData() &&
                    !p[r].options.isInternal)
                return!0;
        return!1
    };
    R.callbacks.push(function(p) {
        r.addEvent(p, "load", Y);
        r.addEvent(p, "redraw", Y)
    })
})(Highcharts);
(function(r) {
    function E(v, l, q) {
        var p;
        l.rgba.length && v.rgba.length ? (v = v.rgba, l = l.rgba, p = 1 !== l[3] || 1 !== v[3], v = (p ? "rgba(" : "rgb(") + Math.round(l[0] + (v[0] - l[0]) * (1 - q)) + "," + Math.round(l[1] + (v[1] - l[1]) * (1 - q)) + "," + Math.round(l[2] + (v[2] - l[2]) * (1 - q)) + (p ? "," + (l[3] + (v[3] - l[3]) * (1 - q)) : "") + ")") : v = l.raw || "none";
        return v
    }
    var Y = function() {
    }, W = r.getOptions(), R = r.each, X = r.extend, S = r.format, C = r.pick, p = r.wrap, t = r.Chart, G = r.seriesTypes, B = G.pie, y = G.column, F = r.Tick, U = HighchartsAdapter.fireEvent, I = HighchartsAdapter.inArray,
            ga = 1;
    R(["fill", "stroke"], function(v) {
        HighchartsAdapter.addAnimSetter(v, function(l) {
            l.elem.attr(v, E(r.Color(l.start), r.Color(l.end), l.pos))
        })
    });
    X(W.lang, {drillUpText: "\u25c1 Back to {series.name}"});
    W.drilldown = {activeAxisLabelStyle: {cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline"}, activeDataLabelStyle: {cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline"}, animation: {duration: 500}, drillUpButton: {position: {align: "right", x: -10, y: 10}}};
    r.SVGRenderer.prototype.Element.prototype.fadeIn =
            function(v) {
                this.attr({opacity: .1, visibility: "inherit"}).animate({opacity: C(this.newOpacity, 1)}, v || {duration: 250})
            };
    t.prototype.addSeriesAsDrilldown = function(v, l) {
        this.addSingleSeriesAsDrilldown(v, l);
        this.applyDrilldown()
    };
    t.prototype.addSingleSeriesAsDrilldown = function(v, l) {
        var q = v.series, p = q.xAxis, r = q.yAxis, t;
        t = v.color || q.color;
        var y, B = [], C = [], F, G;
        this.drilldownLevels || (this.drilldownLevels = []);
        F = q.options._levelNumber || 0;
        (G = this.drilldownLevels[this.drilldownLevels.length - 1]) && G.levelNumber !==
                F && (G = void 0);
        l = X({color: t, _ddSeriesId: ga++}, l);
        y = I(v, q.points);
        R(q.chart.series, function(l) {
            l.xAxis !== p || l.isDrilling || (l.options._ddSeriesId = l.options._ddSeriesId || ga++, l.options._colorIndex = l.userOptions._colorIndex, l.options._levelNumber = l.options._levelNumber || F, G ? (B = G.levelSeries, C = G.levelSeriesOptions) : (B.push(l), C.push(l.options)))
        });
        t = {levelNumber: F, seriesOptions: q.options, levelSeriesOptions: C, levelSeries: B, shapeArgs: v.shapeArgs, bBox: v.graphic ? v.graphic.getBBox() : {}, color: t, lowerSeriesOptions: l,
            pointOptions: q.options.data[y], pointIndex: y, oldExtremes: {xMin: p && p.userMin, xMax: p && p.userMax, yMin: r && r.userMin, yMax: r && r.userMax}};
        this.drilldownLevels.push(t);
        t = t.lowerSeries = this.addSeries(l, !1);
        t.options._levelNumber = F + 1;
        p && (p.oldPos = p.pos, p.userMin = p.userMax = null, r.userMin = r.userMax = null);
        q.type === t.type && (t.animate = t.animateDrilldown || Y, t.options.animation = !0)
    };
    t.prototype.applyDrilldown = function() {
        var v = this.drilldownLevels, l;
        v && 0 < v.length && (l = v[v.length - 1].levelNumber, R(this.drilldownLevels,
                function(q) {
                    q.levelNumber === l && R(q.levelSeries, function(q) {
                        q.options && q.options._levelNumber === l && q.remove(!1)
                    })
                }));
        this.redraw();
        this.showDrillUpButton()
    };
    t.prototype.getDrilldownBackText = function() {
        var v = this.drilldownLevels;
        if (v && 0 < v.length)
            return v = v[v.length - 1], v.series = v.seriesOptions, S(this.options.lang.drillUpText, v)
    };
    t.prototype.showDrillUpButton = function() {
        var v = this, l = this.getDrilldownBackText(), q = v.options.drilldown.drillUpButton, p, r;
        this.drillUpButton ? this.drillUpButton.attr({text: l}).align() :
                (r = (p = q.theme) && p.states, this.drillUpButton = this.renderer.button(l, null, null, function() {
                    v.drillUp()
                }, p, r && r.hover, r && r.select).attr({align: q.position.align, zIndex: 9}).add().align(q.position, !1, q.relativeTo || "plotBox"))
    };
    t.prototype.drillUp = function() {
        for (var v = this, l = v.drilldownLevels, q = l[l.length - 1].levelNumber, p = l.length, r = v.series, t, y, B, C, F = function(l) {
            var q;
            R(r, function(v) {
                v.options._ddSeriesId === l._ddSeriesId && (q = v)
            });
            q = q || v.addSeries(l, !1);
            q.type === B.type && q.animateDrillupTo && (q.animate = q.animateDrillupTo);
            l === y.seriesOptions && (C = q)
        }; p--; )
            if (y = l[p], y.levelNumber === q) {
                l.pop();
                B = y.lowerSeries;
                if (!B.chart)
                    for (t = r.length; t--; )
                        if (r[t].options.id === y.lowerSeriesOptions.id && r[t].options._levelNumber === q + 1) {
                            B = r[t];
                            break
                        }
                B.xData = [];
                R(y.levelSeriesOptions, F);
                U(v, "drillup", {seriesOptions: y.seriesOptions});
                C.type === B.type && (C.drilldownLevel = y, C.options.animation = v.options.drilldown.animation, B.animateDrillupFrom && B.chart && B.animateDrillupFrom(y));
                C.options._levelNumber = q;
                B.remove(!1);
                C.xAxis && (t = y.oldExtremes,
                        C.xAxis.setExtremes(t.xMin, t.xMax, !1), C.yAxis.setExtremes(t.yMin, t.yMax, !1))
            }
        this.redraw();
        0 === this.drilldownLevels.length ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({text: this.getDrilldownBackText()}).align();
        this.ddDupes.length = []
    };
    y.prototype.supportsDrilldown = !0;
    y.prototype.animateDrillupTo = function(v) {
        if (!v) {
            var l = this, q = l.drilldownLevel;
            R(this.points, function(l) {
                l.graphic && l.graphic.hide();
                l.dataLabel && l.dataLabel.hide();
                l.connector && l.connector.hide()
            });
            setTimeout(function() {
                l.points &&
                        R(l.points, function(l, v) {
                            var p = v === (q && q.pointIndex) ? "show" : "fadeIn", r = "show" === p ? !0 : void 0;
                            if (l.graphic)
                                l.graphic[p](r);
                            if (l.dataLabel)
                                l.dataLabel[p](r);
                            if (l.connector)
                                l.connector[p](r)
                        })
            }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));
            this.animate = Y
        }
    };
    y.prototype.animateDrilldown = function(v) {
        var l = this, q = this.chart.drilldownLevels, p, r = this.chart.options.drilldown.animation, t = this.xAxis;
        v || (R(q, function(q) {
            l.options._ddSeriesId === q.lowerSeriesOptions._ddSeriesId && (p = q.shapeArgs,
                    p.fill = q.color)
        }), p.x += C(t.oldPos, t.pos) - t.pos, R(this.points, function(l) {
            l.graphic && l.graphic.attr(p).animate(X(l.shapeArgs, {fill: l.color}), r);
            l.dataLabel && l.dataLabel.fadeIn(r)
        }), this.animate = null)
    };
    y.prototype.animateDrillupFrom = function(v) {
        var l = this.chart.options.drilldown.animation, q = this.group, p = this;
        R(p.trackerGroups, function(l) {
            if (p[l])
                p[l].on("mouseover")
        });
        delete this.group;
        R(this.points, function(p) {
            var t = p.graphic, y = function() {
                t.destroy();
                q && (q = q.destroy())
            };
            t && (delete p.graphic, l ? t.animate(X(v.shapeArgs,
                    {fill: v.color}), r.merge(l, {complete: y})) : (t.attr(v.shapeArgs), y()))
        })
    };
    B && X(B.prototype, {supportsDrilldown: !0, animateDrillupTo: y.prototype.animateDrillupTo, animateDrillupFrom: y.prototype.animateDrillupFrom, animateDrilldown: function(v) {
            var l = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1], q = this.chart.options.drilldown.animation, p = l.shapeArgs, t = p.start, y = (p.end - t) / this.points.length;
            v || (R(this.points, function(v, B) {
                v.graphic.attr(r.merge(p, {start: t + B * y, end: t + (B + 1) * y, fill: l.color}))[q ?
                        "animate" : "attr"](X(v.shapeArgs, {fill: v.color}), q)
            }), this.animate = null)
        }});
    r.Point.prototype.doDrilldown = function(v, l) {
        var q = this.series.chart, p = q.options.drilldown, r = (p.series || []).length, t;
        q.ddDupes || (q.ddDupes = []);
        for (; r-- && !t; )
            p.series[r].id === this.drilldown && -1 === I(this.drilldown, q.ddDupes) && (t = p.series[r], q.ddDupes.push(this.drilldown));
        U(q, "drilldown", {point: this, seriesOptions: t, category: l, points: void 0 !== l && this.series.xAxis.ddPoints[l].slice(0)});
        t && (v ? q.addSingleSeriesAsDrilldown(this, t) :
                q.addSeriesAsDrilldown(this, t))
    };
    r.Axis.prototype.drilldownCategory = function(v) {
        var l, q, p = this.ddPoints[v];
        for (l in p)
            (q = p[l]) && q.series && q.series.visible && q.doDrilldown && q.doDrilldown(!0, v);
        this.chart.applyDrilldown()
    };
    r.Axis.prototype.getDDPoints = function(v, l) {
        var q = this.ddPoints;
        q || (this.ddPoints = q = {});
        q[v] || (q[v] = []);
        q[v].levelNumber !== l && (q[v].length = 0);
        return q[v]
    };
    F.prototype.drillable = function() {
        var v = this.pos, l = this.label, q = this.axis, p = q.ddPoints && q.ddPoints[v];
        l && p && p.length ? (l.basicStyles ||
                (l.basicStyles = r.merge(l.styles)), l.addClass("highcharts-drilldown-axis-label").css(q.chart.options.drilldown.activeAxisLabelStyle).on("click", function() {
            q.drilldownCategory(v)
        })) : l && l.basicStyles && (l.styles = {}, l.css(l.basicStyles), l.on("click", null))
    };
    p(F.prototype, "addLabel", function(v) {
        v.call(this);
        this.drillable()
    });
    p(r.Point.prototype, "init", function(v, l, q, p) {
        var t = v.call(this, l, q, p);
        v = (q = l.xAxis) && q.ticks[p];
        q = q && q.getDDPoints(p, l.options._levelNumber);
        t.drilldown && (r.addEvent(t, "click", function() {
            l.xAxis &&
                    !1 === l.chart.options.drilldown.allowPointDrilldown ? l.xAxis.drilldownCategory(p) : t.doDrilldown()
        }), q && (q.push(t), q.levelNumber = l.options._levelNumber));
        v && v.drillable();
        return t
    });
    p(r.Series.prototype, "drawDataLabels", function(v) {
        var l = this.chart.options.drilldown.activeDataLabelStyle;
        v.call(this);
        R(this.points, function(q) {
            q.drilldown && q.dataLabel && q.dataLabel.attr({"class": "highcharts-drilldown-data-label"}).css(l)
        })
    });
    var V, W = function(v) {
        v.call(this);
        R(this.points, function(l) {
            l.drilldown && l.graphic &&
                    l.graphic.attr({"class": "highcharts-drilldown-point"}).css({cursor: "pointer"})
        })
    };
    for (V in G)
        G[V].prototype.supportsDrilldown && p(G[V].prototype, "drawTracker", W)
})(Highcharts);
(function(r) {
    var E = r.getOptions().plotOptions, Y = r.pInt, W = r.pick, R = r.each, X;
    E.solidgauge = r.merge(E.gauge, {colorByPoint: !0});
    X = {initDataClasses: function(E) {
            var C = this, p = this.chart, t, G = 0, B = this.options;
            this.dataClasses = t = [];
            R(E.dataClasses, function(y, F) {
                var U;
                y = r.merge(y);
                t.push(y);
                y.color || ("category" === B.dataClassColor ? (U = p.options.colors, y.color = U[G++], G === U.length && (G = 0)) : y.color = C.tweenColors(r.Color(B.minColor), r.Color(B.maxColor), F / (E.dataClasses.length - 1)))
            })
        }, initStops: function(E) {
            this.stops =
                    E.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
            R(this.stops, function(C) {
                C.color = r.Color(C[1])
            })
        }, toColor: function(r, C) {
            var p, t = this.stops, G, B = this.dataClasses, y, F;
            if (B)
                for (F = B.length; F--; ) {
                    if (y = B[F], G = y.from, t = y.to, (void 0 === G || r >= G) && (void 0 === t || r <= t)) {
                        p = y.color;
                        C && (C.dataClass = F);
                        break
                    }
                }
            else {
                this.isLog && (r = this.val2lin(r));
                p = 1 - (this.max - r) / (this.max - this.min);
                for (F = t.length; F-- && !(p > t[F][0]); )
                    ;
                G = t[F] || t[F + 1];
                t = t[F + 1] || G;
                p = 1 - (t[0] - p) / (t[0] - G[0] || 1);
                p = this.tweenColors(G.color, t.color,
                        p)
            }
            return p
        }, tweenColors: function(r, C, p) {
            var t;
            C.rgba.length && r.rgba.length ? (r = r.rgba, C = C.rgba, t = 1 !== C[3] || 1 !== r[3], r = (t ? "rgba(" : "rgb(") + Math.round(C[0] + (r[0] - C[0]) * (1 - p)) + "," + Math.round(C[1] + (r[1] - C[1]) * (1 - p)) + "," + Math.round(C[2] + (r[2] - C[2]) * (1 - p)) + (t ? "," + (C[3] + (r[3] - C[3]) * (1 - p)) : "") + ")") : r = C.raw || "none";
            return r
        }};
    R(["fill", "stroke"], function(E) {
        HighchartsAdapter.addAnimSetter(E, function(C) {
            C.elem.attr(E, X.tweenColors(r.Color(C.start), r.Color(C.end), C.pos))
        })
    });
    r.seriesTypes.solidgauge = r.extendClass(r.seriesTypes.gauge,
            {type: "solidgauge", pointAttrToOptions: {}, bindAxes: function() {
                    var E;
                    r.seriesTypes.gauge.prototype.bindAxes.call(this);
                    E = this.yAxis;
                    r.extend(E, X);
                    E.options.dataClasses && E.initDataClasses(E.options);
                    E.initStops(E.options)
                }, drawPoints: function() {
                    var E = this, C = E.yAxis, p = C.center, t = E.options, G = E.chart.renderer, B = t.overshoot, y = B && "number" === typeof B ? B / 180 * Math.PI : 0;
                    r.each(E.points, function(r) {
                        var B = r.graphic, I = C.startAngleRad + C.translate(r.y, null, null, null, !0), R = Y(W(r.options.radius, t.radius, 100)) * p[2] / 200,
                                V = Y(W(r.options.innerRadius, t.innerRadius, 60)) * p[2] / 200, v = C.toColor(r.y, r), l = Math.min(C.startAngleRad, C.endAngleRad), q = Math.max(C.startAngleRad, C.endAngleRad);
                        "none" === v && (v = r.color || E.color || "none");
                        "none" !== v && (r.color = v);
                        I = Math.max(l - y, Math.min(q + y, I));
                        !1 === t.wrap && (I = Math.max(l, Math.min(q, I)));
                        l = Math.min(I, C.startAngleRad);
                        I = Math.max(I, C.startAngleRad);
                        I - l > 2 * Math.PI && (I = l + 2 * Math.PI);
                        r.shapeArgs = V = {x: p[0], y: p[1], r: R, innerR: V, start: l, end: I, fill: v};
                        r.startR = R;
                        B ? (r = V.d, B.animate(V), r && (V.d = r)) : r.graphic =
                                G.arc(V).attr({stroke: t.borderColor || "none", "stroke-width": t.borderWidth || 0, fill: v, "sweep-flag": 0}).add(E.group)
                    })
                }, animate: function(E) {
                    E || (this.startAngleRad = this.yAxis.startAngleRad, r.seriesTypes.pie.prototype.animate.call(this, E))
                }})
})(Highcharts);
(function(r) {
    var E = r.Axis, Y = r.Chart, W = r.Color, R = r.Legend, X = r.LegendSymbolMixin, S = r.Series, C = r.Point, p = r.getOptions(), t = r.each, G = r.extend, B = r.extendClass, y = r.merge, F = r.pick, U = r.seriesTypes, I = r.wrap, ga = function() {
    }, V = r.ColorAxis = function() {
        this.isColorAxis = !0;
        this.init.apply(this, arguments)
    };
    G(V.prototype, E.prototype);
    G(V.prototype, {defaultColorAxisOptions: {lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: {animation: {duration: 50},
                color: "gray", width: .01}, labels: {overflow: "justify"}, minColor: "#EFEFFF", maxColor: "#003875", tickLength: 5}, init: function(v, l) {
            var q = "vertical" !== v.options.legend.layout, p;
            p = y(this.defaultColorAxisOptions, {side: q ? 2 : 1, reversed: !q}, l, {opposite: !q, showEmpty: !1, title: null, isColor: !0});
            E.prototype.init.call(this, v, p);
            l.dataClasses && this.initDataClasses(l);
            this.initStops(l);
            this.horiz = q;
            this.zoomEnabled = !1
        }, tweenColors: function(p, l, q) {
            var r;
            l.rgba.length && p.rgba.length ? (p = p.rgba, l = l.rgba, r = 1 !== l[3] || 1 !== p[3],
                    p = (r ? "rgba(" : "rgb(") + Math.round(l[0] + (p[0] - l[0]) * (1 - q)) + "," + Math.round(l[1] + (p[1] - l[1]) * (1 - q)) + "," + Math.round(l[2] + (p[2] - l[2]) * (1 - q)) + (r ? "," + (l[3] + (p[3] - l[3]) * (1 - q)) : "") + ")") : p = l.raw || "none";
            return p
        }, initDataClasses: function(p) {
            var l = this, q = this.chart, r, D = 0, B = this.options, C = p.dataClasses.length;
            this.dataClasses = r = [];
            this.legendItems = [];
            t(p.dataClasses, function(p, v) {
                var t;
                p = y(p);
                r.push(p);
                p.color || ("category" === B.dataClassColor ? (t = q.options.colors, p.color = t[D++], D === t.length && (D = 0)) : p.color = l.tweenColors(W(B.minColor),
                        W(B.maxColor), 2 > C ? .5 : v / (C - 1)))
            })
        }, initStops: function(p) {
            this.stops = p.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
            t(this.stops, function(l) {
                l.color = W(l[1])
            })
        }, setOptions: function(p) {
            E.prototype.setOptions.call(this, p);
            this.options.crosshair = this.options.marker;
            this.coll = "colorAxis"
        }, setAxisSize: function() {
            var p = this.legendSymbol, l = this.chart, q, r, t;
            p && (this.left = q = p.attr("x"), this.top = r = p.attr("y"), this.width = t = p.attr("width"), this.height = p = p.attr("height"), this.right = l.chartWidth - q -
                    t, this.bottom = l.chartHeight - r - p, this.len = this.horiz ? t : p, this.pos = this.horiz ? q : r)
        }, toColor: function(p, l) {
            var q, r = this.stops, t, y = this.dataClasses, B, C;
            if (y)
                for (C = y.length; C--; ) {
                    if (B = y[C], t = B.from, r = B.to, (void 0 === t || p >= t) && (void 0 === r || p <= r)) {
                        q = B.color;
                        l && (l.dataClass = C);
                        break
                    }
                }
            else {
                this.isLog && (p = this.val2lin(p));
                q = 1 - (this.max - p) / (this.max - this.min || 1);
                for (C = r.length; C-- && !(q > r[C][0]); )
                    ;
                t = r[C] || r[C + 1];
                r = r[C + 1] || t;
                q = 1 - (r[0] - q) / (r[0] - t[0] || 1);
                q = this.tweenColors(t.color, r.color, q)
            }
            return q
        }, getOffset: function() {
            var p =
                    this.legendGroup, l = this.chart.axisOffset[this.side];
            p && (E.prototype.getOffset.call(this), this.axisGroup.parentGroup || (this.axisGroup.add(p), this.gridGroup.add(p), this.labelGroup.add(p), this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = l)
        }, setLegendColor: function() {
            var p, l = this.options;
            p = this.reversed;
            p = this.horiz ? [+p, 0, +!p, 0] : [0, +!p, 0, +p];
            this.legendColor = {linearGradient: {x1: p[0], y1: p[1], x2: p[2], y2: p[3]}, stops: l.stops || [[0, l.minColor], [1, l.maxColor]]}
        }, drawLegendSymbol: function(p,
                l) {
            var q = p.padding, r = p.options, t = this.horiz, y = F(r.symbolWidth, t ? 200 : 12), B = F(r.symbolHeight, t ? 12 : 200), C = F(r.labelPadding, t ? 16 : 30), r = F(r.itemDistance, 10);
            this.setLegendColor();
            l.legendSymbol = this.chart.renderer.rect(0, p.baseline - 11, y, B).attr({zIndex: 1}).add(l.legendGroup);
            l.legendSymbol.getBBox();
            this.legendItemWidth = y + q + (t ? r : C);
            this.legendItemHeight = B + q + (t ? C : 0)
        }, setState: ga, visible: !0, setVisible: ga, getSeriesExtremes: function() {
            var p;
            this.series.length && (p = this.series[0], this.dataMin = p.valueMin, this.dataMax =
                    p.valueMax)
        }, drawCrosshair: function(p, l) {
            var q = l && l.plotX, r = l && l.plotY, t, y = this.pos, B = this.len;
            l && (t = this.toPixels(l[l.series.colorKey]), t < y ? t = y - 2 : t > y + B && (t = y + B + 2), l.plotX = t, l.plotY = this.len - t, E.prototype.drawCrosshair.call(this, p, l), l.plotX = q, l.plotY = r, this.cross && this.cross.attr({fill: this.crosshair.color}).add(this.legendGroup))
        }, getPlotLinePath: function(p, l, q, r, t) {
            return"number" === typeof t ? this.horiz ? ["M", t - 4, this.top - 6, "L", t + 4, this.top - 6, t, this.top, "Z"] : ["M", this.left, t, "L", this.left - 6, t + 6, this.left -
                        6, t - 6, "Z"] : E.prototype.getPlotLinePath.call(this, p, l, q, r)
        }, update: function(p, l) {
            var q = this.chart, r = q.legend;
            t(this.series, function(l) {
                l.isDirtyData = !0
            });
            p.dataClasses && r.allItems && (t(r.allItems, function(l) {
                l.isDataClass && l.legendGroup.destroy()
            }), q.isDirtyLegend = !0);
            q.options[this.coll] = y(this.userOptions, p);
            E.prototype.update.call(this, p, l);
            this.legendItem && (this.setLegendColor(), r.colorizeItem(this, !0))
        }, getDataClassLegendSymbols: function() {
            var p = this, l = this.chart, q = this.legendItems, y = l.options.legend,
                    B = y.valueDecimals, C = y.valueSuffix || "", E;
            q.length || t(this.dataClasses, function(y, F) {
                var I = !0, M = y.from, R = y.to;
                E = "";
                void 0 === M ? E = "< " : void 0 === R && (E = "> ");
                void 0 !== M && (E += r.numberFormat(M, B) + C);
                void 0 !== M && void 0 !== R && (E += " - ");
                void 0 !== R && (E += r.numberFormat(R, B) + C);
                q.push(G({chart: l, name: E, options: {}, drawLegendSymbol: X.drawRectangle, visible: !0, setState: ga, isDataClass: !0, setVisible: function() {
                        I = this.visible = !I;
                        t(p.series, function(l) {
                            t(l.points, function(l) {
                                l.dataClass === F && l.setVisible(I)
                            })
                        });
                        l.legend.colorizeItem(this,
                                I)
                    }}, y))
            });
            return q
        }, name: ""});
    t(["fill", "stroke"], function(p) {
        HighchartsAdapter.addAnimSetter(p, function(l) {
            l.elem.attr(p, V.prototype.tweenColors(W(l.start), W(l.end), l.pos))
        })
    });
    I(Y.prototype, "getAxes", function(p) {
        var l = this.options.colorAxis;
        p.call(this);
        this.colorAxis = [];
        l && new V(this, l)
    });
    I(R.prototype, "getAllItems", function(p) {
        var l = [], q = this.chart.colorAxis[0];
        q && (q.options.dataClasses ? l = l.concat(q.getDataClassLegendSymbols()) : l.push(q), t(q.series, function(l) {
            l.options.showInLegend = !1
        }));
        return l.concat(p.call(this))
    });
    Y = {pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", dashstyle: "dashStyle"}, pointArrayMap: ["value"], axisTypes: ["xAxis", "yAxis", "colorAxis"], optionalAxis: "colorAxis", trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], getSymbol: ga, parallelArrays: ["x", "y", "value"], colorKey: "value", translateColors: function() {
            var p = this, l = this.options.nullColor, q = this.colorAxis, r = this.colorKey;
            t(this.data, function(t) {
                var y = t[r];
                if (y = t.options.color || (null === y ? l : q && void 0 !== y ? q.toColor(y,
                        t) : t.color || p.color))
                    t.color = y
            })
        }};
    p.plotOptions.heatmap = y(p.plotOptions.scatter, {animation: !1, borderWidth: 0, nullColor: "#F8F8F8", dataLabels: {formatter: function() {
                return this.point.value
            }, inside: !0, verticalAlign: "middle", crop: !1, overflow: !1, padding: 0}, marker: null, pointRange: null, tooltip: {pointFormat: "{point.x}, {point.y}: {point.value}<br/>"}, states: {normal: {animation: !0}, hover: {halo: !1, brightness: .2}}});
    U.heatmap = B(U.scatter, y(Y, {type: "heatmap", pointArrayMap: ["y", "value"], hasPointSpecificOptions: !0,
        pointClass: B(C, {setVisible: function(p) {
                var l = this, q = p ? "show" : "hide";
                t(["graphic", "dataLabel"], function(p) {
                    if (l[p])
                        l[p][q]()
                })
            }}), supportsDrilldown: !0, getExtremesFromAll: !0, directTouch: !0, init: function() {
            var p;
            U.scatter.prototype.init.apply(this, arguments);
            p = this.options;
            this.pointRange = p.pointRange = F(p.pointRange, p.colsize || 1);
            this.yAxis.axisPointRange = p.rowsize || 1
        }, translate: function() {
            var p = this.options, l = this.xAxis, q = this.yAxis;
            this.generatePoints();
            t(this.points, function(r) {
                var t = (p.colsize ||
                        1) / 2, y = (p.rowsize || 1) / 2, B = Math.round(l.len - l.translate(r.x - t, 0, 1, 0, 1)), t = Math.round(l.len - l.translate(r.x + t, 0, 1, 0, 1)), C = Math.round(q.translate(r.y - y, 0, 1, 0, 1)), y = Math.round(q.translate(r.y + y, 0, 1, 0, 1));
                r.plotX = r.clientX = (B + t) / 2;
                r.plotY = (C + y) / 2;
                r.shapeType = "rect";
                r.shapeArgs = {x: Math.min(B, t), y: Math.min(C, y), width: Math.abs(t - B), height: Math.abs(y - C)}
            });
            this.translateColors();
            this.chart.hasRendered && t(this.points, function(l) {
                l.shapeArgs.fill = l.options.color || l.color
            })
        }, drawPoints: U.column.prototype.drawPoints,
        animate: ga, getBox: ga, drawLegendSymbol: X.drawRectangle, getExtremes: function() {
            S.prototype.getExtremes.call(this, this.valueData);
            this.valueMin = this.dataMin;
            this.valueMax = this.dataMax;
            S.prototype.getExtremes.call(this)
        }}))
})(Highcharts); 