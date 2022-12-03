import { Request, Router} from 'express';

import ProductoRouter  from './Productos';
import UsersRouter from './Users';
import apiKeyMW from '@middleware/apiKeyHeaderValidator';
import { jwtValidator } from '@server/middleware/jwtBeaereValidator';

const router  = Router();

// http://localhost:3001/cashflow/byindex/1
router.use('/productos', apiKeyMW, jwtValidator, ProductoRouter);
router.use('/security', apiKeyMW, UsersRouter);

export default router;

export interface WithUserRequest extends Request {
  user?: any;
}
