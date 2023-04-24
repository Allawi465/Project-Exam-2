import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { GoSettings } from 'react-icons/go';
import { RiSearchLine } from 'react-icons/ri';


function Search() {

    return (
        <>
            <form className='searchForm'>
                <div style={{ width: '100%' }}>
                    <InputGroup>
                    <InputGroup.Text><RiSearchLine size={24} /></InputGroup.Text>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <InputGroup.Text><GoSettings size={24} /></InputGroup.Text>
                    </InputGroup>
                </div>
            </form>
        </>
    );
}

export default Search;