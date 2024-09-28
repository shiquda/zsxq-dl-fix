import {
    S as B,
    i as K,
    s as V,
    e as b,
    t as P,
    b as f,
    c as S,
    d as c,
    k as q,
    n as T,
    f as $,
    a as k,
    m as I,
    o as C,
    p as w,
    q as x,
    u as E,
    l as M,
    z as J,
    h as Z,
    K as ve,
    L as oe,
    I as we,
    D as ce,
    E as fe,
    F as ue,
    M as de,
    N as me,
    r as ge,
    G as ye,
    H as xe,
    B as Se
} from "../vendor.c7d1d581.js";
import {
    d as $e,
    g as F,
    e as H,
    f as pe,
    b as je,
    h as Ie
} from "../payment.338d104e.js";
import {
    l as Ce
} from "../logger.faf93e7c.js";

function Ee(a) {
    let e, t, r;
    return {
        c() {
            e = b("div"), t = b("a"), r = P(a[0]), f(t, "class", "text-gray-600 text-base"), f(t, "href", a[1]), f(t, "target", "_blank"), f(e, "class", "px-12 h-12 flex items-center ")
        },
        m(l, n) {
            S(l, e, n), c(e, t), c(t, r)
        },
        p(l, [n]) {
            n & 1 && q(r, l[0]), n & 2 && f(t, "href", l[1])
        },
        i: T,
        o: T,
        d(l) {
            l && $(e)
        }
    }
}

function Ne(a, e, t) {
    let {
        title: r
    } = e, {
        link: l
    } = e;
    return a.$$set = n => {
        "title" in n && t(0, r = n.title), "link" in n && t(1, l = n.link)
    }, [r, l]
}
class ee extends B {
    constructor(e) {
        super();
        K(this, e, Ne, Ee, V, {
            title: 0,
            link: 1
        })
    }
}

function Le(a) {
    let e, t, r, l, n, i, s, o, d;
    return l = new ee({
        props: {
            title: "如何使用激活码？",
            link: "https://github.com/shiquda/zsxq-dl-fix"
        }
    }), i = new ee({
        props: {
            title: "帮助文档",
            link: "https://wwwatson.feishu.cn/docs/doccnOzaKMbeTIaliLT46IsQxFc"
        }
    }), o = new ee({
        props: {
            title: "评价扩展",
            link: a[0]
        }
    }), {
        c() {
            e = b("div"), t = b("div"), t.innerHTML = '<h2 class="text-lg">关于</h2>', r = k(), I(l.$$.fragment), n = k(), I(i.$$.fragment), s = k(), I(o.$$.fragment), f(t, "class", "ext-title h-14 flex items-center pl-12 mb-4 svelte-v5bshl"), f(e, "class", "max-w-2xl bg-white mx-auto rounded-lg pb-4 mt-5")
        },
        m(m, _) {
            S(m, e, _), c(e, t), c(e, r), C(l, e, null), c(e, n), C(i, e, null), c(e, s), C(o, e, null), d = !0
        },
        p: T,
        i(m) {
            d || (w(l.$$.fragment, m), w(i.$$.fragment, m), w(o.$$.fragment, m), d = !0)
        },
        o(m) {
            x(l.$$.fragment, m), x(i.$$.fragment, m), x(o.$$.fragment, m), d = !1
        },
        d(m) {
            m && $(e), E(l), E(i), E(o)
        }
    }
}

function Te(a) {
    return [$e()]
}
class De extends B {
    constructor(e) {
        super();
        K(this, e, Te, Le, V, {})
    }
}

function be(a) {
    let e, t = a[3].label + "",
        r, l, n, i;
    return {
        c() {
            e = b("button"), r = P(t), e.disabled = a[2], f(e, "class", l = "" + (a[2] ? " bg-gray-300 cursor-default" : "action") + " text-white rounded px-4 py-1 text-sm svelte-rpw1w5")
        },
        m(s, o) {
            S(s, e, o), c(e, r), n || (i = M(e, "click", a[7]), n = !0)
        },
        p(s, o) {
            o & 8 && t !== (t = s[3].label + "") && q(r, t), o & 4 && (e.disabled = s[2]), o & 4 && l !== (l = "" + (s[2] ? " bg-gray-300 cursor-default" : "action") + " text-white rounded px-4 py-1 text-sm svelte-rpw1w5") && f(e, "class", l)
        },
        d(s) {
            s && $(e), n = !1, i()
        }
    }
}

function Pe(a) {
    let e, t, r, l, n, i, s, o, d, m, _, u = a[3] && be(a);
    return {
        c() {
            e = b("div"), t = b("span"), r = P(a[0]), l = P("："), n = k(), i = b("div"), s = b("input"), d = k(), u && u.c(), f(t, "class", "text-gray-600 text-base"), f(s, "type", "text"), s.disabled = a[2], f(s, "class", o = "" + ((a[1] ? " border-red-400" : "border-transparent") + " mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0")), f(i, "class", "flex-grow mr-28 text-base text-gray-600"), f(e, "class", "px-12 h-12 flex items-center")
        },
        m(h, g) {
            S(h, e, g), c(e, t), c(t, r), c(t, l), c(e, n), c(e, i), c(i, s), J(s, a[4]), c(e, d), u && u.m(e, null), m || (_ = M(s, "input", a[6]), m = !0)
        },
        p(h, [g]) {
            g & 1 && q(r, h[0]), g & 4 && (s.disabled = h[2]), g & 2 && o !== (o = "" + ((h[1] ? " border-red-400" : "border-transparent") + " mt-1 block w-full rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0")) && f(s, "class", o), g & 16 && s.value !== h[4] && J(s, h[4]), h[3] ? u ? u.p(h, g) : (u = be(h), u.c(), u.m(e, null)) : u && (u.d(1), u = null)
        },
        i: T,
        o: T,
        d(h) {
            h && $(e), u && u.d(), m = !1, _()
        }
    }
}

function Me(a, e, t) {
    let {
        title: r
    } = e, {
        error: l
    } = e, {
        disabled: n
    } = e, {
        action: i = null
    } = e;
    const s = Z();
    let o;

    function d() {
        o = this.value, t(4, o)
    }
    const m = () => s("valide", o);
    return a.$$set = _ => {
        "title" in _ && t(0, r = _.title), "error" in _ && t(1, l = _.error), "disabled" in _ && t(2, n = _.disabled), "action" in _ && t(3, i = _.action)
    }, [r, l, n, i, o, s, d, m]
}
class Be extends B {
    constructor(e) {
        super();
        K(this, e, Me, Pe, V, {
            title: 0,
            error: 1,
            disabled: 2,
            action: 3
        })
    }
}

function _e(a) {
    let e, t = a[2].label + "",
        r, l, n;
    return {
        c() {
            e = b("button"), r = P(t), f(e, "class", "action text-white rounded px-4 py-1 text-sm svelte-rpw1w5")
        },
        m(i, s) {
            S(i, e, s), c(e, r), l || (n = M(e, "click", a[4]), l = !0)
        },
        p(i, s) {
            s & 4 && t !== (t = i[2].label + "") && q(r, t)
        },
        d(i) {
            i && $(e), l = !1, n()
        }
    }
}

function Ke(a) {
    let e, t, r, l, n, i, s, o, d = a[2] && _e(a);
    return {
        c() {
            e = b("div"), t = b("span"), r = P(a[0]), l = P("："), n = k(), i = b("span"), s = P(a[1]), o = k(), d && d.c(), f(t, "class", "text-gray-600 text-base"), f(i, "class", "text-gray-800 text-lg flex-grow"), f(e, "class", "px-12 h-12 flex items-center")
        },
        m(m, _) {
            S(m, e, _), c(e, t), c(t, r), c(t, l), c(e, n), c(e, i), c(i, s), c(e, o), d && d.m(e, null)
        },
        p(m, [_]) {
            _ & 1 && q(r, m[0]), _ & 2 && q(s, m[1]), m[2] ? d ? d.p(m, _) : (d = _e(m), d.c(), d.m(e, null)) : d && (d.d(1), d = null)
        },
        i: T,
        o: T,
        d(m) {
            m && $(e), d && d.d()
        }
    }
}

