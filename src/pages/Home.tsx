import React from 'react'
import { useHistory } from 'react-router-dom'

export const Home: React.FC = () => {
  const history = useHistory() //сохраняет данные из списка дел при переходе на главную страницу
  return (
    <>
      <h1>Strona Home</h1>
      <p>
        Socjalna sieć dla programmistów
 <p>Przyszła funkcjonalność programu: </p>
 <p> 1. Strona logowania </p>
  <p>2. Strona profilowa </p>
 <p> 3. Możliwość dodawania postów </p>
  <p>4. Możliwośc usuwania postów </p>
  <p>5. Możliwość dodawanaia komentarze</p>
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Do Strony Home
      </button>
    </>
  )
}