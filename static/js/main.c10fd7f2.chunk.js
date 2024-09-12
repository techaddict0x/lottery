(this.webpackJsonpdinolottery = this.webpackJsonpdinolottery || []).push([
    [0], {
        315: function(e, t, n) {},
        317: function(e, t, n) {},
        318: function(e, t) {},
        360: function(e, t) {},
        362: function(e, t) {},
        385: function(e, t) {},
        387: function(e, t) {},
        399: function(e, t) {},
        400: function(e, t) {},
        422: function(e, t) {},
        429: function(e, t) {},
        431: function(e, t) {},
        536: function(e, t) {},
        539: function(e, t) {},
        547: function(e, t) {},
        564: function(e, t) {},
        565: function(e, t) {},
        635: function(e, t) {},
        636: function(e, t) {},
        737: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(15),
                s = n.n(a),
                i = n(296),
                c = n.n(i),
                r = (n(315), n(316), n(317), n(1)),
                l = n(4),
                u = n(21),
                o = n(308),
                p = n(305),
                d = n.n(p),
                b = function() {
                    return new d.a({
                        cacheProvider: !0,
                        providerOptions: {
                            walletconnect: {
                                package: o.a,
                                options: {
                                    rpc: {
                                        56: "https://bsc-dataseed.binance.org"
                                    }
                                }
                            }
                        }
                    })
                },
                y = n(69),
                j = n.n(y),
                m = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "_id",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "logshh",
                    type: "event"
                }, {
                    inputs: [],
                    name: "USDTInterface",
                    outputs: [{
                        internalType: "contract IERC20",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "allWinner",
                    outputs: [{
                        internalType: "address[]",
                        name: "",
                        type: "address[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "allWinner1",
                    outputs: [{
                        internalType: "address[]",
                        name: "",
                        type: "address[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "allWinner2",
                    outputs: [{
                        internalType: "address[]",
                        name: "",
                        type: "address[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "announceLottery",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "announceLottery1",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "announceLottery2",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getLottery1Length",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getLottery2Length",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getLotteryLength",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "ad",
                        type: "address"
                    }],
                    name: "howMany",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "initization",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "joinLottery",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "joinLottery1",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_amount",
                        type: "uint256"
                    }],
                    name: "joinLottery2",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "lotteryBalance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_maxNumbers",
                        type: "uint256"
                    }],
                    name: "setMaximmNumbers",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_maxNumbers",
                        type: "uint256"
                    }],
                    name: "setMaximmNumbers1",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_maxNumbers",
                        type: "uint256"
                    }],
                    name: "setMaximmNumbers2",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_valueInEther",
                        type: "uint256"
                    }],
                    name: "setTicketPrice",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_valueInEther",
                        type: "uint256"
                    }],
                    name: "setTicketPrice1",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_valueInEther",
                        type: "uint256"
                    }],
                    name: "setTicketPrice2",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "startLottery",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "tokenAdress",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicket",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicket1",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicket2",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicketPrice",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicketPrice1",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "viewTicketPrice2",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "winnerLottery",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "winnerLottery1",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    name: "winnerLottery2",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }];

            function O(e) {
                return new e.eth.Contract(m, "0xc8c74e2c6a355d6a4760e6442fc74e6b698103d0")
            }
            var x = [{
                inputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Approval",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256"
                }],
                name: "Transfer",
                type: "event"
            }, {
                constant: !0,
                inputs: [],
                name: "_decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "_name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "_symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }],
                name: "allowance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "approve",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [{
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "burn",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    internalType: "uint8",
                    name: "",
                    type: "uint8"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "subtractedValue",
                    type: "uint256"
                }],
                name: "decreaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "getOwner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "spender",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "addedValue",
                    type: "uint256"
                }],
                name: "increaseAllowance",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "mint",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "name",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "symbol",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "totalSupply",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                payable: !1,
                stateMutability: "view",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transfer",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "sender",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "transferFrom",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }, {
                constant: !1,
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                payable: !1,
                stateMutability: "nonpayable",
                type: "function"
            }];

            function h(e) {
                return new e.eth.Contract(x, "0x55d398326f99059fF775485246999027B3197955")
            }
            var f = n.p + "static/media/logo.png",
                v = n.p + " ",
                g = n(0),
                w = b(),
                T = function() {
                    var e = Object(a.useState)(),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        s = t[1],
                        i = Object(a.useState)(),
                        c = Object(u.a)(i, 2),
                        o = c[0],
                        p = c[1],
                        d = Object(a.useState)(),
                        b = Object(u.a)(d, 2),
                        y = b[0],
                        m = b[1],
                        x = Object(a.useState)(!1),
                        T = Object(u.a)(x, 2),
                        M = T[0],
                        N = T[1],
                        k = Object(a.useState)(),
                        S = Object(u.a)(k, 2),
                        C = S[0],
                        A = S[1],
                        L = Object(a.useState)(!0),
                        B = Object(u.a)(L, 2),
                        D = B[0],
                        E = B[1],
                        P = Object(a.useState)(null),
                        F = Object(u.a)(P, 2),
                        I = (F[0], F[1], Object(a.useState)(null)),
                        W = Object(u.a)(I, 2),
                        _ = (W[0], W[1]),
                        U = Object(a.useState)(null),
                        J = Object(u.a)(U, 2),
                        z = J[0],
                        R = J[1],
                        Y = Object(a.useState)("CONNECT"),
                        G = Object(u.a)(Y, 2),
                        V = G[0],
                        H = G[1],
                        X = Object(a.useState)(0),
                        q = Object(u.a)(X, 2),
                        K = q[0],
                        Q = q[1],
                        Z = Object(a.useState)(0),
                        $ = Object(u.a)(Z, 2),
                        ee = $[0],
                        te = $[1],
                        ne = Object(a.useState)(0),
                        ae = Object(u.a)(ne, 2),
                        se = ae[0],
                        ie = ae[1],
                        ce = Object(a.useState)(0),
                        re = Object(u.a)(ce, 2),
                        le = re[0],
                        ue = re[1],
                        oe = Object(a.useState)(0),
                        pe = Object(u.a)(oe, 2),
                        de = pe[0],
                        be = pe[1],
                        ye = Object(a.useState)(0),
                        je = Object(u.a)(ye, 2),
                        me = je[0],
                        Oe = je[1],
                        xe = Object(a.useState)(0),
                        he = Object(u.a)(xe, 2),
                        fe = he[0],
                        ve = he[1],
                        ge = Object(a.useState)(0),
                        we = Object(u.a)(ge, 2),
                        Te = we[0],
                        Me = we[1],
                        Ne = Object(a.useState)(0),
                        ke = Object(u.a)(Ne, 2),
                        Se = ke[0],
                        Ce = ke[1],
                        Ae = Object(a.useState)(0),
                        Le = Object(u.a)(Ae, 2),
                        Be = Le[0],
                        De = Le[1],
                        Ee = Object(a.useState)(0),
                        Pe = Object(u.a)(Ee, 2),
                        Fe = Pe[0],
                        Ie = Pe[1],
                        We = Object(a.useState)(0),
                        _e = Object(u.a)(We, 2),
                        Ue = _e[0],
                        Je = _e[1],
                        ze = Object(a.useState)(0),
                        Re = Object(u.a)(ze, 2),
                        Ye = Re[0],
                        Ge = Re[1],
                        Ve = Object(a.useState)(0),
                        He = Object(u.a)(Ve, 2),
                        Xe = He[0],
                        qe = He[1],
                        Ke = Object(a.useState)(""),
                        Qe = Object(u.a)(Ke, 2),
                        Ze = Qe[0],
                        $e = Qe[1],
                        et = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e() {
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, w.clearCachedProvider();
                                        case 2:
                                            if (!C || !C.provider || "function" != typeof C.provider.disconnect) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 5, C.provider.disconnect();
                                        case 5:
                                            N(!1), window.location.reload();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        tt = Object(a.useCallback)(Object(l.a)(Object(r.a)().mark((function e() {
                            var t, n, a;
                            return Object(r.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, w.connect();
                                    case 2:
                                        return t = e.sent, A(new j.a(t)), n = t.selectedAddress ? t.selectedAddress : t.accounts[0], a = nt(n), m(new j.a(t)), e.t0 = s, e.next = 10, O(new j.a(t));
                                    case 10:
                                        return e.t1 = e.sent, (0, e.t0)(e.t1), e.t2 = p, e.next = 15, h(new j.a(t));
                                    case 15:
                                        e.t3 = e.sent, (0, e.t2)(e.t3), _([n]), R(n), N(!0), H(a), t.on("chainChanged", (function(e) {
                                            console.log("chain changed to ".concat(e, "! updating providers")), A(new j.a(t))
                                        })), t.on("accountsChanged", (function() {
                                            console.log("account changed!"), A(new j.a(t))
                                        })), t.on("disconnect", (function(e, t) {
                                            console.log(e, t), et()
                                        }));
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [A]);
                    Object(a.useEffect)((function() {
                        setInterval((function() {
                            E((function(e) {
                                return !e
                            }))
                        }), 2e3)
                    }), []), Object(a.useEffect)((function() {
                        w.cachedProvider && tt()
                    }), []);
                    var nt = function(e) {
                        return e ? e.substr(0, 3) + "..." + e.substr(38, 41) : ""
                    };
                    Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e() {
                                var t, a, s, i, c, l, u, o, p, d;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!M || !n) {
                                                e.next = 43;
                                                break
                                            }
                                            return e.next = 3, n.methods.viewTicket().call();
                                        case 3:
                                            return t = e.sent, e.next = 6, n.methods.viewTicket1().call();
                                        case 6:
                                            return a = e.sent, e.next = 9, n.methods.viewTicket2().call();
                                        case 9:
                                            return s = e.sent, Q(t), te(a), ie(s), e.next = 15, n.methods.getLotteryLength().call();
                                        case 15:
                                            return i = e.sent, e.next = 18, n.methods.getLottery1Length().call();
                                        case 18:
                                            return c = e.sent, e.next = 21, n.methods.getLottery2Length().call();
                                        case 21:
                                            return l = e.sent, ue(i), be(c), Oe(l), e.next = 27, n.methods.viewTicketPrice().call();
                                        case 27:
                                            return u = e.sent, e.next = 30, n.methods.viewTicketPrice1().call();
                                        case 30:
                                            return o = e.sent, e.next = 33, n.methods.viewTicketPrice2().call();
                                        case 33:
                                            return p = e.sent, ve(u / 1e18), Me(o / 1e18), Ce(p / 1e18), e.next = 39, n.methods.howMany(z).call();
                                        case 39:
                                            d = e.sent, De(d[0]), Ie(d[1]), Je(d[2]);
                                        case 43:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [D]), Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e() {
                                var t, n;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!M || !o) {
                                                e.next = 10;
                                                break
                                            }
                                            return "0xc8c74e2c6a355d6a4760e6442fc74e6b698103d0", e.next = 4, o.methods.allowance(z, "0xc8c74e2c6a355d6a4760e6442fc74e6b698103d0").call();
                                        case 4:
                                            return t = e.sent, Ge(t), e.next = 8, o.methods.balanceOf(z).call();
                                        case 8:
                                            n = e.sent, qe(n / 1e18);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [D]);
                    var at = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e(t) {
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !M || !o) {
                                                e.next = 10;
                                                break
                                            }
                                            return $e("Approving USDT"), "0xc8c74e2c6a355d6a4760e6442fc74e6b698103d0", "99999999999999999999999999999999999999999999999999", e.next = 7, o.methods.approve("0xc8c74e2c6a355d6a4760e6442fc74e6b698103d0", "99999999999999999999999999999999999999999999999999").send({
                                                from: z
                                            });
                                        case 7:
                                            $e("Successfully Approved"), e.next = 11;
                                            break;
                                        case 10:
                                            console.log("connect wallet");
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        st = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e(t) {
                                var a;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !M || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return $e("Joining Silver Lottery"), a = y.utils.toWei("5"), e.next = 6, n.methods.joinLottery(a).send({
                                                from: z
                                            });
                                        case 6:
                                            $e("Successfully Joined"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("Connect Wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        it = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e(t) {
                                var a;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !M || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return $e("Joining Gold Lottery"), a = y.utils.toWei("10"), e.next = 6, n.methods.joinLottery1(a).send({
                                                from: z
                                            });
                                        case 6:
                                            $e("Successfully Joined"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("Connect Wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ct = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e(t) {
                                var a;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.preventDefault(), !M || !n) {
                                                e.next = 9;
                                                break
                                            }
                                            return $e("Joining Diamond Lottery"), a = y.utils.toWei("50"), e.next = 6, n.methods.joinLottery2(a).send({
                                                from: z
                                            });
                                        case 6:
                                            $e("Successfully Joined"), e.next = 10;
                                            break;
                                        case 9:
                                            console.log("Connect Wallet");
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        rt = function() {
                            var e = Object(l.a)(Object(r.a)().mark((function e(t) {
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.preventDefault(), $e("");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(g.jsxs)(g.Fragment, {
                        children: [Object(g.jsx)("nav", {
                            className: "navbar navbar-expand-sm navbar-dark",
                            style: {
                                background: "black"
                            },
                    
                            children: Object(g.jsxs)("div", {
                                className: "container-fluid",
                                children: [Object(g.jsx)("a", {
                                    className: "navbar-brand",
                                    href: "",
                                    children: Object(g.jsx)("img", {
                                        src: "" ,
                                        alt: "",
                                        className: "img-fluid",
                                        style: {
                                            width: "200px"
                                        }
                            
                                    })
                                }), Object(g.jsxs)("ul", {
                                    className: "navbar-nav me-auto",
                                    children: [Object(g.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(g.jsx)("a", {
                                            className: "nav-link",
                                            href: " ",
                                            children: " "
                                        })
                                    }), Object(g.jsx)("li", {
                                        className: "nav-item",
                                        children: Object(g.jsx)("a", {
                                            className: "nav-link",
                                            href: " ",
                                            children: " "
                                        })
                                    })]
                                
                                }), Object(g.jsxs)("button", {
                                    className: "btn btn-primary btn-lg btnd",
                                    style: {
                                        background: "#48b090",
                                        color: "black",
                                        border: "1px solid #fff"
                                    },
                                    onClick: tt,
                                    children: [Object(g.jsx)("span", {
                                        className: "fas fa-wallet"
                                    }), " ", V] 
                                    
                                })]
                            })
                        }), Object(g.jsx)("br", {}), Object(g.jsx)("div", {
                            className: "container",
                            children: Object(g.jsxs)("div", {
                                className: "row",
                                children: [Object(g.jsxs)("div", {
                                    className: "col-sm-9",
                                    children: [Object(g.jsx)("h1", {
                                        children: "USDT Lottery"
                                    }), Object(g.jsx)("p", {
                                        children: "Instant Win, Instant Announcement, Immediate Transfer"
                                    })]
                                }), Object(g.jsxs)("div", {
                                    className: "col-sm-3",
                                    children: [Object(g.jsx)("h1", {
                                        children: "Your Balance"
                                    }), Object(g.jsxs)("p", {
                                        children: [Number(Xe).toFixed(2), " USDT"]
                                    })]
                                })]
                            })
                        }), Object(g.jsx)("br", {}), " ", Object(g.jsxs)("div", {
                            className: "container",
                            children: ["" !== Ze ? Object(g.jsx)(g.Fragment, {
                                children: Object(g.jsx)("center", {
                                    children: Object(g.jsxs)("div", {
                                        className: "alert alert-warning alert-dismissible",
                                        children: [Object(g.jsx)("p", {
                                            onClick: rt,
                                            className: "badge bg-dark",
                                            style: {
                                                float: "right",
                                                cursor: "pointer"
                                            },
                                            children: "X"
                                        }), Ze]
                                    })
                                })
                            }) : Object(g.jsx)(g.Fragment, {}), Object(g.jsxs)("div", {
                                className: "row",
                                children: [Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [" ", Object(g.jsxs)("center", {
                                                children: [" ", Object(g.jsxs)("h4", {
                                                    children: ["Winning Prize ", Object(g.jsx)("br", {}), " 50 USDT"]
                                                }), Object(g.jsx)("p", {
                                                    style: {
                                                        fontSize: "8px"
                                                    },
                                                    children: "30% Winner tax goes to Dev & Buyback Wallet"
                                                })]
                                            })]
                                        }), " "]
                                    })
                                }), Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [" ", Object(g.jsxs)("center", {
                                                children: [" ", Object(g.jsxs)("h4", {
                                                    children: ["Winning Prize ", Object(g.jsx)("br", {}), " 100 USDT"]
                                                }), Object(g.jsx)("p", {
                                                    style: {
                                                        fontSize: "8px"
                                                    },
                                                    children: "30% Winner tax goes to Dev & Buyback Wallet"
                                                })]
                                            })]
                                        }), " "]
                                    })
                                }), Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [" ", Object(g.jsxs)("center", {
                                                children: [" ", Object(g.jsxs)("h4", {
                                                    children: ["Winning Prize ", Object(g.jsx)("br", {}), " 200 USDT"]
                                                }), Object(g.jsx)("p", {
                                                    style: {
                                                        fontSize: "8px"
                                                    },
                                                    children: "30% Winner tax goes to Dev & Buyback Wallet"
                                                })]
                                            })]
                                        }), " "]
                                    })
                                })]
                            }), Object(g.jsx)("br", {}), Object(g.jsxs)("div", {
                                className: "row",
                                children: [Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsx)("div", {
                                            className: "card-header",
                                            children: "Silver Lottery"
                                        }), Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(g.jsx)("table", {
                                                className: "table",
                                                children: Object(g.jsxs)("tbody", {
                                                    children: [Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Entry Fee"
                                                        }), Object(g.jsxs)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: [fe, " USDT"]
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Max Participants"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: K
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Participated"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: le
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Open Slots"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: K - le
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Your Entries"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Be
                                                        })]
                                                    })]
                                                })
                                            }), Object(g.jsx)("center", {
                                                children: Ye > 0 ? Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-danger btn-lg",
                                                        onClick: st,
                                                        children: "Participate"
                                                    })
                                                }) : Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-success btn-lg",
                                                        onClick: at,
                                                        children: "Enable"
                                                    })
                                                })
                                            }), "  "]
                                        })]
                                    })
                                }), Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsx)("div", {
                                            className: "card-header",
                                            children: "Gold Lottery"
                                        }), Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(g.jsx)("table", {
                                                className: "table",
                                                children: Object(g.jsxs)("tbody", {
                                                    children: [Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Entry Fee"
                                                        }), Object(g.jsxs)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: [Te, " USDT"]
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Max Participants"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: ee
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Participated"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: de
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Open Slots"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: ee - de
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Your Entries"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Fe
                                                        })]
                                                    })]
                                                })
                                            }), Object(g.jsx)("center", {
                                                children: Ye > 0 ? Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-danger btn-lg",
                                                        onClick: it,
                                                        children: "Participate"
                                                    })
                                                }) : Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-success btn-lg",
                                                        onClick: at,
                                                        children: "Enable"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), Object(g.jsx)("div", {
                                    className: "col-sm-4",
                                    children: Object(g.jsxs)("div", {
                                        className: "card",
                                        children: [Object(g.jsx)("div", {
                                            className: "card-header",
                                            children: "Diamond Lottery"
                                        }), Object(g.jsxs)("div", {
                                            className: "card-body",
                                            children: [Object(g.jsx)("table", {
                                                className: "table",
                                                children: Object(g.jsxs)("tbody", {
                                                    children: [Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Entry Fee"
                                                        }), Object(g.jsxs)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: [Se, " USDT"]
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Max Participants"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: se
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Participated"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: me
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Open Slots"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: se - me
                                                        })]
                                                    }), Object(g.jsxs)("tr", {
                                                        children: [Object(g.jsx)("td", {
                                                            children: "Your Entries"
                                                        }), Object(g.jsx)("td", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: Ue
                                                        })]
                                                    })]
                                                })
                                            }), Object(g.jsx)("center", {
                                                children: Ye > 0 ? Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-danger btn-lg",
                                                        onClick: ct,
                                                        children: "Participate"
                                                    })
                                                }) : Object(g.jsx)(g.Fragment, {
                                                    children: Object(g.jsx)("button", {
                                                        className: "btn btn-success btn-lg",
                                                        onClick: at,
                                                        children: "Enable"
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), Object(g.jsx)("br", {}), Object(g.jsxs)("center", {
                            children: [Object(g.jsx)("h2", {
                                children: " "
                            }), Object(g.jsx)("a", {
                                href: " ",
                                children: Object(g.jsx)("img", {
                                    src: v,
                                    alt: v,
                                    className: " ",
                                    style: {
                                        width: "100px"
                                    }
                                })
                            })]
                        }), Object(g.jsx)("br", {}), Object(g.jsxs)("center", {
                            children: [" ", Object(g.jsx)("h4", {
                                children: "To check Winners Please Reffer To Lottery Smart Contract "
                            })]
                        }), Object(g.jsx)("br", {}), Object(g.jsx)("center", {
                            children: Object(g.jsxs)("h5", {
                                children: [" ", Object(g.jsxs)("a", {
                                    href: "https://twitter.com/USDT_",
                                    style: {
                                        color: "#ffc107",
                                        textDecoration: "none"
                                    },
                                    children: [Object(g.jsx)("i", {
                                        class: "fa fa-twitter"
                                    }), " Twitter "]
                                }), " || ", Object(g.jsxs)("a", {
                                    href: "https://t.me/USDTofficialchat",
                                    style: {
                                        color: "#ffc107",
                                        textDecoration: "none"
                                    },
                                    children: [Object(g.jsx)("i", {
                                        class: "fa fa-telegram"
                                    }), " Telegram "]
                                
                                }), "|| ", Object(g.jsxs)("a", {
                                    href: "https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955#code",
                                    style: {
                                        color: "#ffc107",
                                        textDecoration: "none"
                                    },
                                    children: [Object(g.jsx)("i", {
                                        class: "fa fa-line-chart"
                                    }), " Contract "]
                                })]
                            })
                        }), Object(g.jsx)("br", {})]
                    })
                },
                M = function() {
                    return Object(g.jsx)(g.Fragment, {
                        children: Object(g.jsx)(T, {})
                    })
                },
                N = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 743)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            s = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        n(e), a(e), s(e), i(e), c(e)
                    }))
                };
            c.a.render(Object(g.jsx)(s.a.StrictMode, {
                children: Object(g.jsx)(M, {})
            }), document.getElementById("root")), N()
        }
    },
    [
        [737, 1, 2]
    ]
]);
//# sourceMappingURL=main.c10fd7f2.chunk.js.map