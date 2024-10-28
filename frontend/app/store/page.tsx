import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Store = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Store</h1>
        {/* Store items will be listed here */}
      </main>
      <Footer />
    </div>
  );
};

export default Store;
