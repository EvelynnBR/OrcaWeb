import { twMerge } from "tailwind-merge";

import calendar from "../assets/icon/calendar.svg";
import clock from "../assets/icon/clock.svg";
import flash from "../assets/icon/flash-default.svg";
import calendarSelected from "../assets/icon/calendar-selected.svg";
import clockSelected from "../assets/icon/clock-selected.svg";
import flashSelected from "../assets/icon/flash.svg";
import { useState } from "react";

type Prazo = {
  icon: string;
  iconSelected: string;
  value: string;
  label: string;
  price: number;
};

type PrazoProps = {
  onChange: (prazo: Prazo) => void;
};

const prazo: Prazo[] = [
  {
    icon: calendar,
    iconSelected: calendarSelected,
    value: "flexivel",
    label: "Flexível",
    price: 200,
  },
  {
    icon: clock,
    iconSelected: clockSelected,
    value: "normal",
    label: "Normal",
    price: 300,
  },
  {
    icon: flash,
    iconSelected: flashSelected,
    value: "urgente",
    label: "Urgente",
    price: 500,
  },
];

export default function RadioPrazo({ onChange }: PrazoProps) {
  const [selectedPrazo, setSelectedPrazo] = useState<string | null>(null);
  const [_prazoPrice, setPrazoPrice] = useState<number>();
  return (
    <section className="grid md:flex gap-4 md:justify-between">
      {prazo.map((pra) => {
        const isSelected = selectedPrazo === pra.value;
        return (
          <label
            key={pra.value}
            className={twMerge(
              `flex relative gap-2 p-2 group lg:hover:border-purple-700 lg:hover:text-purple-700 justify-center items-center bg-purple border rounded-md border-gray-500 md:min-w-50 lg:w-60 ${isSelected && "border-purple-700 text-purple-700"}`,
            )}
          >
            <img
              src={isSelected ? pra.iconSelected : pra.icon}
              alt=""
              aria-hidden="true"
              className={`grid`}
            />
            <input
              type="radio"
              name="prazo"
              value={pra.value}
              checked={isSelected}
              onChange={() => {
                setSelectedPrazo(pra.value);
                setPrazoPrice(pra.price);
                onChange(pra);
              }}
              className="absolute inset-0 opacity-0 lg:cursor-pointer"
            />
            <span>{pra.label}</span>
          </label>
        );
      })}
    </section>
  );
}
