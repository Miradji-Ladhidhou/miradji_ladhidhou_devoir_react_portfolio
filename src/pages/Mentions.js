import Accordion from 'react-bootstrap/Accordion';

function Mentions() {
  return (
    
    <div className='accordion'>
        <div className='mentions'>
            <h1>Mentions légales</h1>
         </div>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body>
                <h2>John Doe</h2>
                <address>40 rue Laure Diebold</address>
                <address>69009 Lyon, France</address>
                <a href='tel:1020304050'>1020304050</a><br></br>
                <a href='mailto:john.doe@gmail.com'>john.doe@gmail.com</a>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
                <address>91 Rue du  Faubourg  Saint-Honoré, 75008 Paris</address>
                <a href= "www.alwaysdata.com">www.alwaysdata.com</a>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
            <p>Ce site a été réalisé par John Doe, étudient au <a href="https://www.centre-europeen-formation.fr/accueil/?mrasn=1390966.1726414.o8OuYOxV">Centre Européen de Fromation</a>.</p>
            <p>Les images utilisées sur ce site sont libres de droits et ont été otenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a>.</p>
            <p>La favicon de ce site a été fournie par<a href="https://www.flaticon.com/fr/">John doe icons erstellt von Freepik - Flaticon</a>.</p>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default Mentions;