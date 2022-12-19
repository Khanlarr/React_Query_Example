import { useParams } from "react-router-dom";
import useHeroData from "../hooks/useHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useHeroData(heroId);
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <h2>{data?.data.name}</h2>
      <h6>{data?.data.alterEgo}</h6>
    </div>
  );
};

export default RQSuperHeroPage;
