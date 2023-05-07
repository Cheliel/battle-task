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
          <ParamSideBar v-if="4==4"/>
    </div>
  </div>
  </template>

<script>
import NavigationBar from '../HomePage/NavBar/NavigationBar.vue'
import FormNoteContaneur from '@/components/Note/From/FormNoteContaneur.vue'
import ParamSideBar from '../ParamSideBar/ParamSideBar.vue'
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
    FormCollectionContaneur,
    FormToDoListContaneur,
    ParamSideBar
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

//////////////////////////////////////////////////////////////////////////////
//  SIDE BARS ===== > MAIN <======
////
//////////////////////////////////////////////////////////////////////////

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
// SIDE BARS ===== > MISC <======
////
//////////////////////////////////////////////////////////////////////////

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
