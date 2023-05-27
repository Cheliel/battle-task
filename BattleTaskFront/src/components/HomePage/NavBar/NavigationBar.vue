<template>
  <header class="navigationBar">
    <div class="logo">
      <div class="logoImage"></div>
      <div class="tilteLogo">BattleTask</div>
    </div>
    <div class="menu">
      <router-link to="/note"
        ><a href="#presentation" class="menuItem">PRESENTATION</a></router-link
      >
      <router-link to="/collection">
        <a href="" class="menuItem">FONCTIONNALITE</a></router-link
      >
      <router-link to="/toDoList"
        ><a href="#faqSection" class="menuItem">FAQ</a></router-link
      >
    </div>
    <BoutonConnexion />
  </header>
</template>

<script>
import BoutonConnexion from "./BoutonConnexion.vue";

export default {
  name: "NavitagionBar",
  components: {
    BoutonConnexion,
  },
};
</script>

<style lang="scss">
.navigationBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0px 20px 20px 20px;
  width: 97%;
}

.navigationBar .logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
}

.logoImage {
  height: 25px;
  width: 25px;
  background-image: url("../../../assets/img/battletasklogo.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.navigationBar .tilteLogo {
  font-family: "bebas";
  font-size: 15px;
  color: #44474b;
  margin-left: 5px;
}

.navigationBar .menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
}

.navigationBar .menu .menuItem {
  font-size: 13px;
  font-weight: bold;
  color: #44474b;
  font-family: "oxygen";
  text-decoration: none;
}

@media screen and (min-width: 1200px) {
  .navigationBar {
    height: 90px;
  }
  .logoImage {
    height: 50px;
    width: 50px;
  }
  .navigationBar .logo {
    height: 90px;
  }
  .navigationBar .tilteLogo {
    font-size: 40px;
  }
  .navigationBar .menu .menuItem {
    font-size: 17px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1199px) {
  .navigationBar {
    height: 70px;
  }
  .logoImage {
    height: 30px;
    width: 30px;
  }
  .navigationBar .logo {
    height: 40px;
  }
  .navigationBar .tilteLogo {
    font-size: 20px;
  }
  .navigationBar .menu .menuItem {
    font-size: 15px;
  }
}
</style>
