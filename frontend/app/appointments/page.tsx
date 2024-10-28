import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Appointments = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        {/* Appointment booking form will go here */}
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
