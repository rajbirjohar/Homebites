/**
 * Layout
 *
 * Wraps all pages in a common layout including a common
 * header and footer.
 *
 * @param props children
 * @returns Layout
 */
export default function Layout(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return <main className="m-h-screen bg-gray-50">{props.children}</main>;
}
