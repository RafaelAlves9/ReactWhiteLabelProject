export const UserIcon = ({ height, color }: { height: string, color?: string }) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
      stroke={color ?? "#A3A3A3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
      stroke={color ?? "#A3A3A3"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
     <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.924}
      d="m18.064 14.62-5.773-5.772L6.52 14.62"
    />
  </svg>
);

export const ArrowDownIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.924}
      d="m6.519 8.848 5.772 5.772 5.773-5.772"
    />
  </svg>
);

export const CheckIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.924}
      d="M19.988 5.796 9.405 16.379l-4.81-4.81"
    />
  </svg>
);

export const ArrowLeftIcon = ({ height, color }: { height: string; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.414}
      d="M13.881 8.939H4m0 0 4.94 4.94M4 8.939l4.94-4.94"
    />
  </svg>
);

export const ArrowRightIcon = ({ height, color }: { height: string; color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.414}
      d="M3.652 8.939h9.881m0 0-4.94-4.94m4.94 4.94-4.94 4.94"
    />
  </svg>
);

export const EyesOpenIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 13"
    fill="none"
    id="EyesOpenIcon"
    {...props}
  >
    <path
      fill={props.color ?? "#7A7A7A"}
      d="M9.564 2.986a3.549 3.549 0 0 0-3.557 3.54 3.549 3.549 0 0 0 3.557 3.539 3.549 3.549 0 0 0 3.557-3.54 3.548 3.548 0 0 0-3.557-3.54Zm0 5.9c-1.307 0-2.398-1.085-2.398-2.387a2.368 2.368 0 0 1 2.371-2.36 2.368 2.368 0 0 1 2.371 2.36c0 1.302-1.036 2.386-2.344 2.386Zm9.416-2.523c-.007-.03-.004-.062-.013-.09-.003-.013-.011-.02-.016-.03-.006-.017-.004-.037-.013-.053C17.213 2.26 13.498 0 9.538 0 5.576 0 1.785 2.257.06 6.186c-.007.017-.006.034-.012.053-.005.011-.013.017-.017.029-.009.03-.005.06-.011.09a.803.803 0 0 0-.021.16c0 .053.01.104.02.157.007.03.003.062.012.09.004.013.012.019.017.03.006.016.004.037.012.053C1.786 10.776 5.541 13 9.501 13c3.96 0 7.713-2.22 9.437-6.148.01-.018.008-.035.014-.053.004-.01.012-.018.015-.03.01-.029.007-.06.013-.09a.795.795 0 0 0 .02-.16.8.8 0 0 0-.02-.156ZM9.5 11.82c-3.358 0-6.664-1.761-8.289-5.303 1.61-3.53 4.96-5.338 8.326-5.338 3.366 0 6.642 1.81 8.251 5.341-1.608 3.53-4.92 5.3-8.288 5.3Z"
    />
  </svg>
);

export const EyesCloseIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 22 21"
    fill="none"
  >
    <path
      stroke="#7A7A7A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.188}
      d="M14.156 8.336a4.124 4.124 0 0 0-1.956-.863 4.578 4.578 0 0 0-2.207.18c-.698.238-1.295.642-1.714 1.16a2.772 2.772 0 0 0-.643 1.75c0 .832.398 1.63 1.108 2.22M11.454 13.712c1.013 0 1.984-.332 2.7-.922.716-.59 1.119-1.392 1.119-2.227"
    />
    <path
      stroke="#7A7A7A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.188}
      d="M16.81 6.14 6.09 14.98c-1.68-1.278-3.092-2.775-4.18-4.431 4.495-6.478 9.965-7.95 14.9-4.408ZM20.045 3.472 16.809 6.14M6.09 14.979l-3.226 2.66M18.68 7.746c.87.883 1.645 1.825 2.32 2.817-3.819 5.51-8.334 7.39-12.63 5.683"
    />
  </svg>
);

export const LockInIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height={height}
    viewBox="0 0 19 23"
    fill="none"
  >
    <path
      fill="#A3A3A3"
      d="M16.83 9.91h-1.568V5.95c0-3.281-2.669-5.95-5.95-5.95a5.956 5.956 0 0 0-5.948 5.95v3.96H1.796C.806 9.91 0 10.715 0 11.705v8.944c0 .99.805 1.795 1.796 1.795H16.83c.99 0 1.796-.805 1.796-1.795v-8.944c0-.99-.806-1.795-1.796-1.795ZM4.261 5.95A5.057 5.057 0 0 1 9.313.897a5.057 5.057 0 0 1 5.051 5.051v3.96H4.261V5.95Zm13.467 14.699a.899.899 0 0 1-.898.897H1.796a.899.899 0 0 1-.898-.897v-8.944c0-.495.403-.898.898-.898H16.83c.495 0 .898.403.898.898v8.944Z"
    />
    <path
      fill="#A3A3A3"
      d="m11.39 19.531-.675-3.348a1.95 1.95 0 0 0 .575-1.388c0-1.09-.886-1.976-1.976-1.976-1.09 0-1.976.887-1.976 1.976 0 .528.207 1.02.576 1.388l-.675 3.348h4.15Zm-2.076-5.814a1.08 1.08 0 0 1 1.079 1.078c0 .34-.16.654-.438.861l-.228.17.566 2.807H8.335l.567-2.807-.228-.17a1.067 1.067 0 0 1-.438-.86 1.08 1.08 0 0 1 1.078-1.08Z"
    />
  </svg>
);


export const SearchIcon = ({ height }: { height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 0 17 30"
    fill="none"
  >
    <path
      stroke="#4A4A4A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m11.7 12.201 4.337 4.324m-2.5-8.75a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z"
    />
  </svg>
);
