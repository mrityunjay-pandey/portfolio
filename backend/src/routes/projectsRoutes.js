import { Router } from 'express';
import {
  listProjects,
  getProject,
  createProjectHandler,
  updateProjectHandler,
  deleteProjectHandler,
} from '../controllers/projectsController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', listProjects);
router.get('/:id', getProject);
router.post('/', authMiddleware, createProjectHandler);
router.put('/:id', authMiddleware, updateProjectHandler);
router.delete('/:id', authMiddleware, deleteProjectHandler);

export default router;

