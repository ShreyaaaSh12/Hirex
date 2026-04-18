import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import dbConnector from './plugins/db';
import verificationRoutes from './routes/verification.routes';

dotenv.config();

const fastify = Fastify({ 
  logger: { transport: { target: 'pino-pretty' } } 
});

// Register Plugins
fastify.register(cors, { origin: true });
fastify.register(dbConnector);

// Register Routes
fastify.register(verificationRoutes, { prefix: '/api/v1/verify' });

// Health Check
fastify.get('/health', async () => {
  return { status: 'OK', timestamp: new Date().toISOString() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log("🚀 Backend active at http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();