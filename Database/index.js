import { DB_CONFIG } from './config/database';

export async function setupDatabase() {
  // Initialize database connection
  const dbConnection = {
    // Implement database connection logic
  };

  return {
    OncologyOutpatient: require('./OncologyOutpatient')(dbConnection),
    ChemotherapyDayUnit: require('./ChemotherapyDayUnit')(dbConnection),
    InpatientOncology: require('./InpatientOncology')(dbConnection),
    PalliativeCareOncology: require('./PalliativeCareOncology')(dbConnection),
  };
}
