'use client';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const colorArray = [
  '#065f46',
  '#6d28d9',
  '#0f766e',
  '#0369a1'
];

export const Background: FC = () => {
  const [svgColor, setSvgColor] = useState<string>('#1f2937');

  const randomNumber = () => Math.floor(Math.random() * (8 - 2 + 1) + 2) * 1000;
  const randomColor = () => {
    const newColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    setSvgColor(newColor);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const changeColorWithRandomDelay = () => {
      randomColor();
      const delay = randomNumber();
      console.log('Next change in:', svgColor, delay, 'ms');

      timeoutId = setTimeout(changeColorWithRandomDelay, delay);
    };

    changeColorWithRandomDelay(); // Start the loop

    return () => {
      clearTimeout(timeoutId);
    };
  }, [svgColor]);

  return (
    <div className='background'>
      <motion.svg width="801" height="696" viewBox="0 0 801 696" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          className='background-svg-path'
          d="M667.644 653.845C646.613 659.353 627.836 662.107 611.312 662.107C595.289 662.107 581.019 661.105 568.501 659.103C555.982 657.1 542.463 653.094 527.942 647.085C513.922 641.577 500.653 635.068 488.134 627.557C475.616 620.046 463.098 610.783 450.58 599.767C427.547 581.24 406.517 561.211 387.489 539.68C368.962 518.149 332.91 477.84 279.333 418.755C276.292 415.373 273.309 412.056 270.384 408.803H335.204C390.756 469.682 427.964 509.552 446.825 528.414C471.36 552.949 492.891 572.978 511.418 588.5C530.446 604.524 547.22 616.291 561.741 623.801C591.284 639.825 620.576 647.836 649.618 647.836C655.626 647.836 661.635 647.336 667.644 646.334V653.845Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M293.603 145.36C293.603 173.867 287.421 197.135 275.055 215.164H330.977C343.615 191.728 349.935 165.456 349.935 136.347C349.935 95.2872 336.415 62.4898 309.376 37.9543C282.838 12.9181 247.537 0.400024 203.473 0.400024H0.679993V7.91088H10.4441C23.4629 7.91088 34.4788 12.6678 43.4919 22.1816C53.0056 31.1946 58.0128 42.2105 58.5136 55.2293V215.164H107.334V23.6837H200.469C230.011 24.1844 252.794 35.4507 268.817 57.4826C285.341 79.5144 293.603 108.807 293.603 145.36Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M107.334 332.521H58.5136V472.082C58.0128 485.101 53.0056 496.117 43.4919 505.13C33.9781 514.143 22.9622 518.649 10.4441 518.649H0.679993V526.16H165.168L164.417 518.649H155.404C141.884 518.649 130.367 513.893 120.854 504.379C111.841 494.865 107.334 483.849 107.334 471.331V332.521Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M730.829 623.003C777.396 574.433 800.68 507.086 800.68 420.961C800.68 414.953 800.43 408.944 799.929 402.935H792.418C792.418 486.556 768.884 552.401 721.816 600.471C675.249 648.54 614.911 672.575 540.804 672.575C466.697 672.575 406.61 648.54 360.544 600.471C314.978 551.901 292.195 491.814 292.195 420.21C292.195 416.373 292.258 412.57 292.385 408.803H236.129C235.952 413.071 235.864 417.374 235.864 421.712C235.864 472.786 248.382 519.103 273.418 560.663C298.955 602.223 334.506 635.021 380.072 659.056C426.139 683.09 477.713 695.108 534.796 695.108C619.418 695.108 684.762 671.073 730.829 623.003Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M330.883 215.164H388.109C426.908 185.621 472.549 170.85 525.032 170.85C571.599 170.85 613.91 182.867 651.965 206.902C690.02 230.436 714.305 263.233 724.82 305.294H731.58L716.558 199.391C693.024 183.868 663.482 171.601 627.93 162.588C592.88 153.074 558.33 148.317 524.28 148.317C470.202 148.317 421.131 160.334 377.068 184.369C360.294 193.328 344.899 203.593 330.883 215.164Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M24.5851 257.396H33.1233C37.2491 257.396 40.248 256.193 42.1199 253.786C43.9918 251.341 44.9278 247.54 44.9278 242.383C44.9278 239.517 44.6413 237.149 44.0682 235.277C43.5334 233.367 42.6548 231.896 41.4323 230.865C40.248 229.833 38.8727 229.126 37.3065 228.744C35.7402 228.324 33.7727 228.114 31.4042 228.114H24.5851C24.2413 228.114 24.0694 228.439 24.0694 229.088V256.135C24.0694 256.976 24.2413 257.396 24.5851 257.396ZM16.2188 303.181C15.7604 303.181 15.4166 303.029 15.1874 302.723C14.9582 302.379 14.8436 301.692 14.8436 300.66V223.415C14.8436 222.651 14.9009 222.078 15.0155 221.696C15.1683 221.276 15.3211 221.028 15.4739 220.951C15.6649 220.837 15.9132 220.779 16.2188 220.779H33.639C35.4345 220.779 36.9817 220.837 38.2806 220.951C39.6177 221.028 41.0312 221.257 42.521 221.639C44.0491 221.983 45.348 222.46 46.4177 223.071C47.4873 223.683 48.5379 224.523 49.5693 225.593C50.6008 226.624 51.4222 227.885 52.0334 229.375C52.6828 230.865 53.1986 232.679 53.5806 234.819C53.9626 236.958 54.1536 239.384 54.1536 242.096C54.1536 245.84 53.7334 248.973 52.8929 251.494C52.0525 254.015 51.0019 255.887 49.7413 257.11C48.4806 258.294 46.8761 259.287 44.9278 260.089C44.775 260.242 44.6986 260.376 44.6986 260.49C44.6986 260.643 44.7559 260.72 44.8705 260.72C46.0165 261.255 46.9143 261.732 47.5637 262.152C48.2514 262.534 49.0345 263.184 49.9132 264.101C50.83 265.017 51.5368 266.049 52.0334 267.195C52.53 268.303 52.9693 269.812 53.3514 271.722C53.7716 273.632 54.0199 275.848 54.0963 278.369C54.1727 280.432 54.2109 287.71 54.2109 300.202C54.2109 302.188 53.8289 303.181 53.0648 303.181C48.6334 303.22 46.3795 303.239 46.3031 303.239C45.5772 303.239 45.2143 302.303 45.2143 300.431C45.1761 300.087 45.0806 295.808 44.9278 287.595C44.8132 279.381 44.6604 274.855 44.4694 274.014C44.2019 267.749 41.0503 264.616 35.0143 264.616H24.6424C24.2604 264.616 24.0694 264.979 24.0694 265.705V300.66C24.0694 301.692 23.9548 302.379 23.7256 302.723C23.4964 303.029 23.1334 303.181 22.6368 303.181H16.2188Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M90.3303 303.812C88.4202 303.812 86.7584 303.525 85.3449 302.952C83.9314 302.341 82.6135 301.29 81.391 299.801C80.2067 298.272 79.2899 296.019 78.6404 293.039C78.0292 290.021 77.7236 286.277 77.7236 281.807V248.399C77.7236 247.253 77.8382 246.489 78.0674 246.107C78.2966 245.725 78.6404 245.534 79.0989 245.534H84.0843C84.5809 245.534 84.9438 245.725 85.173 246.107C85.4022 246.489 85.5168 247.253 85.5168 248.399V283.87C85.5168 288.837 86.0326 292.332 87.064 294.357C88.1337 296.343 89.7 297.337 91.7629 297.337C94.2078 297.337 96.2516 295.694 97.8943 292.408C99.537 289.085 100.358 285.398 100.358 281.349V248.399C100.358 247.253 100.473 246.489 100.702 246.107C100.931 245.725 101.294 245.534 101.791 245.534H106.719C107.216 245.534 107.579 245.725 107.808 246.107C108.037 246.489 108.152 247.253 108.152 248.399V299.571C108.152 301.978 107.712 303.181 106.834 303.181H105.688C105.153 303.181 104.733 303.01 104.427 302.666C104.159 302.322 103.93 301.539 103.739 300.316L102.708 292.237C102.631 291.74 102.498 291.492 102.307 291.492C102.23 291.492 102.116 291.759 101.963 292.294C100.97 296.381 99.4224 299.323 97.3213 301.119C95.2202 302.914 92.8899 303.812 90.3303 303.812Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M137.567 270.977H152.809C152.886 270.977 152.924 270.633 152.924 269.946C152.695 263.489 151.988 258.771 150.804 255.792C149.619 252.774 147.786 251.265 145.302 251.265C140.68 251.265 138.044 256.804 137.395 267.883C137.395 269.946 137.452 270.977 137.567 270.977ZM159.284 289.085C159.284 293.325 158.158 296.84 155.904 299.629C153.688 302.417 150.383 303.812 145.99 303.812C134.797 303.812 129.2 293.975 129.2 274.301C129.2 269.449 129.525 265.208 130.174 261.579C130.862 257.912 131.722 255.047 132.753 252.984C133.785 250.883 135.045 249.202 136.535 247.941C138.025 246.642 139.458 245.802 140.833 245.42C142.246 244.999 143.774 244.789 145.417 244.789C154.968 244.789 159.743 253.843 159.743 271.951C159.743 274.702 159.17 276.077 158.024 276.077H137.738C137.471 276.077 137.337 276.478 137.337 277.28C137.337 281.062 137.624 284.405 138.197 287.308C138.77 290.212 139.744 292.619 141.119 294.529C142.533 296.401 144.271 297.337 146.334 297.337C147.747 297.337 148.932 297.012 149.887 296.362C150.88 295.675 151.606 294.701 152.064 293.44C152.561 292.179 152.886 291.11 153.038 290.231C153.229 289.314 153.401 288.149 153.554 286.735C153.631 285.971 153.879 285.589 154.299 285.589H158.196C158.922 285.589 159.284 286.372 159.284 287.939V289.085Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M191.45 290.689C193.054 295.121 195.079 297.337 197.524 297.337C199.969 297.337 201.879 295.446 203.254 291.663C204.668 287.881 205.375 281.998 205.375 274.014C205.375 266.488 204.668 260.834 203.254 257.052C201.879 253.232 200.007 251.322 197.639 251.322C195.232 251.322 193.188 253.423 191.507 257.625C189.865 261.828 189.043 267.29 189.043 274.014C189.043 280.661 189.845 286.22 191.45 290.689ZM199.071 303.812C193.15 303.812 189.081 299.781 186.866 291.721C186.789 291.53 186.713 291.434 186.636 291.434C186.484 291.434 186.274 292.428 186.006 294.414C185.777 296.362 185.452 298.311 185.032 300.259C184.612 302.207 184.115 303.181 183.542 303.181H182.396C181.632 303.181 181.25 302.054 181.25 299.801V224.848C181.25 222.135 181.727 220.779 182.683 220.779H187.668C188.088 220.779 188.413 221.161 188.642 221.925C188.91 222.651 189.043 223.625 189.043 224.848V253.499C189.043 253.996 189.12 254.244 189.272 254.244L189.559 253.958C190.667 250.94 192.118 248.667 193.914 247.139C195.748 245.611 197.715 244.847 199.816 244.847C201.65 244.847 203.331 245.343 204.859 246.337C206.387 247.292 207.8 248.858 209.099 251.035C210.436 253.175 211.487 256.25 212.251 260.261C213.015 264.234 213.397 268.971 213.397 274.472C213.397 278.713 213.111 282.533 212.538 285.933C212.003 289.295 211.258 292.084 210.303 294.299C209.386 296.477 208.297 298.311 207.036 299.801C205.776 301.252 204.477 302.284 203.14 302.895C201.841 303.506 200.485 303.812 199.071 303.812Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M241.437 270.977H256.679C256.756 270.977 256.794 270.633 256.794 269.946C256.565 263.489 255.858 258.771 254.674 255.792C253.49 252.774 251.656 251.265 249.173 251.265C244.55 251.265 241.914 256.804 241.265 267.883C241.265 269.946 241.322 270.977 241.437 270.977ZM263.155 289.085C263.155 293.325 262.028 296.84 259.774 299.629C257.558 302.417 254.254 303.812 249.86 303.812C238.667 303.812 233.07 293.975 233.07 274.301C233.07 269.449 233.395 265.208 234.045 261.579C234.732 257.912 235.592 255.047 236.623 252.984C237.655 250.883 238.915 249.202 240.405 247.941C241.895 246.642 243.328 245.802 244.703 245.42C246.117 244.999 247.645 244.789 249.287 244.789C258.838 244.789 263.613 253.843 263.613 271.951C263.613 274.702 263.04 276.077 261.894 276.077H241.609C241.341 276.077 241.208 276.478 241.208 277.28C241.208 281.062 241.494 284.405 242.067 287.308C242.64 290.212 243.614 292.619 244.99 294.529C246.403 296.401 248.141 297.337 250.204 297.337C251.618 297.337 252.802 297.012 253.757 296.362C254.75 295.675 255.476 294.701 255.934 293.44C256.431 292.179 256.756 291.11 256.909 290.231C257.1 289.314 257.272 288.149 257.424 286.735C257.501 285.971 257.749 285.589 258.169 285.589H262.066C262.792 285.589 263.155 286.372 263.155 287.939V289.085Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M286.553 303.181C285.598 303.181 285.12 302.226 285.12 300.316V249.087C285.12 246.719 285.579 245.534 286.495 245.534H287.584C288.119 245.534 288.52 245.706 288.788 246.05C289.093 246.394 289.342 247.158 289.533 248.342L290.449 255.849C290.564 256.269 290.698 256.479 290.85 256.479C291.003 256.479 291.118 256.269 291.194 255.849C291.806 253.595 292.589 251.704 293.544 250.176C294.537 248.648 295.607 247.521 296.753 246.795C297.937 246.069 299.045 245.573 300.076 245.305C301.146 244.999 302.311 244.847 303.572 244.847C306.208 244.847 308.347 245.515 309.99 246.852C311.671 248.151 312.989 250.596 313.944 254.187C314.899 257.74 315.376 262.553 315.376 268.628V300.316C315.376 301.462 315.262 302.226 315.032 302.608C314.803 302.99 314.459 303.181 314.001 303.181H308.958C308.5 303.181 308.156 302.99 307.927 302.608C307.698 302.226 307.583 301.462 307.583 300.316V267.424C307.583 261.847 307.125 257.778 306.208 255.219C305.291 252.621 303.858 251.322 301.91 251.322C299.35 251.322 297.211 252.965 295.492 256.25C293.773 259.497 292.913 263.432 292.913 268.055V300.316C292.913 301.462 292.799 302.226 292.57 302.608C292.34 302.99 291.997 303.181 291.538 303.181H286.553Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M252.755 397.869C251.342 397.869 250.1 397.812 249.031 397.698C247.961 397.621 246.758 397.411 245.42 397.067C244.122 396.723 242.976 396.265 241.982 395.692C240.989 395.081 239.958 394.259 238.888 393.228C237.818 392.158 236.882 390.898 236.08 389.446C235.316 387.994 234.571 386.218 233.845 384.117C233.119 381.977 232.527 379.571 232.069 376.896C231.61 374.222 231.247 371.109 230.98 367.556C230.713 364.003 230.579 360.087 230.579 355.809C230.579 350.537 230.789 345.8 231.209 341.598C231.668 337.357 232.26 333.785 232.986 330.882C233.75 327.979 234.705 325.476 235.851 323.375C237.035 321.236 238.219 319.574 239.404 318.39C240.626 317.167 242.059 316.212 243.701 315.525C245.344 314.799 246.872 314.34 248.286 314.149C249.699 313.92 251.323 313.805 253.156 313.805C256.595 313.805 259.422 314.302 261.637 315.295C261.675 315.334 261.752 315.391 261.866 315.467C261.981 315.544 262.077 315.658 262.153 315.811C262.229 315.926 262.268 316.098 262.268 316.327V321.885C262.268 322.344 262.134 322.573 261.866 322.573C261.828 322.573 261.675 322.535 261.408 322.458C261.141 322.382 260.778 322.286 260.319 322.172C259.899 322.057 259.402 321.943 258.829 321.828C258.256 321.675 257.588 321.561 256.824 321.484C256.098 321.408 255.391 321.37 254.704 321.37C252.908 321.37 251.342 321.58 250.005 322C248.706 322.382 247.369 323.28 245.993 324.693C244.656 326.068 243.549 327.979 242.67 330.423C241.829 332.868 241.142 336.23 240.607 340.509C240.072 344.749 239.805 349.849 239.805 355.809C239.805 361.845 240.034 367.002 240.492 371.281C240.951 375.521 241.543 378.883 242.269 381.366C243.033 383.811 244.045 385.721 245.306 387.096C246.605 388.472 247.884 389.369 249.145 389.79C250.406 390.172 251.953 390.363 253.787 390.363C256.575 390.363 259.001 390 261.064 389.274C261.102 389.274 261.179 389.427 261.293 389.732C261.446 390 261.523 390.172 261.523 390.248V395.635C261.523 395.711 261.446 395.902 261.293 396.208C261.179 396.475 261.102 396.628 261.064 396.666C258.925 397.468 256.155 397.869 252.755 397.869Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M294.692 397.698C292.782 397.698 291.12 397.411 289.707 396.838C288.293 396.227 286.975 395.176 285.753 393.686C284.569 392.158 283.652 389.904 283.002 386.925C282.391 383.907 282.085 380.163 282.085 375.693V342.285C282.085 341.139 282.2 340.375 282.429 339.993C282.658 339.611 283.002 339.42 283.461 339.42H288.446C288.943 339.42 289.306 339.611 289.535 339.993C289.764 340.375 289.879 341.139 289.879 342.285V377.756C289.879 382.722 290.394 386.218 291.426 388.242C292.495 390.229 294.062 391.222 296.125 391.222C298.57 391.222 300.613 389.58 302.256 386.294C303.899 382.971 304.72 379.284 304.72 375.235V342.285C304.72 341.139 304.835 340.375 305.064 339.993C305.293 339.611 305.656 339.42 306.153 339.42H311.081C311.577 339.42 311.94 339.611 312.17 339.993C312.399 340.375 312.513 341.139 312.513 342.285V393.457C312.513 395.864 312.074 397.067 311.195 397.067H310.049C309.515 397.067 309.094 396.895 308.789 396.551C308.521 396.208 308.292 395.425 308.101 394.202L307.07 386.122C306.993 385.626 306.859 385.377 306.668 385.377C306.592 385.377 306.477 385.645 306.325 386.18C305.331 390.267 303.784 393.209 301.683 395.004C299.582 396.8 297.252 397.698 294.692 397.698Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M334.967 397.067C334.012 397.067 333.535 395.864 333.535 393.457V343.489C333.535 340.776 333.974 339.42 334.853 339.42H336.342C337.259 339.42 337.832 340.528 338.062 342.744L338.921 350.938C338.997 351.435 339.131 351.683 339.322 351.683C339.399 351.683 339.513 351.416 339.666 350.881C341.614 342.782 345.282 338.732 350.668 338.732C353.113 338.732 355.176 339.611 356.857 341.368C358.538 343.126 359.875 346.086 360.868 350.25C360.983 350.518 361.078 350.652 361.155 350.652C361.308 350.652 361.422 350.518 361.499 350.25C362.492 346.354 364.001 343.47 366.026 341.598C368.05 339.687 370.17 338.732 372.386 338.732C373.838 338.732 375.099 338.923 376.168 339.305C377.276 339.649 378.327 340.337 379.32 341.368C380.351 342.362 381.192 343.737 381.841 345.494C382.491 347.213 383.006 349.505 383.388 352.371C383.77 355.198 383.961 358.559 383.961 362.456V393.457C383.961 395.864 383.484 397.067 382.529 397.067H377.543C376.627 397.067 376.168 395.864 376.168 393.457V360.794C376.168 354.873 375.729 350.804 374.85 348.589C374.01 346.335 372.634 345.208 370.724 345.208C368.47 345.208 366.56 346.812 364.994 350.021C363.466 353.192 362.702 357.452 362.702 362.8V393.457C362.702 395.864 362.243 397.067 361.327 397.067H356.341C355.386 397.067 354.909 395.864 354.909 393.457V361.31C354.909 355.274 354.45 351.091 353.533 348.761C352.617 346.392 351.203 345.208 349.293 345.208C347.612 345.208 346.16 346.105 344.938 347.901C343.715 349.658 342.799 351.874 342.187 354.548C341.614 357.222 341.328 360.107 341.328 363.201V393.457C341.328 395.864 340.85 397.067 339.895 397.067H334.967Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M414.552 384.575C416.157 389.007 418.181 391.222 420.626 391.222C423.071 391.222 424.981 389.331 426.357 385.549C427.77 381.767 428.477 375.884 428.477 367.9C428.477 360.374 427.77 354.72 426.357 350.938C424.981 347.118 423.11 345.208 420.741 345.208C418.334 345.208 416.29 347.309 414.61 351.511C412.967 355.713 412.145 361.176 412.145 367.9C412.145 374.547 412.948 380.105 414.552 384.575ZM422.174 397.698C416.252 397.698 412.184 393.667 409.968 385.607C409.892 385.416 409.815 385.32 409.739 385.32C409.586 385.32 409.376 386.313 409.108 388.3C408.879 390.248 408.554 392.196 408.134 394.145C407.714 396.093 407.217 397.067 406.644 397.067H405.498C404.734 397.067 404.352 395.94 404.352 393.686V318.734C404.352 316.021 404.83 314.665 405.785 314.665H410.77C411.19 314.665 411.515 315.047 411.744 315.811C412.012 316.537 412.145 317.511 412.145 318.734V347.385C412.145 347.882 412.222 348.13 412.375 348.13L412.661 347.844C413.769 344.826 415.221 342.553 417.016 341.025C418.85 339.496 420.817 338.732 422.918 338.732C424.752 338.732 426.433 339.229 427.961 340.222C429.489 341.177 430.903 342.744 432.202 344.921C433.539 347.061 434.589 350.136 435.353 354.147C436.117 358.12 436.499 362.857 436.499 368.358C436.499 372.599 436.213 376.419 435.64 379.819C435.105 383.181 434.36 385.969 433.405 388.185C432.488 390.363 431.399 392.196 430.139 393.686C428.878 395.138 427.579 396.169 426.242 396.781C424.943 397.392 423.587 397.698 422.174 397.698Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M463.365 364.863H478.608C478.684 364.863 478.723 364.519 478.723 363.831C478.493 357.375 477.787 352.657 476.602 349.677C475.418 346.659 473.585 345.15 471.101 345.15C466.479 345.15 463.843 350.69 463.194 361.768C463.194 363.831 463.251 364.863 463.365 364.863ZM485.083 382.971C485.083 387.211 483.956 390.726 481.702 393.514C479.487 396.303 476.182 397.698 471.789 397.698C460.596 397.698 454.999 387.86 454.999 368.186C454.999 363.335 455.324 359.094 455.973 355.465C456.661 351.798 457.52 348.932 458.552 346.869C459.583 344.768 460.844 343.087 462.334 341.827C463.824 340.528 465.256 339.687 466.632 339.305C468.045 338.885 469.573 338.675 471.216 338.675C480.767 338.675 485.542 347.729 485.542 365.837C485.542 368.587 484.969 369.963 483.823 369.963H463.537C463.27 369.963 463.136 370.364 463.136 371.166C463.136 374.948 463.423 378.291 463.996 381.194C464.569 384.098 465.543 386.504 466.918 388.414C468.332 390.286 470.07 391.222 472.133 391.222C473.546 391.222 474.731 390.898 475.686 390.248C476.679 389.56 477.405 388.586 477.863 387.326C478.36 386.065 478.684 384.995 478.837 384.117C479.028 383.2 479.2 382.035 479.353 380.621C479.429 379.857 479.678 379.475 480.098 379.475H483.995C484.72 379.475 485.083 380.258 485.083 381.825V382.971Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M507.308 397.067C506.353 397.067 505.875 395.845 505.875 393.4V343.832C505.875 340.891 506.257 339.42 507.021 339.42H508.626C509.046 339.42 509.371 339.687 509.6 340.222C509.829 340.757 510.058 341.712 510.288 343.087L511.319 350.995C511.472 351.645 511.606 351.969 511.72 351.969C511.873 351.969 511.988 351.645 512.064 350.995C513.095 347.213 514.394 344.272 515.961 342.171C517.565 340.07 519.227 339 520.946 338.962H521.863C522.665 338.962 523.219 339.172 523.525 339.592C523.83 340.012 523.983 340.719 523.983 341.712V345.838C523.983 346.755 523.907 347.366 523.754 347.672C523.601 347.939 523.295 348.073 522.837 348.073C521.424 348.149 520.602 348.226 520.373 348.302C518.998 348.608 517.775 349.811 516.706 351.912C515.674 353.975 514.91 356.305 514.413 358.903C513.917 361.463 513.669 363.946 513.669 366.353V393.4C513.669 395.845 513.21 397.067 512.293 397.067H507.308Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M552.167 384.575C553.772 389.007 555.796 391.222 558.241 391.222C560.686 391.222 562.596 389.331 563.972 385.549C565.385 381.767 566.092 375.884 566.092 367.9C566.092 360.374 565.385 354.72 563.972 350.938C562.596 347.118 560.724 345.208 558.356 345.208C555.949 345.208 553.905 347.309 552.224 351.511C550.582 355.713 549.76 361.176 549.76 367.9C549.76 374.547 550.563 380.105 552.167 384.575ZM559.788 397.698C553.867 397.698 549.799 393.667 547.583 385.607C547.506 385.416 547.43 385.32 547.354 385.32C547.201 385.32 546.991 386.313 546.723 388.3C546.494 390.248 546.169 392.196 545.749 394.145C545.329 396.093 544.832 397.067 544.259 397.067H543.113C542.349 397.067 541.967 395.94 541.967 393.686V318.734C541.967 316.021 542.445 314.665 543.4 314.665H548.385C548.805 314.665 549.13 315.047 549.359 315.811C549.627 316.537 549.76 317.511 549.76 318.734V347.385C549.76 347.882 549.837 348.13 549.99 348.13L550.276 347.844C551.384 344.826 552.836 342.553 554.631 341.025C556.465 339.496 558.432 338.732 560.533 338.732C562.367 338.732 564.048 339.229 565.576 340.222C567.104 341.177 568.518 342.744 569.817 344.921C571.154 347.061 572.204 350.136 572.968 354.147C573.732 358.12 574.114 362.857 574.114 368.358C574.114 372.599 573.828 376.419 573.255 379.819C572.72 383.181 571.975 385.969 571.02 388.185C570.103 390.363 569.014 392.196 567.754 393.686C566.493 395.138 565.194 396.169 563.857 396.781C562.558 397.392 561.202 397.698 559.788 397.698Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M605.679 391.623C608.697 391.623 611.066 389.675 612.785 385.778C614.504 381.882 615.363 377.087 615.363 371.395C615.363 368.721 615.23 367.384 614.962 367.384C614.924 367.384 614.504 367.441 613.702 367.556C612.938 367.671 612.517 367.747 612.441 367.785C607.819 368.817 604.495 370.593 602.47 373.114C600.484 375.636 599.49 378.864 599.49 382.799C599.49 388.682 601.553 391.623 605.679 391.623ZM604.132 397.755C600.274 397.755 597.332 396.513 595.307 394.03C593.321 391.547 592.328 388.013 592.328 383.429C592.328 380.067 592.843 377.107 593.875 374.547C594.906 371.987 596.205 370.039 597.771 368.702C599.338 367.327 601.076 366.181 602.986 365.264C604.896 364.347 606.672 363.755 608.315 363.487C609.958 363.182 611.448 362.895 612.785 362.628C614.122 362.36 614.924 362.131 615.192 361.94V358.789C615.192 354.357 614.695 350.995 613.702 348.703C612.747 346.373 610.932 345.208 608.258 345.208C605.889 345.208 604.132 345.876 602.986 347.213C601.878 348.512 600.904 350.575 600.063 353.402C599.834 354.052 599.605 354.491 599.376 354.72C599.147 354.949 598.86 355.026 598.516 354.949C597.981 354.835 597.046 354.567 595.708 354.147C594.41 353.727 593.741 353.421 593.703 353.23C593.321 352.848 593.34 351.817 593.76 350.136C594.448 347.691 595.346 345.666 596.453 344.062C597.561 342.457 599.128 341.177 601.152 340.222C603.215 339.229 605.717 338.732 608.659 338.732C613.511 338.732 617.102 340.49 619.432 344.004C621.801 347.481 622.985 353.307 622.985 361.482V394.259C622.985 396.131 622.584 397.067 621.781 397.067H620.406C619.795 397.067 619.279 396.284 618.859 394.718C617.751 390.057 617.159 387.249 617.083 386.294C617.083 386.18 617.044 386.103 616.968 386.065C616.892 385.989 616.815 385.989 616.739 386.065C616.701 386.103 616.662 386.18 616.624 386.294C615.669 390 614.198 392.846 612.212 394.832C610.263 396.781 607.57 397.755 604.132 397.755Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M659.822 397.182C658.408 397.182 657.167 397.067 656.097 396.838C655.027 396.571 653.958 396.055 652.888 395.291C651.857 394.527 650.997 393.495 650.309 392.196C649.66 390.859 649.125 389.102 648.705 386.925C648.323 384.709 648.132 382.092 648.132 379.074V347.672C648.132 346.984 647.922 346.64 647.501 346.64H643.834C642.917 346.64 642.459 345.8 642.459 344.119V341.941C642.459 340.261 642.917 339.42 643.834 339.42H647.501C647.883 339.42 648.094 338.904 648.132 337.873L649.106 317.588C649.144 315.639 649.622 314.665 650.539 314.665H654.55C655.008 314.665 655.352 314.875 655.581 315.295C655.81 315.677 655.925 316.441 655.925 317.588V337.873C655.925 338.904 656.154 339.42 656.613 339.42H664.005C664.463 339.42 664.807 339.592 665.036 339.936C665.265 340.28 665.38 340.948 665.38 341.941V344.119C665.38 345.112 665.265 345.781 665.036 346.125C664.807 346.468 664.463 346.64 664.005 346.64H656.613C656.345 346.64 656.154 346.698 656.04 346.812C655.963 346.927 655.925 347.213 655.925 347.672V379.074C655.925 382.283 656.192 384.766 656.727 386.523C657.3 388.281 657.931 389.389 658.618 389.847C659.344 390.267 660.261 390.477 661.369 390.477H665.323C666.354 390.477 666.87 391.05 666.87 392.196V395.234C666.87 396.532 666.316 397.182 665.208 397.182H659.822Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M700.383 397.698H700.154C698.893 397.698 697.747 397.602 696.716 397.411C695.684 397.258 694.576 396.933 693.392 396.437C692.208 395.902 691.157 395.214 690.241 394.374C689.324 393.495 688.426 392.311 687.547 390.821C686.669 389.293 685.943 387.517 685.37 385.492C684.797 383.429 684.338 380.927 683.994 377.985C683.651 375.005 683.479 371.663 683.479 367.957C683.479 363.029 683.803 358.75 684.453 355.121C685.102 351.492 685.924 348.646 686.917 346.583C687.91 344.52 689.152 342.877 690.642 341.655C692.17 340.432 693.621 339.649 694.997 339.305C696.372 338.923 697.938 338.732 699.696 338.732C702.255 338.732 704.662 339.153 706.916 339.993C707.03 339.993 707.164 340.089 707.317 340.28C707.47 340.471 707.546 340.623 707.546 340.738V345.666C707.546 345.857 707.47 346.048 707.317 346.239C707.164 346.43 707.03 346.507 706.916 346.468C704.7 345.781 702.905 345.437 701.529 345.437C700.383 345.437 699.428 345.532 698.664 345.723C697.9 345.914 697.041 346.43 696.085 347.271C695.13 348.111 694.366 349.314 693.793 350.881C693.22 352.409 692.724 354.625 692.303 357.528C691.921 360.393 691.73 363.869 691.73 367.957C691.73 372.083 691.902 375.598 692.246 378.501C692.628 381.404 693.087 383.658 693.621 385.263C694.194 386.867 694.939 388.109 695.856 388.987C696.811 389.866 697.69 390.42 698.492 390.649C699.333 390.84 700.364 390.936 701.587 390.936C703.115 390.936 704.891 390.611 706.916 389.962C707.03 390 707.164 390.153 707.317 390.42C707.508 390.649 707.603 390.84 707.603 390.993V395.577C707.603 395.73 707.508 395.94 707.317 396.208C707.164 396.437 707.03 396.571 706.916 396.609C704.929 397.335 702.752 397.698 700.383 397.698Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
        <motion.path
          className='background-svg-path'
          d="M727.364 397.067C726.905 397.067 726.562 396.876 726.332 396.494C726.103 396.112 725.989 395.348 725.989 394.202V317.759C725.989 315.696 726.447 314.665 727.364 314.665H732.349C733.304 314.665 733.782 315.696 733.782 317.759V347.729C733.782 348.187 733.858 348.417 734.011 348.417C734.126 348.417 734.24 348.321 734.355 348.13C735.539 344.883 737.144 342.514 739.168 341.025C741.193 339.496 743.256 338.732 745.357 338.732C747.878 338.732 749.941 339.439 751.546 340.853C753.15 342.228 754.43 344.807 755.385 348.589C756.34 352.332 756.818 357.375 756.818 363.717V394.202C756.818 396.112 756.34 397.067 755.385 397.067H750.4C749.941 397.067 749.598 396.876 749.368 396.494C749.139 396.112 749.024 395.348 749.024 394.202V362.341C749.024 356.382 748.509 352.046 747.477 349.334C746.446 346.583 744.88 345.208 742.778 345.208C740.333 345.208 738.213 346.946 736.418 350.422C734.66 353.899 733.782 358.082 733.782 362.972V394.202C733.782 395.348 733.667 396.112 733.438 396.494C733.209 396.876 732.865 397.067 732.407 397.067H727.364Z"
          fill={svgColor}
          fillOpacity="0.13"
          transition={{duration: 1.5, ease: 'easeInOut'}}
          animate={{fill: svgColor}}
        />
      </motion.svg>
    </div>
  )

}