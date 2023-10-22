'use client'
 
import { useSearchParams } from 'next/navigation';
import ResultTable from '@/components/ResultTable';
import InfoRow from '@/components/InfoRow';

export default function Result() {
    const searchParams = useSearchParams();

    const style = { "--delay": '0.05s' } as React.CSSProperties;
    
    let salario = searchParams.get('salario');
    let extra = searchParams.get('extra');
    if(extra == "") {
      extra = "0,00"
    }
    let dependentes = searchParams.get('dependentes');
    if(dependentes == "") {
      dependentes = "0"
    }
    let dias = searchParams.get('dias');
    let abono = searchParams.get('abono');
    let adiantar = searchParams.get('adiantar');
    
    return (
      <div className="page-width mx-auto py-8 md:py-12 flex flex-col gap-9 w-full items-start justify-between text-dark-blue">
        <div className="flex flex-col gap-5 w-full bottom_animation">
          <h2 className="text-[18px] md:text-[22px] text-dark-blue font-medium leading-[126%]">Cálculo</h2>
          <div className="bg-white rounded-md py-4 md:py-6 px-4 md:px-7 w-full grid grid-cols-2 text-[13px] md:text-[15px] gap-y-3 gap-x-1.5 md:gap-x-2.5 text-center leading-[126%] md:leading-[154%] ">
            <InfoRow name="Salário bruto" value={`R$ ${salario?.replace(".", ",")}`}/>
            <InfoRow name="Média de hora extra" value={extra}/>
            <InfoRow name="Dependentes" value={dependentes}/>
            <InfoRow name="Dias de férias" value={dias}/>
            <InfoRow name="Abono pecuniário" value={abono}/>
            <InfoRow name="Adiantar 1ª parcela 13º" value={adiantar}/>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full text-[12px] md:text-sm bottom_animation" style={style}>
          <h2 className="text-[18px] md:text-[22px] text-dark-blue font-medium leading-[126%]">Resultado</h2>
          <ResultTable salario={salario} extra={extra} dependentes={dependentes} dias={dias} abono={abono} adiantar={adiantar}/>
        </div>
      </div>
    )
  }
  