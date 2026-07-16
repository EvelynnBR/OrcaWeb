import { twMerge } from "tailwind-merge";

import monitor from "../assets/icon/monitor-black-default.svg";
import pen from "../assets/icon/pen-default.svg";
import premium from "../assets/icon/premium-default.svg";
import monitorSelected from "../assets/icon/monitor-hover.svg";
import penSelected from "../assets/icon/pen-selected.svg";
import premiumSelected from "../assets/icon/premium-selected.svg";
import { useState } from "react";

type Designs = {
  icon: string;
  iconSelected: string;
  value: string;
  label: string;
  price: number
};

type DesignsProps = {
  onChange: (designs: Designs) => void;
};

const designs: Designs[] = [
  {
    icon: monitor,
    iconSelected: monitorSelected,
    value: "basico",
    label: "Básico",
    price: 250,
  },
  {
    icon: pen,
    iconSelected: penSelected,
    value: "personalizado",
    label: "Personalizado",
    price: 500,
  },
  {
    icon: premium,
    iconSelected: premiumSelected,
    value: "premium",
    label: "Premium",
    price: 750,
  },
];

export default function RadioDesign({ onChange }: DesignsProps) {
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [_designPrice, setDesignPrice] = useState<number>()
  return (
    <section className="grid md:flex gap-4 md:justify-between">
      {designs.map((design) => {
        const isSelected = selectedDesign === design.value;
        return (
          <label
            key={design.value}
            className={twMerge(
              `grid relative group lg:hover:border-purple-700 lg:hover:text-purple-700 justify-center items-center bg-purple border rounded-md border-gray-500 md:min-w-50 lg:w-60 ${isSelected && "border-purple-700 text-purple-700"}`,
            )}
          >
            <img
              src={isSelected ? design.iconSelected : design.icon}
              alt=""
              aria-hidden="true"
              className={`absolute top-2 left-1/2 -translate-x-1/2`}
            />
            <input
              type="radio"
              name="design"
              value={design.value}
              checked={isSelected}
              onChange={() => {
                setSelectedDesign(design.value);
                setDesignPrice(design.price)
                onChange(design);
              }}
              className="absolute inset-0 opacity-0 lg:cursor-pointer"
            />
            <span className="mt-8 mb-2">{design.label}</span>
          </label>
        );
      })}
    </section>
  );
}
