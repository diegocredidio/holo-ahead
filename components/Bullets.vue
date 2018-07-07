<template>
    <section class="is-dark bullets-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 logo-bullets">
                    <div>
                        <img src="~/assets/images/holo-logo-small.png" class="">
                    </div>
                </div>
                <div class="col-sm-9 advantages-list">
                    <ul>
                        <li>
                            <div class="d-flex">
                                <div class="bullet-icon">
                                    <img src="~/assets/images/bul1.png">
                                </div>
                                <div class="bullet-content">
                                    <div class="bullet-title">EFETIVIDADE</div>
                                    <div class="bullet-text">Um formato inédito. Atenção sem precedente</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="bullet-icon">
                                    <img src="~/assets/images/bul2.png">
                                </div>
                                <div class="bullet-content">
                                    <div class="bullet-title">BOCA A BOCA</div>
                                    <div class="bullet-text">Sua campanha no centro da discussão. Ganhe alcance e relevância espontânea nas redes sociais de eleitores surpresos</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="bullet-icon">
                                    <img src="~/assets/images/bul3.png">
                                </div>
                                <div class="bullet-content">
                                    <div class="bullet-title">BAIXO INVESTIMENTO</div>
                                    <div class="bullet-text">Custo diário semelhante à contratação de 01 cabo eleitoral</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="bullet-icon">
                                    <img src="~/assets/images/bul4.png">
                                </div>
                                <div class="bullet-content">
                                    <div class="bullet-title"> MOBILIDADE</div>
                                    <div class="bullet-text">Sua mensagem com destaque em qualquer lugar</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-flex">
                                <div class="bullet-icon">
                                    <img src="~/assets/images/bul5.png">
                                </div>
                                <div class="bullet-content">
                                    <div class="bullet-title"> CAMPANHA LIMPA</div>
                                    <div class="bullet-text">Impacte apenas o seu eleitorado e não o meio ambiente</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.bullets-bg {
  width: 100%;
  min-height: 500px;
  background: url('~/assets/images/bg-praia.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 50px 0;
  // background-attachment: fixed;
}
.logo-bullets {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.advantages-list {
  ul {
    li {
      color: white;
      list-style: none;
      margin: 30px 0;
    }
  }
}
.bullet-icon {
  img {
    width: 50px;
    margin-right: 10px;
  }
}
</style>