import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import CheckEligibility from "./Pages/CheckEligibility/CheckEligibility";
import Home from "./Pages/Home/Home";


export default function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="check-eligibility" element={<CheckEligibility />} />
                </Route>
            </ReactRoutes>
        </BrowserRouter>
    )
}
