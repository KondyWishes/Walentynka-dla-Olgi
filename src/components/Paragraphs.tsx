import { PARAGRAPHS } from "../constants/paragraphs";

const Paragraphs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {PARAGRAPHS.map((paragraph, index) => (
        <p key={index} className="paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraphs;
