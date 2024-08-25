
type ToDoDetailItemProps = {
    label: string
    data: string
}


export default function ToDoDetailItem({label, data}: ToDoDetailItemProps) {
  return (

    <p className="font-bold mb-3 text-gray-200 uppercase text-end text-sm max-sm:text-xs"> {label}:{' '}
        <span className="font-normal normal-case max-sm:text-xs">{data}</span>
    </p>

  )
}
