import Joi from 'joi';
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from '../services/projectsService.js';

const projectSchema = Joi.object({
  title: Joi.string().max(120).required(),
  description: Joi.string().max(500).required(),
  techStack: Joi.array().items(Joi.string()).default([]),
  githubUrl: Joi.string().uri().allow('', null),
  liveUrl: Joi.string().uri().allow('', null),
  thumbnailUrl: Joi.string().uri().allow('', null),
});

/**
 * GET /api/projects
 */
export async function listProjects(req, res, next) {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (err) { next(err); }
}

/**
 * GET /api/projects/:id
 */
export async function getProject(req, res, next) {
  try {
    const project = await getProjectById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
  } catch (err) { next(err); }
}

/**
 * POST /api/projects
 */
export async function createProjectHandler(req, res, next) {
  try {
    const { value, error } = projectSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const project = await createProject(value);
    res.status(201).json(project);
  } catch (err) { next(err); }
}

/**
 * PUT /api/projects/:id
 */
export async function updateProjectHandler(req, res, next) {
  try {
    const { value, error } = projectSchema.min(1).validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const project = await updateProject(req.params.id, value);
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
  } catch (err) { next(err); }
}

/**
 * DELETE /api/projects/:id
 */
export async function deleteProjectHandler(req, res, next) {
  try {
    const ok = await deleteProject(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Not found' });
    res.status(204).send();
  } catch (err) { next(err); }
}

