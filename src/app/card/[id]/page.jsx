import DynamicBusinessCard from '@/views/DynamicBusinessCard/DynamicBusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

export default async function DynamicCard({ params }) {
  const { id } = await params;

  return <DynamicBusinessCard id={id} />;
}
