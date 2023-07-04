import useData from "./useData";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;