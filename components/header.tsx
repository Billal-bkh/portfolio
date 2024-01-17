import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-center items-center border-b-2 border-[#FF3F3F] font-sans">
      <div className="w-auto h-full flex justify-between items-center gap-5">
        <Link href="/" className="xl:text-lg text-sm font-bold">
          Home
        </Link>
        <Link href="/about" className="xl:text-lg text-sm font-bold">
          About
        </Link>
        {/* <p className="text-lg font-bold">Services</p> */}
        <Link href="/about#contact" className="xl:text-lg text-sm font-bold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
