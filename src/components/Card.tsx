import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div>
      <div className="h-36 w-full">
        <Image src={image} alt="Picture of the work" width={500} height={500} />
      </div>
      <h2 className="my-2 text-center text-lg">{title}</h2>
      <p className="mb-4 px-4 text-center text-sm">{description}</p>
    </div>
  );
};

export default Card;
