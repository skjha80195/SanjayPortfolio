const Footer = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md text-white text-center py-6 border-t border-gray-700">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Sanjay Kumar Jha | Built with React & TailwindCSS | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
