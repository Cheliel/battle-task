<template>
  <div class="pageNote">
    <navigation-bar/>
    <div class="noteContaneur">
      <!-- <div v-on:click="displaySideBar(1)">===> Collection</div>
      <div v-on:click="displaySideBar(2)">===> ToDoList</div>
      <div v-on:click="displaySideBar(3)">===> Note</div> -->
          <FormNoteContaneur v-if="false"/>
          <div v-if="1==display" class="sideColectionPannel">
            <div class="contaneurBasic">
              <FormCollectionContaneur/>
            </div>
        </div>
        <div v-if="2==display" class="sideToDoListPannel">
          <div class="contaneurBasic">
            <FormToDoListContaneur/>
          </div>
        </div>
        <div v-if="3==3" class="sideNotePannel">
          <div class="contaneurBasic">
            <FormNoteContaneur/>
          </div>
        </div>
        <div v-if="4==4" class="sideParamPannel">
          <div class="contaneurBasic">
            <div class="sideUserSection">
                <img src="@/assets/img/user_account.svg"/>
                <span>T-Rex</span>
            </div>
            <div class="sideParamSection">
              <div class="sideParamElement">
                <img class ="small-icon" src="@/assets/img/home.svg"/>
                <span class="sidebar-text-element" >Dashbord</span>
              </div>
              <div class="sideParamElement">
                <img class ="small-icon" src="@/assets/img/task_alt.svg"/>
                <span class="sidebar-text-element" >Tâche terminée</span>
              </div>
              <div class="sideParamElement">
                <img class ="small-icon" src="@/assets/img/settings.svg"/>
                <span class="sidebar-text-element" >Paramettre</span>
              </div>
            </div>
            <div class="sideCollectionSelection">
                <div class="sideCollectionTitle">
                  <span>
                    Collection
                  </span>
                  <img class="sideAddButton" src="@/assets/img/add_button_white.svg"/>
                </div>
                <div class="sideCollectionList">
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Travail</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Les choses les plus enneuilleuse</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                  <div class="sideCollectionItem">
                    <div class="sideCollectionDot"></div>
                    <div class="sideCollectionName">Tâche ménagères</div>
                  </div>
                </div>
            </div>
            <div class="sideToDoListSelection">
                <div class="sideToDoListTitle">
                  <span>
                    To Do List
                  </span>
                  <img class="sideAddButton" src="@/assets/img/add_button_white.svg"/>
                </div>
                <div class="sideToDoList-List">
                  <div class="sideToDoListItem">
                    <div class="sideToDoListDot"></div>
                    <div class="sideToDoListName">Tâche ménagères</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    <FooterSection/>
  </div>
  </template>

<script>
import NavigationBar from '../HomePage/NavBar/NavigationBar.vue'
import FooterSection from '../HomePage/Footer/FooterSection.vue'
import FormNoteContaneur from '@/components/Note/From/FormNoteContaneur.vue'
import FormCollectionContaneur from '@/components/Collection/Form/FormCollectionContaneur.vue'
import FormToDoListContaneur from '../ToDoList/Form/FormToDoListContaneur.vue'

export default {
  name: 'CollectionContent',
  data () {
    return {
      display: Number
    }
  },
  methods: {
    displaySideBar (val) {
      this.display = val
    }
  },
  components: {
    NavigationBar,
    FormNoteContaneur,
    FooterSection,
    FormCollectionContaneur,
    FormToDoListContaneur
  }
}

</script>

<style lang="scss">

.pageNote{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
}

.noteContaneur{
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  z-index: 1;
  height: 100%;
  width: 100vw;
}

.sideColectionPannel{
  position: absolute;
  right:0vw;
  top: 20vh;
  height: 40%;
  overflow-y: scroll;
  scrollbar-width:none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  // width: 30vw;
  background-color: #dcdfe5;
  z-index: 999;
  border-radius: 12px 0px 0px 12px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.sideToDoListPannel{
  position: absolute;
  right: 0vw;
  top: 20vh;
  height: 60vh;
  overflow-y: scroll;
  scrollbar-width:none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background-color: #dcdfe5;
  z-index: 999;
  border-radius: 12px 0px 0px 12px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.sideNotePannel{
  position: absolute;
  right: 0px;
  top: 20vh;
  height: 60vh;
  overflow-y: scroll;
  scrollbar-width:none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 10px 0px 0px;

  background-color: #dcdfe5;
  z-index: 999;
  border-radius: 12px 0px 0px 12px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > MAIN PARAM PANNEL <======
////
//////////////////////////////////////////////////////////////////////////

.sideParamPannel{

  position: absolute;
  left: 0px;
  top:10vh;
  height: 80vh;
  overflow-y: scroll;
  scrollbar-width:none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #0e0f19dd;
  z-index: 999;
  border-radius: 0px 12px 12px 0px;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

  color: #dcdfe5;
  font-family: oxygen;

}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > USER SECTION <======
////
//////////////////////////////////////////////////////////////////////////

.sideUserSection{
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

.sideParamSection{
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

.sideParamElement > span{
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

.sideCollectionTitle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: bebas;
  font-size: 24px;
  margin-top: 0px;

}

.sideCollectionTitle > span{
  margin-top: 0px;
}

.sideAddButton{
  width: 20px;
  height: 20px;
  background-color: #f1414abb;
  border-radius : 50%
}

.sideCollectionList{
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 15px;
  padding-top: 5px;
  margin-top: 5px;
  height: 200px;
  overflow-y: scroll;
  scrollbar-width:none;
}

.sideCollectionList::-webkit-scrollbar{
  display: none;
}

.sideCollectionItem{
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: oxygen;
  font-size: 14px;
  margin-bottom: 10px;
  padding : 7px;
  border-radius: 12px;
}

.sideCollectionItem:hover{
  background-color: #06a0b199;
}

.sideCollectionDot{
  background-color: #7d5889;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.sideCollectionName{
  overflow: hidden;
  word-wrap: break-word;
  width : 150px;
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

.sideToDoListTitle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: bebas;
  font-size: 24px;
  margin-top: 0px;
}

.sideToDoListTitle > span{
  margin-top: 0px;
}

.sideToDoList-List{
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 15px;
  padding-top: 5px;
  margin-top: 5px;
  height: 200px;
  overflow-y: scroll;
  scrollbar-width:none;
}

.sideToDoList-List::-webkit-scrollbar{
  display: none;
}

.sideToDoListItem{
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: oxygen;
  font-size: 14px;
  margin-bottom: 10px;
  padding : 7px;
  border-radius: 33px;
}

.sideToDoListItem:hover{
  background-color: #06a0b199;
}

.sideToDoListDot{
  background-color: #7d5889;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}

.sideToDoListName{
  overflow: hidden;
  word-wrap: break-word;
  width : 150px;
}

//////////////////////////////////////////////////////////////////////////////
// SIDE BARE RIGHT ===== > MISC <======
////
//////////////////////////////////////////////////////////////////////////

.sideParamPannel::-webkit-scrollbar {
  display: none;
}

.sideToDoListPannel::-webkit-scrollbar {
  display: none;
}

.sideColectionPannel::-webkit-scrollbar {
  display: none;
}

.sideNotePannel::-webkit-scrollbar {
  display: none;
}

.contaneurBasic{
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
