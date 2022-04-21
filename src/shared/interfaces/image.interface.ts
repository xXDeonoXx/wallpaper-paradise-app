import Author from './author.interface';
import Category from './category.interface';

export default interface ImageEntry {
  id: number;
  title: string;
  url: string;
  categories: Category[];
  uploader: Author;
}
