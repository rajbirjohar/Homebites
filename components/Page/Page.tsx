import Head from "next/head";

export default function Page(props: {
  children: React.ReactNode | React.ReactNode[];
}): JSX.Element {
  return (
    <main className="min-h-screen">
      <Head>
        <title>Homebites</title>
      </Head>
      {props.children}
    </main>
  );
}
