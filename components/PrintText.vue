<template>
<div>
  
</div>
</template>

<script >

import { reactive,toRefs } from 'vue'
export default {
  name:'PrintText',
  components: {
  },
  props: {
    typingTexts: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    console.log('=================',props.typingTexts)
    const data=reactive({typingTexts:props.typingTexts})
    
    return {...toRefs(data)};
  },
  
};
</script>

<style lang="scss" scoped></style>
