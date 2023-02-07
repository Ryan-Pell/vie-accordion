import { defineComponent as a, Transition as r, openBlock as l, createBlock as i, withCtx as c, withDirectives as p, createElementVNode as d, normalizeStyle as f, normalizeClass as v, renderSlot as h, vShow as m } from "vue";
const u = a({
  name: "accordion",
  props: ["visible", "style", "class"],
  components: { Transition: r },
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
  for (const [t, s] of n)
    o[t] = s;
  return o;
};
function B(e, n, o, t, s, E) {
  return l(), i(r, {
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
const g = /* @__PURE__ */ y(u, [["render", B]]);
export {
  g as default
};
