const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://marionum:a1300807M@ac-stsshjr-shard-00-00.7uxvhul.mongodb.net:27017/ChristmasGame';;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('your-database');
    const usersCollection = database.collection('users');

    // Insert user and score data
    const userData = {
      username: 'john_doe',
      score: 1000,
    };

    const result = await usersCollection.insertOne(userData);
    console.log(`Inserted ${result.insertedCount} document into the users collection`);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Closed MongoDB connection');
  }
}

connectToMongoDB();
