export interface Inspection {
  image: string;
  make: string;
  model: string;
  date: string;
  year: string;
  vinNumber: string;
  numberPlate: string;
  color: string;
  status?: 'passed' | 'failed' | 'pending';
}
