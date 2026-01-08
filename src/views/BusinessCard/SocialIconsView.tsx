import { memo } from 'react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';

function SocialIconsView({
  url,
  color = 'text-white',
}: {
  url: string;
  color?: string;
}) {




  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(instagram|facebook|fb|linkedin|twitter|x|youtube|tiktok|threads)\.com/i
  );
  const iconName = match ? match[1].toLowerCase() : null;

  switch (iconName) {
    case 'instagram':
      return <InstagramIcon color={color} />;
    case 'facebook':
    case 'fb':
      return <FacebookIcon
        color={color} />;
    case 'linkedin':
      return <LinkedinIcon color={color} />;
    case 'twitter':
      return <TwitterIcon color={color} />;
    default:
      return <></>;
  }
}

export default memo(SocialIconsView);
