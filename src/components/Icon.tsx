type Props = {
  name: string;
  size?: number;
  color?: string;
  alt?: string;
  className?: string;
};

/**
 * Icons8 line icon, rendered in the brand accent color by default.
 * See https://icons8.com — decorative, so alt is empty unless provided.
 */
export default function Icon({ name, size = 28, color = "63D4F4", alt = "", className }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://img.icons8.com/ios/100/${color}/${name}.png`}
      width={size}
      height={size}
      alt={alt}
      loading="lazy"
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
