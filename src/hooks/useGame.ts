import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string) => useQuery({
  queryKey: ["games", slug],
});

export default useGame;
