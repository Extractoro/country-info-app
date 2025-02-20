import {Link, useParams} from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import {useCountryInfo} from "../../services/countryService.ts";
import {CountryData} from "../../interfaces/CountryInfo.ts";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Country = () => {
    const { id, name } = useParams<string>();
    const { data, error, isLoading } = useCountryInfo(id!, name!);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!data || !data.populationData || !Array.isArray(data.populationData.data.populationCounts)) {
        return <p>Error: Invalid data format</p>;
    }

    const country = data as CountryData;

    const chartData = {
        labels: country.populationData.data.populationCounts.map((data) => data.year),
        datasets: [
            {
                label: "Population",
                data: country.populationData.data.populationCounts.map((data) => data.value),
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
                <img src={country.flagUrl} alt={country.name} className="w-32 h-20 mr-5 shadow-2xl" />
                <h1 className="text-3xl font-semibold">{country.name}</h1>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Population Chart</h3>
                <Line data={chartData} options={{ responsive: true }} />
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Bordering Countries</h3>
                <ul className="list-none p-0">
                    {country.borderCountries.length > 0 ? (
                        country.borderCountries.map((border) => (
                            <li key={border.countryCode} className="py-2">
                                <Link to={`/country/${border.countryCode}/${border.commonName}`} className="text-blue-500 hover:text-blue-700">
                                    {border.commonName}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No bordering countries</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Country;
