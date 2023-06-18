import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Categories, Favorites, Home, NotFound, DetailPage, MovieGridPage } from '@pages'
import { Footer, Layout } from '@components'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:category" element={<MovieGridPage />} />
            <Route path="/movies/:category/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <Footer />
      </BrowserRouter>
    </>
  )
}
