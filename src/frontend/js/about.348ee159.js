"use strict";
(self["webpackChunkpsqli"] = self["webpackChunkpsqli"] || []).push([
    [443], {
        849: function(e, l, a) {
            a.r(l), a.d(l, {
                default: function() {
                    return b
                }
            });
            var t = a(252),
                i = a(963);
            const o = e => ((0, t.dD)("data-v-2e0b9c30"), e = e(), (0, t.Cn)(), e),
                n = {
                    class: "board-list"
                },
                s = {
                    class: "mb-3"
                },
                c = {
                    class: "mb-3"
                },
                d = o((() => (0, t._)("div", {
                    class: "text-center"
                }, [(0, t._)("button", {
                    type: "submit",
                    class: "btn btn-color px-5 mb-5 w-100"
                }, "Submit")], -1)));

            function r(e, l, a, o, r, m) {
                return (0, t.wg)(), (0, t.iD)("div", n, [(0, t._)("form", {
                    onSubmit: l[2] || (l[2] = (0, i.iM)(((...e) => m.submit && m.submit(...e)), ["prevent"])),
                    class: "card-body cardbody-color p-lg-5"
                }, [(0, t._)("div", s, [(0, t.wy)((0, t._)("input", {
                    type: "email",
                    class: "form-control",
                    id: "email",
                    "onUpdate:modelValue": l[0] || (l[0] = e => r.email = e),
                    placeholder: "examble@example.com"
                }, null, 512), [
                    [i.nr, r.email]
                ])]), (0, t._)("div", c, [(0, t._)("input", {
                    class: "form-control",
                    id: "customFile",
                    type: "file",
                    onChange: l[1] || (l[1] = (...e) => m.handleFileUpload && m.handleFileUpload(...e))
                }, null, 32)]), d], 32)])
            }
            var m = {
                    data() {
                        return {
                            email: "example@example.com",
                            file: ""
                        }
                    },
                    methods: {
                        submit() {
                            var e = new FormData;
                            e.append("file", this.file), fetch("/echo/json/", {
                                method: "POST",
                                body: e
                            })
                        },
                        handleFileUpload(e) {
                            this.file = e.target.files[0]
                        }
                    }
                },
                p = a(744);
            const u = (0, p.Z)(m, [
                ["render", r],
                ["__scopeId", "data-v-2e0b9c30"]
            ]);
            var b = u
        }
    }
]);
//# sourceMappingURL=about.348ee159.js.map