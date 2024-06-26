import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import fonts from '@/app/ui/fonts.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts.athelas} antialiased`} >{children}</body>
    </html>
  );
}
