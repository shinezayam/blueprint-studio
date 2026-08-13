type Props = {
  name: string;
  size?: number;
  alt?: string;
  className?: string;
};

/**
 * Icons8 line icon rendered as a CSS mask so it adopts the current accent
 * color per theme (see `.icon8` in globals.css) instead of a baked-in color.
 * See https://icons8.com — decorative, so aria-hidden unless `alt` is given.
 */
export default function Icon({ name, size = 28, alt, className }: Props) {
  const url = `https://img.icons8.com/ios/100/${name}.png`;
  return (
    <span
      role="img"
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`icon8${className ? ` ${className}` : ""}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
      }}
    />
  );
}
