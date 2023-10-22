import Form from "@/components/Form"

export default function Home() {
  return (
    <div className="page-width mx-auto pb-16 pt-0.5 md:pt-16 flex flex-col-reverse md:flex-row gap-x-8 gap-y-7 w-full items-start justify-between">
      <div className="flex flex-col gap-6 md:max-w-[435px] text-dark-blue left_animation">
        <h1 className="text-[29px] md:text-[38px] leading-[126%]">Como utilizar a calculadora de férias</h1>
        <div className="text-sm md:text-base flex flex-col gap-6">
          <p>
            Para ficar tranquilo no seu descanso e com dinheiro no bolso, veja como fazer o cálculo de férias:
          </p>
          <ol className="list-decimal list-inside">
            <li>Preencha o valor do seu salário bruto;</li>
            <li>Preencha o valor médio da sua hora extra (Opcional);</li>
            <li>Informe o número de dependentes, caso tenha;</li>
            <li>Preencha a quantidade de dias de férias requisitados;</li>
            <li>Informe se vai ter abono pecuniário de 1/3;</li>
            <li>Marque se irá adiantar a 1ª parcela do 13º salário.</li>
          </ol>
          <p>
            É previsto por lei que um funcionário CLT pode tirar férias após trabalhar um período de 12 meses (1 ano). Porém, é possível que dúvidas existam em relação ao cálculo de férias remuneradas.<br/>
            Dessa forma, confira um exemplo de como ele é realizado no caso de um trabalhador que recebe um salário de R$2400/mês.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[100vw] md:w-full md:max-w-[426px] py-6 md:py-10 px-5 md:px-11 text-black bg-white rounded ml-[-20px] right_animation">
        <p className="text-base md:text-[17px] font-medium">Calculadora de Férias Online</p>
        <Form/>
      </div>
    </div>
  )
}
