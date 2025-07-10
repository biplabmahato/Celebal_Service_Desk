import express from 'express';
import {
  createTicket, getTicketsByUser, getAllTickets,
  updateTicketStatus, assignTicket
} from '../controllers/ticketController.js';

const router = express.Router();

router.post('/', createTicket);
router.get('/user/:userId', getTicketsByUser);
router.get('/all', getAllTickets);
router.put('/status/:id', updateTicketStatus);
router.put('/assign/:id', assignTicket);

export default router;
