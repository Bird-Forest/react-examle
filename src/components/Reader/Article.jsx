import { TextReader, TitleReader } from './Reader.styled';

export const Publication = ({ item }) => {
  return (
    <article>
      <TitleReader>{item.title}</TitleReader>
      <TextReader>{item.text}</TextReader>
    </article>
  );
};
