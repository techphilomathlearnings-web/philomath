const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-4 bg-linear-to-r from-primary from-10% via-[#0B0367] via-50% to-secondary to-90% w-full text-primary-content py-12"
    >
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="flex flex-col items-center gap-1">
        <p className="">Phone: +91-7439303013</p>
        <p className="">Email: philomath.learnings@gmail.com</p>
        <p className="">Address: Baguiati, Kolkata, India</p>
      </div>
    </div>
  );
};

export default Footer;
