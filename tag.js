(function() {
    try {
        (function() {
            function af(a, c, b, d) {
                var e = this;
                return D(window, "c.i", function() {
                    function f(t) {
                        (t = bf(k, l, "", t)(k, l)) && (V(t.then) ? t.then(g) : g(t));
                        return t
                    }

                    function g(t) {
                        t && (V(t) ? m.push(t) : ta(t) && y(function(A) {
                            var Q = A[0];
                            A = A[1];
                            V(A) && ("u" === Q ? m.push(A) : h(A, Q))
                        }, Ea(t)))
                    }

                    function h(t, A, Q) {
                        e[A] = Ql(k, l, Q || p, A, t)
                    }
                    var k = window;
                    (!k || isNaN(a) && !a) && cf();
                    var l = Rl(a, df, c, b, d),
                        m = [],
                        p = [mh, bf, nh];
                    p.unshift(Sl);
                    var r = B(R, kb),
                        q = N(l);
                    l.id || Wa(mc("Invalid Metrika id: " + l.id, !0));
                    var u = bd.C("counters", {});
                    if (u[q]) return vb(k,
                        q, "Duplicate counter " + q + " initialization"), u[q];
                    u[q] = e;
                    bd.D("counters", u);
                    bd.Na("counter", e);
                    y(function(t) {
                        t(k, l)
                    }, Xd);
                    y(f, cd);
                    f(Tl);
                    h(Ul(k, l, m), "destruct", [mh, nh]);
                    Mb(k, E([k, r, f, 1, "a.i"], oh));
                    y(f, Y)
                })()
            }

            function Vl(a, c) {
                var b = "" + c,
                    d = {
                        id: 1,
                        aa: "0"
                    },
                    e = Wl(b);
                e ? d.id = e : -1 === b.indexOf(":") ? (b = Ja(b), d.id = b) : (b = b.split(":"), e = b[1], d.id = Ja(b[0]), d.aa = Yd(e) ? "1" : "0");
                return [Ka(a, d), d]
            }

            function Xl(a, c) {
                var b;
                if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                    var d =
                        c.source,
                        e = (b = {}, b._ym_uid = a, b);
                    d.postMessage(e, "https://oauth.yandex.ru")
                }
            }

            function ph(a, c) {
                void 0 === c && (c = !0);
                var b = nc("canvas", a.document);
                if (b && (b = Fc(b))) {
                    var d = Zd(a) || Gc(a),
                        e = d[0];
                    d = d[1];
                    if (.3 <= qh(a, b, {
                            h: d,
                            w: e
                        }) / d * e) {
                        H(a).D("hc", 1);
                        return
                    }
                }
                c && U(a, E([a, !1], ph), 3E3)
            }

            function Yl(a) {
                var c = M(function(b, d) {
                    var e = d[1],
                        f = Zl(a[d[0]]);
                    f && b.push("" + e + "\n" + f);
                    return b
                }, [], Ea($l));
                return I("\n", c)
            }

            function am(a) {
                return "che\n" + a
            }

            function Zl(a) {
                return ka(a) ? a : ba(a) ? I(",", B(function(c) {
                    return '"' + c.brand + '";v="' +
                        c.version + '"'
                }, a)) : fa(a) ? "" : a ? "?1" : "?0"
            }

            function bm(a, c) {
                var b = cm(a),
                    d = [dm(a) || em(a)];
                rh(a) && d.push(b);
                var e = ca(a);
                b = Na(a);
                var f = b.C("synced", {});
                d = la(function(g) {
                    if (c[g]) {
                        var h = (f[g] || 1) + 1440 < e(lb);
                        h && delete f[g];
                        return h
                    }
                }, d);
                b.D("synced", f);
                return B(function(g) {
                    return {
                        Hi: c[g],
                        Wh: g
                    }
                }, d)
            }

            function em(a) {
                a = fm(a);
                return gm[a] || a
            }

            function cm(a) {
                a = sh(a);
                return hm[a] || "ru"
            }

            function im(a, c, b, d) {
                var e = b.K;
                if (c.$i || Yd(c.aa) || !e) d();
                else {
                    var f = $d(a),
                        g = dd(a, ""),
                        h = function() {
                            var u = th(f);
                            u = "" + u + jm(u, g);
                            ae(b,
                                "gdpr", u);
                            d()
                        };
                    if (3 === c.id) h();
                    else {
                        var k = H(a);
                        if (e = k.C("f1")) e(h);
                        else {
                            var l = (e = th(f)) ? B(w(be, n), e.split(",")) : [];
                            if (uh(l)) h();
                            else {
                                e = ce(a);
                                var m = S(a);
                                var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                                    version: 2,
                                    pf: km,
                                    xf: "_inversed_buttons"
                                } : void 0;
                                var r = (e = e || !!p) && (Za(m.href, "yagdprcheck=1") || g.C("yaGdprCheck"));
                                m = g.C("gdpr");
                                var q = K.resolve();
                                g.C("yandex_login") ? (l.push("13"), g.D("gdpr", Hc, 525600)) : e ? L(m, Zb) ? m === ef ? l.push("12") :
                                    l.push("3") : ff(a) || lm(a) ? l.push("17") : q = mm(a).then(function(u) {
                                        u && l.push("28")
                                    }, F) : l.push("14");
                                q.then(function() {
                                    var u = w(f, nm);
                                    uh(l) ? (y(u, l), h()) : (de.push(h), k.D("f1", function(t, A) {
                                        var Q = 0;
                                        if (A) {
                                            var O = mb(a, A) || "";
                                            Q += O.length
                                        }
                                        de.push(t);
                                        1E6 >= Q && de.push(t)
                                    }), (0, gf[0])(a).then(W("params.eu")).then(function(t) {
                                        if (t || r) {
                                            g.D("gdpr_popup", ef);
                                            om(a, c);
                                            if (eb(a)) return pm(a, u, c);
                                            var A = vh(a, f);
                                            if (A) return t = qm(a, u, A, c, p), t.then(E([a, c], rm)), t
                                        }
                                        t || u("8");
                                        return K.resolve({
                                            value: Hc,
                                            Jd: !0
                                        })
                                    }).then(function(t) {
                                        g.Eb("gdpr_popup");
                                        if (t) {
                                            var A = t.value;
                                            t = t.Jd;
                                            L(A, Zb) && g.D("gdpr", A, t ? void 0 : 525600)
                                        }
                                        A = $b(de, ha);
                                        oc(a, A, 20)(Qa(D(a, "gdr"), F));
                                        k.D("f1", ha)
                                    })["catch"](D(a, "gdp.a")))
                                })
                            }
                        }
                    }
                }
            }

            function rm(a, c) {
                if (ce(a)) {
                    var b = $d(a),
                        d = Ka(a, c);
                    d = d && d.params;
                    b = B(w(sm, n), hf(b));
                    d && b.length && d("gdpr", pa(b))
                }
            }

            function pm(a, c, b) {
                var d = ee(a, b);
                return new K(function(e) {
                    var f;
                    if (d) {
                        var g = d.Z,
                            h = v(w("4", c), w(null, e)),
                            k = U(a, h, 2E3, "gdp.f.t");
                        d.Sf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.F(za(["GDPR-ok-view-default", "GDPR-ok-view-detailed"],
                                jf), function(m) {
                                e({
                                    value: wh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(E([a, k], ma))
                    } else e({
                        value: ef,
                        Jd: !0
                    })
                })
            }

            function om(a, c) {
                var b = ee(a, c);
                b && b.Z.F(["isYandex"], function() {
                    var d;
                    return d = {
                        type: "isYandex"
                    }, d.isYandex = ce(a), d
                });
                return b
            }

            function tm(a, c, b) {
                a = b || sh(a);
                return L(a, c) ? a : "en"
            }

            function wh(a) {
                if (L(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Hc;
                a = a.replace("GDPR-ok-view-detailed-", "");
                return L(a, Zb) ? a : Hc
            }

            function xh(a, c, b) {
                var d = n(a, "AppMetricaInitializer"),
                    e = n(d,
                        "init");
                if (e) try {
                    G(e, d)(mb(a, c))
                } catch (f) {} else yh = U(a, E([a, c, 2 * b], xh), b, "ai.d");
                return function() {
                    return ma(a, yh)
                }
            }

            function um(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = G(c, a.speechSynthesis);
                return pc(function(b) {
                    return B(w(b, n), vm)
                }, a())
            }

            function wm(a, c, b) {
                return I("x", B(v(R, Aa("concat", "" + a), w(b, n)), c))
            }

            function xm(a, c) {
                var b = c.Fg;
                if (!zm(a, b)) return "";
                var d = [];
                a: {
                    var e = Am(a, b);
                    try {
                        var f = E(e, v)()();
                        break a
                    } catch (A) {
                        if ("ccf" === A.message) {
                            f = null;
                            break a
                        }
                        Wa(A)
                    }
                    f = void 0
                }
                if (Ra(f)) var g =
                    "";
                else try {
                    g = f.toDataURL()
                } catch (A) {
                    g = ""
                }(f = g) && d.push(f);
                var h = b.getContextAttributes();
                try {
                    var k = na(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (A) {
                    k = []
                }
                k = I(";", k);
                f = kf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                e = kf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                g = b.getParameter(b.ALPHA_BITS);
                h = h && h.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    r = b.getExtension("EXT_texture_filter_anisotropic") ||
                    b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (r) {
                    var q = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === q && (q = 2)
                }
                q = {
                    lj: k,
                    "webgl aliased line width range": f,
                    "webgl aliased point size range": e,
                    "webgl alpha bits": g,
                    "webgl antialiasing": h,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": r ? q : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": kf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                lf(d, q, ": ");
                a: {
                    try {
                        var u = b.getExtension("WEBGL_debug_renderer_info");
                        if (u) {
                            var t = {
                                "webgl unmasked vendor": b.getParameter(u.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(u.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (A) {}
                    t = {}
                }
                lf(d, t);
                if (!b.getShaderPrecisionFormat) return I("~", d);
                lf(d, Bm(b));
                return I("~", d)
            }

            function lf(a, c, b) {
                void 0 === b && (b = ":");
                y(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Ea(c))
            }

            function Cm(a, c, b, d) {
                c = d.C("cc");
                d = E(["cc", ""], d.D);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && Ja(e)) && 1440 < ca(a)(lb) - e) return d();
                    b.D("cc", c)
                } else wa(0)(c) ||
                    d()
            }

            function Dm(a, c, b, d) {
                return qa(c, function(e) {
                    if (!mf(e) && !ed(a))
                        if (e = d.C("zzlc"), X(e) || Ra(e) || "na" === e) {
                            e = "ru";
                            var f = nf(a, 68),
                                g = of (a, 79);
                            if (f || g) e = "md";
                            if (f = $a(a)) {
                                var h = f("iframe");
                                z(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + zh("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = ac(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = ia(a).F(a, ["message"], D(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (qc(h), m = m.substr(8), d.D("zzlc", m), b.D("zzlc",
                                                m), l(), ma(a, k))
                                        }));
                                    k = U(a, v(l, w(h, qc)), 3E3)
                                }
                            }
                        } else b.D("zzlc", e)
                })
            }

            function Em(a, c, b) {
                var d, e;
                c = wb(w(a, n), Fm);
                c = X(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    V(a) && (G(a, f, "y.metrika")(), a = n(f, "createOffer"), V(a) && !a.length && (a = G(a, f)(), d = n(a, "then"), V(d) && G(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        V(h) && G(h, f, g, F, F)()
                    })(), z(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (V(h)) {
                            h =
                                G(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate = F;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = rc(k[1]), b.D("pp", g));
                            f.onicecandidate = F;
                            h()
                        }
                    }, e))))
                }
            }

            function Gm(a, c, b) {
                var d, e = fd(a, c);
                if (e) {
                    e.Z.F(["gpu-get"], function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.C("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = U(a, E([a, c, b], Ah), 200, "pu.m");
                        e.je(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (ma(a, g), b.D("pu",
                                l))
                        })
                    } else Ah(a, c, b)
                }
            }

            function Ah(a, c, b) {
                var d = n(a, "location.host");
                a = gd(a, c);
                b.D("pu", "" + rc(d) + a)
            }

            function Bh(a, c, b) {
                c = dd(a, void 0, c);
                c = Ch(a, c.C("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g && f ? Hm(a, b.lc, {
                    dg: Im
                }).Cf(g).then(function(h) {
                    return Jm(b, {
                        Bb: d,
                        Ob: e,
                        Vf: f
                    }, h.ia, g, h.Aa)
                })["catch"](function() {}) : K.resolve()
            }

            function Im(a, c, b) {
                a = Km(b.Oc);
                if ("href" === b.ee) {
                    var d = b.sb;
                    c = d.href;
                    b = c.replace(a, b.Za);
                    if (c !== b) return d.href = b, !0
                } else if ((a =
                        null === (d = b.sb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Za)) && a !== b.sb.textContent) return b.sb.textContent = a, !0;
                return !1
            }

            function Jm(a, c, b, d, e) {
                var f;
                c.Bb && c.Ob && (c.Bb === a.Bb && c.Ob === a.Ob || z(a, c, {
                    ia: {},
                    eb: !0
                }), 0 < e && Sa(a.Aa, [e]), y(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.ia[l] && a.ia[l][g] ? a.ia[l][g] : 0);
                    z(a.ia, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), y(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.ia[l] ? a.ia[l][g] : 0);
                    z(a.ia, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.kf && (a.eb || b.length) && ((c = Ka(a.l, a.lc)) &&
                    c.params("__ym", "phc", (f = {}, f.clientId = a.Bb, f.orderId = a.Ob, f.service_id = a.Vf, f.phones = a.ia, f.performance = a.Aa, f)), a.eb = !1))
            }

            function Lm(a) {
                a = $a(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = Aa("canPlayType", a),
                        b = pc(function(d) {
                            return B(v(R, Aa("concat", d + "; codecs=")), Mm)
                        }, Dh);
                    return B(c, [].concat(Dh, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Nm(a) {
                var c = n(a, "matchMedia");
                if (c && Fa("matchMedia", c)) {
                    var b = Aa("matchMedia", a);
                    return M(function(d, e) {
                        d[e] = b("(" + e + ")");
                        return d
                    }, {}, Om)
                }
            }

            function Bm(a) {
                return M(function(c,
                    b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,
                        a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int",
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)
                    ],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function Am(a, c) {
                return [function() {
                    var b = c.createBuffer();
                    b && c.getParameter && Fa("getParameter", c.getParameter) || pf();
                    c.bindBuffer(c.ARRAY_BUFFER, b);
                    var d = new a.Float32Array(Pm);
                    c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                    b.Sh = 3;
                    b.ai = 3;
                    d = c.createProgram();
                    var e = c.createShader(c.VERTEX_SHADER);
                    d && e || pf();
                    return {
                        ce: d,
                        Zi: e,
                        Yi: b
                    }
                }, function(b) {
                    var d = b.ce,
                        e = b.Zi;
                    c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    (d = c.createShader(c.FRAGMENT_SHADER)) || pf();
                    return z(b, {
                        jh: d
                    })
                }, function(b) {
                    var d = b.ce,
                        e = b.jh;
                    c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                    c.compileShader(e);
                    c.attachShader(d, e);
                    c.linkProgram(d);
                    c.useProgram(d);
                    return b
                }, function(b) {
                    var d = b.ce;
                    b = b.Yi;
                    d.Xi = c.getAttribLocation(d, "attrVertex");
                    d.ei = c.getUniformLocation(d, "uniformOffset");
                    c.enableVertexAttribArray(d.Ij);
                    c.vertexAttribPointer(d.Xi, b.Sh, c.FLOAT, !1, 0, 0);
                    c.uniform2f(d.ei, 1, 1);
                    c.drawArrays(c.TRIANGLE_STRIP, 0, b.ai);
                    return c.canvas
                }]
            }

            function zm(a, c) {
                if (!V(a.Float32Array)) return !1;
                var b = n(c, "canvas");
                if (!b || !Fa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function kf(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Qm(a, c) {
                if (n(c, "settings.ins")) {
                    var b = H(a);
                    if (!b.C("scip")) {
                        var d = qf(a),
                            e = ca(a)(lb),
                            f = rf(d.C("sci"));
                        if (!(f && 1440 >= e - f)) {
                            f = ra(a, "ci");
                            var g = ["sync.cook.int"],
                                h = function(l) {
                                    l = b.C("scip", "") + l;
                                    b.D("scip", l)
                                },
                                k = w("a", h);
                            b.D("scip", "0");
                            return f({
                                $: {
                                    ra: g,
                                    wb: 3E3,
                                    Zc: !0
                                }
                            }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                                l = n(l.Qc,
                                    "CookieMatchUrls");
                                if (ba(l) && Oa(l)) {
                                    h("1");
                                    var m = ra(a, "c");
                                    l = B(function(p, r) {
                                        return m({
                                            $: {
                                                ra: g,
                                                wb: 3E3
                                            }
                                        }, ["https://" + p])["catch"](v(w("b", h), w("" + r, h)))
                                    }, la(ka, l));
                                    return K.all(l)
                                }
                                k()
                            }, k).then(function() {
                                var l = b.C("scip");
                                !l || Za(l, "a") || Za(l, "b") || (d.D("sci", e), h("2"))
                            }, F)
                        }
                    }
                }
            }

            function Rm() {
                return M(function(a, c) {
                    var b = rc(c + "/tag.js");
                    Eh[b] || (a[b] = 1);
                    return a
                }, {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
            }

            function Fh(a) {
                return {
                    M: function(c, b) {
                        if (!c.K) return b();
                        var d =
                            H(a).C("fid");
                        !Gh && d && (ae(c, "fid", d), Gh = !0);
                        return b()
                    }
                }
            }

            function Sm(a, c) {
                var b = a.document;
                if (L(b.readyState, ["interactive", "complete"])) Mb(a, c);
                else {
                    var d = ia(a),
                        e = d.F,
                        f = d.Yb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function sf(a) {
                return {
                    M: function(c, b) {
                        var d = c.K;
                        if (d) {
                            var e = H(a).C("adBlockEnabled");
                            e && d.D("adb", e)
                        }
                        b()
                    }
                }
            }

            function Tm(a) {
                var c = D(a, "i.clch", Um);
                ia(a).F(a.document, ["click"], w(a, c), {
                    passive: !1
                });
                return function(b) {
                    var d =
                        Ba.Pa,
                        e = a.Ya[Ba.jc],
                        f = !!e._informer;
                    e._informer = z({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || sc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Vm(a, c) {
                var b = Na(a);
                if ("" === b.C("cc")) {
                    var d = w("cc", b.D);
                    d(0);
                    var e = ca(a),
                        f = H(a);
                    f = v(W(Wm({
                        Qc: 1
                    }) + ".c"), hd(function(g) {
                        d(g + "&" + e(lb))
                    }), w("cc", f.D));
                    ra(a, "6", c)({
                        $: {
                            Zc: !0,
                            lg: !1
                        }
                    }, ["https://mc.yandex.md/cc"]).then(f)["catch"](v(hd(function() {
                        var g = e(lb);
                        b.D("cc", "&" + g)
                    }), D(a, "cc")))
                }
            }

            function fe(a, c) {
                if (!c) return !1;
                var b = S(a);
                return (new RegExp(c)).test("" +
                    b.pathname + b.hash + b.search)
            }

            function Xm(a, c) {
                return qa(c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Tg: Ym(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function Zm(a, c, b, d, e) {
                b = tf(a.document.body, b);
                d = tf(a.document.body, d);
                L(e.target, [b, d]) && uf(a, c)
            }

            function Hh(a, c, b, d) {
                (b = $m(a, d, b)) && uf(a, c, b)
            }

            function Ih(a, c) {
                var b = Jh(a, c);
                return an(a, b)
            }

            function Jh(a, c) {
                var b = tf(a.document.body, c);
                return b ? bn(a, b) : ""
            }

            function uf(a, c, b) {
                if (c = Ka(a, c)) a = Ic(["dr", b || "" + Ta(a, 10, 99)]), c.params(Ic(["__ym", a]))
            }

            function tf(a,
                c) {
                var b = null;
                try {
                    b = c ? nc(c, a) : b
                } catch (d) {}
                return b
            }

            function Kh(a) {
                a = xa(zh(a));
                return B(function(c) {
                    c = c.charCodeAt(0).toString(2);
                    return Lh("0", 8, c)
                }, a)
            }

            function bn(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                vf(a, c, function(e) {
                    if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
                    else e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                    (f = f && f.trim()) && b.push(f)
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function cn(a, c, b) {
                a = Ca(b);
                b = a[1];
                "track" === a[0] && c({
                    version: "0",
                    rc: b
                })
            }

            function dn(a, c, b) {
                if (b) {
                    var d = b.version;
                    (b = n(en, d + "." + b.rc)) && (c && L(b, fn) || a("ym-" + b + "-" + d))
                }
            }

            function gn(a, c, b) {
                if ("rt" === b) return "https://" + Mh(a, c) + ".mc.yandex.ru/watch/3/1";
                if ("mf" === b) {
                    b = S(a);
                    b = ge(b.protocol + "//" + b.hostname + b.pathname);
                    c = gd(a, c);
                    var d = "";
                    do d += Ta(a); while (d.length < c.length);
                    d = d.slice(0, c.length);
                    a = "";
                    for (var e = 0; e < c.length; e += 1) a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                    a = [d, a];
                    return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
                }
            }

            function hn(a,
                c, b) {
                var d, e = wf(c).Qb;
                return ra(a, "pi", c)({
                    K: Ga((d = {}, d[e] = 1, d))
                }, [b])
            }

            function jn(a, c, b) {
                return new K(function(d, e) {
                    if (kn(a, Nh, "isp")) {
                        var f = F,
                            g = function(h) {
                                ("1" === h ? d : e)();
                                f();
                                h = Oh(Nh);
                                L("isp", h.pb) && (h.pb = la(v(wa("isp"), tc), h.pb), h.pb.length || (qc(h.gb), h.gb = null))
                            };
                        f = ia(a).F(a, ["message"], E([b, g], D(a, "isp.stat.m", ln)));
                        U(a, g, 1500)
                    } else e()
                })
            }

            function ln(a, c, b) {
                var d = n(b, "data");
                if (ka(d)) {
                    var e = d.split("*");
                    d = e[0];
                    var f = e[1];
                    e = e[2];
                    "sc.frame" === d ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" ===
                        d && f === a && c(e)
                }
            }

            function mn(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c = a.data,
                            b = c.recordStamp,
                            d = c.tabId,
                            e = c.content;
                        delete c.recordStamp;
                        delete c.tabId;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                frameId: a.frameId || 0,
                                content: e,
                                recordStamp: b,
                                tabId: d,
                                meta: c
                            }
                        };
                        a.stamp && (c.stamp = a.stamp);
                        return c;
                    case "event":
                        a: {
                            b = {
                                type: "event",
                                stamp: a.stamp,
                                data: {
                                    frameId: a.frameId,
                                    type: a.event,
                                    meta: {}
                                }
                            };d = z({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    b.data.meta = {
                                        zoomFrom: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        zoomTo: d,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    b.data.meta = d.keystrokes;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    b.data.meta = d;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    b.data.target = d.target;
                                    b.data.meta = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    b.data.target = d.target;
                                    delete d.target;
                                    b.data.meta = d;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        stamp: a.stamp,
                                        data: {
                                            frameId: a.frameId,
                                            meta: {
                                                changes: [{
                                                    c: [{
                                                        id: d.target,
                                                        at: (c = {}, c.src = {
                                                            o: "",
                                                            n: d.value,
                                                            r: !1
                                                        }, c),
                                                        i: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = b
                        }
                        return a;
                    case "mutation":
                        return nn(a)
                }
                return a
            }

            function nn(a) {
                var c = z({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                ct: {
                                    o: "",
                                    n: c.value
                                },
                                i: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            c: [{
                                id: c.target,
                                at: M(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        o: "",
                                        n: f,
                                        r: fa(f)
                                    };
                                    return d
                                }, {}, Ea(c.attributes)),
                                i: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            a: B(function(d) {
                                    return {
                                        id: d,
                                        i: c.index
                                    }
                                },
                                c.nodes)
                        }];
                        break;
                    case "ad":
                        b = [{
                            b: B(function(d) {
                                return {
                                    id: d.id,
                                    nm: d.name,
                                    ns: d.namespace,
                                    pa: d.parent,
                                    pr: d.prev,
                                    nx: d.next,
                                    at: d.attributes,
                                    i: c.index,
                                    ct: d.content,
                                    h: d.hidden
                                }
                            }, c.nodes)
                        }]
                }
                return {
                    type: "mutation",
                    stamp: a.stamp,
                    data: {
                        frameId: a.frameId,
                        meta: {
                            changes: b,
                            index: c.index
                        }
                    }
                }
            }

            function on(a) {
                if (Ph.isEnabled(a)) return new Ph(a);
                if (Jc.isEnabled(a)) return new Jc(a)
            }

            function pn(a, c) {
                var b = Na(a),
                    d = "wv2rf:" + N(c),
                    e = c.fc,
                    f = xf(a),
                    g = b.C(d),
                    h = c.Qi;
                return X(f) || Ra(g) ? Da(function(k, l) {
                    qa(c, function(m) {
                        var p = !!n(m,
                            "settings.webvisor.forms");
                        p = !n(m, "settings.x3") && p;
                        f = xf(a) || n(m, "settings.eu");
                        b.D(d, Gb(p));
                        l({
                            fc: e,
                            Id: !!f,
                            Af: p,
                            fg: h
                        })
                    })
                }) : yf({
                    fc: e,
                    Id: f,
                    Af: !!Ja(g),
                    fg: h
                })
            }

            function qn() {
                var a = M(function(c, b) {
                    c[b[0]] = {
                        dd: 0,
                        Dg: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    zg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: M(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.dd * e.Dg)
                            }, 0, da(a))
                        }
                    },
                    gi: function(c) {
                        c && (c = a[c.data.type]) && (c.dd += 1)
                    }
                }
            }

            function rn(a) {
                return {
                    lh: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    nh: function() {
                        if (a.document.doctype) {
                            var c = z({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + I("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" :
                                "", d ? ' "' + d + '"' : ""
                            ]) + ">"
                        }
                        return null
                    }
                }
            }

            function sn(a, c, b) {
                var d = id(a),
                    e = ia(a),
                    f = eb(a),
                    g = c.wd(),
                    h = !n(a, "postMessage") || f && !n(a, "parent.postMessage"),
                    k = w(d, R);
                if (h) {
                    if (!g) return U(a, G(d.O, d, "i", {
                        va: !1
                    }), 10), {
                        vd: k,
                        Of: F,
                        stop: F
                    };
                    Wa(Ua())
                }
                d.F(["sr"], function(q) {
                    var u, t = Qh(a, q.source);
                    t && zf(a, q.source, (u = {}, u.type = "\u043d", u.frameId = c.sa().Y(t), u))
                });
                d.F(["sd"], function(q) {
                    var u = q.data;
                    q = q.source;
                    (a === q || Qh(a, q)) && d.O("sdr", {
                        data: u.data,
                        frameId: u.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var q;
                            zf(a,
                                a.parent, (q = {}, q.type = "sr", q));
                            m = U(a, p, 100, "if.i")
                        };
                    p();
                    var r = function(q) {
                        d.ha(["\u043d"], r);
                        ma(a, m);
                        var u = Kc(a, q.origin).host;
                        l || q.source !== a.parent || !q.data.frameId || "about:blank" !== S(a).host && !L(u, b) || (l = !0, d.O("i", {
                            frameId: q.data.frameId,
                            va: !0
                        }))
                    };
                    d.F(["\u043d"], r);
                    U(a, function() {
                        d.ha(["\u043d"], r);
                        ma(a, m);
                        l || (l = !0, d.O("i", {
                            va: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.F(a, ["message"], function(q) {
                    var u = Hb(a, q.data);
                    u && u.type && L(u.type, tn) && d.O(u.type, {
                        data: u,
                        source: q.source,
                        origin: q.origin
                    })
                });
                return {
                    vd: k,
                    Of: function(q) {
                        var u;
                        return zf(a, a.parent, (u = {}, u.frameId = c.wd(), u.data = q, u.type = "sd", u))
                    },
                    stop: e
                }
            }

            function Qh(a, c) {
                try {
                    return wb(v(W("contentWindow"), wa(c)), xa(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function zf(a, c, b) {
                a = mb(a, b);
                c.postMessage(a, "*")
            }

            function Rh() {
                return bc() + bc() + "-" + bc() + "-" + bc() + "-" + bc() + "-" + bc() + bc() + bc()
            }

            function bc() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function un(a, c) {
                if (ka(c)) return c;
                var b = a.textContent;
                if (ka(b)) return b;
                b = a.data;
                if (ka(b)) return b;
                b = a.nodeValue;
                return ka(b) ? b : ""
            }

            function vn(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = La(c));
                var f = z(M(function(h, k) {
                    h[k.name] = k.value;
                    return h
                }, {}, xa(c.attributes)), d);
                z(f, wn(c, e, f));
                var g = (d = M(function(h, k) {
                    var l = k[0],
                        m = he(a, c, l, k[1], b, e),
                        p = m.value;
                    fa(p) ? delete f[l] : f[l] = p;
                    return h || m.lb
                }, !1, Ea(f))) && Fc(c);
                g && (f.width = g.width, f.height = g.height);
                return {
                    lb: d,
                    Ag: f
                }
            }

            function wn(a, c, b) {
                var d = {};
                Af(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function he(a, c, b, d, e, f) {
                void 0 ===
                    f && (f = La(c));
                var g = {
                    lb: !1,
                    value: d
                };
                if (Af(c)) "value" === b ? !fa(d) && "" !== d && (b = e.Id, f = e.Af, e = jd(a, c), f ? (b = Lc(a, c, b), a = b.mb, c = b.fb, b = b.Ta, g.lb = !c && (e || a)) : (g.lb = e, b = !(c && cc("ym-record-keys", c))), b || e) && (d = "" + d, g.value = 0 < d.length ? Sh("\u2022", d.length) : "") : "checked" === b && L((c.getAttribute("type") || "").toLowerCase(), xn) ? g.value = c.checked ? "checked" : null : yn.test(b) && Bf(a, c) && (g.value = null);
                else if ("IMG" === f && "src" === b)(e = jd(a, c)) ? (g.lb = e, g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") :
                    g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (L(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === ie(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && L(b, ["src", "type"])) g.value = null;
                return g
            }

            function Cf(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    J: function(e, f) {
                        return D(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function zn(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.yb) return K.resolve(F);
                var g = ra(a, "4", c),
                    h = {
                        K: Ga()
                    };
                b = new An(a, b, function(l,
                    m, p) {
                    if (!g) return K.resolve();
                    var r = "wv-data=" + Th(l, !0),
                        q = D(a, "m.n.m.s");
                    m = {};
                    m["wv-part"] = "" + p;
                    p = l.length;
                    for (var u = 0, t = 255, A = 255, Q, O, sa; p;) {
                        Q = 21 < p ? 21 : p;
                        p -= Q;
                        do O = "string" === typeof l ? l.charCodeAt(u) : l[u], u += 1, 255 < O && (sa = O >> 8, O &= 255, O ^= sa), t += O, A += t; while (--Q);
                        t = (t & 255) + (t >> 8);
                        A = (A & 255) + (A >> 8)
                    }
                    l = (t & 255) + (t >> 8) << 8 | (A & 255) + (A >> 8);
                    return g(z({}, h, {
                        $: {
                            ca: r
                        },
                        H: (m["wv-check"] = "" + (65535 === l ? 0 : l), m["wv-type"] = "0", m)
                    }), c)["catch"](q)
                });
                var k = Bn(a, b, d, e);
                return qa(c, function(l) {
                    l && H(a).D("isEU", n(l, "settings.eu"));
                    H(a).C("oo") || k && Uh(a, l) && k.start();
                    return f
                })
            }

            function Bn(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = ia(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = G(c.flush, c),
                    m = oa(function(q, u) {
                        D(a, "hfv." + q, function() {
                            try {
                                var t = u.type
                            } catch (A) {
                                return
                            }
                            t = L(t, d);
                            c.push(u, {
                                type: q
                            });
                            t && l()
                        })()
                    }),
                    p = D(a, "sfv", function() {
                        var q = b(a),
                            u = Cn(a);
                        y(function(t) {
                            f.push(g.F(t.target, [t.event], m(t.type)))
                        }, q);
                        y(function(t) {
                            f.push(g.F(t.target, [t.event], D(a, "hff." + t.type + "." + t.event, function(A) {
                                y(Da({
                                    l: a,
                                    oa: A,
                                    flush: l
                                }), t.N)
                            })))
                        }, u);
                        k = Vh(a, "form",
                            e);
                        e.attachEvent && (q = Vh(a, "form *", e), y(function(t) {
                            f.push(g.F(t, ["submit"], m("form")))
                        }, k), y(function(t) {
                            Df(t) && f.push(g.F(t, ["change"], m("formInput")))
                        }, q));
                        y(function(t) {
                            var A = t.submit;
                            if (V(A) || "object" === typeof A && Dn.test("" + A)) t[h] = A, t.submit = D(a, "fv", function() {
                                var Q = {
                                    target: t,
                                    type: "submit"
                                };
                                m("document")(Q);
                                return t[h]()
                            })
                        }, k)
                    }),
                    r = D(a, "ufv", function() {
                        y(ha, f);
                        y(function(q) {
                            q && (q.submit = q[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: r
                }
            }

            function En(a, c) {
                var b = la(function(e) {
                        return 0 < e.N.length
                    }, c),
                    d = Wh({
                        target: a.document,
                        type: "document"
                    });
                return B(v(R, d, Fn(a)), b)
            }

            function Xh(a, c) {
                var b = a.l,
                    d = [],
                    e = c.form;
                if (!c[Va] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        je(h) && !h[Va] && Sa(d, uc(b, h))
                    }
                } else Sa(d, uc(b, c));
                return d
            }

            function Ef(a) {
                if (kd) {
                    kd = !1;
                    var c = xb(a.l),
                        b = [];
                    fb(a.l, b, 15) ? a = [] : (T(b, c), a = b);
                    return a
                }
            }

            function Yh(a) {
                if (!kd) {
                    kd = !0;
                    a = xb(a.l);
                    var c = [];
                    Nb(c, 14);
                    T(c, a);
                    return c
                }
            }

            function Gn(a, c, b) {
                var d = c[Va];
                if (d) {
                    a: {
                        var e = xb(a),
                            f = c[Va];
                        if (0 < f) {
                            var g = [];
                            c = Ff(a, c);
                            var h = vc[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.wf) {
                                h.wf = k;
                                if (fb(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[0]);
                                T(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (fb(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                T(g, e);
                                T(g, f);
                                T(g, c[2]);
                                T(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Sa(b, a)
                }
                return d
            }

            function Lc(a, c, b) {
                void 0 === b && (b = !1);
                if (!c) return {
                    Ta: !1,
                    fb: !1,
                    mb: !1
                };
                var d = c.getAttribute("type") || c.type;
                if ("button" === d) return {
                    Ta: !1,
                    fb: !1,
                    mb: !1
                };
                var e = la(Zh, [c.className, c.id, c.name]),
                    f = c && cc("ym-record-keys", c);
                d = d && L(d, $h) || ab(bb(Hn), e);
                var g;
                (g = d) ||
                (g = c.placeholder, g = ab(bb(In), e) || Zh(g) && Jn.test(g || ""));
                e = g;
                return {
                    Ta: !f && (Gf(a, c) || e && b || e && !d && !b),
                    fb: f,
                    mb: e
                }
            }

            function Gf(a, c) {
                return Bf(a, c) || ld(a, c) ? !0 : jd(a, c)
            }

            function Zh(a) {
                return !!(a && 2 < a.length)
            }

            function Af(a) {
                try {
                    var c = La(a);
                    if (L(c, Hf)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || L(b.toLocaleLowerCase(), Kn)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function ai(a, c) {
                return c && cc("(ym-disable-submit|-metrika-noform)", c)
            }

            function Ln(a, c) {
                return I("", B(function(b) {
                    return a.isNaN(b) ? Mn.test(b) ? (b = b.toUpperCase() ===
                        b ? Nn : On, String.fromCharCode(Ta(a, b[0], b[1]))) : b : "" + Ta(a, 0, 9)
                }, c.split("")))
            }

            function jd(a, c) {
                if (fa(c)) return !1;
                if (If(c)) {
                    var b = c.parentNode;
                    return (fa(b) ? 0 : 11 === b.nodeType) ? !1 : jd(a, c.parentNode)
                }
                b = bi(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
                return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
            }

            function Uh(a, c) {
                var b = wc(a),
                    d = b.C("visorc");
                L(d, ["w", "b"]) || (d = "");
                ci(a) && di(a, ke, "visorc") && !Pn.test(gb(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = H(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.D("visorc", d, 30);
                return "w" === d
            }

            function Qn(a, c) {
                var b = ei(a, c);
                return {
                    M: function(d, e) {
                        d.K.Ub("we", Ib(c.yb));
                        b(d, "6", "3", "rn");
                        e()
                    }
                }
            }

            function Rn(a) {
                if (fi.isEnabled(a)) return new fi(a);
                if (Jc.isEnabled(a)) return new Jc(a)
            }

            function gi(a) {
                var c = le(a),
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return !c && b && !(!a.Uint8Array || !n(a, "Uint8Array.prototype.slice"))
            }

            function Jf(a,
                c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return $b([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function me(a, c, b) {
                a = c(b);
                c = [F, 0, 0];
                var d = [0, c, c, void 0];
                return $b(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) xc(d, hb(l)), h = k(h), l & 2 && xc(d, hb(h[1])), xc(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, Kf]);
                            m.push([0, hb(l), xc]);
                            m.unshift([0, 0, Lf]);
                            f.push.apply(f, m);
                            --g
                        } else if (g &
                            2) {
                            k = e[2];
                            var p = e[3],
                                r = e[4],
                                q = e[5],
                                u = da(h);
                            for (g = u.length - 1; 0 <= g;) m = u[g], m = [
                                [0, 0, Lf],
                                [r, h[m], q],
                                [k, m, p],
                                [0, 0, Kf],
                                [0, hb(l), xc]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, Kf]), m.push([0, hb(l), xc]), m.unshift([0, 0, Lf]), f.push.apply(f, m);
                    return d
                })
            }

            function Lf(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [F, 0, 0], a[2] = a[1]);
                xc(a, hb(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function Kf(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [F, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function xc(a,
                c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function Mf(a) {
                return [
                    [385, a.activity, hb],
                    [336, a.publishersHeader, Sn],
                    [272, a.articleInfo, Tn],
                    [208, a.event, Un],
                    [144, a.mutation, Vn],
                    [80, a.page, Wn]
                ]
            }

            function Xn(a) {
                return [
                    [385, a.partsTotal, hb],
                    [321, a.end, Ob],
                    [273, a.Kg, Yn],
                    [193, a.page, J],
                    [144, a.data, Mf],
                    [65, a.stamp, J]
                ]
            }

            function hi(a) {
                return [
                    [84, a.buffer, Xn]
                ]
            }

            function Zn(a) {
                return [
                    [129, a.position, J],
                    [81, a.name, P]
                ]
            }

            function $n(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function ao(a) {
                return [
                    [81, a.name, P]
                ]
            }

            function Tn(a) {
                return [
                    [593, a.updateDate,
                        P
                    ],
                    [532, a.rubric, Zn],
                    [449, a.chars, J],
                    [401, a.publicationDate, P],
                    [340, a.topics, $n],
                    [276, a.authors, ao],
                    [209, a.pageTitle, P],
                    [145, a.pageUrlCanonical, P],
                    [65, a.id, hb]
                ]
            }

            function bo(a) {
                return [
                    [513, a.chars, J],
                    [489, a.maxScrolled, md],
                    [385, a.involvedTime, J],
                    [321, a.height, J],
                    [257, a.width, J],
                    [193, a.y, J],
                    [129, a.x, J],
                    [65, a.id, hb]
                ]
            }

            function Sn(a) {
                return [
                    [129, a.involvedTime, J],
                    [84, a.articleMeta, bo]
                ]
            }

            function co(a) {
                return [
                    [81, a.hash, P]
                ]
            }

            function eo(a) {
                return [
                    [209, a.stack, P],
                    [145, a.Oe, P],
                    [81, a.code, P]
                ]
            }

            function fo(a) {
                return [
                    [193,
                        a.orientation, J
                    ],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function go(a) {
                return [
                    [84, a.keystrokes, ho]
                ]
            }

            function ho(a) {
                return [
                    [273, a.modifier, P],
                    [193, a.isMeta, Ob],
                    [145, a.key, P],
                    [65, a.id, J]
                ]
            }

            function io(a) {
                return [
                    [145, a.value, P],
                    [81, a.Aj, P]
                ]
            }

            function jo(a) {
                return [
                    [149, a.ac, P],
                    [81, a.method, P]
                ]
            }

            function ko(a) {
                return [
                    [257, a.pageHeight, J],
                    [193, a.pageWidth, J],
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function lo(a) {
                return [
                    [144, a.zoomTo, ii],
                    [80, a.zoomFrom, ii]
                ]
            }

            function ii(a) {
                return [
                    [193, a.y, J],
                    [129, a.x, J],
                    [105, a.level, md]
                ]
            }

            function mo(a) {
                return [
                    [84, a.touches, no]
                ]
            }

            function no(a) {
                return [
                    [297, a.force, md],
                    [233, a.y, md],
                    [169, a.x, md],
                    [81, a.id, P]
                ]
            }

            function oo(a) {
                return [
                    [193, a.hidden, Ob],
                    [129, a.checked, Ob],
                    [81, a.value, P]
                ]
            }

            function po(a) {
                return [
                    [257, a.endNode, J],
                    [193, a.startNode, J],
                    [129, a.end, J],
                    [65, a.start, J]
                ]
            }

            function qo() {
                return []
            }

            function ro(a) {
                return [
                    [193, a.page, Ob],
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function so(a) {
                return [
                    [129, a.y, J],
                    [65, a.x, J]
                ]
            }

            function to(a) {
                return [
                    [84, a.changes, uo]
                ]
            }

            function uo(a) {
                return [
                    [257, a.index, J],
                    [209, a.op,
                        P
                    ],
                    [145, a.style, P],
                    [65, a.target, J]
                ]
            }

            function Un(a) {
                return [
                    [1168, a.stylechangeEvent, to],
                    [1104, a.hashchangeEvent, co],
                    [1040, a.fatalErrorEvent, eo],
                    [976, a.deviceRotationEvent, fo],
                    [912, a.keystrokesEvent, go],
                    [848, a.resizeEvent, ko],
                    [784, a.zoomEvent, lo],
                    [720, a.Bj, io],
                    [656, a.xj, jo],
                    [592, a.touchEvent, mo],
                    [528, a.changeEvent, oo],
                    [464, a.selectionEvent, po],
                    [400, a.windowEvent, qo],
                    [336, a.scrollEvent, ro],
                    [272, a.mouseEvent, so],
                    [193, a.frameId, ne],
                    [129, a.target, ne],
                    [65, a.type, hb]
                ]
            }

            function Vn(a) {
                return [
                    [257, a.frameId,
                        ne
                    ],
                    [208, a.meta, vo],
                    [129, a.stamp, J],
                    [65, a.target, J]
                ]
            }

            function vo(a) {
                return [
                    [148, a.changes, wo],
                    [65, a.index, J]
                ]
            }

            function wo(a) {
                return [
                    [276, a.d, xo],
                    [212, a.c, yo],
                    [148, a.b, zo],
                    [84, a.a, Ao]
                ]
            }

            function xo(a) {
                return [
                    [193, a.i, J],
                    [144, a.ct, ji],
                    [65, a.id, J]
                ]
            }

            function yo(a) {
                return [
                    [193, a.i, J],
                    [146, a.at, 81, P, 144, ji],
                    [65, a.id, J]
                ]
            }

            function ji(a) {
                return [
                    [193, a.r, Ob],
                    [145, a.n, P],
                    [81, a.o, P]
                ]
            }

            function zo(a) {
                return [
                    [641, a.h, Ob],
                    [577, a.i, J],
                    [513, a.nx, J],
                    [465, a.ct, P],
                    [402, a.at, 81, P, 145, P],
                    [321, a.pr, J],
                    [273, a.ns, P],
                    [193, a.pa,
                        J
                    ],
                    [145, a.nm, P],
                    [65, a.id, J]
                ]
            }

            function Ao(a) {
                return [
                    [321, a.i, J],
                    [257, a.pa, J],
                    [193, a.nx, J],
                    [129, a.pr, J],
                    [65, a.id, J]
                ]
            }

            function Wn(a) {
                return [
                    [321, a.recordStamp, Bo],
                    [273, a.tabId, P],
                    [193, a.frameId, ne],
                    [148, a.content, Co],
                    [80, a.meta, Do]
                ]
            }

            function Co(a) {
                return [
                    [513, a.hidden, Ob],
                    [449, a.prev, J],
                    [385, a.next, J],
                    [337, a.content, P],
                    [257, a.parent, J],
                    [210, a.attributes, 81, P, 145, P],
                    [145, a.name, P],
                    [65, a.id, J]
                ]
            }

            function Do(a) {
                return [
                    [724, a.tj, Eo],
                    [656, a.location, Fo],
                    [592, a.viewport, ki],
                    [528, a.screen, ki],
                    [449, a.hasBase,
                        Ob
                    ],
                    [401, a.base, P],
                    [337, a.referrer, P],
                    [273, a.ua, P],
                    [209, a.address, P],
                    [145, a.title, P],
                    [81, a.doctype, P]
                ]
            }

            function Eo(a) {
                return [
                    [133, a.scroll, J],
                    [65, a.target, J]
                ]
            }

            function Fo(a) {
                return [
                    [209, a.path, P],
                    [145, a.protocol, P],
                    [81, a.host, P]
                ]
            }

            function ki(a) {
                return [
                    [129, a.height, J],
                    [65, a.width, J]
                ]
            }

            function P(a) {
                var c = Go({}, a, [], 0);
                return c ? [Ho, c, a] : [li, 0, 0]
            }

            function Yn(a) {
                return [Io, a.length, a]
            }

            function Ob(a) {
                return [li, 1, a ? 1 : 0]
            }

            function Bo(a) {
                a = mi(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [ni, 0 === c ?
                    0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a
                ]
            }

            function md(a) {
                return [Jo, 4, a]
            }

            function ne(a) {
                return hb((a << 1 ^ a >> 31) >>> 0)
            }

            function J(a) {
                return 0 > a ? [ni, 10, mi(a)] : hb(a)
            }

            function hb(a) {
                return [Ko, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function Ko(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function li(a, c, b, d) {
                b[d] = c
            }

            function Io(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function oi(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c =
                            b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function Jo(a, c, b, d) {
                return Lo(a)(a, c, b, d)
            }

            function Mo(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) nd(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) nd(2143289344, b, d);
                else if (3.4028234663852886E38 < c) nd((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) nd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    nd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function nd(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function ni(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function mi(a) {
                if (!a) return [0,
                    0
                ];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a, b]
            }

            function ei(a, c) {
                return function(b, d, e, f, g) {
                    var h;
                    b.H || (b.H = {});
                    var k = b.H,
                        l = b.Wa;
                    l = void 0 === l ? {} : l;
                    var m = S(a).href;
                    k.wmode = "0";
                    k["wv-hit"] = k["wv-hit"] || "" + yc(a);
                    k["page-url"] = k["page-url"] || m;
                    g && (k[g] = "0");
                    f && (k[f] = k[f] || "" + Ta(a));
                    k["wv-type"] || (k["wv-type"] = l.jf ? e : d);
                    d = {
                        ma: {
                            Ba: "webvisor/" + c.id
                        },
                        $: z(b.$ || {}, {
                            qb: (h = {}, h["Content-Type"] = "text/plain", h),
                            Be: "POST"
                        }),
                        H: k
                    };
                    z(b, d)
                }
            }

            function No(a, c) {
                return qa(c, function(b) {
                    var d = H(a);
                    N(c);
                    if (!d.C("dSync", !1)) return d.D("dSync", !0), pi(a, b, {
                        ab: c,
                        Qb: "s",
                        Nd: "ds",
                        Gi: function(e, f, g) {
                            var h = e.Qc;
                            e = e.host;
                            if (n(h, "settings")) return Wa(Ua("ds.e"));
                            f = f(Z) - g;
                            g = e[1];
                            var k, l;
                            h = Ga((k = {}, k.di = h, k.dit = f, k.dip = g, k));
                            k = (l = {}, l["page-url"] = S(a).href, l);
                            return ra(a, "S", qi)({
                                K: h,
                                H: k
                            }, qi)["catch"](D(a, "ds.rs"))
                        }
                    })
                })
            }

            function pi(a, c, b) {
                var d = b.ab,
                    e = ca(a),
                    f = Oo(a, c.userData, d),
                    g = Po(a);
                return g.length ? Qo(a, e, f, c, b).then(function() {
                    return Ro(a,
                        g, f, e, b)
                }, F) : K.resolve()
            }

            function Po(a) {
                var c = od(a);
                a = v(Nf, zc(["iPhone", "iPad"]))(a);
                return c ? So : a ? To : []
            }

            function Ro(a, c, b, d, e) {
                var f = e.Gi,
                    g = void 0 === f ? F : f,
                    h = e.Nd,
                    k = d(Z);
                return Uo(a, c, e)(Qa(function(l) {
                    y(function(m) {
                        m && oe(a, h + ".s", m)
                    }, l);
                    l = d(lb);
                    b.D(h, l)
                }, function(l) {
                    b.D(h, d(lb));
                    g(l, d, k)
                }))
            }

            function Qo(a, c, b, d, e) {
                var f = e.Nd,
                    g = e.ab;
                return new K(function(h, k) {
                    var l = b.C(f, 0);
                    l = parseInt("" + l, 10);
                    return 60 >= c(lb) - l ? k() : Vo(a) ? h(void 0) : mf(d) ? k() : h(Wo(a, g))
                })
            }

            function Uo(a, c, b) {
                var d = b.Qb,
                    e = b.data,
                    f = ra(a,
                        d, b.ab);
                a = z({}, ri);
                e && z(a.H, e);
                return Xo(B(function(g) {
                    return Yo(f(z({
                        $: {
                            lg: !1,
                            zi: !0
                        }
                    }, ri), B(function(h) {
                        var k = h[1],
                            l = h[2];
                        h = I("", B(function(m) {
                            return String.fromCharCode(m.charCodeAt(0) + 10)
                        }, h[0].split("")));
                        return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Zo[d]
                    }, g)).then(function(h) {
                        return z({}, h, {
                            host: g[h.hg]
                        })
                    }))
                }, c))
            }

            function Oo(a, c, b) {
                var d = c || {},
                    e = ra(a, "u", b),
                    f = Na(a);
                return {
                    C: function(g, h) {
                        return X(d[g]) ? f.C(g, h) : d[g]
                    },
                    D: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.D(g, l);
                        return e({
                            H: (k = {}, k.key = g, k.value =
                                l, k)
                        }, [Ba.Pa + "//" + dc + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                    }
                }
            }

            function $o(a) {
                return {
                    M: function(c, b) {
                        H(a).C("oo") || b()
                    }
                }
            }

            function ap(a, c) {
                try {
                    var b = c[0];
                    var d = b[1]
                } catch (e) {
                    return function() {
                        return K.resolve()
                    }
                }
                return function(e) {
                    var f, g = (f = {}, f["browser-info"] = bp, f["page-url"] = a.location && "" + a.location.href, f);
                    return d && (e = mb(a, e)) ? d(cp, {
                        rb: g,
                        ra: [],
                        ca: "site-info=" + ge(e)
                    })["catch"](F) : K.resolve()
                }
            }

            function dp(a, c) {
                if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                    var b = N(c);
                    delete H(a).C("counters", {})[b];
                    Wa(Ua("oo.e"))
                }
            }

            function ep(a) {
                if (pd(a)) return null;
                var c = fp(a),
                    b = c.zf;
                X(b) && (c.zf = null, gp(a).then(function(d) {
                    c.zf = d
                }));
                return b ? 1 : null
            }

            function hp(a, c, b) {
                b = b.H;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = Of(a);
                if (!a) return null;
                var d = b = null;
                n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = ip);
                if (!b) {
                    var e = n(a, "timing");
                    e && (b = jp, d = e)
                }
                if (!b) return null;
                a = kp(a, d, b);
                c = N(c);
                c = lp(c);
                return (c = mp(c, a)) && I(",", c)
            }

            function mp(a, c) {
                var b = a.length ? B(function(d, e) {
                    var f = c[e];
                    return f ===
                        d ? null : f
                }, a) : c;
                a.length = 0;
                y(v(R, Aa("push", a)), c);
                return la(wa(null), b).length === a.length ? null : b
            }

            function kp(a, c, b) {
                return B(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (V(e)) return e(a, c) || null;
                    if (1 === d.length) return c[e] ? Math.round(c[e]) : null;
                    var g;
                    !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(si[d[0]] || si[g]));
                    if (!g) return null;
                    d = Math.round(c[e]) - Math.round(c[f]);
                    return 0 > d || 36E5 < d ? null : d
                }, b)
            }

            function Th(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] <<
                        8) + a[f + 2];
                    e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b &
                            63
                        ], "=", "=");
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=")
                }
                e = e.join("");
                return c ? ti(e, !0) : e
            }

            function zh(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = ti(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return "";
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function ti(a,
                c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return np[b] || b
                }) : ""
            }

            function op(a) {
                try {
                    var c = Oa(a) ? a : [];
                    return I(",", [a.name, a.description, v(xa, pa, yb(pp), qd(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function pp(a) {
                return I(",", [a.description, a.suffixes, a.type])
            }

            function qp(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function rp(a, c, b, d, e, f, g, h) {
                var k = b.C(f);
                fa(k) && (b.D(f, g), e(a, c, b, d), k = b.C(f, g));
                X(h) || h.Ub(f, "" + k);
                return k
            }

            function sp(a, c) {
                if (rd(a)) {
                    var b = gb(a).match(tp);
                    if (b && b.length) return b[1] ===
                        c
                }
                return !1
            }

            function pe(a, c, b) {
                return function(d) {
                    var e, f, g = Ka(c, b);
                    g && up(a, d, c) && (g = G(g.params, g), (d = Pf({
                        event: a,
                        Ja: "products",
                        xa: ec,
                        Bh: "goods"
                    }, d)) && g && g((e = {}, e.__ym = (f = {}, f.ecommerce = [d], f), e)))
                }
            }

            function up(a, c, b) {
                var d = !1,
                    e = "";
                if (!ta(c)) return vb(b, "", "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ba(f) && f.length ? (d = vp(function(g) {
                                return ta(g) && (ka(g.id) || qe(b, g.id) || ka(g.name))
                            }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") :
                            e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        qe(b, c.id) || ka(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                vb(b, "", e);
                return d
            }

            function sd(a, c) {
                return {
                    M: function(b, d) {
                        re(b) ? d() : qa(c, function(e) {
                            var f;
                            if (e = n(e, "settings.hittoken")) e = (f = {}, f.hittoken = e, f), b.H = z(b.H || {}, e);
                            d()
                        })
                    }
                }
            }

            function wp(a, c) {
                function b() {
                    r.hidden ? z(k.style, td(["top", "right", "left", "background"], "initial")) : z(k.style, td(["top", "right", "left"], "0"), {
                        background: "rgba(0, 0, 0, .3)"
                    });
                    t.parentNode || (q.appendChild(p), q.appendChild(t));
                    r.hidden = !r.hidden;
                    q.hidden = !q.hidden;
                    u.hidden = !u.hidden
                }

                function d(O) {
                    var sa = g();
                    z(sa.style, Ac("2px", "18px"), Mc, {
                        left: "15px",
                        top: "7px",
                        background: "#2f3747",
                        borderRadius: "2px"
                    });
                    sa.style.transform = "rotate(" + O + "deg)";
                    return sa
                }

                function e(O, sa, Ha, zb, ud) {
                    var se = g();
                    z(se.style, Ac(sa + "px", Ha + "px"), Mc, {
                        left: O + "px",
                        bottom: 0,
                        background: zb,
                        borderTopLeftRadius: ud
                    });
                    return se
                }
                var f = $a(a);
                if (!f) return F;
                var g = w("div", f),
                    h = w("iframe", f),
                    k = g();
                k.classList.add("__ym_wv_ign");
                z(k.style, ui, {
                    bottom: "0",
                    width: "100%",
                    maxWidth: "initial",
                    zIndex: "999999999"
                });
                var l = k.attachShadow ? k.attachShadow({
                        mode: "open"
                    }) : k,
                    m = g();
                z(m.style, Ac("24px"), Mc, Qf, {
                    top: "12px",
                    right: "10px",
                    background: "#3367dc",
                    overflow: "hidden"
                });
                var p = g();
                z(p.style, {
                    border: "2px solid transparent",
                    animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear"
                }, Qf, Mc, Ac("48px"), td(["top", "left"], "calc(50% - 24px)"), td(["borderTopColor", "borderLeftColor"], "#fc0"));
                f = f("style");
                f.textContent = "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
                p.appendChild(f);
                var r = g();
                r.id = "__ym_wv_ign__opener";
                z(r.style, Ac("46px", "48px"), ui, {
                    right: "0",
                    bottom: "60px",
                    cursor: "pointer",
                    background: "#fff",
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)"
                });
                var q = g();
                z(q.style, Mc, td(["top", "right", "bottom"], "0"), {
                    width: "600px",
                    background: "#fff"
                });
                var u = g();
                u.id = "__ym_wv_ign__closer";
                z(u.style, Ac("32px"), Mc, Qf, {
                    top: "12px",
                    right: "612px",
                    cursor: "pointer",
                    background: "#fff"
                });
                f = h();
                f.src = "https://metrika.yandex.ru/widget/iframe-check";
                var t = h();
                z(t.style, Ac("100%"), {
                    border: "none"
                });
                t.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
                q.hidden = !0;
                u.hidden = !0;
                u.appendChild(d(45));
                u.appendChild(d(-45));
                q.appendChild(f);
                m.appendChild(e(0, 8, 9, "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"));
                m.appendChild(e(8, 9, 16, "#04acff", "3px"));
                m.appendChild(e(17, 7, 24, "#ffdd13"));
                r.appendChild(m);
                l.appendChild(q);
                l.appendChild(u);
                var A = ["click", "touchstart"];
                h = ia(a);
                m = a.document.body;
                l = [h.F(r,
                    A, b), h.F(u, A, b), h.F(f, ["load"], E([ha, [G(q.removeChild, q, f), G(l.appendChild, l, r)]], y)), h.F(t, ["load"], G(q.removeChild, q, p)), G(m.removeChild, m, k)];
                var Q = E([ha, l], y);
                l.push(h.F(a, ["securitypolicyviolation"], function(O) {
                    (O = n(O, "blockedURI")) && 0 <= O.indexOf("https://metrika.yandex.ru") && Q()
                }));
                m.appendChild(k);
                return Q
            }

            function td(a, c) {
                return M(function(b, d) {
                    b[d] = c;
                    return b
                }, {}, a)
            }

            function Ac(a, c) {
                var b;
                return b = {}, b.width = a, b.height = c || a, b
            }

            function xp(a, c) {
                var b = n(c, "origin"),
                    d;
                if (d = b) d = yp.test(b) || zp.test(b);
                d && (b = Hb(a, c.data), "appendremote" === n(b, "action") && Ap(a, c, b))
            }

            function vi(a, c, b, d) {
                var e, f, g, h;
                void 0 === b && (b = "");
                void 0 === d && (d = "");
                var k = H(a),
                    l = {};
                l.getCachedTags = Rf;
                l.form = (e = {}, e.closest = w(a, wi), e.select = Bp, e.getData = w(a, xi), e);
                l.button = (f = {}, f.closest = w(a, Sf), f.select = Tf, f.getData = w(a, Uf), f);
                l.phone = (g = {}, g.hidePhones = E([a, null, [d]], yi), g);
                l.status = (h = {}, h.checkStatus = E([a, Ja(b)], Cp), h);
                k.D("_u", l);
                c && sc(a, {
                    src: c
                })
            }

            function zi(a) {
                var c = a.lang;
                c = void 0 === c ? "" : c;
                var b = a.appVersion;
                b = void 0 === b ?
                    "" : b;
                var d = a.fileId;
                d = void 0 === d ? "" : d;
                a = a.beta;
                a = void 0 === a ? !1 : a;
                b = I(".", pa(B(v(R, Ja), b.split("."))));
                if (!L(d, Dp) || !L(c, ["ru", "en", "tr"])) return "";
                c = (a ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (b ? "/" + b : "") + "/form-selector/" + (d + "_" + c + ".js");
                return Ai(c) ? c : ""
            }

            function Ep(a, c) {
                var b = $a(a);
                if (b) {
                    var d = b("div"),
                        e = ac(a);
                    if (e) {
                        d.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var f = d.firstChild;
                        f.onload = function() {
                            var h = b("meta");
                            h.setAttribute("http-equiv", "Content-Security-Policy");
                            h.setAttribute("content", "script-src *");
                            f.contentWindow.document.head.appendChild(h);
                            sc(f.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = f;
                        e.appendChild(d);
                        d.removeChild(f);
                        var g = null;
                        d.attachShadow ? g = d.attachShadow({
                            mode: "open"
                        }) : d.createShadowRoot ? g = d.createShadowRoot() : d.webkitCreateShadowRoot && (g = d.webkitCreateShadowRoot());
                        g ? g.appendChild(f) : (e.appendChild(f), a._ym__remoteIframeContainer =
                            f)
                    }
                }
            }

            function Cp(a) {
                var c, b = Bi(a);
                a = H(a).C("getCounters", vd)();
                a = B(W("id"), a);
                return c = {
                    id: b
                }, c.counterFound = !!b && L(b, a), c
            }

            function yi(a, c, b) {
                var d;
                c = Ci(a, c, {
                    dg: Fp,
                    Zh: (d = {}, d.href = !0, d)
                });
                b = pa(B(function(f) {
                    return "*" === f ? f : Pb(f)
                }, b));
                var e = B(v(R, Aa("concat", [""]), Di("reverse"), ha), b);
                b = wd(a);
                d = Ei(a, b, 1E3);
                c = G(c.Cf, c, e);
                d.F(c);
                Gp(a, b);
                Fi(a, b);
                c()
            }

            function Fp(a, c, b) {
                var d = $a(a),
                    e = b.sb,
                    f = b.Oc,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.ee && h && d && g) {
                    b = d("small");
                    Gi(b);
                    var k = h.split(""),
                        l = Hi(h).length;
                    y(Aa("appendChild", b), M(function(m, p) {
                        var r = m.nodes,
                            q = m.kg,
                            u = d("small");
                        u.innerHTML = p;
                        var t = Hp.test(p);
                        Gi(u);
                        t && (u.style.opacity = "" + (l - q - 1) / l);
                        r.push(u);
                        return {
                            nodes: r,
                            kg: q + (t ? 1 : 0)
                        }
                    }, {
                        nodes: [],
                        kg: 0
                    }, k).nodes);
                    Ip(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function Ip(a, c, b, d) {
                function e() {
                    y(w(["style", "opacity", ""], Ic), xa(b.childNodes));
                    if (c) {
                        var k = Ka(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = ia(a),
                    g = F,
                    h = F;
                g = f.F(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = U(a, e, 200,
                            "ph.h.e");
                        h();
                        h = f.F(b, ["mouseleave"], function(m) {
                            m.target === b && ma(a, l)
                        })
                    }
                })
            }

            function Fi(a, c) {
                Qb(a)(Qa(F, function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    Fa("MutationObserver", a.MutationObserver) && (new MutationObserver(c.O)).observe(d, e)
                }))
            }

            function Gp(a, c) {
                return ia(a).F(a, ["load"], c.O)
            }

            function Ci(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.Oc]) || void 0 === l ? void 0 : l.Xc : null
                }
                var e, f = b.dg;
                b = b.Zh;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    Cf: function(k) {
                        return new K(function(l, m) {
                            k && k.length || m();
                            h = Ii()(k);
                            Qb(a)(Qa(w({
                                ia: [],
                                Aa: 0
                            }, l), function() {
                                var p = ca(a),
                                    r = p(Z),
                                    q = g.href ? Jp(a, h) : [],
                                    u = g.text ? Ji(a, h) : [];
                                l({
                                    ia: la(ba, pa(B(d, q.concat(u)))),
                                    Aa: p(Z) - r
                                })
                            }))
                        })
                    }
                }
            }

            function Jp(a, c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Ki(c);
                return M(function(e, f) {
                    var g = n(f, "href");
                    try {
                        var h = decodeURI(g || "")
                    } catch (p) {
                        h = ""
                    }
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Pb(k) : "",
                            m = c[l];
                        X(m) || !l && "*" !== m.Xc[0] || (e.push({
                            ee: "href",
                            sb: f,
                            Oc: l,
                            Za: Li(k,
                                c[l].Za),
                            Ii: g
                        }), g = Pb(h.slice(4)), l = Ii()([l ? m.Xc : [g, ""]]), e.push.apply(e, Ji(a, l, f)))
                    }
                    return e
                }, [], xa(b.querySelectorAll("a")))
            }

            function Ji(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = Ki(c);
                vf(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()) {
                        var g = pa(e.exec(f.textContent || "") || []);
                        y(function(h) {
                            var k = Pb(h);
                            X(c[k]) || d.push({
                                ee: "text",
                                sb: f,
                                Oc: k,
                                Za: Li(h, c[k].Za),
                                Ii: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Ii() {
                return Vf(function(a, c) {
                    var b = B(Pb, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        Za: b,
                        Xc: c
                    };
                    var e = Mi(d);
                    e !== d && (a[e] = {
                        Za: Mi(b),
                        Xc: c
                    });
                    return a
                }, {})
            }

            function Li(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h = d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return I("", b) + c.slice(f + 1)
            }

            function Mi(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Ki(a) {
                return new RegExp("(?:" + I("|", B(Ni, da(a))) + ")")
            }

            function Oi(a, c,
                b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? vf(a, c, Aa("push", e), d) : Sa(e, Pi(a, c, d)));
                    y(b, e)
                }
            }

            function vf(a, c, b, d, e) {
                function f(g) {
                    return V(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 === e && (e = -1);
                if (V(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !If(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Pi(a, c, b) {
                var d = [],
                    e = v(R, Aa("push", d));
                V(b) ? (b = b(c), (fa(b) || b === a.NodeFilter.FILTER_ACCEPT) &&
                    e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Pi(a, c[b]);
                        y(e, g)
                    }
                }
                return d
            }

            function Qi(a, c, b) {
                var d;
                a = [Ri(a, c, function(e) {
                    d = e;
                    e.za.F(b)
                }), function() {
                    d && d.unsubscribe()
                }];
                return E([te, a], y)
            }

            function Kp(a, c, b, d) {
                var e, f, g;
                if (b) {
                    var h = n(d, "ecommerce") || {};
                    var k = n(d, "event") || "";
                    h = ta(h) && ka(k) ? Pf(k, h) : void 0;
                    if (!h) a: {
                        var l = d;!ba(d) && qe(a, Oa(d)) && (l = Ca(l));
                        if (ba(l) && (h = l[0], k = l[1], l = l[2], ka(k) && ta(l) && "event" === h)) {
                            h = Pf(k, l);
                            break a
                        }
                        h = void 0
                    }
                    if (d =
                        h || Lp(d)) nb(a, (e = {}, e.counterKey = c, e.name = "ecommerce", e.data = d, e)), b((f = {}, f.__ym = (g = {}, g.ecommerce = [d], g), f))
                }
            }

            function Lp(a) {
                var c = n(a, "ecommerce");
                if (ta(c)) return a = la(zc(Mp), da(c)), a = M(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a), 0 === da(a).length ? void 0 : a
            }

            function Pf(a, c) {
                var b, d, e = ka(a) ? Np[a] : a;
                if (e) {
                    var f = e.event,
                        g = e.Ja,
                        h = e.Bh,
                        k = void 0 === h ? "items" : h,
                        l = c.purchase || c;
                    if (h = l[k]) {
                        e = B(w(e.xa, Op), h);
                        var m = (b = {}, b[f] = g ? (d = {}, d[g] = e, d) : e, b);
                        b = da(l);
                        g && 1 < b.length && (m[f].actionField = M(function(p, r) {
                            if (r ===
                                k) return p;
                            if ("currency" === r) return m.currencyCode = l.currency, p;
                            p[Pp[r] || Wf[r] || r] = l[r];
                            return p
                        }, {}, b));
                        return m
                    }
                }
            }

            function Op(a, c) {
                var b = {};
                y(function(d) {
                    var e = a[d] || Wf[d] || d; - 1 !== d.indexOf("item_category") ? (e = Wf.item_category, b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
                }, da(c));
                return b
            }

            function Qp(a, c, b) {
                var d, e, f = n(b, "target");
                if (f && (f = Sf(a, f), f = Uf(a, f))) {
                    f = "?" + xd(f);
                    var g = Jb(a, c, "Button goal. Counter " + c.id + ". Button: " + f + ".");
                    b = n(b, "isTrusted");
                    b = fa(b) ? void 0 : (d = {}, d.__ym = (e = {}, e.ite = Gb(b), e),
                        d);
                    ue(a, c, "btn", g).reachGoal(f, b)
                }
            }

            function Rp(a, c, b, d) {
                var e = n(d, "target");
                e && (d = n(d, "isTrusted"), (e = fc("button,input", a, e)) && "submit" === e.type && (e = wi(a, e))) && (b.push(e), U(a, E([!1, a, c, b, e, d], Si), 300))
            }

            function Si(a, c, b, d, e, f) {
                var g, h, k = Rb(c)(e, d),
                    l = -1 !== k;
                if (a || l) l && d.splice(k, 1), a = xi(c, e), a = "?" + xd(a), d = E([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], Ti), f = fa(f) ? void 0 : (g = {}, g.__ym = (h = {}, h.ite = Gb(f), h), g), ue(c, b, "form", d).reachGoal(a, f)
            }

            function Ti(a, c, b) {
                return Sp(a, c).then(v(E([Jb(a, c, b), F],
                    ve), ha))
            }

            function xi(a, c, b) {
                return Ui(a, c, ["i", "n", "p"], void 0, b)
            }

            function Tp(a, c) {
                var b;
                a((b = {}, b.clickmap = X(c) ? !0 : c, b))
            }

            function Up(a, c, b, d, e) {
                var f;
                c = {
                    K: Ga(),
                    H: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f),
                    ma: {
                        Ba: "clmap/" + e.id
                    }
                };
                d(c, e)["catch"](D(a, "c.s.c"))
            }

            function Vp(a, c, b, d, e) {
                if (yd(a, "ymDisabledClickmap") || !c || !c.element) return !1;
                a = La(c.element);
                if (e && !e(c.element, a) || L(c.button, [2, 3]) && "A" !== a || ab(wa(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x -
                        c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element === d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Wp(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Xp(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Yp(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function Vi(a, c) {
                var b = ac(a),
                    d = Xf(a);
                return {
                    x: c.pageX || c.clientX + d.x -
                        (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function we(a, c) {
                return {
                    M: function(b, d) {
                        var e, f = b.K,
                            g = b.Ia,
                            h = b.H,
                            k = b.$;
                        k = void 0 === k ? {} : k;
                        if (f && h) {
                            var l = ca(a);
                            f.Ub("rqnl", 1);
                            for (var m = zd(a), p = 1; m[p];) p += 1;
                            b.V || (b.V = {});
                            b.V.Rb = p;
                            m[p] = (e = {}, e.protocol = Ba.Pa, e.host = dc, e.resource = b.ma.Ba, e.postParams = k.ca, e.time = l(Z), e.counterType = c.aa, e.params = h, e.browserInfo = f.l(), e.counterId = c.id, e.ghid = yc(a), e);
                            g && (m[p].telemetry = g.l());
                            Yf(a)
                        }
                        d()
                    },
                    Ea: function(b, d) {
                        Wi(a, b);
                        d()
                    }
                }
            }

            function Wi(a, c) {
                var b =
                    zd(a);
                c.K && !Ra(b) && c.V && (delete b[c.V.Rb], Yf(a))
            }

            function Yf(a) {
                var c = zd(a);
                Na(a).D("retryReqs", c)
            }

            function Zp(a, c) {
                if (a.Oi()) {
                    var b = Xi(c);
                    if (b && !cc("ym-disable-tracklink", b)) {
                        var d = a.l,
                            e = a.Pg,
                            f = a.ab,
                            g = a.sender,
                            h = a.$g,
                            k = f.vc,
                            l = b.href;
                        var m = ob(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        m || (m = (m = b.querySelector("img")) ? ob(m.getAttribute("title") || m.getAttribute("alt")) : "");
                        m = l === m ? "" : m;
                        var p = n(c, "isTrusted");
                        if (cc("ym-external-link", b)) xe(d, f, {
                            url: l,
                            kb: !0,
                            title: m,
                            Ec: p,
                            sender: g
                        });
                        else {
                            k = k ?
                                Kc(d, k).hostname : S(d).hostname;
                            h = RegExp("\\.(" + I("|", B($p, h)) + ")$", "i");
                            var r = b.protocol + "//" + b.hostname + b.pathname;
                            h = Yi.test(r) || Yi.test(l) || h.test(l) || h.test(r);
                            b = b.hostname;
                            ye(k) === ye(b) ? h ? xe(d, f, {
                                url: l,
                                Cc: !0,
                                Ec: p,
                                title: m,
                                sender: g
                            }) : m && e.D("il", ob(m).slice(0, 100)) : l && aq.test(l) || xe(d, f, {
                                url: l,
                                Gc: !0,
                                kb: !0,
                                Cc: h,
                                Ec: p,
                                title: m,
                                sender: g
                            })
                        }
                    }
                }
            }

            function xe(a, c, b) {
                var d, e, f, g = Ga();
                void 0 !== b.Ec && g.D("ite", Gb(b.Ec));
                b.Cc && g.D("dl", 1);
                b.kb && g.D("ln", 1);
                var h = b.jg || {};
                g = {
                    K: g,
                    V: {
                        title: h.title || b.title,
                        Gc: !!b.Gc,
                        ba: h.params
                    },
                    H: (d = {}, d["page-url"] = b.url, d["page-ref"] = c.vc || S(a).href, d)
                };
                d = "Link";
                b.Cc ? d = b.kb ? "Ext link - File" : "File" : b.kb && (d = "Ext link");
                nb(a, (e = {}, e.counterKey = N(c), e.name = "event", e.data = (f = {}, f.schema = "Link click", f.name = (b.kb ? "external" : "internal") + " url: " + b.url, f), e));
                c = b.sender(g, c).then(Jb(a, c, d + ". Counter " + c.id + ". Url: " + b.url, b.jg));
                return Nc(a, "cl.p.s", c, h.callback || F, h.ctx)
            }

            function bq(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks =
                    e, d))
            }

            function cq(a, c, b, d) {
                var e = S(a),
                    f = e.hostname;
                e = e.href;
                if (c = Ad(c).url) a = Kc(a, c), f = a.hostname, e = a.href;
                return [d + "://" + f + "/" + b, e || ""]
            }

            function Zi(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function dq(a, c, b, d) {
                var e;
                if (a = Ka(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    L(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Sf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function vh(a, c, b) {
                void 0 === b && (b = R);
                var d =
                    id(a);
                b(d);
                var e = w(d, eq);
                ze(a, c, function(f) {
                    f.za.F(e)
                });
                return d
            }

            function eq(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.O(n(b, "type"), b)
            }

            function ze(a, c, b, d) {
                void 0 === b && (b = F);
                void 0 === d && (d = !1);
                var e = wd(a);
                if (c && V(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Ca(arguments),
                            h = g[0];
                        d && e.O(h);
                        g = f.apply(c, g);
                        d || e.O(h);
                        return g
                    };
                    a = {
                        za: e,
                        unsubscribe: function() {
                            c.push = f
                        }
                    };
                    b(a);
                    y(e.O, c);
                    return a
                }
            }

            function $d(a) {
                a = H(a);
                var c = a.C("dataLayer", []);
                a.D("dataLayer", c);
                return c
            }

            function nm(a, c) {
                var b, d;
                a.push((b = {},
                    b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function $i(a, c) {
                var b = fd(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = E([a, b.je], fq),
                    g = w(f, gq);
                b.Z.F(["initToParent"], function(h) {
                    g(d, b.children[h[1].counterId])
                }).F(["parentConnect"], function(h) {
                    g(e, b.Ha[h[1].counterId])
                });
                return {
                    Z: b.Z,
                    Fj: function(h, k) {
                        return new K(function(l, m) {
                            b.je(h, k, function(p, r) {
                                l([p, r])
                            });
                            U(a, w(Ua(), m), 5100, "is.o")
                        })
                    },
                    Rf: function(h) {
                        var k = {
                            Uf: [],
                            ve: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.children, k, h)
                    },
                    Sf: function(h) {
                        var k = {
                            Uf: [],
                            ve: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.Ha, k, h)
                    }
                }
            }

            function gq(a, c, b) {
                c = la(function(d) {
                    return !L(b.info.counterId, d.ve)
                }, c);
                y(function(d) {
                    var e;
                    b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                }, c)
            }

            function fq(a, c, b, d, e) {
                return (new K(function(f, g) {
                    var h = da(b),
                        k = v(d.resolve || R, hd(f)),
                        l = v(d.reject || R, hd(g));
                    d.resolve = k;
                    d.reject = l;
                    y(function(m) {
                        var p;
                        d.ve.push(+m);
                        var r = b[m],
                            q = U(a, w(Ua(), l), 5100, "is.m");
                        c(r.window, z(e, (p = {}, p.toCounter = Ja(m), p)), function(u, t) {
                            ma(a, q);
                            d.Uf.push(m);
                            d.resolve && d.resolve(t)
                        })
                    }, h)
                }))["catch"](D(a,
                    "if.b"))
            }

            function hq(a) {
                var c = F,
                    b = null,
                    d = a.length;
                if (0 !== a.length && a[0]) {
                    var e = a.slice(-1)[0];
                    V(e) && (c = e, d = a.length + -1);
                    var f = a.slice(-2)[0];
                    V(f) && (c = f, b = e, d = a.length + -2);
                    d = a.slice(0, d);
                    return {
                        Qg: b,
                        cc: c,
                        ba: 1 === d.length ? a[0] : Ic(d)
                    }
                }
            }

            function Nc(a, c, b, d, e) {
                var f = E([a, d, e], Zf);
                return b.then(f, function(g) {
                    f();
                    oe(a, c, g)
                })
            }

            function aj(a, c) {
                return {
                    M: function(b, d) {
                        var e, f, g = (b.V || {}).ba,
                            h = b.$;
                        h = void 0 === h ? {} : h;
                        if (g && (bj(c, g), !h.ca && b.K && b.H)) {
                            var k = mb(a, g),
                                l = cj(a),
                                m = b.K.C("pv");
                            k && !b.H.nohit && (nb(a, (e = {},
                                e.counterKey = N(c), e.name = "params", e.data = (f = {}, f.val = g, f), e)), m ? encodeURIComponent(k).length > Ba.qg ? l.push([b.K, g]) : b.H["site-info"] = k : (h.ca = k, b.$ = h, b.Wa || (b.Wa = {}), b.Wa.$h = !0))
                        }
                        d()
                    },
                    Ea: function(b, d) {
                        var e = cj(a),
                            f = Ka(a, c),
                            g = f && f.params;
                        g && (f = la(v(Oc, wa(b.K)), e), y(function(h) {
                            g(h[1]);
                            h = Ae(a)(h, e);
                            e.splice(h, 1)
                        }, f));
                        d()
                    }
                }
            }

            function Be(a, c) {
                return function(b) {
                    $f(a, c, b)
                }
            }

            function iq(a, c) {
                ag(a)(function(b) {
                    delete b[c]
                })
            }

            function $f(a, c, b) {
                ag(a)(function(d) {
                    d[c] = z(d[c] || {}, b)
                })
            }

            function ag(a) {
                a = H(a);
                var c =
                    a.C("dsjf") || Da({});
                a.Na("dsjf", c);
                return c
            }

            function jq(a, c) {
                return function(b) {
                    var d, e, f = Ka(a, c);
                    f && (ta(b) ? Oa(da(b)) ? (b = dj(b)) && Oa(b) && f.params((d = {}, d.__ym = (e = {}, e.fpmh = b, e), d)) : Jb(a, c, "First party params error. Empty object.")() : Jb(a, c, "First party params error. Not an object.")())
                }
            }

            function dj(a) {
                return M(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = ta(e);
                    if (!ka(e) && !f) return c;
                    e = f ? dj(e) : e;
                    Oa(e) && c.push([d, e]);
                    return c
                }, [], Ea(a))
            }

            function ej(a, c, b) {
                void 0 === b && (b = 0);
                c = Ea(c);
                c = M(function(d, e) {
                    var f = e[0],
                        g = e[1],
                        h = ta(g);
                    if (!ka(g) && !h) return d;
                    h ? g = ej(a, g, b + 1) : b || "yandex_cid" !== f ? ("phone_number" === f ? g = kq(g) : "email" === f && (g = lq(g)), g = fj(a, g)) : g = K.resolve(g);
                    d.push(g.then(function(k) {
                        return [f, k]
                    }));
                    return d
                }, [], c);
                return K.all(c)
            }

            function lq(a) {
                var c = ob(a).toLowerCase().split("@"),
                    b = c[0];
                c = c[1];
                if (!c) return a;
                c = c.replace("googlemail.com", "gmail.com");
                gj(c) && (c = "yandex.ru");
                "yandex.ru" === c ? b = b.replace(bg, "-") : "gmail.com" === c && (b = b.replace(bg, ""));
                a = ie(b, "+"); - 1 !== a && (b = b.slice(0, a));
                return b + "@" + c
            }

            function kq(a) {
                a =
                    Pb(a);
                return "8" === a[0] ? "7" + a.slice(1) : a
            }

            function fj(a, c) {
                return new K(function(b, d) {
                    var e = (new a.TextEncoder).encode(c);
                    a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                        f = new a.Blob([f], {
                            type: "application/octet-binary"
                        });
                        var g = new a.FileReader;
                        g.onload = function(h) {
                            h = n(h, "target.result") || "";
                            var k = h.indexOf(","); - 1 !== k ? b(h.substring(k + 1)) : d(mc("fpm.i"))
                        };
                        g.readAsDataURL(f)
                    }, d)
                })
            }

            function Ka(a, c) {
                var b = H(a).C("counters", {}),
                    d = N(c);
                return b[d]
            }

            function hj(a, c) {
                H(a).D("dce:" + c, !0);
                var b = H(a).C("dclq:" +
                    c);
                if (b) {
                    var d = Bd(a, c);
                    y(function(e) {
                        d[e[0]].apply(d, e[1])
                    }, b);
                    Cd(b)
                }
            }

            function Jb(a, c, b, d) {
                return ij(c) ? F : w(E(za([a, N(c)], d ? [b + ". Params:", d] : [b]), vb), ha)
            }

            function vb() {
                var a = Ca(arguments),
                    c = a.slice(2);
                Bd(a[0], a[1]).log.apply(vb, c)
            }

            function mq(a, c) {
                return {
                    log: Pc(a, "log", c, F),
                    warn: Pc(a, "log", c, F),
                    error: Pc(a, "log", c, F)
                }
            }

            function Pc(a, c, b, d) {
                return function() {
                    var e, f, g = Ca(arguments);
                    nb(a, (e = {}, e.counterKey = b, e.name = "log", e.data = (f = {}, f.args = g, f.type = c, f), e));
                    return d.apply(void 0, g)
                }
            }

            function qa(a, c) {
                var b =
                    N(a);
                return jj()(nq(b)).then(c)
            }

            function oq(a, c, b) {
                var d, e;
                c = N(c);
                var f = cg(a);
                b = z({
                    bh: f(Z)
                }, b);
                nb(a, (d = {}, d.counterKey = c, d.name = "counterSettings", d.data = (e = {}, e.settings = b, e), d));
                return jj()(pq(c, b))
            }

            function pq(a, c) {
                return function(b) {
                    var d = b[a];
                    d ? (d.ui = c, d.Ff = !0, d.Ef ? d.Ef(c) : d.promise = K.resolve(c)) : b[a] = {
                        promise: K.resolve(c),
                        ui: c,
                        Ff: !0
                    }
                }
            }

            function dg(a) {
                return !pd(a) && eg(a)
            }

            function Dd(a) {
                return $a(a) ? w(a, qq) : !1
            }

            function eg(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && Fa("sendBeacon", c) ? E([a, G(c,
                    n(a, "navigator"))], rq) : !1
            }

            function rq(a, c, b, d) {
                return new K(function(e, f) {
                    var g;
                    if (!n(a, "navigator.onLine")) return f();
                    var h = z(d.rb, (g = {}, g["force-urlencoded"] = 1, g));
                    g = b + "?" + xd(h) + (d.ca ? "&" + d.ca : "");
                    return 2E3 < g.length ? f(Ua("sb.tlq")) : c(g) ? e("") : f()
                })
            }

            function qq(a, c, b) {
                return new K(function(d, e) {
                    var f, g, h = "_ymjsp" + Ta(a),
                        k = z((f = {}, f.callback = h, f), b.rb),
                        l = E([a, h], sq);
                    a[h] = function(p) {
                        try {
                            l(), qc(m), d(p)
                        } catch (r) {
                            e(r)
                        }
                    };
                    k.wmode = "5";
                    var m = sc(a, (g = {}, g.src = kj(c, b, k), g));
                    if (!m) return l(), e(mc("jp.s"));
                    f = w(m, qc);
                    f = v(f, w(Ua(b.ra), e));
                    g = Ce(a, f, b.wb || 1E4);
                    g = E([a, g], ma);
                    m.onload = g;
                    m.onerror = v(l, g, f)
                })
            }

            function sq(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Qc(a) {
                var c = $a(a);
                return c ? E([a, c], tq) : !1
            }

            function tq(a, c, b, d) {
                return new K(function(e, f) {
                    var g = ac(a),
                        h = c("img"),
                        k = v(w(h, qc), w(Ua(d.ra), f)),
                        l = Ce(a, k, d.wb || 3E3);
                    h.onerror = k;
                    h.onload = v(w(h, qc), w(null, e), E([a, l], ma));
                    k = z({}, d.rb);
                    delete k.wmode;
                    h.src = kj(b, d, k);
                    rd(a) && (z(h.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }),
                        g.appendChild(h))
                })
            }

            function Ab(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (uq.test(a.location.host) && a.opera && V(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? w(a, vq) : !1
            }

            function vq(a, c, b) {
                var d, e = new a.XMLHttpRequest,
                    f = b.ca,
                    g = z(b.Zc ? (d = {}, d.wmode = "7", d) : {}, b.rb);
                return new K(function(h, k) {
                    e.open(b.Be || "GET", c + "?" + xd(g), !0);
                    e.withCredentials = !1 !== b.lg;
                    b.wb && (e.timeout = b.wb);
                    lj(Ea, yb(function(m) {
                        e.setRequestHeader(m[0],
                            m[1])
                    }))(b.qb);
                    var l = E([a, e, Ua(b.ra), b.Zc, b.zi, h, k], wq);
                    e.onreadystatechange = l;
                    try {
                        e.send(f)
                    } catch (m) {}
                })
            }

            function wq(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 === c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(mc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = Hb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function kj(a, c, b) {
                (b = xd(b)) && (a += "?" + b);
                c.ca && (a += (b ? "&" : "?") + c.ca);
                return a
            }

            function xq(a, c, b) {
                var d = B(Oc, Sb[c] || Tb);
                y(function(e) {
                    return d.unshift(e)
                }, De);
                return B(v(Rc([a, b]), ha), d)
            }

            function mj(a, c) {
                var b = S(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!ka(c) || X(c)) return d;
                b = c.replace(nj, "");
                if (-1 !== b.search(yq)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, I("/", d);
                return ""
            }

            function Ee(a, c) {
                return {
                    M: function(b, d) {
                        var e =
                            oj(c);
                        e = E([b, e, d], zq);
                        Aq(a, c, e)
                    },
                    Ea: function(b, d) {
                        var e = b.K,
                            f = oj(c);
                        if (e) {
                            var g = f.ta;
                            f.Se === e && g && (y(ha, g), f.ta = null)
                        }
                        d()
                    }
                }
            }

            function zq(a, c, b) {
                var d = a.K;
                d ? re(a) ? (c.Se = d, b()) : c.ta ? c.ta.push(b) : b() : b()
            }

            function re(a) {
                return (a = a.K) && a.C("pv") && !a.C("ar")
            }

            function Aq(a, c, b) {
                if (Fe(a) && eb(a)) {
                    var d = Bq(c);
                    if (!d.Ph) {
                        d.Ph = !0;
                        c = fd(a, c);
                        if (!c) {
                            b();
                            return
                        }
                        d.ta = [];
                        var e = function() {
                            d.ta && (y(ha, d.ta), d.ta = null)
                        };
                        U(a, e, 3E3);
                        c.Z.F(["initToChild"], e)
                    }
                    d.ta ? d.ta.push(b) : b()
                } else b()
            }

            function pj(a, c) {
                return {
                    M: function(b,
                        d) {
                        var e = b.K;
                        if (e && (!c || c.Qf)) {
                            var f = a.document.title;
                            b.V && b.V.title && (f = b.V.title);
                            var g = gc("getElementsByTagName", a.document);
                            "string" !== typeof f && g && (f = g("title"), f = (f = n(f, "0.innerHtml")) ? f : "");
                            f = f.slice(0, Ba.rg);
                            e.D("t", f)
                        }
                        d()
                    }
                }
            }

            function Kb(a) {
                return function(c, b) {
                    return {
                        M: function(d, e) {
                            var f = d.K,
                                g = d.H;
                            f && g && y(function(h) {
                                var k = Ge[h],
                                    l = "bi",
                                    m = f;
                                k || (k = fg[h], l = "tel", m = ae(d));
                                k && (k = C(l + ":" + h, k, null)(c, b, d), m.Ub(h, k))
                            }, a || Cq());
                            e()
                        }
                    }
                }
            }

            function Dq(a, c) {
                var b = Ed(a);
                c.F(["initToParent"], function(d) {
                    var e =
                        d[0];
                    d = d[1];
                    window.window && (b.children[d.counterId] = {
                        info: d,
                        window: e.source
                    })
                }).F(["initToChild"], function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.O("parentConnect", [e, d])
                }).F(["parentConnect"], function(d) {
                    var e = d[1];
                    e.counterId && (b.Ha[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function Eq(a) {
                if (Fa("MutationObserver", a.MutationObserver)) {
                    var c = Ed(a).children,
                        b = new a.MutationObserver(function() {
                            y(function(d) {
                                n(c[d], "window.window") || delete c[d]
                            }, da(c))
                        });
                    Qb(a)(Qa(F, function() {
                        b.observe(a.document.body, {
                            subtree: !0,
                            childList: !0
                        })
                    }))
                }
            }

            function Fq(a, c) {
                return function(b, d) {
                    var e, f = {
                        pc: ca(a)(Z),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.pc = Ja(b[0]), f.key = parseFloat(b[1]), f.dir = Ja(b[2]));
                    z(d, c);
                    var g = (e = {
                        data: d
                    }, e.__yminfo = I(":", ["__yminfo", f.pc, f.key, f.dir]), e);
                    return {
                        meta: f,
                        Yf: mb(a, g) || ""
                    }
                }
            }

            function Qb(a, c) {
                function b(e) {
                    n(c, d) ? e() : U(a, w(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return Da(function(e, f) {
                    b(f)
                })
            }

            function Fd(a, c) {
                var b = c.Od,
                    d = b || "uid";
                b = b ? a.location.hostname :
                    void 0;
                var e = wc(a),
                    f = Na(a),
                    g = ca(a)(gg),
                    h = qj(a, c),
                    k = h[0];
                h = h[1];
                var l = e.C("d");
                rj(a, c);
                var m = !1;
                !h && k && (h = k, m = !0);
                if (!h) h = I("", [g, Ta(a, 1E6, 999999999)]), m = !0;
                else if (!l || 15768E3 < g - Ja(l)) m = !0;
                m && !c.ob && (e.D(d, h, 525600, b), e.D("d", "" + g, 525600, b));
                f.D(d, h);
                return h
            }

            function Gq(a, c) {
                return !c.ob && rj(a, c)
            }

            function qj(a, c) {
                var b = Na(a),
                    d = wc(a),
                    e = c.Od || "uid";
                return [b.C(e), d.C(e)]
            }

            function yc(a) {
                var c = H(a),
                    b = c.C("hitId");
                b || (b = Ta(a), c.D("hitId", b));
                return b
            }

            function Uf(a, c, b) {
                var d = La(c);
                return d && Ui(a, c, pa(["p",
                    Hq[d], "c"
                ]), Tf, b)
            }

            function Sf(a, c) {
                var b = fc(hg, a, c);
                if (!b) {
                    var d = fc("div", a, c);
                    d && (pb(hg + ",div", d).length || (b = d))
                }
                return b
            }

            function Ui(a, c, b, d, e) {
                return M(function(f, g) {
                    var h = null;
                    g in sj ? h = c.getAttribute && c.getAttribute(sj[g]) : g in Sc && (h = "p" === g ? Sc[g](a, c, e) : "c" === g ? Sc[g](a, c, d) : Sc[g](a, c));
                    h && (h = h.slice(0, tj[g] || 100), f[g] = ig[g] ? "" + rc(h) : h);
                    return f
                }, {}, b)
            }

            function Vh(a, c, b) {
                if (Gd(a)) return xa(b.querySelectorAll(c));
                var d = uj(c.split(" "), b);
                return la(function(e, f) {
                    return Rb(a)(e, d) === f
                }, d)
            }

            function uj(a,
                c) {
                var b = za(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? pc(w(b, uj), xa(d)) : xa(d)
            }

            function nc(a, c) {
                if (c.querySelector) return c.querySelector(a);
                var b = pb(a, c);
                return b && b.length ? b[0] : null
            }

            function pb(a, c) {
                if (!c || !c.querySelectorAll) return [];
                var b = c.querySelectorAll(a);
                return b ? xa(b) : []
            }

            function Xi(a) {
                var c = null;
                try {
                    c = a.target || a.srcElement
                } catch (b) {}
                if (c) {
                    3 === c.nodeType && (c = c.parentNode);
                    for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !==
                            a && "area" !== a || !c.href && !c.getAttribute("xlink:href"));) a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                    return c.href ? c : null
                }
                return null
            }

            function sc(a, c) {
                var b = a.document,
                    d = z({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = $a(a);
                if (e) {
                    var f = e("script");
                    lj(Ea, yb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = gc("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function kn(a, c, b) {
                var d = Oh(c);
                L(b, d.pb) || d.pb.push(b);
                if (Ra(d.gb)) {
                    b = $a(a);
                    if (!b) return null;
                    b = b("iframe");
                    z(b.style, {
                        display: "none",
                        width: "1px",
                        height: "1px",
                        visibility: "hidden"
                    });
                    b.src = c;
                    a = ac(a);
                    if (!a) return null;
                    a.appendChild(b);
                    d.gb = b
                } else(a = n(d.gb, "contentWindow")) && a.postMessage("frameReinit", "*");
                return d.gb
            }

            function Iq(a, c) {
                var b = ba(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = I(", ", B(function(e) {
                        return "." + e
                    }, b));
                    return xa(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return pc(v(Aa("getElementsByClassName",
                    c), xa), b);
                d = c.getElementsByTagName("*");
                b = "(" + I("|", b) + ")";
                return la(w(b, cc), xa(d))
            }

            function jg(a, c, b) {
                for (var d = "", e = Rf(), f = La(c) || "*"; c && c.parentNode && !L(f, ["BODY", "HTML"]);) d += e[f] || "*", d += vj(a, c, b) || "", c = c.parentElement, f = La(c) || "*";
                return ob(d, 128)
            }

            function vj(a, c, b) {
                if (a = He(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function He(a, c) {
                var b = n(a, "document");
                return c && c !== b.documentElement ?
                    c === Bc(a) ? b.documentElement : n(c, "parentNode") : null
            }

            function Ff(a, c) {
                var b = kg(a, c),
                    d = b.left;
                b = b.top;
                var e = Ie(a, c);
                return [d, b, e[0], e[1]]
            }

            function Ie(a, c) {
                var b = n(a, "document");
                if (c === Bc(a) || c === b.documentElement) {
                    b = ac(a);
                    var d = Gc(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Fc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function kg(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = La(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === Bc(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = Fc(b)) return b = Xf(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function fc(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document && b)) return null;
                if (c.Element.prototype.closest && Fa("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = bi(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (Gd(c)) {
                    for (a = xa((c.document ||
                            c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Rb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function Gd(a) {
                return !(!Fa("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
            }

            function qh(a, c, b) {
                var d = c.top,
                    e = c.bottom,
                    f = c.left,
                    g = b.w;
                b = b.h;
                a = a.Math;
                c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
                return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
            }

            function wj(a) {
                return Je(a) && !ab(wa(a.type), Jq) ? Ke(a) ? !a.checked :
                    !a.value : Kq(a) ? !a.value : Lq(a) ? 0 > a.selectedIndex : !0
            }

            function La(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (ka(c)) return c;
                    c = a.tagName;
                    if (ka(c)) return c
                } catch (b) {}
            }

            function xj(a, c) {
                var b = a.document.getElementsByTagName("form");
                return Rb(a)(c, xa(b))
            }

            function Mq(a, c, b) {
                b = gc("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (Fa("(Event|Object|constructor)", e) || lg(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = gc("createEvent", n(a, "document"))) && V(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d &&
                            d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Fc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.tf && c.tf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Xf(a) {
                var c = Bc(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function Gc(a) {
                var c = Zd(a);
                if (c) {
                    var b =
                        c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = ac(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function Zd(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a, "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return fa(c) || fa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function ac(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : Bc(a) || b
            }

            function Bc(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function cc(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function Cc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function qc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Ub(a) {
                return a ? a.innerText || "" : ""
            }

            function If(a) {
                if (fa(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function qf(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d =
                    "" + b + c + "_";
                return {
                    Hd: Nq(a),
                    C: function(e, f) {
                        var g = yj(a, "" + d + e);
                        return Ra(g) && !X(f) ? f : g
                    },
                    D: function(e, f) {
                        zj(a, "" + d + e, f);
                        return this
                    },
                    Eb: function(e) {
                        Aj(a, "" + d + e);
                        return this
                    }
                }
            }

            function zj(a, c, b) {
                var d = mg(a);
                a = mb(a, b);
                if (!Ra(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function yj(a, c) {
                var b = mg(a);
                try {
                    return Hb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function Aj(a, c) {
                var b = mg(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function mg(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function mb(a, c, b) {
                try {
                    return a.JSON.stringify(c,
                        null, b)
                } catch (d) {
                    return null
                }
            }

            function ae(a, c, b) {
                void 0 === b && (b = null);
                a.Ia || (a.Ia = ng());
                c && a.Ia.Ub(c, b);
                return a.Ia
            }

            function Le(a) {
                return {
                    M: function(c, b) {
                        var d = a.document,
                            e = c.K;
                        if (e && og(a)) {
                            var f = ia(a),
                                g = function(h) {
                                    og(a) || (f.Yb(d, Bj, g), b());
                                    return h
                                };
                            f.F(d, Bj, g);
                            e.D("pr", "1")
                        } else b()
                    }
                }
            }

            function Hd(a) {
                return function(c, b, d) {
                    return function(e, f) {
                        var g = B(v(Oc, Rc([c, f]), ha), Cj[a] || []);
                        g = Sa(g, d);
                        return Dj(c, b, g)(e)
                    }
                }
            }

            function Dj(a, c, b) {
                var d = Vb(a, c);
                return function(e) {
                    return Ej(b, e, !0).then(function() {
                        var f =
                            e.ma || {},
                            g = f.Ih,
                            h = void 0 === g ? "" : g;
                        g = f.Ba;
                        var k = void 0 === g ? "" : g;
                        f = f.Jh;
                        f = B(function(l) {
                            return Ba.Pa + "//" + ("" + h + l || dc) + "/" + k
                        }, void 0 === f ? [dc] : f);
                        return d(e, f)
                    }).then(function(f) {
                        var g = f.Qc;
                        f = f.hg;
                        e.yi = g;
                        e.Ej = f;
                        return Ej(b, e).then(w(g, R))
                    })
                }
            }

            function Vb(a, c) {
                return function(b, d) {
                    return Fj(a, c, d, b)
                }
            }

            function Fj(a, c, b, d, e, f) {
                var g;
                void 0 === e && (e = 0);
                void 0 === f && (f = 0);
                var h = z({
                        ra: []
                    }, d.$),
                    k = c[f],
                    l = k[0];
                k = k[1];
                var m = b[e];
                h.qb && h.qb["Content-Type"] || !h.ca || (h.qb = z({}, h.qb, (g = {}, g["Content-Type"] = "application/x-www-form-urlencoded",
                    g)), h.ca = "site-info=" + ge(h.ca));
                h.Be = h.ca ? "POST" : "GET";
                h.rb = Oq(a, d, l);
                h.Ba = (d.ma || {}).Ba;
                h.ra.push(l);
                z(d.$, h);
                g = "" + m + (d.Wa && d.Wa.$h ? "/1" : "");
                var p = 0;
                p = Pq(a, g, h);
                return k(g, h).then(function(r) {
                    var q = p,
                        u, t;
                    nb(a, (u = {}, u.name = "requestSuccess", u.data = (t = {}, t.body = r, t.requestId = q, t), u));
                    return {
                        Qc: r,
                        hg: e
                    }
                })["catch"](function(r) {
                    var q = p,
                        u, t;
                    nb(a, (u = {}, u.name = "requestFail", u.data = (t = {}, t.error = r, t.requestId = q, t), u));
                    q = f + 1 >= c.length;
                    u = e + 1 >= b.length;
                    q && u && Wa(r);
                    return Fj(a, c, b, d, !u && q ? e + 1 : e, q ? 0 : f + 1)
                })
            }

            function Oq(a,
                c, b) {
                var d = z({}, c.H);
                a = ca(a);
                c.K && (d["browser-info"] = Ga(c.K.l()).D("st", a(gg)).Ca());
                !d.t && (c = c.Ia) && (c.D("ti", b), d.t = c.Ca());
                return d
            }

            function Pq(a, c, b) {
                var d, e, f, g = Ta(a),
                    h = b.ra,
                    k = b.ca,
                    l = b.qb,
                    m = b.rb;
                b = b.Be;
                nb(a, (d = {}, d.name = "request", d.data = (e = {}, e.url = c, e.requestId = g, e.senderParams = (f = {}, f.rBody = k, f.debugStack = h, f.rHeaders = l, f.rQuery = m, f.verb = b, f), e), d));
                return g
            }

            function Gj(a, c, b, d) {
                a[c] || (a[c] = []);
                b && !fa(d) && Hj(a[c], b, d)
            }

            function Hj(a, c, b) {
                for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                    var g = a[f],
                        h = g[0];
                    g = g[1];
                    if (b === g && h === c) return;
                    if (b < g && b >= e) {
                        a.splice(f, 0, d);
                        return
                    }
                    e = g
                }
                a.push(d)
            }

            function Ej(a, c, b) {
                void 0 === b && (b = !1);
                return new K(function(d, e) {
                    function f(k, l) {
                        l();
                        d()
                    }
                    var g = a.slice();
                    g.push({
                        M: f,
                        Ea: f
                    });
                    var h = $b(g, function(k, l) {
                        var m = b ? k.M : k.Ea;
                        if (m) try {
                            m(c, l)
                        } catch (p) {
                            h(Qq), e(p)
                        } else l()
                    });
                    h(Ij)
                })
            }

            function Mb(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = ia(a);
                    var e = "__ym__promise_" + Ta(a) + "_" + Ta(a),
                        f = F;
                    d = D(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation &&
                            g.stopPropagation(), c())
                    });
                    f = b.F(a, ["message"], d);
                    a.postMessage(e, "*")
                } else U(a, c, 0, d)
            }

            function oh(a, c, b, d, e) {
                void 0 === d && (d = 1);
                void 0 === e && (e = "itc");
                c = $b(c, b);
                oc(a, c, d)(Qa(D(a, e), F))
            }

            function oc(a, c, b, d) {
                void 0 === b && (b = 1);
                void 0 === d && (d = Jj);
                pg = Infinity === b;
                return Da(function(e, f) {
                    function g() {
                        try {
                            var k = c(d(a, b));
                            h = h.concat(k)
                        } catch (l) {
                            return e(l)
                        }
                        c(Rq);
                        if (c(Id)) return f(h), Kj(a);
                        pg ? (c(d(a, 1E4)), f(h), Kj(a)) : U(a, g, 100)
                    }
                    var h = [];
                    Sq(g)
                })
            }

            function Kj(a) {
                if (qg.length) {
                    var c = qg.shift();
                    pg ? c() : U(a, c, 100)
                } else rg = !1
            }

            function Sq(a) {
                rg ? qg.push(a) : (rg = !0, a())
            }

            function yf(a) {
                return Da(function(c, b) {
                    b(a)
                })
            }

            function Yo(a) {
                return Da(function(c, b) {
                    a.then(b, c)
                })
            }

            function Tq(a) {
                var c = [],
                    b = 0;
                return Da(function(d, e) {
                    y(function(f, g) {
                        f(Qa(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function Xo(a) {
                var c = [],
                    b = !1;
                return Da(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    y(function(g) {
                        g(Qa(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Qa(a, c) {
                return function(b) {
                    return b(a,
                        c)
                }
            }

            function $b(a, c) {
                return Da({
                    Ra: a,
                    Kd: c || R,
                    oe: !1,
                    wa: 0
                })
            }

            function Ij(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.wa += 1
                    }
                    b = !1;
                    a.Kd(a.Ra[a.wa], function() {
                        d()
                    });
                    b || (a.wa += 1, d = w(a, Ij))
                }
                for (var b = !0; !Id(a) && b;) c()
            }

            function Jj(a, c) {
                return function(b) {
                    var d = ca(a),
                        e = d(Z);
                    return Lj(function(f, g) {
                        d(Z) - e >= c && g(Mj)
                    })(b)
                }
            }

            function Jd(a, c) {
                return function(b) {
                    var d = ca(a),
                        e = d(Z);
                    return Me(function(f) {
                        d(Z) - e >= c && Mj(f)
                    })(b)
                }
            }

            function Me(a) {
                return function(c) {
                    for (var b; c.Ra.length && !Id(c);) b = c.Ra.pop(), b = c.Kd(b, c.Ra), a(c);
                    return b
                }
            }

            function Uq(a) {
                Id(a) && Wa(mc("i"));
                var c = a.Kd(a.Ra[a.wa]);
                a.wa += 1;
                return c
            }

            function Rq(a) {
                a.oe = !1
            }

            function Mj(a) {
                a.oe = !0
            }

            function Qq(a) {
                a.wa = a.Ra.length
            }

            function Id(a) {
                return a.oe || a.Ra.length <= a.wa
            }

            function xb(a) {
                a = ca(a);
                return Math.round(a(sg) / 50)
            }

            function sg(a) {
                var c = a.Aa,
                    b = c[1];
                a = c[0] && b ? b() : Z(a) - a.Kh;
                return Math.round(a)
            }

            function gg(a) {
                return Math.round(Z(a) / 1E3)
            }

            function lb(a) {
                return Math.floor(Z(a) / 1E3 / 60)
            }

            function Z(a) {
                var c = a.xe;
                return 0 !== c ? c : tg(a.l, a.Aa)
            }

            function cg(a) {
                var c = ia(a),
                    b = Nj(a),
                    d = {
                        l: a,
                        xe: 0,
                        Aa: b,
                        Kh: tg(a, b)
                    },
                    e = b[1];
                b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                    0 === d.xe && (d.xe = tg(a, d.Aa))
                });
                return Da(d)
            }

            function Vq(a) {
                return (10 > a ? "0" : "") + a
            }

            function Ei(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = U(a, d, b), e.O(h))
                }
                var e = wd(a),
                    f, g = !1,
                    h;
                c.F(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return F
                });
                return e
            }

            function Wq(a, c) {
                return a.clearInterval(c)
            }

            function Xq(a, c, b, d) {
                return a.setInterval(D(a, "i.err." + (d || "def"), c), b)
            }

            function U(a, c, b, d) {
                return Ce(a, D(a, "d.err." + (d || "def"), c), b)
            }

            function id(a) {
                var c = {};
                return {
                    F: function(b, d) {
                        y(function(e) {
                            n(c, e) || (c[e] = wd(a));
                            c[e].F(d)
                        }, b);
                        return this
                    },
                    ha: function(b, d) {
                        y(function(e) {
                            n(c, e) && c[e].ha(d)
                        }, b);
                        return this
                    },
                    O: function(b, d) {
                        return n(c, b) ? D(a, "e." + d, c[b].O)(d) : []
                    }
                }
            }

            function wd(a) {
                var c = [],
                    b = {};
                b.wj = c;
                b.F = v(Aa("push", c), w(b, R));
                b.ha = v(Bb(Rb(a))(c), Bb(Aa("splice", c))(1), w(b, R));
                b.O = v(R, Bb(ha), Yq(c));
                return b
            }

            function Oj(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" :
                        "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function C(a, c, b) {
                return function() {
                    return D(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function D(a, c, b, d, e) {
                var f = Wa,
                    g = b || f;
                return function() {
                    var h = d;
                    try {
                        h = g.apply(e || null, arguments)
                    } catch (k) {
                        oe(a, c, k)
                    }
                    return h
                }
            }

            function tg(a, c) {
                var b = c || Nj(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && V(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function Nj(a) {
                a = Of(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = G(b, a));
                return [c, b]
            }

            function Of(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function oe(a, c, b) {
                var d = "u.a.e",
                    e = "";
                b && ("object" === typeof b ? (b.unk && Wa(b), d = b.message, e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
                Zq(d) || ab(w(d, Za), $q) || ar(d) && .1 <= a.Math.random() || y(v(R, Rc(["jserrs", d, c, e]), ha), Pj)
            }

            function cf() {
                var a = Ca(arguments);
                return Wa(Ua(a))
            }

            function Ua(a) {
                var c = "";
                ba(a) ? c = I(".", a) : ka(a) && (c = a);
                return mc("err.kn(" + Ba.bc + ")" + c)
            }

            function br(a) {
                this.message =
                    a
            }

            function nb(a, c) {
                if (le(a)) {
                    var b = c.na;
                    if (b) {
                        var d = b.split(":");
                        b = d[1];
                        d = Qj(rf(d[0]));
                        if ("1" === b || d) return
                    }
                    b = cr(a);
                    1E3 === b.length && b.shift();
                    b.push(c)
                }
            }

            function Ne(a, c) {
                return -1 < S(a).href.indexOf("_ym_debug=" + c)
            }

            function ci(a, c, b) {
                ug(a, "metrika_enabled", "1", 0, c, b, !0);
                var d = Rj(a);
                (d = d && d.metrika_enabled) && Sj(a, "metrika_enabled", c, b, !0);
                return !!d
            }

            function ug(a, c, b, d, e, f, g) {
                void 0 === g && (g = !1);
                if (di(a, ke, c)) {
                    var h = c + "=" + encodeURIComponent(b) + ";";
                    h += "" + dr(a);
                    if (d) {
                        var k = new Date;
                        k.setTime(k.getTime() +
                            6E4 * d);
                        h += "expires=" + k.toUTCString() + ";"
                    }
                    e && (d = e.replace(er, ""), h += "domain=" + d + ";");
                    try {
                        a.document.cookie = h + ("path=" + (f || "/")), g || (Tj(a)[c] = b)
                    } catch (l) {}
                }
            }

            function ke(a, c) {
                var b = Tj(a);
                return b ? b[c] || null : null
            }

            function Rj(a) {
                try {
                    var c = a.document.cookie;
                    if (!fa(c)) {
                        var b = {};
                        y(function(d) {
                            d = d.split("=");
                            var e = d[1];
                            b[ob(d[0])] = ob(Uj(e))
                        }, (c || "").split(";"));
                        return b
                    }
                } catch (d) {}
                return null
            }

            function di(a, c, b) {
                return !vg.length || L(b, wg) ? !0 : M(function(d, e) {
                    return d && e(a, c, b)
                }, !0, vg)
            }

            function xd(a) {
                return a ?
                    v(Ea, Vf(function(c, b) {
                        var d = b[0],
                            e = b[1];
                        X(e) || fa(e) || c.push(d + "=" + ge(e));
                        return c
                    }, []), qd("&"))(a) : ""
            }

            function fr(a) {
                return a ? v(yb(function(c) {
                    c = c.split("=");
                    var b = c[1];
                    return [c[0], fa(b) ? void 0 : Uj(b)]
                }), Vf(function(c, b) {
                    c[b[0]] = b[1];
                    return c
                }, {}))(a.split("&")) : {}
            }

            function Uj(a) {
                var c = "";
                try {
                    c = decodeURIComponent(a)
                } catch (b) {}
                return c
            }

            function ge(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a = I("", la(function(c) {
                    return 55296 >= c.charCodeAt(0)
                }, a.split("")));
                return encodeURIComponent(a)
            }

            function ob(a,
                c) {
                if (a) {
                    var b = Vj ? Vj.call(a) : ("" + a).replace(nj, "");
                    return c && b.length > c ? b.substring(0, c) : b
                }
                return ""
            }

            function gj(a) {
                var c = a.match(Wj);
                if (c) {
                    a = c[1];
                    if (c = c[2]) return L(c, xg) ? c : !1;
                    if (a) return xg[0]
                }
                return !1
            }

            function S(a) {
                return M(function(c, b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, gr)
            }

            function Xj(a) {
                return M(function(c, b) {
                    c[df[b[0]].ea] = b[1];
                    return c
                }, {}, Ea(a))
            }

            function hc(a) {
                y(function(c) {
                    var b = c[1];
                    df[c[0]] = {
                        ea: b.ea,
                        Sa: b.Sa
                    }
                }, Ea(a))
            }

            function Rl(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    aa: d,
                    kc: e,
                    ba: b
                };
                a = M(function(g, h) {
                    var k = h[1],
                        l = k.Sa;
                    k = f[k.ea];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Ea(c));
                bj(a, a.ba || {});
                return a
            }

            function hr(a) {
                a = N(a);
                return ic[a] && ic[a].Ni || null
            }

            function Yj(a) {
                a = N(a);
                return ic[a] && ic[a].Mi
            }

            function bj(a, c) {
                var b = N(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                ic[b] || (ic[b] = {});
                if (d || e) ic[b].Mi = d, ic[b].Ni = e
            }

            function Zj(a) {
                return Oe(a) || od(a) || /mobile/i.test(gb(a)) || !X(n(a, "orientation"))
            }

            function nf(a, c) {
                if (Kd(a) && c) {
                    var b = gb(a).match(yg);
                    if (b && b.length) return +b[1] >=
                        c
                }
                return !1
            }

            function of (a, c) {
                var b = gb(a);
                return b && (b = b.match(ir)) && 1 < b.length ? Ja(b[1]) >= c : !1
            }

            function og(a) {
                return L("prerender", B(w(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Ta(a, c, b) {
                var d = X(b);
                X(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function jr() {
                var a = Ca(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) yd(b, d) && (c[d] = b[d]);
                    yd(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function kr(a) {
                return function(c) {
                    return c ?
                        a(c) : []
                }
            }

            function ak(a) {
                return X(a) ? [] : Ld(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], bk(a))
            }

            function bk(a) {
                var c = [],
                    b;
                for (b in a) yd(a, b) && c.push(b);
                return c
            }

            function rf(a) {
                try {
                    return parseInt(a, 10)
                } catch (c) {
                    return null
                }
            }

            function qe(a, c) {
                return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
            }

            function lr(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Sa(a, c) {
                y(v(R, Aa("push", a)), c);
                return a
            }

            function zg(a, c) {
                return Array.prototype.sort.call(c,
                    a)
            }

            function Cd(a) {
                return a.splice(0, a.length)
            }

            function xa(a) {
                return a ? ba(a) ? a : Pe ? Pe(a) : "number" === typeof a.length && 0 <= a.length ? ck(a) : [] : []
            }

            function mr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (b in c && a.call(c, c[b], b)) return !0;
                return !1
            }

            function nr(a, c) {
                return Ld(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ba(d) ? d : [d])
                }, [], c)
            }

            function dk(a, c) {
                return Ld(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function or(a, c) {
                if (!Kd(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function pr(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function qr(a, c) {
                return 1 <= ek(wa(a), c).length
            }

            function rr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (a.call(c, c[b], b)) return c[b]
            }

            function ek(a, c) {
                return Ld(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function ve(a, c, b) {
                return b ? a : c
            }

            function sr(a, c) {
                return M(function(b, d, e) {
                    return b ? !!a(d, e) : !1
                }, !0, c)
            }

            function Zf(a, c, b) {
                try {
                    if (V(c)) {
                        var d = Ca(arguments).slice(3);
                        fa(b) ? c.apply(void 0, d) : G.apply(void 0, za([c, b], d))()
                    }
                } catch (e) {
                    Ce(a,
                        w(e, Wa), 0)
                }
            }

            function Wa(a) {
                throw a;
            }

            function Ce(a, c, b) {
                return gc("setTimeout", a)(c, b)
            }

            function ma(a, c) {
                return gc("clearTimeout", a)(c)
            }

            function vd() {
                return []
            }

            function Dc() {
                return {}
            }

            function gc(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function qb(a, c, b) {
                return function() {
                    var d = Ca(arguments),
                        e = d[0];
                    d = d.slice(1);
                    var f = H(e),
                        g = b ? "global" : "m1111",
                        h = f.C(g, {}),
                        k = n(h, a);
                    k || (k = x(c), h[a] = k, f.D(g, h));
                    return k.apply(void 0,
                        za([e], d))
                }
            }

            function Ic(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                M(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function Md(a) {
                a = a.Ya = a.Ya || {};
                var c = a._metrika = a._metrika || {};
                return {
                    Na: function(b, d) {
                        Ag.call(c, b) || (c[b] = d);
                        return this
                    },
                    D: function(b, d) {
                        c[b] = d;
                        return this
                    },
                    C: function(b, d) {
                        var e = c[b];
                        return Ag.call(c, b) || X(d) ? e : d
                    }
                }
            }

            function yd(a, c) {
                return fa(a) ? !1 : Ag.call(a, c)
            }

            function x(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : R;
                return function() {
                    var f =
                        Ca(arguments),
                        g = e.apply(void 0, f),
                        h = fk(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function Rb(a) {
                if (Bg) return Bg;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && na(a.Array.prototype.indexOf, "indexOf");
                a = void 0;
                return Bg = a = c && b ? function(d, e) {
                    return b.call(e, d)
                } : tr
            }

            function tr(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function ha(a, c) {
                return c ? a(c) : a()
            }

            function v() {
                var a = Ca(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return M(gk, b, a)
                }
            }

            function Vf(a, c) {
                return E([a, c], M)
            }

            function Ld(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function bb(a) {
                return Aa("test", a)
            }

            function Aa(a, c) {
                return G(c[a], c)
            }

            function w(a, c) {
                return G(c, null, a)
            }

            function E(a, c) {
                return G.apply(void 0, za([c, null], a))
            }

            function ur(a) {
                return function() {
                    var c = Ca(arguments);
                    return a.apply(c[0], za([c[1]], c.slice(2)))
                }
            }

            function vr() {
                var a = Ca(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e =
                        za(d, Ca(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, za([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && hk(f, e, b);
                        delete b[f];
                        return e
                    }
                    return hk(c, e)
                }
            }

            function hk(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                V(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function Ca(a) {
                if (Pe) try {
                    return Pe(a)
                } catch (c) {}
                return ck(a)
            }

            function ck(a) {
                for (var c =
                        a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function ta(a) {
                return !Ra(a) && !X(a) && "[object Object]" === Object.prototype.toString.call(a)
            }

            function fa(a) {
                return X(a) || Ra(a)
            }

            function V(a) {
                return "function" === typeof a
            }

            function Bb(a) {
                return function(c) {
                    return function(b) {
                        return a(b, c)
                    }
                }
            }

            function oa(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function gk(a, c) {
                return c(a)
            }

            function $p(a) {
                return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(bg, "\\.").replace(/\[/g, "\\[").replace(/\]/g,
                    "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function wr(a) {
                return "" + a
            }

            function Za(a, c) {
                return !(!a || -1 === ie(a, c))
            }

            function xr(a, c) {
                for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                    b = a[e] === c[b] ? b + 1 : 0;
                    if (b === c.length) return e - c.length + 1;
                    if (!b && e > d) break
                }
                return -1
            }

            function ka(a) {
                return "string" === typeof a
            }

            function na(a, c) {
                return Fa(c, a) && a
            }

            function Fa(a, c) {
                var b = Qe(a, c);
                c && !b && Cg.push([a, c]);
                return b
            }

            function Qe(a, c) {
                if (!c || "function" !== typeof c) return !1;
                try {
                    var b = "" + c
                } catch (h) {
                    return !1
                }
                var d = b.length;
                if (d > 35 + a.length) return !1;
                for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                    f = "[native code]" [f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                    if (12 === f) return !0;
                    if (!f && g > e) break
                }
                return !1
            }

            function F() {}

            function Dg() {
                Dg = Object.assign || function(a) {
                    for (var c, b = 1, d = arguments.length; b < d; b++) {
                        c = arguments[b];
                        for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e])
                    }
                    return a
                };
                return Dg.apply(this,
                    arguments)
            }

            function Eg(a, c) {
                Eg = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Eg(a, c)
            }

            function tc(a) {
                return !a
            }

            function rb(a, c) {
                return c
            }

            function R(a) {
                return a
            }

            function Ma(a, c) {
                function b() {
                    this.constructor = a
                }
                Eg(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function za() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c <
                    b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function n(a, c) {
                return a ? M(function(b, d) {
                    if (fa(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function yr(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }

            function zr() {}

            function Ar(a, c) {
                return function() {
                    a.apply(c, arguments)
                }
            }

            function Ia(a) {
                if (!(this instanceof Ia)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.Ka = 0;
                this.De = !1;
                this.Oa = void 0;
                this.zb = [];
                ik(a, this)
            }

            function jk(a, c) {
                for (; 3 === a.Ka;) a = a.Oa;
                0 === a.Ka ? a.zb.push(c) : (a.De = !0, Ia.Ee(function() {
                    var b = 1 === a.Ka ? c.hi : c.li;
                    if (null === b)(1 === a.Ka ? Fg : Nd)(c.promise, a.Oa);
                    else {
                        try {
                            var d = b(a.Oa)
                        } catch (e) {
                            Nd(c.promise, e);
                            return
                        }
                        Fg(c.promise, d)
                    }
                }))
            }

            function Fg(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof Ia) {
                            a.Ka = 3;
                            a.Oa = c;
                            Gg(a);
                            return
                        }
                        if ("function" ===
                            typeof b) {
                            ik(Ar(b, c), a);
                            return
                        }
                    }
                    a.Ka = 1;
                    a.Oa = c;
                    Gg(a)
                } catch (d) {
                    Nd(a, d)
                }
            }

            function Nd(a, c) {
                a.Ka = 2;
                a.Oa = c;
                Gg(a)
            }

            function Gg(a) {
                2 === a.Ka && 0 === a.zb.length && Ia.Ee(function() {
                    a.De || Ia.yg(a.Oa)
                });
                for (var c = 0, b = a.zb.length; c < b; c++) jk(a, a.zb[c]);
                a.zb = null
            }

            function Br(a, c, b) {
                this.hi = "function" === typeof a ? a : null;
                this.li = "function" === typeof c ? c : null;
                this.promise = b
            }

            function ik(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Fg(c, d))
                    }, function(d) {
                        b || (b = !0, Nd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, Nd(c, d))
                }
            }

            function Sj(a, c, b, d, e) {
                void 0 ===
                    e && (e = !1);
                return ug(a, c, "", -100, b, d, e)
            }

            function dd(a, c, b) {
                void 0 === c && (c = "_ym_");
                void 0 === b && (b = "");
                var d = Cr(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Eb: function(g, h, k) {
                        Sj(a, "" + c + g + f, h || e, k);
                        return this
                    },
                    C: function(g) {
                        return ke(a, "" + c + g + f)
                    },
                    D: function(g, h, k, l, m) {
                        ug(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function Hb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function rc(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c <<
                    1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function Sl(a, c, b, d) {
                var e = kk[b];
                return e ? function() {
                    var f = Ca(arguments);
                    try {
                        var g = d.apply(void 0, f);
                        var h = H(a);
                        h.Na("mt", {});
                        var k = h.C("mt"),
                            l = k[e];
                        k[e] = l ? l + 1 : 1
                    } catch (m) {
                        Wa(m)
                    }
                    return g
                } : d
            }

            function Kc(a, c) {
                var b = Dr(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function lk(a) {
                return (a =
                    S(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Er(a, c) {
                var b = lk(a);
                mk = Xq(a, function() {
                    var d = lk(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return G(Wq, null, a, mk)
            }

            function Fr(a, c, b, d) {
                var e, f, g = c.aa,
                    h = c.Ae,
                    k = c.vc,
                    l = H(a),
                    m = Ga((e = {}, e.wh = 1, e.pv = 1, e));
                e = n(d, "isTrusted");
                d && !fa(e) && m.D("ite", Gb(e));
                Yd(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
                h && m.D("ut", "1");
                g = l.C("lastReferrer");
                d = S(a).href;
                k = {
                    H: (f = {}, f["page-url"] = k || d, f["page-ref"] = g, f),
                    K: m
                };
                b(k, c)["catch"](D(a, "g.s"));
                l.D("lastReferrer", d)
            }

            function Gr(a, c, b) {
                function d() {
                    q ||
                        (r = !0, u = !1, q = !0, f())
                }

                function e() {
                    m = !0;
                    k(!1);
                    c()
                }

                function f() {
                    ma(a, l);
                    if (m) k(!1);
                    else {
                        var O = Math.max(0, b - (u ? t : t + p(Z) - A));
                        O ? l = U(a, e, O, "u.t.d.c") : e()
                    }
                }

                function g() {
                    u = r = q = !0;
                    t += p(Z) - A;
                    A = p(Z);
                    f()
                }

                function h() {
                    r || q || (t = 0);
                    A = p(Z);
                    r = q = !0;
                    u = !1;
                    f()
                }

                function k(O) {
                    O = O ? Q.F : Q.Yb;
                    O(a, ["blur"], g);
                    O(a, ["focus"], h);
                    O(a.document, ["click", "mousemove", "keydown", "scroll"], d)
                }
                var l = 0,
                    m = !1;
                if (lg(a)) return l = U(a, c, b, "u.t.d"), E([a, l], ma);
                var p = ca(a),
                    r = !1,
                    q = !1,
                    u = !0,
                    t = 0,
                    A = p(Z),
                    Q = ia(a);
                k(!0);
                f();
                return function() {
                    ma(a, l);
                    k(!1)
                }
            }

            function bf(a, c, b, d) {
                return function() {
                    if (Ka(a, c)) {
                        var e = Ca(arguments);
                        return d.apply(void 0, e)
                    }
                }
            }

            function sb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] +
                    a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function jc(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Tc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 -
                    c
                ];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function ib(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ua(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function nk(a) {
                a = ua(a, [0, a[0] >>> 1]);
                a = sb(a, [4283543511, 3981806797]);
                a = ua(a, [0, a[0] >>> 1]);
                a = sb(a, [3301882366, 444984403]);
                return a = ua(a, [0, a[0] >>> 1])
            }

            function Hr(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length - b.length % 16;
                d = {
                    R: [0, d],
                    T: [0, d]
                };
                for (var f = 0; f < e; f += 16) {
                    var g = d,
                        h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f +
                            5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24],
                        k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                    h = sb(h, Re);
                    h = Tc(h, 31);
                    h = sb(h, Se);
                    g.R = ua(g.R, h);
                    g.R = Tc(g.R, 27);
                    g.R = jc(g.R, g.T);
                    g.R = jc(sb(g.R, [0, 5]), [0, 1390208809]);
                    k = sb(k, Se);
                    k = Tc(k, 33);
                    k = sb(k, Re);
                    g.T = ua(g.T, k);
                    g.T = Tc(g.T, 31);
                    g.T = jc(g.T, g.R);
                    g.T = jc(sb(g.T, [0, 5]), [0, 944331445])
                }
                e = b.length % 16;
                f = b.length - e;
                g = [0, 0];
                h = [0, 0];
                switch (e) {
                    case 15:
                        h = ua(h, ib([0, b.charCodeAt(f + 14)], 48));
                    case 14:
                        h = ua(h, ib([0, b.charCodeAt(f + 13)], 40));
                    case 13:
                        h = ua(h, ib([0, b.charCodeAt(f + 12)], 32));
                    case 12:
                        h = ua(h, ib([0, b.charCodeAt(f + 11)], 24));
                    case 11:
                        h = ua(h, ib([0, b.charCodeAt(f + 10)], 16));
                    case 10:
                        h = ua(h, ib([0, b.charCodeAt(f + 9)], 8));
                    case 9:
                        h = ua(h, [0, b.charCodeAt(f + 8)]), h = sb(h, Se), h = Tc(h, 33), h =
                            sb(h, Re), d.T = ua(d.T, h);
                    case 8:
                        g = ua(g, ib([0, b.charCodeAt(f + 7)], 56));
                    case 7:
                        g = ua(g, ib([0, b.charCodeAt(f + 6)], 48));
                    case 6:
                        g = ua(g, ib([0, b.charCodeAt(f + 5)], 40));
                    case 5:
                        g = ua(g, ib([0, b.charCodeAt(f + 4)], 32));
                    case 4:
                        g = ua(g, ib([0, b.charCodeAt(f + 3)], 24));
                    case 3:
                        g = ua(g, ib([0, b.charCodeAt(f + 2)], 16));
                    case 2:
                        g = ua(g, ib([0, b.charCodeAt(f + 1)], 8));
                    case 1:
                        g = ua(g, [0, b.charCodeAt(f)]), g = sb(g, Re), g = Tc(g, 31), g = sb(g, Se), d.R = ua(d.R, g)
                }
                d.R = ua(d.R, [0, b.length]);
                d.T = ua(d.T, [0, b.length]);
                d.R = jc(d.R, d.T);
                d.T = jc(d.T, d.R);
                d.R = nk(d.R);
                d.T = nk(d.T);
                d.R = jc(d.R, d.T);
                d.T = jc(d.T, d.R);
                return ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
            }

            function Od(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = pb('[itemprop~="' + b + '"]', c);
                return d ? la(function(e) {
                    return e.parentNode && fc("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function cb(a, c, b) {
                return (a = Od(a, c, b)) && a.length ? a[0] : null
            }

            function Xa(a) {
                if (!a) return "";
                a = ba(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || Ub(a[0]) : ""
            }

            function ok(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : Xa(a) : ""
            }

            function ld(a, c, b) {
                a = c && (Za(c.className, "ym-disable-keys") || Za(c.className, "-metrika-nokeys"));
                return b && c ? a || !!Iq(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function Bf(a, c) {
                return Je(c) ? "password" === c.type || c.name && L(c.name.toLowerCase(), pk) || c.id && L(c.id.toLowerCase(), pk) : !1
            }

            function qk(a, c) {
                var b = Math.max(0, Math.min(c,
                    65535));
                Sa(a, [b >> 8, b & 255])
            }

            function Nb(a, c) {
                Sa(a, [c & 255])
            }

            function fb(a, c, b) {
                return -1 !== Rb(a)(b, Ir) ? (Nb(c, b), !1) : !0
            }

            function T(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Sa(a, [b & 127 | 128]), b >>= 7;
                Sa(a, [b])
            }

            function Hg(a, c) {
                T(a, c.length);
                for (var b = 0; b < c.length; b += 1) T(a, c.charCodeAt(b))
            }

            function Ig(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) qk(a, b.charCodeAt(d))
            }

            function Jr(a, c) {
                var b = [];
                if (fb(a, b, 27)) return [];
                T(b, c);
                return b
            }

            function Kr(a, c) {
                var b = La(c);
                if (!b) return c[Va] = -1, null;
                var d = +c[Va];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.gj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = He(a, c),
                    g = f && f[Va] ? f[Va] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h = Lr()[b];
                h || (e |= 2);
                var k = vj(a, c);
                k || (e |= 4);
                var l = Ff(a, c);
                (f = f ? Ff(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                vc[d].wf = l[0] + "x" + l[1];
                vc[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (fb(a, f, 1)) return null;
                T(f, d);
                Nb(f, e);
                T(f, g);
                h ? Nb(f, h) : Ig(f,
                    b);
                k && T(f, k);
                e & 8 || (T(f, l[0]), T(f, l[1]), T(f, l[2]), T(f, l[3]));
                e & 32 && Ig(f, c.id);
                Nb(f, 0);
                return f
            }

            function Mr(a, c) {
                var b = c[Va];
                if (!b || 0 > b || !Df(c) || !c.form || ai(a, c.form)) return [];
                var d = xj(a, c.form);
                if (0 > d) return [];
                if (Je(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        pc: 0,
                        kj: 0,
                        "datetime-local": 0,
                        email: 0,
                        tf: 0,
                        Dj: 0,
                        search: 0,
                        Hj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Jj: 0,
                        password: 2,
                        Cj: 3,
                        ij: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        dj: 1,
                        ej: 5
                    };
                    var f = La(c);
                    e = X(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0,
                        l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (fb(a, g, 7)) return [];
                T(g, b);
                T(g, d);
                T(g, e);
                Hg(g, c.name || "");
                T(g, f);
                return g
            }

            function uc(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !Gn(a, c, b); c = He(a, c)) d.push(c);
                y(function(e) {
                    vc.counter += 1;
                    var f = vc.counter;
                    e[Va] = f;
                    vc[f] = {};
                    f = Kr(a, e);
                    e = Mr(a, e);
                    f && e && (Sa(b, f), Sa(b, e))
                }, Nr(d));
                return b
            }

            function Or(a) {
                var c = a.oa;
                if (!kd || c && !c.fromElement) return Yh(a)
            }

            function Pr(a) {
                var c = a.oa;
                if (c && !c.toElement) return Ef(a)
            }

            function rk(a) {
                var c =
                    Cc(a.oa);
                if (c && je(c)) {
                    var b = Xh(a, c);
                    var d = xb(a.l),
                        e = [];
                    fb(a.l, e, 17) ? a = [] : (T(e, d), T(e, c[Va]), a = e);
                    return za(b, a)
                }
            }

            function sk(a) {
                var c = a.l,
                    b = a.oa.target;
                if (b && je(b)) {
                    c = uc(c, b);
                    var d = xb(a.l),
                        e = [];
                    fb(a.l, e, 18) ? a = [] : (T(e, d), T(e, b[Va]), a = e);
                    return za(c, a)
                }
            }

            function tk(a) {
                var c = a.l,
                    b = Cc(a.oa);
                if (!b || Bf(c, b) || ld(c, b)) return [];
                if (Df(b)) {
                    var d = H(c).C("isEU"),
                        e = Lc(c, b, d),
                        f = e.Ta;
                    d = e.mb;
                    e = e.fb;
                    if (Ke(b)) var g = b.checked;
                    else g = b.value, g = f ? I("", uk(g.split(""))) : g;
                    c = uc(c, b);
                    f = xb(a.l);
                    d = d && !e;
                    e = [];
                    fb(a.l, e, 39) ? a = [] : (T(e, f), T(e, b[Va]), Ig(e, String(g)), Nb(e, d ? 1 : 0), a = e);
                    return za(c, a)
                }
            }

            function Te(a) {
                var c = a.l,
                    b = a.oa,
                    d = Cc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = w(e, Sa);
                d && je(d) ? f(Xh(a, d)) : f(uc(c, d));
                var g = Vi(c, b);
                a = xb(a.l);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = Ie(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = He(c, d)) l = Ie(c, d), m = l[0], l = l[1];
                d ? (m = d[Va], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = kg(c, d), fb(c,
                    k, l) ? c = [] : (T(k, a), T(k, m), T(k, Math.max(0, h[0] - d.left)), T(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, Nb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return za(e, c)
            }

            function Qr(a) {
                var c = null,
                    b = a.l,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ra(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c =
                        c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = Lc(b, c).Ta || ld(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = Lc(b, d).Ta || ld(b, d, !0), f += 1;
                if (e !== Jg) return Jg = e, d = d ? I("", uk(e.split(""))) : e, e = xb(a.l), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], fb(a.l, c, 29) ? a = [] : (T(c, e), Hg(c, b), Hg(c, d), a = c), a
            }

            function Rr(a) {
                return za(Te(a), Qr(a) || [])
            }

            function vk(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ?
                    4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function wk(a) {
                var c = [];
                Kg || (Kg = !0, Jg && c.push.apply(c, Jr(a.l, xb(a.l))), Mb(a.l, function() {
                    Kg = !1
                }, "fv.c"));
                return c
            }

            function xk(a, c, b, d) {
                c = Cc(c);
                if (!c || Gf(a, c)) return [];
                var e = Lc(a, c),
                    f = e.mb,
                    g = e.fb;
                e = e.Ta;
                var h = H(a);
                if (!g && (f && h.C("isEU") || ld(a, c))) a = [];
                else {
                    f = uc(a, c);
                    h = xb(a);
                    g = [];
                    if (fb(a, g, 38)) a = [];
                    else {
                        T(g, h);
                        qk(g, b);
                        Nb(g, d);
                        a = c[Va];
                        if (!a || 0 > a) a = 0;
                        T(g, a);
                        Nb(g, e ? 1 : 0);
                        a = g
                    }
                    a = za(f, a)
                }
                return a
            }

            function Sr(a) {
                var c = a.l,
                    b = a.oa,
                    d = b.keyCode,
                    e = vk(b),
                    f = [],
                    g = w(f, Sa);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(xk(c, b, d, e | 16)), Lg = !1, Mb(c, function() {
                    Lg = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g(wk(a));
                return f
            }

            function Tr(a) {
                var c = a.l;
                a = a.oa;
                var b = [];
                Lg && !Mg && 0 !== a.which && (b.push.apply(b, xk(c, a, a.charCode || a.keyCode, vk(a))), Mg = !0, Mb(c, function() {
                    Mg = !1
                }, "fv.kp"));
                return b
            }

            function yk(a) {
                var c =
                    a.l,
                    b = Cc(a.oa);
                if (!b || ai(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) wj(e[f]) || d.push.apply(d, uc(c, e[f]));
                    e = d.push;
                    f = e.apply;
                    a = xb(a.l);
                    var g = xj(c, b);
                    if (0 > g) c = [];
                    else {
                        var h = b.elements,
                            k = h.length;
                        b = [];
                        for (var l = 0; l < k; l += 1)
                            if (!wj(h[l])) {
                                var m = h[l][Va];
                                m && 0 < m && b.push(m)
                            }
                        h = [];
                        if (fb(c, h, 11)) c = [];
                        else {
                            T(h, a);
                            T(h, g);
                            T(h, b.length);
                            for (c = 0; c < b.length; c += 1) T(h, b[c]);
                            c = h
                        }
                    }
                    f.call(e, d, c)
                }
                return d
            }

            function Ur(a) {
                var c = a.flush;
                a = Cc(a.oa);
                "BODY" === La(a) && c()
            }

            function Um(a,
                c) {
                var b, d = Cc(c),
                    e = Ba.jc,
                    f = Md(a);
                if (d && cc("ym-advanced-informer", d)) {
                    var g = f.C("ifc", 0) + 1;
                    f.D("ifc", g);
                    g = d.getAttribute("data-lang");
                    var h = Ja(d.getAttribute("data-cid") || "");
                    if (h || 0 === h)(e = n(a, "Ya." + e + ".informer")) ? e((b = {}, b.i = d, b.id = h, b.lang = g, b)) : f.D("ib", !0), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function nh(a, c, b, d) {
                return function() {
                    var e = Ca(arguments);
                    e = d.apply(void 0, e);
                    return X(e) ? Ka(a, c) : e
                }
            }

            function mh(a, c, b, d) {
                return D(a, "cm." + b, d)
            }

            function Ql(a, c, b, d, e) {
                return b.length &&
                    e ? E(M(function(f, g, h) {
                        return b[h] ? f.concat(E([a, c, d], g)) : f
                    }, [], b), v)()(e) : e
            }
            var Uc = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "3qm6qq813ycbml9sb64xkgv",
                    host: "mc.yandex.ru"
                },
                Cg = [],
                bg = /\./g,
                zk = na(String.prototype.indexOf, "indexOf"),
                ie = zk ? function(a, c) {
                    return zk.call(a, c)
                } : xr,
                wa = oa(function(a, c) {
                    return a === c
                }),
                hd = oa(function(a, c) {
                    a(c);
                    return c
                }),
                Da = oa(gk),
                Ra = wa(null),
                X = wa(void 0),
                Pe = na(Array.from, "from"),
                Ak = na(Function.prototype.bind, "bind"),
                G = Ak ? ur(Ak) : vr,
                Bk = na(Array.prototype.reduce, "reduce"),
                M = Bk ? function(a, c, b) {
                    return Bk.call(b, a, c)
                } : Ld,
                lj = v,
                te = v(R, ha),
                Bg, fk = Rb(window),
                Vr = Bb(fk),
                Ag = Object.prototype.hasOwnProperty,
                H = x(Md),
                W = Bb(n),
                Oa = W("length"),
                Rc = oa(E),
                Di = oa(Aa),
                Ck = na(Array.prototype.every, "every"),
                vp = Ck ? function(a, c) {
                    return Ck.call(c, a)
                } : sr,
                Ib = E([1, null], ve),
                Gb = E([1, 0], ve),
                Lb = Boolean,
                Dk = na(Array.prototype.filter, "filter"),
                la = Dk ? function(a, c) {
                    return Dk.call(c, a)
                } : ek,
                pa = w(Lb, la),
                Ek = oa(la),
                Fk = na(Array.prototype.find, "find"),
                wb = Fk ? function(a, c) {
                    return Fk.call(c, a)
                } : rr,
                Gk = na(Array.prototype.includes,
                    "includes"),
                L = Gk ? function(a, c, b) {
                    return Gk.call(c, a, b)
                } : qr,
                zc = Bb(L),
                Hk = na(Array.prototype.join, "join"),
                I = Hk ? function(a, c) {
                    return Hk.call(c, a)
                } : pr,
                qd = oa(I),
                Ik = x(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        hf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        ig: c
                    }
                }),
                gb = x(W("navigator.userAgent")),
                yg = /Firefox\/([0-9]+)/i,
                Kd = x(function(a) {
                    var c = n(a, "document.documentElement.style"),
                        b = n(a, "InstallTrigger");
                    a = -1 !== (n(a, "navigator.userAgent") || "").toLowerCase().search(yg);
                    yg.lastIndex = 0;
                    return !(!(c &&
                        "MozAppearance" in c) || fa(b)) || a
                }),
                Jk = na(Array.isArray, "isArray"),
                ba = Jk ? function(a) {
                    return Jk(a)
                } : yr,
                Kk = na(Array.prototype.map, "map"),
                B = Kk && or(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? Kk.call(c, a) : []
                } : dk,
                y = B,
                Lk = na(Array.prototype.flatMap, "flatMap"),
                pc = Lk ? function(a, c) {
                    return Lk.call(c, a)
                } : nr,
                yb = oa(B),
                Yq = Bb(B),
                Mk = na(Array.prototype.some, "some"),
                ab = Mk ? function(a, c) {
                    return Mk.call(c, a)
                } : mr,
                Ae = x(Rb),
                Oc = W("0"),
                Wr = oa(zg),
                Nk = na(Array.prototype.reverse, "reverse"),
                Nr = Nk ? function(a) {
                    return Nk.call(a)
                } :
                lr,
                Ok = Bb(parseInt),
                Ja = Ok(10),
                Ng = Ok(2),
                Pk = na(Object.keys, "keys"),
                Qk = na(Object.entries, "entries"),
                Ea = Qk ? kr(Qk) : ak,
                da = Pk ? function(a) {
                    return Pk(a)
                } : bk,
                Rk = na(Object.values, "values"),
                Xr = v(ak, w(W("1"), dk)),
                Yr = Rk ? function(a) {
                    return Rk(a)
                } : Xr,
                z = Object.assign || jr,
                Wh = oa(function(a, c) {
                    return z({}, a, c)
                }),
                ed = x(v(W("String.fromCharCode"), w("fromCharCode", Fa), tc)),
                Oe = x(v(gb, bb(/ipad|iphone|ipod/i))),
                Nf = x(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                rd = x(function(a) {
                    a = Ik(a);
                    var c = a.ig;
                    return a.hf && !c.match("CriOS")
                }),
                Zr = bb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/),
                $r = bb(/; wv\)/),
                pd = x(function(a) {
                    a = gb(a);
                    return $r(a) || Zr(a)
                }),
                as = /Chrome\/(\d+)\./,
                bs = x(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(as)) && a.length ? 76 <= Ja(a[1]) : !1
                }),
                od = x(function(a) {
                    var c = (gb(a) || "").toLowerCase();
                    a = Nf(a);
                    return Za(c, "android") && Za(c, "mobile") && /^android|linux armv/i.test(a)
                }),
                cs =
                "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                ds = x(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (X(c)) return null;
                    a = Ae(a)(c, cs);
                    return -1 === a ? c : "" + a
                }),
                lg = x(v(W("document.addEventListener"), tc)),
                Sk = x(function(a) {
                    var c = n(a, "navigator") || {};
                    return M(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                sh = x(function(a) {
                    var c = n(a, "navigator") || {};
                    a = Sk(a);
                    ka(a) || (a = "", c = n(c, "languages.0"), ka(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                eb = x(function(a) {
                    return (n(a, "top") || a) !== a
                }),
                es = x(W("top.contentWindow")),
                fs = x(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                gs = x(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(ab(w(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || ab(w(n(a, "document"), n), c) || b || d && ab(G(d.getAttribute, d), e))
                }),
                hs = x(function(a) {
                    return !!(ab(w(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(gb(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                is = x(function(a) {
                    return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"))
                }),
                Pd = x(function(a) {
                    var c =
                        gb(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : (Oe(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && rd(a)
                }),
                ir = /Edg\/(\d+)\./,
                Fe = x(function(a) {
                    return Pd(a) || nf(a, 68) || of (a, 79)
                }),
                js = Uc.construct,
                dc = Uc.host,
                Og = lg(window),
                Ba = {
                    ug: 24226447,
                    ng: 26302566,
                    xg: 51533966,
                    bj: 65446441,
                    Pa: "https:",
                    bc: "1111",
                    jc: js,
                    sg: Og ? 512 : 2048,
                    qg: Og ? 512 : 2048,
                    rg: Og ? 100 : 400,
                    cj: 100,
                    vg: "noindex"
                },
                Ue = [],
                N = x(function(a) {
                    return a.id + ":" + a.aa
                }),
                ic = {},
                Yd = wa("1"),
                ks = setTimeout;
            Ia.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            Ia.prototype.then = function(a, c) {
                var b = new this.constructor(zr);
                jk(this, new Br(a, c, b));
                return b
            };
            Ia.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            Ia.all = function(a) {
                return new Ia(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l =
                                    k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f && c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            Ia.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === Ia ? a : new Ia(function(c) {
                    c(a)
                })
            };
            Ia.reject = function(a) {
                return new Ia(function(c, b) {
                    b(a)
                })
            };
            Ia.race = function(a) {
                return new Ia(function(c,
                    b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) Ia.resolve(a[d]).then(c, b)
                })
            };
            Ia.Ee = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                ks(a, 0)
            };
            Ia.yg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var K = window.Promise,
                ls = na(K, "Promise"),
                Tk = na(n(K, "resolve"), "resolve"),
                Uk = na(n(K, "reject"), "reject"),
                Vk = na(n(K, "all"), "all");
            if (L(!1, [ls,
                    Tk, Uk, Vk
                ])) K = Ia;
            else {
                var Ve = function(a) {
                    return new Promise(a)
                };
                Ve.resolve = G(Tk, K);
                Ve.reject = G(Uk, K);
                Ve.all = G(Vk, K);
                K = Ve
            }
            var Xd = [],
                cd = [],
                Y = [],
                kb = [],
                Pg = [],
                Ec = [],
                Qj = zc([26812653]),
                ij = x(v(W("id"), Qj), N),
                Wb = {
                    id: "id",
                    Ae: "ut",
                    aa: "type",
                    Od: "ldc",
                    ob: "nck",
                    vc: "url",
                    ih: "referrer"
                },
                ms = /^\d+$/,
                Vc = {
                    id: function(a) {
                        a = "" + (a || "0");
                        ms.test(a) || (a = "0");
                        try {
                            var c = Ja(a)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    aa: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    ob: Lb,
                    Ae: Lb
                };
            Wb.kc = "defer";
            Vc.kc = Lb;
            Wb.ba = "params";
            Vc.ba = function(a) {
                return ta(a) || ba(a) ?
                    a : null
            };
            Wb.ze = "userParams";
            Wb.eg = "triggerEvent";
            Vc.eg = Lb;
            Wb.Qf = "sendTitle";
            Vc.Qf = function(a) {
                return !!a || X(a)
            };
            Wb.ue = "trackHash";
            Vc.ue = Lb;
            Wb.cg = "trackLinks";
            Wb.Ug = "enableAll";
            var df = M(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        ea: c[1],
                        Sa: Vc[b]
                    };
                    return a
                }, {}, Ea(Wb)),
                gr = "hash host hostname href pathname port protocol search".split(" "),
                xg = "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(" "),
                Wj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
                ye = x(function(a) {
                    return (a ?
                        a.replace(/^www\./, "") : "").toLowerCase()
                }),
                ns = x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Wj));
                    return c
                }),
                Wk = v(S, W("protocol"), wa("https:")),
                dr = x(function(a) {
                    return bs(a) && Wk(a) ? "SameSite=None;Secure;" : ""
                }),
                nj = /^\s+|\s+$/g,
                Vj = na(String.prototype.trim, "trim"),
                Xk = oa(function(a, c) {
                    return c.replace(a, "")
                }),
                Hi = Xk(/\s/g),
                Pb = Xk(/\D/g),
                wg = ["metrika_enabled"],
                vg = [],
                Tj = qb("gsc", Rj),
                er = /:\d+$/,
                Cr = x(function(a) {
                    var c = (S(a).host || "").split(".");
                    return 1 === c.length ? c[0] : M(function(b, d, e) {
                        e += 1;
                        2 <=
                            e && !b && (e = I(".", c.slice(-e)), ci(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                wc = x(dd),
                le = x(function(a) {
                    var c = wc(a),
                        b = "1" === c.C("debug"),
                        d = Ne(a, "1") || Ne(a, "2"),
                        e = a._ym_debug;
                    !e && !d || b || (a = S(a), c.D("debug", "1", void 0, a.host));
                    return !!(b || e || d)
                }),
                cr = qb("debuggerEvents", vd, !0),
                $q = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                Qd, mc = function(a) {
                    return function(c, b) {
                        void 0 === b && (b = !1);
                        if (Qd) var d = new Qd(c);
                        else Fa("Error", a.Error) ? (Qd = a.Error, d = new a.Error(c)) :
                            (Qd = br, d = new Qd(c));
                        b && (d.unk = !0);
                        return d
                    }
                }(window),
                ar = bb(/^http./),
                Zq = bb(/^err.kn/),
                Pj = [],
                os = x(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", F, b)
                    } catch (d) {}
                    return c
                }),
                ps = oa(function(a, c) {
                    return a ? z({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                ia = x(function(a) {
                    a = os(a);
                    var c = ps(a),
                        b = {};
                    return z(b, {
                        F: function(d, e, f, g) {
                            y(function(h) {
                                var k = c(g);
                                Oj(d, h, f, k, !1)
                            }, e);
                            return G(b.Yb, b, d, e, f, g)
                        },
                        Yb: function(d,
                            e, f, g) {
                            y(function(h) {
                                var k = c(g);
                                Oj(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                ca = x(cg),
                Lj = oa(function(a, c) {
                    for (var b = []; !Id(c);) {
                        var d = Uq(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Qg = oa(function(a, c) {
                    return Da(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                We = oa(function(a, c) {
                    return Da(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Qa(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                qg = [],
                rg = !1,
                pg = !1,
                Yk = oa(function(a, c) {
                    var b = c || {};
                    return {
                        l: w(b, R),
                        C: function(d, e) {
                            var f = b[d];
                            return X(f) && !X(e) ? e : f
                        },
                        D: function(d,
                            e) {
                            b[d] = e;
                            return this
                        },
                        Ub: function(d, e) {
                            return "" === e || fa(e) ? this : this.D(d, e)
                        },
                        Ca: w(b, a)
                    }
                }),
                Ga = Yk(function(a) {
                    var c = "";
                    a = M(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Ea(a));
                    c && a.push(c);
                    return I(":", a)
                }),
                Rg, Cj = (Rg = {}, Rg.w = [
                    [function(a, c) {
                        return {
                            M: function(b, d) {
                                var e, f = b.H;
                                f = (e = {}, e["page-url"] = f && f["page-url"] || "", e.charset = "utf-8", e);
                                "0" !== c.aa && (f["cnt-class"] = c.aa);
                                b.K || (b.K = Ga());
                                e = b.K;
                                var g = b.$;
                                f = {
                                    ma: {
                                        Ba: "watch/" + c.id
                                    },
                                    $: z(void 0 === g ? {} : g, {
                                        Zc: !!e.C("pv") && !e.C("ar") &&
                                            !e.C("wh")
                                    }),
                                    H: z(b.H || {}, f)
                                };
                                z(b, f);
                                d()
                            }
                        }
                    }, 1]
                ], Rg),
                Sg = w(Cj, Gj),
                jb = Hd("w"),
                Bj = ["webkitvisibilitychange", "visibilitychange"],
                ng = Yk(function(a) {
                    a = Ea(a);
                    return I("", B(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Ra(c) ? "" : b + "(" + c + ")"
                    }, a))
                }),
                Zk = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                aq = /^ *(data|javascript):/i,
                Yi = new RegExp(I("", ["\\.(" + I("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                Pa, kk = (Pa = {}, Pa.hit = "h", Pa.params = "p", Pa.reachGoal = "g", Pa.userParams = "up",
                    Pa.trackHash = "th", Pa.accurateTrackBounce = "atb", Pa.notBounce = "nb", Pa.addFileExtension = "fe", Pa.extLink = "el", Pa.file = "fc", Pa.trackLinks = "tl", Pa.destruct = "d", Pa.setUserID = "ui", Pa.getClientID = "ci", Pa.clickmap = "cm", Pa.enableAll = "ea", Pa),
                qs = x(function() {
                    var a = 0;
                    return function() {
                        return a += 1
                    }
                }),
                rs = v(N, qs, ha),
                fg = {
                    mc: function(a) {
                        a = Md(a).C("mt", {});
                        a = Ea(a);
                        return a.length ? M(function(c, b, d) {
                            return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                        }, "", a) : null
                    },
                    clc: function(a) {
                        var c = H(a).C("cls", {
                                ic: 0,
                                x: 0,
                                y: 0
                            }),
                            b = c.ic,
                            d = c.x;
                        c = c.y;
                        return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
                    },
                    rqnt: function(a, c, b) {
                        a = b.H;
                        return !a || a.nohit ? null : rs(c)
                    }
                },
                Nq = x(function(a) {
                    zj(a, "_ymBRC", "1");
                    var c = "1" !== yj(a, "_ymBRC");
                    c || Aj(a, "_ymBRC");
                    return c
                }),
                Na = x(qf),
                Wc = x(qf, function(a, c, b) {
                    return "" + c + b
                }),
                ss = x(W("document.documentElement")),
                ts = x(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                $a = x(v(W("document"), w("createElement", gc))),
                bi = x(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ?
                        (a = wb(function(b) {
                            var d = c[b];
                            return !!d && Fa(b, d)
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
                }),
                us = wa("INPUT"),
                Je = v(La, us),
                vs = wa("TEXTAREA"),
                Kq = v(La, vs),
                ws = wa("SELECT"),
                Lq = v(La, ws),
                Ke = v(W("type"), bb(/^(checkbox|radio)$/)),
                Df = v(La, bb(/^INPUT|SELECT|TEXTAREA$/)),
                je = v(La, bb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Hf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Jq = ["submit", "image", "hidden"],
                Rf = x(function() {
                    for (var a = 59, c = {},
                            b = 0; b < Zk.length; b += 1) c[Zk[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                Oh = x(function(a) {
                    return {
                        nj: a,
                        gb: null,
                        pb: []
                    }
                }),
                tj = {},
                ig = {};
            tj.p = 500;
            var sj = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            ig.h = !0;
            ig.c = !0;
            var Sc = {};
            Sc.p = jg;
            Sc.c = function(a, c, b) {
                (a = ob(n(c, "textContent"))) && b && (b = b(c), b.length && ab(v(W("textContent"), ob, wa(a)), b) && (a = ""));
                Je(c) && (a = ob(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var Xc, hg = "button," + B(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") +
                ",a",
                Tf = w(hg, pb),
                Hq = (Xc = {}, Xc.A = "h", Xc.BUTTON = "i", Xc.DIV = "i", Xc.INPUT = "ty", Xc),
                $k = /\/$/,
                xs = x(v(ca, Da(function(a) {
                    return -(new a.l.Date).getTimezoneOffset()
                }))),
                ys = v(ca, Da(function(a) {
                    a = new a.l.Date;
                    return I("", B(Vq, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
                })),
                zs = v(ca, Da(gg)),
                al = x(v(ca, Da(function(a) {
                    return a.Aa[0]
                }))),
                As = x(Dc),
                rj = qb("r", function(a, c) {
                    var b = qj(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                Ed = x(function() {
                    return {
                        Ha: {},
                        pending: {},
                        children: {}
                    }
                }),
                Tg = W("postMessage"),
                Bs = C("s.f", function(a, c, b, d, e) {
                    c = c(d);
                    var f = Ed(a),
                        g = I(":", [c.meta.pc, c.meta.key]);
                    if (Tg(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Yf, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        U(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                Cs = C("s.fh", function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Ed(a),
                        l = null;
                    try {
                        g = Hb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!fa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !fa(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2], g = g[3], !ba(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter ||
                                l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Ra(k) && Tg(k) && (f = d.O(l.type, [f, l]), e = B(v(R, Wh(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.Yf, "*"))
                            }
                        } else g === "" + h && ba(l) && la(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[I(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                fd = x(function(a, c) {
                    var b, d = gc("getElementsByTagName", n(a, "document")),
                        e = Ed(a),
                        f = Tg(a),
                        g = id(a),
                        h = ia(a);
                    if (!d || !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" +
                        yc(a), b);
                    Fe(a) && (f.duid = Fd(a, c));
                    Dq(a, g);
                    Eq(a);
                    b = Fq(a, f);
                    var k = E([a, w([], b)], Bs);
                    y(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, r) {
                            g.O("initToParent", [p, r])
                        })
                    }, d);
                    eb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.O("parentConnect", [l, m])
                    });
                    h.F(a, ["message"], E([a, c, b, g, f], Cs));
                    return {
                        Z: g,
                        Ha: e.Ha,
                        children: e.children,
                        je: k
                    }
                }, v(rb, N)),
                gd = x(function(a, c) {
                    if (!Fe(a) || !eb(a)) return Fd(a, c);
                    var b = fd(a, c);
                    return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Fd(a,
                        c) : Fd(a, c)
                }, function(a, c) {
                    return "{" + c.Od + c.ob
                }),
                Ds = x(function(a) {
                    a = H(a);
                    var c = a.C("counterNum", 0) + 1;
                    a.D("counterNum", c);
                    return c
                }, v(rb, N)),
                ja, Ge = (ja = {}, ja.vf = w(Uc.version, R), ja.nt = ds, ja.fp = function(a, c, b) {
                        if (b.H && b.H.nohit) return null;
                        c = N(c);
                        b = As(a);
                        if (b[c]) return null;
                        a: {
                            var d = al(a),
                                e = n(a, "performance.getEntriesByType");
                            if (V(e)) {
                                if (a = la(v(R, W("name"), wa("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                    a = a[0].startTime;
                                    break a
                                }
                            } else {
                                e = n(a, "chrome.loadTimes");
                                if (V(e) && (e = e.call(a.chrome),
                                        e = n(e, "firstPaintTime"), d && e)) {
                                    a = 1E3 * e - d;
                                    break a
                                }
                                if (a = n(a, "performance.timing.msFirstPaint")) {
                                    a -= d;
                                    break a
                                }
                            }
                            a = void 0
                        }
                        return a ? (b[c] = a, Math.round(a)) : null
                    }, ja.fu = function(a, c, b) {
                        var d = b.H;
                        if (!d) return null;
                        c = (n(a, "document.referrer") || "").replace($k, "");
                        b = (d["page-ref"] || "").replace($k, "");
                        d = d["page-url"];
                        a = S(a).href !== d;
                        c = c !== b;
                        b = 0;
                        a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                        return b
                    }, ja.en = ts, ja.la = Sk, ja.ut = function(a, c, b) {
                        var d = b.V;
                        b = b.H;
                        d = d && d.Gc;
                        b && (ns(a) || c.Ae || d) && (b.ut = Ba.vg);
                        return null
                    }, ja.v = w(Ba.bc, R), ja.cn =
                    Ds, ja.dp = function(a) {
                        var c = H(a),
                            b = c.C("bt", {});
                        if (X(c.C("bt"))) {
                            var d = n(a, "navigator.getBattery");
                            try {
                                b.p = d && d.call(a.navigator)
                            } catch (e) {}
                            c.D("bt", b);
                            b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function(e) {
                                b.Vi = n(e, "charging") && 0 === n(e, "chargingTime")
                            }))
                        }
                        return Gb(b.Vi)
                    }, ja.ls = x(function(a, c) {
                        var b = Wc(a, c.id),
                            d = ca(a),
                            e = b.C("lsid");
                        return +e ? e : (d = Ta(a, 0, d(Z)), b.D("lsid", d), d)
                    }, rb), ja.hid = yc, ja.phid = function(a, c) {
                        if (!eb(a)) return null;
                        var b = fd(a, c);
                        if (!b) return null;
                        var d = da(b.Ha);
                        return d.length ? b.Ha[d[0]].info.hid :
                            null
                    }, ja.z = xs, ja.i = ys, ja.et = zs, ja.c = v(W("navigator.cookieEnabled"), Ib), ja.rn = v(R, Ta), ja.rqn = function(a, c, b) {
                        b = b.H;
                        if (!b || b.nohit) return null;
                        c = N(c);
                        a = Wc(a, c);
                        c = (a.C("reqNum", 0) || 0) + 1;
                        a.D("reqNum", c);
                        if (a.C("reqNum") === c) return c;
                        a.Eb("reqNum");
                        return null
                    }, ja.u = gd, ja.w = function(a) {
                        a = Gc(a);
                        return a[0] + "x" + a[1]
                    }, ja.s = function(a) {
                        var c = n(a, "screen");
                        if (c) {
                            a = n(c, "width");
                            var b = n(c, "height");
                            c = n(c, "colorDepth") || n(c, "pixelDepth");
                            return I("x", [a, b, c])
                        }
                        return null
                    }, ja.sk = W("devicePixelRatio"), ja.ifr = v(eb,
                        Ib), ja.j = v(fs, Ib), ja.sti = function(a) {
                        return eb(a) && es(a) ? "1" : null
                    }, ja),
                Cq = x(function() {
                    return Sa(da(Ge), da(fg))
                }),
                Bq = x(Dc, N),
                oj = x(function() {
                    return {
                        Se: null,
                        ta: []
                    }
                }, N),
                yq = /^[a-z][\w.+-]+:/i,
                Ug, Tb = [
                    [Le, 1],
                    [Ee, 2],
                    [Kb(), 3],
                    [pj, 4]
                ],
                De = [],
                Cb = w(Tb, Hj),
                Sb = (Ug = {}, Ug.h = Tb, Ug),
                aa = w(Sb, Gj);
            Cb(function(a) {
                return {
                    M: function(c, b) {
                        var d = c.H;
                        if (!c.K || !d) return b();
                        var e = d["page-ref"],
                            f = d["page-url"];
                        e && f !== e ? d["page-ref"] = mj(a, e) : delete d["page-ref"];
                        d["page-url"] = mj(a, f).slice(0, Ba.sg);
                        return b()
                    }
                }
            }, -100);
            var uq =
                /[^a-z0-9.:-]/,
                Vg, Wg = {},
                bl = pa([dg && [dg, 0], 0, [Ab, 2], Dd && [Dd, 3],
                    [Qc, 4]
                ]),
                kc = pa([dg, 0, Ab, Dd, Qc]),
                cl = [Ab];
            cl.push(Dd);
            var dl = pa(cl),
                Yc = pa([Qc]);
            pa([0, Ab]);
            var Es = pa([0, Qc]),
                el = pa([0, Ab, Dd, Qc]),
                va = (Vg = {}, Vg.h = dl, Vg),
                Xg = x(function(a, c) {
                    var b = Wg["*"] ? Wg["*"] : c && Wg[c];
                    b || (b = c ? va[c] || [] : kc);
                    b = M(function(d, e) {
                        var f = e(a);
                        if (f) {
                            var g = wb(v(Oc, wa(e)), bl);
                            g && d.push([g[1], f])
                        }
                        return d
                    }, [], b);
                    b.length || cf();
                    return b
                }, rb),
                Yg, Fs = G(K.reject, K, Ua()),
                ya = (Yg = {}, Yg.h = jb, Yg),
                ra = C("g.sen", function(a, c, b) {
                    var d = Xg(a, c);
                    b = b ?
                        xq(a, c, b) : [];
                    var e = ya[c],
                        f = e ? e(a, d, b) : jb(a, d, b);
                    return function() {
                        var g = Ca(arguments),
                            h = g[0];
                        g = g.slice(1);
                        var k = h.$;
                        h = z(h, {
                            $: z(void 0 === k ? {} : k, {
                                ra: [c]
                            })
                        });
                        return f.apply(void 0, za([h], g))
                    }
                }, Fs),
                nq = oa(function(a, c) {
                    if (!c[a]) {
                        var b, d = new K(function(e) {
                            b = e
                        });
                        c[a] = {
                            Ef: b,
                            promise: d,
                            Ff: !1
                        }
                    }
                    return c[a].promise
                }),
                jj = x(v(Dc, Da)),
                Rd = x(function(a, c) {
                    var b = n(a, "console"),
                        d = n(b, "log");
                    d = Qe("log", d) ? G(d, b) : F;
                    var e = n(b, "warn");
                    e = Qe("warn", e) ? G(e, b) : d;
                    var f = n(b, "error");
                    b = Qe("error", f) ? G(f, b) : d;
                    return {
                        log: Pc(a, "log",
                            c, d),
                        error: Pc(a, "error", c, b),
                        warn: Pc(a, "warn", c, e)
                    }
                }),
                Gs = C("dc.init", function(a, c) {
                    function b(e) {
                        for (var f = [], g = 1; g < arguments.length; g++) f[g - 1] = arguments[g];
                        H(a).C("dce:" + c, !1) && d[e].apply(d, f);
                        H(a).C("dclq:" + c).push([e, f])
                    }
                    var d = Rd(a, c);
                    H(a).Na("dclq:" + c, []);
                    return le(a) ? {
                        log: w("log", b),
                        warn: w("warn", b),
                        error: w("error", b)
                    } : mq(a, c)
                }),
                Bd = x(Gs, rb),
                Hs = C("p.dc", function(a, c) {
                    var b = N(c);
                    hj(a, "");
                    hj(a, b)
                }),
                Tl = C("h.p", function(a, c) {
                    var b, d, e = ra(a, "h", c),
                        f = c.vc || "" + S(a).href,
                        g = c.ih || a.document.referrer,
                        h = {
                            K: Ga((b = {}, b.pv = 1, b)),
                            H: (d = {}, d["page-url"] = f, d["page-ref"] = g, d),
                            V: {}
                        };
                    h.V.ba = c.ba;
                    h.V.ze = c.ze;
                    c.kc && h.H && (h.H.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.kc || Jb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.ba)(), Mb(a, E([a, c, k], oq)))
                    })["catch"](D(a, "h.g.s"))
                }),
                Zg = ["yandex_metrika_callback" + Uc.callbackPostfix, "yandex_metrika_callbacks" + Uc.callbackPostfix],
                Is = C("cb.i", function(a) {
                    var c = Zg[0],
                        b = Zg[1];
                    if (V(a[c])) a[c]();
                    "object" === typeof a[b] && y(function(d, e) {
                            a[b][e] = null;
                            Zf(a, d)
                        },
                        a[b]);
                    y(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, Zg)
                }),
                fl = x(function(a) {
                    return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
                }),
                Js = C("fpm", function(a, c) {
                    if (!Wk(a)) return F;
                    var b = N(c);
                    if (!fl(a)) return vb(a, b, "Not supported"), F;
                    var d = Ka(a, c);
                    return d ? function(e) {
                        return (new K(function(f, g) {
                            return ta(e) ? da(e).length ? f(ej(a, e).then(function(h) {
                                var k, l;
                                h && h.length && d.params((k = {}, k.__ym = (l = {}, l.fpp = h, l), k))
                            }, F)) : g(Ua("fpm.l")) : g(Ua("fpm.o"))
                        }))["catch"](D(a,
                            "fpm.en"))
                    } : F
                }),
                Xe = oa(function(a, c) {
                    var b = {};
                    ag(a)(function(d) {
                        b = d[c] || {}
                    });
                    return b
                }),
                Ks = C("c.c.cc", function(a) {
                    var c = H(a),
                        b = v(Xe(a), function(d) {
                            var e, f = (e = {}, e.clickmap = !!d.clickmap, e);
                            return z({}, d, f)
                        });
                    return D(a, "g.c.cc", v(G(c.C, c, "counters", {}), da, yb(b)))
                }),
                Ls = C("gt.c.rs", function(a, c) {
                    var b, d = N(c),
                        e = c.id,
                        f = c.aa,
                        g = c.Lg,
                        h = c.ue,
                        k = E([a, d], iq);
                    $f(a, d, (b = {}, b.id = e, b.type = +f, b.clickmap = g, b.trackHash = !!h, b));
                    return k
                }),
                cj = x(vd),
                Ad = x(Dc, N),
                Ms = C("pa.int", function(a, c) {
                    var b;
                    return b = {}, b.params = function() {
                        var d,
                            e, f = Ca(arguments),
                            g = hq(f);
                        if (!g) return null;
                        f = g.Qg;
                        var h = g.ba;
                        g = g.cc;
                        if (!ta(h) && !ba(h)) return null;
                        var k = ra(a, "1", c),
                            l = Ad(c).url,
                            m = !ij(c),
                            p = "arams. Counter " + c.id,
                            r = "P" + p,
                            q = h,
                            u = "";
                        (u = n(h, "__ym.user_id")) && (r = "Set user id " + u);
                        L("__ymu", da(h)) && (r = "User p" + p);
                        q.__ym && (q = z({}, h), q.__ym = M(function(t, A) {
                            var Q = n(h, "__ym." + A);
                            Q && (t[A] = Q);
                            return t
                        }, {}, Ue), da(q.__ym).length || delete q.__ym, m = !!da(q).length);
                        q = u ? void 0 : JSON.stringify(q);
                        p = Jb(a, c, r, q);
                        k = k({
                            V: {
                                ba: h
                            },
                            K: Ga((d = {}, d.pa = 1, d.ar = 1, d)),
                            H: (e = {}, e["page-url"] =
                                l || S(a).href, e)
                        }, c).then(m ? p : F);
                        return Nc(a, "p.s", k, g, f)
                    }, b
                }),
                ee = x($i, v(rb, N)),
                Ns = C("y.p", function(a, c) {
                    var b = $i(a, c);
                    if (b) {
                        var d = $d(a),
                            e = E([a, b, c], dq);
                        vh(a, d, function(f) {
                            f.F(["params"], e)
                        });
                        b.Z.F(["params"], v(W("1"), e))
                    }
                }),
                Dr = x(function(a) {
                    if (a = $a(a)) return a("a")
                }),
                gl = {
                    rj: bb(/[/&=?#]/)
                },
                ue = C("go.in", function(a, c, b, d) {
                    var e;
                    void 0 === b && (b = "goal");
                    return e = {}, e.reachGoal = function(f, g, h, k) {
                        var l, m;
                        if (!f || gl[b] && gl[b](f)) return null;
                        var p = g,
                            r = h || F;
                        V(g) && (r = g, p = void 0, k = h);
                        var q = Jb(a, c, "Reach goal. Counter: " +
                                c.id + ". Goal id: " + f, p),
                            u = "goal" === b;
                        g = ra(a, "g", c);
                        var t = cq(a, c, f, b);
                        h = t[0];
                        t = t[1];
                        p = g({
                            V: {
                                ba: p
                            },
                            K: Ga((l = {}, l.ar = 1, l)),
                            H: (m = {}, m["page-url"] = h, m["page-ref"] = t, m)
                        }, c).then(function() {
                            var A, Q;
                            u && q();
                            nb(a, (A = {}, A.counterKey = N(c), A.name = "event", A.data = (Q = {}, Q.schema = b, Q.name = f, Q), A));
                            d && d()
                        });
                        return Nc(a, "g.s", p, r, k)
                    }, e
                }),
                Os = C("guid.int", function(a, c) {
                    var b;
                    return b = {}, b.getClientID = function(d) {
                        var e = Fd(a, c);
                        d && Zf(a, d, null, e);
                        return e
                    }, b
                }),
                mk, Ps = C("th.e", function(a, c) {
                    function b() {
                        g || (k = yd(a, "onhashchange") ?
                            ia(a).F(a, ["hashchange"], h) : Er(a, h))
                    }
                    var d, e = ra(a, "t", c),
                        f = Be(a, N(c)),
                        g = !1,
                        h = D(a, "h.h.ch", G(Fr, null, a, c, e)),
                        k = F;
                    c.ue && (b(), g = !0);
                    e = D(a, "tr.hs.h", function(l) {
                        var m;
                        l ? b() : k();
                        g = !!l;
                        f((m = {}, m.trackHash = g, m))
                    });
                    return d = {}, d.trackHash = e, d.u = k, d
                }),
                Qs = oa(function(a, c) {
                    ka(c) ? a.push(c) : y(v(R, Aa("push", a)), c)
                }),
                zd = qb("retryReqs", function(a) {
                    var c = Na(a),
                        b = c.C("retryReqs", {}),
                        d = ca(a)(Z);
                    y(function(e) {
                        var f = e[0];
                        e = e[1];
                        (!e || !e.time || e.time + 864E5 < d) && delete b[f]
                    }, Ea(b));
                    c.D("retryReqs", b);
                    return b
                }, !0),
                hl = v(function(a,
                    c) {
                    return ie(a, c)
                }, wa(0)),
                il = Bb(hl),
                Rs = [il("watch"), il("clmap")],
                Ss = C("g.r", function(a) {
                    var c = ca(a),
                        b = zd(a),
                        d = c(Z),
                        e = yc(a);
                    return M(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && ab(Da(k.resource), Rs) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, h = {
                            protocol: k.protocol,
                            host: k.host,
                            Ba: k.resource,
                            si: k.postParams,
                            ba: k.params,
                            Cg: k.browserInfo,
                            pj: k.ghid,
                            time: k.time,
                            Rb: Ja(h),
                            Og: k.counterId,
                            aa: k.counterType
                        }, k.telemetry && (h.Ia = k.telemetry), f.push(h));
                        return f
                    }, [], Ea(b))
                }),
                Ts = C("nb.p", function(a, c) {
                    function b(A) {
                        l() || (A = "number" === typeof A ? A : 15E3, t = Gr(a, d(!1), A), m())
                    }

                    function d(A) {
                        return function(Q) {
                            var O, sa, Ha;
                            void 0 === Q && (Q = (O = {}, O.ctx = {}, O.callback = F, O));
                            if (A || !q && !k.Hd) {
                                q = !0;
                                m();
                                t && t();
                                var zb = p(Z);
                                O = (Ja(k.C("lastHit")) || 0) < zb - 18E5;
                                var ud = .1 > Math.random();
                                k.D("lastHit", zb);
                                zb = Ga((sa = {}, sa.nb = 1, sa.cl = u, sa.ar = 1, sa));
                                sa = Ad(c);
                                sa = {
                                    H: (Ha = {}, Ha["page-url"] = sa.url || S(a).href, Ha),
                                    K: zb,
                                    V: {
                                        force: A
                                    }
                                };
                                Ha = Rd(a, N(c)).warn;
                                !Q.callback && Q.ctx && Ha('"callback" argument missing');
                                (Ha = A || O || ud) || (Ha = a.location.href, O = a.document.referrer, Ha = !(Ha && O ? Zi(Ha) === Zi(O) : !Ha && !O));
                                if (Ha) return Ha = g(sa, c), Nc(a, "l.o.l", Ha, Q.callback, Q.ctx)
                            }
                            return null
                        }
                    }
                    var e, f, g = ra(a, "n", c),
                        h = N(c),
                        k = Wc(a, c.id),
                        l = w(w(h, Xe(a)), v(ha, W("accurateTrackBounce"))),
                        m = w((e = {}, e.accurateTrackBounce = !0, e), Be(a, h)),
                        p = ca(a),
                        r = p(Z),
                        q = !1,
                        u = 0,
                        t;
                    qa(c, function(A) {
                        u = A.bh - r
                    });
                    c.Fe && b(c.Fe);
                    e = (f = {}, f.notBounce = d(!0), f.u = t, f);
                    e.accurateTrackBounce = b;
                    return e
                }),
                Wp = oa(cc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Us = C("clm.p",
                    function(a, c) {
                        if (ed(a)) return F;
                        var b = ra(a, "m", c),
                            d = N(c),
                            e = ca(a),
                            f = e(Z),
                            g = w(w(d, Xe(a)), v(ha, W("clickmap"))),
                            h, k = null;
                        d = D(a, "clm.p.c", function(l) {
                            var m = g();
                            if (m) {
                                var p = H(a),
                                    r = p.C("cls", {
                                        ic: 0,
                                        x: 0,
                                        y: 0
                                    });
                                p.D("cls", {
                                    ic: r.ic + 1,
                                    x: r.x + l.clientX,
                                    y: r.y + l.clientY
                                });
                                p = "object" === typeof m ? m : {};
                                r = p.filter;
                                m = p.isTrackHash || !1;
                                var q = B(function(t) {
                                    return ("" + t).toUpperCase()
                                }, p.ignoreTags || []);
                                X(h) && (h = p.quota || null);
                                var u = !!p.quota;
                                l = {
                                    element: Xp(a, l),
                                    position: Vi(a, l),
                                    button: Yp(l),
                                    time: e(Z)
                                };
                                p = S(a).href;
                                if (Vp(a, l,
                                        k, q, r)) {
                                    if (u) {
                                        if (!h) return;
                                        --h
                                    }
                                    q = Ie(a, l.element);
                                    r = q[0];
                                    q = q[1];
                                    u = kg(a, l.element);
                                    r = ["rn", Ta(a), "x", Math.floor(65535 * (l.position.x - u.left) / (r || 1)), "y", Math.floor(65535 * (l.position.y - u.top) / (q || 1)), "t", Math.floor((l.time - f) / 100), "p", jg(a, l.element), "X", l.position.x, "Y", l.position.y];
                                    r = I(":", r);
                                    m && (r += ":wh:1");
                                    Up(a, p, r, b, c);
                                    k = l
                                }
                            }
                        });
                        return ia(a).F(n(a, "document"), ["click"], d)
                    }),
                Vs = C("trigger.in", function(a, c) {
                    c.eg && Mb(a, E([a, "yacounter" + c.id + "inited"], Mq), "t.i")
                }),
                Ws = C("c.m.p", function(a, c) {
                    var b, d = N(c);
                    return b = {}, b.clickmap = w(Be(a, d), Tp), b
                }),
                wi = w("form", fc),
                Bp = w("form", pb),
                Sp = x(v(rb, Bb(qa)(W("settings.form_goals"))), rb),
                Xs = C("s.f.i", function(a, c) {
                    var b = [],
                        d = [],
                        e = ia(a);
                    b.push(e.F(a, ["click"], D(a, "s.f.c", E([a, c, d], Rp))));
                    b.push(e.F(a, ["submit"], D(a, "s.f.e", function(f) {
                        var g = n(f, "target");
                        f = n(f, "isTrusted");
                        Si(!0, a, c, d, g, f)
                    })));
                    Ti(a, c, "Form goal. Counter " + c.id + ". Init.");
                    return E([te, b], y)
                }),
                Ys = C("s.f.i", function(a, c) {
                    return qa(c, function(b) {
                        if (n(b, "settings.button_goals")) return b = ia(a).F(a, ["click"],
                            D(a, "c.t.c", v(E([a, c], bf(a, c, "", Qp))))), Jb(a, c, "Button goal. Counter " + c.id + ". Init.")(), b
                    })
                }),
                Xb, Sd, $g, Zc, Db, Wf = (Xb = {}, Xb.transaction_id = "id", Xb.item_brand = "brand", Xb.index = "position", Xb.item_variant = "variant", Xb.value = "revenue", Xb.item_category = "category", Xb.item_list_name = "list", Xb),
                ec = (Sd = {}, Sd.item_id = "id", Sd.item_name = "name", Sd.promotion_name = "coupon", Sd),
                Pp = ($g = {}, $g.promotion_name = "name", $g),
                jl = (Zc = {}, Zc.promotion_name = "name", Zc.promotion_id = "id", Zc.item_id = "product_id", Zc.item_name = "product_name",
                    Zc),
                Mp = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "),
                Np = (Db = {}, Db.view_item = {
                    event: "detail",
                    xa: ec,
                    Ja: "products"
                }, Db.add_to_cart = {
                    event: "add",
                    xa: ec,
                    Ja: "products"
                }, Db.remove_from_cart = {
                    event: "remove",
                    xa: ec,
                    Ja: "products"
                }, Db.begin_checkout = {
                    event: "checkout",
                    xa: ec,
                    Ja: "products"
                }, Db.purchase = {
                    event: "purchase",
                    xa: ec,
                    Ja: "products"
                }, Db.view_item_list = {
                    event: "impressions",
                    xa: ec
                }, Db.select_item = {
                    event: "click",
                    Ja: "products",
                    xa: ec
                }, Db.view_promotion = {
                    event: "promoView",
                    Ja: "promotions",
                    xa: jl
                }, Db.select_promotion = {
                    event: "promoClick",
                    Ja: "promotions",
                    xa: jl
                }, Db),
                Ri = C("dl.w", function(a, c, b) {
                    function d() {
                        var g = n(a, c);
                        (e = ba(g) && ze(a, g, b)) || (f = U(a, d, 1E3, "ec.dl"))
                    }
                    var e, f = 0;
                    d();
                    return function() {
                        return ma(a, f)
                    }
                }),
                Zs = C("p.e", function(a, c) {
                    var b = Ka(a, c);
                    if (b) {
                        var d = H(a);
                        b = b.params;
                        var e = D(a, "h.ee", E([a, N(c), b], Kp));
                        return c.od ? (d.D("ecs", 0), Qi(a, c.od, e)) : qa(c, function(f) {
                            if ((f = n(f, "settings.ecommerce")) && ka(f)) return d.D("ecs", 1), Qi(a, f, e)
                        })
                    }
                }),
                Ni = x(function(a) {
                    return I("[^\\d<>]*",
                        a.split(""))
                }),
                Km = x(function(a) {
                    return new RegExp(Ni(a), "g")
                }),
                Hp = /\S/,
                Gi = w(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ic),
                kl = x(function(a) {
                    return ed(a) || !Gd(a)
                }),
                $s = C("phc.h", function(a, c) {
                    if (!Zj(a) && !kl(a)) return qa(c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Na(a),
                                e = Za(S(a).search, "_ym_hide_phones=1") || d.C("_ym_hide_phones", 0);
                            b = n(b, "settings.phhide");
                            e && !b && (b = ["*"], d.D("_ym_hide_phones", 1));
                            b && yi(a, c, b)
                        }
                    })["catch"](D(a, "phc.hs"))
                }),
                ll = x(function(a) {
                    a = S(a);
                    a = fr(a.search.substring(1));
                    a["_ym_status-check"] = a["_ym_status-check"] || "";
                    a._ym_lang = a._ym_lang || "ru";
                    return a
                }),
                Bi = v(ll, W("_ym_status-check"), Ja),
                at = v(ll, W("_ym_lang")),
                yp = /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
                zp = /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|by|kz|com|com\.tr)\/?$/,
                Ai = bb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Dp = ["form", "button", "phone", "status"],
                ah = [],
                Ap = x(function(a, c, b) {
                    y(v(Rc([a, c, b]), ha), ah);
                    if (b.inline) {
                        c = zi(b);
                        var d = b.data;
                        b = b.id;
                        vi(a, c, void 0 === b ? "" : b, void 0 === d ? "" : d)
                    } else b.resource && Ai(b.resource) && (a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage, Ep(a, b.resource))
                }, function(a, c, b) {
                    return b.id
                }),
                bt = C("cs.init", function(a, c) {
                    var b, d = Bi(a);
                    if (d && c.id === d && "0" === c.aa) {
                        var e = zi((b = {}, b.lang = at(a), b.fileId = "status", b));
                        U(a, E([a, e, "" + d], vi), 0, "cs")
                    }
                }),
                ct = C("suid.int",
                    function(a, c) {
                        var b;
                        return b = {}, b.setUserID = function(d, e, f) {
                            if (ka(d) || qe(a, d)) {
                                var g = Ka(a, c);
                                d = Ic(["__ym", "user_id", d]);
                                g.params(d, e || F, f)
                            } else Rd(a, N(c)).error("Incorrect user ID")
                        }, b
                    }),
                Mc = {
                    position: "absolute"
                },
                ui = {
                    position: "fixed"
                },
                Qf = {
                    borderRadius: "50%"
                },
                dt = qb("siteStatistics", function(a, c) {
                    if (!Zj(a)) return Qb(a)(Qa(F, E([c, v(W("settings.sm"), wa(1), E([E([a, c.id], wp), F], ve), ha)], qa)))
                }),
                et = C("up.int", function(a, c) {
                    var b;
                    return b = {}, b.userParams = D(a, "up.c", function(d, e, f) {
                        var g, h = Ka(a, c),
                            k = Bd(a, N(c)).warn;
                        h ? ta(d) ? (d = (g = {}, g.__ymu = d, g), (g = h.params) && g(d, e || F, f)) : k("Wrong user params") : k("No counter instance found")
                    }), b
                }),
                ft = /[\*\.\?\(\)]/g,
                gt = x(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(ft, "");
                        Bd(a, "").warn('Function "' + d + '" has been overridden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, rb),
                ht = C("r.nn", function(a) {
                    le(a) && ze(a, Cg, function(c) {
                        c.za.F(function(b) {
                            gt(a, b[1], b[0]);
                            Cg.splice(100)
                        })
                    })
                }),
                it = C("e.a.p", function(a, c) {
                    var b, d = Ka(a, c);
                    d = E([v(R, Da(!0)), pa(B(w(d, n), ["clickmap",
                        "trackLinks", "accurateTrackBounce"
                    ]))], B);
                    c.Ug && d();
                    return b = {}, b.enableAll = d, b
                }),
                jt = w("add", pe),
                kt = w("remove", pe),
                lt = w("detail", pe),
                mt = w("purchase", pe),
                nt = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "),
                ff = x(function(a) {
                    var c = Ik(a);
                    a = c.ig;
                    if (!c.hf) return !1;
                    c = Aa("indexOf", a);
                    c = ab(v(c, wa(-1), tc), nt);
                    var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
                        d = /YaBrowser\/[\d.]+/.test(a),
                        e = /Mobile/.test(a);
                    return c || b || d && e || !/Safari/.test(a) &&
                        e
                }),
                lm = x(function(a) {
                    var c = gb(a);
                    return c ? Za(c, "YangoEats") || pd(a) : !1
                }),
                tp = /([0-9\\.]+) Safari/,
                ot = /\sYptp\/\d\.(\d+)\s/,
                ml = x(function(a) {
                    var c;
                    a: {
                        if ((c = gb(a)) && (c = ot.exec(c)) && 1 < c.length) {
                            c = Ja(c[1]);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || of (a, 79) ? !1 : !Pd(a) || ff(a)
                }),
                nl = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                pt = x(function(a) {
                    a = $a(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = G(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                ol = na(String.prototype.repeat, "repeat"),
                Sh = ol ? function(a, c) {
                    return ol.call(a, c)
                } : qp,
                Lh = w(!0, function(a, c, b, d) {
                    b = c.length && (b - d.length) / c.length;
                    if (0 >= b) return d;
                    c = Sh(c, b);
                    return a ? c + d : d + c
                }),
                Re = [2277735313, 289559509],
                Se = [1291169091,
                    658871167
                ],
                qt = C("p.cd", function(a, c) {
                    if (od(a) || Oe(a)) {
                        var b = Na(a);
                        if (fa(b.C("jn"))) {
                            b.D("jn", !1);
                            var d = a.chrome || rd(a) ? function() {} : /./,
                                e = Rd(a, N(c));
                            d.toString = function() {
                                b.D("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            e.log("%c%s", "color: inherit", d)
                        }
                    }
                }),
                rt = x(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && Oa(a) && ab(v(W("name"), bb(/Chrome PDF Viewer/)), a))
                }),
                lc = oa(function(a, c) {
                    return H(c).C(a, null)
                }),
                np = {
                    "*": "+",
                    "-": "/",
                    fj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                st = x(function(a) {
                    return V(n(a,
                        "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }),
                jp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd",
                        "loadEventStart"
                    ],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                tb, ip = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                si = (tb = {}, tb.responseEnd = 1, tb.domInteractive =
                    1, tb.domContentLoadedEventStart = 1, tb.domContentLoadedEventEnd = 1, tb.domComplete = 1, tb.loadEventStart = 1, tb.loadEventEnd = 1, tb.unloadEventStart = 1, tb.unloadEventEnd = 1, tb.secureConnectionStart = 1, tb),
                lp = x(vd),
                fp = x(Dc),
                gp = x(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (V(c) && !od(a)) return (new K(G(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](w(!0, R));
                    if (Kd(a)) return c = n(a, "navigator.serviceWorker"),
                        K.resolve(X(c));
                    c = n(a, "openDatabase");
                    if (rd(a) && V(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return K.resolve(b)
                    }
                    return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                tt = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                ut = x(function(a, c) {
                    var b = wc(a),
                        d = S(a).search.match(tt);
                    return d && 2 <= d.length ? (d = d[2], c.ob || b.D("turbo_uid", d), d) : (b = b.C("turbo_uid")) ? b : ""
                }),
                vt = C("pa.plgn", function(a, c) {
                    var b = ee(a, c);
                    b && b.Z.F(["pluginInfo"], D(a, "c.plgn", function() {
                        var d = H(a);
                        d.D("cmc", d.C("cmc",
                            0) + 1);
                        return Xj(c)
                    }))
                }),
                pl = dc.split("."),
                wt = pl.pop(),
                ql = I(".", pl),
                fm = x(function(a) {
                    a = S(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                rh = x(function(a) {
                    return -1 !== S(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                xt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
                ce = x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(xt));
                    return c
                }),
                yt = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Vo = x(function(a) {
                    a = S(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(yt));
                    return c
                }),
                rl = Ba.Pa + "//" + dc + "/metrika",
                Nh = rl + "/metrika_match.html",
                ub, db, gm = (ub = {}, ub.am = "com.am", ub.tr = "com.tr", ub.ge = "com.ge", ub.il = "co.il", ub["\u0440\u0444"] = "ru", ub["xn--p1ai"] = "ru", ub["\u0443\u043a\u0440"] = "ua", ub["xn--j1amh"] = "ua", ub["\u0431\u0435\u043b"] = "by", ub["xn--90ais"] = "by", ub),
                sl = {
                    "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
                    "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
                    "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
                },
                hm = (db = {}, db.ka = "ge", db.ro = "md", db.tg = "tj", db.tk = "tm", db.et = "ee", db.hy = "com.am", db.he = "co.li", db.ky = "kg", db.uk = "ua", db.be = "by", db.tr = "com.tr", db.kk = "kz", db),
                bp = "ar:1:pv:1:v:" + Ba.bc + ":vf:" + Uc.version,
                cp = Ba.Pa + "//" + dc + "/watch/" + Ba.ng,
                tl = {},
                zt = C("exps.int", function(a, c) {
                    var b;
                    return b = {}, b.experiments = function(d, e, f) {
                        var g, h;
                        void 0 === e && (e = F);
                        if (d && 0 < d.length) {
                            var k =
                                ra(a, "e", c),
                                l = Ad(c).url;
                            d = k({
                                K: Ga((g = {}, g.ex = 1, g.ar = 1, g)),
                                H: (h = {}, h["page-url"] = l || S(a).href, h.exp = d, h)
                            }, c);
                            return Nc(a, "exps.s", d, e, f)
                        }
                    }, b
                }),
                gf = [],
                At = C("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Na(a),
                        f = ca(a),
                        g = e.C("wasSynced"),
                        h = {
                            id: 3,
                            aa: "0"
                        };
                    return c && g && g.time + 864E5 > f(Z) ? K.resolve(g) : ra(a, "f", h)({
                        K: Ga((b = {}, b.pv = 1, b)),
                        H: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(Z), l.params = n(k, "settings"), l.bkParams = n(k, "userData"),
                            l);
                        e.D("wasSynced", k);
                        return k
                    })["catch"](D(a, "f.h"))
                }),
                Bt = oa(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Pd.D("ymoo" + a.na, a.bg(lb)), a.jd && a.jd.destruct && a.jd.destruct())
                }),
                mf = v(W("settings.pcs"), wa("1")),
                So = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                To = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                ri = {
                    H: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                qi = {
                    id: 42822899,
                    aa: "0"
                },
                Ye, Zo = (Ye = {}, Ye.s = "p", Ye["8"] =
                    "i", Ye),
                Wo = qb("csp", function(a, c) {
                    return ra(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                bh = "et w v z i u vf".split(" "),
                ul = Hd("wv"),
                Ct = Hd("pub"),
                Jc = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.isEnabled = function(c) {
                        return !!c.JSON
                    };
                    a.prototype.Ca = function(c) {
                        return yf(mb(this.l, c))
                    };
                    a.prototype.$a = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = mb(this.l, c.data));
                        return b
                    };
                    a.prototype.Qa = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.Vc = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    return a
                }(),
                vl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Dt = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "),
                Et = function() {
                    function a(c, b, d, e, f) {
                        var g = this;
                        this.Dc = !1;
                        this.meta = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.involvedTime = this.qf = 0;
                        this.Qd = this.yf = "";
                        this.fa = [];
                        this.ke = this.Xb = 0;
                        this.xb = {
                            h: 0,
                            w: 0
                        };
                        this.buffer = [];
                        this.og = Dt;
                        this.flush = function() {
                            g.ke = U(g.l, g.flush, 2500);
                            var h = g.yd();
                            if (g.buffer.length || h) {
                                var k = Cd(g.buffer);
                                h && k.push(h);
                                g.yf = g.Qd;
                                g.ja.Ca(k)(Qa(D(g.l, "p.b.st"), function(l) {
                                    l && g.Tb(l)
                                }))
                            }
                        };
                        this.Tb = e;
                        this.ja = d;
                        this.$b = G(this.$b, this);
                        this.yd = G(this.yd, this);
                        this.flush = G(this.flush, this);
                        this.l = c;
                        this.na = f;
                        this.Rc = b;
                        this.Ld = "pai" + b.id;
                        this.Ib();
                        this.Me = ia(this.l);
                        this.time = ca(this.l);
                        this.gg();
                        this.Bd = H(this.l);
                        this.ye = null
                    }
                    a.prototype.start = function() {
                        this.ke = U(this.l, this.flush, 2500);
                        if (!this.Dc) {
                            this.Fi();
                            var c = this.Bd.C(this.Ld, []),
                                b = !c.length;
                            c.push(G(this.Th, this));
                            this.Bd.Na(this.Ld, c);
                            b && this.If();
                            this.ye = ia(this.l).F(this.l, ["click"], G(this.Di, this));
                            this.$b({
                                type: "page",
                                target: this.l
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.Si();
                        this.Dc = !0;
                        this.flush();
                        ma(this.l, this.ke)
                    };
                    a.prototype.lf = function(c) {
                        return fc("html", this.l, c) !== this.l.document.documentElement
                    };
                    a.prototype.If = function() {
                        var c = this;
                        D(this.l, "p.ic" + this.Rc.id, function() {
                            if (!c.Dc) {
                                var b = c.Bd.C(c.Ld),
                                    d = c.Rc.ah();
                                y(function(e) {
                                    var f = B(function(g) {
                                        return z({},
                                            g)
                                    }, d);
                                    V(e) && e(f)
                                }, b);
                                c.Xb = U(c.l, G(c.If, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Th = function(c) {
                        this.Dc || (this.Ti(c), this.Ui(), this.Gg())
                    };
                    a.prototype.Mg = function(c, b) {
                        return (c.fe || 0) <= (b.fe || 0) ? b : c
                    };
                    a.prototype.Di = function(c) {
                        if (this.fa.length) {
                            c = Xi(c);
                            var b = S(this.l).hostname,
                                d;
                            if (d = c) d = ye(c.hostname) === ye(b);
                            d && (c = M(this.Mg, this.fa[0], this.fa).id, b = yc(this.l), Wc(this.l, this.na.split(":")[0]).D("pai", c + "-" + b))
                        }
                    };
                    a.prototype.$b = function(c) {
                        var b = this;
                        D(this.l, "p.ec." + this.Rc.id, function() {
                            var d, e;
                            try {
                                var f =
                                    c.type;
                                var g = c.target
                            } catch (p) {
                                return
                            }
                            var h = "page" === f;
                            if ("scroll" === f || h) {
                                var k = [b.l, b.l.document, b.l.document.documentElement, Bc(b.l)];
                                L(g, k) && b.Ib()
                            }("resize" === f || h) && b.gg();
                            f = b.time(Z);
                            var l = Math.min(f - b.qf, 5E3);
                            b.involvedTime += Math.round(l);
                            b.qf = f;
                            if (b.meta && b.scroll && b.xb) {
                                var m = b.xb.h * b.xb.w;
                                b.fa = B(function(p) {
                                    var r = z({}, p),
                                        q = b.meta[r.id],
                                        u = Fc(p.Cb);
                                    if (!q || b.lf(r.element) || !u) return r;
                                    p = b.l.Math;
                                    q = p.max((b.scroll.y + b.xb.h - q.y) / q.height, 0);
                                    var t = u.height * u.width;
                                    u = qh(b.l, u, b.xb);
                                    r.fe = u / m;
                                    r.visibility =
                                        u / t;
                                    if (.9 <= r.visibility || .1 <= r.fe) r.involvedTime += l;
                                    r.maxScrolled = p.round(1E4 * q) / 1E4;
                                    return r
                                }, b.fa);
                                nb(b.l, (d = {}, d.name = "publishers", d.counterKey = b.na, d.data = (e = {}, e.involvedTime = b.involvedTime, e.contentItems = b.fa.map(function(p) {
                                    var r;
                                    return z((r = {}, r.contentElement = p.Cb, r), p)
                                }), e), d))
                            }
                        })()
                    };
                    a.prototype.Ti = function(c) {
                        var b = B(function(d) {
                            return d.id
                        }, this.fa);
                        this.fa = this.fa.concat(la(function(d) {
                            return !L(d.id, b)
                        }, c))
                    };
                    a.prototype.gg = function() {
                        var c = Zd(this.l) || Gc(this.l);
                        this.xb = {
                            w: c[0],
                            h: c[1]
                        }
                    };
                    a.prototype.Ui = function() {
                        var c = this;
                        D(this.l, "p.um." + this.Rc.id, function() {
                            var b = [];
                            c.Ib();
                            c.meta = M(function(d, e) {
                                    var f;
                                    if (c.lf(e.element)) b.push(e), delete d[e.id];
                                    else {
                                        var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime, 0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                        e.Cb && (f = Fc(e.Cb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                        d[e.id] = g
                                    }
                                    return d
                                }, {},
                                c.fa);
                            y(function(d) {
                                d = Ae(c.l)(d, c.fa);
                                c.fa.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.yd = function() {
                        var c, b, d = B(w(this.meta, n), da(this.meta));
                        return d.length && (this.Qd = mb(this.l, d), this.yf !== this.Qd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.involvedTime, b), c) : null
                    };
                    a.prototype.Gg = function() {
                        var c = this;
                        if (this.fa.length) {
                            var b = B(function(d) {
                                var e, f = M(function(g, h) {
                                    d[h] && (g[h] = d[h]);
                                    return g
                                }, {}, c.og);
                                d.Tf = !0;
                                return e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data =
                                    f, e
                            }, la(function(d) {
                                return !d.Tf
                            }, this.fa));
                            b.length && (this.buffer = this.buffer.concat(b), vb(this.l, this.na, "Publisher content info found: ", b))
                        }
                    };
                    a.prototype.Fi = function() {
                        this.Me.F(this.l, vl, this.$b)
                    };
                    a.prototype.Si = function() {
                        this.ye && this.ye();
                        this.Me.Yb(this.l, vl, this.$b)
                    };
                    a.prototype.Ib = function() {
                        this.scroll = {
                            x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                            y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                Td, ch = (Td = {}, Td[1] = 500, Td[2] =
                    500, Td[3] = 0, Td),
                Ft = ["topics", "rubric", "authors"],
                dh = function() {
                    function a(c, b) {
                        var d, e = this;
                        this.id = "a";
                        this.Gd = !1;
                        this.Fb = {};
                        this.tb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            uf: ["article"]
                        };
                        this.we = (d = {}, d.Answer = 3, d.Review = 2, d);
                        this.Re = x(function(f, g, h) {
                            vb(e.l, e.na, "Warning: invalid value " + h + " in " + g + " in field " + f + ", this item will be ignored")
                        }, function(f, g, h) {
                            return "" + f + g + h
                        });
                        this.Wi = function(f) {
                            Ft.forEach(function(g) {
                                f[g] && (f[g] = f[g].reduce(function(h,
                                    k) {
                                    var l = k.name,
                                        m = k.position;
                                    if (!l) return e.Re(g, "name", l), h;
                                    if ("string" === typeof m) {
                                        l = rf(m);
                                        if (null === l || e.l.isNaN(l)) return e.Re(g, "position", m), h;
                                        k.position = l
                                    }
                                    h.push(k);
                                    return h
                                }, []))
                            });
                            return f
                        };
                        this.Ng = x(function(f, g) {
                            vb(e.l, e.na, "Warning: content has only " + g.chars + " chars. Required " + ch[g.type], g)
                        });
                        this.l = c;
                        this.root = ac(c);
                        this.na = b
                    }
                    a.prototype.La = function(c) {
                        return c.element
                    };
                    a.prototype.Ye = function(c, b) {
                        var d = this,
                            e;
                        D(this.l, "P.s." + b, function() {
                            e = d.Fb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.ti =
                        function(c) {
                            var b = z({}, c);
                            this.Gd && !b.id && L(c.type, [3, 2]) && (c = I(", ", B(W("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                            b.pageTitle || (b.pageTitle = this.zh(b.Cb));
                            b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.xh());
                            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                            return b
                        };
                    a.prototype.Fa = function(c) {
                        var b = this,
                            d = {},
                            e = this.La(c);
                        if (!e) return null;
                        d.type = c.type;
                        y(function(g) {
                            d[g] = b.Ye(c, g)
                        }, da(this.Fb));
                        var f = ca(this.l);
                        d.stamp = f(sg);
                        d.element =
                            c.element;
                        d.Cb = e;
                        d = this.Wi(this.ti(d));
                        d.id = d.id ? rc(d.id) : 1;
                        d.update = function(g) {
                            return b.La(c) ? b.Ye(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.zh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Xa(nc("h" + b, c));
                            if (d) return d
                        }
                    };
                    a.prototype.xh = function() {
                        var c = nc('[rel="canonical"]', this.root);
                        if (c) return c.href
                    };
                    a.prototype.cf = function() {
                        return 1
                    };
                    a.prototype.uc = function() {
                        return []
                    };
                    a.prototype.ah = function() {
                        var c = this,
                            b = this.uc(),
                            d = 1;
                        return M(function(e, f) {
                            var g = c.Fa({
                                element: f,
                                type: c.cf(f)
                            }) || [];
                            ba(g) || (g = [g]);
                            g = M(function(h, k) {
                                var l = h.values,
                                    m = h.ef;
                                k && k.chars > ch[k.type] && !L(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= ch[k.type] && c.Ng(k.id, k);
                                return {
                                    values: l,
                                    ef: m
                                }
                            }, {
                                values: [],
                                ef: B(W("id"), e)
                            }, g).values;
                            return e.concat(B(function(h) {
                                var k;
                                h = z((k = {
                                    index: d,
                                    Tf: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                wl = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.Gd = !0;
                        d.Je = I(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]',
                            'script[type="json+ld"]'
                        ]);
                        d.Fb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && ta(e) && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            var f = e.data;
                            return ka(f.text) ? f.text.length : Ub(this.La(e)).length
                        }, b.authors = function(e) {
                            e = e.data;
                            var f = [];
                            f = f.concat(this.tc(e, "author"));
                            f = f.concat(this.tc(e.mainEntity, "author"));
                            return f.concat(this.tc(e.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data,
                                g = f.headline || "";
                            f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                            "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                            3 === e.type && ta(f.parentItem) && (g = f.parentItem.text);
                            return g
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.tc(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.La(e);
                            e = pa(B(function(h) {
                                h = Hb(f.l, Ub(h));
                                if (ta(h) || ba(h)) {
                                    var k = f.Ze(h);
                                    if (k) return M(function(l,
                                        m) {
                                        return l ? l : ta(m) && "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(pb(this.Je, document.body === g ? document.documentElement : g))));
                            return e.length && (e = e[0].itemListElement, ba(e)) ? pa(B(function(h) {
                                return ta(h) && h.item && ta(h.item) && !f.l.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.tc = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ba(b[d]) ? b[d] : [b[d]];
                        b = pa(B(function(f) {
                            return f ? "string" === typeof f ? f : M(function(g, h) {
                                return g || "" + f[h]
                            }, "", e) : null
                        }, b));
                        return B(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.La = function(b) {
                        var d = b.element,
                            e = b.data || {};
                        b = e["@id"];
                        var f = e.url;
                        e = null;
                        f && ka(f) && (e = this.Qe(f));
                        !e && b && ka(b) && (e = this.Qe(b));
                        e || (e = b = d.parentNode, !fc("head", this.l, d) && b && 0 !== Ub(b).length) || (e = this.l.document.body);
                        return e
                    };
                    c.prototype.Qe = function(b) {
                        try {
                            var d = Kc(this.l, b).hash;
                            if (d) {
                                var e = nc(d, this.l.document.body);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Wd = function(b) {
                        return this.we[b["@type"]] || 1
                    };
                    c.prototype.Fa = function(b) {
                        var d = this,
                            e = b.element,
                            f = b.data;
                        if (!f && (f = Hb(this.l, Ub(e)), !f || !/schema\.org/.test(f["@context"]) && !ba(f))) return null;
                        var g = this.Ze(f);
                        if (g) return B(function(k) {
                            return ta(k) && L(k["@type"], d.tb["schema.org"]) ? a.prototype.Fa.call(d, {
                                element: e,
                                data: k,
                                type: d.Wd(k)
                            }) : null
                        }, g);
                        b.data = f;
                        if ("QAPage" === b.data["@type"]) {
                            var h = b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!h) return null
                        }
                        "Question" === b.data["@type"] && (h = b.data);
                        return h ? (b = pc(w(h, n), ["acceptedAnswer", "suggestedAnswer"]), B(function(k) {
                            var l;
                            if (!ta(k) || !L(k["@type"], d.tb["schema.org"])) return null;
                            k = {
                                element: e,
                                type: d.Wd(k),
                                data: z((l = {}, l.parentItem = h, l), k)
                            };
                            return a.prototype.Fa.call(d, k)
                        }, b)) : L(b.data["@type"], this.tb["schema.org"]) ? a.prototype.Fa.call(this, z(b, {
                            type: this.Wd(b.data)
                        })) : null
                    };
                    c.prototype.uc = function() {
                        return pb(this.Je, this.root)
                    };
                    c.prototype.Ze = function(b) {
                        if (ba(b)) return b;
                        if (b && ba(b["@graph"])) return b["@graph"]
                    };
                    return c
                }(dh),
                eh = function(a) {
                    function c() {
                        var b,
                            d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.Gd = !0;
                        d.Ri = Aa("exec", new RegExp("schema.org\\/(" + I("|", da(d.we)) + ")$"));
                        d.Fb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = cb(this.l, e, "identifier");
                            return f ? Xa(f) : (f = cb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                                var k = cb(this.l, e, g[h]);
                                if (k) {
                                    f = Xa(k).length;
                                    break
                                }
                            }
                            e =
                                Ub(e);
                            0 === f && e && (f += e.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = Od(this.l, e.element, "about");
                            return B(function(h) {
                                var k = {
                                    name: Xa(h)
                                };
                                if (g = cb(f.l, h, "name")) k.name = Xa(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = nc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = nc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                            return e ? B(function(g) {
                                return {
                                    name: Xa(cb(f.l, g, "name")),
                                    position: Xa(cb(f.l, g, "position"))
                                }
                            }, Od(this.l, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e =
                                cb(this.l, e.element, "dateModified")) ? ok(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = cb(this.l, e.element, "datePublished")) ? ok(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = Od(this.l, e.element, "url");
                            if (e.length) {
                                var f = e[0];
                                return f.href ? f.href : Xa(e)
                            }
                            return null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = cb(this.l, g, "headline");
                            h && (f += Xa(h));
                            (h = cb(this.l, g, "alternativeHeadline")) && (f += " " + Xa(h));
                            "" === f && ((h = cb(this.l, g, "name")) || (h = cb(this.l, g, "itemReviewed")), h && (f += Xa(h)));
                            3 === e.type && (e = fc('[itemtype$="schema.org/Question"]',
                                this.l, g)) && (e = cb(this.l, e, "text")) && (f += Xa(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = Od(this.l, e.element, "author");
                            return B(function(g) {
                                var h, k = (h = {}, h.name = "", h);
                                /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = cb(f.l, g, "name")) && (k.name = Xa(h));
                                k.name || (k.name = g.getAttribute("content") || Ub(g) || g.getAttribute("href"));
                                return k
                            }, e)
                        }, b);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.cf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Ri(b)) ? this.we[b[1]] : 1
                    };
                    c.prototype.Fa =
                        function(b) {
                            return b.element && Ub(b.element).length ? a.prototype.Fa.call(this, b) : null
                        };
                    c.prototype.uc = function() {
                        var b = I(",", B(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.tb["schema.org"]));
                        return pb(b, this.root)
                    };
                    return c
                }(dh),
                xl = function(a) {
                    function c(b, d) {
                        var e, f = a.call(this, b, d) || this;
                        f.id = "o";
                        f.Fb = (e = {}, e.chars = function(g) {
                                g = this.La(g);
                                return Ub(g).length
                            }, e.authors = function(g) {
                                return this.ud(g.data.author)
                            }, e.pageTitle = function(g) {
                                return this.yc(g.data.title) || ""
                            }, e.updateDate = function(g) {
                                return this.yc(g.data.modified_time)
                            },
                            e.publicationDate = function(g) {
                                return this.yc(g.data.published_time)
                            }, e.pageUrlCanonical = function(g) {
                                return this.yc(g.data.url)
                            }, e.rubric = function(g) {
                                return this.ud(g.data.section)
                            }, e.topics = function(g) {
                                return this.ud(g.data.tag)
                            }, e);
                        f.Vg = new RegExp("^(og:)?((" + I("|", f.tb.uf) + "):)?");
                        return f
                    }
                    Ma(c, a);
                    c.prototype.ud = function(b) {
                        var d;
                        return b ? ba(b) ? B(function(e) {
                            var f;
                            return f = {}, f.name = e ? "" + e : null, f
                        }, b) : [(d = {}, d.name = b ? "" + b : null, d)] : []
                    };
                    c.prototype.yc = function(b) {
                        return ba(b) ? b.length ? "" + b[0] : null :
                            b ? "" + b : null
                    };
                    c.prototype.uc = function() {
                        var b = pb('meta[property="og:type"]', this.l.document.body);
                        return [this.l.document.head].concat(b)
                    };
                    c.prototype.oh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.La(b);
                        e = pb("meta[property]", e === this.l.document.head ? e : g);
                        if (e.length) y(function(h) {
                            try {
                                if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                    var k = h.getAttribute("property").replace(d.Vg, ""),
                                        l = Xa(h);
                                    f[k] ? ba(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                oe(d.l, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return L(f.type,
                            this.tb.uf) ? z(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.La = function(b) {
                        b = b.element;
                        var d = this.l.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.Fa = function(b) {
                        return (b = this.oh(b)) ? a.prototype.Fa.call(this, b) : null
                    };
                    return c
                }(dh),
                Lo = x(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return Mo;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                Ho = oi(!1),
                Go = oi(!0),
                fi = function() {
                    function a(c) {
                        this.l = c
                    }
                    a.isEnabled = function(c) {
                        return gi(c)
                    };
                    a.prototype.$f = function(c) {
                        var b;
                        return {
                            stamp: ca(this.l)(sg),
                            data: (b = {}, b[c.type] = c.data, b)
                        }
                    };
                    a.prototype.$a = function(c) {
                        return me(this.l, Mf, this.$f(c))(Me(F))
                    };
                    a.prototype.Qa = function(c) {
                        return c[0]
                    };
                    a.prototype.Vc = function(c) {
                        return [c]
                    };
                    a.prototype.Ca = function(c) {
                        var b = this;
                        c = me(this.l, hi, {
                            buffer: B(G(this.$f, this), c)
                        });
                        return oc(this.l, c, 20, Jd)(We(function(d) {
                            d =
                                Jf(b.l, d.slice(-4));
                            return oc(b.l, d, 20, Jd)
                        }))(Qg(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    return a
                }(),
                Ud = {};
            wl && (Ud.json_ld = wl);
            eh && (Ud.schema = eh, Ud.microdata = eh);
            xl && (Ud.opengraph = xl);
            var Gt = C("p.p", function(a, c) {
                    function b(l) {
                        var m = z({}, k);
                        m.$.ca = l;
                        return e(m, c)["catch"](D(a, "s.ww.p"))
                    }
                    var d = Rn(a);
                    if (!Fa("querySelectorAll", a.document.querySelectorAll) || !d) return K.resolve();
                    var e = ra(a, "p", c),
                        f = Ga(),
                        g = Wc(a, c.id),
                        h = g.C("pai");
                    h && (g.Eb("pai"), f.D("pai", h));
                    var k = {
                        H: {},
                        K: f,
                        Wa: {
                            jf: !(d instanceof Jc)
                        },
                        $: {}
                    };
                    return qa(c, D(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            Yj(c) && (l = "microdata");
                            var m = Ud[l];
                            if (m && d) {
                                var p = N(c);
                                m = new m(a, p);
                                m = new Et(a, m, d, b, p);
                                m.start();
                                vb(a, p, 'Publishers analytics schema "' + l + '"');
                                return G(m.stop, m)
                            }
                        }
                    }))
                }),
                Ht = function() {
                    function a(c, b) {
                        this.l = c;
                        this.mh = b
                    }
                    a.prototype.Ca = function(c) {
                        return yf(pc(G(this.$a, this), c))
                    };
                    a.prototype.$a = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.mh(this.l, b && b.type, c.type);
                        f && (e = pc(function(g) {
                            return g({
                                l: d.l,
                                oa: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Qa =
                        function(c) {
                            return c.length
                        };
                    a.prototype.Vc = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                yl = function() {
                    function a(c, b, d) {
                        this.Ke = 0;
                        this.Xd = 1;
                        this.$c = 5E3;
                        this.l = c;
                        this.ja = b;
                        this.Tb = d
                    }
                    a.prototype.Uc = function() {
                        this.Ke = U(this.l, v(G(this.flush, this), G(this.Uc, this)), this.$c, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        var d = this.Tb(c, b || [], this.Xd);
                        this.Xd += 1;
                        return d
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                An = function(a) {
                    function c(b, d, e) {
                        b =
                            a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.pg = 7500;
                        b.$c = 3E4;
                        b.Uc();
                        return b
                    }
                    Ma(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ja.$a(b, d);
                        Sa(this.buffer, e);
                        this.ja.Qa(this.buffer) > this.pg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length && (this.send(b), this.buffer = [])
                    };
                    return c
                }(yl),
                Pn = /opera mini/i,
                $h = ["phone", "email"],
                zl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                Mn = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Nn = [65, 90],
                On = [97, 122],
                Kn = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                In = new RegExp("(" + I("|", zl) + ")", "i"),
                Hn = new RegExp("(" + I("|", $h) + ")", "i"),
                pk = ["password", "passwd", "pswd"],
                Jn = new RegExp("(" + I("|", zl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                Va = "metrikaId_" + Math.random(),
                vc = {
                    counter: 0
                },
                Lr = x(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML =
                        43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT = 47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX =
                        100, a
                }),
                Ir = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                It = function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        oj: new RegExp("(" + I("|", a) + ")", "i"),
                        zj: new RegExp("(" + I("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        mj: /ym-record-keys/i,
                        bi: "\u2022",
                        yj: 88
                    }
                }(),
                uk = yb(w(It.bi, R)),
                kd = !0,
                Jg = "",
                Kg = !1,
                Lg = !0,
                Mg = !1,
                Fn = oa(function(a, c) {
                    var b = E([a, "efv." + c.event], D);
                    c.N = B(v(R, b), c.N);
                    return c
                }),
                Al = x(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Ef), b.push(Or), b.push(Pr));
                    a.document.addEventListener ? c.push(sk) : (b.push(rk), d.push(sk));
                    c = za([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        N: [F]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        N: [F]
                    }, {
                        event: "click",
                        N: [Te]
                    }, {
                        event: "dblclick",
                        N: [Te]
                    }, {
                        event: "mousedown",
                        N: [Te]
                    }, {
                        event: "mouseup",
                        N: [Rr]
                    }, {
                        event: "keydown",
                        N: [Sr]
                    }, {
                        event: "keypress",
                        N: [Tr]
                    }, {
                        event: "copy",
                        N: [wk]
                    }, {
                        event: "blur",
                        N: c
                    }, {
                        event: "focusin",
                        N: b
                    }, {
                        event: "focusout",
                        N: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        N: [Yh]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        N: [Ef]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        N: [rk]
                    }, {
                        event: "change",
                        N: [tk]
                    }, {
                        event: "submit",
                        N: [yk]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        N: [tk]
                    }, {
                        type: "form",
                        event: "submit",
                        N: [yk]
                    }]);
                    return En(a, c)
                }),
                Cn =
                x(function(a) {
                    return za(Bc(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        N: [Ur]
                    }] : [])
                }),
                Jt = ["submit", "beforeunload", "unload"],
                Kt = x(function(a, c) {
                    var b = c(a);
                    return M(function(d, e) {
                        d[e.type + ":" + e.event] = e.N;
                        return d
                    }, {}, b)
                }),
                Lt = w(Al, function(a, c, b, d) {
                    return Kt(c, a)[b + ":" + d] || []
                }),
                Dn = /^\s*function submit\(\)/,
                Mt = C("fw.p", function(a, c) {
                    var b;
                    if (!(b = c.Sg || !c.yb)) {
                        var d = H(a),
                            e = !1;
                        b = d.C("hitParam", {});
                        var f = N(c);
                        b[f] && (d = d.C("counters", {}), e = Yd(c.aa) && !d[f]);
                        b[f] = 1;
                        b = e
                    }
                    if (b) return K.resolve(F);
                    b = new Ht(a,
                        Lt);
                    return zn(a, c, b, Al, Jt)
                }),
                fh, Bl = (fh = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.te = 0;
                        d.Ab = 0;
                        d.se = 0;
                        d.buffer = [];
                        d.$c = 2E3;
                        d.Z = id(b);
                        d.Uc();
                        d.se = f;
                        return d
                    }
                    Ma(c, a);
                    c.prototype.We = function(b) {
                        return pa(this.Z.O("ag", b))
                    };
                    c.prototype.Ve = function(b, d) {
                        var e = this;
                        b(Qa(D(this.l, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Ei = function(b, d) {
                        var e = this;
                        ma(this.l, this.Ke);
                        var f = Math.ceil(this.ja.Qa(d) / 63E4),
                            g = this.ja.Vc(d, f);
                        y(function(h, k) {
                            var l, m = z({}, b, (l = {}, l.data =
                                h, l.partNum = k + 1, l.end = k + 1 === f, l.partsTotal = g.length, l));
                            l = e.ja.Ca([m], !1);
                            e.Ve(l, [m])
                        }, g);
                        this.Uc()
                    };
                    c.prototype.send = function(b, d) {
                        var e = this;
                        this.Z.O("se", d);
                        return a.prototype.send.call(this, b, d).then(R, function() {
                            e.Z.O("see", d)
                        })
                    };
                    c.Xe = function(b, d, e, f, g) {
                        c.bd["" + b + d] || (this.bd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.bd[d]
                    };
                    c.prototype.Rh = function() {
                        return this.se && this.te >= this.se
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Rh()) {
                            this.Z.O("p", b);
                            var e = this.ja.$a(b),
                                f = this.ja.Qa(e);
                            7E5 < f ? this.Ei(b, e) : (e = this.We(this.buffer.concat([b])), e = M(function(g, h) {
                                return g + d.ja.Qa(d.ja.$a(h))
                            }, 0, e), this.Ab + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.Ab += f)
                        }
                    };
                    c.prototype.F = function(b, d) {
                        this.Z.F([b], d)
                    };
                    c.prototype.ha = function(b, d) {
                        this.Z.ha([b], d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.We(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.te += this.Ab;
                            this.Ab = 0;
                            var d = this.ja.Ca(b);
                            this.Ve(d, b)
                        }
                    };
                    return c
                }(yl), fh.bd = {}, fh),
                Ya = function() {
                    function a(c, b, d) {
                        this.Vh =
                            "wv2.c";
                        this.Nb = [];
                        this.ga = [];
                        this.l = c;
                        this.L = Cf(c, this, d, this.Vh);
                        this.G = b;
                        this.bb = this.G.rh();
                        this.start = this.L.J(this.start, "st");
                        this.stop = this.L.J(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.Nb = B(function(b) {
                            var d = b[0],
                                e = b[2];
                            b = G(c.L.J(b[1], d[0]), c);
                            return c.bb.F(e || c.l, d, b)
                        }, this.ga)
                    };
                    a.prototype.stop = function() {
                        y(ha, this.Nb)
                    };
                    a.prototype.Y = function(c) {
                        return this.G.sa().Y(c)
                    };
                    return a
                }(),
                xn = ["checkbox", "radio"],
                yn = /pwd|value|password/i,
                gh = W("location.href"),
                Nt = function(a) {
                    function c(b,
                        d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.qa = {
                            elements: [],
                            attributes: []
                        };
                        d.index = 0;
                        d.Sd = d.L.J(d.Sd, "o");
                        d.kd = d.L.J(d.kd, "io");
                        d.ad = d.L.J(d.ad, "ao");
                        d.$d = d.L.J(d.$d, "a");
                        d.Yd = d.L.J(d.Yd, "at");
                        d.ae = d.L.J(d.ae, "r");
                        d.Zd = d.L.J(d.Zd, "c");
                        d.za = new b.MutationObserver(d.Sd);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.za.observe(this.l.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.za.disconnect()
                    };
                    c.prototype.ad = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e = this.qa.elements.indexOf(d); - 1 === e && (e = this.qa.elements.push(d) - 1, this.qa.attributes[e] = {});
                        this.qa.attributes[e] || (this.qa.attributes[e] = {});
                        e = this.qa.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = he(this.l, d, b, f, this.G.Hb()).value
                    };
                    c.prototype.kd = function(b) {
                        function d(k) {
                            var l = Rb(e.l)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                rd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        y(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                r = k.target,
                                q = k.nextSibling,
                                u = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.ad(k);
                                    var t = d(r);
                                    t.rd[l] || (t.rd[l] = he(e.l, r, l, p, e.G.Hb()).value);
                                    break;
                                case "childList":
                                    m && y(function(A) {
                                        t = d(A);
                                        t.Te || z(t, {
                                            Te: r,
                                            gh: q ? q : void 0,
                                            hh: u ? u : void 0
                                        })
                                    }, xa(m));
                                    break;
                                case "characterData":
                                    t = d(r), t.Ue || (t.Ue = p)
                            }
                        }, b);
                        var h = this.G.sa();
                        y(function(k, l) {
                            h.le(k, g[l])
                        }, f)
                    };
                    c.prototype.Sd = function(b) {
                        var d = this;
                        if (gh(this.l)) {
                            var e = this.G.stamp();
                            this.kd(b);
                            y(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h &&
                                            h.length && d.ae(xa(h), e);
                                        g && g.length && d.$d(xa(g), e);
                                        break;
                                    case "characterData":
                                        d.Zd(k, e)
                                }
                            }, b);
                            this.Yd(e)
                        } else this.stop()
                    };
                    c.prototype.Yd = function(b) {
                        var d = this;
                        y(function(e, f) {
                            var g = d.wc();
                            d.G.X("mutation", {
                                index: g,
                                attributes: d.qa.attributes[f],
                                target: d.Y(e)
                            }, "ac", b)
                        }, this.qa.elements);
                        this.qa.elements = [];
                        this.qa.attributes = []
                    };
                    c.prototype.$d = function(b, d) {
                        var e = this,
                            f = this.wc();
                        this.G.sa().Ac({
                            nodes: b,
                            Tc: function(g) {
                                g = B(function(h) {
                                    h.node = void 0;
                                    return h
                                }, g);
                                e.G.X("mutation", {
                                        index: f,
                                        nodes: g
                                    }, "ad",
                                    d)
                            }
                        })
                    };
                    c.prototype.ae = function(b, d) {
                        var e = this,
                            f = this.wc(),
                            g = this.G.sa(),
                            h = B(function(k) {
                                var l = g.removeNode(k);
                                Oi(e.l, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.G.X("mutation", {
                            index: f,
                            nodes: h
                        }, "re", d)
                    };
                    c.prototype.Zd = function(b, d) {
                        var e = this.wc();
                        this.G.X("mutation", {
                            value: b.textContent,
                            target: this.Y(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.wc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Ya),
                Ot = function() {
                    function a(c, b) {
                        var d = this;
                        this.sc = [];
                        this.cb = [];
                        this.Rd = 1;
                        this.He = this.Pf =
                            0;
                        this.ya = {};
                        this.Lb = {};
                        this.Gb = [];
                        this.Dd = function(f) {
                            return d.cb.length ? L(f, d.cb) : !1
                        };
                        this.removeNode = function(f) {
                            var g = d.Y(f),
                                h = La(f);
                            if (h) return h = "NR:" + h.toLowerCase(), d.Dd(h) && d.Z.O(h, {
                                data: {
                                    node: f,
                                    id: g
                                }
                            }), g
                        };
                        this.ib = function(f) {
                            var g = La(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                return h ? h : (h = d.Rd, f.__ym_indexer = h, d.Rd += 1, g = "NA:" + g.toLowerCase(), d.Dd(g) && d.Z.O(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }), h)
                            }
                            return null
                        };
                        this.Jf = function() {
                            d.Pf = U(d.l, v(G(d.da, d, !1), d.Jf), 50, "i.s")
                        };
                        this.Hf = function() {
                            d.He = U(d.l, v(G(d.ed, d, !1),
                                d.Hf), 50, "i.g")
                        };
                        this.vi = function(f) {
                            null === d.ya[f] && delete d.ya[f]
                        };
                        this.l = c;
                        var e = Cf(c, this, "i");
                        this.Z = id(c);
                        this.options = b;
                        this.start = e.J(this.start, "st");
                        this.stop = e.J(this.stop, "sp");
                        this.Y = e.J(this.Y, "i");
                        this.le = e.J(this.le, "o");
                        this.Ac = e.J(this.Ac, "a");
                        this.removeNode = e.J(this.removeNode, "r");
                        this.da = e.J(this.da, "s");
                        this.ed = e.J(this.ed, "g")
                    }
                    a.prototype.le = function(c, b) {
                        var d = this.ib(c);
                        Ra(d) || (this.Lb[d] && this.Y(c), this.Lb[d] = b)
                    };
                    a.prototype.F = function(c, b, d) {
                        c = "" + b + c;
                        this.cb.push(c);
                        this.Dd(c) ||
                            this.cb.push(c);
                        this.Z.F([c], d)
                    };
                    a.prototype.ha = function(c, b, d) {
                        var e = "" + b + c;
                        this.cb = la(function(f) {
                            return f !== e
                        }, this.cb);
                        this.Z.ha([e], d)
                    };
                    a.prototype.start = function() {
                        this.Jf();
                        this.Hf()
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        ma(this.l, this.He);
                        ma(this.l, this.Pf);
                        this.sc = [];
                        this.Gb = [];
                        this.ya = {};
                        this.Lb = {}
                    };
                    a.prototype.Ac = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Tc: c.Tc,
                                result: [],
                                Bc: 0,
                                nodes: d
                            };
                        this.sc.push(f);
                        y(function(g) {
                            Oi(b.l, g, function(h) {
                                var k = b.ib(h);
                                Ra(k) || (d.push(h), b.ya[k] && b.Y(h), b.ya[k] = {
                                    node: h,
                                    event: f,
                                    Pi: e
                                }, e += 1)
                            })
                        }, c.nodes)
                    };
                    a.prototype.Y = function(c) {
                        if (c === this.l) return 0;
                        var b = this.ib(c),
                            d = this.ya[b],
                            e = this.kh(b),
                            f = e.Te,
                            g = e.rd,
                            h = e.Ue,
                            k = e.gh,
                            l = e.hh;
                        if (d) {
                            e = d.event;
                            d = d.Pi;
                            var m = ss(this.l) === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.ib(k) : null;
                            p = !m && p ? this.ib(p) : null;
                            m = this.l;
                            k = this.options;
                            f = this.ib(f || c.parentNode || c.parentElement) || 0;
                            var r = g,
                                q = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 === r && (r = {});
                            void 0 === q && (q = La(c));
                            if (X(q)) c = void 0;
                            else {
                                g = {
                                    id: b,
                                    prev: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: q.toLowerCase(),
                                    node: c
                                };
                                if (If(c)) {
                                    if (h = un(c, h), g.attributes = {}, g.content = h)
                                        if (c = jd(m, c)) g.content = "" !== h.trim() ? Ln(m, h) : h, g.hidden = c
                                } else h = vn(m, c, k, r, q), m = h.lb, g.attributes = h.Ag, m && (g.hidden = m), c.namespaceURI && Za(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                                c = g
                            }
                            if (X(c)) return;
                            this.ya[b] = null;
                            this.Gb.push(b);
                            e.result[d] = c;
                            e.Bc += 1;
                            e.nodes.length === e.Bc && e.Tc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.da(!0)
                    };
                    a.prototype.ed = function() {
                        if (this.Gb.length) {
                            var c =
                                $b(this.Gb, this.vi),
                                b = Jd(this.l, 30);
                            c(b)
                        }
                    };
                    a.prototype.da = function(c) {
                        var b = this;
                        if (gh(this.l)) {
                            var d = da(this.ya);
                            d = M(function(e, f) {
                                b.ya[f] && e.push(b.ya[f].node);
                                return e
                            }, [], d);
                            d = $b(d, this.Y);
                            c = c ? Lj(F) : Jj(this.l, 20);
                            d(c);
                            this.sc = la(function(e) {
                                return e.Bc !== e.result.length
                            }, this.sc)
                        }
                    };
                    a.prototype.kh = function(c) {
                        if (Ra(c)) return {};
                        var b = this.Lb[c];
                        return b ? (this.Lb[c] = null, this.Gb.push(c), b) : {}
                    };
                    return a
                }(),
                Pt = ["input", "change", "keyup", "paste", "cut"],
                Qt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this,
                            b, d, e) || this;
                        b.inputs = {};
                        b.nd = !1;
                        b.Ic = b.L.J(b.Ic, "ii");
                        b.Jc = b.L.J(b.Jc, "ir");
                        b.Nc = b.L.J(b.Nc, "ri");
                        b.Yc = b.L.J(b.Yc, "ur");
                        b.Cd = b.L.J(b.Cd, "ce");
                        b.zc = b.L.J(b.zc, "vc");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.G.sa();
                        this.nd = this.Hg();
                        y(function(e) {
                            e = e.toLowerCase();
                            d.F(e, "NA:", G(b.Ic, b));
                            d.F(e, "NR:", G(b.Jc, b))
                        }, Hf);
                        this.Nb = [this.bb.F(this.l.document, Pt, G(this.Cd, this)), function() {
                            y(function(e) {
                                e = e.toLowerCase();
                                d.ha(e, "NA:", b.Ic);
                                d.ha(e, "NR:", b.Jc)
                            }, Hf);
                            y(b.Yc, da(b.inputs))
                        }]
                    };
                    c.prototype.Yc = function(b) {
                        if (this.nd) {
                            var d = this.inputs[b];
                            d && (b = d.oi, d = d.element, b && this.l.Object.defineProperty(d, this.xc(d), b))
                        }
                    };
                    c.prototype.Jc = function(b) {
                        b && this.Yc(b.data.id)
                    };
                    c.prototype.Ic = function(b) {
                        b && (b = b.data, this.Nc(b.node, b.id))
                    };
                    c.prototype.xc = function(b) {
                        return Ke(b) ? "checked" : "value"
                    };
                    c.prototype.Cd = function(b) {
                        if (b = b.target) {
                            var d = this.xc(b);
                            this.zc(b[d], b)
                        }
                    };
                    c.prototype.zc = function(b, d) {
                        var e = this.Y(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Nc(f, e), !f)) return;
                        e = f.Jg;
                        var g = f.value,
                            h =
                            this.xc(d),
                            k = !b || L(typeof b, ["string", "boolean", "number"]),
                            l = this.G.Hb().Id;
                        k && b !== g && (g = he(this.l, d, h, b, this.G.Hb()).value, e ? this.G.X("event", {
                            target: this.Y(d),
                            checked: !!b
                        }, "change") : (e = Lc(this.l, d, l), l = e.fb, this.G.X("event", {
                            value: g,
                            hidden: e.mb && !l,
                            target: this.Y(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Nc = function(b, d) {
                        var e = this;
                        if (!Af(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Ke(b),
                            g = this.xc(b),
                            h = {
                                element: b,
                                Jg: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.nd &&
                            Mb(this.l, function() {
                                var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                    l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                                    m = z({}, k, l);
                                if (Fa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                    try {
                                        e.l.Object.defineProperty(b, g, z({}, m, {
                                            configurable: !0,
                                            set: function(p) {
                                                e.zc(p, this);
                                                return m.set.call(this, p)
                                            }
                                        }))
                                    } catch (p) {}
                                    h.oi = m
                                }
                            });
                        return h
                    };
                    c.prototype.Hg = function() {
                        var b = !0,
                            d = $a(this.l)("input");
                        try {
                            d = $a(this.l)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type",
                                "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {},
                                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = z({}, e, f);
                            this.l.Object.defineProperty(d, "value", z({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(Ya),
                Rt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Va = {
                            width: 0,
                            height: 0,
                            pageHeight: 0,
                            pageWidth: 0,
                            orientation: 0
                        };
                        b.ga.push([
                            ["resize"], b.mi
                        ]);
                        b.ga.push([
                            ["orientationchange"], b.ki
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Mf()
                    };
                    c.prototype.mi = function() {
                        var b = this.Ad();
                        this.Hh(b) && (this.Va = b, this.Nf(b))
                    };
                    c.prototype.ki = function() {
                        var b = this.Ad();
                        this.Va.orientation !== b.orientation && (this.Va = b, this.Bi(b))
                    };
                    c.prototype.mf = function(b) {
                        return !b.height || !b.width || !b.pageWidth || !b.pageHeight
                    };
                    c.prototype.Hh = function(b) {
                        return b.height !==
                            this.Va.height || b.width !== this.Va.width
                    };
                    c.prototype.Ad = function() {
                        var b = this.G.hb(),
                            d = Gc(this.l),
                            e = d[0];
                        d = d[1];
                        b = b.zd();
                        return {
                            width: e,
                            height: d,
                            pageWidth: b ? b.scrollWidth : 0,
                            pageHeight: b ? b.scrollHeight : 0,
                            orientation: this.G.hb().th()
                        }
                    };
                    c.prototype.Bi = function(b) {
                        var d;
                        void 0 === d && (d = this.G.stamp());
                        this.G.X("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Nf = function(b, d) {
                        void 0 === d && (d = this.G.stamp());
                        this.G.X("event", {
                            width: b.width,
                            height: b.height,
                            pageWidth: b.pageWidth,
                            pageHeight: b.pageHeight
                        }, "resize", d)
                    };
                    c.prototype.Mf = function() {
                        var b = this.Ad();
                        this.mf(b) ? U(this.l, G(this.Mf, this), 300) : (this.mf(this.Va) && (this.Va = b), this.Nf(b, 0))
                    };
                    return c
                }(Ya),
                Ze = function() {
                    function a(c) {
                        this.index = 0;
                        this.vb = {};
                        this.l = c
                    }
                    a.prototype.oc = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ca(this.l),
                            f = this.index;
                        this.index += 1;
                        this.vb[f] = {
                            Xb: 0,
                            Sb: !1,
                            eh: c,
                            ac: [],
                            Md: e(Z)
                        };
                        var g = this;
                        return function() {
                            var h = Ca(arguments),
                                k = d.eb && !g.vb[f].Sb,
                                l = g.vb[f];
                            ma(g.l, l.Xb);
                            l.ac = h;
                            l.Sb = !0;
                            var m = e(Z);
                            if (k || m - l.Md >= b) c.apply(void 0, h), l.Md = m;
                            l.Xb = U(g.l, function() {
                                k || (c.apply(void 0, h), l.Md = e(Z));
                                l.Sb = !1;
                                l.ac = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        y(function(b) {
                            var d = c.vb[b],
                                e = d.Xb,
                                f = d.eh,
                                g = d.ac;
                            d.Sb && (c.vb[b].Sb = !1, f.apply(void 0, g), ma(c.l, e))
                        }, da(this.vb))
                    };
                    return a
                }(),
                St = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ag = [];
                        d.Ce = {
                            x: 0,
                            y: 0
                        };
                        d.Da = new Ze(b);
                        d.Mc = d.L.J(d.Mc, "o");
                        d.ga.push([
                            ["scroll"], d.ni
                        ]);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.X("event", {
                            x: Math.max(this.l.scrollX, 0),
                            y: Math.max(this.l.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.ni = function(b) {
                        if (this.G.hb().gf()) this.Mc(b);
                        else {
                            var d = b.target,
                                e = la(function(f) {
                                    return f[0] === d
                                }, this.ag).pop();
                            e ? e = e[1] : (e = this.Da.oc(G(this.Mc, this), 100, {
                                eb: !0
                            }), this.ag.push([d, e]));
                            e(b)
                        }
                    };
                    c.prototype.Mc = function(b) {
                        var d = this.G.hb().zd();
                        b = b.target;
                        var e = this.Ib(b);
                        d = d === b || this.l === b || this.l.document ===
                            b;
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ce.x === f && this.Ce.y === e) return;
                            this.Ce = {
                                x: f,
                                y: e
                            }
                        }
                        this.G.X("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.Y(b)
                        }, "scroll")
                    };
                    c.prototype.Ib = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window === b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.G.hb().zd(), b) ? L(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop ||
                                0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Ya),
                Tt = ["mousemove", "mousedown", "mouseup", "click"],
                Ut = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ga.push([Tt, d.ji]);
                        d.Da = new Ze(b);
                        d.Hc = d.L.J(d.Hc, "n");
                        d.Ji = d.L.J(d.Da.oc(G(d.Hc, d), 100), "t");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.ji = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Ji(b) : this.Hc(b)
                    };
                    c.prototype.Hc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 ===
                            e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.l.document.elementFromPoint(e, f);
                        this.G.X("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.Y(b)
                        }, d)
                    };
                    return c
                }(Ya),
                Vt = ["focus", "blur"],
                Wt = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([Vt, b.fh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.fh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.G.X("event", {
                            target: this.Y(d === this.l ? this.l.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(Ya),
                Xt = x(function(a) {
                    var c = na(a.getSelection, "getSelection");
                    return c ? G(c, a) :
                        F
                }),
                Yt = v(Xt, ha),
                Zt = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                $t = /text|search|password|tel|url/,
                au = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Ed = !1;
                        b.ga.push([Zt, b.Fh]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.Fh = function(b) {
                        var d = this.G,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.yh(b) : this.vh()) && e.start !== e.end ? (this.Ed = !0, d.X("event", e, "selection")) : this.Ed && (this.Ed = !1, d.X("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.vh = function() {
                        var b =
                            Yt(this.l);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.l.document.createRange();
                            var d = this.Y(b.startContainer),
                                e = this.Y(b.endContainer);
                            if (!X(d) && !X(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                startNode: d,
                                endNode: e
                            }
                        }
                    };
                    c.prototype.yh = function(b) {
                        if ($t.test(b.type || "")) {
                            var d = this.Y(b);
                            if (!X(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Ya),
                bu = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                cu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        X(b.l.document.hidden) ?
                            X(b.l.document.msHidden) ? X(b.l.document.webkitHidden) || (b.visibility = {
                                hidden: "webkitHidden",
                                event: "webkitvisibilitychange"
                            }) : b.visibility = {
                                hidden: "msHidden",
                                event: "msvisibilitychange"
                            } : b.visibility = {
                                hidden: "hidden",
                                event: "visibilitychange"
                            };
                        b.handleEvent = b.L.J(b.handleEvent, "e");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.Nb = [this.bb.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], G(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.G.X("event", {}, bu[this.visibility ?
                            this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Ya),
                du = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                eu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Wc = {};
                        d.scrolling = !1;
                        d.Kf = 0;
                        d.ga.push([
                            ["scroll"], d.Ai, d.l.document
                        ]);
                        d.ga.push([du, d.Li, d.l.document]);
                        d.Da = new Ze(b);
                        d.Mb = d.L.J(d.Mb, "nh");
                        d.Ki = d.L.J(d.Da.oc(d.Mb, d.G.hb().gf() ? 0 : 50, {
                            eb: !0
                        }), "th");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Ai = function() {
                        var b = this;
                        this.scrolling = !0;
                        ma(this.l, this.Kf);
                        this.Kf = U(this.l, function() {
                            b.scrolling = !1
                        }, 150)
                    };
                    c.prototype.Li = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches && 0 < b.changedTouches.length && y(function(f) {
                            var g = d.Ah(f);
                            f.__ym_touch_id = g;
                            e && delete d.Wc[f.identifier]
                        }, xa(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.Mb(b) : this.Ki(b, this.G.stamp()) : this.Mb(b)
                    };
                    c.prototype.Ah = function(b) {
                        this.Wc[b.identifier] || (this.Wc[b.identifier] = Rh());
                        return this.Wc[b.identifier]
                    };
                    c.prototype.Mb = function(b, d) {
                        void 0 ===
                            d && (d = this.G.stamp());
                        var e = b.type,
                            f = B(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, xa(b.changedTouches));
                        0 < f.length && this.G.X("event", {
                            touches: f,
                            target: this.Y(b.target)
                        }, e, d)
                    };
                    return c
                }(Ya),
                fu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ga.push([
                            ["load"], b.ii, b.l.document
                        ]);
                        return b
                    }
                    Ma(c, a);
                    c.prototype.ii = function(b) {
                        b = b.target;
                        "IMG" === La(b) && b.getAttribute("srcset") && this.G.X("mutation", {
                                target: this.Y(b),
                                attributes: {
                                    src: b.currentSrc
                                }
                            },
                            "ac")
                    };
                    return c
                }(Ya),
                gu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.mg = 1;
                        d.Da = new Ze(b);
                        d.ec = d.L.J(d.ec, "z");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        if (this.df()) {
                            a.prototype.start.call(this);
                            this.ec();
                            var b = this.bb.F(n(this.l, "visualViewport"), ["resize"], this.Da.oc(this.ec, 10));
                            this.Nb.push(b)
                        }
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.Da.flush()
                    };
                    c.prototype.ec = function() {
                        var b = this.df();
                        b && b !== this.mg && (this.mg = b, this.Ci(b))
                    };
                    c.prototype.df = function() {
                        var b =
                            Zd(this.l);
                        return b ? b[2] : null
                    };
                    c.prototype.Ci = function(b) {
                        var d = Xf(this.l);
                        this.G.X("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(Ya),
                Vd, $e = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Cl = {
                    "super": 1,
                    jj: 2,
                    alt: 3,
                    shift: 4,
                    Gj: 5,
                    "delete": 6,
                    hj: 6
                },
                hu = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Dl = (Vd = {}, Vd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Vd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Vd.Xh = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Vd),
                iu = /flash/,
                ju = /ym-disable-keys/,
                ku = /^&#/,
                lu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.jb = {};
                        d.Ma = 0;
                        d.Ga = [];
                        d.Zf = [];
                        d.qc = 0;
                        d.Df = 0;
                        d.ga.push([
                            ["keydown"], d.Ch
                        ]);
                        d.ga.push([
                            ["keyup"], d.Dh
                        ]);
                        d.wg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                        d.Fc = d.L.J(d.Fc, "v");
                        d.pd = d.L.J(d.pd, "ec");
                        d.Sc = d.L.J(d.Sc, "sk");
                        d.xd = d.L.J(d.xd,
                            "gk");
                        d.me = d.L.J(d.me, "sc");
                        d.dc = d.L.J(d.dc, "cc");
                        d.reset = d.L.J(d.reset, "r");
                        d.Pc = d.L.J(d.Pc, "rs");
                        return d
                    }
                    Ma(c, a);
                    c.prototype.Ch = function(b) {
                        if (this.Fc(b) && !this.Qh(b)) {
                            var d = b.keyCode;
                            b.repeat || this.jb[d] || (this.jb[b.keyCode] = !0, $e[b.keyCode] && !this.Ma ? (this.Ma += 1, this.me(b), this.reset(300)) : this.Ma ? (this.Eg(), this.de(b), this.pd()) : (this.reset(), this.de(b)))
                        }
                    };
                    c.prototype.Dh = function(b) {
                        if (this.Fc(b)) {
                            var d = b.keyCode,
                                e = $e[b.keyCode];
                            this.jb[b.keyCode] && (this.jb[d] = !1);
                            e && this.Ma && (this.Ma = 0, this.jb = {});
                            1 === this.Ga.length && (b = this.Ga[0], L(b.keyCode, hu) && (this.Sc([b], !0), this.reset()));
                            this.Ga = la(v(W("keyCode"), wa(d), tc), this.Ga);
                            ma(this.l, this.qc)
                        }
                    };
                    c.prototype.Fc = function(b) {
                        var d = this.l.document.activeElement;
                        b = b.target;
                        d = d && "OBJECT" === d.nodeName && iu.test(d.getAttribute("type") || "");
                        b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && ju.test(b.className);
                        return !d && !b
                    };
                    c.prototype.pd = function() {
                        this.Zf = this.Ga.slice(0);
                        ma(this.l, this.qc);
                        this.qc = U(this.l, w(this.Zf, G(this.Sc, this)),
                            0, "e.c")
                    };
                    c.prototype.Sc = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.xd(b);
                            this.G.X("event", {
                                keystrokes: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.xd = function(b) {
                        var d = this;
                        b = B(function(e) {
                            e = e.keyCode;
                            var f = $e[e],
                                g = d.sh(e);
                            return {
                                id: e,
                                key: g,
                                isMeta: !!f && ku.test(g),
                                modifier: f
                            }
                        }, b);
                        return zg(function(e, f) {
                            return (Cl[e.modifier] || 100) - (Cl[f.modifier] || 100)
                        }, b)
                    };
                    c.prototype.sh = function(b) {
                        return Dl[this.wg][b] || Dl.Xh[b] || String.fromCharCode(b)
                    };
                    c.prototype.de = function(b) {
                        L(b, this.Ga) || this.Ga.push(b)
                    };
                    c.prototype.me = function(b) {
                        this.de(b);
                        this.dc()
                    };
                    c.prototype.dc = function() {
                        this.Ma ? U(this.l, this.dc, 100) : this.Ga = []
                    };
                    c.prototype.Eg = function() {
                        ma(this.l, this.Df)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Df = U(this.l, G(this.Pc, this), b) : this.Pc()
                    };
                    c.prototype.Pc = function() {
                        this.Ma = 0;
                        this.Ga = [];
                        this.jb = {};
                        ma(this.l, this.qc)
                    };
                    c.prototype.Qh = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === $e[b.keyCode] : !1
                    };
                    return c
                }(Ya),
                tn = ["sr", "sd", "\u043d"],
                mu = /allow-same-origin/,
                nu = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.Vb = [];
                        d.sd = {};
                        d.Td = d.L.J(d.Td, "fi");
                        d.Ud = d.L.J(d.Ud, "sd");
                        d.Vd = d.L.J(d.Vd, "src");
                        d.za = new b.MutationObserver(d.Vd);
                        return d
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.G.Hb().fc && this.G.sa().F("iframe", "NA:", G(this.Td, this));
                        this.G.$e().vd().F(["sdr"], G(this.Ud, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        y(function(b) {
                            b.G.stop()
                        }, this.Vb)
                    };
                    c.prototype.Vd = function(b) {
                        var d = b.pop().target;
                        if (b =
                            wb(function(f) {
                                return f.ff === d
                            }, this.Vb)) {
                            this.Vb = la(function(f) {
                                return f.ff !== d
                            }, this.Vb);
                            var e = b.G.wd();
                            try {
                                b.G.stop()
                            } catch (f) {}
                            this.nc(d, e)
                        }
                    };
                    c.prototype.Td = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.za.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.nc(d, b.data.id)
                        }
                    };
                    c.prototype.nc = function(b, d) {
                        var e = this;
                        this.Oh(b) && Qb(this.l, b)(Qa(F, function() {
                            var f = e.G.nc(b.contentWindow, d);
                            e.Vb.push({
                                G: f,
                                ff: b
                            })
                        }))
                    };
                    c.prototype.Ud = function(b) {
                        var d = this,
                            e = b.frameId;
                        b = b.data;
                        this.sd[e] || (this.sd[e] = {
                            data: []
                        });
                        var f = this.sd[e];
                        f.data = f.data.concat(b);
                        this.l.isNaN(f.md) && y(function(g) {
                            "page" === g.type && (f.md = g.data.recordStamp - d.G.af())
                        }, f.data);
                        this.l.isNaN(f.md) || (this.G.da(B(function(g) {
                            g.stamp += f.md;
                            g.stamp = d.l.Math.max(0, g.stamp);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Oh = function(b) {
                        var d = b.getAttribute("src"),
                            e = b.getAttribute("sandbox");
                        return b.getAttribute("_ym_ignore") || e && !e.match(mu) || d && "about:blank" !== d && (d = Kc(this.l, d).host) && S(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
                    };
                    return c
                }(Ya),
                ou = x(function(a) {
                    var c = n(a, "sessionStorage");
                    if (!c) return null;
                    try {
                        var b = c.getItem("__ym_tab_guid");
                        c = !1;
                        var d = n(a, "opener.sessionStorage");
                        try {
                            c = !!d && b === d.getItem("__ym_tab_guid")
                        } catch (e) {
                            c = !0
                        }
                        if (!b || c) b = Rh(), a.sessionStorage.setItem("__ym_tab_guid", b);
                        return b
                    } catch (e) {
                        return null
                    }
                }),
                pu = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ie = b.L.J(b.ie, "ps");
                        return b
                    }
                    Ma(c, a);
                    c.prototype.start = function() {
                        this.G.sa().Ac({
                            nodes: [this.l.document.documentElement],
                            Tc: this.ie
                        })
                    };
                    c.prototype.ie = function(b) {
                        var d = this.G.uh(),
                            e = d.lh(),
                            f = S(this.l),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = Gc(this.l),
                            l = k[0];
                        k = k[1];
                        this.G.X("page", {
                            content: B(function(m) {
                                m.node = void 0;
                                return m
                            }, b),
                            base: e || "",
                            hasBase: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.l.document.title,
                            doctype: d.nh() || "",
                            address: this.l.location.href,
                            ua: this.l.navigator.userAgent,
                            referrer: this.l.document.referrer,
                            screen: {
                                width: this.l.screen.width,
                                height: this.l.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            recordStamp: this.G.af(),
                            tabId: ou(this.l)
                        }, "page", 0)
                    };
                    return c
                }(Ya),
                qu = ["addRule", "removeRule", "insertRule", "deleteRule"],
                hh = [
                    [function(a) {
                        function c(b, d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.Xa = {};
                            b.Wb = {};
                            b.Ge = 0;
                            b.Kc = b.L.J(b.Kc, "a");
                            b.ub = b.L.J(b.ub, "sr");
                            b.Lc = b.L.J(b.Lc, "r");
                            b.da = b.L.J(b.da, "d");
                            return b
                        }
                        Ma(c, a);
                        c.prototype.start = function() {
                            var b = this.G.sa();
                            b.F("style", "NA:", this.Kc);
                            b.F("style", "NR:", this.Lc);
                            this.da()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.G.sa();
                            d.ha("style", "NA:", this.Kc);
                            d.ha("style", "NR:", this.Lc);
                            this.da();
                            ma(this.l, this.Ge);
                            y(function(e) {
                                b.Xa[e].sheet && b.Gf(b.Xa[e].sheet)
                            }, da(this.Xa));
                            this.Xa = {}
                        };
                        c.prototype.da = function() {
                            var b = this;
                            y(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.stamp;
                                        delete l.stamp;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && y(function(p) {
                                        b.G.X("event", {
                                            target: Ja(e),
                                            changes: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Wb[e]
                                }
                            }, Ea(this.Wb));
                            this.Ge = U(this.l, this.da,
                                100)
                        };
                        c.prototype.ub = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Wb[b] || (this.Wb[b] = []);
                            this.Wb[b].push({
                                op: d,
                                style: f,
                                index: g,
                                stamp: e
                            })
                        };
                        c.prototype.ri = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            V(f) && (b.addRule = function(l, m, p) {
                                e.ub(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            V(g) && (b.removeRule = function(l) {
                                e.ub(d, "r", e.G.stamp(), "", l);
                                return g.call(b, l)
                            });
                            V(h) && (b.insertRule = function(l, m) {
                                e.ub(d, "a", e.G.stamp(), l, m);
                                return h.call(b,
                                    l, m)
                            });
                            V(k) && (b.deleteRule = function(l) {
                                e.ub(d, "r", e.G.stamp(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Gf = function(b) {
                            var d = this;
                            y(function(e) {
                                var f = d.l.CSSStyleSheet.prototype[e];
                                V(f) && (b[e] = G(f, b))
                            }, qu)
                        };
                        c.prototype.Yg = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.Kc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.Yg(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        op: "a"
                                    });
                                    this.G.X("event", {
                                        changes: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.ri(e, b);
                                this.Xa[b] = d
                            }
                        };
                        c.prototype.Lc = function(b) {
                            b = b.data.id;
                            var d = this.Xa[b];
                            d && (delete this.Xa[b], d.sheet && this.Gf(d.sheet))
                        };
                        return c
                    }(Ya), "ss"],
                    [Qt, "in"],
                    [Nt, "mu"],
                    [Rt, "r"],
                    [St, "sc"],
                    [Ut, "mo"],
                    [Wt, "f"],
                    [au, "se"],
                    [cu, "wf"],
                    [eu, "t"],
                    [fu, "src"],
                    [gu, "z"],
                    [lu, "ks"]
                ];
            hh.push([nu, "if"]);
            hh.push([pu, "pa"]);
            var ru = x(function(a) {
                    var c = a.document;
                    return {
                        zd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ?
                                c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        th: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d = wb(w(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        vj: w(a, eb),
                        gf: w(a, od),
                        uj: w(a, Oe)
                    }
                }),
                su = function() {
                    function a(c, b) {
                        var d = this;
                        this.Kb = 0;
                        this.ld = [];
                        this.Jb = null;
                        this.va = this.Zb = this.Xf = !1;
                        this.recordStamp = 0;
                        this.uh = function() {
                            return d.page
                        };
                        this.wd = function() {
                            return d.Kb
                        };
                        this.af = function() {
                            return d.recordStamp
                        };
                        this.rh = function() {
                            return d.bb
                        };
                        this.$e = function() {
                            return d.Jb
                        };
                        this.sa = function() {
                            return d.Fd
                        };
                        this.stamp = function() {
                            return d.qe ? d.l.Math.max(d.qe(Z) - d.recordStamp, 0) : 0
                        };
                        this.Hb = function() {
                            return d.options
                        };
                        this.hb = function() {
                            return d.Bg
                        };
                        this.X = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            f = d.qh(f, g, h, k);
                            d.da(f)
                        };
                        this.qh = function(f, g, h, k) {
                            void 0 === k && (k = d.stamp());
                            return {
                                type: f,
                                data: g,
                                stamp: k,
                                frameId: d.Kb,
                                event: h
                            }
                        };
                        this.da = function(f) {
                            f = ba(f) ? f : [f];
                            d.Xf && !d.Zb ? d.va ? (f = B(function(g) {
                                return g.frameId ?
                                    g : z(g, {
                                        frameId: d.Kb
                                    })
                            }, f), d.$e().Of(f)) : d.Tb(f) : d.ld = d.ld.concat(f)
                        };
                        this.l = c;
                        var e = Cf(c, this, "R");
                        this.ne = e.J(this.ne, "s");
                        this.da = e.J(this.da, "sd");
                        e = H(c);
                        e.C("wv2e") && cf();
                        e.D("wv2e", !0);
                        this.options = b;
                        this.bb = ia(c);
                        this.Fd = new Ot(this.l, b);
                        this.Bg = ru(c);
                        this.Ie = B(function(f) {
                            return new f[0](c, d, f[1])
                        }, hh);
                        this.Mh();
                        this.page = rn(this.l);
                        this.ne()
                    }
                    a.prototype.start = function(c) {
                        this.Xf = !0;
                        this.Tb = c;
                        this.Lf()
                    };
                    a.prototype.stop = function() {
                        gh(this.l) && (y(function(c) {
                                return c.stop()
                            }, this.Ie), this.Fd.stop(),
                            this.Jb && this.Jb.stop(), this.va || this.X("event", {}, "eof"))
                    };
                    a.prototype.nc = function(c, b) {
                        var d = new a(c, z({}, this.options, {
                            frameId: b
                        }));
                        d.start(F);
                        return d
                    };
                    a.prototype.Mh = function() {
                        var c = this;
                        this.va = !!this.options.frameId;
                        this.Kb = this.options.frameId || 0;
                        this.Zb = !this.va;
                        var b = this.options.fg || [];
                        b.push(S(this.l).host);
                        this.Jb = sn(this.l, this, b);
                        b = this.Jb.vd();
                        eb(this.l) ? this.Zb && b.F(["i"], function(d) {
                            c.va = d.va;
                            c.Zb = !1;
                            d.frameId && (c.Kb = d.frameId);
                            c.Lf()
                        }) : this.Zb = this.va = !1
                    };
                    a.prototype.Lf = function() {
                        var c =
                            Cd(this.ld);
                        this.da(c)
                    };
                    a.prototype.ne = function() {
                        this.qe = cg(this.l);
                        this.recordStamp = this.qe(Z);
                        y(function(c) {
                            c.start()
                        }, this.Ie);
                        this.Fd.start()
                    };
                    return a
                }(),
                tu = function() {
                    return function(a, c, b) {
                        var d = this;
                        this.cd = this.Pb = !1;
                        this.Ua = [];
                        this.sf = [];
                        this.Le = [];
                        this.send = function(e, f, g) {
                            e = d.sender(e, d.lc);
                            f && g && e.then(f, g);
                            return e
                        };
                        this.pe = function(e, f, g) {
                            return new K(function(h, k) {
                                e.push([f, h, k, g])
                            })
                        };
                        this.Gh = function() {
                            d.Ua = zg(function(g, h) {
                                return g[3].partNum - h[3].partNum
                            }, d.Ua);
                            var e = M(function(g,
                                    h, k) {
                                    h = h[3];
                                    return g && k + 1 === h.partNum
                                }, !0, d.Ua),
                                f = !!d.Ua[d.Ua.length - 1][3].end;
                            return e && f
                        };
                        this.qd = function(e) {
                            oh(d.l, e.slice(), function(f) {
                                d.send(f[0], f[1], f[2])
                            }, 20, "s.w2.sf.fes");
                            Cd(e)
                        };
                        this.dh = function() {
                            d.cd || (d.cd = !0, d.qd(d.sf), d.qd(d.Le))
                        };
                        this.Ig = function(e) {
                            return M(function(f, g) {
                                var h = "page" === g.type && !g.frameId,
                                    k = "eof" === g.data.type,
                                    l = h && !!g.partNum;
                                return {
                                    hd: f.hd || l,
                                    gd: f.gd || h,
                                    fd: f.fd || k
                                }
                            }, {
                                gd: !1,
                                fd: !1,
                                hd: !1
                            }, e)
                        };
                        this.Eh = function(e, f, g) {
                            g ? (e = d.pe(d.Ua, e, f[0]), d.Gh() && (d.qd(d.Ua), d.Pb = !0)) : (d.Pb = !0, e = d.send(e));
                            return e
                        };
                        this.bf = function(e, f, g) {
                            var h;
                            f = {
                                H: (h = {}, h["wv-part"] = "" + g, h),
                                K: Ga(),
                                $: {
                                    ca: f
                                },
                                Wa: {
                                    jf: d.Nh
                                }
                            };
                            e && f.K.D("bt", 1);
                            return f
                        };
                        this.Xg = function(e, f, g) {
                            e = d.bf(!1, e, g);
                            return d.Pb ? d.send(e) : d.pe(d.Le, e, f)
                        };
                        this.Yh = function(e, f, g) {
                            e = d.bf(!0, e, g);
                            if (d.Pb) return d.send(e);
                            var h = d.Ig(f);
                            g = h.gd;
                            var k = h.fd;
                            h = h.hd;
                            var l;
                            g && (l = d.Eh(e, f, h));
                            d.cd ? g || (l = d.send(e)) : (g || (l = d.pe(d.sf, e, f)), (d.Pb || k) && d.dh());
                            return l
                        };
                        this.l = a;
                        this.Nh = b;
                        this.sender = ra(a, "W", c);
                        this.lc = c
                    }
                }(),
                El = x(function(a) {
                    var c =
                        H(a),
                        b = c.C("isEU");
                    if (X(b)) {
                        var d = Ja(ke(a, "is_gdpr") || "");
                        if (L(d, [0, 1])) c.D("isEU", d), b = !!d;
                        else if (a = Na(a).C("wasSynced"), a = n(a, "params.eu")) c.D("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return H(a).C("isEU")
                }),
                xf = C("i.e", El),
                uu = C("i.ep", function(a) {
                    El(a)
                }),
                ea, vu = (ea = {}, ea.mousemove = 0, ea.mouseup = 1, ea.mousedown = 2, ea.click = 3, ea.scroll = 4, ea.windowblur = 5, ea.windowfocus = 6, ea.focus = 7, ea.blur = 8, ea.eof = 9, ea.selection = 10, ea.change = 11, ea.input = 12, ea.touchmove = 13, ea.touchstart = 14, ea.touchend = 15, ea.touchcancel =
                    16, ea.touchforcechange = 17, ea.canvasMethod = 18, ea.canvasProperty = 19, ea.zoom = 20, ea.resize = 21, ea.mediaMethod = 22, ea.mediaProperty = 23, ea.keystroke = 24, ea.deviceRotation = 25, ea.fatalError = 26, ea.hashchange = 27, ea.stylechange = 28, ea),
                ih = oa(function(a, c) {
                    var b;
                    return b = {}, b[a] = c, b
                }),
                Wd = ["touchEvent", "touches", "touches"],
                Ph = function() {
                    function a(c) {
                        var b, d, e = this;
                        this.isSync = !1;
                        this.Db = [];
                        this.Ne = {};
                        this.ph = function(f) {
                            if (f = e.Ne[f]) return ba(f) ? {
                                rf: f[0],
                                wi: f[1],
                                xi: f[2]
                            } : {
                                rf: f
                            }
                        };
                        this.l = c;
                        this.nf = (b = {}, b.event = G(this.Wg,
                            this), b.page = ih("page"), b.mutation = ih("mutation"), b.activity = ih("activity"), b);
                        this.Ne = (d = {}, d.scroll = "scrollEvent", d.selection = "selectionEvent", d.change = "changeEvent", d.input = "changeEvent", d.keystroke = ["keystrokesEvent", "keystrokes"], d.zoom = "zoomEvent", d.resize = "resizeEvent", d.windowfocus = "windowEvent", d.windowblur = "windowEvent", d.focus = "windowEvent", d.blur = "windowEvent", d.eof = "windowEvent", d.mousemove = "mouseEvent", d.mouseup = "mouseEvent", d.mousedown = "mouseEvent", d.click = "mouseEvent", d.deviceRotation =
                            "deviceRotationEvent", d.fatalError = "fatalErrorEvent", d.touchmove = Wd, d.touchstart = Wd, d.touchend = Wd, d.touchcancel = Wd, d.touchforcechange = Wd, d.hashchange = "hashchangeEvent", d.stylechange = ["stylechangeEvent", "changes", "changes"], d)
                    }
                    a.isEnabled = function(c) {
                        return gi(c)
                    };
                    a.prototype.Wg = function(c) {
                        var b, d, e = c.type,
                            f = this.ph(e);
                        f || Wa(mc("vem." + e));
                        "eof" === e && (this.isSync = !0);
                        var g = f.rf,
                            h = f.wi;
                        f = f.xi;
                        var k = c.meta;
                        return {
                            event: (b = {
                                    type: vu[e],
                                    target: c.target,
                                    frameId: c.frameId
                                }, b[g] = h ? (d = {}, d[h] = f ? k[f] : k, d) : k,
                                b)
                        }
                    };
                    a.prototype.Ca = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = $b(c, function(h) {
                                var k = !X(h.partNum);
                                return {
                                    data: k ? void 0 : d.nf[h.type](h.data),
                                    Kg: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    stamp: h.stamp,
                                    partsTotal: h.partsTotal
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = oc(this.l, e, f);
                        var g = [e];
                        this.Db.push(e);
                        return e(We(function(h) {
                            h = me(d.l, hi, {
                                buffer: h
                            });
                            h = oc(d.l, h, f, Jd);
                            g.push(h);
                            d.Db.push(h);
                            return h
                        }))(We(function(h) {
                            h = Jf(d.l, h.slice(-4));
                            h = oc(d.l, h, f, Jd);
                            g.push(h);
                            d.Db.push(h);
                            return h
                        }))(Qg(function(h) {
                            h =
                                h[h.length - 1];
                            y(function(k) {
                                k = Ae(d.l)(k, d.Db);
                                d.Db.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.$a = function(c) {
                        return me(this.l, Mf, this.nf[c.type](c.data))(Me(F))
                    };
                    a.prototype.Qa = function(c) {
                        return c[0]
                    };
                    a.prototype.Vc = function(c, b) {
                        for (var d = Jf(this.l, c)(Me(F)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    return a
                }(),
                wu = C("w2", function(a, c) {
                    function b() {
                        h = !0
                    }
                    var d = H(a),
                        e = N(c);
                    if (!c.yb || ed(a) || !a.MutationObserver || !Fa("Element", a.Element)) return F;
                    Fa("MutationObserver",
                        a.MutationObserver) || Bd(a, e).warn("MutationObserver is overridden, webvisor is not guaranteed to work in this environment");
                    var f = Da(function(k, l) {
                            qa(c, l)["catch"](k)
                        }),
                        g = Qb(a)(We(E([a, c], pn)))(Qg(function(k) {
                            return new su(a, k)
                        })),
                        h = !1;
                    Tq([g, f])(Qa(D(a, "wv2.R.c"), function(k) {
                        var l = k[0];
                        k = k[1];
                        if (!h) {
                            b = function() {
                                h || (h = !0, l && l.stop())
                            };
                            var m = d.C("wv2Counter");
                            if (!Uh(a, k) || m) b();
                            else if (ia(a).F(a, ["beforeunload", "unload"], b), d.D("wv2Counter", e), d.D("stopRecorder", b), k = on(a)) {
                                var p = !(k instanceof Jc);
                                m = new tu(a, c, p);
                                var r = Bl.Xe(e, "m", G(m.Yh, m), k, a),
                                    q = Bl.Xe(e, "e", G(m.Xg, m), k, a);
                                k = qn();
                                m = k.gi;
                                q.F("ag", k.zg);
                                q.F("p", m);
                                r.F("see", function(t) {
                                    var A = !1;
                                    y(function(Q) {
                                        "page" === Q.type && (A = !0)
                                    }, t);
                                    A && (h || q.push(p ? {
                                        type: "event",
                                        data: {
                                            type: "fatalError",
                                            meta: {
                                                code: "invalid-snapshot",
                                                Oe: "p.s.f",
                                                stack: ""
                                            }
                                        }
                                    } : {
                                        type: "event",
                                        event: "fatalError",
                                        data: {
                                            code: "invalid-snapshot",
                                            Oe: "p.s.f",
                                            stack: ""
                                        }
                                    }), b())
                                });
                                var u = yb(function(t) {
                                    t = p ? mn(t) : t;
                                    "eof" === n(t, "data.type") ? (q.push(t), r.push(t), q.flush(), r.flush()) : ("event" ===
                                        t.type ? q : r).push(t)
                                });
                                U(a, b, 864E5);
                                Mb(a, function() {
                                    var t, A;
                                    nb(a, (t = {}, t.counterKey = e, t.name = "webvisor", t.data = (A = {}, A.version = 2, A), t));
                                    l.start(u)
                                })
                            }
                        }
                    }));
                    return function() {
                        return b()
                    }
                }),
                xu = C("w2.cs", function(a, c) {
                    var b, d = N(c);
                    $f(a, d, (b = {}, b.webvisor = !!c.yb, b))
                }),
                yu = ["rt", "mf"],
                wf = x(Dc, N),
                Mh = v(gd, rc),
                zu = qb("isp", function(a, c) {
                    qa(c, function(b) {
                        var d = wb(function(h) {
                            return n(b, "settings." + h)
                        }, yu);
                        if (d && Pd(a)) {
                            var e = mf(b) && !ce(a),
                                f = wf(c);
                            z(f, {
                                Qb: d,
                                status: e ? 3 : 4
                            });
                            if (!e) {
                                e = gn(a, c, d);
                                var g = function(h) {
                                    f.status =
                                        h
                                };
                                return ("mf" === d ? jn : hn)(a, c, e).then(w(1, g))["catch"](w(2, g))
                            }
                        }
                    })["catch"](D(a, "l.isp"))
                }),
                Fl = C("fbq.o", function(a, c, b) {
                    var d = n(a, "fbq");
                    if (d && d.callMethod) {
                        var e = function() {
                            var g = Ca(arguments),
                                h = d.apply(void 0, g);
                            c(g);
                            return h
                        };
                        z(e, d);
                        b && y(c, b);
                        a.fbq = e
                    } else var f = U(a, E([a, c, za(xa(d && d.queue))], Fl), 1E3, "fbq.d");
                    return G(ma, null, a, f)
                }),
                $c, Eb, ad, jh = ($c = {}, $c.add_to_wishlist = "add-to-wishlist", $c.begin_checkout = "begin-checkout", $c.generate_lead = "submit-lead", $c.add_payment_info = "add-payment-info", $c),
                kh = (Eb = {}, Eb.AddToCart = "add-to-cart", Eb.Lead = "submit-lead", Eb.InitiateCheckout = "begin-checkout", Eb.Purchase = "purchase", Eb.CompleteRegistration = "register", Eb.Contact = "submit-contact", Eb.AddPaymentInfo = "add-payment-info", Eb.AddToWishlist = "add-to-wishlist", Eb.Subscribe = "subscribe", Eb),
                en = (ad = {}, ad["1"] = jh, ad["2"] = jh, ad["3"] = jh, ad["0"] = kh, ad),
                fn = [kh.AddToCart, kh.Purchase],
                Au = oa(function(a, c) {
                    var b = n(c, "ecommerce"),
                        d = n(c, "event") || "";
                    if (!(b = b && d && {
                            version: "3",
                            rc: d
                        })) a: {
                        if (ba(c) || Oa(c))
                            if (b = Ca(c), d = b[1],
                                "event" === b[0] && d) {
                                b = {
                                    version: "2",
                                    rc: d
                                };
                                break a
                            }
                        b = void 0
                    }
                    b || (b = (b = n(c, "ecommerce")) && {
                        version: "1",
                        rc: I(",", da(b))
                    });
                    b && a(b)
                }),
                Bu = C("ag.e", function(a, c) {
                    if ("0" === c.aa) {
                        var b = [],
                            d = D(a, "ag.s", E([ha, b], y));
                        qa(c, function(e) {
                            if (n(e, "settings.auto_goals") && Ka(a, c) && (e = ue(a, c, "autogoal").reachGoal)) {
                                e = E([e, c.od], dn);
                                var f = Au(e);
                                e = E([a, e], cn);
                                b.push(Fl(a, e));
                                b.push(Ri(a, "dataLayer", function(g) {
                                    g.za.F(f)
                                }))
                            }
                        });
                        return d
                    }
                }),
                Cu = /[^\d.,]/g,
                Du = /[.,]$/,
                an = C("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(Cu,
                            "").replace(Du, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (L(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(Pb(b[0]) + "." + Pb(d));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d), b = a.Math.max(b, 0));
                    return b
                }),
                Eu = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "),
                        "398"
                    ],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                Fu = x(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                Gu = C("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = Hi(a);
                    return (a = wb(function(b) {
                        return Fu(b[0]).test(c)
                    }, Eu)) ? a[1] : "643"
                }),
                Hu = x(function() {
                    function a() {
                        var k = h + "0",
                            l = h + "1";
                        f[k] ? f[l] ? (h = h.slice(0, -1), --g) : (e[l] = b(8), f[l] = 1) : (e[k] = b(8), f[k] = 1)
                    }

                    function c() {
                        var k = h +
                            "1";
                        f[h + "0"] ? f[k] ? (h = h.slice(0, -1), --g) : (h += "1", f[h] = 1) : (h += "0", f[h] = 1)
                    }

                    function b(k) {
                        void 0 === k && (k = 1);
                        var l = d.slice(g, g + k);
                        g += k;
                        return l
                    }
                    for (var d = Kh("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==").join(""),
                            e = {}, f = {}, g = 1, h = ""; g < d.length - 1;)("0" === b() ? c : a)();
                    return e
                }),
                Ym = C("ep.dec", function(a, c) {
                    if (!c || ed(a)) return [];
                    var b = Kh(c),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    if (2 !== Ng(b[0])) return [];
                    b = Hu();
                    f = f.join("");
                    e = Ng(d + e);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h], b[g] && (d += String.fromCharCode(Ng(b[g])), g = ""), h += 1;
                    b = "";
                    for (f = 0; f < d.length;) e = d.charCodeAt(f), 128 > e ? (b += String.fromCharCode(e), f++) : 191 < e && 224 > e ? (g = d.charCodeAt(f + 1), b += String.fromCharCode((e & 31) << 6 | g & 63), f += 2) : (g = d.charCodeAt(f + 1), b += String.fromCharCode((e &
                        15) << 12 | (g & 63) << 6 | d.charCodeAt(f + 2) & 63), f += 3);
                    d = Hb(a, b);
                    return ba(d) ? B(wr, d) : []
                }),
                $m = C("ep.ent", function(a, c, b) {
                    a = "" + Ta(a, 10, 99);
                    b = "" + 100 * c + b + a;
                    if (16 < Oa(b)) return "";
                    b = Lh("0", 16, b);
                    c = b.slice(0, 8);
                    b = b.slice(-8);
                    c = (+c ^ 92844).toString(35);
                    b = (+b ^ 92844).toString(35);
                    return "" + c + "z" + b
                }),
                Gl = v(Jh, Gu),
                Hl = C("ep.ctp", function(a, c, b, d) {
                    var e = Gl(a, b),
                        f = Ih(a, d);
                    Hh(a, c, e, f);
                    Fa("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                        var g = Gl(a, b),
                            h = Ih(a, d);
                        if (e !== g || f !== h) e = g, f = h, Hh(a, c, e, f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                Iu = C("ep.chp", function(a, c, b, d, e) {
                    b && uf(a, c);
                    return d || e ? ia(a).F(a.document, ["click"], D(a, "ep.chp.cl", E([a, c, d, e], Zm))) : F
                }),
                Mu = C("ep.i", function(a, c) {
                    if (Gd(a)) return Xm(a, c).then(function(b) {
                        var d = b.Tg,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            r = d[8],
                            q = d[9],
                            u = d[10],
                            t = d[11],
                            A = d[12],
                            Q = d[13],
                            O = d[14],
                            sa = d[15];
                        if (!b.isEnabled) return K.resolve(F);
                        var Ha = fe(a, e),
                            zb = fe(a, h),
                            ud = fe(a, m),
                            se = fe(a, r),
                            Ju = "" + e + f + g === "" + h + k + l;
                        return new K(function(Ku,
                            Lu) {
                            Qb(a)(Qa(Lu, function() {
                                Ha && Hl(a, c, f, g, u, t, A);
                                zb && !Ju && Hl(a, c, k, l, Q, O, sa);
                                Ku(Iu(a, c, ud || se, p, q))
                            }))
                        })
                    })
                }),
                Fm = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Wm = v(da, Oc),
                Nu = C("cc.i", function(a, c) {
                    var b = E([a, c], Vm);
                    b = E([a, b, 300, void 0], U);
                    qa(c, b)
                }),
                Ou = w("9-d5ve+.r%7", R),
                Pu = C("ad", function(a, c) {
                    if (!c.ob) {
                        var b = H(a);
                        if (!b.C("adBlockEnabled")) {
                            var d = function(m) {
                                    L(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                                },
                                e = wc(a),
                                f = e.C("isad");
                            if (f) d(f);
                            else {
                                var g = w("adStatus", b.D),
                                    h = function(m) {
                                        m =
                                            m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.D("isad", m, 1200);
                                        return m
                                    },
                                    k = ra(a, "adb", c);
                                if (!b.C("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + Ou().replace(/[^a-v]+/g, "") + "t.gif";
                                    Sm(a, function() {
                                        return k({
                                            ma: {
                                                Ba: l
                                            }
                                        }).then(w(!1, h))["catch"](w(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                Qu = C("pr.p", function(a, c) {
                    var b, d;
                    if (og(a)) {
                        var e = ra(a, "5", c),
                            f = Ga((b = {}, b.pq = 1, b.ar = 1, b));
                        e({
                            K: f,
                            H: (d = {}, d["page-url"] = S(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](D(a, "pr.p.s"))
                    }
                }),
                Gh = !1,
                Ru = C("fid", function(a) {
                    var c, b = F;
                    if (!V(a.PerformanceObserver)) return b;
                    var d = H(a);
                    if (d.C("fido")) return b;
                    d.D("fido", !0);
                    var e = new a.PerformanceObserver(D(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                Eh = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                    3015043526: 1
                },
                Su = C("lt.p", qb("lt.p", function(a) {
                    var c;
                    if (Fa("PerformanceObserver", a.PerformanceObserver)) {
                        var b = 0,
                            d = new a.PerformanceObserver(D(a, "lt.o", function(e) {
                                e && e.getEntries && (e = e.getEntries(), b = M(function(f, g) {
                                    return f + g.duration
                                }, b, e), Md(a).D("lt", b))
                            }));
                        try {
                            d.observe((c = {}, c.type = "longtask", c.buffered = !0, c))
                        } catch (e) {
                            return
                        }
                        return function() {
                            return d.disconnect()
                        }
                    }
                })),
                Tu = x(v(W("performance.memory.jsHeapSizeLimit"), Aa("concat", ""))),
                Uu = ["availWidth",
                    "availHeight", "availTop"
                ],
                Vu = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Wu = ["webgl", "experimental-webgl"],
                Pm = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                pf = w(Ua("ccf"), Wa),
                Om = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Dh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Mm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Hm = x(Ci),
                Ch = x(Hb, rb),
                Xu = C("phc.p", function(a, c) {
                    if (!kl(a)) return qa(c, function(b) {
                        var d = c.id,
                            e = dd(a, void 0, d),
                            f = e.C("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = mb(a, b) || "";
                            g !== f && e.D("phc_settings", g)
                        } else f && (b = Ch(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                            Bb: "",
                            Ob: "",
                            Vf: 0,
                            ia: {},
                            Aa: [],
                            kf: !1,
                            eb: !0,
                            l: a,
                            lc: c
                        }, z(f, {
                            kf: !0
                        }), Bh(a, d, f), b = wd(a), e = Ei(a, b, 1E3), d = G(Bh, null, a, d, f), e.F(d), Fi(a, b))
                    })
                }),
                lh = x(function(a, c) {
                    var b = H(a),
                        d = Na(a),
                        e = [],
                        f = E([a, c, b, d], rp);
                    pd(a) || sp(a, "14.1") || e.push(E([Em, "pp", ""], f));
                    var g = ml(a) && !nf(a, 68);
                    g || e.push(E([Gm, "pu", ""], f));
                    g || d.Hd || Pd(a) || (e.push(E([Dm, "zzlc", "na"], f)), e.push(E([Cm, "cc", ""], f)));
                    return e.length ? {
                        Ea: function(h, k) {
                            if (0 === b.C("isEU")) try {
                                y(te, e)
                            } catch (l) {}
                            k()
                        },
                        M: function(h, k) {
                            var l = h.K;
                            if (l && 0 === b.C("isEU")) try {
                                y(Da(l),
                                    e)
                            } catch (m) {}
                            k()
                        }
                    } : {}
                }, function(a, c) {
                    return N(c)
                }),
                Yu = v(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return Oa(a) ? v(xa, pa, Wr(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), yb(op))(a) : ""
                }, qd(",")),
                Zu = function(a) {
                    return function(c) {
                        var b = $a(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.Zg;
                        e = e.Rg;
                        try {
                            var g = Aa("getContext", b);
                            d = B(v(R, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = wb(R, d)) ? f(c, {
                            canvas: b,
                            Fg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Rg: Wu,
                        Zg: xm
                    }
                }),
                vm = ["name", "lang", "localService", "voiceURI", "default"],
                $u = C("p.tfs", function(a) {
                    var c =
                        H(a);
                    if (!c.C("tfs")) {
                        c.D("tfs", !0);
                        c = ia(a);
                        var b = F;
                        b = c.F(a, ["message"], function(d) {
                            if ("https://iframe-toloka.com" === n(d, "origin") && (d = Hb(a, d.data), ta(d) && "appendremote" === d.action))
                                if (d = Na(a), d.C("tfsc") || a.confirm("\u0414\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u201c\u0420\u0430\u0437\u043c\u0435\u0442\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432\u201c \u043e\u0442 toloka.ai \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b. \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c?")) {
                                    d.D("tfsc",
                                        1);
                                    var e, f;
                                    H(a).D("_u", (e = {}, e.getCachedTags = Rf, e.button = (f = {}, f.closest = w(a, Sf), f.select = Tf, f.getData = w(a, Uf), f), e));
                                    sc(a, {
                                        src: "https://yastatic.net/s3/metrika/2.1540128042.1/form-selector/button_ru.js"
                                    });
                                    b()
                                } else a.close()
                        })
                    }
                }),
                av = bb(/[a-z\u0430-\u044f,.]/gi),
                bv = C("ice", function(a, c, b) {
                    var d = Ka(a, c);
                    if (d) {
                        var e = n(b, "target");
                        if (e && (c = n(e, "value"), (c = ob(c)) && !(100 <= Oa(c)))) {
                            var f = Pb(c),
                                g = 0 < c.indexOf("@"),
                                h = "tel" === n(e, "type") || !g && Oa(f);
                            if (g || h) {
                                if (h) {
                                    if (av(c)) return;
                                    h = c[0];
                                    var k = f[0];
                                    if (h !== k &&
                                        "+" !== h) return;
                                    var l = c[1];
                                    if ("+" === h && l !== k) return;
                                    c = c[Oa(c) - 1];
                                    h = f[Oa(f) - 1];
                                    if (c !== h) return;
                                    c = f
                                }
                                f = g ? 5 : 11;
                                h = g ? 100 : 16;
                                if (!(Oa(c) < f || Oa(c) > h)) {
                                    var m = n(b, "isTrusted");
                                    fj(a, c).then(function(p) {
                                        var r, q, u, t, A = jg(a, e);
                                        d.params((r = {}, r.__ym = Dg((q = {}, q.fi = ng((u = {}, u.a = g ? 1 : 0, u.b = A, u.c = p, u)).Ca(), q), fa(m) ? {} : (t = {}, t.ite = Gb(m), t)), r))
                                    }, D(a, "ice.s"))
                                }
                            }
                        }
                    }
                }),
                cv = ["text", "email", "tel"],
                dv = ["cc-", "name", "shipping"],
                ev = C("icei", function(a, c) {
                    if (Gd(a) && fl(a)) {
                        var b = !1,
                            d = [];
                        Qb(a)(Qa(F, E([c, function(e) {
                            var f = n(e, "settings.cf");
                            e = xf(a) || n(e, "settings.eu");
                            if (f && !e && !b) {
                                var g = ia(a);
                                f = pb("input", a.document.body);
                                y(function(h) {
                                    Gf(a, h) || !L(h.type, cv) || ab(Lb, B(w(h.autocomplete, Za), dv)) || d.push(g.F(h, ["blur"], E([a, c], bv)))
                                }, f)
                            }
                        }], qa)));
                        return function() {
                            y(ha, d);
                            b = !0
                        }
                    }
                }),
                yh, fv = C("p.ai", function(a, c) {
                    if (pd(a) || ff(a)) return qa(c, function(b) {
                        var d;
                        if (b = n(b, "settings.sbp")) return xh(a, z({}, b, (d = {}, d.c = c.id, d)), 10)
                    })
                }),
                gv = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "),
                Il = qb("uah", function(a) {
                    if (!Fa("getHighEntropyValues",
                            n(a, "navigator.userAgentData.getHighEntropyValues"))) return K.reject("0");
                    try {
                        return a.navigator.userAgentData.getHighEntropyValues(gv).then(function(c) {
                            if (!ta(c)) throw "2";
                            return c
                        }, function() {
                            throw "1";
                        })
                    } catch (c) {
                        return K.reject("3")
                    }
                }),
                Jl = new RegExp(I("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g,
                    "\\$&")),
                mm = x(function(a) {
                    var c = gb(a);
                    return (c = Jl.test(c)) ? K.resolve(c) : Il(a).then(function(b) {
                        try {
                            return M(function(d, e) {
                                return d || Jl.test(e.brand)
                            }, !1, b.brands)
                        } catch (d) {
                            return !1
                        }
                    }, w(!1, R))
                }),
                Zb = ["0", "1", "2", "3"],
                Hc = Zb[0],
                ef = Zb[1],
                hv = Zb[2],
                jf = B(v(R, Aa("concat", "GDPR-ok-view-detailed-")), Zb),
                be = za("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), jf, ["28", "29", "30"]),
                iv = "3 13 14 15 16 17 28".split(" "),
                hf = v(yb(W("ymetrikaEvent.type")), Ek(zc(be))),
                jv = {
                    Uh: !0,
                    url: "https://yastatic.net/s3/gdpr/v3/gdpr",
                    xf: "",
                    pf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
                },
                qm = qb("gdpr", function(a, c, b, d, e) {
                    var f = void 0 === e ? jv : e;
                    e = f.url;
                    var g = f.xf,
                        h = f.Uh;
                    f = tm(a, f.pf, d.aj);
                    var k = ee(a, d);
                    if (!k) return K.resolve({
                        value: Hc,
                        Jd: !0
                    });
                    var l = sc(a, {
                        src: "" + e + (h ? "" : f) + g + ".js"
                    });
                    return new K(function(m, p) {
                        l ? (c("7"), l.onerror = function() {
                            var r;
                            c("9");
                            k.Rf((r = {}, r.type = "GDPR-ok-view-default",
                                r));
                            m(null)
                        }, l.onload = function() {
                            c("10");
                            b.F(za(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], jf), function(r) {
                                var q;
                                r = r.type;
                                k.Rf((q = {}, q.type = r, q));
                                m({
                                    value: wh(r)
                                })
                            })
                        }) : (c("9"), p(Ua("gdp.e")))
                    })
                }),
                Yb, sm = (Yb = {}, Yb["GDPR-ok"] = "ok", Yb["GDPR-ok-view-default"] = "ok-default", Yb["GDPR-ok-view-detailed"] = "ok-detailed", Yb["GDPR-ok-view-detailed-0"] = "ok-detailed-all", Yb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", Yb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", Yb["GDPR-ok-view-detailed-3"] =
                    "ok-detailed-tech-other", Yb),
                km = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "),
                de = [],
                th = v(hf, yb(Vr(be)), qd(",")),
                uh = v(Ek(zc(be)), Oa),
                jm = x(function(a, c) {
                    var b = c.C("gdpr");
                    return L(b, Zb) ? "-" + b : ""
                }),
                Kl = x(vd),
                kv = x(function() {
                    var a = M(function(c, b) {
                        "ru" !== b && (c[b] = ql + "." + b);
                        return c
                    }, {}, xg);
                    y(function(c) {
                        a[c] = c
                    }, da(sl));
                    return a
                }),
                dm = x(function(a) {
                    a = S(a).hostname;
                    return (a = wb(v(W("1"), Di("test"), Bb(ha)(a)), Ea(sl))) && a[0]
                }),
                Ll = function(a, c) {
                    return function(b, d) {
                        var e =
                            N(d);
                        e = kv(e);
                        var f = bm(b, e),
                            g = H(b),
                            h = eb(b);
                        return Pd(b) || Kd(b) ? {} : {
                            M: function(k, l) {
                                var m = k.K,
                                    p = rh(b);
                                m = !(m && m.C("pv"));
                                if (!p || h || m || !f.length) return l();
                                if (g.C("startSync")) Kl(b).push(l);
                                else {
                                    g.D("startSync", !0);
                                    p = E([b, f, F, !1], a);
                                    m = gf[0];
                                    if (!m) return l();
                                    m(b).then(p).then(l, v(hd(l), D(b, c)))["catch"](F)
                                }
                            }
                        }
                    }
                }(function(a, c, b, d) {
                    var e = ca(a),
                        f = H(a),
                        g = Na(a);
                    b = Xg(a, "c");
                    var h = Vb(a, b);
                    return M(function(k, l) {
                        function m() {
                            var q = g.C("synced");
                            f.D("startSync", !1);
                            q && (q[l.Wh] = p, g.D("synced", q));
                            q = Kl(a);
                            y(ha, q);
                            Cd(q)
                        }
                        var p, r = h({
                            $: {
                                ra: ["sync.cook"],
                                wb: 1500
                            }
                        }, [Ba.Pa + "//" + l.Hi + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                            p = e(lb);
                            m()
                        })["catch"](function() {
                            p = e(lb) - 1435;
                            m()
                        });
                        r = w(r, R);
                        return k.then(r)
                    }, K.resolve(), c)["catch"](D(a, "ctl"))
                }, "sy.c"),
                Fb, $l = (Fb = {}, Fb.brands = "chu", Fb.architecture = "cha", Fb.bitness = "chb", Fb.uaFullVersion = "chf", Fb.fullVersionList = "chl", Fb.mobile = "chm", Fb.model = "cho", Fb.platform = "chp", Fb.platformVersion = "chv", Fb),
                lv = qb("ot", function(a, c) {
                    if (Fe(a)) return qa(c, D(a, "ot.s",
                        function() {
                            var b = [],
                                d = gd(a, c);
                            b.push(ia(a).F(a, ["message"], D(a, "ot.m", w(d, Xl))));
                            Qb(a)(Qa(F, D(a, "ot.b", function() {
                                function e(m) {
                                    var p = m.href;
                                    p && hl(p, "https://oauth.yandex.ru/") && !Za(p, "_ym_uid=") && (p = Za(p, "?") ? "&" : "?", m.href += p + "et=" + h + "&_ym_uid=" + d)
                                }
                                var f, g = a.document.body,
                                    h = ca(a)(Z),
                                    k = pb("a", g);
                                y(e, k);
                                if (Fa("MutationObserver", a.MutationObserver)) {
                                    k = new a.MutationObserver(D(a, "ot.m", w(function(m) {
                                        m = m.addedNodes;
                                        for (var p = 0; p < m.length; p += 1) {
                                            var r = m[p];
                                            "A" === r.nodeName && e(r)
                                        }
                                    }, y)));
                                    var l = (f = {}, f.childList = !0, f.subtree = !0, f);
                                    k.observe(g, l);
                                    b.push(G(k.disconnect, k))
                                }
                            })));
                            return E([te, b], y)
                        }))
                }),
                Ml = {},
                Nl = x(Dc),
                Wl = v(Aa("exec", /counterID=(\d+)/), W("1")),
                Ol = oa(function(a, c) {
                    var b = Nl(a),
                        d = xa(c),
                        e = d[0],
                        f = d[1],
                        g = d.slice(2);
                    if (f) {
                        d = Vl(a, e);
                        var h = d[0],
                            k = d[1];
                        d = N(k);
                        b[d] || (b[d] = {});
                        b = b[d];
                        c.Pe || Ml[f] && M(function(l, m) {
                            return l || !!m(a, k, g, h)
                        }, !1, Ml[f]) || ("init" === f ? (c.Pe = !0, h ? vb(a, "" + e, "Duplicate counter " + e + " initialization") : a["yaCounter" + k.id] = new a.Ya[Ba.jc](z({}, g[0], k))) : h && h[f] && b.Lh ? (h[f].apply(h, g), c.Pe = !0) : (d = b.Wf, d || (d = [], b.Wf = d), d.push(za([e, f], g))))
                    }
                }),
                mv = qb("is", function(a) {
                    if (!eb(a)) {
                        var c = wc(a);
                        if (Ne(a, "0")) c.Eb("sup_debug");
                        else {
                            var b = Ne(a, "2"),
                                d = !!c.C("sup_debug");
                            if (b || d) return a._ym_debug = !0, c.D("sup_debug", "1", 1440), sc(a, {
                                src: rl + "/tag_debug.js"
                            })
                        }
                    }
                }),
                Ul = C("destruct.e", function(a, c, b) {
                    return function() {
                        var d = H(a),
                            e = c.id;
                        y(function(f, g) {
                            return V(f) && D(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.C("counters")[N(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                bd = H(window);
            bd.Na("hitParam", {});
            bd.Na("lastReferrer", window.location.href);
            (function() {
                Y.push(function(a, c) {
                    var b;
                    return b = {}, b.firstPartyParams = Js(a, c), b.firstPartyParamsHashed = jq(a, c), b
                });
                Ue.push("fpp", "fpmh")
            })();
            (function() {
                var a = H(window);
                a.Na("getCounters", Ks(window));
                cd.push(Ls);
                Pg.push(function(c, b) {
                    b.counters = a.C("getCounters")
                })
            })();
            (function() {
                Y.push(function(a, c) {
                    var b;
                    nb(a, (b = {}, b.counterKey = N(c), b.name = "counter", b.data = Xj(c), b))
                })
            })();
            ya["1"] = jb;
            Y.push(Ms);
            va["1"] = kc;
            Cb(aj, -1);
            Sb["1"] = [
                [aj, -1],
                [Le, 1],
                [Ee, 2],
                [Kb(), 3]
            ];
            Y.push(Ns);
            Y.push(C("p.ar", function(a, c) {
                var b,
                    d = ra(a, "a", c);
                return b = {}, b.hit = function(e, f, g, h, k, l) {
                    var m, p, r = {
                        H: {},
                        K: Ga((m = {}, m.pv = 1, m.ar = 1, m))
                    };
                    if (e) return f = ta(f) ? {
                        title: f.title,
                        Bf: f.referer,
                        ba: f.params,
                        cc: f.callback,
                        l: f.ctx
                    } : {
                        title: f,
                        Bf: g,
                        ba: h,
                        cc: k,
                        l: l
                    }, g = Ad(c), g.url !== e && (g.ref = g.url, g.url = e), e = e || S(a).href, g = f.Bf || g.ref || a.document.referrer, h = Jb(a, c, "PageView. Counter " + c.id + ". URL: " + e + ". Referrer: " + g, f.ba), k = z(r.V || {}, {
                        ba: f.ba,
                        title: f.title
                    }), r = d(z(r, {
                        V: k,
                        H: z(r.H || {}, (p = {}, p["page-url"] = e, p["page-ref"] = g, p))
                    }), c).then(h), Nc(a, "p.ar.s",
                        r, f.cc || F, f.l)
                }, b
            }));
            ya.a = jb;
            Sb.a = Tb;
            va.a = el;
            Y.push(ue);
            ya.g = jb;
            va.g = kc;
            Sb.g = Tb;
            Y.push(Os);
            Y.push(Ps);
            Sb.t = Tb;
            ya.t = jb;
            va.t = kc;
            Y.push(C("cl.p", function(a, c) {
                function b(p, r, q, u) {
                    void 0 === u && (u = {});
                    q ? xe(a, c, {
                        url: q,
                        kb: !0,
                        Cc: p,
                        Gc: r,
                        sender: e,
                        jg: u
                    }) : g.warn("Empty link")
                }
                var d, e = ra(a, "2", c),
                    f = [],
                    g = Rd(a, N(c)),
                    h = N(c),
                    k = D(a, "s.s.tr", w(Be(a, h), bq));
                h = {
                    l: a,
                    ab: c,
                    $g: f,
                    sender: e,
                    qj: H(a),
                    Pg: Wc(a, c.id),
                    sj: yc(a),
                    Oi: w(w(h, Xe(a)), v(ha, W("trackLinks")))
                };
                h = D(a, "cl.p.c", w(h, Zp));
                h = ia(a).F(a, ["click"], h);
                c.cg && k(c.cg);
                var l =
                    D(a, "file.clc", E([!0, !1], b)),
                    m = D(a, "e.l.l.clc", E([!1, !0], b));
                f = D(a, "add.f.e.clc", Qs(f));
                return d = {}, d.file = l, d.extLink = m, d.addFileExtension = f, d.trackLinks = k, d.u = h, d
            }));
            Sb["2"] = Tb;
            ya["2"] = jb;
            va["2"] = kc;
            ya.r = Hd("r");
            va.r = el;
            kb.push(C("p.r", function(a, c) {
                var b = Ss(a),
                    d = ra(a, "r", c),
                    e = D(a, "rts.p");
                return qa(c, E([function(f, g) {
                    var h = {
                            id: g.Og,
                            aa: g.aa
                        },
                        k = {
                            $: {
                                ca: g.si
                            },
                            K: Ga(g.Cg),
                            H: g.ba,
                            V: {
                                Rb: g.Rb
                            },
                            ma: {
                                Ba: g.Ba
                            }
                        };
                    g.Ia && (k.Ia = ng(g.Ia));
                    h = d(k, h)["catch"](e);
                    return f.then(w(h, R))
                }, K.resolve(), b], M))["catch"](e)
            }));
            aa("r", function(a) {
                return {
                    M: function(c, b) {
                        var d = c.K,
                            e = void 0 === d ? Ga() : d,
                            f = c.V.Rb,
                            g = zd(a);
                        d = e.C("rqnl", 0) + 1;
                        e.D("rqnl", d);
                        if (e = n(g, I(".", [f, "browserInfo"]))) e.rqnl = d, Yf(a);
                        b()
                    },
                    Ea: function(c, b) {
                        Wi(a, c);
                        b()
                    }
                }
            }, 1);
            Cb(we, 100);
            aa("1", we, 100);
            Y.push(Ts);
            aa("n", Le, 1);
            aa("n", Ee, 2);
            aa("n", Kb(), 3);
            aa("n", we, 100);
            ya.n = jb;
            va.n = kc;
            hc({
                Fe: {
                    ea: "accurateTrackBounce"
                }
            });
            Y.push(Us);
            ya.m = Hd("cm");
            va.m = Es;
            aa("m", Kb(["u", "v", "vf"]), 1);
            aa("m", we, 2);
            hc({
                Lg: {
                    ea: "clickmap"
                }
            });
            Y.push(Vs);
            Y.push(Ws);
            Y.push(Xs);
            Y.push(Ys);
            (function() {
                Y.push(Zs);
                Ue.push("ecommerce");
                hc({
                    od: {
                        ea: "ecommerce",
                        Sa: function(a) {
                            if (a) return !0 === a ? "dataLayer" : "" + a
                        }
                    }
                })
            })();
            Y.push($s);
            kb.push(bt);
            Y.push(ct);
            Ue.push("user_id");
            kb.push(C("p.st", dt));
            Y.push(et);
            Cb(function(a, c) {
                return {
                    Ea: function(b, d) {
                        var e = Ka(a, c);
                        e = e && e.userParams;
                        var f = (b.V || {}).ze;
                        e && f && e(f);
                        d()
                    }
                }
            }, 0);
            Xd.push(Hs);
            Ec.unshift(ht);
            Y.push(it);
            Ec.push(function(a) {
                var c = H(a);
                c.C("i") || (c.D("i", !0), ia(a).F(a, ["message"], w(a, xp)))
            });
            (function() {
                var a, c = (a = {}, a.tp = v(rb, Yj, Ib), a.tpid = v(rb, hr), a);
                z(Ge, c)
            })();
            Cb(sd, 20);
            aa("n", sd, 20);
            aa("1", sd, 20);
            Y.push(function(a, c) {
                var b;
                return b = {}, b.ecommerceAdd = C("ecm.a", jt(a, c)), b.ecommerceRemove = C("ecm.r", kt(a, c)), b.ecommerceDetail = C("ecm.d", lt(a, c)), b.ecommercePurchase = C("ecm.p", mt(a, c)), b
            });
            (function() {
                var a, c = {};
                c.bu = st;
                c.pri = ep;
                c.wv = w(2, R);
                c.ds = hp;
                c.co = function(b) {
                    return Gb(H(b).C("jn"))
                };
                c.td = ut;
                z(c, (a = {}, a.iss = v(gs, Ib), a.hdl = v(hs, Ib), a.iia = v(is, Ib), a.cpf = v(rt, Ib), a.ntf = x(function(b) {
                    b = n(b, "Notification.permission");
                    b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                    return Ra(b) ? null : b ? 2 : 1
                }), a.eu = lc("isEU"), a.ns = al, a.np = function(b) {
                    if (Ta(b, 0, 100)) b = null;
                    else {
                        b = ob(Nf(b), 100);
                        for (var d = [], e = 0; e < b.length; e++) {
                            var f = b.charCodeAt(e);
                            128 > f ? d.push(f) : (127 < f && 2048 > f ? d.push(f >> 6 | 192) : (d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128)), d.push(f & 63 | 128))
                        }
                        b = Th(d)
                    }
                    return b
                }, a));
                z(Ge, c)
            })();
            (function() {
                var a = {};
                a.hc = lc("hc");
                a.oo = lc("oo");
                a.pmc = lc("cmc");
                a.lt = function(c) {
                    var b = Md(c).C("lt", null);
                    return b ? c.Math.round(100 * b) : b
                };
                a.re = v(Gq, Ib);
                a.aw = function(c) {
                    c = wb(v(fa, tc), [c.document.hidden,
                        c.document.msHidden, c.document.webkitHidden
                    ]);
                    return fa(c) ? null : Gb(!c)
                };
                a.yu = function(c) {
                    var b = S(c).hostname;
                    return L(b, ["dzen.ru", "ya.ru"]) ? (dd(c, "").C("yandexuid") || "").substring(0, 25) : null
                };
                a.ifc = lc("ifc");
                a.ifb = lc("ifb");
                a.ecs = lc("ecs");
                a.csi = lc("scip");
                z(fg, a)
            })();
            va.er = Yc;
            (function(a) {
                try {
                    var c = Xg(a, "er"),
                        b = ap(a, c);
                    Pj.push(function(d, e, f, g) {
                        var h, k, l, m, p;
                        .01 >= a.Math.random() || b((h = {}, h[d] = (k = {}, k[Ba.bc] = (l = {}, l[e] = (m = {}, m[f] = g ? (p = {}, p[a.location.href] = g, p) : a.location.href, m), l), k), h))
                    })
                } catch (d) {}
            })(window);
            (function() {
                Xd.push(dp);
                De.unshift($o);
                ah.push(function(a) {
                    var c = void 0;
                    void 0 === c && (c = !0);
                    H(a).D("oo", c)
                })
            })();
            Cb(function(a, c) {
                return {
                    M: function(b, d) {
                        var e = b.H,
                            f = b.K;
                        !tl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp, tl[c.id] = !0);
                        d()
                    }
                }
            }, -99);
            Y.push(zt);
            Sb.e = Tb;
            ya.e = jb;
            va.e = kc;
            hc({
                exp: {
                    ea: "experiments"
                }
            });
            kk.experiments = "ex";
            (function() {
                var a;
                gf.push(At);
                ya.f = jb;
                z(va, (a = {}, a.f = dl, a));
                aa("f", Kb(), 1);
                aa("f", pj, 2);
                aa("f", sd, 20)
            })();
            Xd.push(function(a, c) {
                var b = {
                        na: N(c),
                        jd: Ka(a, c),
                        bg: ca(a),
                        Pd: Na(a)
                    },
                    d = b.bg(lb);
                if (!b.Pd.Hd) {
                    var e = b.Pd.C("ymoo" + b.na);
                    if (e && 30 > d - e) b = b.na, delete H(a).C("counters", {})[b], Wa(Ua("uws"));
                    else qa(c, Bt(b))["catch"](D(a, "d.f"))
                }
            });
            (function() {
                var a, c, b = [Ab];
                z(va, (a = {}, a.s = b, a.S = b, a.u = Yc, a));
                z(ya, (c = {}, c.s = Vb, c.S = jb, c.u = Vb, c));
                aa("s");
                aa("u");
                aa("S", Kb(["v", "hid", "u", "vf", "rn"]), 1);
                Y.push(C("s", No))
            })();
            ya["8"] = Vb;
            va["8"] = [eg];
            bl.push([eg, 0]);
            Y.push(C("p.us", function(a, c) {
                return qa(c, function(b) {
                    var d, e = n(b, "settings.sbp");
                    if (e) return pi(a, b, {
                        ab: c,
                        Qb: "8",
                        data: z({}, e, (d = {}, d.c = c.id, d)),
                        Nd: "cs"
                    })
                })
            }));
            aa("p", Kb(bh), 1);
            Sg("pub", function(a, c) {
                var b = ei(a, c);
                return {
                    M: function(d, e) {
                        b(d, "8", "5", "", "wv-part");
                        e()
                    }
                }
            }, 1);
            ya.p = Ct;
            va.p = pa([0, Ab]);
            kb.push(Gt);
            hc({
                yb: {
                    ea: "webvisor",
                    Sa: Lb
                },
                Sg: {
                    ea: "disableFormAnalytics",
                    Sa: Lb
                }
            });
            aa("4", Kb(bh), 1);
            ya["4"] = ul;
            va["4"] = pa([0, Ab, Qc]);
            kb.push(Mt);
            (function() {
                aa("W", Kb(bh), 1);
                Sg("wv", Qn, 1);
                va.W = pa([0, Ab]);
                ya.W = ul;
                kb.push(wu);
                Y.push(xu);
                hc({
                    yb: {
                        ea: "webvisor"
                    }
                });
                hc({
                    Qi: {
                        ea: "trustedDomains"
                    },
                    fc: {
                        ea: "childIframe",
                        Sa: Lb
                    }
                });
                ah.push(function(a) {
                    H(a).C("stopRecorder",
                        F)()
                })
            })();
            Y.push(zu);
            aa("pi");
            ya.pi = Vb;
            va.pi = Yc;
            Sg("w", function(a, c) {
                return {
                    M: function(b, d) {
                        if (b.K) {
                            var e = wf(c),
                                f = e.status;
                            "rt" === e.Qb && f && (b.K.D("rt", f), b.ma || (b.ma = {}), b.ma.Ih = 1 === f ? Mh(a, c) + "." : "")
                        }
                        d()
                    }
                }
            }, 2);
            Y.push(Bu);
            Y.push(Mu);
            va["6"] = pa([0, Ab]);
            ya["6"] = Vb;
            Y.push(Nu);
            Y.push(vt);
            (function() {
                Pg.push(function(a, c) {
                    c.informer = Tm(a)
                })
            })();
            Cb(sf, 6);
            aa("1", sf, 6);
            aa("adb");
            aa("n", sf, 4);
            va.adb = Yc;
            ya.adb = Dj;
            cd.push(Pu);
            va["5"] = kc;
            ya["5"] = jb;
            Sb["5"] = la(v(Oc, zc([Le, Ee]), tc), Tb);
            Y.push(Qu);
            aa("5", sd, 20);
            Cb(Fh, 7);
            aa("n", Fh, 6);
            kb.push(Ru);
            ya.d = jb;
            aa("d", Kb(["hid", "u", "v", "vf"]), 1);
            va.d = Yc;
            aa("n", function(a, c) {
                return {
                    Ea: function(b, d) {
                        if (!b.V || !b.V.force) {
                            var e = .002,
                                f = c.id === Ba.ug ? 1 : .002,
                                g, h, k, l, m;
                            void 0 === e && (e = 1);
                            void 0 === f && (f = 1);
                            var p = Of(a);
                            if (p && V(p.getEntriesByType) && (e = Math.random() > e, f = Math.random() > f, !e || !f)) {
                                p = p.getEntriesByType("resource");
                                for (var r = {}, q = {}, u = {}, t = Rm(), A = S(a).href, Q = 0; Q < p.length; Q += 1) {
                                    var O = p[Q],
                                        sa = O.name.replace(/^https?:\/\//, "").split("?")[0],
                                        Ha = rc(sa),
                                        zb = (g = {}, g.dns = Math.round(O.domainLookupEnd -
                                            O.domainLookupStart), g.tcp = Math.round(O.connectEnd - O.connectStart), g.duration = Math.round(O.duration), g.response = Math.round(O.responseEnd - O.requestStart), g);
                                    "script" !== O.initiatorType || e || (q[sa] = z(zb, (h = {}, h.name = O.name, h.decodedBodySize = O.decodedBodySize, h)));
                                    !Eh[Ha] && !t[Ha] || r[sa] || f || (r[sa] = z(zb, (k = {}, k.pages = A, k)))
                                }
                                da(r).length && (u.timings8 = r);
                                da(q).length && (u.scripts = q);
                                if (da(u).length) ra(a, "d", c)({
                                    K: Ga((l = {}, l.ar = 1, l.pv = 1, l)),
                                    $: {
                                        ca: mb(a, u) || void 0
                                    },
                                    H: (m = {}, m["page-url"] = A, m)
                                }, {
                                    id: Ba.xg,
                                    aa: "0"
                                })["catch"](D(a,
                                    "r.tim.ng2"))
                            }
                        }
                        d()
                    }
                }
            }, 7);
            va.ci = [Ab];
            ya.ci = Vb;
            kb.push(C("p.sci", function(a, c) {
                return qa(c, w(a, Qm))["catch"](D(a, "ins.cs"))
            }));
            Y.push(Su);
            kb.push(qt);
            Y.push(Xu);
            Cb(lh, 8);
            aa("f", lh, 3);
            aa("n", lh, 5);
            cd.push(function(a) {
                return C("fip", function(c) {
                    if (!ml(c) || Kd(c)) {
                        var b = Na(c);
                        if (!b.C("fip")) {
                            var d = v(yb(v(function(e, f) {
                                return C("fip." + f, e)(c)
                            }, G(Hr, null))), qd("-"))(a);
                            b.D("fip", d)
                        }
                    }
                })
            }([Zu, Yu, function(a) {
                var c = n(a, "ApplePaySession"),
                    b = S(a).protocol;
                a = c && "https:" === b && !eb(a) ? c : void 0;
                c = "";
                if (!a) return c;
                try {
                    c = "" + a.canMakePayments();
                    b = "";
                    var d = a.supportsVersion;
                    if (V(d))
                        for (var e = 1; 20 >= e; e += 1) b += d.call(a, e) ? "" + e : "0";
                    return b + c
                } catch (f) {
                    return c
                }
            }, function(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }, function(a) {
                if (a = pt(a)) try {
                    for (var c = [], b = 0; b < nl.length; b += 1) {
                        var d = a(nl[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? I("x", e) : ""
            }, function(a) {
                var c = void 0;
                void 0 === c && (c = Vu);
                var b = n(a, "navigator") || {};
                c = B(w(b, n), c);
                c = I("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = na(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + Oa(e)
            }, Tu, function(a) {
                a = n(a, "screen") || {};
                return I("x", B(w(a, n), Uu))
            }, function(a) {
                return I("x", um(a) || [])
            }, function(a) {
                a = Lm(a);
                return ba(a) ? I("x", a) : a
            }, function(a) {
                return (a = Nm(a)) ? I("x", B(E(["", ["matches", "media"]], wm), pa(Yr(a)))) : ""
            }]));
            Cb(function(a) {
                return {
                    M: function(c, b) {
                        var d = c.K,
                            e = Na(a).C("fip");
                        e && d && (d.D("fip", e), ae(c, "fip", Gb(e)));
                        b()
                    }
                }
            }, 9);
            aa("h", function(a) {
                return {
                    Ea: function(c, b) {
                        var d = c.yi;
                        re(c) && d && H(a).D("isEU",
                            n(d, "settings.eu"));
                        b()
                    }
                }
            }, 3);
            cd.push(uu);
            Ec.push($u);
            kb.push(ev);
            Y.push(fv);
            hc({
                $i: {
                    ea: "yaDisableGDPR"
                },
                aj: {
                    ea: "yaGDPRLang"
                }
            });
            De.push(function(a, c) {
                return {
                    M: E([a, c], im)
                }
            });
            wg.push("gdpr", "gdpr_popup");
            vg.push(function(a, c) {
                var b = $d(a);
                b = hf(b);
                if (la(zc(iv), b).length) return !0;
                b = c(a, "gdpr");
                return L(b, [Hc, hv])
            });
            De.push(function(a) {
                return {
                    M: function(c, b) {
                        var d = c.ma || {},
                            e;
                        (e = n(a, "document.referrer")) ? (e = Kc(a, e).host, e = gj(e), e = ql + "." + (e || wt)) : e = dc;
                        c.ma = z(d, {
                            Jh: [e]
                        });
                        b()
                    }
                }
            });
            Cb(Ll, 5);
            aa("1", Ll, 6);
            va.c =
                Yc;
            ya.c = Vb;
            aa("h", function(a) {
                return {
                    M: function(c, b) {
                        re(c) ? Il(a).then(Yl, am).then(function(d) {
                            c.H || (c.H = {});
                            c.H.uah = d;
                            b()
                        }, b) : b()
                    }
                }
            }, 7);
            Ec.push(C("hcp", ph));
            kb.push(C("p.ot", lv));
            Y.push(function(a, c) {
                var b = Nl(a),
                    d = N(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Lh = !0;
                if (b = e.Wf) d = Ol(a), y(d, b)
            });
            Ec.push(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Ol(a);
                    ze(a, b, function(e) {
                        e.za.F(d)
                    }, !0)
                }
            });
            wg.push("_ym_sup_debug");
            Ec.unshift(mv);
            if (window.Ya && af) {
                var Pl = Ba.jc;
                window.Ya[Pl] = af;
                Is(window);
                y(v(Rc([window, window.Ya[Pl]]), ha), Pg)
            }
            y(v(Rc([window]), ha), Ec)
        })()
    } catch (af) {};
}).call(this)