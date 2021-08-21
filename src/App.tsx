import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import HeroCard from './Components/HeroCard';
import { AiOutlineSearch } from 'react-icons/ai'

function App() {
  useEffect(() => {
    fetchData();
    paginateData();
  }, [])

  const [info, setInfo] = useState<any>([]);
  const [index, setIndex] = useState({ indexA: 0, indexB: 20 });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';
    const req = await fetch(url);
    const data = await req.json();
    setInfo(data);
    console.log(data);
  };

  const paginateData = (): any[] => {
    const paginated = info.slice(index.indexA, index.indexB)
    return paginated;
  };

  const currentPage = paginateData();
  console.log(info);

  return (
    <>
    <Navbar />
    <Container>
      <div className="search">
        <AiOutlineSearch id="searchIcon" size="1.5rem" />
        <input 
        type="text"
        placeholder="Search here for your favorite heros!" 
        onChange={e => setSearchTerm(e.target.value)} 
        value={searchTerm} />
      </div>
      <div className="content">
        <div className="filters">
          <p>Filters:</p>
        </div>
        <div className="heros">
          {!searchTerm 
          ? currentPage.map((hero) => 
          <HeroCard key={hero.id}>
            <img src={hero.images.sm} alt="" />
            <p>{hero.name}</p>
          </HeroCard>) 
          : info.filter((term: any) => {
            if (searchTerm === "") {
              return term;
            } else if (term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return term;
            }
          }).map((hero: any) => 
          <HeroCard key={hero.id}>
          <img src={hero.images.sm} alt="" />
          <p>{hero.name}</p>
        </HeroCard>)}
        </div>
      </div>
      <div className="pageChange">
        {index.indexA !== 0 && <p onClick={() => setIndex({ indexA: index.indexA - 20, indexB: index.indexB - 20})}>Previous</p>}
        <p id="next" onClick={() => setIndex({ indexA: index.indexA + 20, indexB: index.indexB + 20})}>Next</p>
      </div>
    </Container>
    </>
  );
}

export default App;
