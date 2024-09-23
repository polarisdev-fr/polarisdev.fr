export interface Ticket {
    id: string;
    issue: string;
    priority: string;
    status: string;
    createdAt: string;
    user: {
      name: string;
      email: string;
    };
  }
  