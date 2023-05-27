<template>
  <div class="FaqSection" id="faqSection">
    <h2>FAQ</h2>
    <div class="FaqConteneur">
      <FaqQuestion
        question="Es ce que je peux utiliser l'app depuis tout mes appareils ?"
        answer="Oui, l'application BattleTask est disponible pour Android / IOS / Navigateur"
      />
      <FaqQuestion
        question="Es ce que je peux partager mes listes de tâches pour travailler en équipe ?"
        answer="Non, l'option n'est pas encore disponible mais tu pourras bientôt partager t'es tâches et t'es collections avec une simple d'adresse mail !"
      />
      <FaqQuestion
        question="Es ce que je peux utiliser l'app depuis tout mes divices Es ce que je peux utiliser l'app ?"
        answer="Oui, l'application est disponible pour Android / IOS / Navigateur"
      />
      <FaqQuestion
        question="Es ce que je peux utiliser l'app depuis tout mes divices ?"
        answer="Oui, l'application est disponible pour Android / IOS / Navigateur"
      />
    </div>
  </div>
</template>

<script>
import FaqQuestion from "./FaqQuestion.vue";
export default {
  name: "FaqSection",
  components: {
    FaqQuestion,
  },
};
</script>

<style lang="scss">
.FaqSection {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: oxygen;
}

.FaqConteneur {
  border-radius: 15px;
  background-color: aliceblue;
  padding: 20px;
  width: 100%;
}
</style>
