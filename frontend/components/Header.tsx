import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/appointments">Appointments</Link></li>
          <li><Link href="/store">Store</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
