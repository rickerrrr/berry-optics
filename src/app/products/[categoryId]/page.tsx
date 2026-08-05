import { productCategories } from '@data/index';
import CategoryPageClient from './CategoryPageClient';

export function generateStaticParams() {
  return productCategories.map((category) => ({
    categoryId: category.id,
  }));
}

export default function ProductCategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  return <CategoryPageClient params={params} />;
}
