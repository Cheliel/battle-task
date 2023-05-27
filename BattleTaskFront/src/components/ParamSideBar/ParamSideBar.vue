<template>
  <div v-if="displaySideBar" class="sideBarParamSection">
    <div v-if="displaySideBar" class="sideParamPannel">
      <div class="contaneurBasicSideBarParam">
        <div class="sideUserSection">
          <img src="@/assets/img/user_account.svg" />
          <span>T-Rex</span>
        </div>
        <div class="silder-side-param-section">
          <div class="sideParamSection">
            <div class="sideParamElement">
              <img class="small-icon" src="@/assets/img/home.svg" />
              <span class="sidebar-text-element">Dashbord</span>
            </div>
            <div class="sideParamElement">
              <img class="small-icon" src="@/assets/img/task_alt.svg" />
              <span class="sidebar-text-element">Tâche terminée</span>
            </div>
            <div class="sideParamElement">
              <img class="small-icon" src="@/assets/img/settings.svg" />
              <span class="sidebar-text-element">Paramettre</span>
            </div>
          </div>
          <div class="sideCollectionSelection">
            <div class="sideCollectionTitle">
              <div>
                <img src="@/assets/img/collection.svg" class="small-icon" />
                <div>Collection</div>
              </div>
              <img
                class="sideAddButton"
                src="@/assets/img/add_button_white.svg"
              />
            </div>
            <div class="sideCollectionList">
              <div
                v-for="collection in this.Collections"
                :key="collection.id"
                class="sideCollectionItem"
              >
                <div
                  class="sideCollectionDot"
                  v-bind:style="'background-color: #' + collection.color"
                ></div>
                <div class="sideCollectionName">{{ collection.titre }}</div>
              </div>
            </div>
          </div>
          <div class="sideToDoListSelection">
            <div class="sideToDoListTitle">
              <div>
                <img class="small-icon" src="@/assets/img/todolist.svg" />
                <div>To Do List</div>
              </div>
              <img
                class="sideAddButton"
                src="@/assets/img/add_button_white.svg"
              />
            </div>
            <div class="sideToDoList-List">
              <div
                v-for="toDoList in this.toDoLists"
                :key="toDoList.id"
                class="sideToDoListItem"
              >
                <div class="sideToDoListDot"></div>
                <div class="sideToDoListName">{{ toDoList.titre }}</div>
              </div>
            </div>
          </div>
          <FooterSectionSideBar />
        </div>
      </div>
    </div>
    <div v-on:click="switchBar()" class="displaySideBarParamButton">
      <img src="@/assets/img/arrow_down_white.svg" />
    </div>
  </div>
  <div v-if="!displaySideBar" class="sideBarParamSection-small">
    <div v-if="!displaySideBar" class="small-side-bar">
      <!-- <img class="medium-icon" src="@/assets/img/user_account.svg"/> -->
      <div class="contaneur-side-bar-icon">
        <img class="medium-icon" src="@/assets/img/home.svg" />
      </div>

      <div class="contaneur-side-bar-icon">
        <img class="medium-icon" src="@/assets/img/task_alt.svg" />
      </div>

      <div class="contaneur-side-bar-icon">
        <img class="medium-icon" src="@/assets/img/settings.svg" />
      </div>

      <div class="contaneur-side-bar-icon">
        <img
          v-on:click="displayCollection"
          class="medium-icon"
          src="@/assets/img/collection.svg"
        />
      </div>
      <div class="contaneur-side-bar-icon">
        <img
          v-on:click="displayToDoList"
          class="medium-icon"
          src="@/assets/img/todolist.svg"
        />
      </div>

      <div class="contaneur-side-bar-icon">
        <img
          v-on:click="displayNote"
          class="medium-icon"
          src="@/assets/img/note_add.svg"
        />
      </div>
    </div>
    <div class="displaySideBarParamButton">
      <img v-on:click="switchBar" src="@/assets/img/arrow_down_white.svg" />
    </div>
  </div>
</template>

<script>
import FooterSectionSideBar from "@/components/HomePage/Footer/FooterSectionSideBar.vue";
import { useCollectionStore } from "@/store/collectionStore.js";
import { useToDoListStore } from "@/store/toDoListStore.js";
import { mapState } from "pinia";

let collectionStore;
let todolistStore;
export default {
  data() {
    return {
      displaySideBar: false,
      height: "10vh",
    };
  },
  name: "ParamSideBar",
  components: {
    FooterSectionSideBar,
  },
  beforeMount() {
    todolistStore = useToDoListStore();
    todolistStore.fetchToDoList();

    collectionStore = useCollectionStore();
    collectionStore.fetchCollection();
  },
  computed: {
    ...mapState(useCollectionStore, { Collections: ["getCollections"] }),
    ...mapState(useToDoListStore, { toDoLists: ["getToDoLists"] }),
  },
  methods: {
    sendChange() {
      this.$emit("onChange", this.name);
    },
    switchBar() {
      this.displaySideBar = !this.displaySideBar;
    },
    displayNote() {
      this.$emit("displayNote", true);
      console.log(
        "COLECTION VERIF DELETION => ",
        collectionStore.getToDoLists(3940)
      );
    },
    displayCollection() {
      this.$emit("displayCollection", true);
      console.log("DELATION => ", collectionStore.getNotes(3940, 19));
    },
    displayToDoList() {
      this.$emit("displayToDoList", true);
      console.log("Collections => ", collectionStore.getCollections);
    },
  },
};
</script>

