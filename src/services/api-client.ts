import Axios from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export default Axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fc60f58f80494f39a6f5345878d05c55'
  },
});