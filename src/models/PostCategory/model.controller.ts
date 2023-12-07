import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import { IPostCategory } from './model.interface.js';
import { deleteRedisData, getRedisData, setRedisData } from '../../db/redistGlobal.js';
import { JWT } from '../../utils/jwt.js';
import crypto from "crypto";
import { sendConfirmationEmail } from '../../utils/nodemailer.js';
import workModel from './model.scheme.js';
class PostCatController { }
export default PostCatController;