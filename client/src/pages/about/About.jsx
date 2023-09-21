import styles from './About.module.scss';
import Quotation from "../../components/quotation/Quotation.jsx";
import {useNavigate} from "react-router-dom";
import Image1 from '../../../src/assets/img/about/Ellipse_8.png';
import Image2 from '../../../src/assets/img/about/signature.jpg';
import Image3 from '../../../src/assets/img/about/Rectangle_37.png';
import Image4 from '../../../src/assets/img/about/./Rectangle_38.png';

function About() {
  const navigate = useNavigate();
  const statistics = [
    {
      units: '+',
      value: 600,
      caption: 'Man on the team'
    },
    {
      units: 'm',
      value: 1.6,
      caption: 'Followers at social network'
    },
    {
      units: '',
      value: 35,
      caption: 'offline shop'
    },
    {
      units: '',
      value: 64,
      caption: 'products of own production'
    },
    {
      units: 'x',
      value: 2,
      caption: 'Revenue growth every year'
    },
    {
      units: '+',
      value: 3,
      caption: 'Location at world'
    },
  ];
  const quoteInfo = {
    quote: `The brand seeks to build respect among the audience for its products, so that the presence of the company's
        products is a sign of prestige, since the focus of the business is focused on exclusive sales, but not on the
        mass market.`,
    authorName: 'Zara Boltaeva',
    authorCaption: 'CEO, Founder',
    imageSrc: Image1,
    signatureSrc: Image2
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <button onClick={() => navigate(-1)}>&#8592; Back</button>
        <div className={styles.page_title}>About Boltaeva</div>
        <div className={styles.text}>The brand seeks to build respect among the audience for its products, so that the presence of the
          company&apos;s products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market. The brand seeks to build respect among the audience for its products, so
          that the presence of the company&apos;s products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </div>
        <div className={styles.page_img}>
          <img src={Image3} alt="about"/>
        </div>
        <div className={styles.text}>The brand seeks to build respect among the audience for its products, so that the presence of the
          company&apos;s products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market.
        </div>

        <div className={`${styles.page_statistics} ${styles.statistics}`}>
          {
            statistics.map((statItem, idx) => {
              return (
                <div className={`${styles.text} ${styles.statistics_item}`} key={idx} >
                  <div className={styles.statistics_number}>{statItem.value}{statItem.units}</div>
                  {statItem.caption}
                </div>
              )
            })
          }
        </div>

        <div className={styles.text}>The brand seeks to build respect among the audience for its products, so that the presence of the
          company&apos;s products is a sign of prestige, since the focus of the business is focused on exclusive sales,
          but not on the mass market. The brand seeks to build respect among the audience for its products, so
          that the presence of the company&apos;s products is a sign of prestige, since the focus of the business is
          focused on exclusive sales, but not on the mass market.
        </div>
        <div className={styles.page_img}>
          <img className={styles.page_img_item} src={Image4} alt="about"/>
        </div>
        <div className={styles.page_summary}>
          Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.
        </div>
        <Quotation
          quote={quoteInfo.quote}
          authorName={quoteInfo.authorName}
          authorCaption={quoteInfo.authorCaption}
          imageSrc={quoteInfo.imageSrc}
          signatureSrc={quoteInfo.signatureSrc}
        />
      </div>
    </div>
  )
}

export default About
