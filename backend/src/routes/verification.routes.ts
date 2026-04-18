import { FastifyInstance } from "fastify";
import { verifyFaceHandler } from "../controllers/verification.controller";

export default async function verificationRoutes(fastify: FastifyInstance) {
  fastify.post("/face", verifyFaceHandler);
}