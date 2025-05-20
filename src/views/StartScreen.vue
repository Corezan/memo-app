<template>
    <div class="kontener">
      <header>
        <h1>Gra w pamięć</h1>
      </header>
  
      <img src="/logo.png" alt="Gra w pamięć" class="logo" />
  
      <p class="opis">
        Witaj w grze w pamięć! Twoim zadaniem jest odnalezienie par kart. Powodzenia!
      </p>
  
      <main>
        <router-link to="/game">
          <button class="przycisk">Nowa gra</button>
        </router-link>
      </main>
  
      <footer>
        <p>Autor: Kamil Korzan</p>
      </footer>
    </div>
  </template>
  
  <style scoped>

/* GŁÓWNY KONTENER STRONY */
.kontener {
  min-height: 100vh;           /* Gwarantuje, że kontener zajmuje całą wysokość okna przeglądarki */
  display: flex;               /* Włącza flexboxa – układ elastyczny */
  flex-direction: column;      /* Ustawia elementy w pionie (z góry na dół) */
  justify-content: space-between; /* Rozkłada przestrzeń między headerem, main i footerem */
  align-items: center;         /* Wyśrodkowuje elementy w poziomie */
  text-align: center;          /* Wyrównuje tekst wewnątrz elementów do środka */
  background-color: #64B5F6;   /* Jasnoniebieskie tło */
  padding: 20px;               /* Odstęp wewnętrzny od krawędzi */
}

/* LOGO */
.logo {
  width: 100%;                 /* Zajmuje całą dostępną szerokość */
  max-width: 500px;            /* Ale nie większą niż 500px – responsywność */
  height: auto;                /* Wysokość proporcjonalna do szerokości */
  display: block;              /* Żeby działało margin auto */
  margin: 0 auto;              /* Wyśrodkowanie poziome */
}

/* PRZYCISK */
.przycisk {
  background-color: #FFA726;   /* Ciepły pomarańcz – kolor główny */
  border: 2px solid #3E2723;   /* Ciemny brązowy obrys */
  color: white;                /* Biały tekst */
  padding: 15px 32px;          /* Odstęp wewnętrzny – góra/dół i lewo/prawo */
  font-size: 16px;             /* Rozmiar tekstu */
  cursor: pointer;             /* Kursor wskazujący (jak na linku) */
  border-radius: 12px;         /* Zaokrąglenie rogów */       
  width: 200px;               /* Szerokość przycisku */
  height: 50px;            /* Wysokość przycisku */
  font-weight: bold;           /* Gruby tekst */
  font-family: Arial, sans-serif; /* Czytelna czcionka */
  display: block;              /* Potrzebne do margin auto */
  margin: 20px auto;           /* Wyśrodkowanie przycisku */
}

/* PRZYCISK – STYL PO NAJECHANIU */
.przycisk:hover {
  background-color: #81C784;   /* Zielony przy hoverze */
  color: white;                /* Biały tekst */
}

/* NAGŁÓWEK */
h1 {
  color: #FFA726;              /* Pomarańczowy kolor tekstu */
  font-family: 'Courier New', Courier, monospace; /* Stylizowana czcionka */
  font-size: 48px;             /* Duży tekst */
  text-align: center;          /* Wyśrodkowanie tekstu */
  margin-bottom: 20px;         /* Odstęp pod spodem */
  margin-top: 60px;
  text-shadow: 2px 2px 4px #3E2723; /* Cień dla czytelności i stylu */

}

/* OPIS TEKSTU POD LOGO */
.opis {
  max-width: 600px;            /* Ogranicza szerokość tekstu, by był czytelny */
  margin: 20px auto;           /* Wyśrodkowanie tekstu */
  font-size: 18px;             /* Lekko większy tekst */
}

/* STOPKA */
footer {
  color: #3E2723;              /* Ciemny brązowy kolor tekstu */
  text-align: center;          /* Wyśrodkowanie tekstu */
  font-size: 16px;             /* Standardowy rozmiar tekstu */
  margin-top: auto;            /* "Przykleja" footer do dołu kontenera */
  padding: 10px;               /* Odstęp wewnętrzny */
  border-radius: 10px;         /* Zaokrąglenie (opcjonalne) */
  }
 
a {
  text-decoration: none;
}
  </style>


