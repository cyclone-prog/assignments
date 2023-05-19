import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTitle from './CardTitle';
const CardComponent = (props) => {
    
    

    return (
        <>
        {props.data.map((data)=>{
            return( 
            <div key= {data.id}> 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" key= {data.id} src={data.thumbnailUrl} />
      <Card.Body>
        <CardTitle cardDetail={data.title}/> 
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            )
        })}
        </>
    )
}
export default CardComponent