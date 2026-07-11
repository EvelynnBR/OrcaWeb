import { useState } from "react";
import Card from "../components/Card";
import InputRange from "../components/Range";
import Select from "../components/Select";
import RadioDesign from "../components/Radio-design";
import RadioPrazo from "../components/Radio-prazo";
import Checked from "../components/Checked";

export default function Estimate() {
  const [siteType, setSiteType] = useState("");
  const [pages, setPages] = useState<number>(1);
  const [design, setDesign] = useState("");
  const [prazo, setPrazo] = useState("");
  return (
    <section className="grid mx-4 lg:w-full mt-8 lg:max-w-200 lg:justify-self-center">
      <Card className="grid w-full p-3">
        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Tipo de site</h3>
            <Select
              onChange={(option) => {
                setSiteType(option.label);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Número de páginas</h3>
            <InputRange
              onChange={(pages) => {
                setPages(pages.totalPages);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Número de páginas</h3>
            <RadioDesign
              onChange={(design) => {
                setDesign(design.value);
              }}
            />
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">Prazo</h3>
            <RadioPrazo
              onChange={(prazo) => {
                setPrazo(prazo.value);
              }}
            />
          </div>

          <div className="grid gap-2">
            <h3 className="font-semibold text-gray-800">funcionalidades</h3>
            <Checked
            />
          </div>
        </div>
      </Card>
      <div className="grid mt-8">
        <span>Site escolhido: {siteType}</span>
        <span>Total de Páginas: {pages}</span>
        <span>Design escolhido: {design}</span>
        <span>Prazo: {prazo}</span>
      </div>
    </section>
  );
}
