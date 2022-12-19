import axios from "axios";
import { useState, useEffect } from "react";
const SuperHeroesPage = () => {
  const [data, setData] = useState();
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState("");
  const AxsionFunk = () => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setIspending(false);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
        setIspending(false);
      });
    console.log(ispending);
  };
  useEffect(() => {
    return AxsionFunk;
  }, []);
  if (ispending) {
    return <div>Loading.....</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {data &&
        data.map((datas) => {
          return (
            <div key={datas.id}>
              <h2>{datas.name}</h2>
              <h4>{datas.alterEgo}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default SuperHeroesPage;
