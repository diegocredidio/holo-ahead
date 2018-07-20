<template>
    <section>
        <div class="header-video">
            <video autoplay muted loop playsinline poster="/header.jpg" style="margin-top: 40px;">
                <!-- <video autoplay="true" loop="true" muted="" style="" poster="~/assets/images/header.jpg"> -->
                <source src="~/assets/videos/holo-hero.mp4" type="video/mp4">
            </video>
        </div>
        <!-- HERO IMAGE -->
        <section class="is-dark hero-image">
        </section>
    </section>

</template>


<style lang="scss">
.hero-offset-left {
  position: absolute;
  margin-top: 300px;
  padding-left: 20px;
  text-align: right;
  h1 {
  }
}
.header-video {
  background-color: black;
  position: relative;
  overflow: hidden;
}
.header-video video {
  width: 100%;
}
</style>