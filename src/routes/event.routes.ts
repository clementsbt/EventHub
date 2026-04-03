import { Router, type Request, type Response } from "express";
import { getEventById, getEvents, createEvent, updateEvent, deleteEvent } from "../controllers/event.contrellers.js";


const router = Router();



// GET /api/Events
router.get('/', getEvents)

// Get /api/Events/:id
// :id est un parametre de route
// il sera accessible dans l'objet req.params
router.get('/:id', getEventById)

// POST /api/Events
router.post('/', createEvent)


// PATCH /api/Events/:id
router.patch('/:id', updateEvent)

// DELETE /api/Events/:id
router.delete('/:id', deleteEvent)

export default router;