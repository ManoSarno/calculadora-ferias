type Props = {
  column1?: string;
  column2?: string;
  column3?: string;
  column4?: string;
  lastRow?: boolean;
}

export default function TableRow({column1, column2, column3, column4, lastRow}: Props) {
  return (
    <>
      {lastRow ? (
        <div className="grid grid-cols-2 h-12">
          <p className="text-left pb-1 px-5 my-auto">{column1}</p>
          <p className="flex bg-light-yellow text-center px-5 h-full"><span className="m-auto">{column2}</span></p>
        </div>
      ) : (
        <div className="grid grid-cols-[3fr_1fr_2fr_2fr] h-12 border-b border-light-blue">
          <p className="text-left pl-5 pr-2 my-auto">{column1}</p>
          <p className="text-center px-2 my-auto">{column2}</p>
          <p className="text-center px-2 my-auto">{column3}</p>
          <p className="text-center pr-5 pl-2 my-auto">{column4}</p>
        </div>
      )}
    </>
  )
}