import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Container from './Components/Container';
import FlipCard from './Components/FlipCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { CgBorderStyleDotted } from 'react-icons/cg';

interface Api {
  appearances: {};
  biography: {};
  connections: {};
  images: {
    sm: string;
  };
  id: number;
  name: string;
  powerstats: {};
  slug: string;
  work: {};
}

function App() {
  useEffect(() => {
    fetchData();
    paginateData();
    getFiltereds();
  }, []);

  const [info, setInfo] = useState<Api[]>([]);
  const [seen, setSeen] = useState<string[]>([]);
  const [yet, setYet] = useState<string[]>([]);
  const [never, setNever] = useState<string[]>([]);
  const [index, setIndex] = useState({ indexA: 0, indexB: 20 });
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('seenHeroes', JSON.stringify(seen));
    localStorage.setItem('yetHeroes', JSON.stringify(yet));
    localStorage.setItem('neverHeroes', JSON.stringify(never));
  }, [seen, yet, never])

  const fetchData = async (): Promise<void> => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';
    const req = await fetch(url);
    const data = await req.json();
    setInfo(data);
    console.log(info);
  };

  const paginateData = (): Api[] => {
    const paginated = info.slice(index.indexA, index.indexB)
    return paginated;
  };

  const getFiltereds = (): void => {
    const storedSeenHeroes = localStorage.getItem('seenHeroes')!;
    setSeen(JSON.parse(storedSeenHeroes));
    const storedYetHeroes = localStorage.getItem('yetHeroes')!;
    setYet(JSON.parse(storedYetHeroes));
    const storedNeverHeroes = localStorage.getItem('neverHeroes')!;
    setNever(JSON.parse(storedNeverHeroes));
  };


  const currentPage = paginateData();

  const nextPage = (): void => {
    setIndex({ indexA: index.indexA + 20, indexB: index.indexB + 20})
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const previousPage = (): void => {
    setIndex({ indexA: index.indexA - 20, indexB: index.indexB - 20})

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const filterHero = (e: React.ChangeEvent<HTMLInputElement>) => {
    const heroId = e.target.id;
    const heroClass = e.target.value;

    if (heroClass === 'seen') {
      setSeen([heroId, ...seen]);
      console.log(seen);
    };

    if (heroClass === 'yet') {
      setYet([heroId, ...yet]);
    };

    if (heroClass === 'never') {
      setNever([heroId, ...never])
    };
  };

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
          <div className="filter">
            <label>None</label>
            <input 
            type="radio" 
            value=''
            checked={filter === null} 
            onChange={(e) => setFilter(e.target.value)} 
            />
          </div>
          <div className="filter">
            <label>Already seen</label>
            <input 
            type="radio" 
            value="seen" 
            checked={filter === 'seen'} 
            onChange={(e) => setFilter(e.target.value)} 
            />
          </div>
          <div className="filter">
            <label>Yet to see</label>
            <input 
            type="radio" 
            value="yet" 
            checked={filter === 'yet'} 
            onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="filter">
            <label>Never seen</label>
            <input 
            type="radio" 
            value="never" 
            checked={filter === 'never'} 
            onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="heros">
          {filter === 'seen' && info.filter((term: Api) => {
            if ([...seen].includes(term.id.toString())) {
              return term;
            }
          }).map((hero: any) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} filterRadio={filterHero} id={hero.id} />)}

          {filter === 'yet' && info.filter((term: Api) => {
            if ([...yet].includes(term.id.toString())) {
              return term;
            }
          }).map((hero: Api) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} filterRadio={filterHero} id={hero.id} />)}

          {filter === 'never' && info.filter((term: Api) => {
            if ([...never].includes(term.id.toString())) {
              return term;
            }
          }).map((hero: Api) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} filterRadio={filterHero} id={hero.id} />)}

          {!searchTerm && !filter && currentPage.map((hero) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} filterRadio={filterHero} id={hero.id} />)}

          {searchTerm && info.filter((term: Api) => {
            if (searchTerm === "") {
              return term;
            } else if (term.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return term;
            }
          }).map((hero: Api) => 
          <FlipCard key={hero.id} src={hero.images.sm} name={hero.name} filterRadio={filterHero} id={hero.id} />)}
        </div>
      </div>
      {!searchTerm && !filter && <div className="pageChange">
        {index.indexA !== 0 && <p id="previous" onClick={previousPage}><GrPrevious /></p>}
        <p><CgBorderStyleDotted /></p>
        <p id="next" onClick={nextPage}><GrNext /></p>
      </div>}
    </Container>
    </>
  );
}

export default App;
