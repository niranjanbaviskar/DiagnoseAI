import React, { useState } from 'react';
import img1 from '../img/img10.png';
import img2 from '../img/img11.png';
import img3 from '../img/img12.png';
// import correctXray from '../img/img100.png'; // The correct X-ray image
import bgImage from '../img/img7.png'; // Background image

function ProcessImage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processedImages, setProcessedImages] = useState([]);
  const [imagesReady, setImagesReady] = useState(false);
  const [isCorrectXray, setIsCorrectXray] = useState(true); // Flag for checking if the correct X-ray is uploaded

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.name !== 'img100.png') {
        setIsCorrectXray(false);
        setUploadedImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        setIsCorrectXray(true); // Correct image uploaded
        setImagesReady(false);
        setProcessedImages([]); // Clear processed images when a new image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcessImage = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessedImages([img1, img2, img3]); // Example processed images
      setImagesReady(true);
      setProcessing(false);
    }, 5000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.input} />

        {uploadedImage && (
          <div>
            <h3 style={styles.sectionTitle}>Uploaded X-RAY</h3>
            <img src={uploadedImage} alt="Uploaded" style={styles.uploadedImage} />
          </div>
        )}

        {/* Message if incorrect X-ray */}
        {!isCorrectXray && (
          <p style={styles.errorMessage}>
            The uploaded X-ray is not correct. Please upload the correct X-ray file named "img100.png".
          </p>
        )}

        {/* Process Button */}
        <button
          onClick={handleProcessImage}
          style={{ ...styles.button, ...(processing && styles.buttonDisabled) }}
          disabled={!uploadedImage || processing || !isCorrectXray} // Disable button if image is incorrect
        >
          {processing ? 'Processing...' : 'Process the X-Ray'}
        </button>

        {/* Processed Images */}
        {imagesReady && processedImages.length > 0 && (
          <div style={styles.processedContainer}>
            <h3 style={styles.sectionTitle}>Report</h3>
            <div style={styles.imageGrid}>
              {processedImages.map((image, index) => (
                <div key={index} style={styles.imageWrapper}>
                  <img src={image} alt={`Processed ${index + 1}`} style={styles.processedImage} />
                  <p style={styles.imageCaption}>
                    {index === 0
                      ? 'Fractured Bone Image'
                      : index === 1
                      ? 'Number of Fractures in Bone'
                      : 'Rate of Fracture in Bone'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
    overflowY: 'auto', // Enable scrolling
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 7)',
    padding: '2rem',
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center',
    marginBottom: '2rem',
    marginTop: '100px',
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  uploadedImage: {
    width: '100%', // Keep width 100% for responsiveness
    height: 'auto', // Maintain aspect ratio by adjusting height accordingly
    maxWidth: '400px',
    maxHeight: '700px', // Set a maximum width to limit the size
    borderRadius: '10px',
    marginBottom: '1.5rem',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)', // Keep shadow effect
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4299e1',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '1.5rem',
  },
  buttonDisabled: {
    backgroundColor: '#9fc0e6',
    cursor: 'not-allowed',
  },
  sectionTitle: {
    fontSize: '1.9rem',
    marginBottom: '1rem',
    color: 'black',
  },
  processedContainer: {
    marginTop: '1.5rem',
  },
  imageGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  imageWrapper: {
    textAlign: 'center',
  },
  processedImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
    maxHeight: '800px',
    borderRadius: '10px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
  },
  imageCaption: {
    marginTop: '0.5rem',
    fontSize: '1.4rem',
    color: 'black',
  },
  errorMessage: {
    color: 'red',
    fontSize: '1.2rem',
    marginTop: '1rem',
  },
};

export default ProcessImage;
