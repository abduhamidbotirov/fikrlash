import { Request, Response } from 'express';
import handleError from '../../utils/catchError.js';
import { deleteRedisData, getRedisData, setRedisData } from '../../db/redistGlobal.js';
import { JWT } from '../../utils/jwt.js';
import crypto from "crypto";
import { sendConfirmationEmail } from '../../utils/nodemailer.js';
import { IAd } from './model.interface';
import workModel from './model.scheme.js';
class AdController { }
export default AdController;