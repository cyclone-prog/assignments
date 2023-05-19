import Card from 'react-bootstrap/Card';
const CardTitle = (props) => {

    // console.log("inside cardtitle",props.cardDetail);
    return (
        <>
            
        <Card.Title>{props.cardDetail}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
         </>
    )
}
export default CardTitle