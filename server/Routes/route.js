// =====Import Expree=========
import express from 'express';

// =======DB Connection File Link======
import '../DB/connection.js';

// ========Import Controalers========
import { Home, login, registration } from '../Controllers/controller.js';

// =========Assign Express Router========
const Router = express.Router();

// ==========Home Route==========
    Router.get('/', Home);
// =======X==Home Route==X=======

// =========Registration Route=========
    Router.post('/registration', registration);
// =======X==Registration Route==X=======

// =============Login Route=============
    Router.post('/login', login);
// ==========X===Login Route===X==========

// ========Exporting Router Here=======
export default Router;