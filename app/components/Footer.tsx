import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/mission">Our Mission</Link></li>
              <li><Link href="/history">History</Link></li>
              <li><Link href="/team">Our Team</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/partner">Partner with Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/publications">Publications</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Main Street, Colombo, Sri Lanka</p>
            <p>Phone: +94 11 123 4567</p>
            <p>Email: info@unicefsrilanka.org</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 UNICEF Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}