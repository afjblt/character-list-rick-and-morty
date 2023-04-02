import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'

export default function usePagination() {
    const location = useLocation()
    const navigate = useNavigate()

    const [actualPage, setActualPage] = useState(
        getActualPage() || 1
    )

    function getActualPage() {
        const queryParams = queryString.parse(location.search)
        const page = queryParams.page

        return page ? Number(page) : undefined
    }

    useEffect(() => {
        navigate(`/?page=${actualPage}`)
    }, [actualPage])

    return {
        setActualPage,
        actualPage
    }
}