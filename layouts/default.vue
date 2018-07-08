<template>
  <div>
    <Header/>
    <Hero/>
    <Video />
    <Portabilidade />
    <Surpreenda />
    <Bullets />
    <Mesmice />
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
import Mesmice from '~/components/Mesmice.vue'

export default {
  components: {
    Header,
    Hero,
    Video,
    Portabilidade,
    Surpreenda,
    Bullets,
    Mesmice
  }
}
</script>