import { useState } from "react";
import Card from "../components/Card";
import InputRange from "../components/Range";
import Select from "../components/Select";
import RadioDesign from "../components/Radio-design";
import RadioPrazo from "../components/Radio-prazo";
import Checked from "../components/Checked";

type CheckedItem = {
  value: string;
  label: string;
  price: string;
};

export default function Estimate() {
  const [siteType, setSiteType] = useState("");
  const [typePrice, setTypePrice] = useState("");
  const [pages, setPages] = useState<number>(1);
  const [pagesPrice, setPagesPrice] = useState<number>(180);

  const [design, setDesign] = useState("");
  const [designPrice, setDesignPrice] = useState<number>(0);

  const [prazo, setPrazo] = useState("");
  const [prazoPrice, setPrazoPrice] = useState<number>(0);

  const [functionality, setFunctionality] = useState<CheckedItem[]>([]);

  function handleChange(item: CheckedItem, checked: boolean) {
    setFunctionality((currentValues) => {
      if (checked) {
        return [...currentValues, item];
      }

      return currentValues.filter(
        (currentItem) => currentItem.value !== item.value,
      );
    });
  }

  return (
    <section className="grid mx-4 lg:w-full mt-8 lg:max-w-200 lg:justify-self-center">
      <Card className="grid w-full p-3">
        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Tipo de site</h3>
            <Select
              onChange={(option) => {
                setSiteType(option.label);
                setTypePrice(option.price);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Número de páginas</h3>
            <InputRange
              onChange={(pages) => {
                setPages(pages.totalPages);
                setPagesPrice(pages.totalPrice);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Nível de design</h3>
            <RadioDesign
              onChange={(design) => {
                setDesign(design.value);
                setDesignPrice(design.price);
              }}
            />
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Prazo</h3>
            <RadioPrazo
              onChange={(prazo) => {
                setPrazo(prazo.value);
                setPrazoPrice(prazo.price);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">funcionalidades</h3>
            <Checked
              value="formContact"
              label="Formulário de Contato"
              price={"150"}
              onChange={handleChange}
            />
            <Checked
              value="blog"
              label="Blog"
              price={"500"}
              onChange={handleChange}
            />
            <Checked
              value="seo"
              label="SEO básico"
              price={"350"}
              onChange={handleChange}
            />
          </div>
        </div>
      </Card>
      <div className="grid mt-8">
        <span>
          Site escolhido: {siteType} - R${typePrice}
        </span>
        <span>
          Total de Páginas: {pages} - R${pagesPrice}
        </span>
        <span>
          Design escolhido: {design} - R${designPrice}
        </span>
        <span>
          Prazo: {prazo} - R${prazoPrice}
        </span>
        <span>
          Funcionalidades:{" "}
          {functionality
            .map((item) => `${item.label} - R$${item.price}`)
            .join(", ")}
        </span>
      </div>
    </section>
  );
}
