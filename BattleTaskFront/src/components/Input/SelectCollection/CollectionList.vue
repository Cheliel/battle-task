<template>
    <div class="CollectionListSection">
            <div class="CollectionListTitleContaneur">
              <img class="add_button" src="@/assets/img/add_button.svg"/>
              <div class="CollectionListTitle">Collection</div>
            </div>
            <div class="CollectionListContaneur">
                <CollectionItem @onChoose="sendChange" Name="Vélo" Color="#f1414a"/>
                <CollectionItem @onChoose="sendChange" Name="Travail" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère" Color="#7d5889"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère de très longue durée" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Vélo" Color="#f1414a"/>
                <CollectionItem @onChoose="sendChange" Name="Travail" Color="#06a0b1"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère" Color="#7d5889"/>
                <CollectionItem @onChoose="sendChange" Name="Tâche ménagère de très longue duré Tâche ménagère de très longue durée e" Color="#06a0b1"/>
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
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    width: 250px;
    height: 300px;

    background-color:inherit;
}

// .rightSelection{

//     justify-content: flex-start;
//     width: 250px;
//     height: 300px;
//     padding-left: 5px;
// }

.CollectionListTitleContaneur{
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
}

.CollectionListTitle{
    display: flex;
    margin-left: 15px;
    font-family: bebas;
    font-size: 22px;
}

.CollectionListContaneur{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width:none;
    border-radius: 5%;
    // box-shadow:  0px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px 0px;

}

.CollectionListContaneur::-webkit-scrollbar {
  display: none;
}

.leftSection{
    display: flex;
    flex-direction: raw;
    align-items: end;
    justify-content: flex-end;
    margin-right: 17px;
}

.add_button{
    height: 30px;
    border-radius: 50%;
    background-color: #f1414aaf;
    margin-bottom: 6px;
}

.add_button:hover{
    background-color: #f1414a;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    cursor: pointer;
}

</style>
