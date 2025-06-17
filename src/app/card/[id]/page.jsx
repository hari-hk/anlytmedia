import BusinessCard from '@/views/BusinessCard/BusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

export default async function DynamicCard({ params }) {
  const { id } = await params;
  const dataSet = {
    default: {
      name: 'Ananda Sayanan',
      position: 'Creative Director at Anlyt Media',
      org: 'Anlyt Media',
      email: 'hello@anlytmedia.in',
      phones: ['+917092828370', '+918428524861'],
      address: '18/16/3, Elavuvilai Jn, Marthandam, TN 629191, India',
      bgColor: 'from-slate-600 to-slate-800',
      bgLogo: 'bg-slate-500',
      textColor: 'text-white',
      cardColor: 'bg-green',
      buttonColor: 'bg-slate-500',
      enableContactButton: true,
      enableSocialLinks: false,
      socialLinks: {
        instagram: 'https://www.instagram.com/anlytmedia',
        facebook: 'https://www.facebook.com/anlytmedia',
        linkedin: 'https://www.linkedin.com/company/anlytmedia',
        twitter: 'https://www.twitter.com/anlytmedia',
      },
    },
    hariharakumar: {
      name: 'Hari hara Kumar',
      position: 'Software Engineer at Anlyt Media',
      org: 'Anlyt Media',
      profileImage:
        'https://lh3.googleusercontent.com/pw/AP1GczPoopKVE2b5sMgnOHMLFaS4BZZS6JHZJaIvYDHc-_v2AAk848gV_htKAPSNKMnWm4H4wMAjr599lIT9RMoVXGdjhUZSR9U0ul-9Y2XUXXcyLFaKtg=w2400',
      email: 'hariharakumar5196@gmail.com',
      phones: ['+918428524623', '+918428524861'],
      address: '18/16/3, Elavuvilai Jn, Marthandam, TN 629191, India',
      bgColor: 'from-green-600 to-green-800 ',
      textColor: 'text-white',
      cardColor: 'bg-green-900',
      buttonColor: 'bg-green-900',
      enableContactButton: true,
      enableSocialLinks: false,
      socialLinks: {},
    },
  };

  const data = dataSet[id] || dataSet.default;

  return <BusinessCard {...data} />;
}
