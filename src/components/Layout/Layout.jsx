import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss'
import { Container } from 'react-bootstrap';
const Layout = () => {
  return (
    <Container fluid className="root-layout p-0">
      <Header />
      <main className='main-container'>
        <Outlet />
      </main>
      <Footer />
    </Container>
  )
}

export default Layout
