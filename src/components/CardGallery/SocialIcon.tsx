// --- HELPER COMPONENTS ---

import { Facebook, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

type SocialType = 'instagram' | 'facebook' | 'linkedin' | 'twitter' | string;

interface SocialIconProps {
  type: SocialType;
  url?: string | null | unknown;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  type,
  url,
  className = 'w-4 h-4',
}) => {
  if (!url || typeof url !== 'string') return null;
  const icons: Record<string, React.ComponentType<any>> = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
    twitter: Twitter,
    default: Globe,
  };
  const Icon = icons[type] || icons.default;
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`hover:opacity-75 transition-opacity ${className}`}
    >
      <Icon size={16} />
    </a>
  );
};

export default SocialIcon;
