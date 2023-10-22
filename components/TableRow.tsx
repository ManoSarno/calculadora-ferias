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
        <div className="grid grid-cols-2">
          <p className="text-left pt-4 pb-5 px-5 my-auto">{column1}</p>
          <p className="bg-light-yellow text-center pt-4 pb-5 px-5 my-auto">{column2}</p>
        </div>
      ) : (
        <div className="grid grid-cols-[3fr_1fr_2fr_2fr]">
          <p className="text-left py-4 pl-5 pr-2 border-b border-light-blue my-auto">{column1}</p>
          <p className="text-center py-4 px-2 border-b border-light-blue my-auto">{column2}</p>
          <p className="text-center py-4 px-2 border-b border-light-blue my-auto">{column3}</p>
          <p className="text-center py-4 pr-5 pl-2 border-b border-light-blue my-auto">{column4}</p>
        </div>
      )}
    </>
  )
}