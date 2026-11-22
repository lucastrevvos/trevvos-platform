import Image from "next/image";
import trevvosLogo from "../../public/images/trevvos-logo.jpeg";
export function BrandLogo({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      className={compact ? "brand-logo brand-logo--compact" : "brand-logo"}
      src={trevvosLogo}
      alt="Trevvos Soluções em IA"
      sizes={compact ? "36px" : "56px"}
      preload={priority}
    />
  );
}
