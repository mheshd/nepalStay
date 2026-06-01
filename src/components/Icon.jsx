export default function Icon({ children, className = 'h-7 w-7' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}
