import { PaginationPropsTypes, PaginationRangeType } from "./pagination.types";
import { Button, Container, PageItem } from "./pagination.styles";
import { ArrowLeftIcon, ArrowRightIcon } from "@extensions/icons";
const Pagination = ({
  onClick,
  currentPage = 1,
  totalPages = 1,
  cyTestName
}: PaginationPropsTypes) => {

  const isPageDisabled = (page: number): boolean => page > totalPages;

  const getRangeType = (): PaginationRangeType => {
    if (currentPage <= 5) return PaginationRangeType.StartRange;
    if (currentPage === totalPages) return PaginationRangeType.EndRange;
    if (currentPage === totalPages - 1) return PaginationRangeType.OneBeforeEndRange;
    if (currentPage === totalPages - 2) return PaginationRangeType.TwoBeforeEndRange;
    if (currentPage === totalPages - 3) return PaginationRangeType.ThreeBeforeEndRange;
    return PaginationRangeType.MiddleRange;
  };

  const getPagesByRange = (range: PaginationRangeType): number[] => {
    switch (range) {
      case PaginationRangeType.StartRange:
        return [1, 2, 3, 4, 5];
      case PaginationRangeType.EndRange:
        return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      case PaginationRangeType.OneBeforeEndRange:
        return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages, totalPages + 1];
      case PaginationRangeType.TwoBeforeEndRange:
        return [totalPages - 2, totalPages - 1, totalPages, totalPages + 1, totalPages + 2];
      case PaginationRangeType.ThreeBeforeEndRange:
        return [totalPages - 1, totalPages, totalPages + 1, totalPages + 2, totalPages + 3];
      case PaginationRangeType.MiddleRange:
        return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
      default:
        return [];
    }
  };

  const getPageNumbers = (): number[] => {
    const rangeType = getRangeType();
    return getPagesByRange(rangeType);
  };

  const getButtonColor = (page: number): string => {
    return currentPage === page ? "#DDDDDD" : "#4A4A4A";
  };

  return (
    <Container>
      <div data-cy={cyTestName ?? ""}>
        <Button
          onClick={() => onClick(currentPage - 1)}
          disabled={currentPage === 1}
          $disabled={currentPage === 1}
        >
          <ArrowLeftIcon
            height="1.1rem"
            color={getButtonColor(1)}
          />
        </Button>

        {getPageNumbers().map((page, index) => (
          <PageItem
            key={index}
            onClick={() => !isPageDisabled(page) && onClick(page)}
            data-cy={cyTestName ?? ""}
            $active={page === currentPage}
            $disabled={isPageDisabled(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </PageItem>
        ))}

        <Button
          onClick={() => onClick(currentPage + 1)}
          data-cy={cyTestName ?? ""}
          disabled={currentPage === totalPages}
          $disabled={currentPage === totalPages}
        >
          <ArrowRightIcon
            height="1.1rem"
            color={getButtonColor(totalPages)}
          />
        </Button>
      </div>
    </Container>
  );
};

export default Pagination;