import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SearchBar({ word, setWord, handleSubmit }) {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col xs={9}>
                                <Form.Control
                                    type="text"
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                    placeholder="Search for an image"
                                />
                            </Col>
                            <Col xs={3}>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchBar;
