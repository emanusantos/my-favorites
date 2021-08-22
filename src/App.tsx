import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import FlipCard from './Components/FlipCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { CgBorderStyleDotted } from 'react-icons/cg';

function App() {
  useEffect(() => {
    fetchData();
    paginateData();
  }, [])

  const [info, setInfo] = useState<any>([]);
  const [index, setIndex] = useState({ indexA: 0, indexB: 20 });
  const [searchTerm, setSearchTerm] = useState('');
  const [interest, setInterest] = useState(false);

  const fetchData = async (): Promise<void> => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';
    const req = await fetch(url);
    const data = await req.json();
    setInfo(data);
  };

  const paginateData = (): any[] => {
    const paginated = info.slice(index.indexA, index.indexB)
    return paginated;
  };

  const currentPage = paginateData();

  const nextPage = () => {
    setIndex({ indexA: index.indexA + 20, indexB: index.indexB + 20})
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const previousPage = () => {
    setIndex({ indexA: index.indexA - 20, indexB: index.indexB - 20})

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const interestToggler = () => {
    setInterest(!interest);
  }

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
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} />)
          : info.filter((term: any) => {
            if (searchTerm === "") {
              return term;
            } else if (term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return term;
            }
          }).map((hero: any) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} />)}
        </div>
      </div>
      {!searchTerm && <div className="pageChange">
        {index.indexA !== 0 && <p id="previous" onClick={previousPage}><GrPrevious /></p>}
        <p><CgBorderStyleDotted /></p>
        <p id="next" onClick={nextPage}><GrNext /></p>
      </div>}
    </Container>
    </>
  );
}

export default App;
