const mongoose = require('mongoose');
const OEM_Specs = require('../models/oem_specs');

mongoose.connect('mongodb+srv://harsh0patil001:L1LXkCZoX9SYSVAm@harsh.8sbkl6k.mongodb.net/BUYC');

const sampleData = [
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 20000.00,
    colors:'Red',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 25000.00,
    colors:'Blue',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 27000.00,
    colors:'White',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2023,
    list_price: 22000.00,
    colors:'Red',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2023,
    list_price: 28000.00,
    colors:'Blue',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2023,
    list_price: 31000.00,
    colors:'White',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2021,
    list_price: 28000.00,
    colors:'Silver',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2021,
    list_price: 26000.00,
    colors:'Gray',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2021,
    list_price: 23000.00,
    colors:'Black',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 30000.00,
    colors:'Silver',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 28000.00,
    colors:'Gray',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },{
    manufacturer: 'Honda',
    model: 'Accord',
    year: 2022,
    list_price: 25000.00,
    colors:'Black',
    mileage: 28.0,
    power_bhp: 180,
    max_speed: 210,
  },
  {
    manufacturer: 'Honda',
    model: 'City',
    year: 2015,
    list_price: 20000.00,
    colors: 'Silver',
    mileage: 23.5,
    power_bhp: 120,
    max_speed: 180,
  },
  {
    manufacturer: 'Honda',
    model: 'City',
    year: 2015,
    list_price: 25000.00,
    colors: 'White',
    mileage: 23.5,
    power_bhp: 120,
    max_speed: 180,
  },
  {
    manufacturer: 'Honda',
    model: 'City',
    year: 2018,
    list_price: 30000.00,
    colors:'White',
    mileage: 23.5,
    power_bhp: 120,
    max_speed: 180,
  },
  {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 2022,
    list_price: 25000.00,
    colors:'Red',
    mileage: 30.5,
    power_bhp: 150,
    max_speed: 200,
  },
  {
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2021,
    list_price: 23000.00,
    colors:'Silver',
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
  },{
    manufacturer: 'Toyota',
    model: 'Corolla',
    year: 2021,
    list_price: 23000.00,
    colors:'Black',
    mileage: 28.5,
    power_bhp: 140,
    max_speed: 190,
  },
  {
    manufacturer: 'Ford',
    model: 'Mustang',
    year: 2023,
    list_price: 40000.00,
    colors:'Black',
    mileage: 25.0,
    power_bhp: 450,
    max_speed: 250,
  },
  {
    manufacturer: 'Nissan',
    model: 'Altima',
    year: 2020,
    list_price: 22000.00,
    colors:'Silver',
    mileage: 26.8,
    power_bhp: 170,
    max_speed: 200,
  },
  {
    manufacturer: 'Chevrolet',
    model: 'Malibu',
    year: 2022,
    list_price: 24000.00,
    colors: 'Black',
    mileage: 29.2,
    power_bhp: 160,
    max_speed: 195,
  }
];


async function insertSampleData() {
  try {
    await OEM_Specs.insertMany(sampleData);
    console.log('OEM data inserted successfully!');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertSampleData();
