import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductInfo from '../../components/ui/ProductInfo/ProductInfo';

const mockProduct = {
  title: 'Test product',
  rating: 4,
  tags: ['tag1', 'tag2'],
  stock: 5,
  description: 'Test description.',
  warrantyInformation: 'warrantyInformation',
  shippingInformation: 'shippingInformation',
  discount: 10,

  id: 1,
  category: 'category',
  price: 5,
  discountPercentage: 2,
  brand: 'brand',
  sku: 'sku',
  weight: 2,
  dimensions: {
    width: 5,
    height: 8,
    depth: 6,
  },
  availabilityStatus: 'status',
  reviews: [
    { rating: 4, comment: '', date: '', reviewerName: '', reviewerEmail: '' },
  ],
  returnPolicy: '',
  minimumOrderQuantity: 5,
  meta: {
    createdAt: '',
    updatedAt: '',
    barcode: '',
    qrCode: '',
  },
  images: [''],
  thumbnail: '',
};

vi.mock('../../components/ui/Discount/Discount', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Discount</div>,
  };
});

describe('ProductInfo', () => {
  it('should display product title', () => {
    render(<ProductInfo card={mockProduct} />);
    const titleElement = screen.getByText(mockProduct.title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should display meta info', () => {
    render(<ProductInfo card={mockProduct} />);
    const metaElement = screen.getByText(mockProduct.tags.join(', '));
    expect(metaElement).toBeInTheDocument();
  });

  it('should display description info', () => {
    render(<ProductInfo card={mockProduct} />);
    const descriptionElement = screen.getByText(mockProduct.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
