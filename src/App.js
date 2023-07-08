import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductInfo from './components/ProductInfo';
import SupplierProducts from './components/SupplierProducts';
import RelatedSuppliers from './components/RelatedSupplier';
import ContactTheSuoolier from './components/ContactTheSuoolier';

function App() {
  return (
    <>
      <ProductInfo />
      <RelatedSuppliers />
      <SupplierProducts />
      <ContactTheSuoolier />
    </>
  );
}

export default App;
