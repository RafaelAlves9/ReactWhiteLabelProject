import { useAppSelector } from "@store/store";
import { Container } from "./loading.styles";
import LoadingGif from "@assets/loading_gif.gif";

const Loading = ({ isLoading = false }: { isLoading?: boolean }) => {
  const { isLoading: isLoadingRedux } = useAppSelector((state) => state.loading);

  return (
    (isLoading || isLoadingRedux) && (
      <Container data-cy="loading">
        <img src={LoadingGif} alt="" />
      </Container>
    )
  );
};

export default Loading;
