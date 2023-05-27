<template>
  <div class="FormToDoListContaneur">
    <div class="TopSection">
      <span class="Title">To Do List</span>
      <router-link to="/">
        <img src="@/assets/img/close.svg" class="BT_close"
      /></router-link>
    </div>
    <ToDoListInputContaneur @onChange="changeListener" />
    <div class="bottomSection">
      <div v-on:click="validate" class="BT_Valider_ToDoList">
        <label id="label_Valider">VALIDER</label>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoListInputContaneur from "./ToDoListInputContaneur.vue";
export default {
  name: "FormCollectionContaneur",
  data() {
    return {
      notificationOn: false,
      collectionName: "",
    };
  },
  components: {
    ToDoListInputContaneur,
  },
  methods: {
    changeListener(event) {
      this.notificationOn = event.notificationOn;
      this.Name = event.Name;
    },
    validate() {
      console.log(this.notificationOn, this.Name);
    },
  },
};
</script>

<style lang="scss">
.FormToDoListContaneur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #dcdfe5;
}

.TopSection {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: bebas;
  font-size: 50px;
}

.bottomSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 130px;
}

.BT_Valider_ToDoList {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 50px;
  font-family: bebas;
  font-size: 30px;
  border: solid #f1414a66 3px;
  border-radius: 8px;
}

.BT_Valider_ToDoList:hover {
  border: solid #f1414a 3px;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.BT_Valider_ToDoList,
label:hover {
  cursor: pointer;
}
</style>
