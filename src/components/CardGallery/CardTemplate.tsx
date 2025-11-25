import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Globe,
  Share2,
  User,
  Briefcase,
  QrCode,
  Send,
} from 'lucide-react';
import ContactRow from './ContactRow';
import SocialIcon from './SocialIcon';

interface CardTemplateProps {
  variant: number;
  data: any;
}

const constructInitials = (fullName: string): string => {
  const names = fullName.trim().split(/\s+/);
  if (!names[0]) return '';
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  const first = names[0].charAt(0).toUpperCase();
  const last = names[names.length - 1].charAt(0).toUpperCase();
  return (first + last).slice(0, 2);
};

const CardTemplate = ({ variant, data }: CardTemplateProps) => {
  const {
    name,
    position,
    org,
    email,
    phones,
    address,
    socialLinks,
    enableContactButton,
    enableSocialLinks,
  } = data;

  const initial = constructInitials(name);

  // Base classes from JSON (used in some templates, overridden in others for variety)
  const baseCard =
    'w-full aspect-[1.55/1] relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]';

  // --- TEMPLATES 1-25 ---

  switch (variant) {
    // 1. The "Original" (Strict adherence to JSON styles)
    case 1:
      return (
        <div
          className={`${baseCard} ${data.bgColor} bg-gradient-to-br flex flex-col items-center justify-center p-6 text-white`}
        >
          <div className={`absolute inset-0 ${data.cardColor}`}></div>
          <div className='relative z-10 flex flex-col items-center text-center space-y-3'>
            <div
              className={`w-16 h-16 rounded-full ${data.bgLogo} flex items-center justify-center shadow-lg`}
            >
              <span className='text-2xl font-bold'>{initial}</span>
            </div>
            <div>
              <h2 className='text-xl font-bold'>{name}</h2>
              <p className='text-sm opacity-80'>{position}</p>
            </div>
            <div className='flex gap-4 mt-2'>
              {enableSocialLinks &&
                Object.entries(socialLinks).map(([k, v]) => (
                  <SocialIcon key={k} type={k} url={v} className='text-white' />
                ))}
            </div>
            {enableContactButton && (
              <button
                className={`mt-4 px-6 py-2 rounded-full ${data.buttonColor} text-xs font-semibold hover:bg-opacity-90`}
              >
                Save Contact
              </button>
            )}
          </div>
        </div>
      );

    // 2. Sidebar Left
    case 2:
      return (
        <div className={`${baseCard} bg-white border border-slate-200 flex`}>
          <div className='w-1/3 bg-slate-800 flex flex-col items-center justify-center p-4 text-white'>
            <div className='w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-3'>
              <User size={20} />
            </div>
            <div className='flex gap-2 flex-wrap justify-center'>
              {Object.keys(socialLinks).map((k) => (
                <div key={k} className='w-1 h-1 bg-white rounded-full'></div>
              ))}
            </div>
          </div>
          <div className='w-2/3 p-5 flex flex-col justify-center text-slate-800'>
            <h2 className='text-lg font-bold uppercase tracking-wider'>
              {name}
            </h2>
            <p className='text-xs text-slate-500 mb-4'>
              {position} | {org}
            </p>
            <div className='space-y-1'>
              <ContactRow icon={Phone} text={phones[0]} />
              <ContactRow icon={Mail} text={email} />
              <ContactRow icon={MapPin} text={address.split(',')[0]} />
            </div>
          </div>
        </div>
      );

    // 3. Modern Minimalist (Top Heavy)
    case 3:
      return (
        <div
          className={`${baseCard} bg-slate-50 border border-slate-100 p-6 flex flex-col justify-between`}
        >
          <div className='flex justify-between items-start'>
            <div>
              <h2 className='text-2xl font-black text-slate-900 leading-none'>
                {name.split(' ')[0]}
              </h2>
              <h2 className='text-2xl font-thin text-slate-900 leading-none'>
                {name.split(' ')[1]}
              </h2>
            </div>
            <QrCode className='text-slate-900 opacity-20' size={32} />
          </div>
          <div className='space-y-1 text-slate-600'>
            <p className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-2'>
              {position}
            </p>
            <ContactRow icon={Mail} text={email} />
            <ContactRow icon={Phone} text={phones[0]} />
          </div>
        </div>
      );

    // 4. Glassmorphism Dark
    case 4:
      return (
        <div
          className={`${baseCard} bg-black flex flex-col justify-center p-6 text-white`}
        >
          <div className='absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full blur-[50px] opacity-40 -mr-10 -mt-10'></div>
          <div className='absolute bottom-0 left-0 w-32 h-32 bg-blue-600 rounded-full blur-[50px] opacity-40 -ml-10 -mb-10'></div>
          <div className='relative z-10 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-10 h-10 rounded bg-gradient-to-tr from-purple-500 to-blue-500'></div>
              <div>
                <h2 className='font-bold'>{name}</h2>
                <p className='text-xs text-gray-400'>{org}</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-2 text-xs text-gray-300'>
              <div className='flex items-center gap-1'>
                <Phone size={10} /> {phones[0]}
              </div>
              <div className='flex items-center gap-1'>
                <Mail size={10} /> Email Me
              </div>
            </div>
          </div>
        </div>
      );

    // 5. Brutalist (Bold Borders)
    case 5:
      return (
        <div
          className={`${baseCard} bg-yellow-400 border-4 border-black p-4 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
        >
          <div className='border-b-4 border-black pb-2 mb-2'>
            <h2 className='text-xl font-bold text-black uppercase'>{name}</h2>
          </div>
          <div className='space-y-1 font-mono text-sm font-bold'>
            <p>{position}</p>
            <p>{org}</p>
          </div>
          <div className='flex justify-between items-end'>
            <div className='text-xs font-mono'>
              <p>{phones[0]}</p>
              <p>{email}</p>
            </div>
            <div className='w-8 h-8 bg-black'></div>
          </div>
        </div>
      );

    // 6. Horizontal Split Center
    case 6:
      return (
        <div className={`${baseCard} bg-white flex flex-col shadow-sm`}>
          <div className='h-1/2 bg-slate-800 flex items-center justify-center relative'>
            <div className='absolute -bottom-6 w-12 h-12 bg-white rounded-full flex items-center justify-center p-1'>
              <div className='w-full h-full bg-slate-200 rounded-full flex items-center justify-center'>
                {initial}
              </div>
            </div>
          </div>
          <div className='h-1/2 pt-8 pb-4 text-center flex flex-col justify-center'>
            <h2 className='font-bold text-slate-800'>{name}</h2>
            <p className='text-xs text-slate-500 mb-2'>{position}</p>
            <div className='flex justify-center gap-3 text-slate-400'>
              <Mail size={14} /> <Phone size={14} /> <MapPin size={14} />
            </div>
          </div>
        </div>
      );

    // 7. The Connector (Social Bar)
    case 7:
      return (
        <div
          className={`${baseCard} bg-gradient-to-r from-blue-600 to-indigo-700 p-1 flex`}
        >
          <div className='bg-white w-full h-full rounded-lg p-5 flex flex-col relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-20 h-full bg-slate-50 -skew-x-12 translate-x-10'></div>
            <h2 className='text-lg font-bold text-blue-900 relative z-10'>
              {name}
            </h2>
            <p className='text-xs text-blue-600 font-medium mb-auto relative z-10'>
              {org}
            </p>

            <div className='space-y-1 relative z-10'>
              <ContactRow
                className='text-slate-600'
                icon={Phone}
                text={phones[0]}
              />
              <ContactRow className='text-slate-600' icon={Mail} text={email} />
            </div>

            <div className='absolute bottom-4 right-4 flex flex-col gap-2'>
              {Object.values(socialLinks)
                .slice(0, 3)
                .map((url, i) => (
                  <div
                    key={i}
                    className='w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600'
                  >
                    <Share2 size={12} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      );

    // 8. Photo Card (Simulated)
    case 8:
      return (
        <div className={`${baseCard} relative`}>
          <div className='absolute inset-0 bg-slate-800'>
            {/* Pattern */}
            <div
              className='absolute inset-0 opacity-10'
              style={{
                backgroundImage:
                  'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            ></div>
          </div>
          <div className='relative z-10 h-full flex flex-col justify-end p-5 bg-gradient-to-t from-black/90 to-transparent text-white'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <div className='w-12 h-1 bg-yellow-500 my-2'></div>
            <p className='text-sm'>
              {position} @ {org}
            </p>
            <div className='flex gap-4 mt-3 text-xs opacity-75'>
              <span>{phones[0]}</span>
              <span>•</span>
              <span>{email}</span>
            </div>
          </div>
        </div>
      );

    // 9. Neumorphism
    case 9:
      return (
        <div
          className={`${baseCard} bg-[#e0e5ec] flex items-center p-6 text-slate-600`}
        >
          <div className='w-1/3 flex justify-center'>
            <div className='w-20 h-20 rounded-full bg-[#e0e5ec] flex items-center justify-center shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)]'>
              <User size={32} className='opacity-50' />
            </div>
          </div>
          <div className='w-2/3 pl-4'>
            <h2 className='font-bold text-lg'>{name}</h2>
            <p className='text-xs mb-3'>{position}</p>
            <div className='flex gap-2'>
              <button className='p-2 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)]'>
                <Phone size={14} />
              </button>
              <button className='p-2 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)]'>
                <Mail size={14} />
              </button>
              <button className='p-2 rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_rgb(163,177,198),-5px_-5px_10px_rgba(255,255,255,0.5)]'>
                <MapPin size={14} />
              </button>
            </div>
          </div>
        </div>
      );

    // 10. Gradient Stroke
    case 10:
      return (
        <div
          className={`${baseCard} bg-slate-900 p-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500`}
        >
          <div className='bg-slate-900 w-full h-full rounded-[10px] p-5 flex flex-col justify-center items-center text-white relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-50'></div>
            <h2 className='text-xl font-light tracking-[0.2em] uppercase mb-1'>
              {name}
            </h2>
            <p className='text-xs text-slate-400 font-mono mb-6'>
              {'< ' + position + ' />'}
            </p>
            <div className='w-full flex justify-between text-xs px-4'>
              <div className='text-center'>
                <Phone size={16} className='mx-auto mb-1 text-pink-500' />
                <span>Call</span>
              </div>
              <div className='text-center'>
                <Mail size={16} className='mx-auto mb-1 text-red-500' />
                <span>Email</span>
              </div>
              <div className='text-center'>
                <Globe size={16} className='mx-auto mb-1 text-yellow-500' />
                <span>Web</span>
              </div>
            </div>
          </div>
        </div>
      );

    // 11. The Ribbon
    case 11:
      return (
        <div
          className={`${baseCard} bg-white border shadow-sm p-6 overflow-hidden`}
        >
          <div className='absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-8 py-1 rotate-45 translate-x-8 translate-y-4 shadow-md'>
            PRO
          </div>
          <div className='h-full flex flex-col justify-center'>
            <h2 className='text-2xl font-serif text-slate-800 italic'>
              {name}
            </h2>
            <p className='text-xs text-red-600 uppercase font-bold tracking-wide mb-4'>
              {org}
            </p>
            <div className='border-l-2 border-slate-200 pl-3 space-y-1'>
              <p className='text-xs text-slate-600'>{email}</p>
              <p className='text-xs text-slate-600'>{phones[0]}</p>
              <p className='text-xs text-slate-600 truncate w-4/5'>{address}</p>
            </div>
          </div>
        </div>
      );

    // 12. Grid System
    case 12:
      return (
        <div
          className={`${baseCard} grid grid-cols-2 grid-rows-2 bg-slate-100 gap-[1px] border border-slate-200`}
        >
          <div className='bg-white p-4 flex flex-col justify-center'>
            <h2 className='font-bold text-slate-800 leading-tight'>{name}</h2>
          </div>
          <div className='bg-slate-50 p-4 flex flex-col justify-center items-end'>
            <div className='w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold'>
              {initial}
            </div>
          </div>
          <div className='bg-slate-50 p-4 flex flex-col justify-center text-xs text-slate-500'>
            <p>{position}</p>
            <p>{org}</p>
          </div>
          <div className='bg-white p-4 flex flex-col justify-center items-end text-xs text-slate-800 font-medium'>
            <p>{phones[0]}</p>
            <p>{email}</p>
          </div>
        </div>
      );

    // 13. Rounded & Soft (Pastel)
    case 13:
      return (
        <div
          className={`${baseCard} bg-[#fdf2f8] flex flex-col items-center justify-center p-6 text-pink-900 border-2 border-dashed border-pink-200`}
        >
          <div className='w-16 h-16 rounded-full bg-pink-200 mb-3 flex items-center justify-center'>
            <User className='text-pink-500' />
          </div>
          <h2 className='font-bold text-lg'>{name}</h2>
          <p className='text-xs text-pink-500 mb-4'>{position}</p>
          <button className='px-4 py-1 rounded-full bg-pink-500 text-white text-xs hover:bg-pink-600 transition-colors'>
            Contact Me
          </button>
        </div>
      );

    // 14. Technical / Code
    case 14:
      return (
        <div
          className={`${baseCard} bg-[#1e1e1e] p-4 font-mono text-xs text-gray-300 border-l-4 border-green-500`}
        >
          <div className='h-full flex flex-col'>
            <p className='text-gray-500'>
              import <span className='text-blue-400'>Person</span> from{' '}
              <span className='text-orange-400'>'{org}'</span>;
            </p>
            <br />
            <p>
              <span className='text-purple-400'>const</span>{' '}
              <span className='text-yellow-200'>contact</span> = {'{'}
            </p>
            <div className='pl-4'>
              <p>
                name: <span className='text-green-400'>"{name}"</span>,
              </p>
              <p>
                role: <span className='text-green-400'>"{position}"</span>,
              </p>
              <p>
                email: <span className='text-green-400'>"{email}"</span>
              </p>
            </div>
            <p>{'};'}</p>
            <br />
            <p className='mt-auto text-gray-500'>// {phones[0]}</p>
          </div>
        </div>
      );

    // 15. The Stripe
    case 15:
      return (
        <div className={`${baseCard} bg-white shadow-md flex`}>
          <div className='w-12 h-full bg-teal-600 flex flex-col items-center justify-end pb-4 gap-3 text-white'>
            <Instagram size={14} />
            <Linkedin size={14} />
            <Twitter size={14} />
          </div>
          <div className='flex-1 p-6 flex flex-col justify-center'>
            <h2 className='text-2xl font-bold text-slate-800'>{name}</h2>
            <div className='h-[2px] w-10 bg-teal-600 my-2'></div>
            <p className='text-sm font-semibold text-slate-500'>{org}</p>
            <p className='text-xs text-slate-400 mt-1'>
              {address.split(',')[0]}, {address.split(',')[1]}
            </p>
          </div>
        </div>
      );

    // 16. Dark Outline
    case 16:
      return (
        <div
          className={`${baseCard} bg-slate-900 text-white p-6 border border-slate-700 relative`}
        >
          <div className='absolute top-4 right-4 text-slate-700'>
            <Briefcase size={48} strokeWidth={1} />
          </div>
          <div className='h-full flex flex-col justify-end relative z-10'>
            <h2 className='text-xl font-bold mb-1'>{name}</h2>
            <p className='text-xs text-slate-400 mb-4'>{position}</p>
            <div className='flex gap-4 border-t border-slate-700 pt-3'>
              <Phone size={14} className='text-teal-400' />
              <Mail size={14} className='text-teal-400' />
              <Globe size={14} className='text-teal-400' />
            </div>
          </div>
        </div>
      );

    // 17. Floating Island
    case 17:
      return (
        <div
          className={`${baseCard} bg-slate-200 flex items-center justify-center p-6`}
        >
          <div className='bg-white w-full h-full rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center relative'>
            <div className='w-full h-1/2 bg-indigo-500 absolute top-0 left-0 rounded-t-2xl'></div>
            <div className='w-16 h-16 bg-white rounded-full p-1 relative z-10 shadow-md'>
              <div className='w-full h-full bg-slate-200 rounded-full overflow-hidden'>
                {/* Placeholder img */}
              </div>
            </div>
            <div className='mt-2 text-center relative z-10'>
              <h2 className='font-bold text-slate-800'>{name}</h2>
              <p className='text-[10px] text-slate-500'>{email}</p>
            </div>
          </div>
        </div>
      );

    // 18. Typography Big
    case 18:
      return (
        <div
          className={`${baseCard} bg-[#f0f0f0] p-5 overflow-hidden relative`}
        >
          <h1 className='text-6xl font-black text-white absolute -bottom-4 -right-4 select-none leading-none opacity-50 z-0'>
            {name.split(' ')[0]}
          </h1>
          <div className='relative z-10 h-full flex flex-col'>
            <div className='flex-1'>
              <div className='w-8 h-8 bg-black mb-4'></div>
            </div>
            <div>
              <h2 className='font-bold text-black text-lg'>{name}</h2>
              <p className='text-xs text-gray-600 font-medium'>{position}</p>
              <div className='mt-2 text-[10px] text-gray-500 font-mono'>
                {phones.map((p: string) => (
                  <span key={p} className='block'>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    // 19. ID Badge Style
    case 19:
      return (
        <div className={`${baseCard} bg-white border flex flex-col relative`}>
          <div className='h-2 w-full bg-blue-800 absolute top-0'></div>
          <div className='flex-1 flex items-center p-4 gap-4'>
            <div className='w-20 h-24 bg-slate-200 rounded border border-slate-300'></div>
            <div className='flex-1'>
              <h2 className='font-bold text-lg text-blue-900 uppercase'>
                {name}
              </h2>
              <p className='text-xs font-bold text-slate-500 mb-2'>
                ID: 8829102
              </p>
              <div className='text-xs text-slate-600 space-y-1'>
                <p>{position}</p>
                <p>{org}</p>
              </div>
            </div>
          </div>
          <div className='bg-slate-50 p-2 flex justify-between items-center text-[10px] text-slate-400 border-t'>
            <span>Authorized Personnel</span>
            <QrCode size={16} />
          </div>
        </div>
      );

    // 20. Skewed Dynamic
    case 20:
      return (
        <div
          className={`${baseCard} bg-slate-900 relative overflow-hidden flex items-center justify-center`}
        >
          <div className='absolute inset-0 bg-blue-600 transform -skew-x-12 -translate-x-1/2'></div>
          <div className='relative z-10 text-white flex justify-between w-full px-8 items-center'>
            <div className='text-right pr-4 border-r border-white/20 w-1/2'>
              <h2 className='font-bold text-lg'>{name}</h2>
              <p className='text-xs text-blue-100'>{position}</p>
            </div>
            <div className='pl-4 w-1/2 text-xs text-blue-100'>
              <p>{phones[0]}</p>
              <p className='truncate'>{email}</p>
            </div>
          </div>
        </div>
      );

    // 21. Material floating button
    case 21:
      return (
        <div
          className={`${baseCard} bg-teal-50 p-6 flex flex-col justify-center relative`}
        >
          <h2 className='text-2xl font-light text-teal-900'>{name}</h2>
          <p className='text-sm text-teal-700 mb-6'>{org}</p>
          <div className='flex gap-4 text-teal-600 text-xs'>
            <span>{address.split(',')[0]}</span>
            <span>{address.split(',')[1]}</span>
          </div>
          <button className='absolute bottom-6 right-6 w-12 h-12 bg-teal-500 rounded-full shadow-lg text-white flex items-center justify-center hover:bg-teal-600 transition-colors'>
            <Send size={20} className='ml-1' />
          </button>
        </div>
      );

    // 22. Interactive Toggle (Visual only)
    case 22:
      return (
        <div className={`${baseCard} bg-gray-800 text-white p-6 rounded-2xl`}>
          <div className='flex justify-between items-start mb-4'>
            <div className='w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center'>
              <span className='font-bold'>{initial}</span>
            </div>
            <div className='w-8 h-4 bg-gray-600 rounded-full relative'>
              <div className='w-4 h-4 bg-white rounded-full absolute right-0'></div>
            </div>
          </div>
          <h2 className='font-bold text-lg'>{name}</h2>
          <p className='text-xs text-orange-400 mb-4'>{position}</p>
          <div className='bg-gray-700/50 p-2 rounded-lg flex items-center justify-between'>
            <span className='text-xs text-gray-300'>{phones[0]}</span>
            <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'>
              <Phone size={10} />
            </div>
          </div>
        </div>
      );

    // 23. Elegant Serif Border
    case 23:
      return (
        <div className={`${baseCard} bg-[#FFFAF0] p-2`}>
          <div className='border border-double border-4 border-[#8B4513] w-full h-full flex flex-col items-center justify-center p-4 text-[#8B4513]'>
            <h2 className='font-serif italic text-2xl mb-1'>{name}</h2>
            <div className='h-[1px] w-16 bg-[#8B4513] mb-2'></div>
            <p className='text-xs font-serif uppercase tracking-widest mb-4'>
              {org}
            </p>
            <div className='flex gap-3'>
              <Linkedin size={16} />
              <Mail size={16} />
            </div>
          </div>
        </div>
      );

    // 24. Chat Bubble Style
    case 24:
      return (
        <div
          className={`${baseCard} bg-blue-500 p-6 flex flex-col justify-end items-end`}
        >
          <div className='bg-white text-slate-800 p-3 rounded-t-xl rounded-bl-xl shadow-lg mb-2 max-w-[80%]'>
            <p className='text-sm font-bold'>Hi, I'm {name.split(' ')[0]} 👋</p>
          </div>
          <div className='bg-white text-slate-800 p-3 rounded-l-xl rounded-br-xl shadow-lg max-w-[90%] text-xs'>
            <p>
              I work as {position} at {org}.
            </p>
            <p className='mt-1 text-blue-500'>{email}</p>
          </div>
        </div>
      );

    // 25. The "Full Info" (Classic List)
    default:
      return (
        <div
          className={`${baseCard} bg-white border-l-8 border-slate-700 pl-6 py-4 pr-4 flex flex-col justify-center`}
        >
          <h2 className='text-xl font-bold text-slate-800'>{name}</h2>
          <p className='text-sm text-slate-500 mb-4'>{position}</p>
          <div className='space-y-1 text-xs text-slate-600'>
            <div className='flex items-center gap-2'>
              <span className='font-bold w-12'>Phone:</span> {phones[0]}
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold w-12'>Email:</span> {email}
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold w-12'>Web:</span> anlytmedia.in
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-bold w-12'>Loc:</span> TN, India
            </div>
          </div>
        </div>
      );
  }
};

export default CardTemplate;