<style lang="scss">
//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > MAIN PARAM PANNEL <======
////
//////////////////////////////////////////////////////////////////////////

.sideBarParamSection {
  position: absolute;
  left: 0px;
  top: 15vh;
  // height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sideBarParamSection-small {
  position: absolute;
  left: 0px;
  top: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.sideParamPannel {
  // position: absolute;
  // left: 0px;
  // top:10vh;
  // height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0e0f19dd;
  z-index: 999;
  border-radius: 0px 12px 12px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #dcdfe5;
  font-family: oxygen;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > USER SECTION <======
////
//////////////////////////////////////////////////////////////////////////

.sideUserSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background-color: #0e0f19;
}

.sideUserSection > span {
  margin: 5px;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > PARAM SECTION <======
////
//////////////////////////////////////////////////////////////////////////

.sideParamSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
}

.sideParamElement {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
}

.sideParamElement > img {
  width: 25px;
}

.sideParamElement > span {
  margin-left: 10px;
  margin-top: 0px;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > COLLECTION <======
////
//////////////////////////////////////////////////////////////////////////

.sideCollectionSelection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 7px;

  background-color: #0e0f19;
}

.sideCollectionTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: bebas;
  font-size: 24px;
  margin-top: 0px;
}

.sideCollectionTitle > div > div {
  margin-left: 5px;
}

.sideCollectionTitle > div {
  display: flex;
}

.sideAddButton {
  width: 20px;
  height: 20px;
  background-color: #f1414abb;
  border-radius: 50%;
}

.sideCollectionList {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 15px;
  padding-top: 5px;
  margin-top: 5px;
  // height: 200px;
  height: 20vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

.sideCollectionList::-webkit-scrollbar {
  display: none;
}

.sideCollectionItem {
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: oxygen;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 7px;
  border-radius: 12px;
}

.sideCollectionItem:hover {
  background-color: #06a0b199;
}

.sideCollectionDot {
  background-color: #7d5889;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.sideCollectionName {
  overflow: hidden;
  word-wrap: break-word;
  width: 150px;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > TO - DO - LIST <======
////
//////////////////////////////////////////////////////////////////////////

.sideToDoListSelection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 7px;

  background-color: inherit;
}

.sideToDoListTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: bebas;
  font-size: 24px;
  margin-top: 0px;
}

.sideToDoListTitle > div > div {
  margin-left: 5px;
}

.sideToDoListTitle > div {
  display: flex;
}

.sideToDoList-List {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 15px;
  padding-top: 5px;
  margin-top: 5px;
  height: 20vh;
  overflow-y: scroll;
  scrollbar-width: none;
}

.sideToDoList-List::-webkit-scrollbar {
  display: none;
}

.sideToDoListItem {
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: oxygen;
  font-size: 14px;
  margin-bottom: 10px;
  padding: 7px;
  border-radius: 33px;
}

.sideToDoListItem:hover {
  background-color: #06a0b199;
}

.sideToDoListDot {
  background-color: #7d5889;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.sideToDoListName {
  overflow: hidden;
  word-wrap: break-word;
  width: 150px;
}

//////////////////////////////////////////////////////////////////////////////
//  SIDE BARS ===== > BUTTON <======
////
//////////////////////////////////////////////////////////////////////////

.displaySideBarParamButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  background-color: #0e0f19cc;
  width: 20px;
  height: 35px;
}

.displaySideBarParamButton > img {
  rotate: -90deg;
  height: 30px;
}

//////////////////////////////////////////////////////////////////////////////
//  SIDE BARS ===== > SMALL <======
////
//////////////////////////////////////////////////////////////////////////

.small-side-bar {
  display: flex;
  flex-direction: column;
  background-color: #0e0f19;
  padding: 5px;
  border-radius: 0px 12px 12px 0px;
}

.contaneur-side-bar-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 42px;
  // padding: 7px;
}

.medium-icon {
  height: 35px;
}

.medium-icon:hover {
  height: 40px;
  cursor: pointer;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > MISC <======
////
//////////////////////////////////////////////////////////////////////////

.sideParamPannel::-webkit-scrollbar {
  display: none;
}

.contaneurBasicSideBarParam {
  display: inline-block;
  width: 100%;
  min-height: 70vh;
  max-height: 85vh;
}

.small-icon {
  height: 25px;
  width: 25px;
}
</style>
