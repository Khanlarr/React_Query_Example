import { useAddSuperHeroData, useFetchingData } from "../hooks/useFetchingData";
import { Link } from "react-router-dom";
import { useState } from "react";
const RQsuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const onSuccess = (data) => {
    console.log("perfect,", data);
  };
  const onError = (err) => {
    console.log("bad,", err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useFetchingData(onSuccess, onError);
  const { mutate: addHero } = useAddSuperHeroData();
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };
  // console.log({isLoading,isFetching});
  if (isLoading) {
    return <div>Loading..</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Data</button>
      {data?.data.map((datas) => {
        return (
          <div key={datas.id}>
            <Link to={`/rq-superheroes/${datas.id}`}>
              <h2>{datas.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RQsuperHeroesPage;
