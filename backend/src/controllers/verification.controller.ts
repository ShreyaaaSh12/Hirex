import { FastifyReply, FastifyRequest } from "fastify";
import User from "../models/User"; // <--- The red line should disappear here

export const verifyFaceHandler = async (request: FastifyRequest, reply: FastifyReply) => {
  // Your logic here...
};