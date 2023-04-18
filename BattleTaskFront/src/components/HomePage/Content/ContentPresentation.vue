<template>
    <div class="div3">
        <h1 class="tiltePres">Présentation</h1>
        <p class="textpres">BattleTask une application qui a pour but de révolutionner votre quotidien,
            tu en as marre d'utiliser une application classique pour te rappeler ce que tu dois faire dans tes journées ?
            BattleTask te permet de faire cela de manière ludique Tout en créant des collections qui concernent tes courses ou
            bien ta voiture tu pourras créer des tâches liées à ces collections et choisir si elle doit te rappeler toute ta collection ou
            une tâche spécifique et ce n'est pas tout tu pourras choisir la difficulté de ta tâche et une fois cette dernière accomplie tu obtiendras de l'expérience !
            Ce qui te fera gagner des niveaux ce qui t'encouragera à les accomplir plus la tâche est difficile et prend du temps plus vite tu progresseras à toi les combats quotidiens !</p>
    </div>
</template>

<script>
export default {
  name: 'ContentPresentation'
}
</script>

<style>
.tiltePres{
    position: relative;
    left: 150px;
    top: -45px;
    font-family: "oxygen";
    font-weight: bold;
    font-size: 64px;
}
.textpres{
    font-size: 22px;
    top: -30px;
    text-align: left;
    position: relative;
    left: -30px;
}
.textpres{
    font-size: 22px;
    top: -30px;
    text-align: left;
    position: relative;
    left: -30px;
}
.div3 {
    grid-area: 5 / 7 / 8 / 10;
}
</style>
