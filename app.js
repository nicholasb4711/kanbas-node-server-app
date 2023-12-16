import express from 'express';
import "dotenv/config.js";
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';

const App = express();
App.use(cors());
App.use(express.json());
Hello(App);
Lab5(App);
CourseRoutes(App);
ModuleRoutes(App);
App.listen(process.env.PORT || 4000);
