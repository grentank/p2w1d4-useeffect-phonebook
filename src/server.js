import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender'
import indexRouter from './routes/render/indexRouter';
import userRouter from './routes/api/userRouter';

const PORT = 3000;
const app = express();

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.locals.path = req.originalUrl;
    next();
})

app.use('/', indexRouter)
app.use('/api/v1/users', userRouter)


app.listen(PORT, () => console.log(`App has started on port ${PORT}`));