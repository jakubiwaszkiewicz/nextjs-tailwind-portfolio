import './globals.css'

export const metadata = {
  title: 'Jakub Iwaszkiewicz Portfolio',
  description: 'My Portfolio for intern as Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
