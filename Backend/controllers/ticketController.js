import Ticket from '../models/Ticket.js';

export const createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getTicketsByUser = async (req, res) => {
  const tickets = await Ticket.find({ userId: req.params.userId });
  res.json(tickets);
};

export const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find().populate('userId assignedTo');
  res.json(tickets);
};

export const updateTicketStatus = async (req, res) => {
  const { status } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(ticket);
};

export const assignTicket = async (req, res) => {
  const { assignedTo } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { assignedTo }, { new: true });
  res.json(ticket);
};
