import logoFromAssets from "../assets/logo.jpg";

const builtLogoUrl = "/__l5e/assets-v1/73e63555-2ff2-4a4d-8c62-9ae723eff09b/qgtm-logo-transparent.png";
// prefer the image checked into src/assets (bundled by Vite), fall back to the built asset URL

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`group inline-flex items-center ${className}`}>
      <img
        src={logoFromAssets ?? builtLogoUrl}
        onError={(e) => {
          const t = e.currentTarget as HTMLImageElement;
          if (t.src !== builtLogoUrl) t.src = builtLogoUrl;
        }}
        alt="QGTM Consulting"
        className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </span>
  );
}
