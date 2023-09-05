import './globals.css'
import { metadata } from "./global/constants/metadata"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
      <body>
        {children}
        </body>
    </html>
  )
}
