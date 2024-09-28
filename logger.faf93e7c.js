var o;
(function(n) {
    n[n.All = 0] = "All", n[n.Debug = 1] = "Debug", n[n.Info = 2] = "Info", n[n.Warn = 3] = "Warn", n[n.Error = 4] = "Error", n[n.None = 5] = "None"
})(o || (o = {}));

function a(n, ...r) {
    console.error(n, ...r)
}

function c(n, ...r) {
    console.warn(n, ...r)
}

function f(n, ...r) {
    console.info(n, ...r)
}

function i(n, ...r) {}
const s = {
    d: i,
    i: f,
    w: c,
    e: a
};
export {
    s as l
};