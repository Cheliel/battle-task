<template>
    <div class="collectionContaneur">
      <navigation-bar/>
      <FormCollectionContaneur/>
      <FooterSection/>
    </div>
  </template>

<script>
import NavigationBar from '../HomePage/NavBar/NavigationBar.vue'
import FooterSection from '../HomePage/Footer/FooterSection.vue'
import FormCollectionContaneur from './Form/FormCollectionContaneur.vue'
export default {
  name: 'CollectionContent',
  components: {
    NavigationBar,
    FormCollectionContaneur,
    FooterSection

  }
}

</script>

<style lang="scss">
.collectionContaneur{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
