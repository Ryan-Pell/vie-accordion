# @ryanpell/vue-accordion

Accordion Transition animation for Vue 3

## Install
**node.js**:
```bash
npm install @ryanpell/vue-accordion --save
```

## Usage
Below is a simple example of the vue-accordion. The UI click of the details DIV will toggle the state of the accordion.

```vue
<template> 
  <div>
    <div @click="state = !state">
      <div style="flex: 1">Details</div>
    </div>
    <accordion :visible="state" style="padding: 0px 20px;">
      <div>Content of Accordion Details</div>
    </accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import accordion from 'vue-accordion-dev'
// import { accordion } from '@ryanpell/vue-accordion';

export default defineComponent({
  components: { accordion },
  data() {
    return {
      state: false
    }
  }
})
</script>
```

### Props
The component has the following props that can passed 