import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tech: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
    default: '#',
  },
  isLive: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema);
