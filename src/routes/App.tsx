import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Categories, Favorites, Home, NotFound, MovieDetailPage, MovieGridPage } from '@pages'
import { Footer, Layout } from '@components'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movies/:category" element={<MovieGridPage />} />
            <Route path='/search/:keyword' element={<MovieGridPage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

        <Footer />
      </BrowserRouter>
    </>
  )
}
