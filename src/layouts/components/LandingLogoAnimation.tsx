import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

const containerStyles: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(143px, 1fr))",
  gap: "10px",
  width: "80%",
  height: "350px",
};

const logoStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    width: "100px",
  },
};


const images = [
  {
    src: "../../../public/images/js.svg",
    alt: "JS Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/nodejs.svg",
    alt: "Node.js Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/express.svg",
    alt: "Express Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/go.svg",
    alt: "Go Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/php.svg",
    alt: "PHP Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/laravel.svg",
    alt: "Laravel Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/postgresql.svg",
    alt: "Psql Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/mysql.svg",
    alt: "Mysql Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/mongo.svg",
    alt: "Mongo Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/cockroachdb.svg",
    alt: "Cockroachdb Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/prisma.svg",
    alt: "Prisma Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/sequelize.svg",
    alt: "Sequelize Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/jest.svg",
    alt: "Jest Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/mocha-chai.svg",
    alt: "Jest Logo",
    width: 65,
    height: 65,
  },
  {
    src: "../../../public/images/kafka.svg",
    alt: "Apache Kafka Logo",
    width: 65,
    height: 65,
  },
];

const LandingLogoAnimation = () => {
  return (
    <div className="mx-auto mb-20 max-w-6xl px-5 md:mb-24">
      <div className="ml-20 overflow-hidden" style={containerStyles}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            style={logoStyles}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 110, 220, 320, 0],
              borderRadius: ["20%", "50%", "20%", "50%", "20%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LandingLogoAnimation;
