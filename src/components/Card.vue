<template>
  <div class="card" :style="{
      margin: `${margin}px`,
      borderRadius: `${borderRadius}px`
  }">
      <div class="card-body">
          <slot name="cardBody"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        margin: {
            type: Number,
            default: 8
        },
        borderRadius: {
            type: Number,
            default: 8
        }
    }
}
</script>