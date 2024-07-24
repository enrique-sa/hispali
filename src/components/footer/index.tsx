"use client";
import { externalLink } from "../../modules/utils";
import FacebookIcon from "../../../public/icons/facebookIcon";
import YoutubeIcon from "../../../public/icons/youtubeIcon";
import InstagramIcon from "../../../public/icons/instagramIcon";
import TiktokIcon from "../../../public/icons/tiktokIcon";

export default function Footer() {
  return (
    <footer className="bg-[#042285]">
      <div className="max-w-5xl mx-auto pt-[50px] pb-[25px]">
        <div className="text-center text-white">
          <p className="font-semibold">Dr. Renato Rodríguez Hirales</p>
          <div className="text-sm mb-4">
            <p>Cirujano Estético Certificado</p>
            <p className="mb-4">
              <span className="font-semibold">Ced. Prof. </span>09133468 /
              1993578
            </p>
            <p>
              <span className="font-semibold">Dirección</span>: Blvd. Costero
              1800,
            </p>
            <p>Edificio Ávila - Local PB-A,</p>
            <p>Playa Ensenada, 22880 Ensenada,</p>
            <p>Baja California, México</p>
            <p className="mt-4">
              <span className="font-semibold">Teléfono</span>: +52 646 259 8353
            </p>
          </div>
          <button
            className="p-2 bg-white mx-1 rounded-md text-[#4267B2] hover:text-white hover:bg-[#4267B2]"
            type="button"
            aria-label="Facebook"
            onClick={() => externalLink("https://www.facebook.com/hispali/")}
          >
            <FacebookIcon width="20" height="20" />
          </button>
          <button
            className="p-2 bg-white mx-1 rounded-md text-[#FF0000] hover:text-white hover:bg-[#FF0000]"
            type="button"
            aria-label="Youtube"
            onClick={() =>
              externalLink("https://www.youtube.com/user/renatorh2/")
            }
          >
            <YoutubeIcon width="20" height="20" />
          </button>
          <button
            className="p-2 bg-white mx-1 rounded-md text-[#F56040] hover:text-white hover:bg-[#F56040]"
            type="button"
            aria-label="Instagram"
            onClick={() => externalLink("https://www.instagram.com/drbaja.mx/")}
          >
            <InstagramIcon width="20" height="20" />
          </button>
          <button
            className="p-2 bg-white mx-1 rounded-md text-[#000] hover:text-white hover:bg-[#000]"
            type="button"
            aria-label="Tiktok"
            onClick={() => externalLink("https://www.tiktok.com/@drbaja")}
          >
            <TiktokIcon width="20" height="20" />
          </button>
          <div className="text-sm mt-[50px]">
            <p>Ads: 2302032002A00003</p>
            <p>© 2024 Hispali | Dr. Baja</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
