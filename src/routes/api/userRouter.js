import express from 'express';
import { User } from '../../../db/models'

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
})

userRouter.delete('/:userId', async (req, res) => {
    await User.destroy({where: { id: req.params.userId}});
    res.sendStatus(200);
})

export default userRouter;