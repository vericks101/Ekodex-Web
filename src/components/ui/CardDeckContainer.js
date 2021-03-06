import React from '../../../node_modules/react';
import Card from '../../../node_modules/react-bootstrap/Card';
import Button from '../../../node_modules/react-bootstrap/Button';
import CardDeck from '../../../node_modules/react-bootstrap/CardDeck';
import styled from '../../../node_modules/styled-components';

const Styles = styled.div`
    .CardContainer {
        padding: 30px;
    }

    @media (min-width: 100px) {
        .card-deck {
            display: flex;
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }
    }
`;

// Component for utilizing a card format for game titles on the landing page.
const CardDeckContainer = () => {
    return(
        <Styles>
            <div className = 'CardContainer'>
                <CardDeck>
                    <Card className="text-center" style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={require('../../assets/unbound-banner.jpg')} />
                    <Card.Body>
                        <Card.Title><b>UNBOUND</b></Card.Title>
                        <Card.Text>
                            A 2D side scroller sandbox experience bringing you on a journey across the solar system to explore, discover, 
                            and ultimately rid the galaxy of an inevitable threat to you and all that you know and have left.
                        </Card.Text>
                        <Button variant="outline-light" href="/unbound">Learn more</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"></small>
                    </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </Styles>
    );
}

export default CardDeckContainer;