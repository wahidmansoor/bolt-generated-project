import { db } from '../config/firebase';
import { collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore';

// Initialize the database structure
export async function initializeDatabaseStructure() {
  const structure = {
    OncoAssistant: {
      OutpatientOncology: {
        BreastCancer: { id: 'breast-cancer', name: 'Breast Cancer' },
        LungCancer: { id: 'lung-cancer', name: 'Lung Cancer' },
        ColorectalCancer: { id: 'colorectal-cancer', name: 'Colorectal Cancer' },
        ProstateCancer: { id: 'prostate-cancer', name: 'Prostate Cancer' }
      },
      ChemotherapyDayUnit: {
        BreastCancer: { id: 'breast-cancer-chemo', protocols: [] },
        LungCancer: { id: 'lung-cancer-chemo', protocols: [] },
        ColorectalCancer: { id: 'colorectal-cancer-chemo', protocols: [] },
        ProstateCancer: { id: 'prostate-cancer-chemo', protocols: [] }
      },
      EmergenciesInOncology: {
        TumorLysisSyndrome: { id: 'tls', guidelines: {} },
        FebrileNeutropenia: { id: 'febrile-neutropenia', guidelines: {} },
        SpinalCordCompression: { id: 'spinal-cord-compression', guidelines: {} }
      },
      SymptomControl: {
        PainManagement: { id: 'pain', guidelines: {} },
        NauseaAndVomiting: { id: 'nausea', guidelines: {} },
        Fatigue: { id: 'fatigue', guidelines: {} }
      },
      CorrectionForLabResults: {
        ElectrolyteImbalance: { id: 'electrolytes', guidelines: {} },
        Anemia: { id: 'anemia', guidelines: {} },
        CoagulationIssues: { id: 'coagulation', guidelines: {} }
      }
    }
  };

  try {
    // Create main collections and documents
    for (const [mainCollection, subcollections] of Object.entries(structure)) {
      const mainCollectionRef = collection(db, mainCollection);
      
      for (const [subcollName, documents] of Object.entries(subcollections)) {
        const subcollectionRef = collection(mainCollectionRef, subcollName);
        
        for (const [docName, data] of Object.entries(documents)) {
          await setDoc(doc(subcollectionRef, docName), data);
        }
      }
    }
    
    console.log('Database structure initialized successfully');
  } catch (error) {
    console.error('Error initializing database structure:', error);
    throw error;
  }
}

// Utility function to add a note for a user
export async function addUserNote(userId: string, note: {
  title: string;
  content: string;
  timestamp: Date;
  tags?: string[];
}) {
  try {
    const notesRef = collection(db, 'Notes', userId, 'userNotes');
    const newNoteRef = doc(notesRef);
    await setDoc(newNoteRef, {
      ...note,
      timestamp: note.timestamp.toISOString(),
      id: newNoteRef.id
    });
    return newNoteRef.id;
  } catch (error) {
    console.error('Error adding user note:', error);
    throw error;
  }
}

// Utility function to get all notes for a user
export async function getUserNotes(userId: string) {
  try {
    const notesRef = collection(db, 'Notes', userId, 'userNotes');
    const notesSnapshot = await getDocs(notesRef);
    return notesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting user notes:', error);
    throw error;
  }
}
