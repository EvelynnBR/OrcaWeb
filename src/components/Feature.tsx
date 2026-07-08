import layout from "../assets/icon/layout-template.svg";
import customization from "../assets/icon/customization.svg";
import fileCheck from "../assets/icon/file-check.svg";

export default function Feature() {
  return (
    <section id="feature" className="mt-8 lg:mt-32">
      <div className="flex justify-between items-center gap-3">
        <span className="h-px bg-purple-300 w-full"></span>
        <h2 className="font-bold text-lg whitespace-nowrap">Como funciona</h2>
        <span className="h-px bg-purple-300 w-full"></span>
      </div>

      <div className="mt-5 md:mt-8 grid gap-4 md:justify-center lg:flex">
        <div className="px-4 flex gap-3 items-start">
          <strong className="bg-purple-800 grid text-sm lg:text-lg w-5 h-5 lg:w-7 lg:h-7 text-center rounded-full text-white font-bold">
            1
          </strong>
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img
              className="w-7 h-7 lg:w-13 lg:h-16"
              src={layout}
              alt="imagem de uma janela da web"
            />
          </div>
          <div className="w-55 md:w-60">
            <h3 className="text-gray-800 font-bold">Escolha o tipo de site</h3>
            <span className="text-gray-500 text-sm">
              Selecione o tipo de site ideal para o seu negócio e informe a
              quantidade de páginas.
            </span>
          </div>
        </div>

        <div className="px-4 flex gap-3 items-start">
          <strong className="bg-purple-800 grid text-sm lg:text-lg w-5 h-5 lg:w-7 lg:h-7 text-center rounded-full text-white font-bold">
            2
          </strong>
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img
              className="w-7 h-7 lg:w-13 lg:h-16"
              src={customization}
              alt="imagem de uma janela da web"
            />
          </div>
          <div className="w-55 md:w-60">
            <h3 className="text-gray-800 font-bold">Personalize recursos</h3>
            <span className="text-gray-500 text-sm">
              Adicione funcionalidades, escolha o nível de design e defina o
              prazo de entrega que melhor se encaixa.
            </span>
          </div>
        </div>

        <div className="px-4 flex gap-3 items-start">
          <strong className="bg-purple-800 grid text-sm lg:text-lg w-5 h-5 lg:w-7 lg:h-7 text-center rounded-full text-white font-bold">
            3
          </strong>
          <div className="bg-purple-100 p-2.5 rounded-3xl">
            <img
              className="w-7 h-7 lg:w-13 lg:h-16"
              src={fileCheck}
              alt="imagem de uma janela da web"
            />
          </div>
          <div className="w-55 md:w-60">
            <h3 className="text-gray-800 font-bold">Receba a estimativa</h3>
            <span className="text-gray-500 text-sm">
              Veja o valor estimado na hora e, se quiser, solicite uma proposta
              personalizada da nossa equipe.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
