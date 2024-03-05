import { Route, Routes } from "react-router-dom"
import { CategoriesPage } from "../pages/CategoriesPage"
import { ResourcesPage } from "../pages/ResourcesPage"


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<CategoriesPage />} />
            <Route path="/*" element={<CategoriesPage />} />

            <Route path="/:category" element={<ResourcesPage />} />
        </Routes>
    </>
  )
}
