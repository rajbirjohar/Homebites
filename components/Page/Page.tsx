export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <section className="max-w-screen-xl min-h-screen flex flex-col justify-center mx-auto px-6">
      {props.children}
    </section>
  );
}
