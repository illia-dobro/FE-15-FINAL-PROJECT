import './App.css'
import Modal from './modules/common/components/Modal'
import Catalog from "./pages/catalog";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold p-8">
          <Modal openModal={true}>
              test
          </Modal>
          <Catalog/>
    </h1>
    </>
  )
}

export default App
