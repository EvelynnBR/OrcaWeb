import { useState } from "react";
import Card from "../components/Card";
import InputRange from "../components/Range";
import Select from "../components/Select";

export default function Estimate() {
  const [siteType, setSiteType] = useState("");
  const [pages, setPages] = useState<number>(1);
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
        </div>
      </Card>
      <div className="grid mt-8">
        <span>Site escolhido: {siteType}</span>
        <span>Total de Páginas: {pages}</span>
      </div>
    </section>
  );
}
