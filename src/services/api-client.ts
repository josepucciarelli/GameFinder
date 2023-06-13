import Axios from "axios";

export default Axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6950d533c01c4e8e9a3f257c27dc1f9a'
  },
});