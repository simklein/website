<!-- MyTransition.vue -->
<script>
// JavaScript hooks logic...
export default {
  props: {
    duration: {
      type: Number,
      default: 300
    },
    delay: {
      type: Number,
      default: 100
    },
    translation: Array
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0

      if (this.translation) {
        el.style.transform = 'translate(' + this.translation.join(',') + ')'
      }
    },
    onEnter (el) {
      let transitions = 'opacity ' + this.duration + 'ms ease-in-out ' + this.delay + 'ms'

      if (this.translation) {
        transitions += ', transform ' + this.duration + 'ms ease-in-out ' + this.delay + 'ms'
      }

      el.style.transition = transitions

      getComputedStyle(el)

      setTimeout(() => {
        el.style.opacity = 1

        if (this.translation) {
          el.style.transform = 'initial'
        }
      })
    }
  }
}
</script>

<template>
  <!-- wrap the built-in Transition component -->
  <Transition
    name="my-transition"
    appear
    @before-enter="beforeEnter"
    @enter="onEnter">
    <slot></slot> <!-- pass down slot content -->
  </Transition>
</template>

<!--style>
/*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
</style-->
