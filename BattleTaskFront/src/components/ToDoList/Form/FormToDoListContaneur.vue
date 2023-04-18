<template>
    <div class="FormToDoListContaneur">
        <div class="TopSection">
            <span class="Title">To Do List</span>
            <router-link to="/">  <img src="../../../assets/img/close.svg" class="BT_close"/></router-link>
        </div>
        <ToDoListInputContaneur @onChange="changeListener"/>
        <div class="bottomSection">
          <div v-on:click="validate" class="BT_Valider"><label id="label_Valider">VALIDER</label></div>
        </div>
    </div>
  </template>

<script>

import ToDoListInputContaneur from './Input/ToDoListInputContaneur.vue'
export default {
  name: 'FormCollectionContaneur',
  data () {
    return {
      notificationOn: false,
      collectionName: ''
    }
  },
  components: {
    ToDoListInputContaneur
  },
  methods: {
    changeListener (event) {
      this.notificationOn = event.notificationOn
      this.Name = event.Name
    },
    validate () {
      console.log(this.notificationOn, this.Name)
    }
  }
}

</script>

<style lang="scss">
.FormToDoListContaneur{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #DCDFE5;
  height: 900px;
  width: 900px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 20px;
  border-radius: 14px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}
.TopSection{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: bebas;
  font-size: 50px;
}

.bottomSection{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 130px;
}

.BT_Valider{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  font-family: bebas;
  font-size: 30px;
  border: solid #f1414a 3px;
  border-radius: 8px;
  opacity: 0.5;
}

#label_Valider{
  opacity: 1;
  color: #0e0f19;
  cursor: pointer;
}

.BT_Valider:hover{
  opacity: 1;
  cursor: pointer;
}

</style>
