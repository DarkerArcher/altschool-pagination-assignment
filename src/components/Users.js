import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Loading from "./Loading";
import './styles/Users.css'

function Users() {
    const [page, setPage] = useState(1)
    const { loading, error, data } = useFetch(
        `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
    );

    const pages = 10;

    let navigate = useNavigate()
    
    const handleNavigateHome = (event) => {
        event.preventDefault();
        navigate("/");
    };

    if (loading) {
        return <Loading />
    }

    if (!loading && error) {
        return <>Error</>
    }

    function nextButton() {
        setPage((prev) => prev + 1)
    };

    function prevButton() {
        setPage((prev) => prev - 1)
    }


    return (
        <div className="user-container">
            <h1 className="user-title">User Database</h1>
            {data?.results.map((each, index) => {
                const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
                return (
                    <li key={name.toLowerCase().replaceAll(" ", "")}>{`${index + 1}.${name}`}</li>
                );
            })}
            <p className="pagination">
                Page {page} of {pages}
            </p>
            <section className="page-btns">
                {
                    <button className="nav-btn" disabled={page <= 1} onClick={prevButton}>
                        Previous
                    </button>
                }
                {Array.from({ length: pages }, (value, index) => index + 1).map(
                    (each) => (
                        <button className="num-btn" onClick={() => setPage(each)} disabled={page === each}>{each}</button>
                    )
                )}
                {
                    <button className="nav-btn" disabled={page >= pages} aria-disabled={page >= pages} onClick={nextButton}>
                        Next
                    </button>
                }
                {
                    <button className="nav-btn" onClick={handleNavigateHome}>
                        Back to Home Page
                    </button>
                }
            </section>
        </div>
    )
}

export default Users;