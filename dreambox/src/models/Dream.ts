import mongoose, { Schema, Document } from 'mongoose';

export interface IDream extends Document {
  originalText: string;
  enhancedText: string;
  contributor: string;
  contributorId: string;
  sourceVideoId?: string;
  sourceCommentId?: string;
  status: 'queued' | 'processing' | 'generated' | 'posted' | 'failed';
  moderationStatus: 'pending' | 'approved' | 'rejected';
  moderationReason?: string;
  generatedVideoUrl?: string;
  generatedVideoId?: string;
  tikTokVideoId?: string;
  tikTokPostUrl?: string;
  generationPrompt?: string;
  views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  createdAt: Date;
  updatedAt: Date;
  scheduledFor?: Date;
  postedAt?: Date;
}

const DreamSchema: Schema = new Schema(
  {
    originalText: { type: String, required: true },
    enhancedText: { type: String },
    contributor: { type: String, required: true },
    contributorId: { type: String, required: true },
    sourceVideoId: { type: String },
    sourceCommentId: { type: String },
    status: {
      type: String,
      enum: ['queued', 'processing', 'generated', 'posted', 'failed'],
      default: 'queued',
    },
    moderationStatus: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
    moderationReason: { type: String },
    generatedVideoUrl: { type: String },
    generatedVideoId: { type: String },
    tikTokVideoId: { type: String },
    tikTokPostUrl: { type: String },
    generationPrompt: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    scheduledFor: { type: Date },
    postedAt: { type: Date },
  },
  { timestamps: true }
);

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.Dream || mongoose.model<IDream>('Dream', DreamSchema); 