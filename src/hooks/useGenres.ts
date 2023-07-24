import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;