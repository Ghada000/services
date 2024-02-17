import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

const MapModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const openGoogleMap = () => {
    window.open(
      'https://www.google.com/maps/dir/36.1729404,8.7150938/36.865275,10.1642883/@36.4720248,10.5641459,8z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu',
      '_blank'
    );
  };

  return (
    <>
      <Dropdown.Item onClick={openGoogleMap}>
        📍 Map
      </Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Google Map</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default MapModal;