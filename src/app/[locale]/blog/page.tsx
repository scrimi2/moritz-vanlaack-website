import { redirect } from 'next/navigation';

// Blog coming soon — redirect to home for now
export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
