const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t text-white border-neutral-600 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 ">
        <div className="social-icon">
          <a
           className="w-3/4 h-3/4 "
            href="https://github.com/Mohamedseffine"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-3/4 h-3/4 "
            />
          </a>
        </div>
        <div className="social-icon">
          <a
           className="w-3/4 h-3/4 "
            href="https://www.linkedin.com/in/mohamedseffine/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-7/8 h-7/8 "
            />
          </a>
        </div>
        <div className="social-icon">
          <a
           className="w-3/4 h-3/4 "
            href="https://www.instagram.com/the_wise_enlil/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-3/4 h-3/4 "
            />
          </a>
        </div>
        <div className="social-icon">
          <a
           className="w-3/4 h-3/4 "
            href="https://x.com/MSeffine92121"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-3/4 h-3/4 "
            />
          </a>
        </div>
      </div>
      <p className="text-white" > &copy; Mosdef 2026 </p>
    </footer>
  );
};
export default Footer;
