<template>
  <div
    class="flex flex-col md:flex-row justify-center gap-10 px-6 lg:px-20 py-10"
  >
    <!-- Card 1 -->
    <div
      class="bg-app-bg shadow-lg rounded-2xl p-6 max-w-md w-full flex flex-col text-center min-h"
    >
      <div class="h-1.5 w-12 bg-app-blue mt-2 mb-4 mx-auto"></div>
      <h3 class="text-xl font-bold mb-4">Basse saison</h3>

      <!-- Ce bloc va s'étendre pour pousser les <p> vers le centre -->
      <div
        class="flex-grow flex flex-col lg:justify-center justify-start items-center space-y-1"
      >
        <p class="text-md">Séjour minimum : 2 nuits</p>
        <p class="text-md">25€/nuit/personne</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="bg-app-bg shadow-lg rounded-2xl p-6 max-w-md w-full flex flex-col items-center text-center min-h-[320px] justify-center"
    >
      <div>
        <div class="h-1.5 w-12 bg-app-yellow mt-2 mb-4 mx-auto"></div>
        <h3 class="text-xl font-bold mb-4">Haute saison</h3>
        <div class="flex flex-col gap-4">
          <div>
            <p class="font-medium">Été :</p>
            <p>Séjour minimum : 7 nuits</p>
            <p>1300€ la semaine</p>
          </div>
          <div>
            <p class="font-medium">Noël, Semaine Sainte, Ponts :</p>
            <p>Séjour minimum : 2 nuits</p>
            <p>35€/nuit/personne</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
