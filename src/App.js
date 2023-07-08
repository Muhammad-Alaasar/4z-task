import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductInfo from './components/ProductInfo';
import SupplierProducts from './components/SupplierProducts';
import RelatedSuppliers from './components/RelatedSupplier';
import ContactTheSupplier from './components/ContactTheSupplier';

function App() {
  return (
    <>
      <ProductInfo />
      <RelatedSuppliers />
      <SupplierProducts />
      <ContactTheSupplier />
    </>
  );
}

export default App;
