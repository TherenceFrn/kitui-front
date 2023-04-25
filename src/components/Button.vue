<template>
  <button class="btn btn-primary" :style="{
      backgroundColor,
      margin: `${margin}px 0`,
      borderRadius: `${borderRadius}px`,
      fontSize: `${fontSize}px`,
      fontFamily,
      color: textColor,
      borderColor: backgroundColor
  }">Click me!</button>
</template>

<script>
import { contrastingColor } from "@/assets/kitUiFunctions"

export default {
    name: "Button",
    props: {
        backgroundColor: {
            type: String,
            default: '#D81E5B'
        },
        margin: {
            type: Number,
            default: 8
        },
        borderRadius: {
            type: Number,
            default: 8
        },
        fontSize: {
            type: Number,
            default: 16
        },
        fontFamily: {
            type: String,
            default: 'sans-serif'
        }
    },
    computed: {
        textColor() {
              return contrastingColor(this.backgroundColor)
        }
    },
    methods: {
    }
}
</script>