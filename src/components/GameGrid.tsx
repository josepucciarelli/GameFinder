import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GAmeCard from "./GAmeCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GAmeCardContainer from "./GAmeCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GAmeCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GAmeCardContainer>
        ))}
      {data?.results.map((game) => (
        <GAmeCardContainer key={game.id}>
          <GAmeCard game={game} />
        </GAmeCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
