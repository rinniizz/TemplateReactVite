import ProductCard from '../ProductCard';

const sampleProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet.',
    image: 'https://via.placeholder.com/300x160',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Sed do eiusmod tempor incididunt.',
    image: 'https://via.placeholder.com/300x160',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Ut enim ad minim veniam.',
    image: 'https://via.placeholder.com/300x160',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Quis nostrud exercitation ullamco.',
    image: 'https://via.placeholder.com/300x160',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Duis aute irure dolor in reprehenderit.',
    image: 'https://via.placeholder.com/300x160',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Excepteur sint occaecat cupidatat non proident.',
    image: 'https://via.placeholder.com/300x160',
  },
];

const ProductList = () => {
  return (

    <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 p-6">
      {sampleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
