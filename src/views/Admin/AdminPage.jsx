import AppHeader from '@/components/AppHeader';
import BusinessCardForm from './BusinessCardForm';

function AdminPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-900'>
      <div className='w-full p-4'>
        <BusinessCardList />
      </div>
    </div>
  );
}

const contacts = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+91 98765 43210',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 12345 67890',
  },
  {
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    phone: '+91 99887 77665',
  },
  // Add more contacts here
];

const BusinessCardItem = ({ name, email, phone }) => (
  <div className='w-full bg-white rounded-xl shadow-md p-1 border'>
    <div className='flex flex-row items-center gap-2'>
      <img
        className='w-20 h-20 rounded-md'
        src='https://lh3.googleusercontent.com/pw/AP1GczPoopKVE2b5sMgnOHMLFaS4BZZS6JHZJaIvYDHc-_v2AAk848gV_htKAPSNKMnWm4H4wMAjr599lIT9RMoVXGdjhUZSR9U0ul-9Y2XUXXcyLFaKtg=w2400'
        alt='Default avatar'
      />

      <section className='flex flex-col items-start h-full'>
        <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
        <p className='text-sm text-gray-600'>{email}</p>
        <p className='text-sm text-gray-600'>{phone}</p>
      </section>
    </div>
  </div>
);

const BusinessCardList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {contacts.map((contact, index) => (
        <BusinessCardItem key={index} {...contact} />
      ))}
    </div>
  );
};
export default AdminPage;
