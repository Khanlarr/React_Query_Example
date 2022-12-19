import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const HeroFunk = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-heroes", heroId], HeroFunk, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined;
      }
    },
  });
};

export default useHeroData;
