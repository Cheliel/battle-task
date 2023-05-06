<template>
    <div class="buttonConnexion">
      <router-link to="/connexion">  <button>CONNEXION<div class="decoration"></div></button> </router-link>
    </div>
</template>

<script>

export default {
  name: 'NavitagionBar',
  components: {
  }
}

</script>

<style lang="scss">

.buttonConnexion{
  min-width: 90px;
  min-height: 12px;
}

.buttonConnexion button{
    right: 0;
    top: 0;
    padding-right: 50px;
    font-family: "oxygen";
    font-weight: bold;
    width: 120px;
    height: 30px;
    background-color: #ffff;
    border-radius: 15px;
    border : none;
}

.buttonConnexion button:hover{
  cursor: pointer;
}

  .buttonConnexion button .decoration{
      background-image: url("../../../assets/img/epees.png");
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      height: 30px;
      width: 30px;
      background-color: #F1414A;
      border-radius: 30px;
      margin-left: 90px;
      margin-top: -23px;
  }

@media screen and (min-width: 1200px){
  .buttonConnexion{
  min-width: 135px;
  }
  .buttonConnexion button{
    width: 135px;
    height: 40px;
  }
  .buttonConnexion button .decoration{
    height: 45px;
    width: 45px;
    margin-left: 95px;
    margin-top: -31px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1199){
  .buttonConnexion{
    min-width: 100px;
  }
  .buttonConnexion button{
    width: 135px;
    height: 40px;
  }
  .buttonConnexion button .decoration{
    height: 40px;
    width: 40px;
    margin-left: 92px;
    margin-top: -28px;
  }
}

</style>
