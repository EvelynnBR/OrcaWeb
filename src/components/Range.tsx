import { useState } from "react";

type TotalPages = {
  totalPages: number;
};

type PagesProps = {
  onChange?: (data: TotalPages) => void;
};

export default function InputRange({ onChange }: PagesProps) {
  const [pages, setPages] = useState(1);
  const min = 1;
  const max = 20;
  const percentage = ((pages - min) / (max - min)) * 100;
  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        min={min}
        max={max}
        value={pages}
        onChange={(event) => {
          const newPages = Number(event.target.value);

          setPages(newPages);

          onChange?.({ totalPages: newPages });
        }}
        className="range"
        style={{
          background: `linear-gradient(to right, #8200db ${percentage}%, #e5e7eb ${percentage}%)`,
        }}
      />
      <span className="grid text-center text-sm font-bold text-white bg-purple-800 w-5 rounded-full">
        {pages}
      </span>
    </div>
  );
}
