import '@/i18n';
import 'styles/global.scss';
import Layout from '@/layout';
import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from 'components/context/app.context';
import Loading from './components/sections/loading';

//lazy(() => import(...)) tells React “load this file only when needed”
const HomePage = lazy(() => import('pages/home'));
const ProjectPage = lazy(() => import('pages/project'));
const NotFound = lazy(() => import('pages/notfound'));
// const AboutPage = lazy(() => import('pages/about'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    //displays loading spinner while the page loads
                    <Suspense fallback={<Loading />}>
                        <HomePage />
                    </Suspense>
                )
            },
            {
                path: "/project",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ProjectPage />
                    </Suspense>
                )
            },
            // {
            //     path: "/about",
            //     element: (
            //         <Suspense fallback={<Loading />}>
            //             <AboutPage />
            //         </Suspense>
            //     )
            // },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }

]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    </StrictMode>,
)
