export type Client = {
  clientName: string;
  medicalStatus: string;
  lawFirm: string;
  doa: string;
  caseStatus: string;
  id: string;
  dateOfBirth: string;
  amount: number;
  paymentMethod: string;
  expenses: Expense[];
};

export interface Expense {
  label: string;
  amount: number;
  deductedFrom: string;
}
