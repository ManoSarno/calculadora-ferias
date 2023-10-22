type Props = {
  name: any;
  value: any;
}

export default function InfoRow({name, value}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-0.5 md:gap-2.5 items-center">
      <p>{name}:</p>
      <b>{value}</b>
    </div>
  )
}