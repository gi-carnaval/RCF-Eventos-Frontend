export function TableCaption(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >,
) {
  return (
    <caption className="text-lg font-bold text-gray-70 pb-4 border-b border-b-navy-60">
      {props.children}
    </caption>
  )
}
