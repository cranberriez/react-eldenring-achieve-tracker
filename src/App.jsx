import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      <Navbar page={page} setPage={setPage}>
        <button onClick={() => setPage(0)}>One</button>
        <button onClick={() => setPage(1)}>Two</button>
        <button onClick={() => setPage(2)}>Three</button>
        <button onClick={() => setPage(3)}>Four</button>
      </Navbar>
      <Content page={page} setPage={setPage}>
        <Page>Page One</Page>
        <Page>Page Two</Page>
        <Page>Page Three</Page>
      </Content>
    </>
  )
}

function Navbar(props) {
  const { page, setPage, children } = props;

  return (
      <div className={'Navbar'}>
        { children }
      </div>
  )
}

function Content(props) {
  const { page, setPage, children } = props;

  return (
      <div className={'Content'}>
        { children[page] ?? 'Page Not Available' }
      </div>
  )
}

function Page(props) {
  const { children } = props;

  return (
      <div className={'Page'}>
        { children }
      </div>
  )
}

export default App
