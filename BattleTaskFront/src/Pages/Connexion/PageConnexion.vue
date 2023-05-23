<template>
    <div class="pageConnexion">
        <NavigationBar/>
        <div class="ConnexionSectionContaneur">
            <div v-if="isDisplayedConnexion & !isDisplayedModification" class="ConnnexionSection">
                <div class="ConnexionForm">
                    <InputEmail width="70%"/>
                    <InputPassword width="70%"/>
                    <span> Mot de passe oublié ? </span>
                </div>
                <div class="ConnexionBottomSection">
                    <div v-on:click="validate" class="BT_Valider_ToDoList" id="large_button"><label id="label_Valider">Connexion</label></div>
                </div>
            </div>
            <div v-if="isDisplayedInscription" class="InscriptionSection">
                <div class="ConnexionTopSection">
                    <span class="Title">Inscription</span>
                    <img v-on:click="displayConnexion" src="@/assets/img/close.svg" class="Inscription_BT_close"/>
                </div>
                <div class="InscriptionForm">
                  <div class="InscriptionFormTopSection">
                    <InputEmail width="85%"/>
                    <InputPseudo/>
                  </div>
                  <div class="InscriptionFormTopSection">
                    <InputPassword width="85%" @onChange="getPassword"/>
                    <InputConfirmationPassword @onChange="getPasswordConfirmation"/>
                  </div>
                  <div class="InscriptionErrorSection">
                        <DisplayError v-show="weakPasswordError" text="Le mot de passe ne contient pas les caractérisques requise" />
                        <DisplayError v-show="passwordDismatchError" text="Les mots de passe doivent être identique" />
                    </div>
                </div>
                <div class="InscriptionBottomSection">
                    <div v-on:click="validate" class="BT_Valider_ToDoList" id="large_button"><label id="label_Valider">Enregistrer</label></div>
                </div>
            </div>
            <div v-if="isDisplayedConnexion & !isDisplayedModification" class="newFighter">
                    <span class="tz">Nouveau Combatant ?</span>
                    <span v-on:click="displayInscription" class="newAcount_BT">Crée ton compte</span>
            </div>
            <div v-if="isDisplayedModification" class="AcountModification">
              <div class="ConnexionTopSection">
                    <div class="myAcountTitle">
                      <img src="@/assets/img/trash.svg">
                      <span class="Title">Mon compte</span>
                    </div>
                    <img v-on:click="displayConnexion" src="@/assets/img/close.svg" class="Inscription_BT_close"/>
                </div>
                <div class="AcountModificationForm">
                  <div class="AcountModificationTopSection">
                    <InputEmail width="85%"/>
                    <InputPseudo/>
                  </div>
                  <div class="AcountModificationTopSection">
                    <InputPassword width="85%" @onChange="getPassword"/>
                    <InputConfirmationPassword @onChange="getPasswordConfirmation"/>
                  </div>
                  <div class="InscriptionErrorSection">
                        <DisplayError v-show="weakPasswordError" text="Le mot de passe ne contient pas les caractérisques requise" />
                        <DisplayError v-show="passwordDismatchError" text="Les mots de passe doivent être identique" />
                    </div>
                </div>
                <div class="InscriptionBottomSection">
                    <div v-on:click="validate" class="BT_Valider_ToDoList" id="large_button"><label id="label_Valider">Enregistrer</label></div>
                </div>
            </div>
        </div>
        <FooterSection/>
    </div>
</template>

<script>

import NavigationBar from '@/components/HomePage/NavBar/NavigationBar.vue'
import FooterSection from '@/components/HomePage/Footer/FooterSection.vue'
import InputEmail from '@/components/Input/InputEmail/InputEmail.vue'
import InputPassword from '@/components/Input/InputPassword/InputPassword.vue'
import InputPseudo from '@/components/Input/InputPseudo/InputPseudo.vue'
import InputConfirmationPassword from '@/components/Input/InputConfirmPassword/InputConfirmPassword.vue'
import DisplayError from '@/components/Display/Error/DisplayError.vue'

import { ref } from 'vue'

// eslint-disable-next-line
const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'

