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
import accordion from '@ryanpell/vue-accordion';

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
The component has the following props that can passed;

#### Visible
**Type: Boolean**  
**Require**  
This will control the state of the accordion content and is required for the operation of the component.

#### Style
**Type: CSSProperties**  
This can be used to pass any addition style though to the container element inline. The transition style can also be set from here.

#### Class
**Type: String *or* String[]**  
This can be used to pass though any class styling.
