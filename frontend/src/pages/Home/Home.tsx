import {useCountries} from "../../services/countryService.ts";
import {Link} from "react-router-dom";

const Home = () => {
    const {data: countries, error, isLoading} = useCountries()

    if (isLoading) return <p className='my-5'>Loading...</p>;
    if (error) return <p className='my-5'>Error: {error.message}</p>;

    const sortedCountries: {
        countryCode: string,
        name: string
    }[] = [...countries].sort((a, b) => a.name.localeCompare(b.name))

    return (
        <section className='my-5'>
            <ul className='grid grid-cols-2 gap-4 items-center sm:grid-cols-4 sm:gap-6 sm:justify-items-center lg:grid-cols-5 '>
                {sortedCountries.map((country: { countryCode: string, name: string }) => (
                    <li key={country.countryCode} className='flex w-full h-full text-center items-center justify-center'>
                        <Link
                            className='flex items-center justify-center text-center bg-gray-100 w-full h-full p-3 rounded'
                            to={`/country/${country.countryCode}/${country.name}`}
                        >
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
export default Home
