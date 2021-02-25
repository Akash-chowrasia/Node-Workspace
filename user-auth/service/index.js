import {userModel} from "../model";

const getUserData = async (id) => userModel.findById(id);

const getUser = async () => userModel.find();

const addUserData = async (data) => userModel.create(data);

const updateUserData = async ({id, data}) => userModel.updateOne({_id: id}, data);

const deleteUser = async (id) => userModel.deleteOne({_id: id});

const authService = {getUserData, getUser, addUserData, updateUserData, deleteUser};

export default authService;
