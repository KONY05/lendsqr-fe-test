import { User } from "@/utils/types";
import DetailsBox from "./DetailsBox";

function UserDetails({ data }: { data: User[] }) {
  const {
    personalInfo: {
      bvn,
      gender,
      children,
      fullName,
      maritalStatus,
      typeOfResidence,
    },
    educationAndEmployment: {
      officeEmail,
      loanRepayment,
      monthlyIncome,
      employmentStatus,
      levelOfEducation,
      sectorOfEmployment,
      durationOfEmployment,
    },
    socials: { twitter, facebook, instagram },
    guarantors,
    phoneNumber,
    email,
  } = data[0];

  return (
    <section className="space-y-[30px] rounded-lg bg-white p-[30px]">
      <div className="border-b pb-[28px]">
        <h2 className="text-sm font-medium text-[#213F7D] md:text-[16px]">
          Personal Information
        </h2>
        <div className="mt-[15px] grid grid-cols-2 gap-[30px] md:grid-cols-3 lg:mt-[30px] lg:grid-cols-5">
          <DetailsBox title="Full name" value={fullName} />

          <DetailsBox title="Phone Number" value={phoneNumber} />

          <DetailsBox title="Email address" value={email} />

          <DetailsBox title="bvn" value={bvn} />

          <DetailsBox title="Gender" value={gender} />

          <DetailsBox title="marital status" value={maritalStatus} />

          <DetailsBox title="children" value={children} />

          <DetailsBox title="type of residence" value={typeOfResidence} />
        </div>
      </div>

      <div className="border-b pb-[28px]">
        <h2 className="text-sm font-medium text-[#213F7D] md:text-[16px]">
          Education and Employment
        </h2>
        <div className="mt-[15px] grid grid-cols-2 gap-[30px] md:grid-cols-3 lg:mt-[30px] lg:grid-cols-4">
          <DetailsBox title="Level of education" value={levelOfEducation} />

          <DetailsBox title="employment status" value={employmentStatus} />

          <DetailsBox title="sector of employment" value={sectorOfEmployment} />

          <DetailsBox
            title="duration of employment"
            value={durationOfEmployment}
          />

          <DetailsBox title="office email" value={officeEmail} />

          <DetailsBox title="monthly income" value={monthlyIncome} />

          <DetailsBox title="loan repayment" value={loanRepayment} />
        </div>
      </div>

      <div className="border-b pb-[28px]">
        <h2 className="text-sm font-medium text-[#213F7D] md:text-[16px]">
          Socials
        </h2>
        <div className="mt-[15px] grid grid-cols-2 gap-[30px] md:grid-cols-3 lg:mt-[30px]">
          <DetailsBox title="Twitter" value={twitter} />

          <DetailsBox title="Facebook" value={facebook} />

          <DetailsBox title="Instagram" value={instagram} />
        </div>
      </div>

      <div>
        <h2 className="text-sm font-medium text-[#213F7D] md:text-[16px]">
          Guarantor
        </h2>
        {guarantors.map((guarantor, index) => {
          const { fullName, emailAddress, phoneNumber, relationship } =
            guarantor;
          return (
            <div
              key={index}
              className={`mt-[15px] grid grid-cols-2 gap-[30px]  md:grid-cols-3 lg:mt-[30px] lg:grid-cols-4 ${guarantors.length === index + 1 ? "border-b-0" : "border-b pb-[28px]"}`}
            >
              <DetailsBox title="Full name" value={fullName} />

              <DetailsBox title="email address" value={emailAddress} />

              <DetailsBox title="phone number" value={phoneNumber} />
              <DetailsBox title="relationship" value={relationship} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserDetails;
