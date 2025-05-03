<template>
  <div class="kontener">
    <header>
      <h1>Gra w pamięć</h1>
    </header>

    <img src="/logo.png" alt="Gra w pamięć" class="logo" />

    <p class="opis">
      Witaj w grze w pamięć! <br/>
      Gra polega na odnalezieniu wszystkich par kart. Powodzenia! <br/>
    </p>

    <main>
      <button class="przycisk">Nowa gra</button>
    </main>

    <footer>
      <p>Autor: Kamil Korzan</p>
    </footer>
  </div>
</template>

<script setup>
// Nie potrzebujesz JS na tym etapie
</script>

<style>
body {
  background-color: #64B5F6;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

.kontener {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  background-color: #64B5F6;
}

.logo {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.przycisk {
  background-color: #FFA726;
  border: 2px solid #3E2723;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  width: 200px;
  height: 50px;
  font-weight: bold;
  font-family: Arial, sans-serif;
}

.przycisk:hover {
  background-color: #81C784;
  color: black;
}

h1 {
  color: #FFA726;
  font-family: 'Courier New', Courier, monospace;
  font-size: 48px;
  text-align: center;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px #3E2723;
}

footer {
  color: #3E2723;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-top: 20px;
  padding: 10px;
  color: black;
  border-radius: 10px;
  width: 100%;
  position: fixed;
  bottom: 0;
}

p.opis {
  color: #3E2723;
  font-size: 20px;
  text-align: center;
  margin: 20px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
} 
</style>