import { Container } from 'react-bootstrap';
import Search from '../../form/search';

function SearchUi() {
  return (
    <Container className="search mb-4">
      <div className="search-form">
        <Search />
      </div>
    </Container>
  );
}

export default SearchUi;
