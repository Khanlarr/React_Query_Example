import axios from "axios";
import { useQuery } from "react-query";
const fetchUser = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchChannel = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};
const DependentQueriesPage = ({ email }) => {
  const { data: users } = useQuery(["users", email], () => fetchUser(email));
  const channelId = users?.data.channelId;
  useQuery(["courses", channelId], () => fetchChannel(channelId), {
    enabled: !!channelId,
  });
  return <div>Dependent Queries</div>;
};

export default DependentQueriesPage;
