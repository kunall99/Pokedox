import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState } from "react";
import { useEffect } from "react";

let App = () => {

  let [pokemon, setPokemon] = useState([]);
  let [Icount, setIcount] = useState(1);
  let [count, setCount] = useState(20);
  let [types, setTypes] = useState([]);
  let [selected_type, setSelectedType] = useState("");
  let [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      let response = await fetch("https://pokeapi.co/api/v2/type/");
      let Json = await response.json();
      let temparr = Json.results.map((el) => {
        return el.name;
      })
      setTypes(temparr);
    })();
  }, [])

  useEffect(() => {
    let promisesD = [];
    for (let i = Icount; i <= count; i++) {
      promisesD.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()));
    }
    Promise.all(promisesD).then((result) => {
      let dataobj = result.map((elem) => ({
        name: elem.name,
        id: elem.id.toString(),
        image: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${elem.id}.svg`,
        types: elem.types.map((el) => {
          return el.type.name;
        }),
        stats: elem.stats.map((el) => {
          return {
            value: el.base_stat,
            name: el.stat.name
          }
        })
      }))
      setPokemon(dataobj);
    })
  }, [count]);

  return (
    <div>
      <Header
        types={types}
        setSelectedType={setSelectedType}
        setSearchValue={setSearchValue}
      />
      <Content
        selected_type={selected_type}
        pokemon={pokemon}
        searchValue={searchValue}
      />

      <Footer
        count={count}
        setCount={setCount}
        Icount={Icount}
        setIcount={setIcount}
      />
    </div>
  );
}

export default App;
