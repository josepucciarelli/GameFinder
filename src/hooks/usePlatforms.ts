import useData from "./useData";
import { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;