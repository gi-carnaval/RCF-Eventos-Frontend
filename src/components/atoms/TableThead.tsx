export function TableThead(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >,
) {
  return (
    <thead>
      <tr className="h-10 border-b-2 border-b-navy-40 px-6 bg-navy-60">
        {props.children}
      </tr>
    </thead>
  )
}
