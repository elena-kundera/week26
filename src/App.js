import './App.css';
import heroes from './superheroes.json';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
        <Hero avatar={hero.avatar} name={hero.name} universe={hero.universe} alter={hero.alter}  activity={hero.activity} friends={hero.friends} superpower={hero.superpower}></Hero>
        )
      }
    </div>
  );
}

export default App;
