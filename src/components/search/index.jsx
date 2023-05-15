import { Container } from 'react-bootstrap';
import { SearchForm } from '../../form/index';

/**
 * Renders the search UI component
 * @component
 * @property {function} SearchForm A form for search functionality
 * @returns {React.ReactElement} Search component
 * @example
 * <SearchUi />
 */

function SearchUi() {
  return (
    <Container className="search mb-4">
      <div className="search-form">
        <SearchForm />
      </div>
    </Container>
  );
}

export default SearchUi;
