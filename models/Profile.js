import mongoose, { mongo } from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: { type: String, required: true },
    bio: { type: String },
    location: { type: String },
    website: { type: String },
    avatarUrl: { type: String },
    title: { type: String },
    skills: [String],
    experience: [
      {
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
    education: [
      {
        school: String,
        degree: String,
        fieldOfStudy: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    projects: [
      {
        title: String,
        description: String,
        techStack: [String],
        repoLink: String,
        liveLink: String,
        image: String,
      },
    ],
    socials: {
      github: String,
      linkedin: String,
      twitter: String,
      personalWebsite: String,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
