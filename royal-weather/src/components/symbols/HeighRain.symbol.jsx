import '../../scss/animations.scss';

const HeighRainSymbol = () => {
    return(
        <svg width="274" height="264" viewBox="0 0 274 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="symbol">
                <g id="clouds">
                    <g className="cloud" filter="url(#filter0_d_84_184)">
                        <path d="M132.001 73.664C127.529 69.9984 121.906 67.8128 115.808 67.8128C101.441 67.8128 89.7504 79.9157 89.382 94.9946C74.5549 100.867 64 115.978 64 133.685C64 154.61 78.7299 171.895 97.8342 174.626V175H233.166V174.931C252.035 173.776 267 157.25 267 137.031C267 117.533 253.084 101.471 235.166 99.3067C235.238 98.1204 235.279 96.918 235.279 95.7104C235.279 65.4939 211.135 41 181.358 41C159.317 41 140.376 54.4227 132.001 73.648" fill="white"/>
                    </g>
                    <g className="cloud" filter="url(#filter1_d_84_184)">
                        <path d="M75.0009 121.664C70.5292 117.998 64.9065 115.813 58.8078 115.813C44.4412 115.813 32.7504 127.916 32.382 142.995C17.5549 148.867 7 163.978 7 181.685C7 202.61 21.7299 219.895 40.8342 222.626V223H176.166V222.931C195.035 221.776 210 205.25 210 185.031C210 165.533 196.084 149.471 178.166 147.307C178.238 146.12 178.279 144.918 178.279 143.71C178.279 113.494 154.135 89 124.358 89C102.317 89 83.3763 102.423 75.0009 121.648" fill="white"/>
                    </g>
                </g>
                <g id="HWaterDrops">
                    <path className="waterDrop" d="M55.1327 255C60.1683 255 64.2655 250.904 64.2655 245.868C64.2655 240.937 55.7063 229.745 55.3418 229.271L55.1327 229L54.9236 229.273C54.5595 229.746 46 240.939 46 245.869C46.0001 250.904 50.0972 255 55.1327 255Z" fill="#1FE4FF"/>
                    <path className="waterDrop" d="M115.133 255C120.168 255 124.265 250.904 124.265 245.868C124.265 240.937 115.706 229.745 115.342 229.271L115.133 229L114.924 229.273C114.56 229.746 106 240.939 106 245.869C106 250.904 110.097 255 115.133 255Z" fill="#1FE4FF"/>
                    <path className="waterDrop" d="M219.133 212C224.168 212 228.265 207.904 228.265 202.868C228.265 197.937 219.706 186.745 219.342 186.271L219.133 186L218.924 186.273C218.56 186.746 210 197.939 210 202.869C210 207.904 214.097 212 219.133 212Z" fill="#1FE4FF"/>
                    <path className="waterDrop" d="M166.133 255C171.168 255 175.265 250.904 175.265 245.868C175.265 240.937 166.706 229.745 166.342 229.271L166.133 229L165.924 229.273C165.56 229.746 157 240.939 157 245.869C157 250.904 161.097 255 166.133 255Z" fill="#1FE4FF"/>
                </g>
            </g>
            <defs>
                <filter id="filter0_d_84_184" x="60" y="41" width="211" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_184"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_184" result="shape"/>
                    </filter>
                    <filter id="filter1_d_84_184" x="7" y="89" width="216" height="142" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="9" dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_184"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_184" result="shape"/>
                </filter>
            </defs>
        </svg>

    )
}

export default HeighRainSymbol;