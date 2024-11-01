import styles from './connect.module.css';

const ConnectComponent = () => {
  const handleConnectClick = () => {
    window.location.href = 'mailto:hafsanasharafudheen@gmail.com';
  };

  
    return (
        <div className={styles.MainBox}>
          <div className={styles.connectBox}>
            <h1 className={styles.heading}>
              How about we start something awesome together?
            </h1>
            <h6>Your input is invaluable, and I'm eager to collaborate!
                <p> Hit the button below to reach out, and let’s explore the possibilities together.</p></h6>
            <button className={styles.downloadButton} onClick={handleConnectClick}>
              Let's Connect
            </button>
          </div>
        </div>
      );
  
};

export default ConnectComponent;
