import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState('');

  function handleViewImage(url: string) {
    setSelectedImage(url);
    onOpen();
  }

  return (
    <>
      <SimpleGrid spacing={40} columns={[1, 2, 3]}>
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={{
                title: card.title,
                description: card.description,
                ts: card.ts,
                url: card.url,
              }}
              viewImage={() => handleViewImage(card.url)}
            />
          );
        })}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl={selectedImage}
      />
    </>
  );
}
