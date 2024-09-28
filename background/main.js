(function () {
    'use strict';

    var o;
    (function (n) {
        n[n.All = 0] = "All", n[n.Debug = 1] = "Debug", n[n.Info = 2] = "Info", n[n.Warn = 3] = "Warn", n[n.Error = 4] = "Error", n[n.None = 5] = "None";
    })(o || (o = {}));

    function a$1(n, ...r) {
        console.error(n, ...r);
    }

    function c(n, ...r) {
        console.warn(n, ...r);
    }

    function f(n, ...r) {
        console.info(n, ...r);
    }

    function i(n, ...r) { }
    const s = {
        d: i,
        i: f,
        w: c,
        e: a$1
    };

    const n = {
        download: "__zsxq_downloader__download"
    };

    function a() {
        chrome.runtime.onMessage.addListener((o, e, d) => (o.type === n.download && (l(o.download_url, o.name), d({
            type: n.download,
            message: "success"
        })), !0)), chrome.runtime.onInstalled.addListener(o => {
            o.reason === chrome.runtime.OnInstalledReason.INSTALL && chrome.tabs.create({
                url: "https://github.com/shiquda/zsxq-dl-fix"
            });
        });
    }

    function l(o, e) {
        chrome.downloads.download({
            url: o,
            filename: e
        }, () => {
            chrome.runtime.lastError && s.e(`failured download ${e} from ${o}`);
        });
    }
    a();

})();