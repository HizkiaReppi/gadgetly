const UserIcon = ({ className, ...props }) => {
  return (
    <svg
      width="29"
      height="36"
      viewBox="0 0 29 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M14.4001 14.6666C18.082 14.6666 21.0667 11.6818 21.0667 7.99992C21.0667 4.31802 18.082 1.33325 14.4001 1.33325C10.7182 1.33325 7.7334 4.31802 7.7334 7.99992C7.7334 11.6818 10.7182 14.6666 14.4001 14.6666Z"
          stroke="black"
          strokeWidth="1.5625"
        />
        <path
          id="Vector_2"
          d="M27.7297 27.9999C27.7331 27.7266 27.7331 27.4483 27.7331 27.1666C27.7331 23.0249 21.7631 19.6666 14.3997 19.6666C7.03641 19.6666 1.06641 23.0249 1.06641 27.1666C1.06641 31.3083 1.06641 34.6666 14.3997 34.6666C18.1181 34.6666 20.7997 34.4049 22.7331 33.9383"
          stroke="black"
          strokeWidth="1.5625"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default UserIcon;
