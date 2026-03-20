interface LogoMarkProps {
  size?: number;
  className?: string;
}

export const LogoMark = ({ size = 32, className }: LogoMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="TalentAccel logo mark"
  >
    {/* Blue piece — T crossbar + left stem */}
    <path
      d="M4 4h22v11H15v25H4z"
      fill="#0A72FF"
    />
    {/* Green accent — top-right piece */}
    <rect x="28" y="4" width="12" height="11" rx="2" fill="#00E59D" />
  </svg>
);
