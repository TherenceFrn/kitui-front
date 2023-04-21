<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: {
        RouterLink,
        RouterView
    }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>