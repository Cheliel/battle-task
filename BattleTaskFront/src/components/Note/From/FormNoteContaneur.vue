<template>
  <div class="FormNoteContaneur">
    <div class="TopSection">
      <span class="Title">Note</span>
      <router-link to="/">
        <img src="@/assets/img/close.svg" class="BT_close"
      /></router-link>
    </div>
    <NoteInputContaneur @onChange="changeListener" />
    <InputDificulty v-if="false" />
    <div class="bottomSection">
      <div v-on:click="validate" class="BT_Valider_Note">
        <label id="label_Valider">VALIDER</label>
      </div>
    </div>
  </div>
</template>

<script>
import NoteInputContaneur from "./NoteInputContaneur.vue";
export default {
  name: "FormCollectionContaneur",
  data() {
    return {
      notificationOn: false,
      collectionName: "",
      collectionColor: "",
    };
  },
  components: {
    NoteInputContaneur,
  },
  methods: {
    changeListener(event) {
      this.notificationOn = event.notificationOn;
      this.collectionName = event.collectionName;
      this.collectionColor = event.collectionColor;
    },
    validate() {
      console.log(
        this.notificationOn,
        this.collectionColor,
        this.collectionName
      );
    },
  },
};
</script>

<style lang="scss">
.FormNoteContaneur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0px 20px;
}
.TopSection {
  // width: 100%;
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
  justify-content: left;
  margin-top: 20px;
  // width: 100%;
}

.BT_Valider_Note {
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

.BT_Valider_Note:hover {
  border: solid #f1414a 3px;
  cursor: pointer;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
</style>
