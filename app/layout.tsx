// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import logo from '../public/impromptu-icon-logo.png';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import Provider from '@/components/Providers';
import Head from 'next/head';

export const metadata = {
  // icon: `${logo}`,
  title: 'ImPromptu - Your AI Prompts Manager',
  description: 'The only tool you need to manage your AI Prompts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="favicon" href={logo.src} />
        {/* <ColorSchemeScript /> */}
      </Head>
      <body>
        <Provider session={undefined}>
          <MantineProvider>
            <HeaderMenu />
            {children}
          </MantineProvider>
        </Provider>
      </body>
    </html>
  );
}