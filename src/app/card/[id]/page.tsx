import DynamicBusinessCard from '@/views/DynamicBusinessCard/DynamicBusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

interface DynamicCardProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DynamicCard({ params }: DynamicCardProps) {
  const { id } = await params;

  return <DynamicBusinessCard id={id} />;
}
