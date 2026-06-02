export default function CardTexto({ 
    titulo,
    descricao,
    status,
    badgeColor,
    iconColor,
    linkColor,
    shadowColor,
    deadline,
    linkText, 
    link}) {
    return (
        <div className="bg-white rounded-xl p-6 w-1/4 h-80 flex flex-col justify-between"
            style={{ boxShadow: `0px -5px 0px 0px ${shadowColor}, 0px 20px 20px 0px #a8a8a7` }}
          >
            {/* Status e ícone */}
            <div className="flex justify-between items-center px-2">
              <h4 className={`uppercase font-bold text-center px-3 py-1 rounded-full ${badgeColor}`}>
                {status.toUpperCase()}
              </h4>

              <svg className={`w-12 h-12 ${iconColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 14 7 C 12.343 7 11 8.343 11 10 L 11 40 C 11 41.657 12.343 43 14 43 L 36 43 C 37.657 43 39 41.657 39 40 L 39 22 L 27 22 C 25.343 22 24 20.657 24 19 L 24 7 L 14 7 z M 25 7.2929688 L 25 19 C 25 20.105 25.895 21 27 21 L 38.707031 21 L 25 7.2929688 z M 17.5 28 L 32.5 28 C 32.776 28 33 28.224 33 28.5 C 33 28.776 32.776 29 32.5 29 L 17.5 29 C 17.224 29 17 28.776 17 28.5 C 17 28.224 17.224 28 17.5 28 z M 17.5 34 L 32.5 34 C 32.776 34 33 34.224 33 34.5 C 33 34.776 32.776 35 32.5 35 L 17.5 35 C 17.224 35 17 34.776 17.5 34 C 17 34.224 17.224 34 17.5 34 z"></path>
              </svg>
            </div>

            {/* Título e descrição */}
            <h2 className="font-bold text-2xl">{titulo}</h2>
            <p className="text-gray-600 text-lg font-normal pr-4">{descricao}</p>

            {/* Prazo */}
            <div className="flex flex-row items-center gap-2">
              <svg className="w-5 h-5" fill="#969696" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"></path>
              </svg>
              <p className="text-gray-500 font-medium">{deadline}</p>
            </div>

            {/* Link com seta */}
            <div className="flex flex-row items-center gap-2">
              <a href={link} className={`font-bold text-xl hover:underline ${linkColor}`}>
                {linkText}
              </a>

              {/* Setinha igual ao HTML */}
              <svg
                className={`${linkColor} w-6 h-6`}
                viewBox="0 -6.5 38 38"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>right-arrow</title>
                  <desc>Created with Sketch.</desc>
                  <g id="icons" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-1511.000000, -158.000000)"
                      fillRule="nonzero"
                    >
                      <g id="1" transform="translate(1350.000000, 120.000000)">
                        <path d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
    )
}