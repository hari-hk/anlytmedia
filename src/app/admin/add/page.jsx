import BusinessCardForm from '@/views/Admin/BusinessCardForm';

async function AddBusinessCard() {
  const response = await fetch('/api/store');
  console.log(response);
  return <BusinessCardForm />;
}

export default AddBusinessCard;
