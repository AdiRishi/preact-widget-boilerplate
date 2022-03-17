import bannerImage from '../../../static/bannerImage.jpg';
import styles from './styles.css';

export function Banner() {
  return (
    <div>
      <h1 className={styles.widgetHeader}>Widget Banner</h1>
      <image></image>
      <img src={bannerImage} alt="Escrow.com: Buy or Sell Online Without the Fear of Fraud" />
    </div>
  );
}
