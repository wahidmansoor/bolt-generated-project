// Common types used across the application
export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  diagnosis: string;
  stage: string;
  treatmentPlan: string;
}

export interface Department {
  id: string;
  name: string;
  capacity: number;
  currentPatients: number;
}

export interface Treatment {
  id: string;
  patientId: string;
  type: string;
  schedule: string;
  status: string;
}
