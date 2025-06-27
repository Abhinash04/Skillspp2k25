import { useEffect, useState } from "react";
import { allDomains } from "./allDomains";

export default function Domains() {
    const [selectedDomain, setSelectedDomain] = useState("All Domains");
    const [filteredDomains, setFilteredDomains] = useState([]);
    let options = [
        "All Domains",
        "Software Domain",
        "Hardware Domain",
        "Design Domain",
    ];

    useEffect(() => {
        filterDomains();
    }, []);

    const handleFilterOnChange = (event) => {
        setSelectedDomain(event.target.value);
    };

    const filterDomains = () => {
        let temp;
        if (selectedDomain === "All Domains") {
            temp = allDomains;
        } else {
            temp = allDomains.filter(
                (domain) =>
                    domain.category.toLowerCase() === selectedDomain.toLowerCase()
            );
        }
        setFilteredDomains(temp);
    };

    useEffect(() => {
        filterDomains();
    }, [selectedDomain]);


    return (
        <div className="domains-wrapper">
            <div className="topic-head">Explore Domains</div>
            <div className="domains-desc blue-head">Get Ready To Be Skilled++</div>
            <div className="all-domains">
                <div id="section5item1" className="sm:text-lg">
                    <div id="text">Navigate the Future</div>
                    <div>
                        <select id="dropdown-menu" onChange={handleFilterOnChange}>
                            {options.map((category, idx) => (
                                <option value={category} key={`options-${idx}`}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div id="section5item2">
                    <div id="section5foldercontainer">
                        {filteredDomains.map((domain, idx) => (
                            <div id="section5folders" key={`Domains-${idx}`}>
                                <a href={domain.link} target="_blank" style={{ textDecoration: 'none' }}>
                                    <figure style={{ cursor: "pointer" }}>
                                        <img
                                            className="img-hover-desc"
                                            src={domain.image}
                                            alt={domain.category}
                                        />
                                        <figcaption className="text-white" style={{ opacity: "0.7" }}>{domain.name}</figcaption>
                                    </figure>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}