import { Provider } from 'react-redux';
import Loading from '@components/loading/loading'
import store from '@store/store';

describe('<loading />', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <Loading isLoading={true} />
      </Provider>
    );
    cy.get('[data-cy="loading"]').should("exist");
  });
});