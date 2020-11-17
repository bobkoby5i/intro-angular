import { ProductPhotoUrlPipe } from './product-photo-url.pipe';

describe('ProductPhotoUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPhotoUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
