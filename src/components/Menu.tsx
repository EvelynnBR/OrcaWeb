import { useState } from "react";
import logo from "../assets/image/logo.svg";
import Button from "./Button";
import Link from "./Link";

import menuHamburguer from "../assets/icon/menu-hamburguer.svg";
import service from "../assets/icon/service.svg";
import listCheck from "../assets/icon/list-check.svg";
import plans from "../assets/icon/plans.svg";
import contact from "../assets/icon/contact.svg";

export default function Menu() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow((prev) => !prev);
  }
  function handleAlert(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    alert("Botão de teste!");
  }
  return (
    <>
      <nav className="px-4 pt-4 flex justify-between items-center relative lg:px-8 lg:pt-8">
        <div className="flex gap-2 ">
          <img className="w-7 h-7" src={logo} alt="" aria-hidden="true" />
          <strong className="text-purple-700 text-lg " title="Logo OrçaWeb">
            OrçaWeb
          </strong>
        </div>

        <Button className="h-8 px-2 lg:hidden" onClick={() => handleShow()}>
          <img className="w-full" src={menuHamburguer} alt="" aria-hidden="true" />
        </Button>
        <ul
          className={`absolute top-14 grid bg-purple-500 left-0 px-1 right-0 py-4 bg-pur lg:py-0 gap-2 shadow-[0_12px_32px_rgba(130,0,219,0.30)] lg:shadow-none text-white font-medium lg:flex lg:top-5 lg:right-4 lg:justify-end lg:gap-4 lg:bg-transparent lg:text-black lg:items-center ${show ? "block" : "hidden"}`}
        >
          <li className="lg:relative flex group bg-purple-400 lg:bg-white rounded-lg pl-4 lg:pl-0">
            <img className="w-5 mr-2 lg:hidden" src={service} alt="" aria-hidden="true" />
            <Link
              href="#service"
              aria-label="Serviços"
              variant="tertiary"
              className="text-white lg:text-gray-800 p-0 justify-start h-8 font-normal lg:font-semibold"
            >
              Serviços
            </Link>
            <span className="lg:h-0.5 lg:bg-purple-500 lg:left-0 lg:right-0 lg:absolute lg:top-6 lg:scale-0 lg:transition-transform lg:duration-300 lg:group-hover:scale-115"></span>
          </li>
          <li className="lg:relative flex group bg-purple-400 lg:bg-white lg:text-gray-800 rounded-lg pl-4 lg:pl-0">
            <img className="w-5 mr-2 lg:hidden" src={listCheck} alt="" aria-hidden="true" />
            <Link
              href="#feature"
              aria-label="Como funciona"
              variant="tertiary"
              className="text-white lg:text-gray-800 p-0 justify-start h-8 font-normal lg:font-semibold"
            >
              Como funciona
            </Link>
            <span className="lg:h-0.5 lg:bg-purple-500 lg:left-0 lg:right-0 lg:absolute lg:top-6 lg:scale-0 lg:transition-transform lg:duration-300 lg:group-hover:scale-115"></span>
          </li>
          <li className="lg:relative flex group bg-purple-400 lg:bg-white lg:text-gray-800 rounded-lg pl-4 lg:pl-0">
            <img className="w-5 mr-2 lg:hidden" src={plans} alt="" aria-hidden="true" />
            <Link
              href="#"
              aria-label="Planos"
              onClick={handleAlert}
              variant="tertiary"
              className="text-white lg:text-gray-800 p-0 justify-start h-8 font-normal lg:font-semibold"
            >
              Planos
            </Link>
            <span className="lg:h-0.5 lg:bg-purple-500 lg:left-0 lg:right-0 lg:absolute lg:top-6 lg:scale-0 lg:transition-transform lg:duration-300 lg:group-hover:scale-115"></span>
          </li>
          <li className="lg:relative flex group bg-purple-400 lg:bg-white lg:text-gray-800 rounded-lg pl-4 lg:pl-0">
            <img className="w-5 mr-2 lg:hidden" src={contact} alt="" aria-hidden="true" />
            <Link
              href="#"
              aria-label="Contato"
              onClick={handleAlert}
              variant="tertiary"
              className="text-white lg:text-gray-800 p-0 justify-start h-8 font-normal lg:font-semibold"
            >
              Contato
            </Link>
            <span className="lg:h-0.5 lg:bg-purple-500 lg:left-0 lg:right-0 lg:absolute lg:top-6 lg:scale-0 lg:transition-transform lg:duration-300 lg:group-hover:scale-115"></span>
          </li>
          <Button
            className="hidden lg:flex lg:ml-6"
            onClick={() => alert("Botão de teste!")}
            title="Solicitar proposta"
          >
            Solicitar proposta
          </Button>
        </ul>
      </nav>
      <div className="h-px bg-gray-200 my-2 lg:my-8"></div>
    </>
  );
}
