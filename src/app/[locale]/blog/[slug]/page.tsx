import { redirect } from 'next/navigation';

// Blog post coming soon — redirect to home for now
export default async function BlogPostPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}`);
}
