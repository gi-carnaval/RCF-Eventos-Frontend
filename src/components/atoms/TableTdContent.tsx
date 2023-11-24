export default function TableTdContent(
  props: React.TdHTMLAttributes<HTMLTableCellElement>,
) {
  return <td className="text-base text-white-5 px-6">{props.children}</td>
}
