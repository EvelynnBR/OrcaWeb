import chevron from "../assets/icon/chevron.svg";

import institucuinal from "../assets/icon/institutional.svg";
import ladingPage from "../assets/icon/landingpage.svg";
import ecommerce from "../assets/icon/e-commerce.svg";
import { useState } from "react";

type Option = {
  name: string;
  value: string;
  label: string;
  icon: string;
};

type SelectProps = {
  onChange?: (option: Option) => void;
};

const options = [
  {
    name: "site",
    value: "institucional",
    label: "Institucional",
    icon: institucuinal,
  },

  {
    name: "site",
    value: "lading-page",
    label: "Lading Page",
    icon: ladingPage,
  },

  {
    name: "site",
    value: "ecommerce",
    label: "Loja Virtual",
    icon: ecommerce,
  },
];

export default function Select({ onChange }: SelectProps) {
  const [showOption, setShowOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedSiteType, setSelectedSiteType] = useState("Escolha um tipo");
  const [typeIcon, setTypeIcon] = useState("");

  function handleShowOption() {
    setShowOption((prev) => !prev);
  }
  return (
    <div className="border border-gray-400 rounded-md p-1.5">
      <button
        onClick={handleShowOption}
        type="button"
        className="flex w-full gap-2 items-center relative"
      >
        {typeIcon && <img src={typeIcon} aria-hidden="true" />}
        {selectedSiteType} <img className="absolute right-0" src={chevron} />
      </button>
      {options.map((option) => {
        const isSelected = selectedOption?.value === option.value;

        return (
          <div
            key={option.value}
            className={`flex gap-2 mt-2.5 rounded-md relative outline lg:hover:outline-purple-700 lg:hover:outline-2 bg-gray-100 p-1 ${showOption ? "flex" : "hidden"} ${isSelected ? "outline-purple-800 outline-2" : "outline-purple-500"}`}
          >
            <img className="w-5" src={option.icon} aria-hidden="true" />
            <span className="text-gray-700 font-semibold">{option.label}</span>
            <input
              value={option.value}
              name={option.name}
              onClick={handleShowOption}
              onChange={() => {
                setSelectedSiteType(option.label);
                setSelectedOption(option);
                setTypeIcon(option.icon);
                onChange?.(option);
              }}
              type="radio"
              className="absolute top-0 left-0 inset-0 opacity-0"
            />
          </div>
        );
      })}
    </div>
  );
}
