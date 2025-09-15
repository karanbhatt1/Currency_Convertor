import React from "react";
import { useId } from "react";
const InputBox = ({
  label,
  amountDisabled = false,
  currencyDisabled = false,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
}) => {
  const amountInputId = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex flex-row gap-0">
      <div className={`p-3 rounded-lg text-sm flex  flex-col gap-0`}>
        <label
          htmlFor={amountInputId}
          className="text-black/60  text-xl mb-0.5 p-0 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none bg-white w-72 bg-transparent pl-2 text-3xl"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(e.target.value)
          }
        />
      </div>
      <div className=" p-2 rounded-xl w-max flex flex-wrap justify-center gap-0  text-center">
        <p className=" self-start font-serif text-black/80 text-xl m-0 w-full">Currency Type</p>
        <select
          className="text-xl mt-0 font-semibold w-24 rounded-lg px-2 bg-slate-300/80  cursor-pointer outline-none"
          value={selectCurrency} 
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((co) => (
            <option key= {co} value={co}>
              {co}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
