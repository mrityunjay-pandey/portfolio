import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    techStack: { type: [String], default: [] },
    githubUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
    thumbnailUrl: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model('Project', ProjectSchema);

