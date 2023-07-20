import Modal from './components/Modal'

import Unique from './components/unique'
import uniqueMainImgUrl from './assets/unique_main.png';
import uniqueSignatureUrl from './assets/unique_signature.svg';

function App() {
  return (
    <>
      <Unique image={{src: uniqueMainImgUrl, alt: 'Our product'}} name="Zara Boltaeva" position="CEO, founder" signature={{src: uniqueSignatureUrl, alt: 'CEO signature'}} />
      <h1 className="text-3xl font-bold p-8">
      <Modal openModal={false}>
        test
       </Modal>
    </h1>
    </>
  )
}

export default App
