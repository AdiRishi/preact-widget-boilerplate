import bannerImage from '../../../static/bannerImage.jpg';
import styles from './banner.module.css';

export function Banner() {
  return (
    <div>
      <h1 className={styles.widgetHeader}>Widget Banner</h1>
      <h1>Widget Banner</h1>
      <img src={bannerImage} alt="Escrow.com: Buy or Sell Online Without the Fear of Fraud" />
    </div>
  );
}
