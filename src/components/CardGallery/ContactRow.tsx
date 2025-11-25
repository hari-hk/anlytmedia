interface ContactRowProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string;
  className?: string;
}

const ContactRow: React.FC<ContactRowProps> = ({
  icon: Icon,
  text,
  className = '',
}) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <Icon size={14} className='shrink-0' />
    <span className='text-xs truncate'>{text}</span>
  </div>
);

export default ContactRow;
