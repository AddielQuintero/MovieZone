import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Categories, Favorites, Home, Login, NotFound, Popular, Trending, Upcoming } from '@pages'
import { NavBar } from '@components'
import { navigation } from '@types'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar navigation={navigation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
