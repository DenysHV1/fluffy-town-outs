import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = () => {
  new SimpleLightbox('.gallery a', {
    sourceAttr: 'href',
    overlay: true,
    nav: true,
    captions: false,
  });
};
