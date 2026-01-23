import Box from '@mui/material/Box';
import Header from '@/components/Header';
import { client } from '@/sanity/client';
import { siteSettingsQuery } from '@/sanity/queries';
import { SiteSettings } from '@/sanity/types';

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header resumeUrl={settings?.resumeUrl} />
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
    </Box>
  );
}

