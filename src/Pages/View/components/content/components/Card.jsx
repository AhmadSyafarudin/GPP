import React from "react";
import "./card.css";


// Bs Modal Requirements
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

//React Icons
import { FaBed, FaBath } from "react-icons/fa";

const Card = (data) => {
  //MODAL BS
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{data.nama}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_container">
          <img className="card-img-modal" src={data.url2} alt="home img"></img>

          <div className="modal_content">
            <h4>Deskripsi</h4>
            <p>
              Kos-kosan dengan Ukuran {data.panjang}x{data.lebar}m berlokasi di {data.alamat} dengan fasilitas {data.fasilitas}
            </p>
            <p>Harga sewa per-tahun Rp. {data.harga}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <div className="card-container" onClick={() => setModalShow(true)}>
        <div className="card-top">
          <img className="card-img" src={data.url1} alt="home img"></img>
          <div className="card-desc">
            <div className="property-title">{data.nama}</div>
            <div className="property-address">{data.alamat}</div>
            <div className="property-price">Rp. {data.harga}</div>
            <div className="facilities">Facilities</div>
            <div className="property-facilities">
              <div className="facilitiy">
                <div>{data.kamar}</div>
                <FaBed className="icon-1" />
              </div>
              <div className="facilitiy">
                <div>{data.toilet}</div>
                <FaBath className="icon-2" />
              </div>
              <div className="facilitiy">
                <div>{data.panjang}x{data.lebar}m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-bottom">Booking</div>
      </div>

      {/* Bootstrap Modal */}
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Card;
