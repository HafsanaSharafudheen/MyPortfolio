import styles from './connect.module.css';

const ConnectComponent = () => {
  const handleConnectClick = () => {
    window.location.href = 'mailto:hafsanasharafudheen@gmail.com';
  };

  
    return (
        <div className={styles.container}>
          <div className={styles.neonLine}></div>
          <div className={styles.connectBox}>
            <h1 className={styles.heading}>
              How about we start something awesome <span style={{ color: 'neon green' }}>together?</span>
            </h1>
            <h6>Your input is invaluable, and I'm eager to collaborate! Hit the button below to reach out, and let’s explore the possibilities together.</h6>
            <button className={styles.connectButton} onClick={handleConnectClick}>
              Let's Connect
            </button>
          </div>
        </div>
      );
  
};

export default ConnectComponent;
