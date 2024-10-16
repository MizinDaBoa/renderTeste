import mongoose from 'mongoose';

// conectar com o banco de dados
const connectDB = async () => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error))
};

export default connectDB;