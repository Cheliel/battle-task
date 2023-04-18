<template>
  <div class="homeContaneur">
    <navigation-bar/>
    <ContentBackground/>
    <FaqSection/>
    <FooterSection/>
  </div>
</template>

<script>
import NavigationBar from './NavBar/NavigationBar.vue'
import ContentBackground from './Content/ContentBackground.vue'
import FaqSection from './FAQ/FaqSection.vue'
import FooterSection from './Footer/FooterSection.vue'
export default {
  name: 'HomeContent',
  components: {
    NavigationBar,
    ContentBackground,
    FaqSection,
    FooterSection

  }
}

</script>

<style lang="scss">
.homeContaneur{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
