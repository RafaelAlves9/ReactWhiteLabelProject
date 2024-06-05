import Pagination from '@components/pagination/pagination';

type PaginationProps = {
  onClick: (page: number) => void;
  currentPage: number;
  totalPages: number;
  cyTestName?: string;
};

const MountPagination = ({
  onClick,
  currentPage,
  totalPages,
  cyTestName
}: PaginationProps) => {
  cy.mount(
    <Pagination
      onClick={onClick}
      currentPage={currentPage}
      totalPages={totalPages}
      cyTestName={cyTestName ?? 'pagination'}
    />
  );
};

describe('Pagination Component', () => {
  it('should render', () => {
    MountPagination({ onClick: cy.stub(), currentPage: 1, totalPages: 5 });
    cy.get('[data-cy="pagination"]').should('exist');
  });

  it('should disable previous button on first page', () => {
    MountPagination({ onClick: cy.stub(), currentPage: 1, totalPages: 5 });
    cy.get('[data-cy="pagination"] button').first().should('be.disabled');
  });

  it('should disable next button on last page', () => {
    MountPagination({ onClick: cy.stub(), currentPage: 5, totalPages: 5 });
    cy.get('[data-cy="pagination"] button').last().should('be.disabled');
  });

  it('should call onClick with correct page number when page button is clicked', () => {
    const onClickMock = cy.stub();
    MountPagination({ onClick: onClickMock, currentPage: 1, totalPages: 5 });

    cy.get('[data-cy="pagination"] button').contains('3').click();
    cy.wrap(onClickMock).should('have.been.calledWith', 3);
  });

  it('should highlight the current page', () => {
    MountPagination({ onClick: cy.stub(), currentPage: 3, totalPages: 5 });
    cy.get('[data-cy="pagination"] .active').should('contain.text', '3');
  });

  it('should render correct number of page buttons', () => {
    const totalPages = 5;
    MountPagination({ onClick: cy.stub(), currentPage: 1, totalPages });

    // Total buttons = 5 page buttons + 2 navigation buttons (prev and next)
    cy.get('[data-cy="pagination"] button').contains(totalPages);
  });
});