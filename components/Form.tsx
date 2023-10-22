"use client";

import { useState } from 'react';
import CurrencyInput from './CurrencyInput';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter()

  const [dependentes, setDependentes] = useState("");
  const [abonoPecuniario, setAbonoPecuniario] = useState('Não');
  const [diasDeFerias, setDiasDeFerias] = useState("");
  const [adiantarParcela, setAdiantarParcela] = useState('Não');
  
  const handleSubmit = (event: any) => {
    // Calculate ferias and open the modal with the result
    event.preventDefault();
    const formData = {
      salario: event.target[0].value,
      extra: event.target[1].value,
      dependentes: event.target[2].value,
      dias: event.target[3].value,
      abono: event.target[4].value,
      adiantar: event.target[5].value,
    }
    const queryParams = new URLSearchParams(formData).toString();
    router.push(`/result?${queryParams}`);
 };

 const handleClear = () => {
    // Clear the input fields
    const salarioElement = document.getElementById('Salário') as HTMLInputElement;
    const extraElement = document.getElementById('Extra') as HTMLInputElement;

    salarioElement.value = "";
    extraElement.value = "";
    setDependentes("");
    setAbonoPecuniario('Não');
    setDiasDeFerias("");
    setAdiantarParcela('Não');
 };

  return (
    <form className="w-full grid grid-cols-2 gap-3.5 mt-1.5" onSubmit={(event) => handleSubmit(event)}>
      <div className="flex flex-col gap-0.5">
        <CurrencyInput step="0.01" placeholder="0,00" name="Salário" label="Salário bruto" required={true}/>
      </div>
      <div className="flex flex-col gap-0.5">
        <CurrencyInput step="0.01" placeholder="0,00" name="Extra" label="Média de hora extra" required={false}/>
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="Dependentes" className="text-[13px] md:text-sm">Dependentes</label>
        <input
          className="text-[12px] md:text-[13px] border border-gray focus:outline-blue rounded p-1.5"
          type="number"
          id="Dependentes"
          name="Dependentes"
          value={dependentes}
          placeholder="0"
          onChange={(e) => setDependentes(e.target.value)}/>
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="Dias" className="text-[13px] md:text-sm">Dias de férias</label>
        <input
          className="text-[12px] md:text-[13px] border border-gray focus:outline-blue rounded p-1.5"
          type="number"
          id="Dias"
          name="Dias"
          value={diasDeFerias}
          placeholder="0"
          min={0}
          max={30}
          onChange={(e) => setDiasDeFerias(e.target.value)}
          required/>
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-[13px] md:text-sm">Abono pecuniário 1/3</label>
        <select 
          className="text-[12px] md:text-[13px] border border-gray focus:outline-blue rounded p-1.5" 
          id="Abono"
          name="Abono"
          value={abonoPecuniario}
          onChange={(e) => setAbonoPecuniario(e.target.value)}
        >
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <div className="flex flex-col gap-0.5">
        <label className="text-[13px] md:text-sm">Adiantar 13 parcela?</label>
        <select 
          className="text-[12px] md:text-[13px] border border-gray focus:outline-blue rounded p-1.5" 
          id="Adiantar"
          name="Adiantar"
          value={adiantarParcela}
          onChange={(e) => setAdiantarParcela(e.target.value)}
        >
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <button className="bg-blue hover:bg-blue2 hover:animate-bounce focus:animate-ping rounded text-white text-[13px] md:text-sm col-span-full p-1.5 mt-3" type="submit">Calcular</button>
      <button className="col-span-full text-[#5F5F5F] text-[13px]" type="reset" onClick={() => handleClear()}>Limpar</button>
    </form>
  )
}