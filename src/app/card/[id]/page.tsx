import DynamicBusinessCard from '@/views/DynamicBusinessCard/DynamicBusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

interface DynamicCardProps {
  params: {
    id: string;
  };
}

export default async function DynamicCard({ params }: DynamicCardProps) {
  const { id } = params;

  return <DynamicBusinessCard id={id} />;
}
