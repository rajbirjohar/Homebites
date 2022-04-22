export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <section className="min-h-screen">
      {props.children}
    </section>
  );
}
