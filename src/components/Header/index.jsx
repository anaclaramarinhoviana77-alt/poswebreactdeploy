import telefoneIcon from '../../assets/imagens/icons8-telefone-20.png';
import cartaIcon from '../../assets/imagens/icons8-carta-20.png';
import facebookIcon from '../../assets/imagens/icons8-facebook-novo-20.png';
import instagramIcon from '../../assets/imagens/icons8-instagram-20.png';
import linkedinIcon from '../../assets/imagens/icons8-linkedin-20.png';

export default function Header() {
  return (
    <header className="m-0 px-10 py-3 bg-green-600 flex justify-between items-center">
      
      {/* Contatos */}
      <section className="flex gap-3 text-base items-center text-white text-base">
        <div className="flex gap-1 items-center">
          <img src={telefoneIcon} alt="telefone" />
          <a href="tel:+557121029400">(71) 2102-9400</a>
        </div>

        <div className="flex gap-1 items-center">
          <img src={cartaIcon} alt="email" />
          <a href="mailto:posgraduacao@ifba.edu.br">posgraduacao@ifba.edu.br</a>
        </div>
      </section>

      {/* Redes sociais */}
      <div className="flex gap-5 items-center">
        <a href="#"><img src={facebookIcon} alt="facebook" /></a>
        <a href="#"><img src={instagramIcon} alt="instagram" /></a>
        <a href="#"><img src={linkedinIcon} alt="linkedin" /></a>
      </div>
    </header>
  );
}
