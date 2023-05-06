<template>
    <div class="pageConnexion">
        <NavigationBar/>
        <div class="ConnexionSectionContaneur">
            <div v-if="isDisplayedConnexion" class="ConnnexionSection">
                <div class="ConnexionForm">
                    <InputEmail/>
                    <InputPassword/>
                    <span> Mot de passe oublié ? </span>
                </div>
                <div class="ConnexionBottomSection">
                    <div v-on:click="validate" class="BT_Valider_ToDoList"><label id="label_Valider">Connexion</label></div>
                </div>
            </div>
            <div v-if="isDisplayedInscription" class="InscriptionSection">
                <div class="ConnexionTopSection">
                    <span class="Title">Inscription</span>
                    <img v-on:click="displayConnexion" src="@/assets/img/close.svg" class="Inscription_BT_close"/>
                </div>
                <div class="InscriptionForm">
                    <InputEmail/>
                    <InputPseudo/>
                    <InputPassword @onChange="getPassword"/>
                    <InputConfirmationPassword @onChange="getPasswordConfirmation"/>
                    <div class="InscriptionErrorSection">
                        <DisplayError v-show="weakPasswordError" text="Les mots de passe doivent être identique"/>
                        <DisplayError v-show="passwordDismatchError" text="Le mot de passe ne contient pas les caractérisques requise"/>
                    </div>
                </div>
                <div class="InscriptionBottomSection">
                    <div v-on:click="validate" class="BT_Valider_ToDoList"><label id="label_Valider">Enregistrer</label></div>
                </div>
            </div>
            <div v-if="isDisplayedConnexion" class="newFighter">
                    <span class="t">Nouveau Combatant ?</span>
                    <span v-on:click="displayInscription" class="e">Crée ton compte</span>
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
      password: String,
      passwordConfirmation: String,
      weakPasswordError: false,
      passwordDismatchError: false
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
      if (!this.password.toString().match(this.passwordConfirmation)) {
        this.weakPasswordError = true
        console.log(this.password)
        console.log(this.passwordConfirmation)
        console.log('r')
      }
    },
    getPassword (event) {
      if (event.password.match(passwordRegex)) {
        this.password = event.password
      } else {
        this.passwordDismatchError = true
      }
    },
    getPasswordConfirmation (event) {
      this.passwordConfirmation = event.passwordConfirmation
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

.InscriptionSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    height: 500px;
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

.InscriptionForm{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    height: 100%;
    width: 100%;
    margin-bottom: 40px;
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

.ConnexionBottomSection, .InscriptionBottomSection{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 100%;
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

.t{
    font-family: oxygen;
    font-weight: 600;
}

.e{
    color: #7d5889;
    font-weight: 600;
    cursor: pointer;
}

.InscriptionErrorSection{
    display: flex;
    flex-direction: column;
    margin-top: 6px;
}

.InscriptionErrorSection, span {
    margin-top: 6px;
}
</style>
