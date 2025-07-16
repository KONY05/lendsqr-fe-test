export type UserDashboardBoxProps = {
  icon: string;
  title: string;
  data: string | number;
};

export type User = {
  id: string;
  username: string;
  bankDetails: object;
  dateJoined: string;
  educationAndEmployment: object;
  guarantors: {
    emailAddress: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }[];
  loans: {
    hasLoan: boolean;
    loanAmount: string;
    loanDuration: string;
    loanStatus: string;
  };
  organization: string;
  savings: {
    hasSavings: boolean;
    savingsBalance: string;
    savingsType: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  status: "Pending" | "Active" | "Inactive" | "Blacklisted";
  updatedAt: string;
  userTier: "1" | "2" | "3";
  email: string;
  phoneNumber: string;
  createdAt: string;
  isActive: boolean;
};
