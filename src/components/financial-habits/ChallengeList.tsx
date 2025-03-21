
import React from "react";
import ChallengeCard from "./ChallengeCard";

interface Challenge {
  id: number;
  name: string;
  progress: number;
  deadline: string;
}

interface ChallengeListProps {
  challenges: Challenge[];
}

const ChallengeList = ({ challenges }: ChallengeListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          id={challenge.id}
          name={challenge.name}
          progress={challenge.progress}
          deadline={challenge.deadline}
        />
      ))}
    </div>
  );
};

export default ChallengeList;
