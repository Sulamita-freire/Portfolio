import { Section } from "./style";

export function Card({ title, description, icon }) {
  return (
    <Section>
      {icon}
      <strong>{title}</strong>
      <div>
        <p>{description}</p>
      </div>
    </Section>
  );
}