function Ve(a, e, t) {
    let {
        title: r
    } = e, {
        description: l
    } = e, {
        action: n = null
    } = e;
    const i = Z(),
        s = () => i("action");
    return a.$$set = o => {
        "title" in o && t(0, r = o.title), "description" in o && t(1, l = o.description), "action" in o && t(2, n = o.action)
    }, [r, l, n, i, s]
}
class W extends B {
    constructor(e) {
        super();
        K(this, e, Ve, Ke, V, {
            title: 0,
            description: 1,
            action: 2
        })
    }
}

function Ae(a) {
    let e, t, r, l;
    return e = new W({
        props: {
            title: "到期时间",
            description: "--"
        }
    }), r = new Be({
        props: {
            title: "激活码",
            action: {
                label: "验证"
            },
            error: a[1] === "error",
            disabled: a[3]
        }
    }), r.$on("valide", a[4]), {
        c() {
            I(e.$$.fragment), t = k(), I(r.$$.fragment)
        },
        m(n, i) {
            C(e, n, i), S(n, t, i), C(r, n, i), l = !0
        },
        p(n, i) {
            const s = {};
            i & 2 && (s.error = n[1] === "error"), i & 8 && (s.disabled = n[3]), r.$set(s)
        },
        i(n) {
            l || (w(e.$$.fragment, n), w(r.$$.fragment, n), l = !0)
        },
        o(n) {
            x(e.$$.fragment, n), x(r.$$.fragment, n), l = !1
        },
        d(n) {
            E(e, n), n && $(t), E(r, n)
        }
    }
}

function Oe(a) {
    let e, t, r, l;
    return e = new W({
        props: {
            title: "到期时间",
            description: pe(a[0].expire_at),
            action: {
                label: "续费"
            }
        }
    }), e.$on("action", je), r = new W({
        props: {
            title: "激活码",
            description: a[0].key
        }
    }), {
        c() {
            I(e.$$.fragment), t = k(), I(r.$$.fragment)
        },
        m(n, i) {
            C(e, n, i), S(n, t, i), C(r, n, i), l = !0
        },
        p(n, i) {
            const s = {};
            i & 1 && (s.description = pe(n[0].expire_at)), e.$set(s);
            const o = {};
            i & 1 && (o.description = n[0].key), r.$set(o)
        },
        i(n) {
            l || (w(e.$$.fragment, n), w(r.$$.fragment, n), l = !0)
        },
        o(n) {
            x(e.$$.fragment, n), x(r.$$.fragment, n), l = !1
        },
        d(n) {
            E(e, n), n && $(t), E(r, n)
        }
    }
}

