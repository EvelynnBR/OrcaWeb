import Link from "./Link";

import calculadora from "../assets/icon/calculator.svg";
import monitorDefault from "../assets/icon/monitor-default.svg";
import monitorHover from "../assets/icon/monitor-hover.svg";

import protect from "../assets/icon/protect.svg";
import flash from "../assets/icon/flash.svg";
import security from "../assets/icon/security.svg";

export default function Hero() {
  return (
    <section className="lg:grid lg:justify-center">
      <div className="mx-4 grid mt-5 gap-4 lg:w-180">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
          Descubra o valor do seu site
          <span className="text-purple-700"> em minutos</span>
        </h1>
        <h2 className="text-ms md:text-lg text-gray-700">
          Simule o orçamento do seu site de forma dinâmica e receba uma
          estimativa instantânea com base nas suas escolhas.
        </h2>
      </div>
      <div className="mt-6 lg:mt-10 grid mx-4 gap-4 w-auto md:justify-center lg:flex lg:justify-start">
        <Link
          href="/orcamento"
          aria-label="Simular orçamento"
          className="w-full md:w-150 md:text-lg lg:w-auto"
          icon={calculadora}
        >
          Simular orçamento
        </Link>
        <Link
          href="#service"
          aria-label="Ver serviços"
          className="w-full md:w-150 md:text-lg lg:w-52.5"
          variant="secondary"
          icon={monitorDefault}
          iconHover={monitorHover}
        >
          Ver serviços
        </Link>
      </div>

      <div className="mt-8 lg:mt-16 mx-4 grid md:flex md:justify-center gap-4 lg:gap-6">
        <div className="flex gap-2">
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img
              className="w-7 lg:w-9"
              src={protect}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">
              Preço justo e transparente
            </h3>
            <span className="text-gray-600">Sem taxas escondidas</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img className="w-7 lg:w-9" src={flash} alt="" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Estimativa instantânea</h3>
            <span className="text-gray-600">Resultado na hora</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img
              className="w-7 lg:w-9"
              src={security}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Seus dados seguros</h3>
            <span className="text-gray-600">Privacidade garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
