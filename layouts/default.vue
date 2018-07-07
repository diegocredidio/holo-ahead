<template>
  <div>
    <Header/>
    <Hero/>
    <Video />
    <Portabilidade />
    <Surpreenda />
    <Bullets />
    <nuxt/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Video from '~/components/Video.vue'
import Portabilidade from '~/components/Portabilidade.vue'
import Surpreenda from '~/components/Surpreenda.vue'
import Bullets from '~/components/Bullets.vue'

export default {
  components: {
    Header,
    Hero,
    Video,
    Portabilidade,
    Surpreenda,
    Bullets
  }
}
</script>