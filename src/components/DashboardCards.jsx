import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "../styles/homePageStyles.css";
import "../styles/multistepform.css";
function DashboardCards({cardImage,title,cardContent,buttonName,cardFunction} ) {
  return (
    <Card id='dashboard-cards' className="d-flex flex-column" style={{ height: '100%' }}>
      <Card.Img variant="top" src={cardImage} style={{ height: '10rem', width: '12rem' }} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <p className='h4'>{title}</p>
          <Card.Text>{cardContent}</Card.Text>
        </div>
        <Button variant="primary" onClick={cardFunction} className="align-self-end">
          {buttonName}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default DashboardCards;

