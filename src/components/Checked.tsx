import { useState } from "react";
import checkedbox from "../assets/icon/checkedbox.svg";
import { twMerge } from "tailwind-merge";

type CheckedItem = {
  value: string;
  label: string;
};

type CheckedProps = CheckedItem & {
  onChange: (item: CheckedItem, checked: boolean) => void;
};

export default function Checked({ value, label, onChange }: CheckedProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    const newCheckedState = !isChecked;

    setIsChecked(newCheckedState);

    onChange(
      {
        value,
        label,
      },
      newCheckedState,
    );
  }

  return (
    <section className="grid gap-2">
      <label className="relative flex gap-3 items-center">
        <div
          className={`border border-gray-400 w-5 h-5 rounded-md hover:border-purple-600 ${isChecked ? "bg-purple-600" : ""}`}
        >
          {isChecked && (
            <img src={checkedbox} alt="" className={twMerge(`w-full`)} />
          )}
        </div>
        <input
          className="absolute inset-0 opacity-0 hover:cursor-pointer"
          type="checkbox"
          name="functionality"
          value={value}
          checked={isChecked}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </section>
  );
}
