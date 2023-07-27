import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import ms from 'ms';
import useGameQueryStore from "../store";
import Game from "../entities/Game";


const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => 
      apiClient
        .get<FetchResponse<Game>>('/games',{
          params: { 
            genres: gameQuery.genreId, 
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          }
        })
        .then(res => res.data),
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms('24hs')
  });
}



export default useGames;