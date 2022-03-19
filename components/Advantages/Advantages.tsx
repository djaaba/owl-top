import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from "classnames";
import React from "react";
import CheckIcon from "./check.svg";
import { Ptag } from "../Ptag/Ptag";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <div className={styles.container}>
            <CheckIcon className={styles.icon}/>
            <p className={styles.title}>{a.title}</p>
          </div>

          <Ptag size="l" className={styles.description}>
            {a.description}
          </Ptag>
        </div>
      ))}
    </>
  );
};