function he(a) {
    let e, t, r, l, n;
    return {
        c() {
            e = b("div"), t = P(a[2]), f(e, "class", r = "" + (a[1] === "error" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500") + " max-w-2xl mx-auto pl-12 rounded py-1 mt-px")
        },
        m(i, s) {
            S(i, e, s), c(e, t), n = !0
        },
        p(i, s) {
            a = i, (!n || s & 4) && q(t, a[2]), (!n || s & 2 && r !== (r = "" + (a[1] === "error" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500") + " max-w-2xl mx-auto pl-12 rounded py-1 mt-px")) && f(e, "class", r)
        },
        i(i) {
            n || (ve(() => {
                l || (l = oe(e, me, {
                    delay: 250,
                    duration: 300,
                    easing: de
                }, !0)), l.run(1)
            }), n = !0)
        },
        o(i) {
            l || (l = oe(e, me, {
                delay: 250,
                duration: 300,
                easing: de
            }, !1)), l.run(0), n = !1
        },
        d(i) {
            i && $(e), i && l && l.end()
        }
    }
}

function qe(a) {
    let e, t, r, l, n, i, s, o, d, m;
    l = new W({
        props: {
            title: "当前版本",
            description: a[0].validated ? "高级版" : "基础版"
        }
    });
    const _ = [Oe, Ae],
        u = [];

    function h(p, v) {
        return p[0].validated ? 0 : 1
    }
    i = h(a), s = u[i] = _[i](a);
    let g = a[1] !== "none" && he(a);
    return {
        c() {
            e = b("div"), t = b("div"), t.innerHTML = '<h2 class="text-lg">激活码</h2>', r = k(), I(l.$$.fragment), n = k(), s.c(), o = k(), g && g.c(), d = we(), f(t, "class", "ext-title h-14 flex items-center pl-12 mb-4 svelte-v5bshl"), f(e, "class", "max-w-2xl bg-white mx-auto rounded-lg pb-4 mt-5")
        },
        m(p, v) {
            S(p, e, v), c(e, t), c(e, r), C(l, e, null), c(e, n), u[i].m(e, null), S(p, o, v), g && g.m(p, v), S(p, d, v), m = !0
        },
        p(p, [v]) {
            const j = {};
            v & 1 && (j.description = p[0].validated ? "高级版" : "基础版"), l.$set(j);
            let N = i;
            i = h(p), i === N ? u[i].p(p, v) : (ce(), x(u[N], 1, 1, () => {
                u[N] = null
            }), fe(), s = u[i], s ? s.p(p, v) : (s = u[i] = _[i](p), s.c()), w(s, 1), s.m(e, null)), p[1] !== "none" ? g ? (g.p(p, v), v & 2 && w(g, 1)) : (g = he(p), g.c(), w(g, 1), g.m(d.parentNode, d)) : g && (ce(), x(g, 1, 1, () => {
                g = null
            }), fe())
        },
        i(p) {
            m || (w(l.$$.fragment, p), w(s), w(g), m = !0)
        },
        o(p) {
            x(l.$$.fragment, p), x(s), x(g), m = !1
        },
        d(p) {
            p && $(e), E(l), u[i].d(), p && $(o), g && g.d(p), p && $(d)
        }
    }
}

function ze(a, e, t) {
    let r = {
        key: "",
        urlkey: "",
        validated: !1,
        expire_at: 0
    },
        l = "none",
        n = "",
        i = 0,
        s = !1;
    const o = _ => {
        const u = Ie(_);
        t(0, r.validated = u.valid, r), t(0, r.expire_at = u.expire_at, r), t(0, r.key = _.orderid, r), t(0, r.urlkey = _.urlkey, r)
    };
    ue(() => {
        (async () => {
            const u = await F("detail");
            u && o(u)
        })()
    });
    const d = (_, u = "error") => {
        t(1, l = u), t(2, n = _), clearTimeout(i), i = +setTimeout(() => {
            t(1, l = "none")
        }, 3e3)
    };
    return [r, l, n, s, async _ => {
        const u = _.detail;
        if (!u || u.trim().length === 0) {
            d("激活码无效", "error");
            return
        }
        try {
            t(3, s = !0);
            const g = await (await fetch(`https://api.wyym.cc/release/zsxq/license?key=${u.trim()}`)).json();
            if (t(3, s = !1), g.code === 0) {
                const p = g.data;
                o(p), await H({
                    detail: p,
                    savedAt: Date.now()
                }), d("验证成功", "success")
            } else d(g.message, "error")
        } catch (h) {
            Ce.e(h), t(3, s = !1), d(h.message || "验证出错", "error")
        }
    }]
}
class Fe extends B {
    constructor(e) {
        super();
        K(this, e, ze, qe, V, {})
    }
}

function He(a) {
    let e, t, r, l, n, i;
    return {
        c() {
            e = b("label"), t = b("input"), r = k(), l = b("span"), f(t, "type", "checkbox"), f(t, "class", "svelte-cjvbjb"), f(l, "class", "slider svelte-cjvbjb"), f(e, "class", "switch svelte-cjvbjb")
        },
        m(s, o) {
            S(s, e, o), c(e, t), t.checked = a[0], c(e, r), c(e, l), n || (i = [M(t, "change", a[3]), M(t, "change", a[1])], n = !0)
        },
        p(s, [o]) {
            o & 1 && (t.checked = s[0])
        },
        i: T,
        o: T,
        d(s) {
            s && $(e), n = !1, ge(i)
        }
    }
}

function Qe(a, e, t) {
    let {
        checked: r = !1
    } = e;
    const l = "#2196F3",
        n = Z(),
        i = () => {
            n("change", r)
        };

    function s() {
        r = this.checked, t(0, r)
    }
    return a.$$set = o => {
        "checked" in o && t(0, r = o.checked)
    }, [r, i, l, s]
}
class Ge extends B {
    constructor(e) {
        super();
        K(this, e, Qe, He, V, {
            checked: 0,
            color: 2
        })
    }
    get color() {
        return this.$$.ctx[2]
    }
}

function Re(a) {
    let e, t, r, l, n, i, s, o, d, m, _, u, h, g, p, v, j, N, te, D, X, ne, Q, le, z, G, se, R, L, U, A, Y, ie;

    function ke(y) {
        a[9](y)
    }
    let re = {};
    return a[2] !== void 0 && (re.checked = a[2]), D = new Ge({
        props: re
    }), ye.push(() => xe(D, "checked", ke)), D.$on("change", a[7]), {
        c() {
            e = b("div"), t = b("div"), t.innerHTML = '<h2 class="text-lg">设置</h2>', r = k(), l = b("div"), n = b("span"), n.textContent = "文件名包含：", i = k(), s = b("div"), o = b("input"), d = k(), m = b("label"), m.textContent = "星球名称", _ = k(), u = b("div"), h = b("input"), g = k(), p = b("label"), p.textContent = "文件上传日期", v = k(), j = b("div"), N = b("span"), N.textContent = "显示下载按钮：", te = k(), I(D.$$.fragment), ne = k(), Q = b("div"), Q.textContent = "针对禁止在网页端下载的文件显示下载按钮", le = k(), z = b("div"), G = b("span"), G.textContent = "下载间隔(ms)：", se = k(), R = b("div"), L = b("input"), f(t, "class", "ext-title h-14 flex items-center pl-12 mb-4 svelte-m7fh6a"), f(n, "class", "text-gray-600 text-base mr-2"), o.checked = a[0], f(o, "class", "color form-check-input appearance-none mt-0.5 h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-green-300 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer svelte-m7fh6a"), f(o, "type", "checkbox"), f(o, "id", "inlineCheckbox1"), o.value = "option1", f(m, "class", "form-check-label inline-block text-gray-800 text-sm"), f(m, "for", "inlineCheckbox1"), f(s, "class", "form-check form-check-inline"), h.checked = a[1], f(h, "class", "color form-check-input appearance-none mt-0.5 h-4 w-4 border border-gray-300 rounded-sm bg-white focus:ring-green-300 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer svelte-m7fh6a"), f(h, "type", "checkbox"), f(h, "id", "inlineCheckbox2"), h.value = "option2", f(p, "class", "form-check-label inline-block text-gray-800 text-sm"), f(p, "for", "inlineCheckbox2"), f(u, "class", "form-check form-check-inline"), f(l, "class", "flex justify-start px-12 h-12 items-center"), f(N, "class", "text-gray-600 text-base mr-2"), f(Q, "class", "text-sm text-gray-500 flex-1 text-right"), f(j, "class", "flex justify-start px-12 h-12 items-center"), f(G, "class", "text-gray-600 text-base mr-2"), f(L, "type", "text"), f(L, "class", U = "" + ((a[3] ? " border-red-400" : "border-transparent") + " mt-1 block w-40 rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0")), f(R, "class", "w-40 flex-grow mr-28 text-base text-gray-600"), f(z, "class", "flex justify-start px-12 h-12 items-center"), f(e, "class", "max-w-2xl bg-white mx-auto rounded-lg pb-4 mt-5")
        },
        m(y, O) {
            S(y, e, O), c(e, t), c(e, r), c(e, l), c(l, n), c(l, i), c(l, s), c(s, o), c(s, d), c(s, m), c(l, _), c(l, u), c(u, h), c(u, g), c(u, p), c(e, v), c(e, j), c(j, N), c(j, te), C(D, j, null), c(j, ne), c(j, Q), c(e, le), c(e, z), c(z, G), c(z, se), c(z, R), c(R, L), J(L, a[4]), A = !0, Y || (ie = [M(o, "change", a[5]), M(h, "change", a[6]), M(L, "input", a[10]), M(L, "blur", a[8])], Y = !0)
        },
        p(y, [O]) {
            (!A || O & 1) && (o.checked = y[0]), (!A || O & 2) && (h.checked = y[1]);
            const ae = {};
            !X && O & 4 && (X = !0, ae.checked = y[2], Se(() => X = !1)), D.$set(ae), (!A || O & 8 && U !== (U = "" + ((y[3] ? " border-red-400" : "border-transparent") + " mt-1 block w-40 rounded-md bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0"))) && f(L, "class", U), O & 16 && L.value !== y[4] && J(L, y[4])
        },
        i(y) {
            A || (w(D.$$.fragment, y), A = !0)
        },
        o(y) {
            x(D.$$.fragment, y), A = !1
        },
        d(y) {
            y && $(e), E(D), Y = !1, ge(ie)
        }
    }
}

function Ue(a, e, t) {
    let r = !0,
        l = !1,
        n = !1,
        i = !1,
        s = 90;
    const o = async g => {
        t(0, r = !r), await H({
            groupNamePrefixEnable: r
        })
    }, d = async g => {
        t(1, l = !l), await H({
            datePrefixEnable: l
        })
    }, m = async g => {
        await H({
            downloadBtnVisibility: n
        })
    };
    ue(() => {
        (async () => {
            var p, v, j, N;
            t(0, r = (p = await F("groupNamePrefixEnable")) != null ? p : !0), t(1, l = (v = await F("datePrefixEnable")) != null ? v : !1), t(2, n = (j = await F("downloadBtnVisibility")) != null ? j : !1), t(4, s = (N = await F("downloadInterval")) != null ? N : parseInt("80"))
        })()
    });
    const _ = async g => {
        if (typeof s == "number") t(3, i = s < 0);
        else {
            const p = Number.parseInt(s, 10);
            Number.isNaN(p) ? t(3, i = !0) : (t(4, s = p), t(3, i = p < 0))
        }
        i || await H({
            downloadInterval: s
        })
    };

    function u(g) {
        n = g, t(2, n)
    }

    function h() {
        s = this.value, t(4, s)
    }
    return [r, l, n, i, s, o, d, m, _, u, h]
}
class Je extends B {
    constructor(e) {
        super();
        K(this, e, Ue, Re, V, {})
    }
}

function We(a) {
    let e, t, r, l, n, i, s;
    return t = new Fe({}), l = new Je({}), i = new De({}), {
        c() {
            e = b("main"), I(t.$$.fragment), r = k(), I(l.$$.fragment), n = k(), I(i.$$.fragment), f(e, "class", "")
        },
        m(o, d) {
            S(o, e, d), C(t, e, null), c(e, r), C(l, e, null), c(e, n), C(i, e, null), s = !0
        },
        p: T,
        i(o) {
            s || (w(t.$$.fragment, o), w(l.$$.fragment, o), w(i.$$.fragment, o), s = !0)
        },
        o(o) {
            x(t.$$.fragment, o), x(l.$$.fragment, o), x(i.$$.fragment, o), s = !1
        },
        d(o) {
            o && $(e), E(t), E(l), E(i)
        }
    }
}
class Xe extends B {
    constructor(e) {
        super();
        K(this, e, null, We, V, {})
    }
}
new Xe({
    target: document.getElementById("app")
});