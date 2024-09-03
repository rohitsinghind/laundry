import { ReactNode } from "react";

interface ContactBtnProps {
  children: ReactNode;
  className?: string;
}

export default function ContactBtn({ children, className = "" }: ContactBtnProps) {
  return (
    <button className={className}>
      {children}
    </button>
  );
}
