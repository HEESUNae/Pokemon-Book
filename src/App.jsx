import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokeCard from './components/PokeCard';
import AutoComplete from './components/AutoComplete';
// import { useDebounce } from './hooks/useDebounce';

function App() {
  // 모든 포켓몬 데이터
  const [allPokemons, setAllPokemons] = useState([]);

  // 보여지는 포켓몬 리스트
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const limitNum = 20;
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0`;

  // 모든 포켓몬 데이터에서 limitNum 만큼 더 가져오기
  const filterDisplayedPokemonData = (allPokemonsData, displayPokemons = []) => {
    const limit = displayPokemons.length + limitNum;
    const array = allPokemonsData.filter((pokemon, index) => index + 1 <= limit);
    return array;
  };

  // 포켓몬 api 호출
  const fetchPokeData = async () => {
    try {
      // 모든 포켓몬 데이터 받아오기
      const response = await axios.get(url);
      setAllPokemons(response.data.results);
      // 리스트 표출할 포켓몬 리스트
      setDisplayedPokemons(filterDisplayedPokemonData(response.data.results));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <div className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        <AutoComplete allPokemons={allPokemons} setDisplayedPokemons={setDisplayedPokemons} />
      </header>
      <section className="pt-6 flex flex-col justify-content items-center overflow-auto z-0">
        <div className="flex flex-row flex-wrap gap-[16px] items-center justify-center px-2 max-w-4xl">
          {displayedPokemons.length > 0 ? (
            displayedPokemons.map(({ url, name }) => <PokeCard key={url} url={url} name={name} />)
          ) : (
            <h2 className="font-medium text-lg text-slate-900 mb-1">포켓몬이 없습니다.</h2>
          )}
        </div>
      </section>
      <div className="text-center">
        {allPokemons.length > displayedPokemons.length && displayedPokemons.length !== 1 && (
          <button
            onClick={() => setDisplayedPokemons(filterDisplayedPokemonData(allPokemons, displayedPokemons))}
            className="bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white"
          >
            더 보기
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
