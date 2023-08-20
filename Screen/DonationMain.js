import React from 'react';
import { ScrollView } from 'react-native';
import { JaagoButton, CRPButton, IslamicReliefButton, BiddanondoButton, BTFButton } from './Donation';

const Donation = () => {
  return (
    <ScrollView>
      {/* Use the imported components */}
      <JaagoButton />
      <CRPButton />
      <IslamicReliefButton />
      <BiddanondoButton />
      <BTFButton />
    </ScrollView>
  );
}

export default Donation;