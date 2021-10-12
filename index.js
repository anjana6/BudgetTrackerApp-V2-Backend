import express from 'express';
import budgetRoute from './src/routes/budget.router';
import categoryRoute from './src/routes/category.router';
import userRoute from './src/routes/user.router';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(userRoute);
app.use(budgetRoute);
app.use(categoryRoute);

app.listen(PORT, () => {console.log(`server runing on PORT ${PORT}`)})