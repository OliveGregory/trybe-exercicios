const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

  // for (let i = 0; i < order.length; i++) {
  //   const yourAddress = Object.values(order[i]);
  //   console.log(yourAddress)
  // }

  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const telNumber = order.phoneNumber;
  const address = order.address.street;
  const locationNumber = order.address['number'];
  const apNumber = order.address['apartment'];

  // console.log(`Ola ${deliveryPerson}, entrega para: ${name}, Telefone: ${telNumber}, R.${address}, N:${locationNumber}, AP: ${apNumber}.`);
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

  order.name = 'Luiz Otavio';
  const flavors = Object.keys(order.order.pizza);
  const favoriteDrink = Object.keys(order.order.drinks);
  const typeDrink = order.order.drinks.coke.type;
  const newPayment = order.payment = '50';
  console.log(`Olá ${order.name}, o total do seu pedido de ${flavors} e ${favoriteDrink}, ${typeDrink}, até ${newPayment} reais.`);
}

orderModifier(order);