
export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  problem: string;
  budget?: string;
  service?: string;
  source?: string;
  status: "NEW" | "CONTACTED" | "QUALIFIED" | "CONVERTED" | "REJECTED";
  createdAt: Date;
  updatedAt: Date;
}
