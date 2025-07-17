export type UserDashboardBoxProps = {
  icon: string;
  title: string;
  data: string | number;
};

export type User = {
  id: string;
  username: string;
  bankDetails: {
    bankName: string;
    accountNumber: string;
    accountBalance: string;
  };
  dateJoined: string;
  educationAndEmployment: {
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: string;
    employmentStatus: string;
    levelOfEducation: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
  };
  guarantors: {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    relationship: string;
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
  personalInfo: {
    bvn: string;
    gender: string;
    children: string;
    fullName: string;
    maritalStatus: string;
    typeOfResidence: string;
  };
};
