import BusinessCard, {
  BusinessCardProps,
} from '@/views/BusinessCard/BusinessCard';

export const metadata = {
  title: 'Ananda Sayanan | Business Card',
  description: 'Creative Director at Anlyt Media',
};

const defaultData: BusinessCardProps = {
  name: 'Ananda Sayanan',
  position: 'Creative Director at Anlyt Media',
  org: 'Anlyt Media',
  email: 'hello@anlytmedia.in',
  logo: '/app-bar-logo.svg',
  phones: ['+917092828370', '+918428524861'],
  address: '18/16/3, Elavuvilai Jn, Marthandam, TN 629191, India',
  bgColor: 'from-slate-600 to-slate-800 card-bg',
  bgLogo: 'bg-slate-500',
  textColor: 'text-white',
  cardColor: 'bg-green',
  buttonColor: 'bg-slate-500',
  enableContactButton: true,
  enableSocialLinks: true,
  endpoint: 'ananda-sayanan',
  socialLinks: {
    instagram: 'https://www.instagram.com/anlytmedia',
    facebook: 'https://www.facebook.com/anlytmedia',
    linkedin: 'https://www.linkedin.com/company/anlytmedia',
    twitter: 'https://www.twitter.com/anlytmedia',
  },
};

export default function Card() {
  return <BusinessCard {...defaultData} />;
}
