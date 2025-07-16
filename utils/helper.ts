// defining styles for the status cell based on the status value
export function getStatusColor(status: string) {
  switch (status) {
    case "Pending":
    return "text-[#E9B200] bg-[#E9B2001A]";
    case "Active":
    return "text-[#39CD62] bg-[#39CD620F]";
    case "Blacklisted":
      return "text-[#E4033B] bg-[#E4033B1A]";
    case "Inactive":
      return "text-[#545F7D] bg-[#545F7D0F]";
    default:
      return "text-[#545F7D] bg-[#545F7D0F]";
  }
}
