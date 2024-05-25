const HeartIcon = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M26.2129 5.14999C22.9863 5.14999 20.1613 6.53749 18.4004 8.88281C16.6395 6.53749 13.8145 5.14999 10.5879 5.14999C8.01949 5.15289 5.55712 6.17446 3.74099 7.99059C1.92486 9.80673 0.903286 12.2691 0.900391 14.8375C0.900391 25.775 17.1176 34.6281 17.8082 34.9937C17.9902 35.0917 18.1937 35.1429 18.4004 35.1429C18.6071 35.1429 18.8106 35.0917 18.9926 34.9937C19.6832 34.6281 35.9004 25.775 35.9004 14.8375C35.8975 12.2691 34.8759 9.80673 33.0598 7.99059C31.2437 6.17446 28.7813 5.15289 26.2129 5.14999ZM18.4004 32.4625C15.5473 30.8 3.40039 23.2266 3.40039 14.8375C3.40287 12.932 4.16092 11.1053 5.5083 9.7579C6.85568 8.41052 8.68241 7.65247 10.5879 7.64999C13.627 7.64999 16.1785 9.26874 17.2441 11.8687C17.3383 12.098 17.4985 12.2941 17.7044 12.4321C17.9103 12.5701 18.1525 12.6438 18.4004 12.6438C18.6482 12.6438 18.8905 12.5701 19.0964 12.4321C19.3023 12.2941 19.4625 12.098 19.5566 11.8687C20.6223 9.26406 23.1738 7.64999 26.2129 7.64999C28.1184 7.65247 29.9451 8.41052 31.2925 9.7579C32.6399 11.1053 33.3979 12.932 33.4004 14.8375C33.4004 23.2141 21.2504 30.7984 18.4004 32.4625Z"
        fill="black"
      />
    </svg>
  );
};

export default HeartIcon;
