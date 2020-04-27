import { getWines, Wine } from '../services/api';
import { useEffect, useState } from 'react';

function Home() {
  const [wines, setWines] = useState<Wine[]>([]);
  useEffect(() => {
    getWines()
      .then(wines => {
        setWines(wines)
      })
  }, []);

  return (
    <div>
      <h1>Wine Cellar</h1>
      <h2>Available Stock</h2>
      <main>
        <ul>
          {wines.map(wine => <li key={wine.name}>{wine.name} {wine.year}</li>)}
        </ul>
      </main>
    </div>
  )
}

export default Home;
