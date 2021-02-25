import express from "express";
import md5 from "md5";
import authService from "../service";
import {addMessage, deleteMessage, updateMessage} from "./message";
import {httpHandler} from "../../commons/http-handler";

const router = express.Router();


router.get('/user-data/:id', httpHandler(async (req, res, next) => {
        const {id} = req.params;
        const data = await authService.getUserData(id);
        res.status(200).send(data);
    }
));


router.get('/users', httpHandler(async (req, res) => {
    const data = await authService.getUser();
    res.status(200).send(data);
}));

router.post('/new-user', httpHandler(async (req, res) => {
    const data = req.body;
    const hash_password = md5(data.password);
    await authService.addUserData({...data, password: hash_password});
    res.status(200).send({message: addMessage["200"]});
}));

router.put('/update-user/:id', httpHandler(async (req, res) => {
    const {id} = req.params;
    await authService.updateUserData({id: id, data: req.body});
    res.status(200).send({message: updateMessage["200"]});

}));

router.delete('/delete-user/:id', httpHandler(async (req, res) => {
    const {id} = req.params;
    await authService.deleteUser(id);
    res.status(200).send({message: deleteMessage["200"]});
}));


export default router;