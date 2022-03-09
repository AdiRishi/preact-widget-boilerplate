import bannerImage from '../../../static/bannerImage.jpg';

export function Banner() {
  return (
    <div>
      <h1>Widget Banner</h1>
      <image></image>
      <img src={bannerImage} alt="Escrow.com: Buy or Sell Online Without the Fear of Fraud" />
    </div>
  );
}
