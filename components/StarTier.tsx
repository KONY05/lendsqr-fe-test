import Image from "next/image";

function StarTier({ tier = 1 }) {
  const maxStars = 3;
  const activeTier = Math.min(Math.max(tier, 1), maxStars); // Ensure tier is between 1 and 3

  return (
    <span className="flex gap-1">
      {Array.from({ length: maxStars }, (_, index) => (
        <Image
          key={index}
          src={index < activeTier ? "/icons/activeStar.svg" : "/icons/star.svg"}
          alt={index < activeTier ? "Active star" : "Inactive star"}
          width={15}
          height={15}
        />
      ))}
    </span>
  );
}

export default StarTier;