export default {
  name: 'CollectionContent',
  data () {
    return {
      display: Number,
      isDisplayedInscription: ref(false),
      isDisplayedConnexion: ref(true),
      isDisplayedModification: ref(false),
      password: ref(String),
      passwordConfirmation: ref(String),
      weakPasswordError: ref(false),
      passwordDismatchError: ref(false)
    }
  },
  methods: {
    displayInscription () {
      this.isDisplayedInscription = true
      this.isDisplayedConnexion = false
    },
    displayConnexion () {
      this.isDisplayedInscription = false
      this.isDisplayedConnexion = true
    },
    passwordConfirmationVerif () {
      console.log('pasword => ', this.password.value)
      console.log('password confirm => ', this.passwordConfirmation.value)
      if (!this.password.value.match(this.passwordConfirmation.value)) {
        console.log('confirm dismatch')
        this.passwordDismatchError = false
      } else {
        console.log('confirmation match')
        this.passwordDismatchError = true
      }
    },
    getPassword (event) {
      console.log('event from get password => ', event)
      if (event.password.match(passwordRegex)) {
        // passwordChange.ComputedSetter(event.password)
        this.password.value = event.password
        this.weakPasswordError = false
      } else {
        this.weakPasswordError = true
      }
    },
    getPasswordConfirmation (event) {
      console.log('event from get password => ', event)
      this.passwordConfirmation.value = event.passwordConfirmation
      this.passwordConfirmationVerif()
    }
  },
  components: {
    NavigationBar,
    FooterSection,
    InputEmail,
    InputPassword,
    InputPseudo,
    InputConfirmationPassword,
    DisplayError
  }
}

</script>

<style lang="scss">

//////////////////////////////////////////////////////////////////////////////
// CONNEXION ===== > MAIN <======
////
//////////////////////////////////////////////////////////////////////////

.pageConnexion{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100vw;
    // flex-grow: 1;
    // flex-shrink: 0;
    z-index: 1;
}

.ConnexionSectionContaneur{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.ConnnexionSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    height: 300px;
    width: 450px;

    background-color: #dcdfe5;
    border-radius: 12px;
    padding: 20px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.ConnexionForm{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;
}

.ConnexionForm span {
    font-family: oxygen;
    margin-left: 25px;
    cursor: pointer;
}

.ConnexionTopSection{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: bebas;
  font-size: 50px;
}

//////////////////////////////////////////////////////////////////////////////
// INSCRIPTION ===== > MAIN <======
////
//////////////////////////////////////////////////////////////////////////

.InscriptionSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    //height: 350px;
    width: 550px;

    background-color: #dcdfe5;
    border-radius: 12px;
    padding: 20px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.InscriptionForm{
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;
    margin-bottom: 40px;
}

.InscriptionFormTopSection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 50%;
}

.InscriptionErrorSection{
    display: flex;
    flex-direction: column;
    margin-top: 6px;
}

.InscriptionErrorSection, span {
    margin-top: 6px;
}

.ConnexionBottomSection, .InscriptionBottomSection{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

//////////////////////////////////////////////////////////////////////////////
// ACOUNT MODIFICATION ===== > MAIN <======
////
//////////////////////////////////////////////////////////////////////////

.AcountModification{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    width: 550px;

    background-color: #dcdfe5;
    border-radius: 12px;
    padding: 20px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
}

.AcountModificationForm{
    display: flex;
    flex-direction: row;
    align-items: start;
    flex-wrap: wrap;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;
    margin-bottom: 40px;
}

.AcountModificationTopSection{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    width: 50%;
}

.myAcountTitle{
  display: flex;
}

.myAcountTitle > img:hover {
  cursor : pointer;
}

//////////////////////////////////////////////////////////////////////////////
// PAGE CONNEXION ===== > MISC <======
////
//////////////////////////////////////////////////////////////////////////

#large_button{
  width: 90%;
}

.newFighter{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 20px;

    width: 100%;
    height: 70px;

    background-color: #dcdfe5;
    border-radius: 12px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}

.Inscription_BT_close{
    cursor: pointer;
}

.newFighter > span{
  font-family: oxygen;
    font-weight: 600;
}

.newAcount_BT{
    color: #7d5889;
    cursor: pointer;
}

</style>
