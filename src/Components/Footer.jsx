import { FaGithub } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaYoutube, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-20 mt-10 flex flex-col justify-center items-center gap-8">
      <div id="social-media-icons" className="flex gap-10 text-3xl">
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <CiInstagram />
        </a>
        <a href="">
          <AiFillTwitterCircle />
        </a>
        <a href="">
          <CgMail />
        </a>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaYoutube />
        </a>
      </div>

      <div id="links" className="flex flex-col gap-5 sm:flex-row sm:gap-12">
        <a href="">Terms of Use</a>
        <a href="">About Us</a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <a href="">Our Mission</a>
        </div>



      <div id="copyright" className="p-2 w-full rounded-lg bg-light-grey text-center">
        Copyright &copy; 2024, Made by team 17
      </div>
    </footer>
  );
}

export default Footer;
