import { db } from '../../config/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

export async function initializeDatabaseStructure() {
  const structure = {
    OncoAssistant: {
      OutpatientOncology: {
        BreastCancer: {
          id: 'breast-cancer',
          name: 'Breast Cancer',
          guidelines: {},
          protocols: {}
        },
        LungCancer: {
          id: 'lung-cancer',
          name: 'Lung Cancer',
          guidelines: {},
          protocols: {}
        },
        ColorectalCancer: {
          id: 'colorectal-cancer',
          name: 'Colorectal Cancer',
          guidelines: {},
          protocols: {}
        },
        ProstateCancer: {
          id: 'prostate-cancer',
          name: 'Prostate Cancer',
          guidelines: {},
          protocols: {}
        }
      },
      ChemotherapyDayUnit: {
        BreastCancer: {
          id: 'breast-cancer-chemo',
          protocols: [],
          guidelines: {}
        },
        LungCancer: {
          id: 'lung-cancer-chemo',
          protocols: [],
          guidelines: {}
        },
        ColorectalCancer: {
          id: 'colorectal-cancer-chemo',
          protocols: [],
          guidelines: {}
        },
        ProstateCancer: {
          id: 'prostate-cancer-chemo',
          protocols: [],
          guidelines: {}
        }
      },
      EmergenciesInOncology: {
        TumorLysisSyndrome: {
          id: 'tls',
          guidelines: {},
          management: {}
        },
        FebrileNeutropenia: {
          id: 'febrile-neutropenia',
          guidelines: {},
          management: {}
        },
        SpinalCordCompression: {
          id: 'spinal-cord-compression',
          guidelines: {},
          management: {}
        }
      },
      SymptomControl: {
        PainManagement: {
          id: 'pain',
          guidelines: {},
          medications: {}
        },
        NauseaAndVomiting: {
          id: 'nausea',
          guidelines: {},
          medications: {}
        },
        Fatigue: {
          id: 'fatigue',
          guidelines: {},
          management: {}
        }
      },
      CorrectionForLabResults: {
        ElectrolyteImbalance: {
          id: 'electrolytes',
          guidelines: {},
          protocols: {}
        },
        Anemia: {
          id: 'anemia',
          guidelines: {},
          protocols: {}
        },
        CoagulationIssues: {
          id: 'coagulation',
          guidelines: {},
          protocols: {}
        }
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
