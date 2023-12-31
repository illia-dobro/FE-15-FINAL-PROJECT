import ContactsDetails from "../../components/contactsDetails";
import GoogleMap from "../../components/googleMap";
import SocialMedia from "../../components/socialMedia";
// import SocialMediaBtn from "../../components/buttons/socialMediaBtn";
// import SocialMediaImages from "../../components/socialMediaImages";
import RequestCallBack from "../../components/requestCallBack";
import Image3 from '../../assets/contacts_intro.png';

import styles from './Contacts.module.scss';


function Contacts() {
  // const contactsMediaLinks = [
  //   {
  //     src: '../../src/components/buttons/socialMediaBtn/facebook.svg',
  //     alt: 'facebook icon',
  //     to: 'https://www.facebook.com/profile.php?id=100069141050508',
  //   },
  //   {
  //     src: '../../src/components/buttons/socialMediaBtn/instagram.svg',
  //     alt: 'instagram icon',
  //     to: 'https://www.instagram.com/beauty.shop.ek/',
  //   },
  //   {
  //     src: '../../src/components/buttons/socialMediaBtn/twitter.svg',
  //     alt: 'tweeter icon',
  //     to: '',
  //   },
  //   {
  //     src: '../../src/components/buttons/socialMediaBtn/youtube.svg',
  //     alt: 'youtube icon',
  //     to: 'https://www.youtube.com/@user-xj9wk2dr9q',
  //   },
  //   {
  //     src: '../../src/components/buttons/socialMediaBtn/vk.svg',
  //     alt: 'vkontante icon',
  //     to: 'https://ru.wikipedia.org/wiki/%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5',
  //   }
  // ]

  return (
    <>
      <div className={styles.contacts__container}>

        <p className={styles.contacts__title}>Our contacts</p>
        <img src={Image3} alt="intro" className={styles.contacts__introImg} />

        <ContactsDetails />

        <GoogleMap />

        <div className={styles.contacts__socialMedia}>
          <SocialMedia text='Each Boltaeva brand product is truly unique - everything is thought out to the smallest detail.' />

          {/* <nav className={styles.contacts__socialMedia_buttons}>
            <SocialMediaBtn icons={contactsMediaLinks}/>
          </nav> */}
        </div>

        {/* <div className={styles.contacts__mediaImages_visible}>
          <SocialMediaImages
            socialMediaImages = {[
              {
                src: '../../src/components/socialMediaImages/socialImg1.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg2.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg1.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg2.png',
                alt: 'Social Media Image',
              },
            ]}
          />
        </div>

        <div className={styles.contacts__mediaImages_hidden}>
          <SocialMediaImages
            socialMediaImages = {[
              {
                src: '../../src/components/socialMediaImages/socialImg3.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg4.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg3.png',
                alt: 'Social Media Image',
              },
              {
                src: '../../src/components/socialMediaImages/socialImg4.png',
                alt: 'Social Media Image',
              },
            ]}
          />
        </div> */}

        <RequestCallBack />
      </div>

    </>
  )
}

export default Contacts;
