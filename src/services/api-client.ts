import Axios from "axios";

export default Axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fcfb23f49d95478c9eecc05b31729443'
  },
});