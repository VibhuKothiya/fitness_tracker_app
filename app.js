const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
// const helmet = require('helmet');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(cors());

// app.use('/api/users', userRoutes);

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
