import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import { IPost } from './model.interface.js';
import { deleteRedisData, getRedisData, setRedisData } from '../../db/redistGlobal.js';
import { JWT } from '../../utils/jwt.js';
import workModel from './model.scheme.js';
class StorePostController { }
export default StorePostController;
