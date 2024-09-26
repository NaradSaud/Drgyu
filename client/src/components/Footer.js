'use client'
export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-4">
              Email: info@emedical.com <br />
              Phone: +1 234 567 890
            </p>
          </div>
  
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://facebook.com" className="hover:underline">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:underline">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© {new Date().getFullYear()} E-Medical & Home Remedy. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  

