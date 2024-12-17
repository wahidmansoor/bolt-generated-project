import { appConfig } from './config/app.config';
import { Dependencies } from './src/types';

export async function setupOncoAssistant(dependencies: Dependencies) {
  const { db, aiAgent } = dependencies;

  return {
    OncologyOutpatient: require('./src/OncologyOutpatient')(db, aiAgent),
    ChemotherapyDayUnit: require('./src/ChemotherapyDayUnit')(db, aiAgent),
    InpatientOncology: require('./src/InpatientOncology')(db, aiAgent),
    PalliativeCareOncology: require('./src/PalliativeCareOncology')(db, aiAgent),
    config: appConfig
  };
}
