import React from 'react'
import Script from 'next/script'

const GlobalScripts = () => {

    return (
        <div>
            <Script id="dark-mode">
                {`
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.querySelector("body").classList.add("dark");
                }

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                    if(event.matches)
                        document.querySelector("body").classList.add("dark");
                    else
                        document.querySelector("body").classList.remove("dark");
                });
                `}
            </Script>
        </div>
    );
}

export default GlobalScripts;