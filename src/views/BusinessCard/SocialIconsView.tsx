import { memo } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

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
      return <Instagram color={color} />;
    case 'facebook':
    case 'fb':
      return <Facebook color={color} />;
    case 'linkedin':
      return <Linkedin color={color} />;
    case 'twitter':
      return <Twitter color={color} />;
    default:
      return <></>;
  }
}

export default memo(SocialIconsView);
