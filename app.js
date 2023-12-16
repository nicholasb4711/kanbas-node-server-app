import express from 'express';
import Hello from './hello.js';
import Lab5 from './lab5.js';
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
App.listen(4000);