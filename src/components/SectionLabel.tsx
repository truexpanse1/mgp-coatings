interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-montserrat text-xs uppercase tracking-[0.15em] text-gold ${className}`}
    >
      {label}
    </span>
  );
}
