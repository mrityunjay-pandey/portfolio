import Project from '../models/Project.js';

/**
 * Create a new project
 */
export async function createProject(payload) {
  const project = await Project.create(payload);
  return project.toObject();
}

/**
 * Get all projects
 */
export async function getProjects() {
  const projects = await Project.find({}).sort({ createdAt: -1 });
  return projects.map((p) => p.toObject());
}

/**
 * Get a single project by id
 */
export async function getProjectById(id) {
  const project = await Project.findById(id);
  if (!project) return null;
  return project.toObject();
}

/**
 * Update a project by id
 */
export async function updateProject(id, updates) {
  const project = await Project.findByIdAndUpdate(id, updates, { new: true });
  if (!project) return null;
  return project.toObject();
}

/**
 * Delete a project by id
 */
export async function deleteProject(id) {
  const project = await Project.findByIdAndDelete(id);
  return !!project;
}

