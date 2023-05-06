<template>
    <div class="CollectionListSection">
        <div class="rightSelection">
            <div class="CollectionListTitleContaneur"><div class="CollectionListTitle">Collection</div></div>
            <div class="CollectionListContaneur">
                <CollectionItem @onChoose="sendChange" Name="Vélo" Color="#f1414a"/>
                <CollectionItem @onChoose="sendChange" Name="Travail" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère" Color="#7d5889"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère de très longue durée" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Vélo" Color="#f1414a"/>
                <CollectionItem @onChoose="sendChange" Name="Travail" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère" Color="#7d5889"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère de très longue durée" Color="#06a0b1"/>
            </div>
        </div>
        <div class="leftSection">
          <img class="add_button" src="@/assets/img/add_button.svg">
        </div>

    </div>
</template>

<script>
import CollectionItem from './CollectionItem.vue'
export default {
  data () {
    return { name: '' }
  },
  name: 'CollectionList',
  components: {
    CollectionItem
  },
  methods: {
    sendChange (event) {
      // this.$emit('onChange', this.name)
      console.log(event)
    }
  }
}

</script>

<style lang="scss">

.CollectionListSection{
    display: flex;
    flex-direction: raw;
    margin-top: 40px;
    margin-left: 20px;
    padding-left: 5px;
}

.rightSelection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 300px;
    height: 400px;
    padding-left: 5px;
}

.CollectionListTitleContaneur{
    width: 100%;
}

.CollectionListTitle{
    margin-left: 15px;
    font-family: bebas;
    font-size: 22px;
}

.CollectionListContaneur{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid black 3px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width:none;
    border-radius: 5%;
}

.leftSection{
    display: flex;
    flex-direction: raw;
    align-items: end;
    justify-content: flex-end;
    margin-left: 17px;
}

.add_button{
    height: 30px;
    border-radius: 50%;
    background-color: #f1414a;
    margin-bottom: 6px;
}

.add_button:hover{
    opacity: 1;
    rotate: 90deg;
    transition: 500ms;
    cursor: pointer;
}

</style>
