import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import { AiOutlineSearch } from 'react-icons/ai'

function App() {
  useEffect(() => {
    fetchData();
  }, [])

  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json'
    const req = await fetch(url);
    const data = await req.json();
    setInfo(data);
    console.log(data);
  };

  const paginateData = (): any[] => {
    return info.slice(0, 20);
  };

  const paginated = paginateData();
  console.log(paginated);

  return (
    <>
    <Navbar />
    <Container>
      <div className="search">
        <AiOutlineSearch id="searchIcon" size="1.5rem" />
        <input type="text" placeholder="Search here for your favorite heros!" />
      </div>
      <div className="content">
        <div className="filters"></div>
        {paginated.map((hero) => 
        <div className="heros" key={hero.id}>
          <p>{hero.name}</p>
        </div>)}
      </div>
    </Container>
    </>
  );
}

export default App;
