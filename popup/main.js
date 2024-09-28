var Y = Object.defineProperty;
var R = Object.getOwnPropertySymbols;
var ee = Object.prototype.hasOwnProperty,
    te = Object.prototype.propertyIsEnumerable;
var U = (i, e, t) => e in i ? Y(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t,
    q = (i, e) => {
        for (var t in e || (e = {})) ee.call(e, t) && U(i, t, e[t]);
        if (R)
            for (var t of R(e)) te.call(e, t) && U(i, t, e[t]);
        return i
    };
import {
    S as L,
    i as N,
    s as O,
    e as p,
    t as $,
    b as s,
    c as h,
    d as u,
    l as Z,
    k as E,
    n as P,
    f as _,
    h as le,
    O as v,
    m as H,
    a as k,
    o as A,
    p as C,
    q as z,
    u as F,
    D as ne,
    E as ae,
    P as se,
    Q as G,
    F as ie
} from "../vendor.c7d1d581.js";
import {
    f as J,
    b as oe,
    c as re
} from "../payment.338d104e.js";
import "../logger.faf93e7c.js";

function ce(i) {
    let e, t, n, l, o;
    return {
        c() {
            e = p("button"), t = $(i[1]), s(e, "class", n = "" + ((i[0] ? "button-active" : "button-inactive") + " w-24 py-2 rounded-full text-white text-sm svelte-1ozed48"))
        },
        m(a, r) {
            h(a, e, r), u(e, t), l || (o = Z(e, "click", i[3]), l = !0)
        },
        p(a, [r]) {
            r & 2 && E(t, a[1]), r & 1 && n !== (n = "" + ((a[0] ? "button-active" : "button-inactive") + " w-24 py-2 rounded-full text-white text-sm svelte-1ozed48")) && s(e, "class", n)
        },
        i: P,
        o: P,
        d(a) {
            a && _(e), l = !1, o()
        }
    }
}

function ue(i, e, t) {
    let {
        active: n
    } = e, {
        label: l
    } = e;
    const o = le(),
        a = () => {
            o("purchase")
        };
    return i.$$set = r => {
        "active" in r && t(0, n = r.active), "label" in r && t(1, l = r.label)
    }, [n, l, o, a]
}
class fe extends L {
    constructor(e) {
        super();
        N(this, e, ue, ce, O, {
            active: 0,
            label: 1
        })
    }
}

function de(i) {
    let e;
    return {
        c() {
            e = v("path"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round"), s(e, "stroke-width", "2"), s(e, "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z")
        },
        m(t, n) {
            h(t, e, n)
        },
        d(t) {
            t && _(e)
        }
    }
}

function me(i) {
    let e, t;
    return {
        c() {
            e = v("path"), t = v("path"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round"), s(e, "stroke-width", "2"), s(e, "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"), s(t, "stroke-linecap", "round"), s(t, "stroke-linejoin", "round"), s(t, "stroke-width", "2"), s(t, "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z")
        },
        m(n, l) {
            h(n, e, l), h(n, t, l)
        },
        d(n) {
            n && _(e), n && _(t)
        }
    }
}

function pe(i) {
    let e;
    return {
        c() {
            e = v("path"), s(e, "stroke-linecap", "round"), s(e, "stroke-linejoin", "round"), s(e, "stroke-width", "2"), s(e, "d", "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z")
        },
        m(t, n) {
            h(t, e, n)
        },
        d(t) {
            t && _(e)
        }
    }
}

function he(i) {
    let e, t;

    function n(a, r) {
        if (a[0] === "feedback") return pe;
        if (a[0] === "setting") return me;
        if (a[0] === "help") return de
    }
    let l = n(i),
        o = l && l(i);
    return {
        c() {
            e = v("svg"), o && o.c(), s(e, "xmlns", "http://www.w3.org/2000/svg"), s(e, "class", t = "h-6 w-6 " + i[1]), s(e, "fill", "none"), s(e, "viewBox", "0 0 24 24"), s(e, "stroke", "currentColor")
        },
        m(a, r) {
            h(a, e, r), o && o.m(e, null)
        },
        p(a, [r]) {
            l !== (l = n(a)) && (o && o.d(1), o = l && l(a), o && (o.c(), o.m(e, null))), r & 2 && t !== (t = "h-6 w-6 " + a[1]) && s(e, "class", t)
        },
        i: P,
        o: P,
        d(a) {
            a && _(e), o && o.d()
        }
    }
}

function _e(i, e, t) {
    let {
        name: n
    } = e, {
        className: l
    } = e;
    return i.$$set = o => {
        "name" in o && t(0, n = o.name), "className" in o && t(1, l = o.className)
    }, [n, l]
}
class ge extends L {
    constructor(e) {
        super();
        N(this, e, _e, he, O, {
            name: 0,
            className: 1
        })
    }
}

function W(i, e, t) {
    const n = i.slice();
    return n[4] = e[t], n
}

function X(i) {
    let e, t, n, l, o = i[4].text + "",
        a, r, c, m, M;
    t = new ge({
        props: {
            name: i[4].icon,
            className: "mr-3 ml-1"
        }
    });

    function b(...f) {
        return i[2](i[4], ...f)
    }
    return {
        c() {
            e = p("li"), H(t.$$.fragment), n = k(), l = p("span"), a = $(o), r = k(), s(l, "class", "ext-a"), s(e, "class", "flex flex-row items-center h-10 text-gray-700 hover:bg-gray-200 cursor-pointer text-sm")
        },
        m(f, j) {
            h(f, e, j), A(t, e, null), u(e, n), u(e, l), u(l, a), u(e, r), c = !0, m || (M = Z(e, "click", b), m = !0)
        },
        p(f, j) {
            i = f
        },
        i(f) {
            c || (C(t.$$.fragment, f), c = !0)
        },
        o(f) {
            z(t.$$.fragment, f), c = !1
        },
        d(f) {
            f && _(e), F(t), m = !1, M()
        }
    }
}

function ve(i) {
    let e, t, n = i[0],
        l = [];
    for (let a = 0; a < n.length; a += 1) l[a] = X(W(i, n, a));
    const o = a => z(l[a], 1, 1, () => {
        l[a] = null
    });
    return {
        c() {
            e = p("ul");
            for (let a = 0; a < l.length; a += 1) l[a].c();
            s(e, "class", "mt-10 w-full px-5")
        },
        m(a, r) {
            h(a, e, r);
            for (let c = 0; c < l.length; c += 1) l[c].m(e, null);
            t = !0
        },
        p(a, [r]) {
            if (r & 3) {
                n = a[0];
                let c;
                for (c = 0; c < n.length; c += 1) {
                    const m = W(a, n, c);
                    l[c] ? (l[c].p(m, r), C(l[c], 1)) : (l[c] = X(m), l[c].c(), C(l[c], 1), l[c].m(e, null))
                }
                for (ne(), c = n.length; c < l.length; c += 1) o(c);
                ae()
            }
        },
        i(a) {
            if (!t) {
                for (let r = 0; r < n.length; r += 1) C(l[r]);
                t = !0
            }
        },
        o(a) {
            l = l.filter(Boolean);
            for (let r = 0; r < l.length; r += 1) z(l[r]);
            t = !1
        },
        d(a) {
            a && _(e), se(l, a)
        }
    }
}

function we(i) {
    const e = [{
        icon: "feedback",
        text: "问题反馈",
        link: "/feedback",
        id: "feedback"
    }, {
        icon: "help",
        text: "使用帮助",
        link: "/feedback",
        id: "help"
    }, {
        icon: "setting",
        text: "设置选项",
        link: "/options",
        id: "options"
    }],
        t = () => {
            chrome.runtime.openOptionsPage ? chrome.runtime.openOptionsPage() : window.open(chrome.runtime.getURL("options.html"))
        },
        n = o => {
            o === "options" ? t() : o === "help" ? window.open("https://wwwatson.feishu.cn/docs/doccnOzaKMbeTIaliLT46IsQxFc") : o === "feedback" && window.open("https://github.com/shiquda/zsxq-dl-fix")
        };
    return [e, n, (o, a) => {
        a.preventDefault(), n(o.id)
    }]
}
class ke extends L {
    constructor(e) {
        super();
        N(this, e, we, ve, O, {})
    }
}

function be(i) {
    let e, t, n, l, o, a, r, c, m, M, b = (i[0].validated ? "高级版" : "基础版") + "",
        f, j, B, Q, D, I = (i[0].validated ? `高级版将于 ${J(i[0].expire_at)} 到期` : "高级功能暂时无法使用") + "",
        V, S, g, T, x, w;
    return g = new fe({
        props: {
            active: !0,
            label: i[0].validated ? "立即续费" : "购买高级版"
        }
    }), g.$on("purchase", oe), x = new ke({}), {
        c() {
            e = p("main"), t = p("div"), n = v("svg"), l = v("circle"), o = v("path"), a = k(), r = p("h1"), r.textContent = "星球伴侣", c = k(), m = p("h1"), M = $("("), f = $(b), j = $(")"), Q = k(), D = p("div"), V = $(I), S = k(), H(g.$$.fragment), T = k(), H(x.$$.fragment), s(l, "cx", "128"), s(l, "cy", "128"), s(l, "r", "128"), s(l, "fill", "#16B998"), s(o, "fill-rule", "evenodd"), s(o, "clip-rule", "evenodd"), s(o, "d", "M138.4 56.368C140.024 56.8787 141.442 57.8942 142.45 59.2668C143.457 60.6394 144 62.2975 144 64V104H176C177.463 103.999 178.898 104.4 180.15 105.159C181.401 105.917 182.421 107.004 183.097 108.302C183.774 109.6 184.081 111.058 183.986 112.518C183.892 113.978 183.398 115.385 182.56 116.584L126.56 196.584C125.585 197.98 124.19 199.029 122.578 199.578C120.966 200.127 119.221 200.147 117.597 199.636C115.973 199.124 114.554 198.108 113.548 196.735C112.541 195.362 111.999 193.703 112 192V152H79.9997C78.5363 152.001 77.1008 151.6 75.8494 150.841C74.598 150.083 73.5786 148.996 72.9021 147.698C72.2257 146.4 71.9181 144.942 72.0129 143.482C72.1077 142.022 72.6012 140.615 73.4397 139.416L129.44 59.416C130.416 58.0223 131.811 56.9761 133.422 56.4294C135.033 55.8827 136.777 55.864 138.4 56.376V56.368Z"), s(o, "fill", "white"), s(n, "width", "36"), s(n, "height", "36"), s(n, "viewBox", "0 0 256 256"), s(n, "fill", "none"), s(n, "xmlns", "http://www.w3.org/2000/svg"), s(r, "class", "text-2xl text-gray-700 ml-3"), s(m, "class", B = "" + (G(` text-gray-500 ${i[0].validated ? "ext-title" : ""} text-lg self-end ml-1`) + " svelte-tf6r5n")), s(t, "class", "flex flex-row w-full items-center px-5 justify-center"), s(D, "class", "text-gray-600 mt-8 mb-4 text-lg"), s(e, "class", "w-80 mx-auto bg-white py-6 flex flex-col items-center shadow-lg")
        },
        m(d, y) {
            h(d, e, y), u(e, t), u(t, n), u(n, l), u(n, o), u(t, a), u(t, r), u(t, c), u(t, m), u(m, M), u(m, f), u(m, j), u(e, Q), u(e, D), u(D, V), u(e, S), A(g, e, null), u(e, T), A(x, e, null), w = !0
        },
        p(d, [y]) {
            (!w || y & 1) && b !== (b = (d[0].validated ? "高级版" : "基础版") + "") && E(f, b), (!w || y & 1 && B !== (B = "" + (G(` text-gray-500 ${d[0].validated ? "ext-title" : ""} text-lg self-end ml-1`) + " svelte-tf6r5n"))) && s(m, "class", B), (!w || y & 1) && I !== (I = (d[0].validated ? `高级版将于 ${J(d[0].expire_at)} 到期` : "高级功能暂时无法使用") + "") && E(V, I);
            const K = {};
            y & 1 && (K.label = d[0].validated ? "立即续费" : "购买高级版"), g.$set(K)
        },
        i(d) {
            w || (C(g.$$.fragment, d), C(x.$$.fragment, d), w = !0)
        },
        o(d) {
            z(g.$$.fragment, d), z(x.$$.fragment, d), w = !1
        },
        d(d) {
            d && _(e), F(g), F(x)
        }
    }
}

function xe(i, e, t) {
    let n = {
        key: "",
        urlkey: "",
        validated: !1,
        expire_at: 0
    };
    return ie(() => {
        (async () => {
            const o = await re();
            t(0, n = q(q({}, n), o))
        })()
    }), [n]
}
class ye extends L {
    constructor(e) {
        super();
        N(this, e, xe, be, O, {})
    }
}
new ye({
    target: document.getElementById("app")
});