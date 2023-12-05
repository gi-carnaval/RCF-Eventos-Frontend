export function TableTitle(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  return (
    <h3 className="text-lg font-bold text-gray-70 pb-4 border-b border-b-navy-60 left-10">
      {props.children}
    </h3>
  )
}
