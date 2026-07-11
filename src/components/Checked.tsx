import { useState } from "react";
import checkedbox from "../assets/icon/checkedbox.svg";
import { twMerge } from "tailwind-merge";

type Checked = {
  value: string;
  label: string;
};
type OnChecked = {
  onChange: (check: Checked) => void;
};

const check = [
  {
    value: "formContact",
    label: "Formulário de Contato",
  },
  {
    value: "blog",
    label: "Blog",
  },
  {
    value: "seo",
    label: "SEO básico",
  },
];

export default function Checked({ onChange }: OnChecked) {
  const [isChecked, setIsChecked] = useState<string | null>(null);
  const [onValues, setOnValues] = useState<string[]>([]);
  return (
    <section className="grid gap-2">
      {check.map((c) => {
        const isSelected = isChecked === c.value;
        const isValues = onValues.includes(c.value);
        return (
          <label key={c.value} className="relative flex gap-3 items-center">
            <div className="border border-gray-400 w-5 h-5 bg-purple-600 rounded-md hover:border-purple-600 hover:cursor-pointer">
              <img
                src={isSelected ? checkedbox : ""}
                alt=""
                className={twMerge(`w-full `)}
              />
            </div>
            <input
              className="absolute inset-0 opacity-0"
              type="checkbox"
              name="functionality"
              value={c.value}
              checked={isValues}
              onChange={() => {
                setIsChecked(c.value);
                setOnValues;
                onChange(c);
              }}
            />
            <span>{c.label}</span>
          </label>
        );
      })}
    </section>
  );
}
