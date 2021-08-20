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

  const [info, setInfo] = useState([]);
  const [index, setIndex] = useState({ indexA: 0, indexB: 20 });

  const fetchData = async () => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';
    const req = await fetch(url);
    const data = await req.json();
    setInfo(data);
    console.log(data);
  };

  const paginateData = (): any[] => {
    return info.slice(index.indexA, index.indexB);
  };

  const currentPage = paginateData();

  return (
    <>
    <Navbar />
    <Container>
      <div className="search">
        <AiOutlineSearch id="searchIcon" size="1.5rem" />
        <input type="text" placeholder="Search here for your favorite heros!" />
      </div>
      <div className="content">
        <div className="filters">
          <p>Filters:</p>
        </div>
        <div className="heros">
          {currentPage.map((hero) => 
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
