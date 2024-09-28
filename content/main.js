(function () {
    'use strict';

    function W() { }

    function $t$1(t) {
        return t()
    }

    function mt$1() {
        return Object.create(null)
    }

    function R(t) {
        t.forEach($t$1);
    }

    function ut$1(t) {
        return typeof t == "function"
    }

    function Tt$1(t, e) {
        return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
    }

    function Ct$1(t) {
        return Object.keys(t).length === 0
    }

    function At$1(t, ...e) {
        if (t == null) return W;
        const n = t.subscribe(...e);
        return n.unsubscribe ? () => n.unsubscribe() : n
    }

    function te(t, e, n) {
        t.$$.on_destroy.push(At$1(e, n));
    }

    function ne(t) {
        return t && ut$1(t.destroy) ? t.destroy : W
    }

    function Yt$1(t, e) {
        t.appendChild(e);
    }

    function se$1(t, e, n) {
        t.insertBefore(e, n || null);
    }

    function Lt$1(t) {
        t.parentNode.removeChild(t);
    }

    function Wt$1(t) {
        return document.createElement(t)
    }

    function wt$1(t) {
        return document.createTextNode(t)
    }

    function oe() {
        return wt$1(" ")
    }

    function ue$1() {
        return wt$1("")
    }

    function ae$1(t, e, n, o) {
        return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o)
    }

    function ce(t, e, n) {
        n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }

    function zt$1(t) {
        return Array.from(t.childNodes)
    }

    function fe(t, e) {
        e = "" + e, t.wholeText !== e && (t.data = e);
    }

    function le$1(t, e) {
        t.value = e == null ? "" : e;
    }

    function de(t, e, n, o) {
        t.style.setProperty(e, n, o ? "important" : "");
    }

    function vt$1(t, e, n = !1) {
        const o = document.createEvent("CustomEvent");
        return o.initCustomEvent(t, n, !1, e), o
    }
    let et;

    function nt(t) {
        et = t;
    }

    function St$1() {
        if (!et) throw new Error("Function called outside component initialization");
        return et
    }

    function he(t) {
        St$1().$$.on_mount.push(t);
    }

    function _e$1() {
        const t = St$1();
        return (e, n) => {
            const o = t.$$.callbacks[e];
            if (o) {
                const l = vt$1(e, n);
                o.slice().forEach(g => {
                    g.call(t, l);
                });
            }
        }
    }

    function pe$1(t, e) {
        const n = t.$$.callbacks[e.type];
        n && n.slice().forEach(o => o.call(this, e));
    }
    const G = [],
        Dt$1 = [],
        st = [],
        ft$1 = [],
        Pt$1 = Promise.resolve();
    let lt$1 = !1;

    function Rt$1() {
        lt$1 || (lt$1 = !0, Pt$1.then(xt$1));
    }

    function it(t) {
        st.push(t);
    }

    function $e$1(t) {
        ft$1.push(t);
    }
    let dt$1 = !1;
    const ht$1 = new Set;

    function xt$1() {
        if (!dt$1) {
            dt$1 = !0;
            do {
                for (let t = 0; t < G.length; t += 1) {
                    const e = G[t];
                    nt(e), Jt(e.$$);
                }
                for (nt(null), G.length = 0; Dt$1.length;) Dt$1.pop()();
                for (let t = 0; t < st.length; t += 1) {
                    const e = st[t];
                    ht$1.has(e) || (ht$1.add(e), e());
                }
                st.length = 0;
            } while (G.length);
            for (; ft$1.length;) ft$1.pop()();
            lt$1 = !1, dt$1 = !1, ht$1.clear();
        }
    }

    function Jt(t) {
        if (t.fragment !== null) {
            t.update(), R(t.before_update);
            const e = t.dirty;
            t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(it);
        }
    }
    const rt = new Set;
    let z;

    function me$1() {
        z = {
            r: 0,
            c: [],
            p: z
        };
    }

    function ge$1() {
        z.r || R(z.c), z = z.p;
    }

    function Ot$1(t, e) {
        t && t.i && (rt.delete(t), t.i(e));
    }

    function ye(t, e, n, o) {
        if (t && t.o) {
            if (rt.has(t)) return;
            rt.add(t), z.c.push(() => {
                rt.delete(t), o && (n && t.d(1), o());
            }), t.o(e);
        }
    }

    function we$1(t, e) {
        t.d(1), e.delete(t.key);
    }

    function ve$1(t, e, n, o, l, g, a, $, y, u, O, m) {
        let d = t.length,
            h = g.length,
            b = d;
        const F = {};
        for (; b--;) F[t[b].key] = b;
        const E = [],
            H = new Map,
            j = new Map;
        for (b = h; b--;) {
            const v = m(l, g, b),
                C = n(v);
            let T = a.get(C);
            T ? o && T.p(v, e) : (T = u(C, v), T.c()), H.set(C, E[b] = T), C in F && j.set(C, Math.abs(b - F[C]));
        }
        const Y = new Set,
            B = new Set;

        function N(v) {
            Ot$1(v, 1), v.m($, O), a.set(v.key, v), O = v.first, h--;
        }
        for (; d && h;) {
            const v = E[h - 1],
                C = t[d - 1],
                T = v.key,
                S = C.key;
            v === C ? (O = v.first, d--, h--) : H.has(S) ? !a.has(T) || Y.has(T) ? N(v) : B.has(S) ? d-- : j.get(T) > j.get(S) ? (B.add(T), N(v)) : (Y.add(S), d--) : (y(C, a), d--);
        }
        for (; d--;) {
            const v = t[d];
            H.has(v.key) || y(v, a);
        }
        for (; h;) N(E[h - 1]);
        return E
    }

    function Me$1(t, e, n) {
        const o = t.$$.props[e];
        o !== void 0 && (t.$$.bound[o] = n, n(t.$$.ctx[o]));
    }

    function Se$1(t) {
        t && t.c();
    }

    function Vt$1(t, e, n, o) {
        const {
            fragment: l,
            on_mount: g,
            on_destroy: a,
            after_update: $
        } = t.$$;
        l && l.m(e, n), o || it(() => {
            const y = g.map($t$1).filter(ut$1);
            a ? a.push(...y) : R(y), t.$$.on_mount = [];
        }), $.forEach(it);
    }

    function Gt$1(t, e) {
        const n = t.$$;
        n.fragment !== null && (R(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
    }

    function Qt$1(t, e) {
        t.$$.dirty[0] === -1 && (G.push(t), Rt$1(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
    }

    function De(t, e, n, o, l, g, a, $ = [-1]) {
        const y = et;
        nt(t);
        const u = t.$$ = {
            fragment: null,
            ctx: null,
            props: g,
            update: W,
            not_equal: l,
            bound: mt$1(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(e.context || (y ? y.$$.context : [])),
            callbacks: mt$1(),
            dirty: $,
            skip_bound: !1,
            root: e.target || y.$$.root
        };
        a && a(u.root);
        let O = !1;
        if (u.ctx = n ? n(t, e.props || {}, (m, d, ...h) => {
            const b = h.length ? h[0] : d;
            return u.ctx && l(u.ctx[m], u.ctx[m] = b) && (!u.skip_bound && u.bound[m] && u.bound[m](b), O && Qt$1(t, m)), d
        }) : [], u.update(), O = !0, R(u.before_update), u.fragment = o ? o(u.ctx) : !1, e.target) {
            if (e.hydrate) {
                const m = zt$1(e.target);
                u.fragment && u.fragment.l(m), m.forEach(Lt$1);
            } else u.fragment && u.fragment.c();
            e.intro && Ot$1(t.$$.fragment), Vt$1(t, e.target, e.anchor, e.customElement), xt$1();
        }
        nt(y);
    }
    class xe {
        $destroy() {
            Gt$1(this, 1), this.$destroy = W;
        }
        $on(e, n) {
            const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return o.push(n), () => {
                const l = o.indexOf(n);
                l !== -1 && o.splice(l, 1);
            }
        }
        $set(e) {
            this.$$set && !Ct$1(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
        }
    }
    const U = [];

    function Oe(t, e = W) {
        let n;
        const o = new Set;

        function l($) {
            if (Tt$1(t, $) && (t = $, n)) {
                const y = !U.length;
                for (const u of o) u[1](), U.push(u, t);
                if (y) {
                    for (let u = 0; u < U.length; u += 2) U[u][0](U[u + 1]);
                    U.length = 0;
                }
            }
        }

        function g($) {
            l($(t));
        }

        function a($, y = W) {
            const u = [$, y];
            return o.add(u), o.size === 1 && (n = e(l) || W), $(t), () => {
                o.delete(u), o.size === 0 && (n(), n = null);
            }
        }
        return {
            set: l,
            update: g,
            subscribe: a
        }
    }
    var Kt$1 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {},
        kt$1 = {
            exports: {}
        };
    (function (t, e) {
        (function (n, o) {
            t.exports = o();
        })(Kt$1, function () {
            var n = 1e3,
                o = 6e4,
                l = 36e5,
                g = "millisecond",
                a = "second",
                $ = "minute",
                y = "hour",
                u = "day",
                O = "week",
                m = "month",
                d = "quarter",
                h = "year",
                b = "date",
                F = "Invalid Date",
                E = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                j = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                },
                Y = function (c, r, s) {
                    var f = String(c);
                    return !f || f.length >= r ? c : "" + Array(r + 1 - f.length).join(s) + c
                },
                B = {
                    s: Y,
                    z: function (c) {
                        var r = -c.utcOffset(),
                            s = Math.abs(r),
                            f = Math.floor(s / 60),
                            i = s % 60;
                        return (r <= 0 ? "+" : "-") + Y(f, 2, "0") + ":" + Y(i, 2, "0")
                    },
                    m: function c(r, s) {
                        if (r.date() < s.date()) return -c(s, r);
                        var f = 12 * (s.year() - r.year()) + (s.month() - r.month()),
                            i = r.clone().add(f, m),
                            p = s - i < 0,
                            _ = r.clone().add(f + (p ? -1 : 1), m);
                        return +(-(f + (s - i) / (p ? i - _ : _ - i)) || 0)
                    },
                    a: function (c) {
                        return c < 0 ? Math.ceil(c) || 0 : Math.floor(c)
                    },
                    p: function (c) {
                        return {
                            M: m,
                            y: h,
                            w: O,
                            d: u,
                            D: b,
                            h: y,
                            m: $,
                            s: a,
                            ms: g,
                            Q: d
                        }[c] || String(c || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function (c) {
                        return c === void 0
                    }
                },
                N = "en",
                v = {};
            v[N] = j;
            var C = function (c) {
                return c instanceof K
            },
                T = function (c, r, s) {
                    var f;
                    if (!c) return N;
                    if (typeof c == "string") v[c] && (f = c), r && (v[c] = r, f = c);
                    else {
                        var i = c.name;
                        v[i] = c, f = i;
                    }
                    return !s && f && (N = f), f || !s && N
                },
                S = function (c, r) {
                    if (C(c)) return c.clone();
                    var s = typeof r == "object" ? r : {};
                    return s.date = c, s.args = arguments, new K(s)
                },
                w = B;
            w.l = T, w.i = C, w.w = function (c, r) {
                return S(c, {
                    locale: r.$L,
                    utc: r.$u,
                    x: r.$x,
                    $offset: r.$offset
                })
            };
            var K = function () {
                function c(s) {
                    this.$L = T(s.locale, null, !0), this.parse(s);
                }
                var r = c.prototype;
                return r.parse = function (s) {
                    this.$d = function (f) {
                        var i = f.date,
                            p = f.utc;
                        if (i === null) return new Date(NaN);
                        if (w.u(i)) return new Date;
                        if (i instanceof Date) return new Date(i);
                        if (typeof i == "string" && !/Z$/i.test(i)) {
                            var _ = i.match(E);
                            if (_) {
                                var M = _[2] - 1 || 0,
                                    x = (_[7] || "0").substring(0, 3);
                                return p ? new Date(Date.UTC(_[1], M, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, x)) : new Date(_[1], M, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, x)
                            }
                        }
                        return new Date(i)
                    }(s), this.$x = s.x || {}, this.init();
                }, r.init = function () {
                    var s = this.$d;
                    this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
                }, r.$utils = function () {
                    return w
                }, r.isValid = function () {
                    return this.$d.toString() !== F
                }, r.isSame = function (s, f) {
                    var i = S(s);
                    return this.startOf(f) <= i && i <= this.endOf(f)
                }, r.isAfter = function (s, f) {
                    return S(s) < this.startOf(f)
                }, r.isBefore = function (s, f) {
                    return this.endOf(f) < S(s)
                }, r.$g = function (s, f, i) {
                    return w.u(s) ? this[f] : this.set(i, s)
                }, r.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, r.valueOf = function () {
                    return this.$d.getTime()
                }, r.startOf = function (s, f) {
                    var i = this,
                        p = !!w.u(f) || f,
                        _ = w.p(s),
                        M = function (P, A) {
                            var q = w.w(i.$u ? Date.UTC(i.$y, A, P) : new Date(i.$y, A, P), i);
                            return p ? q : q.endOf(u)
                        },
                        x = function (P, A) {
                            return w.w(i.toDate()[P].apply(i.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(A)), i)
                        },
                        D = this.$W,
                        k = this.$M,
                        I = this.$D,
                        L = "set" + (this.$u ? "UTC" : "");
                    switch (_) {
                        case h:
                            return p ? M(1, 0) : M(31, 11);
                        case m:
                            return p ? M(1, k) : M(0, k + 1);
                        case O:
                            var Z = this.$locale().weekStart || 0,
                                V = (D < Z ? D + 7 : D) - Z;
                            return M(p ? I - V : I + (6 - V), k);
                        case u:
                        case b:
                            return x(L + "Hours", 0);
                        case y:
                            return x(L + "Minutes", 1);
                        case $:
                            return x(L + "Seconds", 2);
                        case a:
                            return x(L + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, r.endOf = function (s) {
                    return this.startOf(s, !1)
                }, r.$set = function (s, f) {
                    var i, p = w.p(s),
                        _ = "set" + (this.$u ? "UTC" : ""),
                        M = (i = {}, i[u] = _ + "Date", i[b] = _ + "Date", i[m] = _ + "Month", i[h] = _ + "FullYear", i[y] = _ + "Hours", i[$] = _ + "Minutes", i[a] = _ + "Seconds", i[g] = _ + "Milliseconds", i)[p],
                        x = p === u ? this.$D + (f - this.$W) : f;
                    if (p === m || p === h) {
                        var D = this.clone().set(b, 1);
                        D.$d[M](x), D.init(), this.$d = D.set(b, Math.min(this.$D, D.daysInMonth())).$d;
                    } else M && this.$d[M](x);
                    return this.init(), this
                }, r.set = function (s, f) {
                    return this.clone().$set(s, f)
                }, r.get = function (s) {
                    return this[w.p(s)]()
                }, r.add = function (s, f) {
                    var i, p = this;
                    s = Number(s);
                    var _ = w.p(f),
                        M = function (k) {
                            var I = S(p);
                            return w.w(I.date(I.date() + Math.round(k * s)), p)
                        };
                    if (_ === m) return this.set(m, this.$M + s);
                    if (_ === h) return this.set(h, this.$y + s);
                    if (_ === u) return M(1);
                    if (_ === O) return M(7);
                    var x = (i = {}, i[$] = o, i[y] = l, i[a] = n, i)[_] || 1,
                        D = this.$d.getTime() + s * x;
                    return w.w(D, this)
                }, r.subtract = function (s, f) {
                    return this.add(-1 * s, f)
                }, r.format = function (s) {
                    var f = this,
                        i = this.$locale();
                    if (!this.isValid()) return i.invalidDate || F;
                    var p = s || "YYYY-MM-DDTHH:mm:ssZ",
                        _ = w.z(this),
                        M = this.$H,
                        x = this.$m,
                        D = this.$M,
                        k = i.weekdays,
                        I = i.months,
                        L = function (A, q, ot, X) {
                            return A && (A[q] || A(f, p)) || ot[q].substr(0, X)
                        },
                        Z = function (A) {
                            return w.s(M % 12 || 12, A, "0")
                        },
                        V = i.meridiem || function (A, q, ot) {
                            var X = A < 12 ? "AM" : "PM";
                            return ot ? X.toLowerCase() : X
                        },
                        P = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: D + 1,
                            MM: w.s(D + 1, 2, "0"),
                            MMM: L(i.monthsShort, D, I, 3),
                            MMMM: L(I, D),
                            D: this.$D,
                            DD: w.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: L(i.weekdaysMin, this.$W, k, 2),
                            ddd: L(i.weekdaysShort, this.$W, k, 3),
                            dddd: k[this.$W],
                            H: String(M),
                            HH: w.s(M, 2, "0"),
                            h: Z(1),
                            hh: Z(2),
                            a: V(M, x, !0),
                            A: V(M, x, !1),
                            m: String(x),
                            mm: w.s(x, 2, "0"),
                            s: String(this.$s),
                            ss: w.s(this.$s, 2, "0"),
                            SSS: w.s(this.$ms, 3, "0"),
                            Z: _
                        };
                    return p.replace(H, function (A, q) {
                        return q || P[A] || _.replace(":", "")
                    })
                }, r.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, r.diff = function (s, f, i) {
                    var p, _ = w.p(f),
                        M = S(s),
                        x = (M.utcOffset() - this.utcOffset()) * o,
                        D = this - M,
                        k = w.m(this, M);
                    return k = (p = {}, p[h] = k / 12, p[m] = k, p[d] = k / 3, p[O] = (D - x) / 6048e5, p[u] = (D - x) / 864e5, p[y] = D / l, p[$] = D / o, p[a] = D / n, p)[_] || D, i ? k : w.a(k)
                }, r.daysInMonth = function () {
                    return this.endOf(m).$D
                }, r.$locale = function () {
                    return v[this.$L]
                }, r.locale = function (s, f) {
                    if (!s) return this.$L;
                    var i = this.clone(),
                        p = T(s, f, !0);
                    return p && (i.$L = p), i
                }, r.clone = function () {
                    return w.w(this.$d, this)
                }, r.toDate = function () {
                    return new Date(this.valueOf())
                }, r.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, r.toISOString = function () {
                    return this.$d.toISOString()
                }, r.toString = function () {
                    return this.$d.toUTCString()
                }, c
            }(),
                pt = K.prototype;
            return S.prototype = pt, [
                ["$ms", g],
                ["$s", a],
                ["$m", $],
                ["$H", y],
                ["$W", u],
                ["$M", m],
                ["$y", h],
                ["$D", b]
            ].forEach(function (c) {
                pt[c[1]] = function (r) {
                    return this.$g(r, c[0], c[1])
                };
            }), S.extend = function (c, r) {
                return c.$i || (c(r, K, S), c.$i = !0), S
            }, S.locale = T, S.isDayjs = C, S.unix = function (c) {
                return S(1e3 * c)
            }, S.en = v[N], S.Ls = v, S.p = {}, S
        });
    })(kt$1);
    var ke = kt$1.exports;

    var o$1;
    (function (n) {
        n[n.All = 0] = "All", n[n.Debug = 1] = "Debug", n[n.Info = 2] = "Info", n[n.Warn = 3] = "Warn", n[n.Error = 4] = "Error", n[n.None = 5] = "None";
    })(o$1 || (o$1 = {}));

    function a(n, ...r) {
        console.error(n, ...r);
    }

    function c(n, ...r) {
        console.warn(n, ...r);
    }

    function f$1(n, ...r) {
        console.info(n, ...r);
    }

    function i(n, ...r) { }
    const s = {
        d: i,
        i: f$1,
        w: c,
        e: a
    };

    var m = Object.defineProperty;
    var l = Object.getOwnPropertySymbols;
    var h = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable;
    var u = (e, t, r) => t in e ? m(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
        o = (e, t) => {
            for (var r in t || (t = {})) h.call(t, r) && u(e, r, t[r]);
            if (l)
                for (var r of l(t)) w.call(t, r) && u(e, r, t[r]);
            return e
        };
    const f = chrome && chrome.storage && !!chrome.storage.sync;

    function g(e) {
        if (f) return new Promise((t, r) => {
            chrome.storage.sync.set(e, () => {
                chrome.runtime.lastError ? r(chrome.runtime.lastError) : t();
            });
        });
        {
            const t = window.localStorage.getItem("__storage__"),
                r = o(t ? o({}, JSON.parse(t)) : {}, e);
            return window.localStorage.setItem("__storage__", JSON.stringify(r)), Promise.resolve()
        }
    }

    function n(e) {
        if (f) return new Promise((t, r) => {
            chrome.storage.sync.get(e, s => {
                chrome.runtime.lastError ? r(chrome.runtime.lastError) : t(e ? s && s[e] : s);
            });
        });
        {
            const t = JSON.parse(localStorage.getItem("__storage__"));
            return Promise.resolve(e ? t && t[e] : t)
        }
    }
    async function y(e) {
        const t = await n(`${e}_download_history`);
        return t || {}
    }
    async function v(e, t) {
        await g({
            [`${e}_download_history`]: t
        });
    }

    function $(e, t) {
        t = Math.floor(t);
        let r = t < 0 ? "-" : "+",
            s = "00" + Math.abs(t);
        return s = s.substring(s.length - 2), new Date(e.getTime() + 60 * 60 * 1e3 * t).toISOString().replace("Z", `${r}${s}:00`)
    }

    function _(e) {
        return e.state === "success" ? {
            valid: !0,
            expire_at: e.expire_at
        } : e.state === "invalid" ? {
            valid: e.re && e.re.state === "success",
            expire_at: e.re ? e.re.expire_at : e.expire_at
        } : {
            valid: !1,
            expire_at: e.expire_at
        }
    }

    function D() {
        const e = "https://api.wyym.cc/release/zsxq/purchase";
        window.open(e, "_blank");
    }
    async function P() {
        let e = await n("detail");
        if (!e) return {
            validated: 1
        };
        const t = await n("savedAt") || 1,
            r = parseInt("47") * 60 * 60 * 1e3;
        if (t + r > Date.now()) return d(e);
        const a = await (await fetch(`https://api.wyym.cc/release/zsxq/license?key=${e.orderid}`)).json();
        return a.code === 0 && (e = a.data, await g({
            detail: e,
            savedAt: Date.now()
        })), d(e)
    }

    function d(e) {
        if (!e) return null;
        const t = _(e),
            r = t.valid,
            s = t.expire_at,
            a = e.orderid,
            c = e.urlkey;
        return {
            validated: 1,
            expire_at: s,
            key: a,
            urlkey: c
        }
    }

    var Ue = Object.defineProperty,
        Ye = Object.defineProperties;
    var Ke = Object.getOwnPropertyDescriptors;
    var Ee = Object.getOwnPropertySymbols;
    var Qe = Object.prototype.hasOwnProperty,
        Xe = Object.prototype.propertyIsEnumerable;
    var ue = (i, e, t) => e in i ? Ue(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
        A = (i, e) => {
            for (var t in e || (e = {})) Qe.call(e, t) && ue(i, t, e[t]);
            if (Ee)
                for (var t of Ee(e)) Xe.call(e, t) && ue(i, t, e[t]);
            return i
        },
        ee = (i, e) => Ye(i, Ke(e));
    var N = (i, e, t) => (ue(i, typeof e != "symbol" ? e + "" : e, t), t);

    function lt(i) {
        const e = t => {
            i.contains(t.target) || i.dispatchEvent(new CustomEvent("outclick"));
        };
        return document.addEventListener("click", e, !0), {
            destroy() {
                document.removeEventListener("click", e, !0);
            }
        }
    }

    function Ne(i) {
        let e, t, n, o, r, s, l, c, u;
        return {
            c() {
                e = Wt$1("div"), t = Wt$1("button"), t.textContent = "下载文件", n = oe(), o = Wt$1("button"), o.textContent = "导出下载链接", r = oe(), s = Wt$1("a"), l = wt$1("使用帮助"), ce(t, "class", "hover:bg-gray-200 py-3 px-8 w-full text-gray-800"), ce(o, "class", "hover:bg-gray-200 py-3 px-8 w-full text-gray-800"), ce(s, "class", "hover:bg-gray-200 py-3 px-8 w-full text-gray-800 block text-center"), ce(s, "href", i[4]), ce(s, "target", "_blank"), ce(e, "class", "overflow-hidden w-48 h-auto opacity-100 absolute bottom-1/3 right-16 shadow bg-white py-4 rounded");
            },
            m(f, h) {
                se$1(f, e, h), Yt$1(e, t), Yt$1(e, n), Yt$1(e, o), Yt$1(e, r), Yt$1(e, s), Yt$1(s, l), c || (u = [ae$1(t, "click", i[2]), ae$1(o, "click", i[3])], c = !0);
            },
            p: W,
            d(f) {
                f && Lt$1(e), c = !1, R(u);
            }
        }
    }

    function at(i) {
        let e, t, n, o, r, s = i[0] && Ne(i);
        return {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>', n = oe(), s && s.c(), ce(t, "class", "zsxq-button rounded-full w-14 h-14 flex justify-center items-center shadow cursor-pointer svelte-12gu28x"), ce(e, "class", "extension fixed bottom-3 z-9  svelte-12gu28x");
            },
            m(l, c) {
                se$1(l, e, c), Yt$1(e, t), Yt$1(e, n), s && s.m(e, null), o || (r = [ae$1(t, "click", i[1]), ne(lt.call(null, e)), ae$1(e, "outclick", i[5])], o = !0);
            },
            p(l, [c]) {
                l[0] ? s ? s.p(l, c) : (s = Ne(l), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
            },
            i: W,
            o: W,
            d(l) {
                l && Lt$1(e), s && s.d(), o = !1, R(r);
            }
        }
    }

    function ct(i, e, t) {
        let n = !1;
        const o = f => {
            t(0, n = !n), f.stopPropagation();
        },
            r = _e$1();
        return [n, o, () => {
            t(0, n = !1), r("download", {
                isExport: !1
            });
        }, () => {
            t(0, n = !1), r("download", {
                isExport: !0
            });
        }, "https://wwwatson.feishu.cn/docs/doccnOzaKMbeTIaliLT46IsQxFc", () => t(0, n = !1)]
    }
    class ut extends xe {
        constructor(e) {
            super();
            De(this, e, ct, at, Tt$1, {});
        }
    }
    const pe = Oe([]);
    var j;
    (function (i) {
        i[i.None = 0] = "None", i[i.PaymentNotice = 1] = "PaymentNotice", i[i.DownloadList = 2] = "DownloadList", i[i.ErrorNotice = 3] = "ErrorNotice", i[i.DatePicker = 4] = "DatePicker";
    })(j || (j = {}));
    const K = Oe(0),
        me = Oe("下载即将开始");

    function dt(i) {
        let e, t, n, o, r;
        return {
            c() {
                e = Wt$1("button"), t = wt$1(i[2]), ce(e, "class", n = "" + ((i[0] ? "button-active" : "button-inactive") + " w-36 h-12 rounded-full text-white text-base svelte-1ozed48"));
            },
            m(s, l) {
                se$1(s, e, l), Yt$1(e, t), o || (r = ae$1(e, "click", function () {
                    ut$1(i[1]) && i[1].apply(this, arguments);
                }), o = !0);
            },
            p(s, [l]) {
                i = s, l & 4 && fe(t, i[2]), l & 1 && n !== (n = "" + ((i[0] ? "button-active" : "button-inactive") + " w-36 h-12 rounded-full text-white text-base svelte-1ozed48")) && ce(e, "class", n);
            },
            i: W,
            o: W,
            d(s) {
                s && Lt$1(e), o = !1, r();
            }
        }
    }

    function ft(i, e, t) {
        let {
            active: n
        } = e, {
            onclick: o
        } = e, {
            label: r
        } = e;
        return i.$$set = s => {
            "active" in s && t(0, n = s.active), "onclick" in s && t(1, o = s.onclick), "label" in s && t(2, r = s.label);
        }, [n, o, r]
    }
    class se extends xe {
        constructor(e) {
            super();
            De(this, e, ft, dt, Tt$1, {
                active: 0,
                onclick: 1,
                label: 2
            });
        }
    }

    function ht(i) {
        let e, t, n, o, r, s, l, c, u, f, h, y, m, x, _, g;
        return h = new se({
            props: {
                active: !1,
                label: i[2],
                onclick: i[6]
            }
        }), m = new se({
            props: {
                active: !0,
                label: i[3],
                onclick: i[7]
            }
        }), {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', n = oe(), o = Wt$1("h1"), r = wt$1(i[0]), s = oe(), l = Wt$1("div"), c = wt$1(i[1]), u = oe(), f = Wt$1("div"), Se$1(h.$$.fragment), y = oe(), Se$1(m.$$.fragment), ce(t, "class", "items-end absolute right-1 top-2 text-gray-500 cursor-pointer p-1"), ce(o, "class", "text-3xl text-gray-800"), ce(l, "class", "text-lg text-gray-700 my-8"), ce(f, "class", "w-full flex justify-between px-4 mt-4"), ce(e, "class", "notice bg-white rounded-md overflow-hidden flex flex-col items-center py-10 px-14 relative svelte-1hw961f");
            },
            m(a, d) {
                se$1(a, e, d), Yt$1(e, t), Yt$1(e, n), Yt$1(e, o), Yt$1(o, r), Yt$1(e, s), Yt$1(e, l), Yt$1(l, c), Yt$1(e, u), Yt$1(e, f), Vt$1(h, f, null), Yt$1(f, y), Vt$1(m, f, null), x = !0, _ || (g = ae$1(t, "click", i[5]), _ = !0);
            },
            p(a, [d]) {
                (!x || d & 1) && fe(r, a[0]), (!x || d & 2) && fe(c, a[1]);
                const k = {};
                d & 4 && (k.label = a[2]), h.$set(k);
                const v = {};
                d & 8 && (v.label = a[3]), m.$set(v);
            },
            i(a) {
                x || (Ot$1(h.$$.fragment, a), Ot$1(m.$$.fragment, a), x = !0);
            },
            o(a) {
                ye(h.$$.fragment, a), ye(m.$$.fragment, a), x = !1;
            },
            d(a) {
                a && Lt$1(e), Gt$1(h), Gt$1(m), _ = !1, g();
            }
        }
    }

    function pt(i, e, t) {
        let {
            title: n
        } = e, {
            content: o
        } = e, {
            cancelLabel: r
        } = e, {
            confirmLabel: s
        } = e;
        const l = _e$1(),
            c = () => l("exit"),
            u = () => l("cancel"),
            f = () => l("confirm");
        return i.$$set = h => {
            "title" in h && t(0, n = h.title), "content" in h && t(1, o = h.content), "cancelLabel" in h && t(2, r = h.cancelLabel), "confirmLabel" in h && t(3, s = h.confirmLabel);
        }, [n, o, r, s, l, c, u, f]
    }
    class mt extends xe {
        constructor(e) {
            super();
            De(this, e, pt, ht, Tt$1, {
                title: 0,
                content: 1,
                cancelLabel: 2,
                confirmLabel: 3
            });
        }
    }

    function gt(i) {
        let e, t, n, o, r, s, l, c, u, f, h, y, m, x;
        return h = new se({
            props: {
                active: !1,
                label: i[2],
                onclick: i[5]
            }
        }), {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', n = oe(), o = Wt$1("h1"), r = wt$1(i[0]), s = oe(), l = Wt$1("div"), c = wt$1(i[1]), u = oe(), f = Wt$1("div"), Se$1(h.$$.fragment), ce(t, "class", "items-end absolute right-1 top-2 text-gray-500 cursor-pointer p-1"), ce(o, "class", "text-3xl text-gray-800"), ce(l, "class", "text-lg text-gray-700 my-8"), ce(f, "class", "w-full flex justify-center px-4 mt-4"), ce(e, "class", "notice bg-white rounded-md overflow-hidden flex flex-col items-center py-10 px-14 relative svelte-1hw961f");
            },
            m(_, g) {
                se$1(_, e, g), Yt$1(e, t), Yt$1(e, n), Yt$1(e, o), Yt$1(o, r), Yt$1(e, s), Yt$1(e, l), Yt$1(l, c), Yt$1(e, u), Yt$1(e, f), Vt$1(h, f, null), y = !0, m || (x = ae$1(t, "click", i[4]), m = !0);
            },
            p(_, [g]) {
                (!y || g & 1) && fe(r, _[0]), (!y || g & 2) && fe(c, _[1]);
                const a = {};
                g & 4 && (a.label = _[2]), h.$set(a);
            },
            i(_) {
                y || (Ot$1(h.$$.fragment, _), y = !0);
            },
            o(_) {
                ye(h.$$.fragment, _), y = !1;
            },
            d(_) {
                _ && Lt$1(e), Gt$1(h), m = !1, x();
            }
        }
    }

    function wt(i, e, t) {
        let {
            title: n
        } = e, {
            content: o
        } = e, {
            closeLabel: r
        } = e;
        const s = _e$1(),
            l = () => s("exit"),
            c = () => s("exit");
        return i.$$set = u => {
            "title" in u && t(0, n = u.title), "content" in u && t(1, o = u.content), "closeLabel" in u && t(2, r = u.closeLabel);
        }, [n, o, r, s, l, c]
    }
    class _t extends xe {
        constructor(e) {
            super();
            De(this, e, wt, gt, Tt$1, {
                title: 0,
                content: 1,
                closeLabel: 2
            });
        }
    }

    function Me(i, e, t) {
        const n = i.slice();
        return n[6] = e[t], n[8] = t, n
    }

    function Se(i) {
        let e, t;
        return {
            c() {
                e = Wt$1("li"), t = wt$1(i[2]), ce(e, "class", "text-lg text-gray-600");
            },
            m(n, o) {
                se$1(n, e, o), Yt$1(e, t);
            },
            p(n, o) {
                o & 4 && fe(t, n[2]);
            },
            d(n) {
                n && Lt$1(e);
            }
        }
    }

    function Pe(i, e) {
        let t, n = e[6].name + "",
            o;
        return {
            key: i,
            first: null,
            c() {
                t = Wt$1("li"), o = wt$1(n), ce(t, "class", "my-2"), this.first = t;
            },
            m(r, s) {
                se$1(r, t, s), Yt$1(t, o);
            },
            p(r, s) {
                e = r, s & 2 && n !== (n = e[6].name + "") && fe(o, n);
            },
            d(r) {
                r && Lt$1(t);
            }
        }
    }

    function vt(i) {
        let e, t, n, o, r = (i[0] ? "导出列表" : "下载列表") + "",
            s, l, c, u, f = [],
            h = new Map,
            y, m, x, _, g, a, d = i[1];
        const k = b => b[6].file_id;
        for (let b = 0; b < d.length; b += 1) {
            let D = Me(i, d, b),
                T = k(D);
            h.set(T, f[b] = Pe(T, D));
        }
        let v = null;
        return d.length || (v = Se(i)), x = new se({
            props: {
                active: !1,
                label: "退出",
                onclick: i[5]
            }
        }), {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', n = oe(), o = Wt$1("h1"), s = wt$1(r), l = oe(), c = Wt$1("div"), u = Wt$1("ul");
                for (let b = 0; b < f.length; b += 1) f[b].c();
                v && v.c(), y = oe(), m = Wt$1("div"), Se$1(x.$$.fragment), ce(t, "class", "items-end absolute right-1 top-2 text-gray-500 cursor-pointer p-1"), ce(o, "class", "text-3xl text-gray-800"), ce(u, "class", "text-base"), ce(c, "class", "text-gray-700 my-8 w-full"), ce(m, "class", "w-full flex justify-center px-4 mt-2"), ce(e, "class", "notice bg-white rounded-md overflow-hidden flex flex-col items-center py-10 px-14 relative svelte-1hw961f");
            },
            m(b, D) {
                se$1(b, e, D), Yt$1(e, t), Yt$1(e, n), Yt$1(e, o), Yt$1(o, s), Yt$1(e, l), Yt$1(e, c), Yt$1(c, u);
                for (let T = 0; T < f.length; T += 1) f[T].m(u, null);
                v && v.m(u, null), Yt$1(e, y), Yt$1(e, m), Vt$1(x, m, null), _ = !0, g || (a = ae$1(t, "click", i[4]), g = !0);
            },
            p(b, [D]) {
                (!_ || D & 1) && r !== (r = (b[0] ? "导出列表" : "下载列表") + "") && fe(s, r), D & 6 && (d = b[1], f = ve$1(f, D, k, 1, b, d, h, u, we$1, Pe, null, Me), !d.length && v ? v.p(b, D) : d.length ? v && (v.d(1), v = null) : (v = Se(b), v.c(), v.m(u, null)));
            },
            i(b) {
                _ || (Ot$1(x.$$.fragment, b), _ = !0);
            },
            o(b) {
                ye(x.$$.fragment, b), _ = !1;
            },
            d(b) {
                b && Lt$1(e);
                for (let D = 0; D < f.length; D += 1) f[D].d();
                v && v.d(), Gt$1(x), g = !1, a();
            }
        }
    }

    function yt(i, e, t) {
        let n, o;
        te(i, pe, u => t(1, n = u)), te(i, me, u => t(2, o = u));
        let {
            isExport: r = !1
        } = e;
        const s = _e$1(),
            l = () => s("exit"),
            c = () => s("exit");
        return i.$$set = u => {
            "isExport" in u && t(0, r = u.isExport);
        }, [r, n, o, s, l, c]
    }
    class bt extends xe {
        constructor(e) {
            super();
            De(this, e, yt, vt, Tt$1, {
                isExport: 0
            });
        }
    }
    async function xt(i) {
        return new Promise(e => {
            setTimeout(e, i);
        })
    }
    const kt = {
        download: "__zsxq_downloader__download"
    };

    function ge(i, e) {
        chrome.runtime.sendMessage(ee(A({}, i), {
            type: kt.download
        }), t => {
            chrome.runtime.lastError ? s.w(chrome.runtime.lastError.message) : e && e(t);
        });
    }

    function we() {
        const i = /^\/group\/(\d+)$/,
            e = /\/files/,
            t = window.location.pathname;
        if (i.test(t)) return i.exec(t)[1];
        if (e.test(t)) {
            const n = document.querySelector(".all-topic-files a.index"),
                o = n && n.getAttribute("href");
            if (i.test(o)) return i.exec(o)[1]
        }
        return ""
    }

    function je(i = "") {
        return i == null ? void 0 : i.replaceAll(/[~\\\/:*?"'<>|]/g, "")
    }
    const Et = 1e3,
        X = 60 * Et,
        _e = 60 * X,
        ve = 24 * _e;

    function Dt(i, e = Date.now()) {
        if (i === "刚刚") return [new Date(e), new Date(e - X)];
        let t = -1;
        if ((t = i.indexOf("分钟前")) !== -1) {
            const r = Number.parseInt(i.substring(0, t));
            return [new Date(e - r * X), new Date(e - (r + 1) * X)]
        }
        if ((t = i.indexOf("小时前")) !== -1) {
            const r = Number.parseInt(i.substring(0, t));
            return [new Date(e - r * _e), new Date(e - (r + 1) * _e)]
        }
        if ((t = i.indexOf("昨天")) !== -1) {
            const r = i.split(" ")[1].split(":"),
                s = Number.parseInt(r[0]),
                l = Number.parseInt(r[1]),
                c = new Date(e - ve);
            return c.setHours(s), c.setMinutes(l), c.setSeconds(0), c.setMilliseconds(0), [new Date(c.getTime() + X), c]
        }
        if ((t = i.indexOf("前天")) !== -1) {
            const r = i.split(" ")[1].split(":"),
                s = Number.parseInt(r[0]),
                l = Number.parseInt(r[1]),
                c = new Date(e - 2 * ve);
            return c.setHours(s), c.setMinutes(l), c.setSeconds(0), c.setMilliseconds(0), [new Date(c.getTime() + X), c]
        }
        const n = new Date(i);
        return [new Date(n.getTime() + ve), n]
    }

    function It() {
        var i, e = i = i || function (t, n) {
            var o;
            if (typeof window != "undefined" && window.crypto && (o = window.crypto), typeof self != "undefined" && self.crypto && (o = self.crypto), typeof globalThis != "undefined" && globalThis.crypto && (o = globalThis.crypto), !o && typeof window != "undefined" && window.msCrypto && (o = window.msCrypto), !o && typeof global != "undefined" && global.crypto && (o = global.crypto), !o) try {
                console.error("crypto not found");
            } catch { }
            var r = function () {
                if (o) {
                    if (typeof o.getRandomValues == "function") try {
                        return o.getRandomValues(new Uint32Array(1))[0]
                    } catch { }
                    if (typeof o.randomBytes == "function") try {
                        return o.randomBytes(4).readInt32LE()
                    } catch { }
                }
                throw new Error("Native crypto module could not be used to get secure random number.")
            },
                s = Object.create || function () {
                    function a() { }
                    return function (d) {
                        var k;
                        return a.prototype = d, k = new a, a.prototype = null, k
                    }
                }(),
                l = {},
                c = l.lib = {},
                u = c.Base = {
                    extend: function (a) {
                        var d = s(this);
                        return a && d.mixIn(a), (!d.hasOwnProperty("init") || this.init === d.init) && (d.init = function () {
                            d.$super.init.apply(this, arguments);
                        }), d.init.prototype = d, d.$super = this, d
                    },
                    create: function () {
                        var a = this.extend();
                        return a.init.apply(a, arguments), a
                    },
                    init: function () { },
                    mixIn: function (a) {
                        for (var d in a) a.hasOwnProperty(d) && (this[d] = a[d]);
                        a.hasOwnProperty("toString") && (this.toString = a.toString);
                    },
                    clone: function () {
                        return this.init.prototype.extend(this)
                    }
                },
                f = c.WordArray = u.extend({
                    init: function (a, d) {
                        a = this.words = a || [], this.sigBytes = d != null ? d : 4 * a.length;
                    },
                    toString: function (a) {
                        return (a || y).stringify(this)
                    },
                    concat: function (a) {
                        var d = this.words,
                            k = a.words,
                            v = this.sigBytes,
                            b = a.sigBytes;
                        if (this.clamp(), v % 4)
                            for (var D = 0; D < b; D++) d[v + D >>> 2] |= (k[D >>> 2] >>> 24 - D % 4 * 8 & 255) << 24 - (v + D) % 4 * 8;
                        else
                            for (var T = 0; T < b; T += 4) d[v + T >>> 2] = k[T >>> 2];
                        return this.sigBytes += b, this
                    },
                    clamp: function () {
                        var a = this.words,
                            d = this.sigBytes;
                        a[d >>> 2] &= 4294967295 << 32 - d % 4 * 8, a.length = t.ceil(d / 4);
                    },
                    clone: function () {
                        var a = u.clone.call(this);
                        return a.words = this.words.slice(0), a
                    },
                    random: function (a) {
                        for (var d = [], k = 0; k < a; k += 4) d.push(r());
                        return new f.init(d, a)
                    }
                }),
                h = l.enc = {},
                y = h.Hex = {
                    stringify: function (a) {
                        for (var d = a.words, k = a.sigBytes, v = [], b = 0; b < k; b++) {
                            var D = d[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                            v.push((D >>> 4).toString(16)), v.push((15 & D).toString(16));
                        }
                        return v.join("")
                    },
                    parse: function (a) {
                        for (var d = a.length, k = [], v = 0; v < d; v += 2) k[v >>> 3] |= parseInt(a.substr(v, 2), 16) << 24 - v % 8 * 4;
                        return new f.init(k, d / 2)
                    }
                },
                m = h.Latin1 = {
                    stringify: function (a) {
                        for (var d = a.words, k = a.sigBytes, v = [], b = 0; b < k; b++) v.push(String.fromCharCode(d[b >>> 2] >>> 24 - b % 4 * 8 & 255));
                        return v.join("")
                    },
                    parse: function (a) {
                        for (var d = a.length, k = [], v = 0; v < d; v++) k[v >>> 2] |= (255 & a.charCodeAt(v)) << 24 - v % 4 * 8;
                        return new f.init(k, d)
                    }
                },
                x = h.Utf8 = {
                    stringify: function (a) {
                        try {
                            return decodeURIComponent(escape(m.stringify(a)))
                        } catch {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function (a) {
                        return m.parse(unescape(encodeURIComponent(a)))
                    }
                },
                _ = c.BufferedBlockAlgorithm = u.extend({
                    reset: function () {
                        this._data = new f.init, this._nDataBytes = 0;
                    },
                    _append: function (a) {
                        typeof a == "string" && (a = x.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes;
                    },
                    _process: function (a) {
                        var d, k = this._data,
                            v = k.words,
                            b = k.sigBytes,
                            D = this.blockSize,
                            T = b / (4 * D),
                            I = (T = a ? t.ceil(T) : t.max((0 | T) - this._minBufferSize, 0)) * D,
                            H = t.min(4 * I, b);
                        if (I) {
                            for (var M = 0; M < I; M += D) this._doProcessBlock(v, M);
                            d = v.splice(0, I), k.sigBytes -= H;
                        }
                        return new f.init(d, H)
                    },
                    clone: function () {
                        var a = u.clone.call(this);
                        return a._data = this._data.clone(), a
                    },
                    _minBufferSize: 0
                }),
                g = (c.Hasher = _.extend({
                    cfg: u.extend(),
                    init: function (a) {
                        this.cfg = this.cfg.extend(a), this.reset();
                    },
                    reset: function () {
                        _.reset.call(this), this._doReset();
                    },
                    update: function (a) {
                        return this._append(a), this._process(), this
                    },
                    finalize: function (a) {
                        return a && this._append(a), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (a) {
                        return function (d, k) {
                            return new a.init(k).finalize(d)
                        }
                    },
                    _createHmacHelper: function (a) {
                        return function (d, k) {
                            return new g.HMAC.init(a, k).finalize(d)
                        }
                    }
                }), l.algo = {});
            return l
        }(Math);
        return e
    }

    function Bt() {
        var i, e, t, n, o, r, s, l = (s = It(), t = (e = (i = s).lib).WordArray, o = [], r = i.algo.SHA1 = (n = e.Hasher).extend({
            _doReset: function () {
                this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (c, u) {
                for (var f = this._hash.words, h = f[0], y = f[1], m = f[2], x = f[3], _ = f[4], g = 0; g < 80; g++) {
                    if (g < 16) o[g] = 0 | c[u + g];
                    else {
                        var a = o[g - 3] ^ o[g - 8] ^ o[g - 14] ^ o[g - 16];
                        o[g] = a << 1 | a >>> 31;
                    }
                    var d = (h << 5 | h >>> 27) + _ + o[g];
                    d += g < 20 ? 1518500249 + (y & m | ~y & x) : g < 40 ? 1859775393 + (y ^ m ^ x) : g < 60 ? (y & m | y & x | m & x) - 1894007588 : (y ^ m ^ x) - 899497514, _ = x, x = m, m = y << 30 | y >>> 2, y = h, h = d;
                }
                f[0] = f[0] + h | 0, f[1] = f[1] + y | 0, f[2] = f[2] + m | 0, f[3] = f[3] + x | 0, f[4] = f[4] + _ | 0;
            },
            _doFinalize: function () {
                var c = this._data,
                    u = c.words,
                    f = 8 * this._nDataBytes,
                    h = 8 * c.sigBytes;
                return u[h >>> 5] |= 128 << 24 - h % 32, u[14 + (h + 64 >>> 9 << 4)] = Math.floor(f / 4294967296), u[15 + (h + 64 >>> 9 << 4)] = f, c.sigBytes = 4 * u.length, this._process(), this._hash
            },
            clone: function () {
                var c = n.clone.call(this);
                return c._hash = this._hash.clone(), c
            }
        }), i.SHA1 = n._createHelper(r), i.HmacSHA1 = n._createHmacHelper(r), s.SHA1);
        return l
    }
    const Tt = Bt();

    function Ct() {
        for (var i = "", e = 0; e < 32; e++) i += Math.floor(16 * Math.random()).toString(16), (e === 8 || e === 12 || e === 16 || e === 20) && (i += "-");
        return i
    }

    function Lt() {
        return Math.floor(Date.now() / 1e3)
    }

    function Ht(i, e, t) {
        const n = `${i} ${e} ${t}`;
        return Tt(n)
    }

    function le(i) {
        const e = "2.13.0",
            t = Lt(),
            n = Ct(),
            o = Ht(i, t, n);
        return {
            "X-Request-Id": n,
            "X-Version": e,
            "X-Timestamp": t.toString(),
            "X-Signature": o
        }
    }
    async function ae(i) {
        const e = `https://api.zsxq.com/v2/groups/${i}`,
            n = await (await fetch(e, {
                credentials: "include",
                headers: le(e)
            })).json();
        if (n.succeeded) return n.resp_data.group;
        throw new Error("download error")
    }
    async function Nt(i, e, t) {
        const n = t ? `&end_time=${encodeURIComponent(t)}` : "",
            o = `https://api.zsxq.com/v2/groups/${i}/files?count=${e}${n}`,
            s = await (await fetch(o, {
                credentials: "include",
                headers: le(o)
            })).json();
        if (s.succeeded) return s.resp_data.files.map(l => l.file);
        throw new Error("request error")
    }
    async function Mt(i) {
        var s;
        const e = [];
        e.push(["count", (s = i.count) != null ? s : 20]), i.endtime && e.push(["end_time", encodeURIComponent($(i.endtime, 8))]), i.begintime && e.push(["begin_time", encodeURIComponent($(i.begintime, 8))]);
        const t = e.map(l => l.join("=")).join("&"),
            n = `https://api.zsxq.com/v2/groups/${i.groupId}/files?${t}`,
            r = await (await fetch(n, {
                credentials: "include",
                headers: le(n)
            })).json();
        if (r.succeeded) return r.resp_data.files.map(l => l.file);
        throw new Error("request error")
    }
    async function $e(i) {
        const e = `https://api.zsxq.com/v2/files/${i}/download_url`,
            n = await (await fetch(e, {
                credentials: "include",
                headers: le(e)
            })).json();
        if (n.succeeded) return n.resp_data.download_url;
        throw new Error("download error")
    }

    function St(i) {
        let e, t, n;
        return {
            c() {
                e = Wt$1("input"), ce(e, "type", "date"), ce(e, "min", i[1]), ce(e, "max", i[2]), ce(e, "class", "form-input mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ");
            },
            m(o, r) {
                se$1(o, e, r), le$1(e, i[0]), t || (n = ae$1(e, "input", i[7]), t = !0);
            },
            p(o, [r]) {
                r & 1 && le$1(e, o[0]);
            },
            i: W,
            o: W,
            d(o) {
                o && Lt$1(e), t = !1, n();
            }
        }
    }

    function Pt(i, e, t) {
        let {
            format: n = "YYYY-MM-DD"
        } = e, {
            date: o = new Date
        } = e, {
            min: r = void 0
        } = e, {
            max: s = void 0
        } = e, l;
        const c = m => t(0, l = m && ke(m).format(n)),
            u = m => t(3, o = m && ke(m, n).toDate()),
            f = r && ke(r).format(n),
            h = s && ke(s).format(n);

        function y() {
            l = this.value, t(0, l);
        }
        return i.$$set = m => {
            "format" in m && t(4, n = m.format), "date" in m && t(3, o = m.date), "min" in m && t(5, r = m.min), "max" in m && t(6, s = m.max);
        }, i.$$.update = () => {
            i.$$.dirty & 8 && c(o), i.$$.dirty & 1 && u(l);
        }, [l, f, h, o, n, r, s, y]
    }
    class qe extends xe {
        constructor(e) {
            super();
            De(this, e, Pt, St, Tt$1, {
                format: 4,
                date: 3,
                min: 5,
                max: 6
            });
        }
    }

    function ze(i) {
        let e, t, n, o, r, s, l, c, u, f, h;

        function y(g) {
            i[10](g);
        }
        let m = {
            max: i[2],
            min: i[3]
        };
        i[2] !== void 0 && (m.date = i[2]), n = new qe({
            props: m
        }), Dt$1.push(() => Me$1(n, "date", y));

        function x(g) {
            i[11](g);
        }
        let _ = {
            max: i[2],
            min: i[3]
        };
        return i[3] !== void 0 && (_.date = i[3]), u = new qe({
            props: _
        }), Dt$1.push(() => Me$1(u, "date", x)), {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), Se$1(n.$$.fragment), r = oe(), s = Wt$1("div"), l = oe(), c = Wt$1("div"), Se$1(u.$$.fragment), ce(t, "class", ""), ce(s, "class", "bg-cool-green w-4 ml-1 mr-1 py-px"), ce(e, "class", "flex flex-row mt-4 items-center");
            },
            m(g, a) {
                se$1(g, e, a), Yt$1(e, t), Vt$1(n, t, null), Yt$1(e, r), Yt$1(e, s), Yt$1(e, l), Yt$1(e, c), Vt$1(u, c, null), h = !0;
            },
            p(g, a) {
                const d = {};
                a & 4 && (d.max = g[2]), a & 8 && (d.min = g[3]), !o && a & 4 && (o = !0, d.date = g[2], $e$1(() => o = !1)), n.$set(d);
                const k = {};
                a & 4 && (k.max = g[2]), a & 8 && (k.min = g[3]), !f && a & 8 && (f = !0, k.date = g[3], $e$1(() => f = !1)), u.$set(k);
            },
            i(g) {
                h || (Ot$1(n.$$.fragment, g), Ot$1(u.$$.fragment, g), h = !0);
            },
            o(g) {
                ye(n.$$.fragment, g), ye(u.$$.fragment, g), h = !1;
            },
            d(g) {
                g && Lt$1(e), Gt$1(n), Gt$1(u);
            }
        }
    }

    function jt(i) {
        let e, t, n, o, r, s, l, c, u, f, h, y, m, x, _, g, a, d, k = (i[0] ? "导出" : "下载") + "",
            v, b, D, T, I = i[1] === 2 && ze(i);
        return {
            c() {
                e = Wt$1("div"), t = Wt$1("div"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', n = oe(), o = Wt$1("div"), r = Wt$1("div"), s = Wt$1("div"), l = Wt$1("input"), c = oe(), u = Wt$1("label"), u.textContent = "全部文件", f = oe(), h = Wt$1("div"), y = Wt$1("input"), m = oe(), x = Wt$1("label"), x.textContent = "按日期筛选", _ = oe(), I && I.c(), g = oe(), a = Wt$1("div"), d = Wt$1("button"), v = wt$1(k), ce(t, "class", "items-end absolute right-1 top-2 text-gray-500 cursor-pointer p-1"), ce(l, "type", "radio"), ce(l, "class", "border-gray-300 text-cool-green shadow-sm focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 cursor-pointer "), ce(l, "name", "inlineRadioOptions"), ce(l, "id", "inlineRadio1"), l.__value = 1, l.value = l.__value, i[8][0].push(l), ce(u, "class", "cursor-pointer"), ce(u, "for", "inlineRadio1"), ce(s, "class", "text-lg "), ce(y, "class", "border-gray-300 text-cool-green shadow-sm focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 cursor-pointer"), ce(y, "type", "radio"), ce(y, "name", "inlineRadioOptions"), ce(y, "id", "inlineRadio2"), y.__value = 2, y.value = y.__value, i[8][0].push(y), ce(x, "class", "cursor-pointer"), ce(x, "for", "inlineRadio2"), ce(h, "class", "ml-4 text-lg"), ce(r, "class", "flex justify-center text-gray-800"), ce(o, "class", "mt-10 mb-4"), ce(d, "class", "bg-cool-green w-36 h-12 rounded-full text-white text-base mt-4"), ce(a, "class", "w-full flex justify-center px-4 mt-6"), ce(e, "class", "notice bg-white rounded-md flex flex-col items-center py-10 px-14 relative"), de(e, "min-width", "500px");
            },
            m(H, M) {
                se$1(H, e, M), Yt$1(e, t), Yt$1(e, n), Yt$1(e, o), Yt$1(o, r), Yt$1(r, s), Yt$1(s, l), l.checked = l.__value === i[1], Yt$1(s, c), Yt$1(s, u), Yt$1(r, f), Yt$1(r, h), Yt$1(h, y), y.checked = y.__value === i[1], Yt$1(h, m), Yt$1(h, x), Yt$1(o, _), I && I.m(o, null), Yt$1(e, g), Yt$1(e, a), Yt$1(a, d), Yt$1(d, v), b = !0, D || (T = [ae$1(t, "click", i[6]), ae$1(l, "change", i[7]), ae$1(y, "change", i[9]), ae$1(d, "click", i[5])], D = !0);
            },
            p(H, [M]) {
                M & 2 && (l.checked = l.__value === H[1]), M & 2 && (y.checked = y.__value === H[1]), H[1] === 2 ? I ? (I.p(H, M), M & 2 && Ot$1(I, 1)) : (I = ze(H), I.c(), Ot$1(I, 1), I.m(o, null)) : I && (me$1(), ye(I, 1, 1, () => {
                    I = null;
                }), ge$1()), (!b || M & 1) && k !== (k = (H[0] ? "导出" : "下载") + "") && fe(v, k);
            },
            i(H) {
                b || (Ot$1(I), b = !0);
            },
            o(H) {
                ye(I), b = !1;
            },
            d(H) {
                H && Lt$1(e), i[8][0].splice(i[8][0].indexOf(l), 1), i[8][0].splice(i[8][0].indexOf(y), 1), I && I.d(), D = !1, R(T);
            }
        }
    }

    function $t(i, e, t) {
        const n = _e$1();
        let {
            isExport: o
        } = e, r = 1, s = new Date, l = new Date;
        const c = () => {
            let _;
            r === 2 && s && l && (_ = s.getTime() < l.getTime() ? {
                begin_time: s,
                end_time: l
            } : {
                begin_time: l,
                end_time: s
            }), n("download", _);
        };
        he(() => {
            ae(we()).then(_ => {
                _ && _.create_time && t(3, l = new Date(_.create_time));
            });
        });
        const u = [
            []
        ],
            f = () => n("exit");

        function h() {
            r = this.__value, t(1, r);
        }

        function y() {
            r = this.__value, t(1, r);
        }

        function m(_) {
            s = _, t(2, s);
        }

        function x(_) {
            l = _, t(3, l);
        }
        return i.$$set = _ => {
            "isExport" in _ && t(0, o = _.isExport);
        }, [o, r, s, l, n, c, f, h, u, y, m, x]
    }
    class qt extends xe {
        constructor(e) {
            super();
            De(this, e, $t, jt, Tt$1, {
                isExport: 0
            });
        }
    }

    function Re(i) {
        let e, t, n, o;
        const r = [Ft, At, Rt, zt],
            s = [];

        function l(c, u) {
            return c[1] === j.PaymentNotice ? 0 : c[1] === j.DownloadList ? 1 : c[1] === j.ErrorNotice ? 2 : c[1] === j.DatePicker ? 3 : -1
        }
        return ~(t = l(i)) && (n = s[t] = r[t](i)), {
            c() {
                e = Wt$1("div"), n && n.c(), ce(e, "class", "mask w-full h-full fixed left-0 top-0 flex flex-col justify-center items-center svelte-195tuv8");
            },
            m(c, u) {
                se$1(c, e, u), ~t && s[t].m(e, null), o = !0;
            },
            p(c, u) {
                let f = t;
                t = l(c), t === f ? ~t && s[t].p(c, u) : (n && (me$1(), ye(s[f], 1, 1, () => {
                    s[f] = null;
                }), ge$1()), ~t ? (n = s[t], n ? n.p(c, u) : (n = s[t] = r[t](c), n.c()), Ot$1(n, 1), n.m(e, null)) : n = null);
            },
            i(c) {
                o || (Ot$1(n), o = !0);
            },
            o(c) {
                ye(n), o = !1;
            },
            d(c) {
                c && Lt$1(e), ~t && s[t].d();
            }
        }
    }

    function zt(i) {
        let e, t;
        return e = new qt({
            props: {
                isExport: i[0]
            }
        }), e.$on("exit", i[8]), e.$on("download", i[9]), {
            c() {
                Se$1(e.$$.fragment);
            },
            m(n, o) {
                Vt$1(e, n, o), t = !0;
            },
            p(n, o) {
                const r = {};
                o & 1 && (r.isExport = n[0]), e.$set(r);
            },
            i(n) {
                t || (Ot$1(e.$$.fragment, n), t = !0);
            },
            o(n) {
                ye(e.$$.fragment, n), t = !1;
            },
            d(n) {
                Gt$1(e, n);
            }
        }
    }

    function Rt(i) {
        let e, t;
        return e = new _t({
            props: {
                title: "下载出错",
                content: "下载记录已保存，请稍后重试",
                closeLabel: "退出"
            }
        }), e.$on("exit", i[7]), {
            c() {
                Se$1(e.$$.fragment);
            },
            m(n, o) {
                Vt$1(e, n, o), t = !0;
            },
            p: W,
            i(n) {
                t || (Ot$1(e.$$.fragment, n), t = !0);
            },
            o(n) {
                ye(e.$$.fragment, n), t = !1;
            },
            d(n) {
                Gt$1(e, n);
            }
        }
    }

    function At(i) {
        let e, t;
        return e = new bt({
            props: {
                isExport: i[0]
            }
        }), e.$on("exit", i[6]), {
            c() {
                Se$1(e.$$.fragment);
            },
            m(n, o) {
                Vt$1(e, n, o), t = !0;
            },
            p(n, o) {
                const r = {};
                o & 1 && (r.isExport = n[0]), e.$set(r);
            },
            i(n) {
                t || (Ot$1(e.$$.fragment, n), t = !0);
            },
            o(n) {
                ye(e.$$.fragment, n), t = !1;
            },
            d(n) {
                Gt$1(e, n);
            }
        }
    }

    function Ft(i) {
        let e, t;
        return e = new mt({
            props: {
                title: "提示",
                content: Gt,
                cancelLabel: "使用基础版",
                confirmLabel: "购买高级版"
            }
        }), e.$on("cancel", i[3]), e.$on("confirm", i[4]), e.$on("exit", i[5]), {
            c() {
                Se$1(e.$$.fragment);
            },
            m(n, o) {
                Vt$1(e, n, o), t = !0;
            },
            p: W,
            i(n) {
                t || (Ot$1(e.$$.fragment, n), t = !0);
            },
            o(n) {
                ye(e.$$.fragment, n), t = !1;
            },
            d(n) {
                Gt$1(e, n);
            }
        }
    }

    function Ot(i) {
        let e, t, n = i[1] !== j.None && Re(i);
        return {
            c() {
                n && n.c(), e = ue$1();
            },
            m(o, r) {
                n && n.m(o, r), se$1(o, e, r), t = !0;
            },
            p(o, [r]) {
                o[1] !== j.None ? n ? (n.p(o, r), r & 2 && Ot$1(n, 1)) : (n = Re(o), n.c(), Ot$1(n, 1), n.m(e.parentNode, e)) : n && (me$1(), ye(n, 1, 1, () => {
                    n = null;
                }), ge$1());
            },
            i(o) {
                t || (Ot$1(n), t = !0);
            },
            o(o) {
                ye(n), t = !1;
            },
            d(o) {
                n && n.d(o), o && Lt$1(e);
            }
        }
    }
    let Gt = "你正在使用基础版，部分高级功能暂无法使用，升级高级版可无限制使用全部高级功能。";

    function Vt(i, e, t) {
        let {
            isExport: n = !1
        } = e, o;
        K.subscribe(m => {
            if (t(1, o = m), m !== j.None) {
                let x = 17,
                    _ = document.documentElement;
                typeof window.innerWidth == "number" && (x = window.innerWidth - _.clientWidth), _.style.overflow = "hidden", _.style.borderRight = x + "px solid transparent";
            } else {
                let x = document.documentElement;
                x.style.overflow = "", x.style.borderRight = "";
            }
        });
        const r = _e$1(),
            s = () => {
                r("cancel");
            },
            l = () => r("purchase"),
            c = () => r("exit"),
            u = () => r("exit"),
            f = () => r("exit"),
            h = () => r("exit");

        function y(m) {
            pe$1.call(this, i, m);
        }
        return i.$$set = m => {
            "isExport" in m && t(0, n = m.isExport);
        }, [n, o, r, s, l, c, u, f, h, y]
    }
    class Wt extends xe {
        constructor(e) {
            super();
            De(this, e, Vt, Ot, Tt$1, {
                isExport: 0
            });
        }
    }
    const Ut = parseInt("40");
    class Yt {
        constructor(e, t = !1) {
            N(this, "queue");
            N(this, "isDownloading", !1);
            N(this, "interrupted", !1);
            N(this, "groupId");
            N(this, "timer", 0);
            N(this, "groupInfo", null);
            N(this, "downloadHistory", {});
            N(this, "paied");
            N(this, "downloadUrls");
            N(this, "mode");
            N(this, "errCount", 0);
            N(this, "delayTime", 70);
            N(this, "groupNamePrefixEnable", !0);
            N(this, "datePrefixEnable", !1);
            N(this, "doDownload", async () => {
                var e;
                try {
                    if (clearTimeout(this.timer), this.queue.length === 0 || this.interrupted) {
                        this.isDownloading = !1, this.completeAllTask(), await v(this.groupId, A({}, this.downloadHistory));
                        return
                    }
                    this.isDownloading = !0;
                    const t = this.queue[0],
                        n = await $e(t.file_id);
                    if (this.mode === "download") {
                        const o = [],
                            r = je((e = this.groupInfo) == null ? void 0 : e.name),
                            s$1 = $(new Date(t.create_time), 8).split("T")[0];
                        this.datePrefixEnable && o.push(s$1), this.groupNamePrefixEnable && o.push(r), o.push(t.name), ge(ee(A({}, t), {
                            download_url: n,
                            group_name: r,
                            name: o.join("-")
                        }), l => s.d(l));
                    } else this.downloadUrls.push(n + `\r
`);
                    this.queue.shift(), this.completeCurrTask(), this.errCount = 0, this.timer = +setTimeout(this.doDownload, this.delayTime + Math.floor(Math.random() * 60));
                } catch (t) {
                    this.errCount >= 3 ? this.onError(t) : (this.errCount++, this.delayTime += 30, this.timer = +setTimeout(this.doDownload, 5e3 + Math.floor(Math.random() * 1e3)));
                }
            });
            this.queue = [], this.groupId = e, this.paied = t, this.downloadUrls = [], this.mode = "download";
        }
        addDownloadTask(e) {
            this.queue.push(...e), this.isDownloading || this.doDownload();
        }
        async initSettings() {
            var e, t, n$1;
            try {
                this.groupNamePrefixEnable = (e = await n("groupNamePrefixEnable")) != null ? e : !0, this.datePrefixEnable = (t = await n("datePrefixEnable")) != null ? t : !1, this.delayTime = (n$1 = await n("downloadInterval")) != null ? n$1 : parseInt("80");
            } catch (o) {
                s.e(o);
            }
        }
        completeCurrTask() {
            pe.set(this.queue.slice(0, 8));
        }
        completeAllTask() {
            me.set(this.mode === "download" ? "文件下载完成" : "导出完成"), this.mode === "export" && this.exportUrl();
        }
        onError(e) {
            s.e(e), K.set(j.ErrorNotice), this.mode === "export" && this.exportUrl();
        }
        exportUrl() {
            var n;
            const e = new Blob(this.downloadUrls, {
                type: "text/plain"
            }),
                t = URL.createObjectURL(e);
            ge({
                download_url: t,
                name: `${je((n = this.groupInfo) == null ? void 0 : n.name)}-文件下载链接.txt`
            }, o => s.d(o));
        }
        async downloadFiles(e, t) {
            this.mode = e ? "export" : "download", s.d(this.mode + " files"), await this.initSettings(), this.groupInfo = await ae(this.groupId), this.downloadFilesBetween(this.paied && t);
        }
        async loadHistoryFromCache() {
            this.groupInfo = await ae(this.groupId), this.downloadHistory = await y(this.groupId);
        }
        async downloadFilesBetween(e) {
            try {
                this.groupInfo = await ae(this.groupId), this.interrupted = !1;
                const {
                    end_time: t,
                    begin_time: n
                } = e || {};
                t && t.setHours(23, 59, 59, 999);
                const o = parseInt("20");
                let r = 0,
                    s = {
                        create_time: t && $(t, 8)
                    };
                for (; !s || !s.completed;) {
                    let l = await Nt(this.groupId, o, s == null ? void 0 : s.create_time);
                    if (l && l.length > 0 && l.length < o && new Date(l[l.length - 1].create_time).getTime() === new Date(t).getTime()) {
                        s = ee(A({}, s), {
                            completed: !0
                        });
                        continue
                    }
                    if (l && l.length > 0 && n) {
                        let u = l.findIndex(f => new Date(f.create_time) <= n);
                        u !== -1 && (l = l.slice(0, u));
                    }
                    r += l.length, this.addDownloadTask(l), s = l[l.length - 1], (l.length < o || !this.paied && r >= Ut || this.interrupted) && (s = ee(A({}, s), {
                        completed: !0
                    })), await xt(Math.random() * 100 + 100);
                }
            } catch (t) {
                this.onError(t);
            }
        }
        cancelDownload() {
            this.interrupted = !0;
        }
    }

    function Ae(i) {
        let e, t, n, o;
        return e = new ut({}), e.$on("download", i[5]), e.$on("export", i[6]), n = new Wt({
            props: {
                isExport: i[1]
            }
        }), n.$on("purchase", D), n.$on("cancel", i[3]), n.$on("exit", i[4]), n.$on("download", i[7]), {
            c() {
                Se$1(e.$$.fragment), t = oe(), Se$1(n.$$.fragment);
            },
            m(r, s) {
                Vt$1(e, r, s), se$1(r, t, s), Vt$1(n, r, s), o = !0;
            },
            p(r, s) {
                const l = {};
                s & 2 && (l.isExport = r[1]), n.$set(l);
            },
            i(r) {
                o || (Ot$1(e.$$.fragment, r), Ot$1(n.$$.fragment, r), o = !0);
            },
            o(r) {
                ye(e.$$.fragment, r), ye(n.$$.fragment, r), o = !1;
            },
            d(r) {
                Gt$1(e, r), r && Lt$1(t), Gt$1(n, r);
            }
        }
    }

    function Kt(i) {
        let e, t, n = i[0] && Ae(i);
        return {
            c() {
                n && n.c(), e = ue$1();
            },
            m(o, r) {
                n && n.m(o, r), se$1(o, e, r), t = !0;
            },
            p(o, [r]) {
                o[0] ? n ? (n.p(o, r), r & 1 && Ot$1(n, 1)) : (n = Ae(o), n.c(), Ot$1(n, 1), n.m(e.parentNode, e)) : n && (me$1(), ye(n, 1, 1, () => {
                    n = null;
                }), ge$1());
            },
            i(o) {
                t || (Ot$1(n), t = !0);
            },
            o(o) {
                ye(n), t = !1;
            },
            d(o) {
                n && n.d(o), o && Lt$1(e);
            }
        }
    }

    function Fe() {
        const i = /^\/group\/(\d+)$/,
            e = /\/files/;
        return i.test(window.location.pathname) || e.test(window.location.pathname)
    }

    function Qt(i, e, t) {
        let n$1 = Fe(),
            o = 0,
            r;
        const s$1 = () => {
            clearTimeout(o), t(0, n$1 = Fe()), o = +setTimeout(s$1, 1e3);
        };
        let l = {
            key: "",
            urlkey: "",
            validated: 1,
            expire_at: 0
        },
            c;
        he(() => (s$1(), () => {
            clearTimeout(o);
        })), he(() => {
            (async () => {
                var v;
                const {
                    version: a,
                    name: d
                } = chrome.runtime.getManifest();
                s.i(`${d} v${a} 初始化成功`);
                const k = await P();
                l = A(A({}, l), k);
                try {
                    const b = (v = await n("downloadBtnVisibility")) != null ? v : !1;
                    if (!l.validated || !b) return;
                    document.addEventListener("DOMNodeInserted", D => {
                        const T = D.target;
                        if (T.nodeName.toUpperCase() !== "APP-FILE-PREVIEW") return;
                        const I = T.querySelector(".file-preview-container .download-wrapper");
                        !I || setTimeout(() => {
                            if (I.querySelector(".download")) return;
                            const H = Date.now(),
                                M = T.querySelector(".file-preview-container>.content>.file"),
                                ce = M.querySelector(".file-name").textContent,
                                Oe = M.querySelector(".upload-info>.upload-date").textContent,
                                Zt = M.querySelector(".upload-info>.file-size").textContent,
                                Ge = I.attributes,
                                Z = document.createElement("div");
                            for (const J of Ge) J.name.toLowerCase() !== "class" && Z.setAttribute(J.name, J.value);
                            Z.className = "download", Z.innerText = "下载", Z.addEventListener("click", async () => {
                                const [J, Ve] = Dt(Oe, H), We = we();
                                try {
                                    const be = (await Mt({
                                        groupId: We,
                                        endtime: J,
                                        begintime: Ve
                                    })).find(ke => ke.name === ce);
                                    if (!be) return;
                                    const xe = await $e(be.file_id);
                                    if (!xe) return;
                                    ge({
                                        download_url: xe,
                                        name: ce
                                    }, ke => {
                                        s.i(`send downolad task ${ce} success`);
                                    });
                                } catch (ye) {
                                    s.e(ye);
                                }
                            }), I.appendChild(Z);
                        }, 20);
                    });
                } catch (b) {
                    s.e(b);
                }
            })();
        });
        const u = g => {
            K.set(j.DownloadList);
            const a = we();
            return c = new Yt(a, l.validated), c.downloadFiles(r, g)
        },
            f = () => {
                K.set(j.DatePicker);
            };
        return [n$1, r, u, () => {
            u();
        }, () => {
            c && c.cancelDownload(), K.set(j.None);
        }, async g => {
            if (t(1, r = g.detail.isExport), pe.set([]), me.set(r ? "导出即将开始" : "下载即将开始"), l.validated) f();
            else {
                const a = await P();
                l = A(A({}, l), a), l.validated ? f() : K.set(j.PaymentNotice);
            }
        }, async () => {
            K.set(j.PaymentNotice);
        }, g => {
            u(g.detail);
        }]
    }
    class Xt extends xe {
        constructor(e) {
            super();
            De(this, e, Qt, Kt, Tt$1, {});
        }
    }
    new Xt({
        target: document.body
    });

})();