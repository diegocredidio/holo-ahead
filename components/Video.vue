<template>
    <section>
        <section class="hero-video">
            <video class="play-video" playsinline autoplay muted loop width="100%">
                <source src="~/assets/videos/holo-sample.mp4" type="video/mp4">
            </video>
            <div class="video-overlay">
                <div>
                    <div class="video-logo">
                        <img src="~/assets/images/holo-logo-small.png" alt="">
                    </div>
                </div>
                <div>
                    <div class="video-person">
                        <img src="~/assets/images/person.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
</script>

<style lang="scss">
.hero-video {
  position: relative;
  width: 100%;
  min-height: 500px;
  background-color: black;
  background-image: url('~/assets/images/video-bg.png');
  background-position: center center;
  background-repeat: no-repeat;
}
.play-video {
  position: relative;
  max-height: 600px;
  z-index: 100;
  margin: 20px 0;
}
.video-overlay {
  position: absolute;
  bottom: 0px;
  z-index: 110;
  width: 90vw;
}
.video-logo {
  margin-left: 4vw;
  margin-bottom: -20vw;
  img {
    height: 10vw;
  }
}
.video-person {
  float: right;
  img {
    height: 25vw;
  }
}
</style>
