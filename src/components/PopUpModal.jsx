import '../assets/css/PopUpModal.css'
import ResmicQrCode from '../assets/images/ResmicQrCode.png'
import { useState } from 'react';

function PopUpModal() {
    const [copySuccess, setCopySuccess] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const textToCopy = " https://www.instagram.com/0xresmic";

    // Function to copy text on clipboard
    const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); 
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  //Function used to open Custom CSS Modal
  const handleOpen = () => {
    setIsModalVisible(true);
  };

 //Function used to closed Custom CSS Modal
  const handleClose = () => {
    setIsModalVisible(false);
  };
  
  return (
    <>      
      <div className="container-fluid">
        <div className="row min-vh-100 overflow-x-hidden">
            <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
                <div className="row">
                    <div className="col-md-5 m-3">
                        <button className="btn mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                        </svg>
                        <span className="text">Click Me - Bootstrap!!!</span>
                        </button>
                    </div>

                    <div className="col-md-5 m-3">
                        <button className="btn mx-4" onClick={handleOpen}>
                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                        </svg>
                        <span className="text">Click Me - CSS!!!</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/*  Modal */}
        <div className="modal fade bg-blue-voilet" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5 blue-voilet-text" id="exampleModalLabel">Share</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="row justify-content-center ">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={ResmicQrCode} alt="resmic-qr" className='img-fluid'/>
                    </div>

                    <div className='col-md-12 mt-3'>
                        <p>Copy Link</p>
                        <p className='border border-primary text-primary px-3 py-2 rounded-3'> 
                        <a href="https://www.instagram.com/0xresmic" className='text-decoration-none' target='_blank'>
                        <i className="bi bi-link-45deg"></i>
                        https://www.instagram.com/0xresmic
                        </a>
                        </p>

                        <div className="col-md-12">
                            <button className='w-100 bg-blue-voilet p-2 rounded-3 text-white text-center border border-white' onClick={handleCopy}>
                                Copy
                            </button>
                            {
                                copySuccess &&
                                <div class="blue-voilet-text mt-2 text-center" role="alert">
                                Copied to Clipboard!!!
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        {/* modal for CSS */}
        {isModalVisible && (
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <div className="modal-header2">
                        <h1 className="modal-title2">Share</h1>
                        <button className="close-btn" onClick={handleClose}>&times;</button>
                        </div>
                        <div className="modal-body2">
                        <div className="image-container">
                            <img src={ResmicQrCode} alt="Resmic QR Code" width="250px"/>
                        </div>
                        <div className="link-container">
                            <p style={{textAlign:'start'}}>Copy Link</p>
                            <p className="link-box">
                            <a href={textToCopy} className="link" target='_blank'>
                                <i className="bi bi-link-45deg"></i> {textToCopy}
                            </a>
                            </p>
                        </div>
                        <div className="copy-button-container">
                            <button className="copy-btn" onClick={handleCopy}>Copy</button>
                            {copySuccess && (
                            <div className="copy-success">
                                Copied to Clipboard!!!
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </>
  )
}

export default PopUpModal;