import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center gap-4 bg-linear-to-r from-primary from-10% via-[#0B0367] via-50% to-secondary to-90% w-full text-primary-content py-12"
    >
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="flex flex-col items-center gap-1">
        <Link href={`tel:+917439303013`} className="flex gap-2 items-end">
          <Phone className="size-4 md:size-5 shrink-0" />
          <p className="text-sm md:text-base">+91 74393 03013</p>
        </Link>
        <Link
          href={`mailto:philomath.learnings@gmail.com`}
          className="flex gap-2 items-end"
        >
          <Mail className="size-4 md:size-5 shrink-0" />
          <p className="text-sm md:text-base">philomath.learnings@gmail.com</p>
        </Link>
        <p className="">Address: Baguiati, Kolkata, India</p>
      </div>
    </div>
  );
};

export default Footer;
