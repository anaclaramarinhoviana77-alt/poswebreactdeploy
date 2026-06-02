import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto flex space-x-12">
        {/* Coluna esquerda */}
        <div className="flex flex-col space-y-4">
          <Logo variant="light" size={50} />
          <p className="text-sm text-white max-w-xs font-medium">
            Instituto Federal de Educação, Ciência e Tecnologia da Bahia
          </p>

          <div className="flex space-x-3">
            {/* Facebook */}
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 opacity-80 hover:bg-slate-700 transition duration-300">
              <svg
                className="w-4 h-4 text-white"
                viewBox="-143 145 512 512"
                fill="currentColor"
              >
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z" />
              </svg>
            </a>

            {/* Twitter */}
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition duration-300">
              <svg
                className="w-4 h-4 text-white"
                viewBox="-143 145 512 512"
                fill="currentColor"
              >
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z" />
              </svg>
            </a>

            {/* Instagram */}
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition duration-300">
              <svg
                className="w-4 h-4 text-white"
                viewBox="-143 145 512 512"
                fill="currentColor"
              >
                <path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z" />
              </svg>
            </a>

            {/* YouTube */}
            <a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition duration-300">
              <svg
                className="w-4 h-4 text-white"
                viewBox="-143 145 512 512"
                fill="currentColor"
              >
                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna direita */}
        <div>
          <h3 className="text-base font-bold text-white mb-4">Sobre o curso</h3>
          <ul className="space-y-1 font-medium">
            <li>
              <a className="text-sm text-gray-400 hover:text-white transition duration-200">
                Produções Científicas
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-white transition duration-200">
                Corpo Docente
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
