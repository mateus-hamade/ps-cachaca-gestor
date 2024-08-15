import googleIcon    from '../assets/icons/google-48.png'
import microsoftIcon from '../assets/icons/microsoft-48.png'

const googleButton = { 
  style: "flex justify-around w-full shadow-sm rounded px-4 py-1 text-white bg-primary-light hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-1 ring-primary transition-all",
  name: "Entrar com o Google",
  image: googleIcon 
}

const microsoftButton = {
  style: "flex justify-around w-full shadow-sm rounded px-4 py-1 text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-1 ring-blue-400 transition-all",
  name: "Entrar com a Microsoft",
  image: microsoftIcon
}

const defaultButton = {
  style: "w-full shadow-sm rounded px-4 py-1 text-white bg-secondary hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-1 ring-secondary transition-all",
  name: "Entrar"
}

export { googleButton, microsoftButton, defaultButton }