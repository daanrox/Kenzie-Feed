import { GlobalStyles } from './styles/Globalstyles'
import { RoutesMain } from './routes'
import { ShowAllNewsProvider } from './providers/ShowAllNewsProvider'
import { AddPostProvider } from './providers/AddPostProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const App = () => {  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <GlobalStyles />
      <ShowAllNewsProvider>
        <AddPostProvider>
          <RoutesMain/>
        </AddPostProvider>
      </ShowAllNewsProvider>
    </>
  )
}