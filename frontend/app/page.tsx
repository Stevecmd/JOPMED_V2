import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Medical Application</h1>
        <p className="mt-4">Your health, our priority.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
