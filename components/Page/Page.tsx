export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <section className="min-h-screen mx-6">
      {props.children}
    </section>
  );
}
