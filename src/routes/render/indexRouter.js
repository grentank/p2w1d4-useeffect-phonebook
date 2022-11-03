import express from 'express';
import { User } from '../../../db/models'

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
    const allUsers = await User.findAll();
    const initState = { allUsers }
    res.render('Layout', initState)
})

export default indexRouter;