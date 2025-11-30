import './SkillTag.css';

interface SkillTagProps {
  skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <span className="skill-tag">
      {skill}
    </span>
  );
}
