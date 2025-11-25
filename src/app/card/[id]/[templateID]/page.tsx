import BusinessCardTemplate from '@/views/DynamicBusinessCard/BusinessCardTemplate';
import DynamicBusinessCard from '@/views/DynamicBusinessCard/DynamicBusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

interface DynamicCardProps {
  params: Promise<{
    id: string;
    templateID: string;
  }>;
}

export default async function DynamicCard({ params }: DynamicCardProps) {
  const { id, templateID } = await params;

  return <BusinessCardTemplate id={id} templateId={templateID} />;
}
