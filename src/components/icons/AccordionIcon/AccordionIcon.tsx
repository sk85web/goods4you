import styles from './AccordionIcon.module.css';

const AccordionIcon = ({ isClose }: { isClose: boolean }) => {
  return (
    <div className={isClose ? styles.close : styles.open}>
      <svg
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9509 12.3872L25 12.3872V13.6372L12.9509 13.6372L12.9509 25.5004H11.5731L11.5731 13.6372H0L0 12.3872H11.5731V0.500366H12.9509V12.3872Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default AccordionIcon;
