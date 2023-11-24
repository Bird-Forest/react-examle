import Reader from 'components/Reader/Reader';
import React from 'react';
import publications from '../components/Reader/publications.json';
import { RiderPage } from './Page.styled';

export default function ReaderPage() {
  return (
    <RiderPage>
      <h1>ReaderPage</h1>
      <Reader items={publications} />
    </RiderPage>
  );
}
