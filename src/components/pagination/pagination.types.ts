
export type PaginationPropsTypes = {
  onClick: (e: any) => void;
  currentPage: number;
  totalPages: number;
  cyTestName?: string;
};

export enum PaginationRangeType  {
  StartRange,
  EndRange,
  OneBeforeEndRange,
  TwoBeforeEndRange,
  ThreeBeforeEndRange,
  MiddleRange
};
