import CreditCard from '.';

export default {
  component: CreditCard,
  title: 'Card/CreditCard',
};

const Template = args => <CreditCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  card: {
    cardName: 'test123',
    cardColor: '#547CE4',
    ownerName: 'test123',
    cardNumber: {
      first: 1234,
      second: 1234,
      third: 1234,
      fourth: 1234,
    },
    expirationDate: new Date(),
    cvc: 123,
  },
};
