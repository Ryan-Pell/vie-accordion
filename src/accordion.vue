<template>
  <Transition @before-enter="close" @leave="close" @enter="open" @before-leave="open" >
    <div v-show="visible" :style="{transition: '150ms ease-out', ...style, overflow: 'hidden'}" :class="class">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, Transition } from 'vue';
import type { CSSProperties, PropType } from 'vue';

export default defineComponent({
  name: "accordion",
  props: {
    visible: { type: Boolean, required: true},
    style: Object as PropType<CSSProperties>,
    class: String,
  },
  components: { Transition },
  methods: {
    close (el: Element) { (el as HTMLElement).style.height = '0' },
    open (el: Element) { (el as HTMLElement).style.height = el.scrollHeight + 'px' }
  }
})
</script>