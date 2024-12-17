import { db } from '../../config/firebase';
import { collection, doc, setDoc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';

interface Note {
  id?: string;
  title: string;
  content: string;
  timestamp: Date;
  tags?: string[];
}

export const notesService = {
  async createNote(userId: string, note: Note): Promise<string> {
    try {
      const notesRef = collection(db, 'Notes', userId, 'userNotes');
      const newNoteRef = doc(notesRef);
      
      await setDoc(newNoteRef, {
        ...note,
        id: newNoteRef.id,
        timestamp: note.timestamp.toISOString()
      });
      
      return newNoteRef.id;
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  },

  async getNotes(userId: string): Promise<Note[]> {
    try {
      const notesRef = collection(db, 'Notes', userId, 'userNotes');
      const notesSnapshot = await getDocs(notesRef);
      
      return notesSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        timestamp: new Date(doc.data().timestamp)
      })) as Note[];
    } catch (error) {
      console.error('Error getting notes:', error);
      throw error;
    }
  },

  async updateNote(userId: string, noteId: string, updates: Partial<Note>): Promise<void> {
    try {
      const noteRef = doc(db, 'Notes', userId, 'userNotes', noteId);
      await setDoc(noteRef, {
        ...updates,
        timestamp: updates.timestamp?.toISOString()
      }, { merge: true });
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  },

  async deleteNote(userId: string, noteId: string): Promise<void> {
    try {
      const noteRef = doc(db, 'Notes', userId, 'userNotes', noteId);
      await deleteDoc(noteRef);
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }
};
