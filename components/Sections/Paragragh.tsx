import React from "react";

export default function Paragraph(props: {
  children: React.ReactNode | React.ReactNode[];
  className: string;
}): JSX.Element {
  return <section className={props.className}>{props.children}</section>;
}
