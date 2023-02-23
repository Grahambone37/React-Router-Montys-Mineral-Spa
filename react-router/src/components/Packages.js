import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

export default function Packages({ packages }) {
    const displayPackages = packages.map((eachPackage, i) => {
        return (
            <ListGroup.Item key={i}>{eachPackage}</ListGroup.Item>
        )
    })

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Text>
                        Our Packages
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    )
}