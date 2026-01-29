const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="section-container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} <span itemProp="name">Saad Naveed</span> — Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
