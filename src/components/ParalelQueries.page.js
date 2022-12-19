import axios from "axios";
import { useQuery } from "react-query";
const FetchSuperHero = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};
const FetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};
const ParalelQueriesPage = () => {
  const { data: superheroes } = useQuery("super-heroes", FetchSuperHero);
  const { data: friends } = useQuery("friends", FetchFriends);
  return (
    <div>
      {}
      Paralel Queries Page
    </div>
  );
};

export default ParalelQueriesPage;
