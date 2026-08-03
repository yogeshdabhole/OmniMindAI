import { Link } from 'react-router-dom';
import { useNavigationLinks } from '../hooks/useNavigationLinks';

const pageLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Chat', to: '/chat' },
  { label: 'PDF Chat', to: '/pdf-chat' },
  { label: 'OCR', to: '/ocr' },
  { label: 'Image Generator', to: '/image-generator' },
  { label: 'Settings', to: '/settings' },
  { label: 'Login', to: '/login' },
  { label: 'Register', to: '/register' },
];

export default function Navbar() {
  const navLinks = useNavigationLinks();

  return (
    <nav className="nav">
      <Link to="/" className="brand">
        OmniMindAI
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        {pageLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
