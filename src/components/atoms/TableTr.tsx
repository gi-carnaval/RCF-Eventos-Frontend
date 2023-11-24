export default function TableRow(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >,
) {
  return (
    <tr
      {...props}
      className="h-16 border-b-2 border-b-navy-60 hover:bg-navy-60 cursor-pointer table-auto"
    >
      {props.children}
    </tr>
  )
}
