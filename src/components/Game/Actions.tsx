import React from "react";

type Props = {
  text: string
  test: string
  handleOnTestAllClick: () => void;
  handleOnClickSubmit: () => void;
  handleOnClickSkip: () => void;
  handleOnClickTips: () => void;
};

const actionButton = (callback: any, text: string, image:any) => {
  return (
    <>
      <button
        onClick={callback}
        className='flex flex-row overflow-hidden whitespace-nowrap xl:p-2 md:p-1 max-h-fit max-w-fit text-yellow-500 font-semibold hover:text-yellow-300 border border-background hover:border-transparent rounded transition-all duration-300 mt-2 text-left rounded-2xl bg-gameComps shadow-lg shadow-yellow-900 transform hover:scale-125'
      >
        {text}
        {image}
      </button>
    </>
  );
};

const Actions = (props: Props) => {
  return (
    <div className='flex flex-row sm:flex-col justify-evenly items-center h-full'>
      {/*{actionButton(props.handleOnTestAllClick, "Test alle")}*/}
      <div
        className='flex flex-row cursor-pointer'
      >
        {actionButton(props.handleOnClickTips, "Tips",
        <svg
          width='32px'
          height='32px'
          viewBox='0 0 36 36'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          className='iconify iconify--twemoji'
          preserveAspectRatio='xMidYMid meet'
          fill='#000000'
        >
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fill='#FA743E'
              d='M27 22H9s-9 0-9 7c0 3.156 4 7 4 7h28s4-3.844 4-7c0-7-9-7-9-7z'
            ></path>
            <path
              fill='#963B22'
              d='M21.906 4.262c-2.02-.654-6.772-.475-7.96 1.069c-3.089.059-6.713 2.851-7.188 6.535c-.47 3.645.578 5.338.951 8.079c.422 3.106 2.168 4.099 3.564 4.515C13.281 27.114 15.415 27 19 27c7 0 10.334-4.684 10.629-12.639c.178-4.811-2.645-8.456-7.723-10.099z'
            ></path>
            <circle fill='#CC9B7A' cx='18' cy='28' r='3'></circle>
            <path
              fill='#D4AB88'
              d='M25.89 15.686c-.677-.938-1.545-1.693-3.445-1.96c.713.327 1.396 1.455 1.485 2.079c.089.624.178 1.129-.386.505c-2.261-2.499-4.723-1.515-7.163-3.041c-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03c-.357 1.099-.246 2.079-.246 3.754c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.318-4.23-1.091-5.299zM17 34l-5-1l-2-1H7l-1 4h11c1 0 1-1 1-1c0-.553-1-1-1-1zm9-2l-2 1l-5 1s-1 .447-1 1c0 0 0 1 1 1h11l-1-4h-3z'
            ></path>
            <path
              fill='#662113'
              d='M22 22a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm-8 0a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1z'
            ></path>
            <path
              fill='#C1694F'
              d='M19 26.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z'
            ></path>
            <path
              d='M5.499 8a.994.994 0 0 1-.599-.2l-4-3a1 1 0 0 1 1.2-1.6l4 3A1 1 0 0 1 5.499 8zm3.002-3a1 1 0 0 1-.833-.445l-2-3A1 1 0 0 1 7.332.445l2 3A1.001 1.001 0 0 1 8.501 5zm22 3a1 1 0 0 1-.601-1.8l4-3a1 1 0 1 1 1.199 1.6l-4 3a.99.99 0 0 1-.598.2zm-3.002-3a1 1 0 0 1-.831-1.555l2-3a1 1 0 1 1 1.664 1.11l-2 3a1 1 0 0 1-.833.445z'
              fill='#5DADEC'
            ></path>
          </g>
        </svg>)}
      </div>
      <div className='flex flex-row cursor-pointer'>
        {actionButton(props.handleOnClickSkip, "Skip",
        <svg
          width='36px'
          height='36px'
          viewBox='0 0 36 36'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          className='iconify iconify--twemoji'
          preserveAspectRatio='xMidYMid meet'
          fill='#000000'
        >
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path fill='#FA743E' d='M27 27H10v9h21v-5a4 4 0 0 0-4-4z'></path>
            <path
              fill='#963B22'
              d='M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069c-3.089.059-6.713 2.851-7.188 6.535c-.47 3.645.578 5.338.951 8.079c.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639c.178-4.812-2.645-8.456-7.723-10.099z'
            ></path>
            <path fill='#D4AB88' d='M15 22v6a3 3 0 1 0 6 0v-6h-6z'></path>
            <path
              fill='#D4AB88'
              d='M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96c.713.327 1.396 1.455 1.485 2.079c.089.624.178 1.129-.386.505c-2.26-2.499-4.722-1.515-7.162-3.041c-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z'
            ></path>
            <path fill='#963B22' d='M12.737 5.97h2.75v3.89h-2.75z'></path>
            <path
              fill='#C1694F'
              d='M19 19.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1z'
            ></path>
            <path
              fill='#DD551F'
              d='M18.734 18.386l1.827.691s-6.529 13.746-7.413 15.022c-.884 1.276-1.87 2.055-4.57 1.76l10.156-17.473zM26 32h1v4h-1z'
            ></path>
            <path
              fill='#DD551F'
              d='M14.984 28.391s-2.359 4.422-2.865 5.335c-.276.497-1.305 2.009-2.322 2.009c0 0 2.214.122 3.122-1.682a141.601 141.601 0 0 1 2.425-4.646s-.125-.328-.203-.484c-.118-.235-.157-.532-.157-.532z'
            ></path>
            <path
              fill='#662113'
              d='M24.157 16.371c-.026-.058-.596-1.288-1.747-1.529l-.49 1.395c.037-.001.063-.009.101-.009c1.162 0 1.76.422 1.774.432a.241.241 0 0 0 .292-.005a.24.24 0 0 0 .07-.284z'
            ></path>
            <path
              fill='#B78B60'
              d='M22.646 8.125l-3.774-1.324a2 2 0 0 0-2.549 1.225l-.756 2.155l-.284-1.14c-.172-.687-.825-1.486-1.77-1.195c-.677.208-.891 1.127-.719 1.815l1.226 4.929l-.345.984l.613 1.275l5.662 1.986c.944.331 1.275-.613 1.275-.613l.696-1.985l.49-1.395l1.462-4.168a2.002 2.002 0 0 0-1.227-2.549z'
            ></path>
            <path
              fill='#4F140B'
              d='M22.021 14.792c-1.417 0-2.107 1.515-2.136 1.58a.238.238 0 0 0 .069.283c.084.068.204.07.292.007c.005-.004.578-.397 1.673-.423l.49-1.395a1.79 1.79 0 0 0-.388-.052z'
            ></path>
            <path
              fill='#D4AB88'
              d='M12.513 7.657a1.284 1.284 0 0 1 1.555.934l.284 1.14l.756-2.155a2 2 0 0 1 2.549-1.225l3.774 1.324a2 2 0 0 1 1.225 2.549l-2.648 7.549s-.331.944-1.275.613L13.072 16.4l-.613-1.275l.345-.984l-1.226-4.929a1.283 1.283 0 0 1 .935-1.555z'
            ></path>
            <path
              fill='#B78B60'
              d='M18.743 12.054l1.655-4.718l.944.331l-1.655 4.718zm-2.83-.993l1.656-4.718l.943.331l-1.655 4.718z'
            ></path>
            <path
              fill='#C1694F'
              d='M20.995 23.364s-.56-1.117-1.678-1.681c-.246.514-.516 1.078-.807 1.681h2.485z'
            ></path>
            <path
              fill='#B78B60'
              d='M18.734 18.386l-1.9 3.234l-1.024 1.744l-1.16 1.974L15 28c0 .594.178 1.144.476 1.61c.98-1.986 2.097-4.295 3.035-6.246l.807-1.681c.741-1.547 1.244-2.606 1.244-2.606l-1.828-.691z'
            ></path>
            <path
              fill='#662113'
              d='M19.317 21.683a2.896 2.896 0 0 0-1.322-.319c-.438 0-.819.107-1.161.256l-1.024 1.744h2.701l.806-1.681z'
            ></path>
            <path
              fill='#FA743E'
              d='M14.278 29.85s-1.719 3.579-2.107 4.416C11.484 35.75 10 36 10 36c-8 0-3.622-8.343-3.622-8.343l6.432-11.846l6.541 2.58l-5.073 11.459z'
            ></path>
          </g>
        </svg>)}
      </div>

      <div className='flex flex-row cursor-pointer'>
        {actionButton(props.handleOnClickSubmit, "Fullfør",
        <svg
          width='36px'
          height='36px'
          viewBox='0 0 36 36'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
          role='img'
          className='iconify iconify--twemoji'
          preserveAspectRatio='xMidYMid meet'
          fill='#000000'
        >
          <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path fill='#FA743E' d='M26 26.163l.017.836H6V36h24v-9.835z'></path>
            <path
              fill='#D4AB88'
              d='M13.862 26.999s.85 2.063 3.55 2.063s3.45-2.063 3.45-2.063l-.024-3.9l-6.976-.1v4z'
            ></path>
            <path
              fill='#CC9B7A'
              d='M13.881 25.029c1.058 1.207 2.049 1.51 3.477 1.51c1.426 0 2.426-.304 3.485-1.51v-3.515h-6.961v3.515z'
            ></path>
            <path
              fill='#963B22'
              d='M20.591 5.419c-1.666-.539-5.587-.392-6.567.882c-2.548.049-5.538 2.352-5.93 5.391c-.388 3.008.476 4.404.784 6.666c.348 2.562 1.789 3.382 2.941 3.725c1.657 2.189 3.418 2.095 6.375 2.095c5.775 0 8.525-3.864 8.769-10.427c.146-3.97-2.183-6.976-6.372-8.332z'
            ></path>
            <path
              fill='#D4AB88'
              d='M23.894 14.031c-.559-.774-1.274-1.397-2.843-1.617c.588.27 1.152 1.201 1.225 1.715c.074.515.147.931-.319.417c-1.865-2.062-3.896-1.25-5.909-2.509c-1.406-.88-1.834-1.853-1.834-1.853s-.172 1.299-2.303 2.622c-.618.384-1.355 1.238-1.764 2.499c-.294.907-.203 1.715-.203 3.097c0 4.034 3.324 7.425 7.425 7.425s7.425-3.421 7.425-7.425c0-2.508-.263-3.489-.9-4.371z'
            ></path>
            <path
              fill='#C1694F'
              d='M17.359 23.566c-2.396 0-3.132-.62-3.256-.745a.582.582 0 0 1 0-.815a.568.568 0 0 1 .786-.02c.045.032.627.428 2.47.428c1.915 0 2.466-.426 2.472-.431a.554.554 0 0 1 .796.014c.223.225.21.6-.013.824c-.123.125-.858.745-3.255.745m.835-3.101h-1.65a.411.411 0 1 1 0-.824h1.65a.411.411 0 1 1 0 .824z'
            ></path>
            <path
              fill='#662113'
              d='M14.069 17.578a.825.825 0 0 1-.825-.825v-.825a.825.825 0 1 1 1.65 0v.825c0 .455-.37.825-.825.825zm6.6 0a.825.825 0 0 1-.825-.825v-.825a.825.825 0 1 1 1.65 0v.825c0 .455-.37.825-.825.825z'
            ></path>
            <path
              fill='#D1D3D4'
              d='M5.895 14.205s-3.834 1.39-4.214 6.221c0 0-2.4-4.817-.522-10.149l4.736 3.928zm14.156-8.228s-2.758-3.005-7.363-1.497c0 0 3.522-4.069 9.167-4.387l-1.804 5.884zm9.22 10.36s1.972-3.571-.923-7.457c0 0 4.978 2.046 7.075 7.296l-6.152.161z'
            ></path>
            <circle fill='#5C913B' cx='4.603' cy='10.986' r='3.5'></circle>
            <circle fill='#BE1931' cx='22.516' cy='3.5' r='3.5'></circle>
            <circle fill='#3B88C3' cx='32.396' cy='17.854' r='3.5'></circle>
            <path
              fill='#CC9B7A'
              d='M32.646 23.488a.991.991 0 0 0-1.169-.774l-2.057.431h-1.809c-.85 0-1.538.695-1.538 1.555v1.552h3.847c.83 0 1.503-.666 1.532-1.496l.273-.057h.503c0-.059-.022-.113-.035-.169a.999.999 0 0 0 .453-1.042z'
            ></path>
            <path
              fill='#D4AB88'
              d='M36.075 23.921a.772.772 0 0 0-.77-.776l-4.616.776h-3.847a.774.774 0 0 0-.77.778L26 26.25l1.611.002h3.078l4.616-1.553c.001 0 .77-.348.77-.778z'
            ></path>
            <path
              fill='#CC9B7A'
              d='M3.43 27.236a.99.99 0 0 1 1.168-.774l2.058.431h1.808c.85 0 1.539.695 1.539 1.555V30H6.155c-.83 0-1.503-.666-1.532-1.496l-.273-.057h-.503c0-.059.022-.113.036-.169a.996.996 0 0 1-.453-1.042z'
            ></path>
            <path
              fill='#D4AB88'
              d='M0 27.669c0-.429.344-.776.769-.776l4.617.776h3.847c.425 0 .769.349.769.778V30H5.386L.769 28.447S0 28.099 0 27.669z'
            ></path>
            <path fill='#DD551F' d='M10 30h1v6h-1zm15-3h1v9h-1z'></path>
          </g>
        </svg>)}
      </div>
      {/*{actionButton(props.handleOnResetClick, "Nullstill")}*/}
    </div>
  );
};

export default Actions;
