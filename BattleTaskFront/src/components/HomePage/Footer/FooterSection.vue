<template>
  <div class="footerContaner">
    <div class="footerContent">
      <div>c 2023 BattleTask.</div>
      <div><a href="#faqSection"> Condition d'utilisation</a> -</div>
      <div><a href="#faqSection"> Politique de confidentialité</a> -</div>
      <div><a href="#faqSection"> Mentions Légales</a> -</div>
      <div><a href="#faqSection"> Gestion des cookies</a> -</div>
      <div><a href="#faqSection"> RGPD</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss">
.footerContaner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  // width: 100%;
  padding: 10px;
  // background-color: #dcdef5;
  // margin: 100px 0px 20px 0px;
}
.footerContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  // padding: 0% 25% 0% 25%;
  font-size: 10px;
}

.footerContent div {
  margin-right: 3px;
  min-width: 20px;
  white-space: nowrap;
  margin-top: 5px;
  margin: 5px 2px 0px 3px;
}
</style>
