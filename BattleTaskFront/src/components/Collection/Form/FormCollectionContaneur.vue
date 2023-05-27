<template>
  <div class="FormCollectionContaneur">
    <div class="TopSectionFromCollection">
      <div class="TitleFormCollection">Collection</div>
      <img src="@/assets/img/close.svg" class="BT_close_FromCollection" />
    </div>
    <CollectionInputContaneur @onChange="changeListener" />
    <div class="bottomSectionFormCollection">
      <div v-on:click="validate" class="BT_Valider_FormCollection">
        <label id="label_Valider">VALIDER</label>
      </div>
    </div>
  </div>
</template>

<script>
import CollectionInputContaneur from "./CollectionInputContaneur.vue";
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
    CollectionInputContaneur,
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
.FormCollectionContaneur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  // height: 40vh; // 700
  // width: 400px; // 900
  // margin-top: 100px;
  // margin-bottom: 250px;
  // padding: 20px;
  // border-radius: 14px;
  // box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}
.TopSectionFromCollection {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: bebas;
  font-size: 50px;
}

// .TitleFormCollection{
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

.BT_close_FromCollection {
  height: 40px;
  margin-bottom: 5px;
}

.BT_close_FromCollection:hover {
  cursor: pointer;
}

.bottomSectionFormCollection {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  // height: 130px;
}

.BT_Valider_FormCollection {
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

#label_Valider {
  color: #0e0f19;
}

.BT_Valider:hover {
  border: solid #f1414a 3px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}
</style>
