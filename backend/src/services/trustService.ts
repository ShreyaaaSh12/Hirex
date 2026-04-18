import User from "../models/User";

export const calculateTrustScore = (user: any) => {
  let score = 0;

  if (user.isVerified) score += 50;           // Identity check
  if (user.bio && user.bio.length > 50) score += 10; // Profile quality
  if (user.eventCount > 0) score += 20;      // Community engagement
  if (user.isCompanyVerified) score += 20;    // Professional legitimacy

  return Math.min(score, 100); // Max score is 100
};