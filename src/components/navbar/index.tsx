"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import CloseIcon from "../../../public/icons/closeIcon";
import FacebookIcon from "../../../public/icons/facebookIcon";
import YoutubeIcon from "../../../public/icons/youtubeIcon";
import InstagramIcon from "../../../public/icons/instagramIcon";
import TiktokIcon from "../../../public/icons/tiktokIcon";
import HamburgerMenuIcon from "../../../public/icons/hamburgerMenuIcon";
import { externalLink } from "../../modules/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  const setFullHeight = () => {
    document
      .querySelectorAll<HTMLElement>(".js-fullheight")
      .forEach((element) => {
        element.style.height = `${window.innerHeight}px`;
      });
  };

  useEffect(() => {
    // Establecer la altura inicial
    setFullHeight();
    // Agregar el evento de redimensionamiento
    window.addEventListener("resize", setFullHeight);
    // Limpiar el evento de redimensionamiento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", setFullHeight);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbarPrimary} ${isMenuOpen ? "show" : ""} 
        fixed inset-0 w-full h-full bg-[#042285] text-white top-0 left-0 opacity-100 overflow-y-auto z-[2000]`}
      >
        <button
          className="absolute right-6 md:right-11 top-6 border-0 rounded-full bg-transparent text-white"
          onClick={toggleMenu}
        >
          <CloseIcon width="40" height="40" />
        </button>
        <div className="table w-full h-full js-fullheight">
          <div className="container mx-auto table-cell align-middle js-fullheight">
            <div className="flex flex-wrap my-24">
              <div className="flex flex-col items-center mx-auto">
                <Link href="/">
                  <Image
                    src="https://drbaja.s3.us-east-2.amazonaws.com/logo/drbaja.png"
                    alt="drbaja logo"
                    className="mb-4"
                    width={164}
                    height={90}
                    priority
                  />
                </Link>
                <ul className="text-center">
                  <li>
                    <Link className="block py-2 text-lg" href="/">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 text-lg" href="/">
                      Células Madre
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 text-lg" href="/">
                      Power Serum
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 text-lg" href="/">
                      Implante de Placenta en Gel
                    </Link>
                  </li>
                  <li>
                    <Link className="block py-2 text-lg" href="/">
                      Células NK
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-0 left-0 w-full z-[1030]">
        <div className="bg-[#e7eaf4]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap">
              <div className="w-8/12">
                <button 
                  className="p-2" 
                  type="button" 
                  aria-label="Facebook"
                  onClick={() => 
                    externalLink("https://www.facebook.com/hispali/")
                  }
                >
                  <FacebookIcon width="20" height="20" />
                </button>
                <button
                  className="p-2"
                  type="button"
                  aria-label="Youtube"
                  onClick={() =>
                    externalLink("https://www.youtube.com/user/renatorh2/")
                  }
                >
                  <YoutubeIcon width="20" height="20" />
                </button>
                <button 
                  className="p-2" 
                  type="button" 
                  aria-label="Instagram"
                  onClick={() => 
                    externalLink("https://www.instagram.com/drbaja.mx/")
                  }
                >
                  <InstagramIcon width="20" height="20" />
                </button>
                <button 
                  className="p-2" 
                  type="button" 
                  aria-label="Tiktok"
                  onClick={() =>
                    externalLink("https://www.tiktok.com/@drbaja")
                  }
                >
                  <TiktokIcon width="20" height="20" />
                </button>
              </div>
              <div className="w-4/12 flex items-center justify-end"></div>
            </div>
          </div>
        </div>
        <div className="bg-[#042285]">
          <div className="max-w-5xl mx-auto">
            <div className="relative flex flex-wrap items-center justify-between py-2 px-4">
              <Link className="inline-block py-1.5 mr-4" href="/">
                <Image
                  src="https://drbaja.s3.us-east-2.amazonaws.com/logo/drbaja-100x55.png"
                  alt="drbaja logo"
                  width={73}
                  height={40}
                  priority
                />
              </Link>
              <button className="border-0 bg-transparent text-white" onClick={toggleMenu}>
                <HamburgerMenuIcon width="40" height="40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
