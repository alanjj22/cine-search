import React from 'react';
import '@styles/globals.css';

export const metadat = {
    title: 'Cine search',
    description: 'Find your movies'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout;