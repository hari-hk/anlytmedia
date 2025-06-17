import { memo } from 'react';
import dynamic from 'next/dynamic';

const FacebookIcon = dynamic(() => import('@/components/icons/fb'));
const InstagramIcon = dynamic(() => import('@/components/icons/instagram'));
const LinkedInIcon = dynamic(() => import('@/components/icons/linkedin'));
const TwitterIcon = dynamic(() => import('@/components/icons/twitter'));

function SocialIconsView({ url }) {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(instagram|facebook|fb|linkedin|twitter|youtube|tiktok|threads)\.com/i
  );
  const iconName = match ? match[1].toLowerCase() : null;

  switch (iconName) {
    case 'instagram':
      return <InstagramIcon />;
    case 'facebook':
    case 'fb':
      return <FacebookIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'twitter':
      return <TwitterIcon />;
    default:
      return <></>;
  }
}

export default memo(SocialIconsView);
