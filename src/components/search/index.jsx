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

function SearchUi({ onSelectDates, onSelectGuests, onChangeSearch }) {
  return (
    <Container className="search mb-3">
      <div className="search-form">
        <SearchForm
          onSelectDates={onSelectDates}
          onSelectGuests={onSelectGuests}
          onChangeSearch={onChangeSearch}
        />
      </div>
    </Container>
  );
}

export default SearchUi;
