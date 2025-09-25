import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { connectDB } from '../config/db.js';
import User from '../src/models/User.js';
import Project from '../src/models/Project.js';

dotenv.config();

async function main() {
  const mongo = await connectDB();
  try {
    const username = 'admin';
    const password = 'ChangeMe123!'; // DEV DEFAULT — change in production

    let admin = await User.findOne({ username });
    if (!admin) {
      const passwordHash = await bcrypt.hash(password, 10);
      admin = await User.create({ username, passwordHash, email: process.env.ADMIN_EMAIL || '' });
      // eslint-disable-next-line no-console
      console.log('Created admin user:', { username, password });
    } else {
      // eslint-disable-next-line no-console
      console.log('Admin user already exists:', username);
    }

    const sample = [
      {
        title: 'Get Me A Chai',
        description: 'Donation platform where users support creators by buying a chai.',
        techStack: ['Next.js', 'MongoDB', 'NextAuth', 'Razorpay', 'Tailwind'],
        githubUrl: '',
        liveUrl: '',
      },
      {
        title: 'URL Shortener',
        description: 'Shorten long URLs with click tracking.',
        techStack: ['Next.js', 'MongoDB', 'API Routes', 'Tailwind'],
        githubUrl: '',
        liveUrl: '',
      },
    ];

    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(sample);
      // eslint-disable-next-line no-console
      console.log('Inserted sample projects:', sample.length);
    } else {
      // eslint-disable-next-line no-console
      console.log('Projects already present, skipping sample insert');
    }
  } finally {
    await mongoose.disconnect();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

