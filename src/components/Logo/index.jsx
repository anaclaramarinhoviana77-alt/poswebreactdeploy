import logoIfbaWhite from "../../assets/icons/Logo-IFBA-text-white.png";
import logoIfbaBlack from "../../assets/icons/Logo-IFBA-text-black.png";

export default function Logo({ size = 70, variant = "dark" }) {
  const logos = {
    light: logoIfbaWhite,
    dark: logoIfbaBlack,
  };

  return (
    <img
      src={logos[variant]}
      alt="Logo IFBA"
      style={{ width: size, height: "auto" }}
    />
  );
}
