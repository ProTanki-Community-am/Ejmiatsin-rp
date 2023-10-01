(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [function(t, e, n) {
        "use strict";
        n.d(e, "k", (function() {
            return y
        })), n.d(e, "m", (function() {
            return w
        })), n.d(e, "l", (function() {
            return k
        })), n.d(e, "e", (function() {
            return C
        })), n.d(e, "b", (function() {
            return j
        })), n.d(e, "s", (function() {
            return _
        })), n.d(e, "g", (function() {
            return A
        })), n.d(e, "h", (function() {
            return O
        })), n.d(e, "d", (function() {
            return M
        })), n.d(e, "r", (function() {
            return I
        })), n.d(e, "j", (function() {
            return D
        })), n.d(e, "t", (function() {
            return N
        })), n.d(e, "o", (function() {
            return L
        })), n.d(e, "q", (function() {
            return E
        })), n.d(e, "f", (function() {
            return z
        })), n.d(e, "c", (function() {
            return P
        })), n.d(e, "i", (function() {
            return T
        })), n.d(e, "p", (function() {
            return B
        })), n.d(e, "a", (function() {
            return Z
        })), n.d(e, "v", (function() {
            return Q
        })), n.d(e, "n", (function() {
            return J
        })), n.d(e, "u", (function() {
            return Y
        }));
        n(53), n(34), n(66), n(67), n(55), n(33), n(56);
        var r = n(18),
            o = n(4),
            c = n(26),
            l = n(27),
            d = (n(31), n(15), n(43), n(281), n(28), n(72), n(69), n(44), n(40), n(45), n(50), n(22), n(46), n(195), n(115), n(285), n(39), n(147), n(287), n(86), n(109), n(1)),
            f = n(37);

        function h(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(e) {
                    Object(c.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function v(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return x(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }

        function y(t) {
            d.default.config.errorHandler && d.default.config.errorHandler(t)
        }

        function w(t) {
            return t.then((function(t) {
                return t.default || t
            }))
        }

        function k(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }

        function C(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = v(t.$children || []);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var o = e.value;
                    o.$fetch && n.push(o), o.$children && C(o, n)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
            return n
        }

        function j(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var n = t.options._originDataFn || t.options.data || function() {
                    return {}
                };
                t.options._originDataFn = n, t.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), m(m({}, data), e)
                }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }

        function _(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = d.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
        }

        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                return Object.keys(t[n]).map((function(o) {
                    return e && e.push(r), t[n][o]
                }))
            })))
        }

        function O(t) {
            return A(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }

        function M(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t.components).reduce((function(r, o) {
                    return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                }), [])
            })))
        }

        function I(t, e) {
            return Promise.all(M(t, function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                    var l, d;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    t.next = 11;
                                    break
                                }
                                return t.prev = 1, t.next = 4, n();
                            case 4:
                                n = t.sent, t.next = 11;
                                break;
                            case 7:
                                throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(), (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l), window.location.reload(!0))), t.t0;
                            case 11:
                                return o.components[c] = n = _(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7]
                    ])
                })));
                return function(e, n, r, o) {
                    return t.apply(this, arguments)
                }
            }()))
        }

        function D(t) {
            return S.apply(this, arguments)
        }

        function S() {
            return (S = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4, I(e);
                        case 4:
                            return t.abrupt("return", m(m({}, e), {}, {
                                meta: A(e).map((function(t, n) {
                                    return m(m({}, t.options.meta), (e.matched[n] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function N(t, e) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                var o, c, d, h;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: n.payload,
                                error: n.error,
                                base: e.router.options.base,
                                env: {}
                            }, n.req && (e.context.req = n.req), n.res && (e.context.res = n.res), n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var o = Object(r.a)(path);
                                    if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {}, path = t, o = Object(r.a)(path), t = 302), "object" === o && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(f.d)(path, n), window.location.assign(path), new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: n,
                                        status: t
                                    })
                                }
                            }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([D(n.route), D(n.from)]);
                        case 3:
                            o = t.sent, c = Object(l.a)(o, 2), d = c[0], h = c[1], n.route && (e.context.route = d), n.from && (e.context.from = h), n.error && (e.context.error = n.error), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function L(t, e, n) {
            return !t.length || e._redirected || e._errored || n && n.aborted ? Promise.resolve() : E(t[0], e).then((function() {
                return L(t.slice(1), e, n)
            }))
        }

        function E(t, e) {
            var n;
            return (n = 2 === t.length ? new Promise((function(n) {
                t(e, (function(t, data) {
                    t && e.error(t), n(data = data || {})
                }))
            })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }

        function z(base, t) {
            if ("hash" === t) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var e = (path || "/") + window.location.search + window.location.hash;
            return Object(f.c)(e)
        }

        function P(t, e) {
            return function(t, e) {
                for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", H(e)));
                return function(e, r) {
                    for (var path = "", data = e || {}, o = (r || {}).pretty ? V : encodeURIComponent, c = 0; c < t.length; c++) {
                        var l = t[c];
                        if ("string" != typeof l) {
                            var d = data[l.name || "pathMatch"],
                                f = void 0;
                            if (null == d) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(d)) {
                                if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                if (0 === d.length) {
                                    if (l.optional) continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < d.length; h++) {
                                    if (f = o(d[h]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + f
                                }
                            } else {
                                if (f = l.asterisk ? G(d) : o(d), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                path += l.prefix + f
                            }
                        } else path += l
                    }
                    return path
                }
            }(function(t, e) {
                var n, r = [],
                    o = 0,
                    c = 0,
                    path = "",
                    l = e && e.delimiter || "/";
                for (; null != (n = U.exec(t));) {
                    var d = n[0],
                        f = n[1],
                        h = n.index;
                    if (path += t.slice(c, h), c = h + d.length, f) path += f[1];
                    else {
                        var m = t[c],
                            v = n[2],
                            x = n[3],
                            y = n[4],
                            w = n[5],
                            k = n[6],
                            C = n[7];
                        path && (r.push(path), path = "");
                        var j = null != v && null != m && m !== v,
                            _ = "+" === k || "*" === k,
                            A = "?" === k || "*" === k,
                            O = n[2] || l,
                            pattern = y || w;
                        r.push({
                            name: x || o++,
                            prefix: v || "",
                            delimiter: O,
                            optional: A,
                            repeat: _,
                            partial: j,
                            asterisk: Boolean(C),
                            pattern: pattern ? F(pattern) : C ? ".*" : "[^" + $(O) + "]+?"
                        })
                    }
                }
                c < t.length && (path += t.substr(c));
                path && r.push(path);
                return r
            }(t, e), e)
        }

        function T(t, e) {
            var n = {},
                r = m(m({}, t), e);
            for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
            return n
        }

        function B(t) {
            var e;
            if (t.message || "string" == typeof t) e = t.message || t;
            else try {
                e = JSON.stringify(t, null, 2)
            } catch (n) {
                e = "[".concat(t.constructor.name, "]")
            }
            return m(m({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        };
        var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function V(t, e) {
            var n = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(n, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function G(t) {
            return V(t, !0)
        }

        function $(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function F(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }

        function H(t) {
            return t && t.sensitive ? "" : "i"
        }

        function Z(t, e, n) {
            t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
        }
        var Q = f.b,
            J = (f.e, f.a);

        function Y(t) {
            try {
                window.history.scrollRestoration = t
            } catch (t) {}
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return ee
        })), n.d(e, "a", (function() {
            return R
        }));
        var r = {};
        n.r(r), n.d(r, "Button", (function() {
            return st
        })), n.d(r, "Footer", (function() {
            return ct
        })), n.d(r, "Header", (function() {
            return ut
        })), n.d(r, "Input", (function() {
            return lt
        })), n.d(r, "Select", (function() {
            return pt
        })), n.d(r, "Table", (function() {
            return ft
        })), n.d(r, "AdminMenu", (function() {
            return ht
        })), n.d(r, "DashboardMenu", (function() {
            return mt
        })), n.d(r, "SupportTikets", (function() {
            return gt
        })), n.d(r, "LandingFooter", (function() {
            return bt
        })), n.d(r, "LandingHeader", (function() {
            return vt
        }));
        n(44), n(34), n(43), n(55), n(33), n(56);
        var o = n(4),
            c = n(26),
            l = (n(31), n(28), n(15), n(69), n(22), n(46), n(1)),
            d = n(87),
            f = n(225),
            h = n(139),
            m = n.n(h),
            v = n(70),
            x = n.n(v),
            y = (n(40), n(45), n(140)),
            w = n(37),
            k = n(0);
        n(296);
        "scrollRestoration" in window.history && (Object(k.u)("manual"), window.addEventListener("beforeunload", (function() {
            Object(k.u)("auto")
        })), window.addEventListener("load", (function() {
            Object(k.u)("manual")
        })));

        function C(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function j(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? C(Object(source), !0).forEach((function(e) {
                    Object(c.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : C(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var _ = function() {};
        l.default.use(y.a);
        var A = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, n) {
                var r = !1,
                    o = t !== e;
                n ? r = n : o && function(t) {
                    var e = Object(k.g)(t);
                    if (1 === e.length) {
                        var n = e[0].options;
                        return !1 !== (void 0 === n ? {} : n).scrollToTop
                    }
                    return e.some((function(t) {
                        var e = t.options;
                        return e && e.scrollToTop
                    }))
                }(t) && (r = {
                    x: 0,
                    y: 0
                });
                var c = window.$nuxt;
                return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                    return c.$emit("triggerScroll")
                })), new Promise((function(e) {
                    c.$once("triggerScroll", (function() {
                        if (t.hash) {
                            var n = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                            try {
                                var o = document.querySelector(n);
                                if (o) {
                                    var c;
                                    r = {
                                        selector: n
                                    };
                                    var l = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                    l && (r.offset = {
                                        y: l
                                    })
                                }
                            } catch (t) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        e(r)
                    }))
                }))
            },
            routes: [{
                path: "/admin",
                component: function() {
                    return Object(k.m)(n.e(12).then(n.bind(null, 721)))
                },
                name: "admin"
            }, {
                path: "/apk",
                component: function() {
                    return Object(k.m)(n.e(28).then(n.bind(null, 722)))
                },
                name: "apk"
            }, {
                path: "/auth",
                component: function() {
                    return Object(k.m)(n.e(29).then(n.bind(null, 723)))
                },
                name: "auth"
            }, {
                path: "/complaints",
                component: function() {
                    return Object(k.m)(n.e(33).then(n.bind(null, 724)))
                },
                name: "complaints"
            }, {
                path: "/dashboard",
                component: function() {
                    return Object(k.m)(n.e(43).then(n.bind(null, 725)))
                },
                name: "dashboard"
            }, {
                path: "/download",
                component: function() {
                    return Object(k.m)(n.e(53).then(n.bind(null, 726)))
                },
                name: "download"
            }, {
                path: "/events",
                component: function() {
                    return Object(k.m)(n.e(54).then(n.bind(null, 727)))
                },
                name: "events"
            }, {
                path: "/faq",
                component: function() {
                    return Object(k.m)(n.e(55).then(n.bind(null, 728)))
                },
                name: "faq"
            }, {
                path: "/google_play",
                component: function() {
                    return Object(k.m)(n.e(56).then(n.bind(null, 729)))
                },
                name: "google_play"
            }, {
                path: "/kingjr",
                component: function() {
                    return Object(k.m)(n.e(58).then(n.bind(null, 730)))
                },
                name: "kingjr"
            }, {
                path: "/play",
                component: function() {
                    return Object(k.m)(n.e(60).then(n.bind(null, 731)))
                },
                name: "play"
            }, {
                path: "/socet",
                component: function() {
                    return Object(k.m)(n.e(61).then(n.bind(null, 732)))
                },
                name: "socet"
            }, {
                path: "/support",
                component: function() {
                    return Object(k.m)(n.e(64).then(n.bind(null, 733)))
                },
                name: "support"
            }, {
                path: "/target",
                component: function() {
                    return Object(k.m)(n.e(65).then(n.bind(null, 734)))
                },
                name: "target"
            }, {
                path: "/tg",
                component: function() {
                    return Object(k.m)(n.e(66).then(n.bind(null, 735)))
                },
                name: "tg"
            }, {
                path: "/tg_download",
                component: function() {
                    return Object(k.m)(n.e(67).then(n.bind(null, 736)))
                },
                name: "tg_download"
            }, {
                path: "/tickets",
                component: function() {
                    return Object(k.m)(n.e(68).then(n.bind(null, 737)))
                },
                name: "tickets"
            }, {
                path: "/tikitoki",
                component: function() {
                    return Object(k.m)(n.e(69).then(n.bind(null, 738)))
                },
                name: "tikitoki"
            }, {
                path: "/admin/admins",
                component: function() {
                    return Object(k.m)(n.e(7).then(n.bind(null, 739)))
                },
                name: "admin-admins"
            }, {
                path: "/admin/bans",
                component: function() {
                    return Object(k.m)(n.e(8).then(n.bind(null, 740)))
                },
                name: "admin-bans"
            }, {
                path: "/admin/complaints",
                component: function() {
                    return Object(k.m)(n.e(10).then(n.bind(null, 741)))
                },
                name: "admin-complaints"
            }, {
                path: "/admin/leaders",
                component: function() {
                    return Object(k.m)(n.e(13).then(n.bind(null, 742)))
                },
                name: "admin-leaders"
            }, {
                path: "/admin/rules",
                component: function() {
                    return Object(k.m)(n.e(25).then(n.bind(null, 743)))
                },
                name: "admin-rules"
            }, {
                path: "/admin/search",
                component: function() {
                    return Object(k.m)(n.e(27).then(n.bind(null, 744)))
                },
                name: "admin-search"
            }, {
                path: "/complaints/create",
                component: function() {
                    return Object(k.m)(n.e(32).then(n.bind(null, 715)))
                },
                name: "complaints-create"
            }, {
                path: "/dashboard/attachobject",
                component: function() {
                    return Object(k.m)(n.e(34).then(n.bind(null, 745)))
                },
                name: "dashboard-attachobject"
            }, {
                path: "/dashboard/bans",
                component: function() {
                    return Object(k.m)(n.e(35).then(n.bind(null, 746)))
                },
                name: "dashboard-bans"
            }, {
                path: "/dashboard/bugs",
                component: function() {
                    return Object(k.m)(n.e(37).then(n.bind(null, 747)))
                },
                name: "dashboard-bugs"
            }, {
                path: "/dashboard/cinema",
                component: function() {
                    return Object(k.m)(n.e(38).then(n.bind(null, 748)))
                },
                name: "dashboard-cinema"
            }, {
                path: "/dashboard/crash",
                component: function() {
                    return Object(k.m)(n.e(40).then(n.bind(null, 749)))
                },
                name: "dashboard-crash"
            }, {
                path: "/dashboard/donate",
                component: function() {
                    return Object(k.m)(n.e(41).then(n.bind(null, 750)))
                },
                name: "dashboard-donate"
            }, {
                path: "/dashboard/media",
                component: function() {
                    return Object(k.m)(n.e(44).then(n.bind(null, 751)))
                },
                name: "dashboard-media"
            }, {
                path: "/dashboard/promocodes",
                component: function() {
                    return Object(k.m)(n.e(47).then(n.bind(null, 752)))
                },
                name: "dashboard-promocodes"
            }, {
                path: "/dashboard/referals",
                component: function() {
                    return Object(k.m)(n.e(49).then(n.bind(null, 753)))
                },
                name: "dashboard-referals"
            }, {
                path: "/dashboard/restart",
                component: function() {
                    return Object(k.m)(n.e(50).then(n.bind(null, 754)))
                },
                name: "dashboard-restart"
            }, {
                path: "/dashboard/sql",
                component: function() {
                    return Object(k.m)(n.e(51).then(n.bind(null, 755)))
                },
                name: "dashboard-sql"
            }, {
                path: "/dashboard/testers",
                component: function() {
                    return Object(k.m)(n.e(52).then(n.bind(null, 756)))
                },
                name: "dashboard-testers"
            }, {
                path: "/support/dashbord",
                component: function() {
                    return Object(k.m)(n.e(62).then(n.bind(null, 757)))
                },
                name: "support-dashbord"
            }, {
                path: "/admin/complaints/stats",
                component: function() {
                    return Object(k.m)(n.e(11).then(n.bind(null, 716)))
                },
                name: "admin-complaints-stats"
            }, {
                path: "/admin/logs/admins",
                component: function() {
                    return Object(k.m)(n.e(14).then(n.bind(null, 758)))
                },
                name: "admin-logs-admins"
            }, {
                path: "/admin/logs/auth",
                component: function() {
                    return Object(k.m)(n.e(15).then(n.bind(null, 759)))
                },
                name: "admin-logs-auth"
            }, {
                path: "/admin/logs/chat",
                component: function() {
                    return Object(k.m)(n.e(16).then(n.bind(null, 760)))
                },
                name: "admin-logs-chat"
            }, {
                path: "/admin/logs/chip",
                component: function() {
                    return Object(k.m)(n.e(17).then(n.bind(null, 761)))
                },
                name: "admin-logs-chip"
            }, {
                path: "/admin/logs/donate",
                component: function() {
                    return Object(k.m)(n.e(18).then(n.bind(null, 762)))
                },
                name: "admin-logs-donate"
            }, {
                path: "/admin/logs/fraction",
                component: function() {
                    return Object(k.m)(n.e(19).then(n.bind(null, 763)))
                },
                name: "admin-logs-fraction"
            }, {
                path: "/admin/logs/inventory",
                component: function() {
                    return Object(k.m)(n.e(20).then(n.bind(null, 764)))
                },
                name: "admin-logs-inventory"
            }, {
                path: "/admin/logs/money",
                component: function() {
                    return Object(k.m)(n.e(21).then(n.bind(null, 765)))
                },
                name: "admin-logs-money"
            }, {
                path: "/admin/logs/promo",
                component: function() {
                    return Object(k.m)(n.e(22).then(n.bind(null, 766)))
                },
                name: "admin-logs-promo"
            }, {
                path: "/admin/logs/report",
                component: function() {
                    return Object(k.m)(n.e(23).then(n.bind(null, 767)))
                },
                name: "admin-logs-report"
            }, {
                path: "/dashboard/donate/replenishment",
                component: function() {
                    return Object(k.m)(n.e(42).then(n.bind(null, 768)))
                },
                name: "dashboard-donate-replenishment"
            }, {
                path: "/dashboard/promocodes/create",
                component: function() {
                    return Object(k.m)(n.e(46).then(n.bind(null, 769)))
                },
                name: "dashboard-promocodes-create"
            }, {
                path: "/",
                component: function() {
                    return Object(k.m)(n.e(57).then(n.bind(null, 770)))
                },
                name: "index"
            }, {
                path: "/support/dashbord/tiket/:id?",
                component: function() {
                    return Object(k.m)(n.e(63).then(n.bind(null, 771)))
                },
                name: "support-dashbord-tiket-id"
            }, {
                path: "/admin/complaints/:id",
                component: function() {
                    return Object(k.m)(n.e(9).then(n.bind(null, 772)))
                },
                name: "admin-complaints-id"
            }, {
                path: "/admin/rules/:id",
                component: function() {
                    return Object(k.m)(n.e(24).then(n.bind(null, 717)))
                },
                name: "admin-rules-id"
            }, {
                path: "/admin/search/:id",
                component: function() {
                    return Object(k.m)(n.e(26).then(n.bind(null, 718)))
                },
                name: "admin-search-id"
            }, {
                path: "/auth/unity/:id?",
                component: function() {
                    return Object(k.m)(n.e(30).then(n.bind(null, 773)))
                },
                name: "auth-unity-id"
            }, {
                path: "/dashboard/bugs/:id",
                component: function() {
                    return Object(k.m)(n.e(36).then(n.bind(null, 774)))
                },
                name: "dashboard-bugs-id"
            }, {
                path: "/dashboard/crash/:id",
                component: function() {
                    return Object(k.m)(Promise.all([n.e(72), n.e(39)]).then(n.bind(null, 778)))
                },
                name: "dashboard-crash-id"
            }, {
                path: "/dashboard/promocodes/:id",
                component: function() {
                    return Object(k.m)(n.e(45).then(n.bind(null, 775)))
                },
                name: "dashboard-promocodes-id"
            }, {
                path: "/dashboard/referals/:id",
                component: function() {
                    return Object(k.m)(n.e(48).then(n.bind(null, 719)))
                },
                name: "dashboard-referals-id"
            }, {
                path: "/complaints/:id",
                component: function() {
                    return Object(k.m)(n.e(31).then(n.bind(null, 720)))
                },
                name: "complaints-id"
            }, {
                path: "/legal/:id?",
                component: function() {
                    return Object(k.m)(n.e(59).then(n.bind(null, 776)))
                },
                name: "legal-id"
            }],
            fallback: !1
        };

        function O(t, e) {
            var base = e._app && e._app.basePath || A.base,
                n = new y.a(j(j({}, A), {}, {
                    base: base
                })),
                r = n.push;
            n.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return r.call(this, t, e, n)
            };
            var o = n.resolve.bind(n);
            return n.resolve = function(t, e, n) {
                return "string" == typeof t && (t = Object(w.c)(t)), o(t, e, n)
            }, n
        }
        var M = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(t, e) {
                    var n = e.parent,
                        data = e.data,
                        r = e.props,
                        o = n.$createElement;
                    data.nuxtChild = !0;
                    for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                    data.nuxtChildDepth = f;
                    var h = l[f] || d,
                        m = {};
                    I.forEach((function(t) {
                        void 0 !== h[t] && (m[t] = h[t])
                    }));
                    var v = {};
                    D.forEach((function(t) {
                        "function" == typeof h[t] && (v[t] = h[t].bind(c))
                    }));
                    var x = v.beforeEnter;
                    if (v.beforeEnter = function(t) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), x) return x.call(c, t)
                        }, !1 === h.css) {
                        var y = v.leave;
                        (!y || y.length < 2) && (v.leave = function(t, e) {
                            y && y.call(c, t), c.$nextTick(e)
                        })
                    }
                    var w = o("routerView", data);
                    return r.keepAlive && (w = o("keep-alive", {
                        props: r.keepAliveProps
                    }, [w])), o("transition", {
                        props: m,
                        on: v
                    }, [w])
                }
            },
            I = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            D = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            S = {
                props: ["error"],
                layout: "error"
            },
            N = n(8),
            R = Object(N.a)(S, (function() {
                return (0, this._self._c)("section")
            }), [], !1, null, null, null).exports,
            L = n(27),
            E = (n(39), {
                name: "Nuxt",
                components: {
                    NuxtChild: M,
                    NuxtError: R
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(t) {
                    this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(k.c)(this.$route.matched[0].path)(this.$route.params);
                        var t = Object(L.a)(this.$route.matched, 1)[0];
                        if (!t) return this.$route.path;
                        var e = t.components.default;
                        if (e && e.options) {
                            var n = e.options;
                            if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                        }
                        return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(t) {
                    var e = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return e.errorFromNuxtError = !1
                    })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return e.displayingNuxtError = !1
                    })), t(R, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : t("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }),
            z = (n(50), n(53), n(66), n(67), n(92), {
                name: "NuxtLoading",
                data: function() {
                    return {
                        percent: 0,
                        show: !1,
                        canSucceed: !0,
                        reversed: !1,
                        skipTimerCount: 0,
                        rtl: !1,
                        throttle: 200,
                        duration: 5e3,
                        continuous: !1
                    }
                },
                computed: {
                    left: function() {
                        return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                    }
                },
                beforeDestroy: function() {
                    this.clear()
                },
                methods: {
                    clear: function() {
                        clearInterval(this._timer), clearTimeout(this._throttle), clearTimeout(this._hide), this._timer = null
                    },
                    start: function() {
                        var t = this;
                        return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                            return t.startTimer()
                        }), this.throttle) : this.startTimer(), this
                    },
                    set: function(t) {
                        return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                    },
                    get: function() {
                        return this.percent
                    },
                    increase: function(t) {
                        return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                    },
                    decrease: function(t) {
                        return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                    },
                    pause: function() {
                        return clearInterval(this._timer), this
                    },
                    resume: function() {
                        return this.startTimer(), this
                    },
                    finish: function() {
                        return this.percent = this.reversed ? 0 : 100, this.hide(), this
                    },
                    hide: function() {
                        var t = this;
                        return this.clear(), this._hide = setTimeout((function() {
                            t.show = !1, t.$nextTick((function() {
                                t.percent = 0, t.reversed = !1
                            }))
                        }), 500), this
                    },
                    fail: function(t) {
                        return this.canSucceed = !1, this
                    },
                    startTimer: function() {
                        var t = this;
                        this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                            t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                        }), 100)
                    }
                },
                render: function(t) {
                    var e = t(!1);
                    return this.show && (e = t("div", {
                        staticClass: "nuxt-progress",
                        class: {
                            "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                        },
                        style: {
                            width: this.percent + "%",
                            left: this.left
                        }
                    })), e
                }
            }),
            P = (n(298), Object(N.a)(z, undefined, undefined, !1, null, null, null).exports),
            T = (n(300), n(323), n(325), Object(N.a)({}, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "layout-dashboard"
                }, [e("Header"), t._v(" "), e("Nuxt"), t._v(" "), e("notifications", {
                    attrs: {
                        group: "foo",
                        position: "bottom left",
                        width: "100%"
                    }
                })], 1)
            }), [], !1, null, null, null)),
            B = T.exports;
        installComponents(T, {
            Header: n(110).default
        });
        n(329);
        var U = Object(N.a)({}, (function() {
                var t = this._self._c;
                return t("div", {
                    staticClass: "layout-default"
                }, [t("Nuxt")], 1)
            }), [], !1, null, null, null).exports,
            V = (n(331), Object(N.a)({}, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "layout-landing"
                }, [e("LandingHeader"), t._v(" "), e("Nuxt"), t._v(" "), e("LandingFooter"), t._v(" "), e("notifications", {
                    attrs: {
                        group: "foo",
                        position: "bottom left",
                        width: "100%"
                    }
                })], 1)
            }), [], !1, null, null, null)),
            G = V.exports;
        installComponents(V, {
            LandingHeader: n(148).default,
            LandingFooter: n(223).default
        });
        n(377);
        var $ = Object(N.a)({}, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "layout-site"
                }, [e("LandingHeader"), t._v(" "), e("Nuxt"), t._v(" "), e("LandingFooter")], 1)
            }), [], !1, null, null, null),
            F = $.exports;
        installComponents($, {
            LandingHeader: n(148).default,
            LandingFooter: n(223).default
        });
        n(380);
        var H = Object(N.a)({}, (function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "support-layout"
                }, [e("Header"), t._v(" "), e("Nuxt"), t._v(" "), e("Footer")], 1)
            }), [], !1, null, null, null),
            Z = H.exports;
        installComponents(H, {
            Header: n(110).default,
            Footer: n(137).default
        });
        var Q = Object(N.a)({}, (function() {
            return (0, this._self._c)("Nuxt")
        }), [], !1, null, null, null).exports;

        function J(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Y(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        var K = {
                _dashboard: Object(k.s)(B),
                _default: Object(k.s)(U),
                _landing: Object(k.s)(G),
                _site: Object(k.s)(F),
                _support: Object(k.s)(Z),
                _unity: Object(k.s)(Q)
            },
            W = {
                render: function(t, e) {
                    var n = t("NuxtLoading", {
                            ref: "loading"
                        }),
                        r = t(this.layout || "nuxt"),
                        o = t("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [r]),
                        c = t("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(t) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [o]);
                    return t("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [n, c])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    l.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.$loading = t.$refs.loading;
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((n = Object(k.h)(t.$route)).length) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return t.$loading.start(), r = n.map(function() {
                                            var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                                var p, r, o, component;
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return p = [], n.$options.fetch && n.$options.fetch.length && p.push(Object(k.q)(n.$options.fetch, t.context)), n.$options.asyncData && p.push(Object(k.q)(n.$options.asyncData, t.context).then((function(t) {
                                                                for (var e in t) l.default.set(n.$data, e, t[e])
                                                            }))), e.next = 5, Promise.all(p);
                                                        case 5:
                                                            p = [], n.$fetch && p.push(n.$fetch()), r = J(Object(k.e)(n.$vnode.componentInstance));
                                                            try {
                                                                for (r.s(); !(o = r.n()).done;) component = o.value, p.push(component.$fetch())
                                                            } catch (t) {
                                                                r.e(t)
                                                            } finally {
                                                                r.f()
                                                            }
                                                            return e.abrupt("return", Promise.all(p));
                                                        case 10:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()), e.prev = 5, e.next = 8, Promise.all(r);
                                    case 8:
                                        e.next = 15;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(k.k)(e.t0), t.error(e.t0);
                                    case 15:
                                        t.$loading.finish();
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var t = (R.options || R).layout;
                            "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                        }
                    },
                    setLayout: function(t) {
                        return t && K["_" + t] || (t = "default"), this.layoutName = t, this.layout = K["_" + t], this.layout
                    },
                    loadLayout: function(t) {
                        return t && K["_" + t] || (t = "default"), Promise.resolve(K["_" + t])
                    }
                },
                components: {
                    NuxtLoading: P
                }
            };
        n(86);
        l.default.use(d.a);
        var X = ["state", "getters", "actions", "mutations"],
            tt = {};
        tt.modules = tt.modules || {}, ot(n(382), "admin.js"), ot(n(383), "dashboard.js"), ot(n(384), "header.js"), ot(n(385), "news.js");
        var et = tt instanceof Function ? tt : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, tt))
        };

        function nt(t, e) {
            if (t.state && "function" != typeof t.state) {
                console.warn("'state' should be a method that returns an object in ".concat(e));
                var n = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: function() {
                        return n
                    }
                })
            }
            return t
        }

        function ot(t, e) {
            t = t.default || t;
            var n = e.replace(/\.(js|mjs)$/, "").split("/"),
                r = n[n.length - 1],
                o = "store/".concat(e);
            if (t = "state" === r ? function(t, e) {
                    if ("function" != typeof t) {
                        console.warn("".concat(e, " should export a method that returns an object"));
                        var n = Object.assign({}, t);
                        return function() {
                            return n
                        }
                    }
                    return nt(t, e)
                }(t, o) : nt(t, o), X.includes(r)) {
                var c = r;
                it(at(tt, n, {
                    isProperty: !0
                }), t, c)
            } else {
                "index" === r && (n.pop(), r = n[n.length - 1]);
                for (var l = at(tt, n), d = 0, f = X; d < f.length; d++) {
                    var h = f[d];
                    it(l, t[h], h)
                }!1 === t.namespaced && delete l.namespaced
            }
        }

        function at(t, e) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                r = void 0 !== n && n;
            if (!e.length || r && 1 === e.length) return t;
            var o = e.shift();
            return t.modules[o] = t.modules[o] || {}, t.modules[o].namespaced = !0, t.modules[o].modules = t.modules[o].modules || {}, at(t.modules[o], e, {
                isProperty: r
            })
        }

        function it(t, e, n) {
            e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
        }
        n(109);
        var st = function() {
                return Promise.resolve().then(n.bind(null, 142)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            ct = function() {
                return Promise.resolve().then(n.bind(null, 137)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            ut = function() {
                return Promise.resolve().then(n.bind(null, 110)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            lt = function() {
                return Promise.resolve().then(n.bind(null, 144)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            pt = function() {
                return n.e(4).then(n.bind(null, 428)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            ft = function() {
                return n.e(6).then(n.bind(null, 407)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            ht = function() {
                return n.e(2).then(n.bind(null, 424)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            mt = function() {
                return n.e(3).then(n.bind(null, 425)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            gt = function() {
                return n.e(5).then(n.bind(null, 777)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            bt = function() {
                return Promise.resolve().then(n.bind(null, 223)).then((function(t) {
                    return xt(t.default || t)
                }))
            },
            vt = function() {
                return Promise.resolve().then(n.bind(null, 148)).then((function(t) {
                    return xt(t.default || t)
                }))
            };

        function xt(t) {
            if (!t || !t.functional) return t;
            var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
            return {
                render: function(n) {
                    var r = {},
                        o = {};
                    for (var c in this.$attrs) e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                    return n(t, {
                        on: this.$listeners,
                        attrs: r,
                        props: o,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var yt in r) l.default.component(yt, r[yt]), l.default.component("Lazy" + yt, r[yt]);
        var wt = n(227),
            kt = n.n(wt);

        function Ct(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function jt(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Ct(Object(source), !0).forEach((function(e) {
                    Object(c.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Ct(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var _t = function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                    var r, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = e.$config && e.$config.googleAnalytics || {}, "function" != typeof(o = jt(jt({}, {
                                        dev: !0,
                                        debug: {
                                            sendHitTask: !0
                                        },
                                        id: "UA-251306922-1"
                                    }), r)).asyncID) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 6, o.asyncID(e);
                            case 6:
                                o.id = t.sent;
                            case 7:
                                l.default.use(kt.a, jt(jt({}, {
                                    router: e.app.router
                                }), o)), e.$ga = l.default.$ga, n("ga", l.default.$ga);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }(),
            At = n(141),
            Ot = ["useRuntimeConfig", "metrikaUrl"],
            Mt = ["id"],
            It = function(t) {
                var e = t.app.router,
                    n = t.$config,
                    r = {
                        useRuntimeConfig: "yandexMetrika",
                        id: "91536809",
                        clickmap: !0,
                        trackLinks: !0,
                        accurateTrackBounce: !0,
                        webvisor: !0,
                        metrikaUrl: "https://mc.yandex.ru/metrika/tag.js"
                    },
                    o = r.useRuntimeConfig,
                    c = r.metrikaUrl,
                    l = Object(At.a)(r, Ot);
                n && o && Object.assign(l, n[o]);
                var d, f, h, m, i, v, a, x = l.id,
                    y = Object(At.a)(l, Mt),
                    w = !1,
                    k = (e.options.base || "/").replace(/\/$/, "");
                e.onReady((function() {
                    w = !0
                })), void 0 === window.ym && (w || (d = window, f = document, h = "script", m = c, d[i = "ym"] = d[i] || function() {
                    (d[i].a = d[i].a || []).push(arguments)
                }, d[i].l = 1 * new Date, v = f.createElement(h), a = f.getElementsByTagName(h)[0], v.async = 1, v.src = m, a.parentNode.insertBefore(v, a), ym(x, "init", y)), e.afterEach((function(t, e) {
                    ym(x, "hit", k + t.fullPath, {
                        referer: k + e.fullPath
                    })
                })))
            },
            Dt = n(228),
            St = n.n(Dt),
            Nt = function(t, e) {
                var n = t.req,
                    r = t.res,
                    o = !0;
                e("cookies", St()(n, r, o))
            },
            Rt = n(88),
            Lt = n.n(Rt),
            Et = n(229);

        function zt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function Pt(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? zt(Object(source), !0).forEach((function(e) {
                    Object(c.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : zt(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }

        function Tt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return Bt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Bt(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0,
                l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done, t
                },
                e: function(t) {
                    l = !0, o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l) throw o
                    }
                }
            }
        }

        function Bt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        for (var Ut = {
                setBaseURL: function(t) {
                    this.defaults.baseURL = t
                },
                setHeader: function(t, e) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        o = Tt(Array.isArray(r) ? r : [r]);
                    try {
                        for (o.s(); !(n = o.n()).done;) {
                            var c = n.value;
                            e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                        }
                    } catch (t) {
                        o.e(t)
                    } finally {
                        o.f()
                    }
                },
                setToken: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        r = t ? (e ? e + " " : "") + t : null;
                    this.setHeader("Authorization", r, n)
                },
                onRequest: function(t) {
                    this.interceptors.request.use((function(e) {
                        return t(e) || e
                    }))
                },
                onResponse: function(t) {
                    this.interceptors.response.use((function(e) {
                        return t(e) || e
                    }))
                },
                onRequestError: function(t) {
                    this.interceptors.request.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onResponseError: function(t) {
                    this.interceptors.response.use(void 0, (function(e) {
                        return t(e) || Promise.reject(e)
                    }))
                },
                onError: function(t) {
                    this.onRequestError(t), this.onResponseError(t)
                },
                create: function(t) {
                    return $t(Object(Et.a)(t, this.defaults))
                }
            }, Vt = function() {
                var t = Gt[qt];
                Ut["$" + t] = function() {
                    return this[t].apply(this, arguments).then((function(t) {
                        return t && t.data
                    }))
                }
            }, qt = 0, Gt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; qt < Gt.length; qt++) Vt();
        var $t = function(t) {
                var e = Lt.a.create(t);
                return e.CancelToken = Lt.a.CancelToken, e.isCancel = Lt.a.isCancel,
                    function(t) {
                        for (var e in Ut) t[e] = Ut[e].bind(t)
                    }(e), e.onRequest((function(t) {
                        t.headers = Pt(Pt({}, e.defaults.headers.common), t.headers)
                    })), Ft(e), e
            },
            Ft = function(t) {
                var e = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    n = function() {
                        var t = "undefined" != typeof window && window.$nuxt;
                        return t && t.$loading && t.$loading.set ? t.$loading : e
                    },
                    r = 0;
                t.onRequest((function(t) {
                    t && !1 === t.progress || r++
                })), t.onResponse((function(t) {
                    t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                })), t.onError((function(t) {
                    t && t.config && !1 === t.config.progress || (r--, Lt.a.isCancel(t) ? r <= 0 && (r = 0, n().finish()) : (n().fail(), n().finish()))
                }));
                var o = function(t) {
                    if (r && t.total) {
                        var progress = 100 * t.loaded / (t.total * r);
                        n().set(Math.min(100, progress))
                    }
                };
                t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
            },
            Ht = function(t, e) {
                var n = t.$config && t.$config.axios || {},
                    r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/";
                var o = $t({
                    baseURL: r,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                t.$axios = o, e("axios", o)
            },
            Zt = n(230),
            Qt = n.n(Zt);
        l.default.use(Qt.a);
        var Jt = n(232);
        n(404);

        function Yt(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function Kt(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Yt(Object(source), !0).forEach((function(e) {
                    Object(c.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Yt(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        l.default.component("date-picker", Jt.a), l.default.component(m.a.name, m.a), l.default.component(x.a.name, Kt(Kt({}, x.a), {}, {
            render: function(t, e) {
                return x.a._warned || (x.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), x.a.render(t, e)
            }
        })), l.default.component(M.name, M), l.default.component("NChild", M), l.default.component(E.name, E), Object.defineProperty(l.default.prototype, "$nuxt", {
            get: function() {
                var t = this.$root ? this.$root.$options.$nuxt : null;
                return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
        }), l.default.use(f.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Wt = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            Xt = d.a.Store.prototype.registerModule;

        function te(path, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = Array.isArray(path) ? !!path.reduce((function(t, path) {
                    return t && t[path]
                }), this.state) : path in this.state;
            return Xt.call(this, path, t, Kt({
                preserveState: n
            }, e))
        }

        function ee(t) {
            return ne.apply(this, arguments)
        }

        function ne() {
            return ne = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                var n, r, c, d, f, h, path, m, v = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return m = function(t, e) {
                                if (!t) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                d[t = "$" + t] = e, d.context[t] || (d.context[t] = e), r[t] = d[t];
                                var n = "__nuxt_" + t + "_installed__";
                                l.default[n] || (l.default[n] = !0, l.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.default.prototype, t) || Object.defineProperty(l.default.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                })))
                            }, n = v.length > 1 && void 0 !== v[1] ? v[1] : {}, r = et(e), t.next = 5, O(0, n);
                        case 5:
                            return c = t.sent, r.$router = c, r.registerModule = te, d = Kt({
                                head: {
                                    title: "Grand Mobile игра под Android и IOS",
                                    htmlAttrs: {
                                        lang: "ru"
                                    },
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: "Grand Mobile - это игровые сервера КРМП РП с уникальным модом под устройства Android и IOS. Тысячи игроков и уникальная графика ждут тебя."
                                    }, {
                                        name: "format-detection",
                                        content: "telephone=no"
                                    }, {
                                        hid: "og:type",
                                        name: "og:type",
                                        content: "website"
                                    }, {
                                        hid: "og:title",
                                        name: "og:title",
                                        content: "Grand Mobile | КРМП РП под Android и IOS"
                                    }, {
                                        hid: "og:description",
                                        name: "og:description",
                                        content: "Grand Mobile - это игровой сервер КРМП РП с уникальным модом под устройства Android и IOS. Тысячи игроков и уникальная графика ждут тебя."
                                    }, {
                                        hid: "og:url",
                                        name: "og:url",
                                        content: "https://grnd.gg/"
                                    }, {
                                        hid: "og:image",
                                        name: "og:image",
                                        content: "https://grnd.gg/images/preview.jpg"
                                    }, {
                                        hid: "og:site_name",
                                        name: "og:site_name",
                                        content: "GTA Grand Mobile"
                                    }, {
                                        hid: "og:locale",
                                        name: "og:locale",
                                        content: "ru_RU"
                                    }],
                                    script: [{
                                        type: "application/ld+json",
                                        json: {
                                            "@context": "https://schema.org",
                                            "@type": "Organization",
                                            url: "https://grnd.gg/",
                                            logo: "https://grnd.gg/favicon.ico"
                                        }
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "favicon.ico"
                                    }, {
                                        href: "https://mc.yandex.ru/metrika/tag.js",
                                        rel: "preload",
                                        as: "script"
                                    }],
                                    style: []
                                },
                                store: r,
                                router: c,
                                nuxt: {
                                    defaultTransition: Wt,
                                    transitions: [Wt],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, Wt, {
                                                name: t
                                            }) : Object.assign({}, Wt, t) : Wt
                                        })), this.$options.nuxt.transitions = t, t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null, d.context._errored = Boolean(t), t = t ? Object(k.p)(t) : null;
                                        var n = d.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                    }
                                }
                            }, W), r.app = d, f = e ? e.next : function(t) {
                                return d.router.push(t)
                            }, e ? h = c.resolve(e.url).route : (path = Object(k.f)(c.options.base, c.options.mode), h = c.resolve(path).route), t.next = 14, Object(k.t)(d, {
                                store: r,
                                route: h,
                                next: f,
                                error: d.nuxt.error.bind(d),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                ssrContext: e
                            });
                        case 14:
                            m("config", n), window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state), t.next = 20;
                            break;
                        case 20:
                            if ("function" != typeof _t) {
                                t.next = 23;
                                break
                            }
                            return t.next = 23, _t(d.context, m);
                        case 23:
                            if ("function" != typeof It) {
                                t.next = 26;
                                break
                            }
                            return t.next = 26, It(d.context, m);
                        case 26:
                            if ("function" != typeof Nt) {
                                t.next = 29;
                                break
                            }
                            return t.next = 29, Nt(d.context, m);
                        case 29:
                            if ("function" != typeof Ht) {
                                t.next = 32;
                                break
                            }
                            return t.next = 32, Ht(d.context, m);
                        case 32:
                            t.next = 35;
                            break;
                        case 35:
                            t.next = 38;
                            break;
                        case 38:
                            return t.next = 41, new Promise((function(t, e) {
                                if (!c.resolve(d.context.route.fullPath).route.matched.length) return t();
                                c.replace(d.context.route.fullPath, t, (function(n) {
                                    if (!n._isRouter) return e(n);
                                    if (2 !== n.type) return t();
                                    var r = c.afterEach(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(n, o) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 3, Object(k.j)(n);
                                                    case 3:
                                                        d.context.route = e.sent, d.context.params = n.params || {}, d.context.query = n.query || {}, r(), t();
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }))
                            }));
                        case 41:
                            return t.abrupt("return", {
                                store: r,
                                app: d,
                                router: c
                            });
                        case 42:
                        case "end":
                            return t.stop()
                    }
                }), t)
            }))), ne.apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(28);
        var r = n(4),
            o = (n(31), {
                name: "Header",
                data: function() {
                    return {
                        menu: [{
                            name: "Поддержка",
                            url: "/support"
                        }, {
                            name: "Новости",
                            url: "/news"
                        }, {
                            name: "Wiki",
                            url: "/wiki"
                        }, {
                            name: "Жалобы",
                            url: "/complaints"
                        }],
                        login: "",
                        name: "Grand_Mobile",
                        server: "0",
                        isAuthMenu: !1,
                        admins: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$axios.post("/api/auth/menu");
                                case 2:
                                    o = e.sent, (data = o.data).admin && t.menu.push({
                                        name: "Админ",
                                        url: "/admin"
                                    }), data.staff && t.menu.push({
                                        name: "Управление",
                                        url: "/dashboard"
                                    }), t.login = data.login, null !== (n = data.admin) && void 0 !== n && n.name && (t.name = data.admin.name), null !== (r = data.admin) && void 0 !== r && r.server && (t.server += data.admin.server);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: {
                    authMenu: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, data;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$axios.post("/api/auth/admin");
                                    case 2:
                                        n = e.sent, (data = n.data).error ? t.admins = [] : t.admins = data, t.isAuthMenu = !t.isAuthMenu;
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    change: function(t) {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, e.$axios.put("/api/auth/admin", t);
                                    case 2:
                                        e.$router.go(e.$router.currentRoute);
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    logout: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$axios.get("/api/auth/logout");
                                    case 2:
                                        t.$router.push("/");
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            }),
            c = (n(327), n(8)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                return e("header", {
                    staticClass: "header"
                }, [e("svg", {
                    attrs: {
                        width: "92",
                        height: "58",
                        viewBox: "0 0 92 58",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M74.2054 42L72.4869 50.64C72.2916 51.66 71.901 53.6 71.8229 54.2H71.7448C71.6276 53.6 71.3152 51.86 71.0418 50.44L69.4014 42.22H68.0734L66.433 50.44C66.1596 51.86 65.8471 53.6 65.73 54.2H65.6519C65.5737 53.6 65.1832 51.66 64.9879 50.64L63.2694 42H62L65.0269 56H66.3744L68.0344 48.38C68.2882 47.26 68.6007 45.1 68.6983 43.98H68.7764C68.8741 45.1 69.1865 47.26 69.4404 48.38L71.1004 56H72.4478L75.4748 42H74.2054Z",
                        fill: "#FFD02B"
                    }
                }), e("path", {
                    attrs: {
                        d: "M77.1916 42V56H78.4024V42H77.1916Z",
                        fill: "#FFD02B"
                    }
                }), e("path", {
                    attrs: {
                        d: "M87.8312 56H89.2764L84.3747 48.1L88.7296 42H87.2258L83.7302 47.04L82.6171 48.68V42H81.4063V56H82.6171V50.54L83.5935 49.18L87.8312 56Z",
                        fill: "#FFD02B"
                    }
                }), e("path", {
                    attrs: {
                        d: "M90.7892 42V56H92V42H90.7892Z",
                        fill: "#FFD02B"
                    }
                }), e("path", {
                    attrs: {
                        d: "M24.8675 2.52577C17.052 3.01877 9.91505 6.88737 5.21995 13.1804C2.54615 16.7677 0.806155 21.0365 0.220355 25.4619C0.0376548 26.8452 -0.0116452 27.7239 0.00865482 29.3566C0.0318548 31.2909 0.191355 32.7786 0.568355 34.5331C1.82115 40.3882 5.04305 45.6633 9.70045 49.4884C13.5836 52.6784 18.299 54.6968 23.287 55.3029C24.8327 55.4885 25.4765 55.5059 31.3809 55.5059H36.4443L37.5666 52.7538C38.1814 51.24 38.686 49.9872 38.686 49.9698C38.686 49.9466 36.8706 49.9379 32.2422 49.9379C25.8129 49.9379 25.3692 49.9321 24.389 49.8335C18.1946 49.2158 12.5512 45.8112 9.05665 40.5854C6.31906 36.4906 5.12136 31.5548 5.66946 26.6509C6.15376 22.3444 7.98365 18.267 10.8837 15.0364C11.3013 14.5695 12.1974 13.6763 12.6411 13.2819C14.9031 11.2809 17.6929 9.73517 20.5697 8.89127C21.9762 8.47657 23.142 8.26197 24.8965 8.08507C25.1604 8.05897 28.9594 8.04737 40.5072 8.03577L55.7728 8.01837L56.8864 5.28077C57.4983 3.77567 58 2.53157 58 2.51997C58 2.48807 25.375 2.49387 24.8675 2.52577Z",
                        fill: "url(#paint0_linear_1649_12423)"
                    }
                }), e("path", {
                    attrs: {
                        d: "M26.9407 13.1691C24.7338 13.2677 22.5965 13.8245 20.5897 14.8221C18.9425 15.6428 17.7187 16.5273 16.3963 17.8468C15.5234 18.7226 14.955 19.4157 14.317 20.3872C12.8728 22.5912 12.0492 24.9634 11.7679 27.7242C11.7186 28.2114 11.7186 30.0819 11.7679 30.5807C12.0347 33.2864 12.8786 35.7079 14.3199 37.9177C15.6017 39.8868 17.391 41.6123 19.421 42.839C21.5525 44.1295 23.8058 44.8603 26.3752 45.101C26.6971 45.13 28.2602 45.1387 33.9268 45.1387H41.0724L45.0135 35.6847C47.1827 30.485 48.9749 26.193 48.9981 26.1495C49.0213 26.1031 49.0387 26.0538 49.0387 26.0393C49.0387 26.0248 45.1846 26.0132 39.257 26.0132H29.4753L26.1983 31.8567L26.3143 31.877C26.381 31.8857 28.3182 31.9002 30.6237 31.9031C32.9292 31.906 36.0235 31.9176 37.4996 31.9263L40.185 31.9437L36.8674 39.8897H31.9983C28.121 39.8897 27.0596 39.881 26.7812 39.852C24.6961 39.6171 22.8082 38.8428 21.1784 37.5523C20.7289 37.1956 19.856 36.3256 19.5051 35.8877C18.2233 34.2811 17.4432 32.4135 17.1909 30.3487C17.13 29.847 17.1387 28.3332 17.2054 27.8402C17.3765 26.5758 17.6955 25.5144 18.2262 24.4327C19.7574 21.3065 22.698 19.1112 26.1113 18.5457C26.352 18.508 26.6739 18.4587 26.8247 18.4384C27.0306 18.4123 29.4318 18.4036 36.4701 18.3949L45.8429 18.3862L45.4369 19.3577C45.2136 19.8942 45.0367 20.3408 45.0483 20.3495C45.0628 20.364 51.3645 20.4481 51.3819 20.4336C51.3964 20.4191 54.3776 13.2648 54.3921 13.201L54.4095 13.1372L40.9303 13.143C33.515 13.143 27.2191 13.1575 26.9407 13.1691Z",
                        fill: "url(#paint1_linear_1649_12423)"
                    }
                }), e("defs", [e("linearGradient", {
                    attrs: {
                        id: "paint0_linear_1649_12423",
                        x1: "-4.33294e-07",
                        y1: "29",
                        x2: "59",
                        y2: "28.5",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        "stop-color": "white"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    }
                })], 1), e("linearGradient", {
                    attrs: {
                        id: "paint1_linear_1649_12423",
                        x1: "-4.33294e-07",
                        y1: "29",
                        x2: "59",
                        y2: "28.5",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        "stop-color": "white"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    }
                })], 1)], 1)]), t._v(" "), e("nav", [e("ul", [t._l(t.menu, (function(n) {
                    return e("li", [e("NuxtLink", {
                        attrs: {
                            to: n.url
                        }
                    }, [t._v(t._s(n.name))])], 1)
                })), t._v(" "), e("li", {
                    staticClass: "header-login"
                }, [e("div", {
                    staticClass: "auth",
                    on: {
                        click: t.authMenu
                    }
                }, [e("svg", {
                    attrs: {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M14 0.666672C6.77196 0.666672 0.666626 6.77201 0.666626 14C0.666626 21.228 6.77196 27.3333 14 27.3333C21.228 27.3333 27.3333 21.228 27.3333 14C27.3333 6.77201 21.228 0.666672 14 0.666672ZM14 7.33334C16.3026 7.33334 18 9.02934 18 11.3333C18 13.6373 16.3026 15.3333 14 15.3333C11.6986 15.3333 9.99996 13.6373 9.99996 11.3333C9.99996 9.02934 11.6986 7.33334 14 7.33334ZM7.19196 20.3627C8.38796 18.6027 10.3826 17.4293 12.6666 17.4293H15.3333C17.6186 17.4293 19.612 18.6027 20.808 20.3627C19.104 22.1867 16.6866 23.3333 14 23.3333C11.3133 23.3333 8.89596 22.1867 7.19196 20.3627Z",
                        fill: "url(#paint0_linear_1660_11705)"
                    }
                }), e("defs", [e("linearGradient", {
                    attrs: {
                        id: "paint0_linear_1660_11705",
                        x1: "1",
                        y1: "14",
                        x2: "27",
                        y2: "14",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        "stop-color": "white"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "0.82063",
                        "stop-color": "white",
                        "stop-opacity": "0.340683"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0"
                    }
                })], 1)], 1)]), t._v(" "), e("div", [e("div", {
                    staticClass: "login"
                }, [t._v(t._s(t.login))]), t._v(" "), e("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.name))]), t._v(" "), e("div", {
                    staticClass: "server"
                }, [t._v("server " + t._s(t.server))])])]), t._v(" "), t.isAuthMenu ? e("div", {
                    staticClass: "menu"
                }, [e("svg", {
                    attrs: {
                        width: "44",
                        height: "44",
                        viewBox: "0 0 44 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M22 0.333008C10.2545 0.333008 0.333336 10.2542 0.333336 21.9997C0.333336 33.7452 10.2545 43.6663 22 43.6663C33.7455 43.6663 43.6667 33.7452 43.6667 21.9997C43.6667 10.2542 33.7455 0.333008 22 0.333008ZM22 11.1663C25.7418 11.1663 28.5 13.9223 28.5 17.6663C28.5 21.4103 25.7418 24.1663 22 24.1663C18.2603 24.1663 15.5 21.4103 15.5 17.6663C15.5 13.9223 18.2603 11.1663 22 11.1663ZM10.937 32.339C12.8805 29.479 16.1218 27.5723 19.8333 27.5723H24.1667C27.8803 27.5723 31.1195 29.479 33.063 32.339C30.294 35.303 26.3658 37.1663 22 37.1663C17.6342 37.1663 13.706 35.303 10.937 32.339Z",
                        fill: "white"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "login"
                }, [t._v(t._s(t.login))]), t._v(" "), e("div", {
                    staticClass: "name"
                }, [t._v(t._s(t.name))]), t._v(" "), e("div", {
                    staticClass: "server"
                }, [t._v("server " + t._s(t.server))]), t._v(" "), e("div", {
                    staticClass: "logout",
                    on: {
                        click: t.logout
                    }
                }, [t._v("Выйти с аккаунта")]), t._v(" "), e("ul", t._l(t.admins, (function(n) {
                    return e("li", {
                        on: {
                            click: function(e) {
                                return t.change(n)
                            }
                        }
                    }, [e("svg", {
                        attrs: {
                            width: "14",
                            height: "16",
                            viewBox: "0 0 14 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M10.808 4C10.808 1.696 9.11067 0 6.808 0C4.50667 0 2.808 1.696 2.808 4C2.808 6.304 4.50667 8 6.808 8C9.11067 8 10.808 6.304 10.808 4Z",
                            fill: "white"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M5.47467 10.096C3.19067 10.096 1.196 11.2693 0 13.0293C1.704 14.8533 4.12133 16 6.808 16C9.49467 16 11.912 14.8533 13.616 13.0293C12.42 11.2693 10.4267 10.096 8.14133 10.096H5.47467Z",
                            fill: "white"
                        }
                    })]), t._v(" "), e("div", [e("div", {
                        staticClass: "name"
                    }, [t._v(t._s(n.name))]), t._v(" "), e("div", {
                        staticClass: "server"
                    }, [t._v("server 0" + t._s(n.server))])])])
                })), 0)]) : t._e()])], 2)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Header: n(110).default
        })
    }, , , , function(t, e, n) {
        "use strict";
        n(92), n(15), n(33), n(86), n(109), n(69), n(43), n(50), n(39), n(28), n(53), n(40), n(22), n(34), n(66), n(67), n(45);
        var r = n(1);

        function o(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, l = !0,
                d = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return l = t.done, t
                },
                e: function(t) {
                    d = !0, o = t
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (d) throw o
                    }
                }
            }
        }

        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        var l = window.requestIdleCallback || function(t) {
                var e = Date.now();
                return setTimeout((function() {
                    t({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - e))
                        }
                    })
                }), 1)
            },
            d = window.cancelIdleCallback || function(t) {
                clearTimeout(t)
            },
            f = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                t.forEach((function(t) {
                    var e = t.intersectionRatio,
                        link = t.target;
                    e <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        e.a = {
            name: "NuxtLink",
            extends: r.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    })).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        f.unobserve(this.$el);
                        var t, e = o(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = t.value,
                                    r = n();
                                r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
                name: "Footer"
            },
            o = (n(375), n(8)),
            component = Object(o.a)(r, (function() {
                return (0, this._self._c)("footer", {
                    staticClass: "footer"
                })
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Footer: n(137).default
        })
    }, function(t, e, n) {
        "use strict";
        e.a = {}
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(28);
        var r = {
                name: "Button",
                props: {
                    name: {
                        default: "Кнопка",
                        type: String
                    },
                    width: {
                        default: "300px",
                        type: String
                    },
                    height: {
                        default: "60px",
                        type: String
                    },
                    background: {
                        default: "#FFD02B",
                        type: String
                    },
                    backgroundHover: {
                        default: "#EEC227",
                        type: String
                    }
                },
                computed: {
                    cssVars: function() {
                        return {
                            "--width": this.width,
                            "--height": this.height,
                            "--background": this.background,
                            "--backgroundHover": this.backgroundHover
                        }
                    }
                }
            },
            o = (n(366), n(8)),
            component = Object(o.a)(r, (function() {
                var t = this;
                return (0, t._self._c)("button", {
                    staticClass: "button-component",
                    style: {
                        width: t.width,
                        height: t.height,
                        background: t.background
                    }
                }, [t._v(t._s(t.name))])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Button: n(142).default
        })
    }, , function(t, e, n) {
        "use strict";
        n.r(e);
        n(72), n(50);
        var r = {
                name: "Input",
                props: {
                    type: {
                        type: String,
                        default: "text"
                    },
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    width: {
                        type: String,
                        default: "300px"
                    },
                    height: {
                        type: String,
                        default: "60px"
                    },
                    value: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        model: this.value
                    }
                },
                watch: {
                    model: function(t) {
                        this.$emit("input", t)
                    }
                }
            },
            o = (n(364), n(8)),
            component = Object(o.a)(r, (function() {
                var t = this,
                    e = t._self._c;
                return "checkbox" === t.type ? e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.model,
                        expression: "model"
                    }],
                    staticClass: "input-component",
                    style: {
                        width: t.width,
                        height: t.height
                    },
                    attrs: {
                        placeholder: t.placeholder,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.model) ? t._i(t.model, null) > -1 : t.model
                    },
                    on: {
                        change: function(e) {
                            var n = t.model,
                                r = e.target,
                                o = !!r.checked;
                            if (Array.isArray(n)) {
                                var c = t._i(n, null);
                                r.checked ? c < 0 && (t.model = n.concat([null])) : c > -1 && (t.model = n.slice(0, c).concat(n.slice(c + 1)))
                            } else t.model = o
                        }
                    }
                }) : "radio" === t.type ? e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.model,
                        expression: "model"
                    }],
                    staticClass: "input-component",
                    style: {
                        width: t.width,
                        height: t.height
                    },
                    attrs: {
                        placeholder: t.placeholder,
                        type: "radio"
                    },
                    domProps: {
                        checked: t._q(t.model, null)
                    },
                    on: {
                        change: function(e) {
                            t.model = null
                        }
                    }
                }) : e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.model,
                        expression: "model"
                    }],
                    staticClass: "input-component",
                    style: {
                        width: t.width,
                        height: t.height
                    },
                    attrs: {
                        placeholder: t.placeholder,
                        type: t.type
                    },
                    domProps: {
                        value: t.model
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.model = e.target.value)
                        }
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Input: n(144).default
        })
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(4),
            o = (n(31), n(22), n(46), n(236), n(115), n(15), {
                name: "LandingHeader",
                data: function() {
                    return {
                        burger: !1,
                        user: !1,
                        menu: !1,
                        data: [{
                            url: "/donate",
                            title: "Пополнение",
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="23" viewBox="0 0 22 23"><image id="wallet" width="22" height="23" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAYAAAAP6L+eAAABf0lEQVQ4jbWVsUoDQRCGvxwq2mjrAyiI2EsKEbRSVLSz9xEEKyv1XaxtxMY6hWIvpvIRLCSJlxvZMKuTdeeSKC78N9yx9+3Mv7N3iMhvVIhIU0QuRKQlIhspoxEuY45pYAvYB3aAeaCregCO7eSpEbA5YBc4BPb0/kPVA/qqVaAJtOrAC8CBwgJ0FhAFBGBlgFYnHngdOAK2tewwnjVGWGkyjllHBdYS0A4vTOLxRKP4F6qmHzy8UgsamTmVll0aK3qJunzHJ+B6SqGnzsLiwAKg48TFMKfQTL1RJUo7oXTiSuGUH7P1YOUIeFW3eTbbXN/m4H2dLx5YRthQOtl/yTvSng250h+BG+DdJNHJgdNs6+BvwKV2ytDIWSE15ed8zR7dXMY5b1NgvJ8BzoBbtUJUP6yoK9/rhDVgWe2IH6fX1ArPhnE6oTJxqN3GheYqsdCgweZJYsO48HSR+N7A5wC+/+PxtdAIbofNO9cHm+b3k/tD2C+b3aiouNALcPcJDfl1/gagHEkAAAAASUVORK5CYII="/></svg>'
                        }, {
                            url: "/support",
                            title: "Поддержка",
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="21" viewBox="0 0 22 21"><image id="heart" width="22" height="21" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAABl0lEQVQ4ja2VzStEYRTGfzNRROwm/AFKyU5W1JQFGwt72VjaUPLxB9hYYYOVUIqNhQXZYkpYsZBCVr5qfCzGMObo1Ll657ruTOY+9fTeW+f9vc97up0bExEcNQFDQLu9HwFLwD2FSgADQBuQA06BDeDxp0rB5kERychvpUUk6dR1ici1iNyJyK2IXIrImYikRKTXq/MS9wFbQIxgpS2dFqeAauDDnAXenXVCayqAKmAhBKqqB0aBPFBrwC9rQ8551nUYOFFwP9AYAhUD6q0+bbNrP7wO6FBwdwjUA+umBuf6QcCcc1hrHGguIW0+IOlfcHUibj0rltYPDkurrowXfHvRpFW/KPgg4rTqCwWvGCSqtOpDBV8BqxGm3Qee4gYac3pdTtpnYFMhHvjBhkq+jLT6vgi8uWDVLjBSRto14NyDuWDVHDD1j7TrwJ4L8oNVM8B4wFwIgmvNMrDth/gHvaseYNYOz/rGo/rVQhwHbQ4Dq1oMrn8MF34DTNsaqGJgVQ0wCSQNvAPMA5mwTaWAPXVafw+LVgLfMIpZMu5i1gcAAAAASUVORK5CYII="/></svg>'
                        }, {
                            url: "/news",
                            title: "Новости",
                            icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17H13V19H1V17Z" fill="url(#paint0_linear_1806_333)"/><path d="M1 13H19V15H1V13Z" fill="url(#paint1_linear_1806_333)"/><path d="M1 2C1 1.44772 1.44772 1 2 1H18C18.5523 1 19 1.44772 19 2V10C19 10.5523 18.5523 11 18 11H2C1.44772 11 1 10.5523 1 10V2Z" fill="url(#paint2_linear_1806_333)"/><defs><linearGradient id="paint0_linear_1806_333" x1="1" y1="10" x2="19" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.67"/></linearGradient><linearGradient id="paint1_linear_1806_333" x1="1" y1="10" x2="19" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.67"/></linearGradient><linearGradient id="paint2_linear_1806_333" x1="1" y1="10" x2="19" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0.67"/></linearGradient></defs></svg>'
                        }],
                        donate: {
                            modal: 0,
                            login: "",
                            discount: 0,
                            payment_type: 1,
                            globalId: 0,
                            promo: 1
                        },
                        donateSum: 50
                    }
                },
                methods: {
                    close: function() {
                        this.burger = !this.burger, this.burger ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto"
                    },
                    menuClick: function(t) {
                        "/donate" === t ? (this.donate.modal = 1, this.donate.modal ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto", this.burger = !1) : "/news" === t ? window.location.replace("https://vk.com/wall-206027701") : this.$router.push(t)
                    },
                    calculateDonate: function(t) {
                        var e = 0,
                            progress = 0,
                            n = t * this.donate.promo,
                            r = t;
                        return t >= 500 && t < 1e3 ? (e = Math.round(.05 * t), progress = 15) : t >= 1e3 && t < 2e3 ? (e = Math.round(.1 * t), progress = 30) : t >= 2e3 && t < 5e3 ? (e = Math.round(.15 * t), progress = 45) : t >= 5e3 && t < 1e4 ? (e = Math.round(.2 * t), progress = 65) : t >= 1e4 && t < 2e4 ? (e = Math.round(.25 * t), progress = 80) : t >= 2e4 && (e = Math.round(.3 * t), progress = 100), this.donate.discount > 1 && (t = Math.floor(t * this.donate.discount)), {
                            count: t = parseInt(t) + parseInt(e),
                            givepersent: e = e + n - r,
                            progress: progress,
                            res: +e + +r
                        }
                    },
                    methodsDonate: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.donate.login) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", t.$notify({
                                            group: "foo",
                                            type: "error",
                                            title: "Ошибка",
                                            text: "Укажите логин",
                                            duration: "5000"
                                        }));
                                    case 2:
                                        if (!(t.donateSum < 15)) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", t.$notify({
                                            group: "foo",
                                            type: "error",
                                            title: "Ошибка",
                                            text: "Минимальная сумма 15 руб.",
                                            duration: "5000"
                                        }));
                                    case 4:
                                        return e.next = 6, t.$axios.post("/api/donate/check", {
                                            login: t.donate.login.trim(),
                                            globalId: t.donate.globalId,
                                            amount: t.donateSum,
                                            payment_type: t.donate.payment_type
                                        });
                                    case 6:
                                        if (n = e.sent, !n.data.error) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", t.$notify({
                                            group: "foo",
                                            type: "error",
                                            title: "Ошибка",
                                            text: "Вы указали неверный логин",
                                            duration: "5000"
                                        }));
                                    case 10:
                                        t.donate.modal = 2;
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    submitDonate: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var n, data;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$axios.post("/api/donate", {
                                            login: t.donate.login.trim(),
                                            globalId: t.donate.globalId,
                                            amount: t.donateSum,
                                            payment_type: t.donate.payment_type
                                        });
                                    case 2:
                                        if (n = e.sent, "id" !== (data = n.data).error) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", t.$notify({
                                            group: "foo",
                                            type: "error",
                                            title: "Ошибка",
                                            text: "Ошибка id",
                                            duration: "5000"
                                        }));
                                    case 6:
                                        data.url && (window.location.href = data.url);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    closeDonate: function() {
                        2 === this.donate.modal ? this.donate.modal = 1 : 3 === this.donate.modal ? (this.donate.modal = 0, document.documentElement.style.overflow = "auto", history.pushState("", document.title, window.location.pathname + window.location.search)) : (this.donate.modal = 0, document.documentElement.style.overflow = "auto")
                    }
                },
                watch: {
                    donateSum: function(t) {
                        this.calculateDonate(t)
                    }
                },
                mounted: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, r, o, c, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = window.location.hash.substr(window.location.hash.indexOf("?") + 1), r = n.split("&").reduce((function(t, e) {
                                        var n = e.split("=");
                                        return t[n[0]] = n[1], t
                                    }), {}), "#donate" === window.location.hash ? (t.donate.modal = 1, history.pushState("", document.title, window.location.pathname + window.location.search)) : r.globalId && r.amount ? (t.donate.modal = 2, t.donate.globalId = r.globalId, t.donateSum = r.amount, console.log(t.donate.globalId), t.$cookies.set("donateLauncher", r.amount, {
                                        path: "/",
                                        maxAge: 1800
                                    })) : "#successDonate" == window.location.hash && (t.donate.modal = 3, (o = t.$cookies.get("donateLauncher")) && window.location.replace("com.gekas.grandlauncher.donate:" + o)), t.donate.modal ? document.documentElement.style.overflow = "hidden" : document.documentElement.style.overflow = "auto", e.next = 6, t.$axios.get("/api/donate");
                                case 6:
                                    c = e.sent, data = c.data, t.donate.promo = data.value;
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }
            }),
            c = (n(351), n(8)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                return e("header", [t.burger ? e("nav", {
                    staticClass: "burger"
                }, [e("svg", {
                    staticClass: "close",
                    attrs: {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    on: {
                        click: t.close
                    }
                }, [e("path", {
                    attrs: {
                        d: "M4 36L2 30L31.5 0.5L33.5 6.5L4 36Z",
                        fill: "url(#paint0_linear_1829_354)"
                    }
                }), e("path", {
                    attrs: {
                        d: "M-8.74228e-08 4.5L6 2.5L35.5 32L29.5 34L-8.74228e-08 4.5Z",
                        fill: "url(#paint1_linear_1829_354)"
                    }
                }), e("defs", [e("linearGradient", {
                    attrs: {
                        id: "paint0_linear_1829_354",
                        x1: "28",
                        y1: "1",
                        x2: "15",
                        y2: "36.5",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        "stop-color": "white"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0.6"
                    }
                })], 1), e("linearGradient", {
                    attrs: {
                        id: "paint1_linear_1829_354",
                        x1: "35",
                        y1: "28.5",
                        x2: "-0.500001",
                        y2: "15.5",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        "stop-color": "white"
                    }
                }), e("stop", {
                    attrs: {
                        offset: "1",
                        "stop-color": "white",
                        "stop-opacity": "0.6"
                    }
                })], 1)], 1)]), t._v(" "), e("ul", t._l(t.data, (function(n) {
                    return e("li", {
                        domProps: {
                            innerHTML: t._s(n.icon + n.title)
                        },
                        on: {
                            click: function(e) {
                                return t.menuClick(n.url)
                            }
                        }
                    })
                })), 0)]) : t._e(), t._v(" "), e("div", {
                    staticClass: "landing-header"
                }, [e("NuxtLink", {
                    attrs: {
                        to: "/"
                    }
                }, [e("div", {
                    staticClass: "logo"
                })]), t._v(" "), e("nav", [e("ul", {
                    staticClass: "landing-header-menu"
                }, t._l(t.data, (function(n) {
                    return e("li", {
                        domProps: {
                            innerHTML: t._s(n.icon + n.title)
                        },
                        on: {
                            click: function(e) {
                                return t.menuClick(n.url)
                            }
                        }
                    })
                })), 0), t._v(" "), e("svg", {
                    staticClass: "burger-click",
                    attrs: {
                        width: "43",
                        height: "32",
                        viewBox: "0 0 43 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    on: {
                        click: t.close
                    }
                }, [e("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M0 31.999V28.999H42.999V31.999H0ZM0 14.999H42.999V17.999H0V14.999ZM0 0H42.999V2.999H0V0Z",
                        fill: "white"
                    }
                })])])], 1), t._v(" "), t.donate.modal ? e("div", {
                    staticClass: "donate-modal"
                }, [e("div", {
                    staticClass: "container"
                }, [e("svg", {
                    attrs: {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    },
                    on: {
                        click: t.closeDonate
                    }
                }, [e("rect", {
                    attrs: {
                        opacity: "0.4",
                        width: "32",
                        height: "32",
                        fill: "url(#pattern0)"
                    }
                }), e("defs", [e("pattern", {
                    attrs: {
                        id: "pattern0",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }
                }, [e("use", {
                    attrs: {
                        "xlink:href": "#image0_2335_1396",
                        transform: "translate(-0.00471698) scale(0.00943396)"
                    }
                })]), e("image", {
                    attrs: {
                        id: "image0_2335_1396",
                        width: "107",
                        height: "106",
                        "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABqCAYAAAC746+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAANLklEQVR4nO2deZAfRR3FP7vZJIQkJBIBU8EIARHR0hAgJBHNcuyKBwoExVvKUlEEr4jG2xSIoCIBLS080EK0qDIeKKggguFSDiWoCaAgyOaAkIMgh5GQ9Y+3zW8y2z3TPdMzv9nNvqqunrO7Z9687p4+vt3R39/PCGrH0QP+b0Nu6qwgISPIRi+wGHhL6I0jZNWLVwJnAh3AC4BZITePkFUfeoEzEFH9A+7EkABGyKoHvcAX0fs2lYR+4DBgL99AYpB1AMqDx0cIaziiFziL7RVlHMAbfQMqSlYHqtFcCfwd+Byq2exSMLzhih7gS+h9wfaqMn4vMMknsFCydgZOBlYAvxmIyCTkMESYV8Q7AHqBs7ErKunGAK/zCbDD8z9rGnAq8B5gSs61t6JazyafgIcpepGiOoFtiJQsfz3wZuB/WYHmKesQ4EfAfcAi8oky91ztee1wRA9SlKlM+LhdB+7LhI2sUcAJwA3ALejnbXRggmchwnYLvG+ooxf4Mq33aiujXP4CWkWKFUmyJgELgXuBnwAvK5xkYSZwLbBHyXCGCkwZFaKopJsOHJQVQSewL3AB0Ad8FXhexAd4EfAHYGrEMJuIHuAcoIswNaX947Mi6UQVh9OAieXS68T+iLBpFYXfbvQAX0HFRxFFJd0sYG9XRJ3Ah4FzK3mMFvYDrkNSH07opUUUlFOVwQJXZKbM+hiScZWYASwjoHml4ehBlYmugf3kiy/jXoFqh4OQrGAsQi3CVWIvRNg+FcdTNXpQ+T4a+wunhD8KeLUt0nTV/bOo6ahKTEeE7VdxPFWhBxUbvpWJIu7Ftoht/1lnAJ8s/Ch+mIYqHS+sOJ7YOAr4GttnfXmOQL8P/QIMgqsF42xUjlWJqeg/zPoVNRBHAefRUlQVqnoA+BTwiC0BWc1N5wIfSkReBfYArkE/0E3GUcASWmUUxFdVHyJqkysReW2DFwAfoFrCdkNNU0Fd3DXiSOB8tldUkewtT1GLyGn89uki+RbqFqmSsCnA71EjcJNwJPB14lTP0/cbvw/VETKJAv/+rO8A7wKe9ry+CCYDvwPmVhhHCJJEla2Su1wfUtRGnwSFdD7+ADiJagmbhHqfD6swDh8cAXyD8DIqRFV9wCfwJArCe4ovAd4GbA28LwQTUY9zd4VxZOEI4JuUb5R1+UZRQURBsTEYl+LRq1kS44HLUS2sThyByuiQ/6hQtwr4OLAhNHFFB8wsRaNyqiRsZ+AXaIhAHTicFlFlyyiX3wecTgGioNxQtMtQ/8uWEmG4YB5wHPAzHG1lEdENXEi8MspVmSikKIOy4wavAF4PPFkyHBvMQ45FPddeI4AKoBvVdsv+R2X5q5Ci1pdJaIxBnleiF/lEhLCg9YDJ/dHAj8npSS2Aw4FvE7+bI11GLaQkURBv+PTVKKt6PFJ4ya/bYDRwMfCGSHF0I6LGMPgFE8mPRhTEHeu+DI3SfbREGDZVJdEFfB/VRsugG/gug8so49tc1rksRT1cMq3PIPbEhBsQYZtLhGEjLOk6kSLeXjD8blRGmeF1vqoKUd0q4KNEJAqqmUXyR9RBtynwvv7Udpq0JDrRj+tJgXHMR4oai/vlZ6nK59rVwEeITBRUN+XnVvRDG1pNzVNV+vz5wLs9w+4GLqJVRiXDJ8f3JXEN6laKThRUOz/rL4gwn4SHqCp5vgONhXhfTvjdSFFjLGGEqsl1z2oqJAqqn0y3HFWPH/K4Nk9VrnOgSQCnOsKdD3wP2Ak7STj8PJe83hC1LuP5SqOOmY8rEGFrHed9VeUizmAxGgOZxHxUezRlVDqOUDWlfaOoD1IxUVDfNNU7UVa02nE+RFW28+aaz6DqMrTKqLGWeEIqF1luDTURBf7zs2JhBhokY0bm2l5Uet/HbUvtL0W/EDulzm+z3JN1LMtfjbJenyw+CuomCzTQ89oBP6SgdxGTdS4mOUl/NRqbUhtR0J7Z+vejsuSexDHfsiovS8zax3FNaFlVu6IM2mVa4QFUptydOp5FSvp8+rqs/TxyQsqoU4EHfR4yNtppB2M16pldSb5imqCqtcAptIkoaL/RkrXox3kF+aoCN3lVq2oNbSYK2k8WKO/vAe5IHHO9NBzXZO3juMZXVUZRrv/E2tAEskBNNEejJioX2qGqNagpq+1EQXPIAjX6vgq4jXBVgZ0kPI65/LXA+2kIUdAsskCzJ14D3Jw6nqcqFyFFy6i1SFFryj9SPDSNLFDH5THATcRRVZEy6mQaRhQ0kyyAx4BjUc9znapqLFHQXLJAg2+ORzMkDapU1UPAe3E3NrcdTSYLNB7xAqpTVfKaPkoMwKwDTSdrHvDDxH5sVSXdLPRhjIuX/LhoMlnz0EjccYSThOWYT3Y4E43raKRV0qaSNRf1SSVfWkjWl0VOnnsJmj88IeLzREETyZqLJiPsTLEKBZZjIVX3fmT3dwnV2bMqhKaRNRf4KSIqiVBV4fB9Hcju+hIaZPe3SWTNQYqagP3lQRhhoWqy+fsi2xeTCzxPdDSFrDnAz1EZ1Z86V1ZVZd0MZFXmWaWfsiSaQNZcRJQp0JuiqmQ405ERl7ba/W03WbasL4l2qyoZ3p7IZN2zCz5rabSTrDloznC6xtUUVdn8acgY5O7Op6oQ7SLLlFE+lYl2qcrl9kDDtWs31NwOsg5FirJViWOp6onUudi+IaxWQ811k3UomuU/EXcZgeWY7Xz6uPHXITuz5zviiOWmIMuntRlqrpOs2Ygo109mnqrS19hUtQ54J1rh4UJU5SZ1bUx/V2RMc0/HM0VFXWQdAvwSEeX6Ug2yyMBy3Gw/DLwD+FcirIvQ/K2sIddlHMje1GLguWGvJBx1kDUbmfaZlHFNiKpgMGEPoznGSaIMLkZV7m2We8v6xu0CfIGKLWtXTdYhwK/IVlR/6p48VaWPrcNNlMGlyJRskrAYqkr6E9CUI6cR/bKokqyDkQWaLEVBdjmUvoaUbxR1r0d6lqKl/J52hBXq29I8Hvg0FZlCr4qsg4Ffk6+oLFWl99Pb64G34keUwWWoBmcIi6Wq5PY4ZJ7u+QHp8kIVZB2EVq3LUxRkq8r1MoyiQokyuALV4IyRy1iqShN2OpFt18cm6yBaaz/6fqEGvqoyikrO7wrFlahCsNUznXnE2bbHoimz+5dI53aISVaIogxCVWWW2ytDlME1iLCnyCYjnS4f5ZvtMWhS+gER0huNrFlIUZMJz/vJ2TfbG4hHlMEy4PO0CIulquT2aDQBr/RiAzHImoWylRBFQZiqDFH/LJVSO25C668Yq6S+ZVQ6ja5tEGGnoME4hVGWLEPU5IH9KlS1HngT8I+Sac3CzYiw/zrSmUeci6Tkfhcamj2zaCLLkJUkqj/70kHIIy2d9VVJlMFtiLAtlnQUUZVtfxSyNXVgkQQWJcsQlRyXUEZVtoc2ikpPEq8Sy1ErxJO4ySmiquSxTrSgwcGhiStC1oG0iLIlKA8+qjK1vjqJMjDLzz+OnRwsx3xUlXzeTtToPDskYaFkHQhcxeCRPjFVZbK+uwLTFhMrUS3RmJGNoap0OB1oDeg5vokKIcsQZdYjrEJVJuu7MzDcKnA3Uth/BvZDVZU+ZntXneh55/kkyJesmbSIsuXDMVRlsr4mEGVwD1KYsfsboirf9wQy0py7/ooPWTPR6jvJMXOhijL3uB5sI/rCVhYIt2rch1o6NhNXVWkch1ZSdSKPrJm0iMpLjKtQzfvyNqClMppIlMG/yScsuR+iKoMOtKBBtysRWWS9lMGKMhG74DrnIm0DcCLNJspgFeq+30Q8VdmueS0ykzQILhN2Y5ExrN0zEuZSla+JuY3ACcgU0FDCVLSS3GTcz+ZznJzjVyGxPAOXsrYgk9+2r8UF13nb1zNUiQLN6D+T1ioIMVVFYr+H1ApHWdngktTNrsT4lGPJ8xtRGTUUiTJYB5xFy9xqmbIKy3GzfSSJFY7yLHn+GVUyfLPCvCzAKOpvWZEOIUxBPcK7kV8E5BUf6f0krgcuz6sNLknt56km6/xwIwpUQToHZY15RUCoqpJ4OXBMnrK6UIu3GcAY+tWYL80Q9desyIYwJqG1R55DfFVtQStQ3Ohj0HghGnOXF5ErC9iELMUMV6IMJiLCpmJ/H+BHmsEm4EbgFtTP5mV9ejL6izdTSENUtaMQZTABrZwwjeKquh+VUStoDUoF/E2Fn4e6pV1fiE1Vhqg70oENc4wHTkOTFXxVtRW9p+vRz7cVvmTtgyoGnRmRpok6jh2PKINxaJDMdLJV9RjwJ5Td5S4SF2KE/xJUSchT1SPI/NyOSpTBOGRgcm8Gv7MHgevQr9FTvgGGkDUbDd3KUtQjiKjlvoEOc4xFg2RmoI/6LkTS3dir6JkIXd5iGZoZYlPWZkTU7aGJGOYYgxpmb6fkKguhZC1A853SitqMmvdHiKoQoWR1oWq4KTi30VJUlpnvEURA6ICZrWxvWfNRRoiqDUWWZBpPq4A8FtVoRlADuvIvGYTHkbquYYSoWvF/ZyUPbyNQIkEAAAAASUVORK5CYII="
                    }
                })])]), t._v(" "), t._m(0), t._v(" "), 1 === t.donate.modal ? e("div", {
                    staticClass: "form"
                }, [e("div", {
                    staticClass: "secure"
                }, [e("svg", {
                    attrs: {
                        width: "35",
                        height: "40",
                        viewBox: "0 0 35 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [e("path", {
                    attrs: {
                        d: "M0.643004 0C0.321498 0 0 0.285347 0 0.652336V22.2682C0 31.7302 7.27325 39.3977 16.4351 39.9687C26.5614 40.5804 35 32.1381 35 21.8603V0.652336C35.0003 0.28534 34.6788 0 34.3573 0H0.643004ZM30.62 22.1461C30.62 29.2834 25.1149 35.1156 18.1631 35.4826C17.8015 35.4826 17.48 35.197 17.48 34.83V5.05723C17.48 4.69023 17.7614 4.40461 18.123 4.40461H29.9772C30.3388 4.40461 30.6202 4.69024 30.6202 5.05723V22.146L30.62 22.1461Z",
                        fill: "#7BC64D"
                    }
                })]), t._v(" "), t._m(1)]), t._v(" "), e("div", {
                    staticClass: "input-form"
                }, [e("label", {
                    attrs: {
                        for: "login"
                    }
                }, [t._v("Логин")]), t._v(" "), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.donate.login,
                        expression: "donate.login"
                    }],
                    attrs: {
                        type: "text",
                        id: "login"
                    },
                    domProps: {
                        value: t.donate.login
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.donate, "login", e.target.value)
                        }
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "input-form"
                }, [e("label", {
                    attrs: {
                        for: "sum"
                    }
                }, [t._v("Сумма пополнения")]), t._v(" "), e("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.donateSum,
                        expression: "donateSum"
                    }],
                    attrs: {
                        type: "number",
                        id: "sum"
                    },
                    domProps: {
                        value: t.donateSum
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.donateSum = e.target.value)
                        }
                    }
                }), t._v(" "), t.calculateDonate(t.donateSum).givepersent >= 25 ? e("div", {
                    staticClass: "amount"
                }, [t._v("+" + t._s(t.calculateDonate(t.donateSum).givepersent))]) : t._e()]), t._v(" "), e("div", {
                    staticClass: "bonus"
                }, [e("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            t.donateSum = 500
                        }
                    }
                }, [t._v("\r\n                        500 "), e("div", [t._v("+25")])]), t._v(" "), e("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            t.donateSum = 1e3
                        }
                    }
                }, [t._v("\r\n                        1000 "), e("div", [t._v("+100")])]), t._v(" "), e("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            t.donateSum = 2e3
                        }
                    }
                }, [t._v("\r\n                        2000 "), e("div", [t._v("+300")])])]), t._v(" "), t._m(2), t._v(" "), e("button", {
                    on: {
                        click: t.methodsDonate
                    }
                }, [e("span", [t._v("Пополнить")])]), t._v(" "), e("div", {
                    staticClass: "donate-bonus"
                }, [e("div", {
                    staticClass: "header-bonus"
                }, [e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 100
                    }
                }, [t._v("+10%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 100
                    }
                }, [t._v("от 1 000")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 100
                    }
                }, [t._v("РУБ.")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 1e3
                    }
                }, [t._v("+20%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 1e3
                    }
                }, [t._v("от 5 000")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 1e3
                    }
                }, [t._v("РУБ.")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 6e3
                    }
                }, [t._v("+30%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 6e3
                    }
                }, [t._v("от 20 000")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 6e3
                    }
                }, [t._v("РУБ.")])])]), t._v(" "), e("div", {
                    attrs: {
                        id: "progressbar"
                    }
                }, [e("div", {
                    style: {
                        width: t.calculateDonate(t.donateSum).progress + "%"
                    }
                })]), t._v(" "), e("div", {
                    staticClass: "bottom-bonus"
                }, [e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 25
                    }
                }, [t._v("+5%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 25
                    }
                }, [t._v("от 500")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 25
                    }
                }, [t._v("РУБ.")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 300
                    }
                }, [t._v("+15%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 300
                    }
                }, [t._v("от 2 000")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 300
                    }
                }, [t._v("РУБ.")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "proce",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 2500
                    }
                }, [t._v("+25%")]), t._v(" "), e("div", {
                    staticClass: "sum",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 2500
                    }
                }, [t._v("от 10 000")]), t._v(" "), e("div", {
                    staticClass: "rub",
                    class: {
                        active: t.calculateDonate(t.donateSum).givepersent >= 2500
                    }
                }, [t._v("РУБ.")])])])])]) : t._e(), t._v(" "), 2 === t.donate.modal ? e("div", {
                    staticClass: "donate-methods"
                }, [e("div", {
                    staticClass: "types"
                }, [e("div", [e("div", {
                    staticClass: "type",
                    class: {
                        active: 1 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 1
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(337)
                    }
                }), t._v("\r\n                            способ № 1\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 2 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 2
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(338)
                    }
                }), t._v("\r\n                            способ № 2\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 5 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 5
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(339)
                    }
                }), t._v("\r\n                            qiwi\r\n                        ")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "type",
                    class: {
                        active: 4 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 4
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(340)
                    }
                }), t._v("\r\n                            скины steam\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 6 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 6
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(341)
                    }
                }), t._v("\r\n                            TRC20\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 7 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 7
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(342)
                    }
                }), t._v("\r\n                            ERC20\r\n                        ")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "type",
                    class: {
                        active: 8 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 8
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(343)
                    }
                }), t._v("\r\n                            BTC\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 9 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 9
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(344)
                    }
                }), t._v("\r\n                            ETC\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 10 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 10
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(345)
                    }
                }), t._v("\r\n                            LTC\r\n                        ")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "type",
                    class: {
                        active: 11 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 11
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(346)
                    }
                }), t._v("\r\n                            TRX\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 12 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 12
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(347)
                    }
                }), t._v("\r\n                            BCH\r\n                        ")]), t._v(" "), e("div", {
                    staticClass: "type",
                    class: {
                        active: 13 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 13
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(348)
                    }
                }), t._v("\r\n                            USDC\r\n                        ")])]), t._v(" "), e("div", [e("div", {
                    staticClass: "type",
                    class: {
                        active: 14 === t.donate.payment_type
                    },
                    on: {
                        click: function(e) {
                            t.donate.payment_type = 14
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: n(349)
                    }
                }), t._v("\r\n                            ETHW\r\n                        ")])])]), t._v(" "), e("div", {
                    staticClass: "label"
                }, [t._v("Вы получите: " + t._s(t.calculateDonate(t.donateSum).res))]), t._v(" "), e("button", {
                    on: {
                        click: t.submitDonate
                    }
                }, [e("span", [t._v("Оплатить")])])]) : t._e(), t._v(" "), 3 === t.donate.modal ? e("div", {
                    staticClass: "donate-success"
                }, [t._m(3), t._v(" "), e("button", {
                    on: {
                        click: t.closeDonate
                    }
                }, [e("span", [t._v("Закрыть")])])]) : t._e(), t._v(" "), e("div", {
                    staticClass: "man"
                })])]) : t._e()])
            }), [function() {
                var t = this._self._c;
                return t("div", {
                    staticClass: "bonus"
                }, [t("div", {
                    staticClass: "title"
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    staticClass: "title"
                }, [t._v("Безопасные платежи")]), t._v(" "), e("div", {
                    staticClass: "descriptions"
                }, [t._v("Оплата происходит"), e("br"), t._v("по глобальному логину")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "terms"
                }, [t._v("При нажатии кнопки «Пополнить» Вы подтверждаете, что Ваш логин введен корректно и совпадает с тем, что указан в лаунчере, а также соглашаетесь с "), e("a", {
                    attrs: {
                        href: "/legal/terms-of-service"
                    }
                }, [t._v("пользовательским соглашением")]), t._v(" и "), e("a", {
                    attrs: {
                        href: "/legal/privacy-policy"
                    }
                }, [t._v("политикой конфиденциальности")])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "container"
                }, [e("div", {
                    staticClass: "title"
                }, [t._v("Платеж обработан")]), t._v(" "), e("div", {
                    staticClass: "descriptions"
                }, [t._v("Вы успешно пополнили"), e("br"), t._v("свой счёт")])])
            }], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Input: n(144).default,
            Button: n(142).default,
            Header: n(110).default
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var content = n(299);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("252f4f7d", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(326);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("de2895da", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        t.exports = n.p + "img/info.6490c78.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/error.055f296.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/success.a1d4883.svg"
    }, function(t, e, n) {
        var content = n(328);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("b2e9b37e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(330);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("38eb1b61", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(332);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("33ebc286", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(352);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("e8ba9a24", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(365);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("310f7505", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(367);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("3936f25a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        t.exports = n.p + "img/footer-logo.f17e940.png"
    }, function(t, e, n) {
        var content = n(373);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("5d26bfd2", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(376);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("425fb368", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(378);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("7c17b20e", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(381);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("57e01d6a", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var r = [function() {
                var t = this._self._c;
                return t("div", [t("img", {
                    staticClass: "footer-logo",
                    attrs: {
                        src: n(210)
                    }
                })])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "wrap"
                }, [e("div", {
                    staticClass: "item"
                }, [e("div", {
                    staticClass: "label"
                }, [t._v("СОТРУДНИЧЕСТВО С МЕДИА")]), t._v(" "), e("a", {
                    staticClass: "lik",
                    attrs: {
                        href: "https://vk.com/grandrpmedia"
                    }
                }, [t._v("VK.COM/GRANDRPMEDIA")])]), t._v(" "), e("div", {
                    staticClass: "playments"
                }, [e("img", {
                    attrs: {
                        src: n(368)
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: n(369)
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: n(370)
                    }
                }), t._v(" "), e("img", {
                    attrs: {
                        src: n(371)
                    }
                })])])
            }, function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "content-mobile"
                }, [e("img", {
                    staticClass: "footer-logo",
                    attrs: {
                        src: n(210)
                    }
                }), t._v(" "), e("div", {
                    staticClass: "media"
                }, [e("div", {
                    staticClass: "label"
                }, [t._v("СОТРУДНИЧЕСТВО С МЕДИА")]), t._v(" "), e("a", {
                    staticClass: "lik",
                    attrs: {
                        href: "https://vk.com/grandrpmedia"
                    }
                }, [t._v("VK.COM/GRANDRPMEDIA")])])])
            }],
            o = {
                name: "LandingFooter"
            },
            c = (n(372), n(8)),
            component = Object(c.a)(o, (function() {
                var t = this,
                    e = t._self._c;
                return e("footer", {
                    staticClass: "landing-footer"
                }, [e("div", {
                    staticClass: "content"
                }, [e("div", {
                    staticClass: "info"
                }, [t._m(0), t._v(" "), e("div", {
                    staticClass: "info-wrap"
                }, [e("ul", [e("li", [e("NuxtLink", {
                    attrs: {
                        to: "/support"
                    }
                }, [t._v("ПОДДЕРЖКА")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                    attrs: {
                        to: "/legal/terms-of-service"
                    }
                }, [t._v("ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ")])], 1), t._v(" "), e("li", [e("NuxtLink", {
                    attrs: {
                        to: "/legal/privacy-policy"
                    }
                }, [t._v("ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ")])], 1)]), t._v(" "), t._m(1)])])]), t._v(" "), t._m(2)])
            }), r, !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Footer: n(137).default
        })
    }, , , , , , , , function(t, e, n) {
        "use strict";
        var r = n(4),
            o = (n(31), n(15), n(92), n(1)),
            c = n(0),
            l = window.__NUXT__;

        function d() {
            if (!this._hydrated) return this.$fetch()
        }

        function f() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = l.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var e in data) o.default.set(this.$data, e, data[e])
            }
        }

        function h() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                delete t._fetchPromise
            }))), this._fetchPromise
        }

        function m() {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                var e, n, r, o = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                        case 9:
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
                        case 15:
                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19, new Promise((function(t) {
                                return setTimeout(t, r)
                            }));
                        case 19:
                            this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return t.stop()
                    }
                }), t, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = h.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", d))
            }
        }
    }, , , , , , , , function(t, e, n) {
        t.exports = n.p + "img/support-header.66ed796.jpg"
    }, function(t, e, n) {
        n(241), t.exports = n(242)
    }, , function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                n(50), n(39), n(53), n(34), n(66), n(67);
                var e = n(18),
                    r = n(4),
                    o = (n(125), n(260), n(273), n(275), n(31), n(28), n(15), n(33), n(43), n(44), n(86), n(109), n(72), n(69), n(22), n(40), n(45), n(92), n(1)),
                    c = n(224),
                    l = n(138),
                    d = n(0),
                    f = n(38),
                    h = n(231),
                    m = n(114);

                function v(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return x(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === n && t.constructor && (n = t.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0,
                                r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, c = !0,
                        l = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return c = t.done, t
                        },
                        e: function(t) {
                            l = !0, o = t
                        },
                        f: function() {
                            try {
                                c || null == n.return || n.return()
                            } finally {
                                if (l) throw o
                            }
                        }
                    }
                }

                function x(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                    return n
                }
                o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                var y, w, k = [],
                    C = window.__NUXT__ || {},
                    j = C.config || {};
                j._app && (n.p = Object(d.v)(j._app.cdnURL, j._app.assetsPath)), Object.assign(o.default.config, {
                    silent: !0,
                    performance: !1
                });
                var _ = o.default.config.errorHandler || console.error;

                function A(t, e, n) {
                    for (var r = function(component) {
                            var t = function(component, t) {
                                if (!component || !component.options || !component.options[t]) return {};
                                var option = component.options[t];
                                if ("function" == typeof option) {
                                    for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                    return option.apply(void 0, n)
                                }
                                return option
                            }(component, "transition", e, n) || {};
                            return "string" == typeof t ? {
                                name: t
                            } : t
                        }, o = n ? Object(d.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function() {
                            var e = Object.assign({}, r(t[i])),
                                n = Object.assign({}, r(o[i]));
                            Object.keys(e).filter((function(t) {
                                return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                            })).forEach((function(t) {
                                n[t] = e[t]
                            })), l.push(n)
                        }, i = 0; i < c; i++) f();
                    return l
                }

                function O(t, e, n) {
                    return M.apply(this, arguments)
                }

                function M() {
                    return (M = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                        var o, c, l, f, h = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(y.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 9, Object(d.r)(e, (function(t, e) {
                                        return {
                                            Component: t,
                                            instance: e
                                        }
                                    }));
                                case 9:
                                    o = t.sent, o.some((function(t) {
                                        var r = t.Component,
                                            o = t.instance,
                                            c = r.options.watchQuery;
                                        return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                            return h._diffQuery[t]
                                        })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    r(), t.next = 26;
                                    break;
                                case 15:
                                    if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                        t.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), t.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: l,
                                        message: f
                                    }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function I(t, e) {
                    return C.serverRendered && e && Object(d.b)(t, e), t._Ctor = t, t
                }

                function D(t, e, n, r) {
                    var o = this,
                        c = [],
                        f = !1;
                    if (void 0 !== n && (c = [], (n = Object(d.s)(n)).options.middleware && (c = c.concat(n.options.middleware)), t.forEach((function(t) {
                            t.options.middleware && (c = c.concat(t.options.middleware))
                        }))), c = c.map((function(t) {
                            return "function" == typeof t ? t : ("function" != typeof l.a[t] && (f = !0, o.error({
                                statusCode: 500,
                                message: "Unknown middleware " + t
                            })), l.a[t])
                        })), !f) return Object(d.o)(c, e, r)
                }

                function S(t, e, n, r) {
                    return N.apply(this, arguments)
                }

                function N() {
                    return N = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o, c) {
                        var l, h, m, x, w, C, j, _, O, M, I, S, N, R, L, E = this;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 2:
                                    return !1, e === n ? (k = [], !0) : (l = [], k = Object(d.g)(n, l).map((function(t, i) {
                                        return Object(d.c)(n.matched[l[i]].path)(n.params)
                                    }))), h = !1, m = function(path) {
                                        n.path === path.path && E.$loading.finish && E.$loading.finish(), n.path !== path.path && E.$loading.pause && E.$loading.pause(), h || (h = !0, o(path))
                                    }, t.next = 8, Object(d.t)(y, {
                                        route: e,
                                        from: n,
                                        error: function(t) {
                                            c.aborted || y.nuxt.error.call(E, t)
                                        },
                                        next: m.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = y.nuxt.dateErr, this._hadError = Boolean(y.nuxt.err), x = [], (w = Object(d.g)(e, x)).length) {
                                        t.next = 33;
                                        break
                                    }
                                    return t.next = 15, D.call(this, w, y.context, void 0, c);
                                case 15:
                                    if (!h) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 17:
                                    if (!c.aborted) {
                                        t.next = 20;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 20:
                                    return C = (f.a.options || f.a).layout, t.next = 23, this.loadLayout("function" == typeof C ? C.call(f.a, y.context) : C);
                                case 23:
                                    return j = t.sent, t.next = 26, D.call(this, w, y.context, j, c);
                                case 26:
                                    if (!h) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 28:
                                    if (!c.aborted) {
                                        t.next = 31;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 31:
                                    return y.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", o());
                                case 33:
                                    return w.forEach((function(t) {
                                        t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                    })), this.setTransitions(A(w, e, n)), t.prev = 35, t.next = 38, D.call(this, w, y.context, void 0, c);
                                case 38:
                                    if (!h) {
                                        t.next = 40;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 40:
                                    if (!c.aborted) {
                                        t.next = 43;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 43:
                                    if (!y.context._errored) {
                                        t.next = 45;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 45:
                                    return "function" == typeof(_ = w[0].options.layout) && (_ = _(y.context)), t.next = 49, this.loadLayout(_);
                                case 49:
                                    return _ = t.sent, t.next = 52, D.call(this, w, y.context, _, c);
                                case 52:
                                    if (!h) {
                                        t.next = 54;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 54:
                                    if (!c.aborted) {
                                        t.next = 57;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 57:
                                    if (!y.context._errored) {
                                        t.next = 59;
                                        break
                                    }
                                    return t.abrupt("return", o());
                                case 59:
                                    O = !0, t.prev = 60, M = v(w), t.prev = 62, M.s();
                                case 64:
                                    if ((I = M.n()).done) {
                                        t.next = 75;
                                        break
                                    }
                                    if ("function" == typeof(S = I.value).options.validate) {
                                        t.next = 68;
                                        break
                                    }
                                    return t.abrupt("continue", 73);
                                case 68:
                                    return t.next = 70, S.options.validate(y.context);
                                case 70:
                                    if (O = t.sent) {
                                        t.next = 73;
                                        break
                                    }
                                    return t.abrupt("break", 75);
                                case 73:
                                    t.next = 64;
                                    break;
                                case 75:
                                    t.next = 80;
                                    break;
                                case 77:
                                    t.prev = 77, t.t0 = t.catch(62), M.e(t.t0);
                                case 80:
                                    return t.prev = 80, M.f(), t.finish(80);
                                case 83:
                                    t.next = 89;
                                    break;
                                case 85:
                                    return t.prev = 85, t.t1 = t.catch(60), this.error({
                                        statusCode: t.t1.statusCode || "500",
                                        message: t.t1.message
                                    }), t.abrupt("return", o());
                                case 89:
                                    if (O) {
                                        t.next = 92;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), t.abrupt("return", o());
                                case 92:
                                    return t.next = 94, Promise.all(w.map(function() {
                                        var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                            var o, c, l, f, h, m, v, w, p;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if (r._path = Object(d.c)(e.matched[x[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== k[i], E._routeChanged && o ? r._dataRefresh = !0 : E._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : E._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                return E._diffQuery[t]
                                                            })) : "function" == typeof l && (N || (N = Object(d.h)(e)), r._dataRefresh = l.apply(N[i], [e.query, n.query]))), E._hadError || !E._isMounted || r._dataRefresh) {
                                                            t.next = 6;
                                                            break
                                                        }
                                                        return t.abrupt("return");
                                                    case 6:
                                                        return f = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, m = Boolean(r.options.fetch) && r.options.fetch.length, v = h && m ? 30 : 45, h && ((w = Object(d.q)(r.options.asyncData, y.context)).then((function(t) {
                                                            Object(d.b)(r, t), E.$loading.increase && E.$loading.increase(v)
                                                        })), f.push(w)), E.$loading.manual = !1 === r.options.loading, m && ((p = r.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                            E.$loading.increase && E.$loading.increase(v)
                                                        })), f.push(p)), t.abrupt("return", Promise.all(f));
                                                    case 14:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 94:
                                    if (h) {
                                        t.next = 100;
                                        break
                                    }
                                    if (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), !c.aborted) {
                                        t.next = 99;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 99:
                                    o();
                                case 100:
                                    t.next = 119;
                                    break;
                                case 102:
                                    if (t.prev = 102, t.t2 = t.catch(35), !c.aborted) {
                                        t.next = 107;
                                        break
                                    }
                                    return o(!1), t.abrupt("return");
                                case 107:
                                    if ("ERR_REDIRECT" !== (R = t.t2 || {}).message) {
                                        t.next = 110;
                                        break
                                    }
                                    return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, R));
                                case 110:
                                    return k = [], Object(d.k)(R), "function" == typeof(L = (f.a.options || f.a).layout) && (L = L(y.context)), t.next = 116, this.loadLayout(L);
                                case 116:
                                    this.error(R), this.$nuxt.$emit("routeChanged", e, n, R), o();
                                case 119:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this, [
                            [35, 102],
                            [60, 85],
                            [62, 77, 80, 83]
                        ])
                    }))), N.apply(this, arguments)
                }

                function R(t, n) {
                    Object(d.d)(t, (function(t, n, r, c) {
                        return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                    }))
                }

                function L(t) {
                    var e = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                    var n = e ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                    "function" == typeof n && (n = n(y.context)), this.setLayout(n)
                }

                function E(t) {
                    t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                }

                function z(t, e) {
                    var n = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var r = Object(d.h)(t),
                            c = Object(d.g)(t),
                            l = !1;
                        o.default.nextTick((function() {
                            r.forEach((function(t, i) {
                                if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                    var e = t.constructor.options.data.call(t);
                                    for (var n in e) o.default.set(t.$data, n, e[n]);
                                    l = !0
                                }
                            })), l && window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            })), E(n)
                        }))
                    }
                }

                function P(t) {
                    window.onNuxtReadyCbs.forEach((function(e) {
                        "function" == typeof e && e(t)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                        o.default.nextTick((function() {
                            return t.$nuxt.$emit("routeChanged", e, n)
                        }))
                    }))
                }

                function T() {
                    return T = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                        var n, c, l, f, h, m, v;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return y = e.app, w = e.router, e.store, n = new o.default(y), c = C.layout || "default", t.next = 7, n.loadLayout(c);
                                case 7:
                                    return n.setLayout(c), l = function() {
                                        n.$mount("#__nuxt"), w.afterEach(R), w.afterEach(L.bind(n)), w.afterEach(z.bind(n)), o.default.nextTick((function() {
                                            P(n)
                                        }))
                                    }, t.next = 11, Promise.all((x = y.context.route, Object(d.d)(x, function() {
                                        var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                            var l;
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        if ("function" != typeof e || e.options) {
                                                            t.next = 4;
                                                            break
                                                        }
                                                        return t.next = 3, e();
                                                    case 3:
                                                        e = t.sent;
                                                    case 4:
                                                        return l = I(Object(d.s)(e), C.data ? C.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                                    case 7:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function(e, n, r, o, c) {
                                            return t.apply(this, arguments)
                                        }
                                    }())));
                                case 11:
                                    if (f = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), f.length && (n.setTransitions(A(f, w.currentRoute)), k = w.currentRoute.matched.map((function(t) {
                                            return Object(d.c)(t.path)(w.currentRoute.params)
                                        }))), n.$loading = {}, C.error && n.error(C.error), w.beforeEach(O.bind(n)), h = null, m = S.bind(n), w.beforeEach((function(t, e, n) {
                                            h && (h.aborted = !0), m(t, e, n, h = {
                                                aborted: !1
                                            })
                                        })), !C.serverRendered || !Object(d.n)(C.routePath, n.context.route.path)) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.abrupt("return", l());
                                case 22:
                                    return v = function() {
                                        R(w.currentRoute, w.currentRoute), L.call(n, w.currentRoute), E(n), l()
                                    }, t.next = 25, new Promise((function(t) {
                                        return setTimeout(t, 0)
                                    }));
                                case 25:
                                    S.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                        if (path) {
                                            var t = w.afterEach((function(e, n) {
                                                t(), v()
                                            }));
                                            w.push(path, void 0, (function(t) {
                                                t && _(t)
                                            }))
                                        } else v()
                                    }), {
                                        aborted: !1
                                    });
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                            var x
                        }), t)
                    }))), T.apply(this, arguments)
                }
                Object(f.b)(null, C.config).then((function(t) {
                    return T.apply(this, arguments)
                })).catch(_)
            }.call(this, n(47))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n(199)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        var content = n(301);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("3efeabb5", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(302),
            l = n(303),
            d = n(304),
            f = n(305),
            h = n(306),
            m = n(307),
            v = n(308),
            x = n(309),
            y = n(310),
            w = n(311),
            k = n(312),
            C = n(313),
            j = n(314),
            _ = n(315),
            A = n(316),
            O = n(317),
            M = n(318),
            I = n(319),
            D = n(320),
            S = n(321),
            N = n(322),
            R = r((function(i) {
                return i[1]
            })),
            L = o(c),
            E = o(c, {
                hash: "?#iefix"
            }),
            z = o(l),
            P = o(d),
            T = o(f),
            B = o(f, {
                hash: "?#iefix"
            }),
            U = o(h),
            V = o(m),
            G = o(v),
            $ = o(v, {
                hash: "?#iefix"
            }),
            F = o(x),
            H = o(y),
            Z = o(w),
            Q = o(w, {
                hash: "?#iefix"
            }),
            J = o(k),
            Y = o(C),
            K = o(j),
            W = o(j, {
                hash: "?#iefix"
            }),
            X = o(_),
            tt = o(A),
            et = o(O),
            nt = o(O, {
                hash: "?#iefix"
            }),
            ot = o(M),
            at = o(I),
            it = o(D),
            st = o(D, {
                hash: "?#iefix"
            }),
            ct = o(S),
            ut = o(N);
        R.push([t.i, '@font-face{font-family:"Akrobat";font-style:normal;font-weight:500;src:url(' + L + ');src:local("Akrobat Regular"),local("Akrobat-Regular"),url(' + E + ') format("embedded-opentype"),url(' + z + ') format("woff"),url(' + P + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:200;src:url(' + T + ');src:local("Akrobat ExtraLight"),local("Akrobat-ExtraLight"),url(' + B + ') format("embedded-opentype"),url(' + U + ') format("woff"),url(' + V + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:600;src:url(' + G + ');src:local("Akrobat SemiBold"),local("Akrobat-SemiBold"),url(' + $ + ') format("embedded-opentype"),url(' + F + ') format("woff"),url(' + H + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:300;src:url(' + Z + ');src:local("Akrobat Light"),local("Akrobat-Light"),url(' + Q + ') format("embedded-opentype"),url(' + J + ') format("woff"),url(' + Y + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:900;src:url(' + K + ');src:local("Akrobat Black"),local("Akrobat-Black"),url(' + W + ') format("embedded-opentype"),url(' + X + ') format("woff"),url(' + tt + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:700;src:url(' + et + ');src:local("Akrobat Bold"),local("Akrobat-Bold"),url(' + nt + ') format("embedded-opentype"),url(' + ot + ') format("woff"),url(' + at + ') format("truetype")}@font-face{font-family:"Akrobat";font-style:normal;font-weight:800;src:url(' + it + ');src:local("Akrobat ExtraBold"),local("Akrobat-ExtraBold"),url(' + st + ') format("embedded-opentype"),url(' + ct + ') format("woff"),url(' + ut + ') format("truetype")}', ""]), R.locals = {}, t.exports = R
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Regular.bb1769a.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Regular.d742508.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Regular.e55ef46.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraLight.1611ef2.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraLight.e3c22e9.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraLight.833f6eb.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-SemiBold.69a591c.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-SemiBold.8ab2251.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-SemiBold.98df9eb.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Light.fc4654c.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Light.41ad336.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Light.5afa4e4.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Black.827d0ae.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Black.d68fef9.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Black.1fc750a.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Bold.a30e019.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Bold.03cc30c.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-Bold.ce4ad2f.ttf"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraBold.b45e464.eot"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraBold.db5fd08.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/Akrobat-ExtraBold.8554e97.ttf"
    }, function(t, e, n) {
        var content = n(324);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(17).default)("1b92427a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-family:sans-serif}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}", ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        "use strict";
        n(200)
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(201),
            l = n(202),
            d = n(203),
            f = r((function(i) {
                return i[1]
            })),
            h = o(c),
            m = o(l),
            v = o(d);
        f.push([t.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:Inter;margin:0;padding:0;vertical-align:baseline}article,aside,body,details,figcaption,figure{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}a{-webkit-text-decoration:none;text-decoration:none}.layout-dashboard{font-family:"Akrobat"}.vue-notification-group{margin-bottom:3px!important;margin-left:30px!important}.vue-notification{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;background:rgba(181,204,239,.75)!important;border:none!important;color:#305080!important;font-family:"Inter"!important;font-size:14px!important;font-style:normal!important;font-weight:600!important;line-height:17px!important;max-width:345px!important;padding:20px!important;word-break:break-all!important}.vue-notification.warn{background:#ffb648!important;border-left-color:#f48a06!important}.vue-notification.error{background:hsla(0,64%,82%,.75)!important;color:#803030!important}.vue-notification.error,.vue-notification.success{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important}.vue-notification.success{background:rgba(181,239,184,.75)!important;color:#3b8030!important}.notification-content,.notification-title{margin-left:40px!important}.notification-content{font-weight:400!important;margin-top:6px!important}.notification-content:before{content:url(' + h + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}.vue-notification.error .notification-content:before{content:url(" + m + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}.vue-notification.success .notification-content:before{content:url(" + v + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}", ""]), f.locals = {}, t.exports = f
    }, function(t, e, n) {
        "use strict";
        n(204)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, '.header{background-color:#272537;height:92px;justify-content:space-between;padding:0 90px;position:fixed;width:100%;z-index:1}.header,.header>nav>ul{align-items:center;display:flex}.header>nav>ul{gap:40px;justify-content:center}.header>nav>ul>li{display:flex;justify-content:center;list-style:none;position:relative;text-transform:uppercase}.header>nav>ul>li:hover{cursor:pointer}.header>nav>ul>li:not(:last-child):hover:before{width:100%}.header>nav>ul>li:before{background-color:#ffd51d;box-shadow:0 69px 76px 0 #ffd51d,0 34px 76px 0 #ffd51d,0 5px 46px 0 #ffd51d,0 5px 46px 0 #ffd51d;content:"";height:6px;position:absolute;top:-34px;transition:all .23232323s ease-in-out;width:0}.header>nav>ul>li>a{color:#fff;font-family:"Akrobat";font-size:20px;font-style:normal;font-weight:700;line-height:24px}.header .header-login>.auth{align-items:center;background:hsla(0,0%,100%,.05);border-radius:4px;display:flex;padding:5px 32px 5px 21px;transition:all .5s ease-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.header .header-login>.auth>svg{margin-right:8px}.header .header-login>.auth>div>.login{color:#fff;font-family:"Akrobat";font-size:14px;font-style:normal;font-weight:600;line-height:17px}.header .header-login>.auth>div>.name{color:#fff;font-family:"Akrobat";font-size:16px;font-style:normal;font-weight:800;line-height:19px}.header .header-login>.auth>div>.server{color:hsla(0,0%,100%,.5);font-family:"Akrobat";font-size:14px;font-style:normal;font-weight:500;line-height:17px}.header .header-login>.auth:hover{background:hsla(0,0%,100%,.25)}.header .header-login>.menu{align-items:center;background:#272537;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.1);display:flex;flex-direction:column;height:320px;margin-top:5em;padding-top:15px;position:absolute;width:232px}.header .header-login>.menu:hover{cursor:auto}.header .header-login>.menu>.login{color:#fff;font-family:"Akrobat";font-size:14px;font-style:normal;font-weight:600;line-height:17px;margin-top:19px}.header .header-login>.menu>.name{color:#fff;font-family:"Akrobat";font-size:18px;font-style:normal;font-weight:800;line-height:22px;margin-top:1px}.header .header-login>.menu>.server{color:hsla(0,0%,100%,.5);font-family:"Akrobat";font-size:16px;font-style:normal;font-weight:500;line-height:19px;margin-top:1px}.header .header-login>.menu>.logout{align-items:center;background:hsla(0,0%,100%,.05);border-radius:4px;color:#fff;display:flex;font-family:"Akrobat";font-size:16px;font-style:normal;font-weight:800;height:34px;justify-content:center;line-height:19px;margin-top:14px;padding:8px 0;transition:all .5s ease-out;width:212px}.header .header-login>.menu>.logout:hover{background:hsla(0,0%,100%,.25);cursor:pointer}.header .header-login>.menu>ul{border-top:1px solid hsla(0,0%,100%,.05);margin-top:10px;overflow:auto;padding:10px 0}.header .header-login>.menu>ul>li{align-items:center;display:flex;gap:15px;justify-content:flex-start;padding:5px 21.3px;transition:all .5s ease-out;width:226px}.header .header-login>.menu>ul>li>div>.name{color:#fff;font-family:"Akrobat";font-size:16px;font-style:normal;font-weight:800;line-height:19px}.header .header-login>.menu>ul>li>div>.server{color:hsla(0,0%,100%,.5);font-family:"Akrobat";font-size:14px;font-style:normal;font-weight:600;line-height:17px}.header .header-login>.menu>ul>li:hover{background:hsla(0,0%,100%,.25);cursor:pointer}.header .header-login>.menu>ul>li:first-child{padding-top:5px}.header .header-login>.menu>ul::-webkit-scrollbar{width:2px}.header .header-login>.menu>ul::-webkit-scrollbar-thumb{background:#fff;border-radius:4px}.header .header-login>.menu>ul::-webkit-scrollbar-track{margin:9px}', ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        "use strict";
        n(205)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, 'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:Inter;margin:0;padding:0;vertical-align:baseline}article,aside,body,details,figcaption,figure{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}a{-webkit-text-decoration:none;text-decoration:none}.layout-default{font-family:"Akrobat"}', ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        "use strict";
        n(206)
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(333),
            l = n(334),
            d = n(335),
            f = n(336),
            h = n(201),
            m = n(202),
            v = n(203),
            x = r((function(i) {
                return i[1]
            }));
        x.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
        var y = o(c),
            w = o(l),
            k = o(d),
            C = o(f),
            j = o(h),
            _ = o(m),
            A = o(v);
        x.push([t.i, ".layout-landing{background:url(" + y + ") no-repeat,url(" + w + ') no-repeat;background-color:#2d2a3f;background-position:top,bottom;font-family:"Akrobat";overflow:hidden}@media(max-width:680px){.layout-landing{background:url(' + k + ") no-repeat,url(" + C + ') no-repeat;background-color:#2d2a3f;background-position:center 160px,top}}a{-webkit-text-decoration:none;text-decoration:none}.vue-notification-group{margin-bottom:3px!important;margin-left:30px!important}.vue-notification{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important;background:rgba(181,204,239,.75)!important;border:none!important;color:#305080!important;font-family:"Inter"!important;font-size:14px!important;font-style:normal!important;font-weight:600!important;line-height:17px!important;max-width:345px!important;padding:20px!important;word-break:break-all!important}.vue-notification.warn{background:#ffb648!important;border-left-color:#f48a06!important}.vue-notification.error{background:hsla(0,64%,82%,.75)!important;color:#803030!important}.vue-notification.error,.vue-notification.success{-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important}.vue-notification.success{background:rgba(181,239,184,.75)!important;color:#3b8030!important}.notification-content,.notification-title{margin-left:40px!important}.notification-content{font-weight:400!important;margin-top:6px!important}.notification-content:before{content:url(' + j + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}.vue-notification.error .notification-content:before{content:url(" + _ + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}.vue-notification.success .notification-content:before{content:url(" + A + ")!important;left:20px!important;margin-top:-15px!important;position:absolute!important}", ""]), x.locals = {}, t.exports = x
    }, function(t, e, n) {
        t.exports = n.p + "img/head-bg.84f2294.jpg"
    }, function(t, e, n) {
        t.exports = n.p + "img/bg-footer.ecb5a95.jpg"
    }, function(t, e, n) {
        t.exports = n.p + "img/girl.5a3e2ff.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/mobile-header-bg.7e1fc6b.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/sposob1.64162f7.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/sposob2.b8ef657.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/qiwi.9fa4ce4.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/steam.274aeff.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/trc20.3654f57.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDQ0QzM0LjE1MDMgNDQgNDQgMzQuMTUwMyA0NCAyMkM0NCA5Ljg0OTc0IDM0LjE1MDMgMCAyMiAwQzkuODQ5NzQgMCAwIDkuODQ5NzQgMCAyMkMwIDM0LjE1MDMgOS44NDk3NCA0NCAyMiA0NFoiIGZpbGw9IiM2MjdFRUEiLz4KPHBhdGggZD0iTTIyLjY4NDggNS41VjE3LjY5NjJMMzIuOTkzMSAyMi4zMDI1TDIyLjY4NDggNS41WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPHBhdGggZD0iTTIyLjY4NDcgNS41TDEyLjM3NSAyMi4zMDI1TDIyLjY4NDcgMTcuNjk2MlY1LjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNjg0OCAzMC4yMDZWMzguNDkzMUwzMyAyNC4yMjJMMjIuNjg0OCAzMC4yMDZaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMjIuNjg0NyAzOC40OTMxVjMwLjIwNDZMMTIuMzc1IDI0LjIyMkwyMi42ODQ3IDM4LjQ5MzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNjg0OCAyOC4yODc5TDMyLjk5MzEgMjIuMzAyNUwyMi42ODQ4IDE3LjY5OVYyOC4yODc5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0xMi4zNzUgMjIuMzAyNUwyMi42ODQ3IDI4LjI4NzlWMTcuNjk5TDEyLjM3NSAyMi4zMDI1WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPC9zdmc+Cg=="
    }, function(t, e, n) {
        t.exports = n.p + "img/btc.780636d.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDQ0QzM0LjE1MDMgNDQgNDQgMzQuMTUwMyA0NCAyMkM0NCA5Ljg0OTc0IDM0LjE1MDMgMCAyMiAwQzkuODQ5NzQgMCAwIDkuODQ5NzQgMCAyMkMwIDM0LjE1MDMgOS44NDk3NCA0NCAyMiA0NFoiIGZpbGw9IiMzNjM2MzYiLz4KPHBhdGggZD0iTTIyLjY4NDggNS41VjE3LjY5NjJMMzIuOTkzMSAyMi4zMDI1TDIyLjY4NDggNS41WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPHBhdGggZD0iTTIyLjY4NDcgNS41TDEyLjM3NSAyMi4zMDI1TDIyLjY4NDcgMTcuNjk2MlY1LjVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNjg0OCAzMC4yMDZWMzguNDkzMUwzMyAyNC4yMjJMMjIuNjg0OCAzMC4yMDZaIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMjIuNjg0NyAzOC40OTMxVjMwLjIwNDZMMTIuMzc1IDI0LjIyMkwyMi42ODQ3IDM4LjQ5MzFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjIuNjg0OCAyOC4yODc5TDMyLjk5MzEgMjIuMzAyNUwyMi42ODQ4IDE3LjY5OVYyOC4yODc5WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0xMi4zNzUgMjIuMzAyNUwyMi42ODQ3IDI4LjI4NzlWMTcuNjk5TDEyLjM3NSAyMi4zMDI1WiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC42MDIiLz4KPC9zdmc+Cg=="
    }, function(t, e, n) {
        t.exports = n.p + "img/ltc.3a1ced9.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/trx.2894d4d.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/bch.07031ae.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/usdc.9b67920.svg"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDQwQzMxLjA0NTcgNDAgNDAgMzEuMDQ1NyA0MCAyMEM0MCA4Ljk1NDMgMzEuMDQ1NyAwIDIwIDBDOC45NTQzIDAgMCA4Ljk1NDMgMCAyMEMwIDMxLjA0NTcgOC45NTQzIDQwIDIwIDQwWiIgZmlsbD0iI0Q5RDlEOSIvPgo8cGF0aCBkPSJNMjAuNjIyNiA1VjE2LjA4NzVMMjkuOTkzOCAyMC4yNzVMMjAuNjIyNiA1WiIgZmlsbD0iIzJEQUE5MyIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8cGF0aCBkPSJNMjAuNjIyNSA1TDExLjI1IDIwLjI3NUwyMC42MjI1IDE2LjA4NzVWNVoiIGZpbGw9IiM3RkVFREEiLz4KPHBhdGggZD0iTTIwLjYyMjYgMjcuNDZWMzQuOTkzN0wzMC4wMDAxIDIyLjAyTDIwLjYyMjYgMjcuNDZaIiBmaWxsPSIjMkRBQTkzIiBmaWxsLW9wYWNpdHk9IjAuNjAyIi8+CjxwYXRoIGQ9Ik0yMC42MjI1IDM0Ljk5MzdWMjcuNDU4N0wxMS4yNSAyMi4wMkwyMC42MjI1IDM0Ljk5MzdaIiBmaWxsPSIjN0ZFRURBIi8+CjxwYXRoIGQ9Ik0yMC42MjI2IDI1LjcxNjJMMjkuOTkzOCAyMC4yNzVMMjAuNjIyNiAxNi4wOVYyNS43MTYyWiIgZmlsbD0iIzE0M0QzNSIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPHBhdGggZD0iTTExLjI1IDIwLjI3NUwyMC42MjI1IDI1LjcxNjJWMTYuMDlMMTEuMjUgMjAuMjc1WiIgZmlsbD0iIzJEQUE5MyIgZmlsbC1vcGFjaXR5PSIwLjYwMiIvPgo8L3N2Zz4K"
    }, , function(t, e, n) {
        "use strict";
        n(207)
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(353),
            l = n(354),
            d = n(355),
            f = n(356),
            h = n(357),
            m = n(358),
            v = n(359),
            x = n(360),
            y = n(361),
            w = n(362),
            k = n(363),
            C = r((function(i) {
                return i[1]
            })),
            j = o(c),
            _ = o(l),
            A = o(d),
            O = o(f),
            M = o(h),
            I = o(m),
            D = o(v),
            S = o(x),
            N = o(y),
            R = o(w),
            L = o(k);
        C.push([t.i, ".landing-header{align-items:flex-start;display:flex;justify-content:space-between;padding:40px 5% 0}@media(max-width:960px){.landing-header{padding:40px 8% 0}}.landing-header .logo{background:url(" + j + ") no-repeat;height:70px;width:190px}.landing-header .landing-header-menu{align-items:stretch;display:flex}@media(max-width:960px){.landing-header .landing-header-menu{display:none}}.landing-header .landing-header-menu li,.layout-landing .burger li{list-style:none}.landing-header .auth{background:url(" + _ + ");background-size:cover;border:none;height:100px;margin-top:-40px;text-transform:uppercase;transition:all .5s ease-out;width:200px}.landing-header .auth:hover{cursor:pointer;transform:scale(1.1)}@media(max-width:960px){.landing-header .auth{display:none}}.layout-landing .burger .burger-btn{background:url(" + _ + ");background-size:cover;border:none;height:100px;text-transform:uppercase;transform:scale(1.5);transition:all .5s ease-out;width:200px}.landing-header .landing-header-menu li{align-items:flex-end;color:#fff;display:flex;font-size:18px;font-style:normal;font-weight:700;line-height:100%;margin-left:60px;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0);transition:all .5s ease-out}.landing-header .landing-header-menu li:hover{color:#d7b93a;cursor:pointer}@media(max-width:1360px){.landing-header .landing-header-menu li{margin-left:30px}}@media(max-width:1180px){.landing-header .landing-header-menu li{margin-left:10px}}@media(max-width:1090px){.landing-header .landing-header-menu li{font-size:14px}}.landing-header .landing-header-menu li svg{margin-right:20px}@media(max-width:1207px){.landing-header .landing-header-menu li svg{margin-right:15px}}.landing-header .burger-click{display:none}.landing-header .burger-click:hover{color:#d7b93a;cursor:pointer}@media(max-width:960px){.landing-header .burger-click{display:block}}.layout-landing .burger{background:url(" + A + ") no-repeat;background-size:cover;display:flex;height:100%;justify-content:center;padding-top:111px;position:absolute;width:100%;z-index:1}.layout-landing .burger ul{display:flex;flex-direction:column;gap:40px;margin-top:15%;padding:0}.layout-landing .burger li{align-items:center;color:#fff;display:flex;font-size:30px;font-style:normal;font-weight:700;gap:15px;line-height:100%;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0)}.layout-landing .burger .landing-header-login ul{display:flex;gap:4px;margin:-10px;width:90%}.layout-landing .burger .landing-header-login li{align-items:center;background:hsla(0,0%,100%,.05);border-radius:3.23571px;display:flex;font-size:18px;height:36px;justify-content:space-between;padding:0 15px;text-transform:uppercase}.layout-landing .burger .close{margin-right:40px;margin-top:40px;position:absolute;right:0;top:0}.landing-header .landing-header-login,.layout-landing .landing-header-login{display:flex;flex-direction:column}@media(max-width:960px){.landing-header .landing-header-login,.layout-landing .landing-header-login{display:none}}.landing-header .landing-header-login .wrap,.layout-landing .burger .wrap{align-items:center;background:hsla(0,0%,100%,.05);border-radius:32px;display:flex;gap:10px;height:52px;justify-content:center;margin-top:-13px;padding:0 15px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.landing-header .landing-header-login .wrap:hover,.layout-landing .burger .wrap:hover{cursor:pointer}.landing-header .landing-header-login .wrap>.menu-btn.active,.layout-landing .burger .wrap>.menu-btn.active{transform:rotate(180deg)}.landing-header li.landing-header-login svg{margin:0}.landing-header .landing-header-login .wrap>span,.layout-landing .burger .wrap>span{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,.59));-webkit-background-clip:text;background-clip:text;color:transparent;font-size:18px;font-style:normal;font-weight:900;line-height:100%;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0)}.landing-header .landing-header-login>.menu,.layout-landing .burger>.menu{align-items:center;display:flex;flex-direction:column;gap:4px;margin-top:4px}.landing-header .landing-header-login>.menu li,.layout-landing .burger>.menu li{align-items:center;background:hsla(0,0%,100%,.05);border-radius:3.23571px;color:#fff;display:flex;font-size:16px;font-style:normal;font-weight:900;height:44px;justify-content:space-between;letter-spacing:.1em;line-height:120%;padding:0 15px;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0);transition:all .5s ease-out;width:90%}.landing-header .landing-header-login>.menu li:hover,.layout-landing .burger>.menu li:hover{background:#ffd554;color:#272537;cursor:pointer}.donate-modal{align-items:center;background:url(" + O + ") no-repeat;background-color:rgba(0,0,0,.9);background-position:50%;background-size:cover;display:flex;height:100%;justify-content:center;position:absolute;top:0;width:100%;z-index:1}@media(max-width:960px){.donate-modal{background:url(" + M + ") no-repeat;background-color:rgba(51,11,98,.9);background-position:100% 0,0 100%}}.donate-modal>.container{align-items:center;background:url(" + I + ") no-repeat;display:flex;gap:5em;height:1071px;justify-content:center;margin-bottom:100px;padding-left:150px;transform:scale(.8);width:1290px}@media(max-width:960px){.donate-modal>.container{background:transparent;height:100%;padding-left:0;width:100%}}.donate-modal>.container>.form{align-items:center;display:flex;flex-direction:column;gap:25px}.donate-modal>.container>.form>.secure{align-items:center;background:rgba(45,77,25,.4);border:2px solid rgba(123,198,77,.1);border-radius:8px;display:flex;gap:15px;height:90px;justify-content:center;width:295px}.donate-modal>.container>.form>.secure .title{color:#7bc64d;font-size:16px;font-weight:900;letter-spacing:.1em;line-height:80%;text-transform:uppercase}.donate-modal>.container>.form>.secure .descriptions{color:#7bc64d;font-size:14px;font-weight:600;letter-spacing:.1em;line-height:120%;margin-top:10px;opacity:.5;text-transform:uppercase}.donate-modal>.container>.form>.input-form{display:flex;flex-direction:column;gap:5px;z-index:999}.donate-modal>.container>.form>.input-form>label{color:#fff;font-size:14px;font-weight:900;line-height:100%;text-transform:uppercase}.donate-modal>.container>.form>.input-form>input{background:linear-gradient(180deg,hsla(0,0%,100%,.048),hsla(0,0%,100%,.2));border:2px solid rgba(242,234,255,.3);border-radius:8px;color:#fff;font-size:24px;font-weight:900;height:60px;line-height:100%;padding:0 10px;text-shadow:2px 4px 10px rgba(0,0,0,.25);width:295px}.donate-modal>.container>.form>.input-form>input:focus{box-shadow:none;outline:none}.donate-modal>.container>.form>.input-form>input::-webkit-inner-spin-button,.donate-modal>.container>.form>.input-form>input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.donate-modal>.container>.form>.input-form>.amount{align-items:center;background:#ffd554;border-radius:4px;color:#272537;display:flex;font-size:18px;font-weight:900;height:32px;justify-content:center;letter-spacing:.04em;line-height:100%;margin-left:231px;margin-top:35px;position:absolute;text-transform:uppercase;width:56px}.donate-modal>.container>.form>.bonus{display:flex;gap:15px}.donate-modal>.container>.form>.bonus>.item{border:2px solid hsla(0,0%,100%,.1);border-radius:8px;color:#fff;display:flex;font-size:18px;font-weight:900;gap:5px;letter-spacing:.04em;line-height:100%;padding:10px;text-transform:uppercase;transition:all .5s ease-out}.donate-modal>.container>.form>.bonus>.item:hover{cursor:pointer;transform:scale(1.1)}.donate-modal>.container>.form>.bonus>.item>div{color:#ffd554;font-size:12px;font-weight:900;letter-spacing:.04em;line-height:100%;text-transform:uppercase}.donate-modal>.container>.form>.terms{color:#fff;font-size:10px;font-weight:700;letter-spacing:.09em;line-height:130%;max-width:321px;opacity:.6;text-align:center;text-transform:uppercase}.donate-modal>.container>.form>.terms>a{color:#fff}.donate-modal>.container>.form>button{background:#ffd554;border:none;box-shadow:0 6.95725px 59.6336px rgba(255,213,84,.5);height:68px;transition:all .5s ease-out;width:289px}.donate-modal>.container>.form>button>span{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#272537,rgba(39,37,55,.59));-webkit-background-clip:text;background-clip:text;font-size:19.8779px;font-weight:900;line-height:100%;text-transform:uppercase}.donate-modal>.container>.form>button:hover{transform:scale(1.1)}.donate-modal>.container>.form>.donate-bonus{display:flex;flex-direction:column;gap:15px;margin-top:15px}.donate-modal>.container>.form>.donate-bonus .bottom-bonus,.donate-modal>.container>.form>.donate-bonus>.header-bonus{display:flex;gap:54px}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .proce,.donate-modal>.container>.form>.donate-bonus>.header-bonus .proce{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#fff 31.56%,hsla(0,0%,100%,.4));-webkit-background-clip:text;background-clip:text;font-size:18px;font-weight:900;line-height:100%}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .proce.active,.donate-modal>.container>.form>.donate-bonus>.header-bonus .proce.active{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#ffd634 31.56%,rgba(255,214,52,.61));-webkit-background-clip:text;background-clip:text}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .sum,.donate-modal>.container>.form>.donate-bonus>.header-bonus .sum{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#fff 31.56%,hsla(0,0%,100%,.4));-webkit-background-clip:text;background-clip:text;font-size:12.1939px;font-weight:700;line-height:120%}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .sum.active,.donate-modal>.container>.form>.donate-bonus>.header-bonus .sum.active{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#ffd634 31.56%,rgba(255,214,52,.61));-webkit-background-clip:text;background-clip:text}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .rub,.donate-modal>.container>.form>.donate-bonus>.header-bonus .rub{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#fff 31.56%,hsla(0,0%,100%,.4));-webkit-background-clip:text;background-clip:text;font-size:7.31633px;font-weight:800;line-height:120%}.donate-modal>.container>.form>.donate-bonus .bottom-bonus .rub.active,.donate-modal>.container>.form>.donate-bonus>.header-bonus .rub.active{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#ffd634 31.56%,rgba(255,214,52,.61));-webkit-background-clip:text;background-clip:text}.donate-modal>.container>.form>.donate-bonus .header-bonus{margin-left:40px}.donate-modal>.container>.form>.donate-bonus #progressbar{background:#363345;border-radius:300px;padding:1px}.donate-modal>.container>.form>.donate-bonus #progressbar>div{background:#ffd554;border-radius:300px;box-shadow:0 0 12px rgba(255,213,84,.45);height:4px;width:40%}.donate-modal>.container>.bonus{background:url(" + D + ") no-repeat;height:290px;width:290px}@media(max-width:960px){.donate-modal>.container>.bonus{display:none}}.donate-modal>.container>.man{background:url(" + S + ") no-repeat;background-position:100% 100%;height:100%;margin-top:15em;width:400px}@media(max-width:960px){.donate-modal>.container>.man{display:none}}.donate-modal>.container .donate-methods{align-items:center;display:flex;flex-direction:column;justify-content:center}.donate-modal>.container .donate-methods>button{background:#ffd554;border:none;box-shadow:0 6.95725px 59.6336px rgba(255,213,84,.5);height:68px;margin-top:15px;transition:all .5s ease-out;width:289px}.donate-modal>.container .donate-methods>button>span{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#272537,rgba(39,37,55,.59));-webkit-background-clip:text;background-clip:text;font-size:19.8779px;font-weight:900;line-height:100%;text-transform:uppercase}.donate-modal>.container .donate-methods>button:hover{transform:scale(1.1)}.donate-modal>.container .donate-methods .types{display:flex;flex-direction:column;gap:10px;width:300px}.donate-modal>.container .donate-methods .types>div{display:flex;gap:5px;justify-content:center}.donate-modal>.container .donate-methods .types>div>.type{align-items:center;background:linear-gradient(180deg,hsla(0,0%,100%,.048),hsla(0,0%,100%,.2));border:2px solid rgba(242,234,255,.3);border-radius:8px;color:#fff;display:flex;flex-direction:column;font-size:14px;font-weight:700;height:112px;justify-content:center;letter-spacing:.02em;line-height:140%;text-align:center;text-transform:uppercase;transition:all 1s ease-out;width:100px}.donate-modal>.container .donate-methods .types>div>.type:hover{cursor:pointer}.donate-modal>.container .donate-methods .types>div>.type.active,.donate-modal>.container .donate-methods .types>div>.type:hover{background:#fff;border:4px solid rgba(242,234,255,.3);border-radius:8px;color:#000}.donate-modal>.container .donate-methods>.label{color:#fff;font-size:25px;font-weight:700;letter-spacing:.09em;line-height:130%;margin-top:15px;opacity:.6;text-align:center;text-transform:uppercase}.donate-modal>.container .donate-success,.donate-modal>.container .donate-success>.container{align-items:center;display:flex;flex-direction:column}.donate-modal>.container .donate-success>.container{background:rgba(45,77,25,.4);border:2px solid rgba(123,198,77,.1);border-radius:8px;gap:10px;height:83px;justify-content:center;width:260px}.donate-modal>.container .donate-success>.container>.title{color:#7bc64d;font-size:14px;font-weight:900;letter-spacing:.1em;line-height:80%;text-transform:uppercase}.donate-modal>.container .donate-success>.container>.descriptions{color:#7bc64d;font-size:14px;font-weight:600;letter-spacing:.1em;line-height:120%;opacity:.5;text-transform:uppercase}.donate-modal>.container .donate-success>button{background:#ffd554;border:none;box-shadow:0 6.95725px 59.6336px rgba(255,213,84,.5);height:68px;margin-top:100px;transition:all .5s ease-out;width:289px}.donate-modal>.container .donate-success>button>span{-webkit-text-fill-color:transparent;text-fill-color:transparent;background:linear-gradient(90deg,#272537,rgba(39,37,55,.59));-webkit-background-clip:text;background-clip:text;font-size:19.8779px;font-weight:900;line-height:100%;text-transform:uppercase}.donate-modal>.container .donate-success>button:hover{transform:scale(1.1)}.donate-modal>.container>svg{cursor:pointer;margin-left:69%;margin-top:100px;position:absolute;top:0}@media(max-width:960px){.donate-modal>.container>svg{margin-left:100%;margin-top:46px}}.donate-modal>.gold{background:url(" + N + ") no-repeat,url(" + R + ") no-repeat,url(" + L + ") no-repeat;background-position:left top -10em,0 100%,100% 100%;background-size:auto,auto,30%;height:100%;position:absolute;width:100%}", ""]), C.locals = {}, t.exports = C
    }, function(t, e, n) {
        t.exports = n.p + "img/logo.cec82d9.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/login.05abd27.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/bg-burger-menu.26f3652.jpg"
    }, function(t, e, n) {
        t.exports = n.p + "img/bg-donate.33685f2.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/mobile-background.f21d423.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/container.c515696.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/title.268c9f3.svg"
    }, function(t, e, n) {
        t.exports = n.p + "img/man.3d9cd75.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/light.c2c9537.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/light-footer.55c7cff.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/woman.023f932.png"
    }, function(t, e, n) {
        "use strict";
        n(208)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, '.input-component{background:#f3f3f3;border:1px solid #eff1f7;border-radius:4px;color:#76787d;font-family:"Inter";font-size:15px;font-style:normal;font-weight:400;line-height:18px;padding:16px}', ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        "use strict";
        n(209)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, '.button-component{background:var(--background);border:none;border-radius:4px;color:#23262d;font-family:"Inter";font-size:16px;font-style:normal;font-weight:600;height:var(--height);line-height:19px;transition:all .5s ease-out;width:var(--width)}.button-component:hover{background:#eec227!important;cursor:pointer}', ""]), r.locals = {}, t.exports = r
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAANCAYAAAA0XUfWAAACV0lEQVRIiXWVTYiOURTH/94Zhika3/mehZUVk5HoXZGF2EjvguRjMSQLWfnIgqQRNmxsFGYjpdQoCb3JxGhmMJHGkIYdMyI1NWbw0+U8Oo7nOXWe597/+d9zzr3nPucRcB7oBp45fQKcBUqAnM4CnjredmBeWNvs+BuBm8AQf+Qn8Np8K+geoMv52ZrZM+IUoAV4xb+yJjg65KyjwGxgc1gz1TZ3mWK5E/wuBL4H9pWYZKYLgB+OeNDZUuC3ztZm+GmH9RnWEgK+AW4AVeArcCLEbc3ZTl9RkrIjz+Saw9cFJysN73DYJcOqDusO12YiMNPNJwGfjDsWYjQkTkn/y12HLHPj3W7cJalTUq2kJoc/tne9w5ZIqkgaZ/MRSYPOvkXSNBvfljTgbM2/nzknudbtJF30ycCcsMttxl0edr7U8MM55XsUPqpMex2nAlx18yNF5U7lGHHEMnDUzT8AE4y71+HDQK3hNVb6KOm+73Cxys7+GagDDjisvSjJpPcccT/wzs2POV6bw+/n+Ekt6EVI9JtVRnbnM7lg2OpwIIVJ+nINuPGYC5C039lOFfiqsV7sZQMwP7SdbusAtwJ3UVGSK3JKhd2XjDM92Da5Es4I/nYFbuoMJwtiRKkUJZl2/yVnwSrHWR9scw3vsZJ22sl0hN7bb21n0GHDFi9T/02cKUpSFsBLT7Afd7b3htXn/Dm8fASa7HeaSeogjcH3Tmd/kPpckVyX1OiMrYHYIKnXxlV710m6KKksabGk8ZJGJb2U1C7pnKQhSfvc2uehNyZ5+NculX4Bi75OzKQycPoAAAAASUVORK5CYII="
    }, function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAYAAABD2GxlAAACs0lEQVRIiaWXy2sTURSHvzsmxVRrozi+FWsFRXzUB9qdUkEr6EIU63agC/8EV4ruXdiVu2xroSC+quBCcCOipohLheID0fFRrbbQ1Fw5yQ2meUxnTn4QSO7MOfnuzLnn/q4hQhZ/OXAO6Af2AeuBRcAs8BZ4CtwC7hvCuepMNkcKOAGcBnqBbqAN+At8BF4CD4ARE/CjGUVDQIu/DLgEXACWRE3C6QNwGciRC2UkAK4AG2LE/gFuAFdNwK8FAS2+zHYE2Bgj+XylC3muTxoy9CSOhffytkxQeiuNAS3+KeAmkEmc3hSh/xtsBfa4QkiuGeC8CbhdB2jxDwKPVXCiYyGsdd87ofQMIyu8qQTyiAl4Jjd4Dm4pMKyG2/31P5zoJzChyoRjGLa5cu17bvAi0KVKly5Aj60ffwdMqyG7HBPGrVhZhR2qVL0hbGtybQ2wXQ35XRaqPMGzajhseVE00xfX9XRaAZzxXBPWafV09GotApPq7KLjAnhAHe7PLHzPlDq76JCnasgVdTRYHLWKMYcIrRPAlDq8LcY9xZYA2wWwoA6fjXGPbkepqOi5FqPTVIytYnFLgBMC+FwdHsbYeJQNzCkvgGPq8M/t0X1OsmfV2UX3JMUo8FsXb+BNxOVVLdWgMI16hlBM4pA6zYtsaUOpk5TnJnVW0ZAY2FKVW3xxDq+BzapU4mb21lAK3BY1nHihw5VVjCEU2z2gbquvVsKnqt+dam9ExbQ6s5CqddQnnd3XO+puZ1b1jnrABNypDHjVVw3hXaDPnQ+SyXrwKDvODsaVcOIg+6rh6gAdpBxadgLXErxymdAghfR+MqXj6WCCSUp5yX/tqj0wlXki5M7F4hePirNwFlT2BjH1sgM9cX10zBDO2zJtjrSzcvKRgpcjqFSnrCaBzwMPxd43PRcD/wBp0JuO7W43bgAAAABJRU5ErkJggg=="
    }, function(t, e, n) {
        t.exports = n.p + "img/visa-secure.f3e2d0f.png"
    }, function(t, e, n) {
        t.exports = n.p + "img/mastercard-check.eeef597.png"
    }, function(t, e, n) {
        "use strict";
        n(211)
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(374),
            l = r((function(i) {
                return i[1]
            })),
            d = o(c);
        l.push([t.i, ".landing-footer{margin-top:500px}@media(max-width:750px){.landing-footer{transform:scale(.9)}}.landing-footer .content{display:flex;justify-content:flex-end;margin-bottom:100px;margin-right:9%;margin-top:-300px}@media(max-width:680px){.landing-footer .content{display:none}}@media(max-width:1280px){.landing-footer .content{margin-bottom:-19px;transform:scale(.9)}}@media(max-width:1000px){.landing-footer .content{margin-bottom:-53px;transform:scale(.7)}}.landing-footer .content>img{max-width:100%;width:500px}@media(max-width:680px){.landing-footer .content>img{display:none}}.landing-footer .info{align-items:center;display:flex;flex-direction:column;justify-content:center}.landing-footer .info .footer-logo{margin-left:27em}.landing-footer .info .info-wrap{align-items:baseline;display:flex}.landing-footer .info .info-wrap .item{margin-right:1em;text-align:right}.landing-footer .info .info-wrap .label{color:#fff;font-weight:600;margin-left:0}.landing-footer .info .info-wrap .label,.landing-footer .info .info-wrap .lik{font-size:16px;font-style:normal;line-height:100%;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0)}.landing-footer .info .info-wrap .lik{color:#ffdd3d;display:block;font-weight:800;margin-top:5px;position:relative}.landing-footer .info ul{width:300px;z-index:1}.landing-footer .info ul li{list-style:none;padding-top:15px}.landing-footer .info ul li a{color:#fff;font-size:16px;font-style:normal;font-weight:600;line-height:100%;text-shadow:0 0 57px hsla(0,0%,100%,.51),0 11px 35px rgba(105,79,33,0)}.landing-footer .info .playments{align-items:center;display:flex;justify-content:center;margin-top:10px}.landing-footer .info .playments img{padding:10px}.landing-footer .content-mobile{background:url(" + d + ") no-repeat;width:948px}@media(min-width:681px){.landing-footer .content-mobile{display:none}}", ""]), l.locals = {}, t.exports = l
    }, function(t, e, n) {
        t.exports = n.p + "img/mobile-bg-footer.711197c.jpg"
    }, function(t, e, n) {
        "use strict";
        n(212)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, "", ""]), r.locals = {}, t.exports = r
    }, function(t, e, n) {
        "use strict";
        n(213)
    }, function(t, e, n) {
        var r = n(16),
            o = n(54),
            c = n(239),
            l = n(379),
            d = r((function(i) {
                return i[1]
            })),
            f = o(c),
            h = o(l);
        d.push([t.i, ".layout-site{background:url(" + f + ") no-repeat,url(" + h + ') no-repeat;background-color:#2d2a3f;background-position:top,bottom;font-family:"Akrobat";overflow:hidden}a{-webkit-text-decoration:none;text-decoration:none}', ""]), d.locals = {}, t.exports = d
    }, function(t, e, n) {
        t.exports = n.p + "img/support-footer.864ca25.jpg"
    }, function(t, e, n) {
        "use strict";
        n(214)
    }, function(t, e, n) {
        var r = n(16)((function(i) {
            return i[1]
        }));
        r.push([t.i, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]), r.push([t.i, ".support-layout{display:grid;min-height:100vh}", ""]), r.locals = {}, t.exports = r
    }, function(t, e) {}, function(t, e) {}, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return o
        })), n.d(e, "mutations", (function() {
            return c
        })), n.d(e, "actions", (function() {
            return l
        })), n.d(e, "getters", (function() {
            return d
        }));
        var r = n(4),
            o = (n(31), function() {
                return {
                    menu: [{
                        name: "Поддержка",
                        url: "/support"
                    }, {
                        name: "Новости",
                        url: "/news"
                    }, {
                        name: "Wiki",
                        url: "/wiki"
                    }, {
                        name: "Жалобы",
                        url: "/complaints"
                    }]
                }
            }),
            c = {
                setMenu: function(t, data) {
                    console.log(data), t.menu = t.menu.push({
                        name: "Управление",
                        url: "/dashboard"
                    })
                }
            },
            l = {
                fetch: function(t) {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function n() {
                        var r, o, data;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = t.commit, n.next = 3, e.$axios.post("/api/auth/menu");
                                case 3:
                                    o = n.sent, data = o.data, r("setMenu", data.staff);
                                case 6:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                }
            },
            d = {
                menu: function(s) {
                    return s.menu
                }
            }
    }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return o
        })), n.d(e, "mutations", (function() {
            return c
        })), n.d(e, "actions", (function() {
            return l
        })), n.d(e, "getters", (function() {
            return d
        }));
        var r = n(4),
            o = (n(31), n(28), function() {
                return {
                    newsArr: {
                        news: [],
                        contest: [],
                        stocks: [],
                        updates: [],
                        video: []
                    },
                    active: {
                        name: "Новости",
                        storeCategory: "news"
                    },
                    menu: [{
                        name: "Новости",
                        storeCategory: "news"
                    }, {
                        name: "Конкурсы",
                        storeCategory: "contest"
                    }, {
                        name: "Акции",
                        storeCategory: "stocks"
                    }, {
                        name: "Обновления",
                        storeCategory: "updates"
                    }, {
                        name: "Видеоролики",
                        storeCategory: "video"
                    }]
                }
            }),
            c = {
                setNews: function(t, data) {
                    t.newsArr[data.category] = data.data
                },
                setActive: function(t, e) {
                    t.active = e
                }
            },
            l = {
                fetch: function(t, menu) {
                    var e = this;
                    return Object(r.a)(regeneratorRuntime.mark((function n() {
                        var r, o;
                        return regeneratorRuntime.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = t.commit, n.next = 3, e.$axios.get("/api/news", {
                                        params: {
                                            category: menu.name
                                        }
                                    });
                                case 3:
                                    o = n.sent, r("setNews", {
                                        category: menu.storeCategory,
                                        data: o.data
                                    });
                                case 5:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))()
                },
                fetchActive: function(t, e) {
                    (0, t.commit)("setActive", e)
                }
            },
            d = {
                news: function(s) {
                    return s.newsArr
                },
                active: function(s) {
                    return s.active
                },
                menu: function(s) {
                    return s.menu
                }
            }
    }],
    [
        [240, 70, 1, 71]
    ]
]);