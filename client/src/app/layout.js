import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; // Import Tailwind CSS styles

export const metadata = {
  title: 'E-Medical & Home Remedy',
  description: 'Your healthcare and home remedy solution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
