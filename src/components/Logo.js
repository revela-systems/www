import React from 'react'

export default function Logo() {

    const startStyle = {
        stopColor: 'rgb(0, 171, 227)',
        stopOpacity: 1
    }

    const stopStyle = {
        stopColor: 'rgb(249, 238, 7)', 
        stopOpacity: 1
    }

    const RevelaLogo = (
        <svg>
            <defs>
                <linearGradient id="out-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={startStyle} />
                    <stop offset="100%" style={stopStyle} />
                </linearGradient>
            </defs>

            <circle class="cx10" cx='10' cy='30' r='4'></circle>
            <circle class="cx20" cx='20' cy='50' r='4'></circle>
            <circle class="cx30" cx='30' cy='10' r='4'></circle>
            <circle class="cx40" cx='40' cy='20' r='4'></circle>
            <circle class="cx50" cx='40' cy='40' r='4'></circle>
            <circle class="cx50" cx='50' cy='30' r='4'></circle>
            <circle class="cx50" cx='50' cy='50' r='4'></circle>
            <circle class="cx60" cx='60' cy='20' r='4'></circle>
            <circle class="cx60" cx='60' cy='30' r='4'></circle>
            <circle class="cx60" cx='60' cy='50' r='4'></circle>
            <circle class="cx70" cx='70' cy='10' r='4'></circle>
            <circle class="cx70" cx='70' cy='40' r='4'></circle>
            <circle class="cx70" cx='70' cy='50' r='4'></circle>
            <circle class="cx80" cx='80' cy='10' r='4'></circle>
            <circle class="cx80" cx='80' cy='30' r='4'></circle>
            <circle class="cx80" cx='80' cy='40' r='4'></circle>
            <circle class="cx80" cx='80' cy='50' r='4'></circle>
            <circle class="cx90" cx='90' cy='10' r='4'></circle>
            <circle class="cx90" cx='90' cy='20' r='4'></circle>
            <circle class="cx90" cx='90' cy='30' r='4'></circle>
            <circle class="cx90" cx='90' cy='40' r='4'></circle>
            <circle class="cx90" cx='90' cy='50' r='4'></circle>

            <rect class="seperator" x='100' y='0' width='2' height='60' rx='1'></rect>

            <rect class="bars bars1" x='108' y='06' width='90' height='8' rx='4'></rect>
            <rect class="bars bars2" x='108' y='26' width='83' height='8' rx='4'></rect>
            <rect class="bars bars3" x='108' y='46' width='76' height='8' rx='4'></rect>

            {/* <text x='0' y='140'>REVELA</text> */}
        </svg>
    )

    return (
        <div className="h3">
            {RevelaLogo} 
        </div>
    )
}
