import Accordion from 'react-bootstrap/Accordion';
import "../styles/homePageStyles.css"

function Accordions({title,disc}) {
  return (
    <Accordion className='mx-5 my-5 accordions'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {disc}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordions;