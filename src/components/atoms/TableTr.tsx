export function TableTr(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  >,
) {
  return (
    <tr
      {...props}
      className="h-16 border-b-2 border-b-navy-40 px-6 hover:bg-navy-60 cursor-pointer"
    >
      {props.children}
    </tr>
  )
}
