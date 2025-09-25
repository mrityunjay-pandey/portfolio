import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import projectsRoutes from './routes/projectsRoutes.js';
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/projects', projectsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

app.use(errorHandler);

export default app;

