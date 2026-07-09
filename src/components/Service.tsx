import Card from "./Card";

import institucional from "../assets/icon/institutional.svg";
import landingPage from "../assets/icon/landingpage.svg";
import eCommerce from "../assets/icon/e-commerce.svg";

import seta from "../assets/icon/seta.svg";
import setaHover from "../assets/icon/seta-hover.svg";
import RouterLink from "./RouterLink";

export default function Service() {
  function handleAlert(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    alert("Botão de teste!");
  }
  return (
    <section id="service" className="mt-8 lg:mt-16">
      <div className="flex justify-between items-center gap-3">
        <span className="h-px bg-purple-300 w-full"></span>
        <h2 className="font-bold text-lg whitespace-nowrap">Serviços</h2>
        <span className="h-px bg-purple-300 w-full"></span>
      </div>
      <div className="grid px-4 lg:flex gap-8 mt-6 lg:justify-center">
        <Card className="lg:w-100">
          <div className="p-4 flex gap-4 md:mt-8">
            <div className="bg-purple-100 rounded-3xl mt-4 grid items-center justify-center w-25 h-13 lg:w-35 lg:h-18">
              <img
                className="w-7 lg:w-14"
                src={institucional}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="grid gap-1">
              <h3 className="font-bold text-gray-800">Sites Institucionais</h3>
              <span className="text-gray-600 text-sm">
                Apresente sua empresa com credibilidade e destaque seus serviços
                na internet.
              </span>
              <RouterLink
                variant="tertiary"
                className="flex-row-reverse p-0 justify-self-start font-semibold"
                aria-label="Saiba mais sobre sites Institucionais"
                onClick={handleAlert}
                icon={seta}
                iconHover={setaHover}
              >
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </Card>

        <Card className="lg:w-100">
          <div className="p-4 flex gap-4 md:mt-8">
            <div className="bg-purple-100 rounded-3xl mt-4 grid items-center justify-center w-25 h-13 lg:w-35 lg:h-18">
              <img
                className="w-7 lg:w-14"
                src={landingPage}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="grid gap-1">
              <h3 className="font-bold text-gray-800">Landing Pages</h3>
              <span className="text-gray-600 text-sm">
                Páginas estratégicas para campanhas e geração de leads
                qualificados.
              </span>
              <RouterLink
                variant="tertiary"
                className="flex-row-reverse p-0 justify-self-start font-semibold"
                aria-label="Saiba mais sobre Landing Pages"
                onClick={handleAlert}
                icon={seta}
                iconHover={setaHover}
              >
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </Card>

        <Card className="lg:w-100">
          <div className="p-4 flex gap-4 md:mt-8">
            <div className="bg-purple-100 rounded-3xl mt-4 grid items-center justify-center w-25 h-13 lg:w-35 lg:h-18">
              <img
                className="w-7 lg:w-14"
                src={eCommerce}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="grid gap-1">
              <h3 className="font-bold text-gray-800">Lojas Virtuais</h3>
              <span className="text-gray-600 text-sm">
                Venda online com segurança, gestão de produtos e meios de
                pagamento.
              </span>
              <RouterLink
                variant="tertiary"
                className="flex-row-reverse p-0 justify-self-start font-semibold"
                aria-label="Saiba mais sobre Lojas Virtuais"
                onClick={handleAlert}
                icon={seta}
                iconHover={setaHover}
              >
                Saiba mais
              </RouterLink>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
