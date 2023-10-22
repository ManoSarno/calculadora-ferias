import TableRow from "./TableRow";

type Props = {
  salario: any;
  extra: any;
  dependentes: any;
  dias: any;
  abono: any;
  adiantar: any;
}

export default function ResultTable({salario, extra, dependentes, dias, abono, adiantar}: Props) {

  //Valores dos proventos
  const valorSalario = parseInt(salario) + parseInt(extra);
  const ferias = (parseInt(dias)/30 * valorSalario);
  const terço = ((parseInt(dias)/30 * valorSalario)/3);
  let valorAbono = 0;
  let terçoAbono = 0;
  let parcela = 0;
  
  //Proventos formatados
  const textFerias = 'R$ ' + ferias?.toFixed(2).toString().replace(".", ",");
  const textTerço = 'R$ ' + terço?.toFixed(2).toString().replace(".", ",");
  let textAbono;
  let textTerçoAbono;
  let textParcela;
  
  //Cálculo do abono
  if(abono == "Sim") {
    valorAbono = (valorSalario/3);
    textAbono = 'R$ ' + valorAbono?.toFixed(2).toString().replace(".", ",");
    terçoAbono = (valorSalario/9);
    textTerçoAbono = 'R$ ' + terçoAbono?.toFixed(2).toString().replace(".", ",");
  }

  //Cálculo do adiantamento
  if(adiantar == "Sim") {
    parcela = (parseInt(salario)/2);
    textParcela = 'R$ ' + parcela?.toFixed(2).toString().replace(".", ",");
  }

  //Valor total dos proventos
  const totalProventos = ferias + terço + valorAbono + terçoAbono + parcela;
  //Total dos proventos formatado
  const textTotalProventos = 'R$ ' + totalProventos?.toFixed(2).toString().replace(".", ",");

  //Valores das faixas de INSS e IRRF
  const faixaInss1 = 1320;
  const faixaInss2 = 2571.29;
  const faixaInss3 = 3856.94;
  const faixaInss4 = 7507.29;
  const faixaIrrf1 = 1903.99;
  const faixaIrrf2 = 2826.66;
  const faixaIrrf3 = 3751.06;
  const faixaIrrf4 = 4664.69;
  
  //Valores de descontos de INSS e IRRF
  let inss = 0;
  let irrf = 0;
  let refInss = 0;
  let refIrrf = 0;
  const baseDescontos = ferias + terço;

  //Cálculo do INSS
  if(baseDescontos <= faixaInss1) {
    inss = baseDescontos*0.075;
  } else if(baseDescontos <= faixaInss2) {
    inss = faixaInss1*0.075 + (baseDescontos - faixaInss1)*0.09;
  } else if(baseDescontos <= faixaInss3) {
    inss = faixaInss1*0.075 + (faixaInss2 - faixaInss1)*0.09 + (baseDescontos - faixaInss2)*0.12;
  } else if(baseDescontos <= faixaInss4) {
    inss = faixaInss1*0.075 + (faixaInss2 - faixaInss1)*0.09 + (faixaInss3 - faixaInss2)*0.12 + (baseDescontos - faixaInss3)*0.14;
  } else {
    inss = faixaInss1*0.075 + (faixaInss2 - faixaInss1)*0.09 + (faixaInss3 - faixaInss2)*0.12 + (faixaInss4 - faixaInss3)*0.14;
  }
  refInss = (inss*100/baseDescontos);

  //Cálculo do IRRF
  const baseIrrf = baseDescontos - inss - parseInt(dependentes)*189.59;
  if(baseIrrf < faixaIrrf1) {
    irrf = 0;
  } else if(baseIrrf < faixaIrrf2) {
    irrf = baseIrrf*0.075 - 142.80;
    refIrrf = 7.5;
  } else if(baseIrrf < faixaIrrf3) {
    irrf = baseIrrf*0.15 - 354.80;
    refIrrf = 15;
  } else if(baseIrrf < faixaIrrf4) {
    irrf = baseIrrf*0.225 - 636.13;
    refIrrf = 22.5;
  } else {
    irrf = baseIrrf*0.275 - 869.36;
    refIrrf = 27.5;
  }

  //Descontos formatados
  const textInss = 'R$ ' + inss?.toFixed(2).toString().replace(".", ",");
  const textIrrf = 'R$ ' + irrf?.toFixed(2).toString().replace(".", ",");
  
  //Percentuais dos descontos formatados
  const textRefInss = refInss.toFixed(2).toString().replace(".", ",") + '%';
  const textRefIrrf = refIrrf.toFixed(2).toString().replace(".", ",") + '%';

  //Valor total dos descontos
  const totalDescontos = inss + irrf;
  //Total dos descontos formatado
  const textTotalDescontos = 'R$ ' + totalDescontos.toFixed(2).toString().replace(".", ",");

  //Valor líquido de férias a receber
  const feriasLiquido = totalProventos - totalDescontos;
  //Valor líquido de férias a receber formatado
  const textFeriasLiquido = 'R$ ' + feriasLiquido.toFixed(2).toString().replace(".", ",");

  return (
    <div className="w-full bg-white rounded-md flex flex-col pt-1 leading-[126%] md:leading-[154%]">
      <TableRow column1="Evento" column2="Ref" column3="Proventos" column4="Descontos"/>
      <TableRow column1="Valor férias" column2="-" column3={textFerias} column4="-"/>
      <TableRow column1="1/3 férias" column2="-" column3={textTerço} column4="-"/>
      <TableRow column1="Abono pecuniário" column2="-" column3={textAbono && textAbono} column4="-"/>
      <TableRow column1="1/3 abono pecuniário" column2="-" column3={textTerçoAbono && textTerçoAbono} column4="-"/>
      <TableRow column1="Adiantamento 1ª parcela 13º" column2="-" column3={textParcela && textParcela} column4="-"/>
      <TableRow column1="INSS" column2={textRefInss} column3="-" column4={textInss}/>
      <TableRow column1="IRRF" column2={textRefIrrf} column3="-" column4={textIrrf}/>
      <TableRow column1="Totais" column3={textTotalProventos} column4={textTotalDescontos}/>
      <TableRow column1="Valor líquido de férias" column2={textFeriasLiquido} lastRow={true}/>
    </div>
  )
}