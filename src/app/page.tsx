import ClientWraper from "../component/home/ClientWrapper";

export const metadata = {
  title: 'MontageMotion | Professional Video Editing Services',
  description: 'Premium video editing for businesses & content creators',
  openGraph: {
    title: 'MontageMotion Video Editing Agency',
    description: 'Transform your raw footage into polished, professional videos',
    url: 'https://montagemotion.com',
    siteName: 'MontageMotion',
    images: [
      {
        url: 'https://montagemotion.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MontageMotion Video Editing Agency',
    description: 'Professional editing services for creators and brands',
    images: ['https://montagemotion.com/twitter-card.jpg'],
  },
};
export default function Home() {
  return (
  <div  className="">
    <ClientWraper />
  </div>
  );
}
