import { defineComponent as a, Transition as s, openBlock as l, createBlock as i, withCtx as c, withDirectives as p, createElementVNode as d, normalizeStyle as f, normalizeClass as v, renderSlot as h, vShow as m } from "vue";
const u = a({
  name: "accordion",
  props: {
    visible: { type: Boolean, required: !0 },
    style: Object,
    class: { type: [String, Array], required: !1 }
  },
  components: { Transition: s },
  methods: {
    close(e) {
      e.style.height = "0";
    },
    open(e) {
      e.style.height = e.scrollHeight + "px";
    }
  }
}), y = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [t, r] of n)
    o[t] = r;
  return o;
};
function B(e, n, o, t, r, g) {
  return l(), i(s, {
    onBeforeEnter: e.close,
    onLeave: e.close,
    onEnter: e.open,
    onBeforeLeave: e.open
  }, {
    default: c(() => [
      p(d("div", {
        style: f({ transition: "150ms ease-out", ...e.style, overflow: "hidden" }),
        class: v(e.class)
      }, [
        h(e.$slots, "default")
      ], 6), [
        [m, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onLeave", "onEnter", "onBeforeLeave"]);
}
const $ = /* @__PURE__ */ y(u, [["render", B]]);
export {
  $ as default
};
