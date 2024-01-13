const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 6000;
const app = express();

app.use(express.json()); //middleware
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`\n Server live on ${port}`);
});
