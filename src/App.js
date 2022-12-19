import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import HomePage from "./components/Home.page";
import RQsuperHeroesPage from "./components/RQsuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import {QueryClientProvider,QueryClient} from'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParalelQueriesPage from "./components/ParalelQueries.page";
import DynamicParalelPage from "./components/DynamicParalel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";
import './App.css'
function App() {
  const queryClient=new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
    <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/superheroes'>Traditional Super Heroes</Link></li>
          <li><Link to='/rq-superheroes'>RQ Super Heroes</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/superheroes" element={<SuperHeroesPage/>}/>
        <Route path="/rq-superheroes" element={<RQsuperHeroesPage/>}/>
        <Route path="/rq-superheroes/:heroId" element={<RQSuperHeroPage/>}/>
        <Route path="/rq-parallel" element={<ParalelQueriesPage/>}/>
        <Route path="/rq-dynamic-parallel" element={<DynamicParalelPage heroIds={[1,3]}/>}/>
        <Route path="/rq-dependent" element={<DependentQueriesPage email="xbeybalayev@example.com"/>}/>
        <Route path="/rq-paginated" element={<PaginatedQueriesPage/>}/>
        <Route path="/rq-infinite" element={<InfiniteQueriesPage/>}/>
      </Routes>
    </div>
   </Router>
   <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
  );
}

export default App;
