<template>
    <div class="footerContanerSideBar">
        <div class="footerContentSideBar">
             <div>c 2023 BattleTask.</div>
             <div><a href="#faqSection"> Condition d'utilisation</a> - </div>
             <div><a href="#faqSection"> Politique de confidentialité</a> - </div>
             <div><a href="#faqSection"> Mentions Légales</a> - </div>
             <div><a href="#faqSection"> Gestion des cookies</a> - </div>
             <div><a href="#faqSection"> RGPD</a></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterSectionSideBar'
}
</script>

<style lang="scss">
.footerContanerSideBar{
    display: flex;
    justify-content: left;
    width: 200px;
    // width: 100%;
    padding: 10px;
    background-color: #0e0f19;
    // margin: 100px 0px 20px 0px;
}
.footerContentSideBar{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    // padding: 0% 25% 0% 25%;
    font-size: 10px;
}

.footerContentSideBar div{
    margin-right: 3px;
    min-width: 20px;
    white-space: nowrap;
    margin-top: 5px;
    margin: 5px 2px 0px 3px;
}

</style>
