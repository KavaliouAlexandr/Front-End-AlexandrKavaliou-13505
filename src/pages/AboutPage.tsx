import React from 'react'


export const AboutPage: React.FC = () => {
  
  return (
    <>
      <h1>Posts</h1>
      <p>
        Socjalna sieć dla programmistów
 <p>Przyszła funkcjonalność programu: </p>
 <p> 1. Strona logowania </p>
  <p>2. Strona profilowa </p>
 <p> 3. Możliwość dodawania postów </p>
  <p>4. Możliwośc usuwania postów </p>
  <p>5. Możliwość dodawanaia komentarze</p>
      </p>
      <button className="btn" onClick={() => ('/')}>
        Do Strony Home
      </button>
    </>
  )
}
