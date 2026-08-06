import './Button.css';

const VARIANTS = new Set(['primary', 'secondary', 'danger', 'success']);
const SIZES = new Set(['small', 'medium', 'large']);

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const resolvedVariant = VARIANTS.has(variant) ? variant : 'primary';
  const resolvedSize = SIZES.has(size) ? size : 'medium';
  const classes = [
    'button',
    `button--${resolvedVariant}`,
    `button--${resolvedSize}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      {...props}
      type={type}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
