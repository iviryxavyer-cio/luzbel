import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AlertModal = ({ closeModal, title, message }) => {
    return (
        <Modal
            { ...this.props }
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>{ title }</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{ menssage }</p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="Aceptar buttons buttonModal" onClick={ alert("Entro") }>Aceptar</Button>
                <Button className="Eliminar buttons buttonModal" onClick={ closeModal }>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AlertModal