import express from 'express';
import { getContacts, getContact } from '../controllers/contactsController.js';

const router = express.Router();

router.get('/contacts', getContacts);
router.get('/contacts/:contactId', getContact);

export default router;
