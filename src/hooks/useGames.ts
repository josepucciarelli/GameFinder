import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platform } from "./usePlatforms";


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform:Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (
  gameQuery: GameQuery
) => 
useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam = 1 }) => 
    apiClient
      .get<FetchResponse<Game>>('/games',{
        params: { 
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        }
      })
      .then(res => res.data),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      }
})


export default useGames;